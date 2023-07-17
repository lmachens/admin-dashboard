'use client';

import { Card } from '@tremor/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TokenForm() {
  const router = useRouter();
  const [token, setToken] = useState('');

  return (
    <Card>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          Cookies.set('token', token);
          setToken('');
          router.refresh();
        }}
      >
        <label>
          <div>Token</div>
          <input
            value={token}
            placeholder="Enter your auth token"
            onChange={(e) => setToken(e.target.value)}
          />
        </label>
        <input
          className="block px-4 py-2 bg-gray-100 text-gray-700 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </Card>
  );
}
