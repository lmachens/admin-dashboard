import { Card } from '@tremor/react';
import { Suspense } from 'react';
import { getDashboardRevenue } from '../api';
import Widget from '../widget';

export default async function Revenue() {
  const widgets = await getDashboardRevenue();
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