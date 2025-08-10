import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@/lib/analytics';
import { generateMetadata as genMetadata } from '@/lib/seo';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = genMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics>
          {children}
        </Analytics>
      </body>
    </html>
  );
}