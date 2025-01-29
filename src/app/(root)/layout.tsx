'use client';

import Header from '@/src/components/shared/header';
import Footer from '@/src/components/footer';
import { LoadScript } from '@react-google-maps/api';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LoadScript>
  );
}
