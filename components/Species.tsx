import React from 'react';
import { Bird, Dog, Rabbit, Turtle } from 'lucide-react';
import { SPECIES_GROUPS } from '@/constants';

const ICONS: Record<string, React.ElementType> = {
  aves: Bird,
  repteis: Turtle,
  'pequenos-mamiferos': Rabbit,
  'caes-e-gatos': Dog,
};

export const Species: React.FC = () => {
  return (
    <section id="especies" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-widest text-primary-700 uppercase mb-3">Espécies Atendidas</p>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            Atendimento a domicílio para silvestres e exóticos
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Aves, répteis e pequenos mamíferos são a minha especialidade. Também atendo cães e gatos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPECIES_GROUPS.map((group) => {
            const Icon = ICONS[group.id] ?? Bird;
            return (
              <div
                key={group.id}
                className={`p-8 rounded-2xl border ${
                  group.primary ? 'bg-white border-slate-100 shadow-sm' : 'bg-slate-100/60 border-dashed border-slate-300'
                }`}
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-700" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">{group.title}</h3>
                {!group.primary && (
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Atendimento complementar</p>
                )}
                <p className="text-slate-600 text-sm leading-relaxed font-medium mb-4">{group.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.species.map((name) => (
                    <li key={name} className="text-xs font-semibold text-primary-800 bg-primary-50 px-2.5 py-1 rounded-full">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
