import React from 'react';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Qualifications } from '@/components/Qualifications';
import { Services } from '@/components/Services';
import { Species } from '@/components/Species';
import { StructuredData } from '@/components/StructuredData';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <About />
        <Species />
        <HowItWorks />
        <Services />
        <Qualifications />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
