import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import SiteChrome from '@/components/SiteChrome';
import './globals.css';

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'iChat — Dunyo bilan bir tilda gaplashing',
  description:
    "iChat — real vaqtda xabar almashish, sun'iy intellekt tarjimasi va xavfsiz muloqot platformasi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-body antialiased bg-light text-dark">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
