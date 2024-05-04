import { cache } from 'react';
import { TOKEN } from './env';
import {
  Application,
  DevConsolePartnersDaily,
  EmptyResult,
  JobResult,
  QueryResult,
  RevenueStatisticsDashboard,
  Widget
} from './types';

import 'server-only';

// https://nextjs.org/docs/app/building-your-application/data-fetching/caching#react-cache
const jsonFetch = cache(async <T>(props: string) => {
  const { url, id, appId, daysBack } = JSON.parse(props) as {
    url: string;
    id?: number;
    appId?: string;
    daysBack?: string;
  };
  for (let i = 0; i < 60; i++) {
    const body: { id: number; parameters: Record<string, string> } | undefined =
      appId && id ? { id: id, parameters: { app_id: appId } } : undefined;
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
    let data;
    if (
      response.headers.get('content-type')?.includes('application/json') ===
      false
    ) {
      data = { body: await response.text() } as T;
    } else {
      data = (await response.json()) as T;
    }
    if (
      !response.ok ||
      'job' in (data as any) ||
      Object.keys(data as any).length === 0
    ) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } else {
      return data;
    }
  }
  throw new Error(JSON.stringify({ url, error: 'Timed out' }));
});

export async function getApps() {
  return await jsonFetch<Application[]>(
    JSON.stringify({
      url: 'https://console-be.overwolf.com/applications?filter=%7B%7D&range=%5B0%2C9%5D&sort=%5B%22id%22%2C%22ASC%22%5D'
    })
  );
}
export async function getDashboardRevenue() {
  return await jsonFetch<RevenueStatisticsDashboard>(
    JSON.stringify({
      url: 'https://console-be.overwolf.com/redash/api/dashboards/public/revenue'
    })
  ).then((data) => data.widgets);
}

export async function getDashboardKPIs() {
  return await jsonFetch<DevConsolePartnersDaily>(
    JSON.stringify({
      url: 'https://console-be.overwolf.com/redash/api/dashboards/public/kpis'
    })
  ).then((data) => data.widgets);
}

export async function getDashboardPerformance() {
  return await jsonFetch<DevConsolePartnersDaily>(
    JSON.stringify({
      url: 'https://console-be.overwolf.com/redash/api/dashboards/public/performance'
    })
  ).then((data) => data.widgets);
}

async function getWidgetData(widget: Widget, appId: string) {
  const body: {
    parameters: {
      app_id: string;
      'Days back'?: string;
    };
  } = { parameters: { app_id: appId } };
  if (!widget.visualization) {
    throw new Error(`Widget ${widget.id} has no visualization`);
  }
  const daysBack = (
    widget.visualization.query.options
      .parameters as RevenueStatisticsDashboard['widgets'][0]['visualization']['query']['options']['parameters']
  ).find((parameter) => parameter.name === 'Days back');
  const widgetData = await jsonFetch<JobResult | EmptyResult | QueryResult>(
    JSON.stringify({
      url: `https://console-be.overwolf.com/redash/api/queries/${widget.visualization.query.id}/results`,
      appId,
      daysBack: daysBack?.value,
      id: widget.visualization.query.id
    })
  );

  if ('query_result' in widgetData) {
    const options = widget.visualization.options;
    const queryResult = {
      ...widgetData.query_result,
      data: {
        ...widgetData.query_result.data,
        rows: [...widgetData.query_result.data.rows]
      }
    };
    // Reduce the data to what we need
    switch (widget.visualization?.type) {
      case 'COUNTER':
        {
          const colName = options.targetColName ?? options.counterColName!;
          queryResult.data.rows = queryResult.data.rows
            .map((row: any) => ({
              [colName]: row[colName]
            }))
            .slice(0, 2);
        }
        break;
      case 'CHART':
        {
          const columnMapping = Object.entries(options.columnMapping!);
          const x = columnMapping.find(([, value]) => value === 'x')![0];
          const categories = columnMapping
            .filter(([, value]) => value === 'y')
            .map(([key]) => key);
          queryResult.data.rows = queryResult.data.rows.map((row: any) => ({
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
    return queryResult;
  }
  throw new Error(
    JSON.stringify({
      id: widget.visualization.query.id,
      appId,
      widgetData,
      body
    })
  );
}

export const getWidget = (widget: Widget, appId: string) => {
  return getWidgetData(widget, appId);
};
