## Why

A landing page hoje fala com zoológicos e empresas ("Solicitar Proposta", "Email Corporativo", "Pets Não Convencionais"). O modelo real de atuação, porém, é o atendimento **a domicílio/volante** de **animais silvestres e exóticos de companhia**, com cães e gatos como serviço secundário. Essa diferença de intenção, somada à falta de dados estruturados e de termos por espécie, impede que a página ranqueie nas buscas que os tutores fazem, como "veterinário para jabuti em Vila Velha" ou "veterinária de exóticos a domicílio".

## What Changes

- Reposicionar todo o texto para o tutor: atendimento a domicílio de silvestres (legalizados) e exóticos de companhia. Cães e gatos aparecem como serviço secundário. A experiência em zoológico, CETAS e mestrado passa a servir como credencial, não como público-alvo.
- Nova seção **Espécies atendidas** em quatro grupos: Aves (calopsita, periquito, papagaio, arara); Répteis (jabuti, tartaruga/cágado, iguana, serpentes, lagartos); Pequenos mamíferos (coelho, porquinho-da-índia, hamster, chinchila, furão, ouriço-pigmeu-africano); Cães e gatos.
- Nova seção **Como funciona o atendimento a domicílio**, com as etapas do contato ao acompanhamento.
- Nova seção **FAQ**: taxa de deslocamento (cobrada, valor informado no agendamento), espécies, documentação de silvestres, regiões e emergências.
- Serviços reordenados, com "Consulta a domicílio" em primeiro lugar e sem a linguagem de "proposta comercial".
- Novos title e description com foco em "silvestres e exóticos a domicílio". Remoção da meta `keywords`. Correção das dimensões da imagem Open Graph.
- Dados estruturados JSON-LD: `VeterinaryCare` como negócio de área de serviço (sem endereço), com `areaServed` nas 7 cidades e a fundadora com credencial CRMV. Também `FAQPage`.
- Hierarquia de headings: um único `h1` e um `h2` por seção. Os rótulos pequenos ("Sobre Mim" e similares) deixam de ser headings.
- Imagens comprimidas e convertidas para um formato moderno, com textos alternativos descritivos.
- **BREAKING (UX):** o formulário de contato deixa de ser decorativo. Ele passa a montar uma mensagem pré-preenchida (nome, espécie, cidade, mensagem) e abre o WhatsApp. O campo "Email Corporativo" e a menção a uma política de privacidade inexistente são removidos.
- O número de WhatsApp continua o atual (DDD 62), por decisão da responsável.

Fora de escopo (próximas changes): páginas por espécie, páginas por cidade, blog/guias por problema e configuração do Google Perfil da Empresa (que acontece fora do código).

## Capabilities

### New Capabilities
- `landing-seo`: metadata (title, description, Open Graph), dados estruturados JSON-LD, hierarquia de headings, otimização e texto alternativo das imagens.
- `landing-content`: posicionamento voltado ao tutor para atendimento a domicílio de silvestres e exóticos, seções de espécies atendidas, como funciona, serviços e FAQ, e conformidade com as regras de publicidade veterinária.
- `whatsapp-contact`: formulário de contato que gera uma mensagem pré-preenchida e abre o WhatsApp.

### Modified Capabilities
<!-- Nenhuma: ainda não existem specs no projeto. -->

## Impact

- `constants.ts`: novas constantes (espécies, FAQ, etapas, title/description); remoção de `SEO_KEYWORDS`; serviços revisados.
- `app/layout.tsx`: metadata e injeção do JSON-LD.
- `app/page.tsx`: inclusão das novas seções.
- `components/Hero.tsx`, `About.tsx`, `Services.tsx`, `Qualifications.tsx`, `Contact.tsx`: texto e headings.
- Novos componentes: `Species`, `HowItWorks`, `Faq`. O formulário do `Contact` passa a ter estado no cliente.
- `components/Header.tsx`: links de navegação para as novas seções.
- `public/images/`: imagens otimizadas.
- `types.ts`: tipos para espécies, FAQ e etapas.
- Sem novas dependências obrigatórias e sem backend. Compatível com `output: 'export'`.
