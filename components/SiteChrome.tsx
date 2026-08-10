'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isChat = pathname?.startsWith('/chat');
  const isAuth = pathname?.startsWith('/login') || pathname?.startsWith('/register');

  if (isChat) {
    // Chat sahifasi o'z balandligini to'liq egallaydi — navbar/footer kerak emas
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-73px)]">{children}</main>
      {!isAuth && <Footer />}
    </>
  );
}
