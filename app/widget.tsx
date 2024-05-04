import { Card, Text, Title } from '@tremor/react';
import { getApps, getWidget } from './api';
import Chart from './chart';
import Counter from './counter';
import { Widget as WidgetType } from './types';

export default async function Widget({ widget }: { widget: WidgetType }) {
  if (!widget.visualization) {
    return null;
  }
  const apps = await getApps();
  const data = await Promise.all(
    apps.sort().map(async (app) => ({
      app: app.name,
      queryResult: await getWidget(widget, app.id)
    }))
  ).catch((error) => {
    console.error(error.message);
  });

  const title = widget.visualization.query.name;
  const description =
    widget.visualization.query.description || widget.visualization.name;

  return (
    <Card className={`space-y-2 h-full`}>
      <Title className="truncate" title={title}>
        {widget.visualization.query.id}: {title}
      </Title>
      <Text className="truncate" title={description}>
        {description}
      </Text>
      {!data && <div>Could not load data</div>}
      {/* {widget.visualization?.type === 'COHORT' && !!data && (
        <Cohort data={data} options={widget.visualization.options} />
      )} */}
      {/* {widget.visualization?.type === 'CHOROPLETH' && !!data && (
        <Choropleth data={data} options={widget.visualization.options} />
      )} */}
      {/* {widget.visualization?.type === 'TABLE' && !!data && (
        <Table data={data} options={widget.visualization.options} />
      )} */}
      {widget.visualization?.type === 'CHART' && !!data && (
        <Chart data={data} options={widget.visualization.options} />
      )}
      {widget.visualization?.type === 'COUNTER' && !!data && (
        <Counter data={data} options={widget.visualization.options} />
      )}
    </Card>
  );
}
