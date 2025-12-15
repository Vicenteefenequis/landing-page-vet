'use client';

import React from 'react';
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './Button';
import { REGIONS, WHATSAPP_LINK } from '@/constants';

export const Contact: React.FC = () => {
  // Helper to format list with "e"
  const formattedRegions = REGIONS.length > 1 
    ? `${REGIONS.slice(0, -1).join(', ')} e ${REGIONS.slice(-1)}`
    : REGIONS.join('');

  return (
    <section id="contato" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary-400 uppercase mb-3">Vamos Conversar?</h2>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Pronto para elevar o cuidado com seus animais?
              </h3>
              <p className="text-slate-300 mb-8 text-lg font-medium">
                Entre em contato para discutir como posso ajudar a transformar o cuidado com a saúde animal.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">WhatsApp & Telefone</h4>
                    <p className="text-slate-400 text-sm mb-2 font-medium">Segunda a Sexta, 08h às 18h</p>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-white transition-colors inline-flex items-center gap-1 font-bold">
                      Iniciar conversa <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Regiões de Atendimento</h4>
                    <p className="text-slate-300 text-sm font-medium">
                      {formattedRegions}.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email Profissional</h4>
                    <a href="mailto:isadoraa.lima@gmail.com" className="text-slate-300 hover:text-white transition-colors font-medium">
                      isadoraa.lima@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-xl">
              <h4 className="font-serif text-2xl font-bold mb-6">Envie uma mensagem</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Nome Completo</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-medium" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email Corporativo</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-medium" placeholder="nome@empresa.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1">Como posso ajudar?</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none font-medium" placeholder="Descreva brevemente sua necessidade..."></textarea>
                </div>
                <Button fullWidth className="mt-2 font-bold">Enviar Mensagem</Button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Ao enviar, você concorda com a nossa política de privacidade.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
