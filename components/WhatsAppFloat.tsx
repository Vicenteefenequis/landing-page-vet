import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/constants';

/** Botão fixo de WhatsApp, visível só no celular, onde o menu esconde o CTA do topo. */
export const WhatsAppFloat: React.FC = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Agendar consulta pelo WhatsApp"
    className="md:hidden fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#1f8f4e] px-5 py-3 font-bold text-white shadow-xl hover:bg-[#187a42] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1f8f4e]"
  >
    <MessageCircle size={20} aria-hidden="true" />
    Agendar
  </a>
);
