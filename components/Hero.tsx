import React from 'react';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import { ROLE, REGIONS, WHATSAPP_LINK } from '@/constants';
import { Button } from './Button';
import araraImage from '@/public/images/arara.jpeg';

export const Hero: React.FC = () => {
  // Helper to format list with "e"
  const formattedRegions = REGIONS.length > 1 
    ? `${REGIONS.slice(0, -1).join(', ')} e ${REGIONS.slice(-1)}`
    : REGIONS.join('');

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 to-primary-50/30">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
              Atendimento Especializado
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight drop-shadow-sm">
              Excelência em saúde e<br/> bem-estar de animais<br/>
              <span className="text-primary-800">Silvestres & Exóticos</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 font-medium mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {ROLE}. Atendimento clínico e soluções profissionais para tutores de animais silvestres, zoológicos e empresas que exigem o mais alto padrão técnico.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button asLink href={WHATSAPP_LINK} external variant="primary" className="group">
                Solicitar Proposta
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button asLink href="#sobre" variant="secondary">
                Conhecer Trajetória
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-600 font-semibold">
              <MapPin size={16} className="text-primary-700 shrink-0" />
              <p>Atendendo: {formattedRegions}.</p>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-200 group">
              {/* Using a high-quality placeholder that looks like a professional veterinarian/consultant context */}
              <Image
                src={araraImage}
                alt="Dra. Isadora Nascimento em campo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-2xl font-bold tracking-wide">Compromisso com a Vida</p>
                <p className="text-slate-100 text-sm mt-1 font-medium">Ética e profissionalismo em cada atendimento.</p>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block border border-slate-100">
              <div className="text-4xl font-extrabold text-primary-700 mb-1">5+</div>
              <div className="text-sm text-slate-700 font-semibold leading-tight">Anos de experiência</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
