import { Card } from '@tremor/react';
import { Suspense } from 'react';
import { getDashboardPerformance } from '../api';
import Widget from '../widget';

export default async function Performance() {
  const widgets = await getDashboardPerformance();
  return (
    <>
      {widgets.map((widget) => (
        <Suspense key={widget.id} fallback={<Card>Loading Widget</Card>}>
          <Widget widget={widget} />
        </Suspense>
      ))}
    </>
  );
}
