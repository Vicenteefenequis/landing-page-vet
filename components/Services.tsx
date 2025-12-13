import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary-700 uppercase mb-3">Áreas de Atuação</h2>
          <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            Soluções completas para você
          </h3>
          <p className="text-slate-600 text-lg font-medium">
            Atendimento personalizado para atender as demandas específicas de cada cliente, desde o manejo de fauna silvestre até a clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            // Dynamically render icon
            const IconComponent = (Icons as any)[service.iconName] || Icons.Activity;
            
            return (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-slate-100">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                  <IconComponent className="w-7 h-7 text-primary-700 group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-serif text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
