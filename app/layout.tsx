import type { Metadata } from 'next';
import { Analytics } from '@/lib/analytics';
import { generateMetadata as genMetadata } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = genMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Analytics>
          {children}
        </Analytics>
      </body>
    </html>
  );
}