import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '純光設計 Jun Light Design | 以光為名，設計每一份純粹的溫度',
  description: 'Official single-page website for Jun Light Design featuring services, pricing, and portfolio showcases.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-brand-bg text-brand-text font-sans antialiased selection:bg-brand-teal selection:text-white">
        <Navbar />
        <main className="flex-grow min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}