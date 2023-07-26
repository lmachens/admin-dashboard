import { Card } from '@tremor/react';
import { Suspense } from 'react';
import { getDashboardKPIs } from '../api';
import Widget from '../widget';

export default async function KPIs() {
  const widgets = await getDashboardKPIs();
  return (
    <>
      {widgets.map((widget) => (
        <Suspense
          key={widget.id}
          fallback={<Card className="order-last">Loading Widget</Card>}
        >
          <Widget key={widget.id} widget={widget} />
        </Suspense>
      ))}
    </>
  );
}

export const revalidate = 3600;
