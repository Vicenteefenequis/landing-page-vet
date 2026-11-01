'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { GOOGLE_ADS_ID } from '@/constants';
import { CONSENT_OPEN_EVENT, PRIVACY_PATH, getConsent, openConsentBanner, setConsent } from '@/lib/consent';

/** Aviso de cookies (LGPD). Só aparece se houver tag de anúncio configurada. */
export const CookieBanner: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!GOOGLE_ADS_ID) return;
    if (getConsent() === null) setOpen(true);

    const handleOpen = () => setOpen(true);
    window.addEventListener(CONSENT_OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, handleOpen);
  }, []);

  if (!open) return null;

  const choose = (choice: 'granted' | 'denied') => {
    setConsent(choice);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 p-4"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl md:flex md:items-center md:gap-6">
        <p className="text-sm font-medium leading-relaxed text-slate-700">
          Usamos cookies do Google Ads para medir quantas pessoas chegam até aqui pelos anúncios e entram em
          contato. Eles só são ativados se você aceitar. Saiba mais na{' '}
          <Link href={PRIVACY_PATH} className="font-bold text-primary-800 underline" prefetch={false}>
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="mt-4 flex shrink-0 gap-3 md:mt-0">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="flex-1 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 md:flex-none"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="flex-1 rounded-full bg-primary-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 md:flex-none"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

/** Botão do rodapé para reabrir o aviso e mudar a escolha. */
export const CookiePreferencesButton: React.FC<{ className?: string }> = ({ className }) => {
  if (!GOOGLE_ADS_ID) return null;
  return (
    <button
      type="button"
      className={className}
      onClick={openConsentBanner}
    >
      Preferências de cookies
    </button>
  );
};
