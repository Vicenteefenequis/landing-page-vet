import React from 'react';
import { QUALIFICATIONS } from '../constants';
import { GraduationCap } from 'lucide-react';

export const Qualifications: React.FC = () => {
  return (
    <section id="qualificacoes" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold tracking-widest text-primary-700 uppercase mb-3">Trajetória Acadêmica</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Formação sólida e contínua
            </h3>
            <p className="text-slate-600 mb-8 font-medium text-lg">
              Acredito que a excelência profissional se constrói através do estudo contínuo e da busca incessante pelo conhecimento atualizado.
            </p>
            <div className="p-6 bg-primary-50 rounded-2xl border border-primary-100">
              <GraduationCap className="w-10 h-10 text-primary-700 mb-4" />
              <p className="font-semibold text-primary-900 italic text-lg">
                "A educação é a base para transformar a realidade da saúde animal no Brasil."
              </p>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {QUALIFICATIONS.map((qual, index) => (
                <div key={qual.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  
                  {/* Icon Marker */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 group-hover:bg-primary-500 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md">
                    <span className="w-2.5 h-2.5 bg-slate-400 rounded-full group-hover:bg-white transition-colors" />
                  </div>
                  
                  {/* Content Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-lg">{qual.title}</span>
                      <span className="text-xs font-bold text-primary-700 bg-primary-50 px-2 py-1 rounded-full">{qual.year}</span>
                    </div>
                    <div className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">{qual.institution}</div>
                    <p className="text-slate-600 text-sm font-medium">
                      {qual.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
