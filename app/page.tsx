import React from 'react';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Qualifications } from '@/components/Qualifications';
import { Services } from '@/components/Services';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Qualifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
