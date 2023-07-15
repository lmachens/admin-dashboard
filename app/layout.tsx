import './globals.css';

import { ReactNode } from 'react';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'A admin dashboard.'
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">{children}</body>
    </html>
  );
}
