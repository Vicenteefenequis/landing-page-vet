import { GOOGLE_ADS_CALL_LABEL, GOOGLE_ADS_ID, GOOGLE_ADS_WHATSAPP_LABEL } from '@/constants';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type ConversionKind = 'whatsapp' | 'call';

const LABELS: Record<ConversionKind, string> = {
  whatsapp: GOOGLE_ADS_WHATSAPP_LABEL,
  call: GOOGLE_ADS_CALL_LABEL,
};

/**
 * Envia uma conversão ao Google Ads. Não faz nada se a tag não estiver
 * configurada (ID ou rótulo vazios) ou se o gtag ainda não carregou.
 */
export function trackConversion(kind: ConversionKind): void {
  const label = LABELS[kind];
  if (!GOOGLE_ADS_ID || !label || typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    // beacon garante o envio mesmo se a página for trocada logo em seguida.
    transport_type: 'beacon',
  });
}

/** Identifica o tipo de conversão a partir do href de um link. */
export function conversionKindFromHref(href: string): ConversionKind | null {
  if (href.startsWith('https://wa.me/') || href.startsWith('https://api.whatsapp.com/')) return 'whatsapp';
  if (href.startsWith('tel:')) return 'call';
  return null;
}
