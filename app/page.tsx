import { Card } from '@tremor/react';
import { cookies } from 'next/headers';
import AppForm from './app-form';
import Apps from './apps';
import TokenForm from './token-form';
import Widgets from './widgets';

export default async function IndexPage() {
  const cookieStore = cookies();
  const apps = JSON.parse(cookieStore.get('apps')?.value ?? '[]');

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl space-y-6">
      <Card className="flex justify-between">
        <TokenForm />
        <AppForm apps={apps} />
        <Apps apps={apps} />
      </Card>
      <Widgets />
    </main>
  );
}
