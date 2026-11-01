export type ConsentChoice = 'granted' | 'denied';

const STORAGE_KEY = 'cookie-consent-v1';
export const CONSENT_CHANGE_EVENT = 'cookie-consent-change';
export const CONSENT_OPEN_EVENT = 'cookie-consent-open';

export const PRIVACY_PATH = '/privacidade/';

/** Lê a escolha salva. Retorna null se ainda não houve escolha ou se o storage estiver bloqueado. */
export function getConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage bloqueado (aba anônima etc.): a escolha vale só para esta visita.
  }
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_CHANGE_EVENT, { detail: choice }));
}

/** Reabre o aviso de cookies para o visitante mudar a escolha. */
export function openConsentBanner(): void {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

/** Remove os cookies de anúncio do Google já gravados (_gcl_*, _ga*), em todos os níveis de domínio. */
export function clearAdCookies(): void {
  const names = document.cookie
    .split(';')
    .map((part) => part.split('=')[0].trim())
    .filter((name) => name.startsWith('_gcl') || name.startsWith('_ga'));

  const hostParts = window.location.hostname.split('.');
  const domains = hostParts.map((_, i) => hostParts.slice(i).join('.')).filter((d) => d.includes('.'));

  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`;
    }
  }
}
