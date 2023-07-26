import { Card } from '@tremor/react';
import { ReactNode, Suspense } from 'react';
import { Widget as WidgetType } from './types';

export default function WidgetContainer({
  widget,
  children
}: {
  widget: WidgetType;
  children: ReactNode;
}) {
  const order = [
    'COUNTER',
    'CHOROPLETH',
    'CHART',
    'TABLE',
    'COHORT',
    'UNKNOWN'
  ].indexOf(widget.visualization?.type || 'UNKNOWN');

  return (
    <div key={widget.id} className={`min-h-[300px] order-${order}`}>
      <Suspense fallback={<Card className="h-full">Loading Widget</Card>}>
        {children}
      </Suspense>
    </div>
  );
}
