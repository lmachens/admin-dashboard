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

const jsonFetch = async <T>(
  url: string,
  appName?: string,
  daysBack?: string
) => {
  const body: { parameters: Record<string, string> } | undefined = appName
    ? { parameters: { app_name: appName } }
    : undefined;
  if (daysBack && body) {
    body.parameters['Days back'] = daysBack;
  }
  const response = await fetch(url, {
    method: body ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `token=${TOKEN}`
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const data = (await response.json()) as T;

  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }
  return data;
};
export async function getDashboardRevenue() {
  return await jsonFetch<RevenueStatisticsDashboard>(
    'https://console-stats.overwolf.com/api/dashboards/public/revenue'
  ).then((data) => data.widgets);
}

export async function getDashboardKPIs() {
  return await jsonFetch<DevConsolePartnersDaily>(
    'https://console-stats.overwolf.com/api/dashboards/public/kpis'
  ).then((data) => data.widgets);
}

export async function getDashboardPerformance() {
  return await jsonFetch<DevConsolePartnersDaily>(
    'https://console-stats.overwolf.com/api/dashboards/public/performance'
  ).then((data) => data.widgets);
}

async function getWidgetData(widget: Widget, appName: string, retries = 0) {
  const body: {
    parameters: {
      app_name: string;
      'Days back'?: string;
    };
  } = { parameters: { app_name: appName } };
  if (!widget.visualization) {
    throw new Error(`Widget ${widget.id} has no visualization`);
  }
  const daysBack = (
    widget.visualization.query.options
      .parameters as RevenueStatisticsDashboard['widgets'][0]['visualization']['query']['options']['parameters']
  ).find((parameter) => parameter.name === 'Days back');
  const widgetData = await jsonFetch<JobResult | EmptyResult | QueryResult>(
    `https://console-stats.overwolf.com/api/queries/${widget.visualization.query.id}/results`,
    appName,
    daysBack?.value
  );

  if ('job' in widgetData && retries < 10) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return getWidgetData(widget, appName, retries + 1);
  }
  if ('query_result' in widgetData) {
    const options = widget.visualization.options;
    // Reduce the data to what we need
    switch (widget.visualization?.type) {
      case 'COUNTER':
        {
          const colName = options.targetColName ?? options.counterColName!;
          widgetData.query_result.data.rows =
            widgetData.query_result.data.rows.map((row: any) => ({
              [colName]: row[colName]
            }));
        }
        break;
      case 'CHART':
        {
          const columnMapping = Object.entries(options.columnMapping!);
          const x = columnMapping.find(([, value]) => value === 'x')![0];
          const categories = columnMapping
            .filter(([, value]) => value === 'y')
            .map(([key]) => key);
          widgetData.query_result.data.rows =
            widgetData.query_result.data.rows.map((row: any) => ({
              ...categories.reduce(
                (acc, cur) => ({ ...acc, [cur]: row[cur] }),
                {}
              ),
              [x]: row[x]
            }));
        }

        break;
      case 'COHORT':
      case 'TABLE':
        break;
    }
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
