import { Card } from '@tremor/react';
import { Suspense } from 'react';
import { getDashboardKPIs } from '../api';
import Widget from '../widget';

export default async function KPIs() {
  const widgets = await getDashboardKPIs();
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
