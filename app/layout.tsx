import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PRX Markets — Fund what gets fixed.',
  description: 'Markets for measurable environmental recovery.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
