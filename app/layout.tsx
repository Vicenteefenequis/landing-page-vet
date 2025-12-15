import React from 'react';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { CRMV, DOCTOR_NAME, SEO_DESCRIPTION, SEO_KEYWORDS, SITE_URL } from '@/constants';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', variable: '--font-playfair' });

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Dra. Isadora Nascimento | Medicina Veterinária Especializada em Pets Não Convencionais';
  const description = SEO_DESCRIPTION;
  const baseUrl = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;
  const imagePath = '/images/arara.jpeg';

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords: SEO_KEYWORDS,
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
          alt: `${DOCTOR_NAME} - ${CRMV}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: DOCTOR_NAME,
      images: [imagePath],
    },
    category: 'veterinary',
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen bg-slate-50 text-slate-900 font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
