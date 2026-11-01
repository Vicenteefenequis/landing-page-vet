'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { GOOGLE_ADS_ID } from '@/constants';
import { CONSENT_CHANGE_EVENT, ConsentChoice, clearAdCookies, getConsent } from '@/lib/consent';
import { conversionKindFromHref, trackConversion } from '@/lib/gtag';

const DENIED = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
} as const;

/**
 * Carrega a tag do Google Ads somente depois que o visitante aceita os cookies
 * (LGPD, art. 7º, I). Com a tag ativa, cliques em links de WhatsApp (wa.me) e
 * telefone (tel:) contam como conversão. Sem NEXT_PUBLIC_GOOGLE_ADS_ID, nada é carregado.
 */
export const GoogleAds: React.FC = () => {
  const [consent, setConsentState] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    if (!GOOGLE_ADS_ID) return;
    setConsentState(getConsent());

    const handleChange = (event: Event) => {
      const choice = (event as CustomEvent<ConsentChoice>).detail;
      setConsentState(choice);
      if (choice === 'denied') {
        // Se a tag já estava carregada (o visitante aceitou e depois recusou),
        // bloqueia novos cookies e apaga os já gravados.
        window.gtag?.('consent', 'update', DENIED);
        clearAdCookies();
      } else {
        window.gtag?.('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
        });
      }
    };

    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.('a[href]');
      if (!anchor) return;
      const kind = conversionKindFromHref(anchor.getAttribute('href') ?? '');
      if (kind) trackConversion(kind);
    };

    window.addEventListener(CONSENT_CHANGE_EVENT, handleChange);
    // Fase de captura: dispara antes da navegação, inclusive em links target="_blank".
    document.addEventListener('click', handleClick, true);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, handleChange);
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  if (!GOOGLE_ADS_ID || consent !== 'granted') return null;

  return (
    <>
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
            analytics_storage: 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
};
