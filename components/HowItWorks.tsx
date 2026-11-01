import React from 'react';
import { HOW_IT_WORKS } from '@/constants';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-widest text-primary-700 uppercase mb-3">Como Funciona</p>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            Como funciona o atendimento a domicílio
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((step, index) => (
            <li key={step.title} className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-700 text-white font-bold mb-5"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
