import { cache } from 'react';
import { TOKEN } from './env';
import {
  DevConsolePartnersDaily,
  EmptyResult,
  JobResult,
  QueryResult,
  RevenueStatisticsDashboard,
  Widget
} from './types';

import 'server-only';

const jsonFetch = cache(async <T>(url: string, body?: object) => {
  const response = await fetch(url, {
    method: body ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `token=${TOKEN}`
    },
    body: body ? JSON.stringify(body) : undefined,
    next: { revalidate: 60 }
  });
  const data = (await response.json()) as T;

  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }
  return data;
});

export async function getDashboardRevenue() {
  return await jsonFetch<RevenueStatisticsDashboard>(
    'https://console-stats.overwolf.com/api/dashboards/public/revenue'
  );
}

export async function getDashboardKPIs() {
  return await jsonFetch<DevConsolePartnersDaily>(
    'https://console-stats.overwolf.com/api/dashboards/public/kpis'
  );
}

export async function getDashboardPerformance() {
  return await jsonFetch<DevConsolePartnersDaily>(
    'https://console-stats.overwolf.com/api/dashboards/public/performance'
  );
}

export const getWidgets = async () => {
  return (
    await Promise.all([
      getDashboardRevenue().then((data) => data.widgets),
      getDashboardKPIs().then((data) => data.widgets),
      getDashboardPerformance().then((data) => data.widgets)
    ])
  ).flat() as Widget[];
};

async function getWidgetData(widget: Widget, appName: string) {
  const body: {
    parameters: {
      app_name: string;
      'Days back'?: string;
    };
  } = { parameters: { app_name: appName } };

  const daysBack = widget.visualization.query.options.parameters.find(
    (parameter) => parameter.name === 'Days back'
  );
  if (daysBack) {
    body.parameters['Days back'] = daysBack.value;
  }
  const widgetData = await jsonFetch<JobResult | EmptyResult | QueryResult>(
    `https://console-stats.overwolf.com/api/queries/${widget.visualization.query.id}/results`,
    body
  );

  if ('job' in widgetData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return getWidgetData(widget, appName);
  }
  if ('query_result' in widgetData) {
    return widgetData;
  }
  throw new Error(
    JSON.stringify({
      id: widget.visualization.query.id,
      appName,
      widgetData,
      body
    })
  );
}

export const getWidget = (widget: Widget, appName: string) => {
  return getWidgetData(widget, appName);
};
