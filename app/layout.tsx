import './globals.css';

import { ReactNode } from 'react';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'A admin dashboard.'
};

export default async function RootLayout({
  children,
  revenue,
  kpis,
  performance
}: {
  children: ReactNode;
  revenue: ReactNode;
  kpis: ReactNode;
  performance: ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <main className="p-4 md:p-10 mx-auto max-w-7xl space-y-6">
          {children}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {revenue}
            {kpis}
            {performance}
          </div>
        </main>
      </body>
    </html>
  );
}
