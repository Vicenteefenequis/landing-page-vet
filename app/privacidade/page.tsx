import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { CookiePreferencesButton } from '@/components/CookieBanner';
import { CONTACT_EMAIL, DOCTOR_NAME, CRMV } from '@/constants';
import { PRIVACY_PATH } from '@/lib/consent';

const LAST_UPDATED = '1º de novembro de 2026';

export const metadata: Metadata = {
  title: `Política de Privacidade | ${DOCTOR_NAME}`,
  description: `Como o site de ${DOCTOR_NAME} trata dados pessoais e cookies, conforme a LGPD.`,
  alternates: { canonical: PRIVACY_PATH },
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">{title}</h2>
    <div className="space-y-3 text-slate-700 font-medium leading-relaxed">{children}</div>
  </section>
);

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container mx-auto px-4 md:px-8 max-w-3xl py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary-800 hover:text-primary-900 mb-8"
          prefetch={false}
        >
          <ArrowLeft size={16} aria-hidden="true" /> Voltar ao site
        </Link>

        <h1 className="font-serif text-4xl font-extrabold text-slate-900 mb-2">Política de Privacidade</h1>
        <p className="text-sm text-slate-500 font-semibold mb-12">Última atualização: {LAST_UPDATED}</p>

        <Section title="Quem é a responsável pelos dados">
          <p>
            {DOCTOR_NAME}, Médica Veterinária ({CRMV}), é a controladora dos dados pessoais tratados neste site,
            nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD). Para qualquer assunto sobre
            privacidade, escreva para{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-primary-800 underline">{CONTACT_EMAIL}</a>.
          </p>
        </Section>

        <Section title="Quais dados são tratados e para quê">
          <p>
            <strong>Formulário de contato.</strong> Nome, espécie do animal, cidade e mensagem não são enviados nem
            guardados por este site. Eles servem apenas para montar uma mensagem que é aberta no WhatsApp do seu
            aparelho; o envio só acontece se você confirmar no próprio WhatsApp. A partir daí, a conversa é usada
            para agendar e realizar o atendimento.
          </p>
          <p>
            <strong>Conversas pelo WhatsApp, telefone e e-mail.</strong> Os dados que você compartilha (seus e do
            seu animal) são usados para triagem, agendamento, atendimento veterinário e acompanhamento, com base na
            execução do serviço que você solicitou (art. 7º, V, da LGPD). O WhatsApp é um serviço da Meta e tem sua
            própria política de privacidade.
          </p>
          <p>
            <strong>Acesso ao site.</strong> A hospedagem registra dados técnicos de acesso, como endereço IP,
            navegador e data e hora, para segurança e funcionamento do site.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            O site pode divulgar o atendimento por meio de anúncios do Google Ads. Para saber se esses anúncios
            funcionam, usamos cookies do Google (como <code>_gcl_au</code>) que registram quando alguém que clicou
            em um anúncio entra em contato pelo WhatsApp ou por telefone.
          </p>
          <p>
            Esses cookies <strong>só são ativados se você clicar em &quot;Aceitar&quot;</strong> no aviso de cookies
            (consentimento, art. 7º, I, da LGPD). Se você recusar, nenhuma tag de anúncio é carregada e o site
            funciona normalmente. Sua escolha fica guardada no seu próprio navegador.
          </p>
          <p>
            Os dados coletados por esses cookies são tratados pelo Google, que pode processá-los fora do Brasil.
            Saiba mais em{' '}
            <a
              href="https://policies.google.com/technologies/ads?hl=pt-BR"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary-800 underline"
            >
              Como o Google usa cookies em publicidade
            </a>
            .
          </p>
          <p>
            Você pode mudar sua escolha a qualquer momento:{' '}
            <CookiePreferencesButton className="font-bold text-primary-800 underline" />
            . Também é possível apagar os cookies nas configurações do seu navegador.
          </p>
        </Section>

        <Section title="Compartilhamento">
          <p>
            Os dados não são vendidos. Eles podem ser compartilhados apenas com os serviços necessários ao
            funcionamento do site e do atendimento (hospedagem, WhatsApp e Google Ads, este último somente com o
            seu consentimento) ou quando exigido por lei ou por autoridade competente.
          </p>
        </Section>

        <Section title="Por quanto tempo os dados são guardados">
          <p>
            Os dados de atendimento são mantidos pelo tempo necessário para o acompanhamento do animal e para o
            cumprimento de obrigações legais e regulatórias da profissão. Os cookies de anúncio do Google expiram
            em até 90 dias, ou antes, se você retirar o consentimento ou apagá-los no navegador.
          </p>
        </Section>

        <Section title="Seus direitos">
          <p>
            Pela LGPD (art. 18), você pode pedir a confirmação de que seus dados são tratados, o acesso, a correção,
            a eliminação, a portabilidade, informações sobre compartilhamento e a revogação do consentimento. Basta
            escrever para{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-primary-800 underline">{CONTACT_EMAIL}</a>.
            Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
