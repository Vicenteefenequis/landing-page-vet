export interface WhatsappContactData {
  nome: string;
  especie: string;
  cidade: string;
  mensagem?: string;
}

/** Monta o texto pré-preenchido enviado ao WhatsApp a partir do formulário de contato. */
export function buildWhatsappMessage({ nome, especie, cidade, mensagem }: WhatsappContactData): string {
  const intro =
    `Olá, Dra. Isadora! Meu nome é ${nome.trim()}, sou de ${cidade.trim()} ` +
    `e gostaria de agendar uma consulta a domicílio para o meu animal (espécie: ${especie.trim()}).`;
  const extra = mensagem?.trim();
  return extra ? `${intro}\n\n${extra}` : intro;
}

export function buildWhatsappUrl(phoneNumber: string, data: WhatsappContactData): string {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(buildWhatsappMessage(data))}`;
}
