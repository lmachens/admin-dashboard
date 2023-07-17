import { Card, Text, Title } from '@tremor/react';
import { cookies } from 'next/headers';
import { getWidgetData } from './api';
import Chart from './chart';
import Cohort from './cohort';
import Counter from './counter';
import { Widget as WidgetType } from './types';

export default async function Widget({ widget }: { widget: WidgetType }) {
  const cookieStore = cookies();
  const apps = JSON.parse(cookieStore.get('apps')?.value ?? '[]');
  const token = cookieStore.get('token')?.value!;

  const data = await getWidgetData(widget, apps[0], token);

  return (
    <Card className="space-y-2">
      <Title>{widget.visualization?.query.name || widget.id}</Title>
      <Text>{widget.visualization?.query.description}</Text>
      {widget.visualization?.type === 'COHORT' &&
        data &&
        'query_result' in data && <Cohort queryResult={data.query_result} />}
      {widget.visualization?.type === 'CHART' &&
        data &&
        'query_result' in data &&
        data.query_result.data && <Chart queryResult={data.query_result} />}
      {widget.visualization?.type === 'COUNTER' &&
        data &&
        'query_result' in data &&
        data.query_result.data && (
          <Counter
            queryResult={data.query_result}
            options={widget.visualization.options}
          />
        )}
    </Card>
  );
}
