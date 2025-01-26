'use client';

import Header from '@/components/shared/header';
import Footer from '@/components/footer';
import { LoadScript } from '@react-google-maps/api';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
