import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { getWidgets } from './api';
import Widget from './widget';

export default async function Widgets() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  const widgets = token ? await getWidgets(token) : [];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      {widgets.slice(0, 1).map((widget) => (
        <Suspense key={widget.id}>
          <Widget widget={widget} />
        </Suspense>
      ))}
    </div>
  );
}
