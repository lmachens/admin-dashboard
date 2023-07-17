import { Card, Text, Title } from '@tremor/react';
import { cookies } from 'next/headers';
import { getWidgetData } from './api';
import Counter from './counter';
import { Widget as WidgetType } from './types';

export default async function Widget({ widget }: { widget: WidgetType }) {
  const cookieStore = cookies();
  const apps = JSON.parse(cookieStore.get('apps')?.value ?? '[]') as string[];
  const token = cookieStore.get('token')?.value!;

  const data = await Promise.all(
    apps.map(async (app) => ({
      app,
      queryResult: await getWidgetData(widget, app, token).then(
        (data) => data.query_result
      )
    }))
  );

  return (
    <Card className="space-y-2">
      <Title>{widget.visualization?.query.name || widget.id}</Title>
      <Text>{widget.visualization?.query.description}</Text>
      {/* {widget.visualization?.type === 'COHORT' &&
        data &&
        'query_result' in data && <Cohort queryResult={data.query_result} />}
      {widget.visualization?.type === 'CHART' &&
        data &&
        'query_result' in data &&
        data.query_result.data && <Chart queryResult={data.query_result} />} */}
      {widget.visualization?.type === 'COUNTER' && data && (
        <Counter data={data} options={widget.visualization.options} />
      )}
    </Card>
  );
}
