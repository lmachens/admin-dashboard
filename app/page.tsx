import { Card } from '@tremor/react';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import AppForm from './app-form';
import Apps from './apps';
import TokenForm from './token-form';
import Widgets from './widgets';

export default async function IndexPage() {
  const cookieStore = cookies();
  const apps = JSON.parse(cookieStore.get('apps')?.value ?? '[]');

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <TokenForm />
        <AppForm apps={apps} />
      </div>
      <Apps apps={apps} />
      <Suspense fallback={<Card>Loading Widgets</Card>}>
        <Widgets />
      </Suspense>
    </main>
  );
}
