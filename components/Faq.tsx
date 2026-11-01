import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/constants';

export const Faq: React.FC = () => {
  return (
    <section id="duvidas" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-primary-700 uppercase mb-3">Dúvidas Frequentes</p>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Perguntas frequentes sobre o atendimento
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group bg-white rounded-xl border border-slate-100 shadow-sm">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-bold text-slate-900 text-lg">{item.question}</h3>
                <ChevronDown
                  className="w-5 h-5 text-primary-700 shrink-0 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-6 pb-6 text-slate-600 font-medium leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
