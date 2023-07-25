import { Card } from '@tremor/react';
import { Suspense } from 'react';
import { getWidgets } from './api';
import Widget from './widget';

export default async function Widgets() {
  const widgets = await getWidgets();
  const counterWidgets = widgets.filter(
    (widget) => widget.visualization?.type === 'COUNTER'
  );
  const chartWidgets = widgets.filter(
    (widget) => widget.visualization?.type === 'CHART'
  );
  const cohortWidgets = widgets.filter(
    (widget) => widget.visualization?.type === 'COHORT'
  );
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {counterWidgets.map((widget) => (
          <Suspense key={widget.id} fallback={<Card>Loading Widget</Card>}>
            <Widget widget={widget} />
          </Suspense>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {chartWidgets.map((widget) => (
          <Suspense key={widget.id} fallback={<Card>Loading Widget</Card>}>
            <Widget widget={widget} />
          </Suspense>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cohortWidgets.map((widget) => (
          <Suspense key={widget.id} fallback={<Card>Loading Widget</Card>}>
            <Widget widget={widget} />
          </Suspense>
        ))}
      </div>
    </>
  );
}
