import React from 'react';
import { CRMV, DOCTOR_NAME, INSTAGRAM_URL } from '@/constants';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl font-bold text-slate-900">{DOCTOR_NAME}</p>
            <p className="text-slate-600 text-sm font-semibold mt-1">Médica Veterinária · {CRMV}</p>
            <p className="text-slate-500 text-sm mt-2">
              Atendimento a domicílio de animais silvestres e exóticos, cães e gatos.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-50 text-slate-600 hover:bg-primary-50 hover:text-primary-700 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} {DOCTOR_NAME}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
