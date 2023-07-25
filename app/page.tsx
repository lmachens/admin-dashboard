import { Card } from '@tremor/react';
import { Suspense } from 'react';
import Apps from './apps';
import { APPS } from './env';
import Widgets from './widgets';

export default async function IndexPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl space-y-6">
      <Apps apps={APPS} />
      <Suspense fallback={<Card>Loading Widgets</Card>}>
        <Widgets />
      </Suspense>
    </main>
  );
}

export const revalidate = 3600;
