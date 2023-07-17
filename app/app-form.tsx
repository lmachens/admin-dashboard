'use client';

import { Card } from '@tremor/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AppForm({ apps }: { apps: string[] }) {
  const router = useRouter();
  const [appName, setAppName] = useState('');

  return (
    <Card>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          apps.push(appName);
          Cookies.set('apps', JSON.stringify(apps));
          setAppName('');
          router.refresh();
        }}
      >
        <label>
          <div>App Name</div>
          <input
            value={appName}
            placeholder="Enter your app name"
            onChange={(e) => setAppName(e.target.value)}
          />
        </label>
        <input
          className="block px-4 py-2 bg-gray-100 text-gray-700 cursor-pointer"
          type="submit"
          value="Add"
        />
      </form>
    </Card>
  );
}
