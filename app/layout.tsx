import React from 'react';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { CookieBanner } from '@/components/CookieBanner';
import { GoogleAds } from '@/components/GoogleAds';
import { DOCTOR_NAME, SEO_DESCRIPTION, SEO_TITLE, SITE_URL } from '@/constants';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', variable: '--font-playfair' });

export async function generateMetadata(): Promise<Metadata> {
  const title = SEO_TITLE;
  const description = SEO_DESCRIPTION;
  const baseUrl = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;
  const imagePath = '/images/og.jpg';
  const imageAlt = `${DOCTOR_NAME} examinando uma arara-azul`;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    alternates: {
      canonical: '/',
    },
    authors: [{ name: DOCTOR_NAME }],
    creator: DOCTOR_NAME,
    publisher: DOCTOR_NAME,
    openGraph: {
      type: 'website',
      url: '/',
      title,
      description,
      siteName: DOCTOR_NAME,
      locale: 'pt_BR',
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: DOCTOR_NAME,
      images: [{ url: imagePath, alt: imageAlt }],
    },
    category: 'veterinary',
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen bg-slate-50 text-slate-900 font-sans antialiased`}>
        {children}
        <GoogleAds />
        <CookieBanner />
      </body>
    </html>
  );
}
