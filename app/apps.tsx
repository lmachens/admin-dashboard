'use client';

import { Card, Title } from '@tremor/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Apps({ apps }: { apps: string[] }) {
  const router = useRouter();

  return (
    <Card className="space-y-2">
      <Title>My Apps</Title>
      <div className="flex flex-wrap gap-2">
        {apps.map((app) => (
          <div
            key={app}
            className="rounded bg-gray-100 text-gray-700 px-2 py-1 flex items-center gap-1"
          >
            <span>{app}</span>
            <button
              onClick={() => {
                apps.splice(apps.indexOf(app), 1);
                Cookies.set('apps', JSON.stringify(apps));
                router.refresh();
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}
