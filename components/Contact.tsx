'use client';

import React, { useState } from 'react';
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './Button';
import { BUSINESS_HOURS_LABEL, CONTACT_EMAIL, PHONE_DISPLAY, PHONE_LINK, REGIONS, SPECIES_GROUPS, WHATSAPP_LINK, WHATSAPP_NUMBER } from '@/constants';
import { trackConversion } from '@/lib/gtag';
import { buildWhatsappUrl } from '@/lib/whatsapp';

type RequiredField = 'nome' | 'especie' | 'cidade';

const ERROR_MESSAGES: Record<RequiredField, string> = {
  nome: 'Informe o seu nome.',
  especie: 'Escolha a espécie do seu animal.',
  cidade: 'Escolha a sua cidade.',
};

const inputClasses =
  'w-full px-4 py-3 rounded-lg border focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all font-medium bg-white';

export const Contact: React.FC = () => {
  const [errors, setErrors] = useState<Partial<Record<RequiredField, string>>>({});

  // Helper to format list with "e"
  const formattedRegions = REGIONS.length > 1
    ? `${REGIONS.slice(0, -1).join(', ')} e ${REGIONS.slice(-1)}`
    : REGIONS.join('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      nome: String(data.get('nome') ?? '').trim(),
      especie: String(data.get('especie') ?? '').trim(),
      cidade: String(data.get('cidade') ?? '').trim(),
      mensagem: String(data.get('mensagem') ?? ''),
    };

    const nextErrors: Partial<Record<RequiredField, string>> = {};
    (Object.keys(ERROR_MESSAGES) as RequiredField[]).forEach((field) => {
      if (!values[field]) nextErrors[field] = ERROR_MESSAGES[field];
    });
    setErrors(nextErrors);

    const firstInvalid = (Object.keys(ERROR_MESSAGES) as RequiredField[]).find((field) => nextErrors[field]);
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    const url = buildWhatsappUrl(WHATSAPP_NUMBER, values);
    trackConversion('whatsapp');
    const opened = window.open(url, '_blank');
    if (opened) {
      opened.opener = null;
    } else {
      // Pop-up bloqueado (comum em navegadores móveis): segue na mesma aba.
      window.location.href = url;
    }
  };

  const fieldProps = (field: RequiredField) => ({
    id: field,
    name: field,
    'aria-required': true,
    'aria-invalid': Boolean(errors[field]),
    'aria-describedby': errors[field] ? `${field}-erro` : undefined,
    className: `${inputClasses} ${errors[field] ? 'border-red-500' : 'border-slate-200'}`,
  });

  const errorText = (field: RequiredField) =>
    errors[field] ? (
      <p id={`${field}-erro`} className="mt-1 text-sm font-semibold text-red-600">
        {errors[field]}
      </p>
    ) : null;

  return (
    <section id="contato" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="text-sm font-bold tracking-widest text-primary-400 uppercase mb-3">Agende uma Visita</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Agende uma consulta a domicílio para o seu animal
              </h2>
              <p className="text-slate-300 mb-8 text-lg font-medium">
                Conte qual é o seu animal e a sua cidade. Respondo pelo WhatsApp com os horários disponíveis e o valor da taxa de deslocamento.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">WhatsApp & Telefone</h3>
                    <p className="text-slate-400 text-sm mb-2 font-medium">{BUSINESS_HOURS_LABEL}</p>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-white transition-colors inline-flex items-center gap-1 font-bold">
                      Iniciar conversa <ExternalLink size={14} />
                    </a>
                    <a href={PHONE_LINK} className="block mt-1 text-slate-300 hover:text-white transition-colors font-medium">
                      Ligar: {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Atendimento a domicílio em</h3>
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
                    <h3 className="font-bold text-white mb-1">E-mail</h3>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-300 hover:text-white transition-colors font-medium">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-xl">
              <h3 className="font-serif text-2xl font-bold mb-6">Envie uma mensagem</h3>
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="nome" className="block text-sm font-bold text-slate-700 mb-1">Seu nome</label>
                  <input type="text" autoComplete="name" placeholder="Seu nome" {...fieldProps('nome')} />
                  {errorText('nome')}
                </div>
                <div>
                  <label htmlFor="especie" className="block text-sm font-bold text-slate-700 mb-1">Espécie do animal</label>
                  <select defaultValue="" {...fieldProps('especie')}>
                    <option value="" disabled>Selecione a espécie</option>
                    {SPECIES_GROUPS.map((group) => (
                      <optgroup key={group.id} label={group.title}>
                        {group.species.map((name) => (
                          <option key={name} value={name}>{name}</option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="Outra">Outra</option>
                  </select>
                  {errorText('especie')}
                </div>
                <div>
                  <label htmlFor="cidade" className="block text-sm font-bold text-slate-700 mb-1">Cidade</label>
                  <select defaultValue="" {...fieldProps('cidade')}>
                    <option value="" disabled>Selecione a cidade</option>
                    {REGIONS.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  {errorText('cidade')}
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-bold text-slate-700 mb-1">
                    Como posso ajudar? <span className="font-medium text-slate-500">(opcional)</span>
                  </label>
                  <textarea id="mensagem" name="mensagem" rows={4} className={`${inputClasses} border-slate-200 resize-none`} placeholder="Descreva brevemente o que está acontecendo com o seu animal..."></textarea>
                </div>
                <Button type="submit" fullWidth className="mt-2 font-bold">Enviar pelo WhatsApp</Button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Você será direcionado ao WhatsApp com a mensagem pronta para enviar.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
