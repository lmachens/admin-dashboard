'use client';

import { Card } from '@tremor/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Apps({ apps }: { apps: string[] }) {
  const router = useRouter();

  return (
    <Card>
      <div>My Apps</div>
      <div className="flex flex-wrap gap-2">
        {apps.map((app) => (
          <div key={app}>
            {app}{' '}
            <button
              onClick={() => {
                apps.splice(apps.indexOf(app), 1);
                Cookies.set('apps', JSON.stringify(apps));
                router.refresh();
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}
