import {
  DevConsolePartnersDaily,
  EmptyResult,
  JobResult,
  QueryResult,
  RevenueStatisticsDashboard,
  Widget
} from './types';

async function jsonFetch<T>(url: string, token: string, body?: object) {
  const response = await fetch(url, {
    method: body ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `token=${token}`
    },
    body: body ? JSON.stringify(body) : undefined,
    next: { revalidate: 60 }
  });
  const data = (await response.json()) as T;

  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }
  return data;
}

export async function getDashboardRevenue(token: string) {
  return await jsonFetch<RevenueStatisticsDashboard>(
    'https://console-stats.overwolf.com/api/dashboards/public/revenue',
    token
  );
}

export async function getDashboardKPIs(token: string) {
  return await jsonFetch<DevConsolePartnersDaily>(
    'https://console-stats.overwolf.com/api/dashboards/public/kpis',
    token
  );
}

export async function getWidgets(token: string) {
  return (
    await Promise.all([
      getDashboardRevenue(token).then((data) => data.widgets),
      getDashboardKPIs(token).then((data) => data.widgets)
    ])
  ).flat() as Widget[];
}

export async function getWidgetData(
  widget: Widget,
  appName: string,
  token: string
) {
  const body: {
    parameters: {
      app_name: string;
      'Days back'?: string;
    };
  } = { parameters: { app_name: appName } };

  if ('Days back' in widget.options.parameterMappings) {
    body.parameters['Days back'] = 'Last 30';
  }
  const widgetData = await jsonFetch<JobResult | EmptyResult | QueryResult>(
    `https://console-stats.overwolf.com/api/queries/${widget.visualization.query.id}/results`,
    token,
    body
  );

  if ('job' in widgetData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return getWidgetData(widget, appName, token);
  }
  if ('query_result' in widgetData) {
    return widgetData;
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return getWidgetData(widget, appName, token);
}
