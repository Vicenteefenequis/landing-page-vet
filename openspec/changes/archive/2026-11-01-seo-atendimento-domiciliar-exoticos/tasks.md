## 1. Modelo de conteúdo

- [x] 1.1 Adicionar os tipos `SpeciesGroup`, `FaqItem` e `Step` em `types.ts` e verificar que `npx tsc --noEmit` passa
- [x] 1.2 Criar `SPECIES_GROUPS` em `constants.ts` com os 4 grupos e todas as espécies da spec `landing-content` (Cães e gatos por último, `primary: false`) e conferir a lista contra a spec
- [x] 1.3 Criar `FAQ_ITEMS` (deslocamento sem valores, espécies, silvestres de origem legal/documentação, cidades, urgência) e `HOW_IT_WORKS` (contato → agendamento + taxa → visita → acompanhamento) e conferir contra a spec
- [x] 1.4 Revisar `SERVICES`, colocando "Consulta a domicílio" em primeiro e reescrevendo os demais para o tutor; atualizar `ROLE`, `SEO_DESCRIPTION` (de 120 a 160 caracteres, verificada com `.length`), o texto de `WHATSAPP_LINK` e `NAV_LINKS` (incluir Espécies e Dúvidas); remover `SEO_KEYWORDS`. Verificar com `npx tsc --noEmit`

## 2. Imagens

- [x] 2.1 Converter `arara.jpeg`, `feline.png` e `jabuti.png` para WebP (no máximo cerca de 1000 px no lado maior, até 250 KB cada) com uma ferramenta pontual, sem adicionar dependência ao `package.json`; remover os originais e conferir os tamanhos com `ls -la public/images`
- [x] 2.2 Gerar `public/images/og.jpg` de 1200x630 a partir da arara, com até cerca de 150 KB, e conferir as dimensões com `file public/images/og.jpg`
- [x] 2.3 Atualizar os imports e os `alt` descritivos em Hero e About (e no novo Species) e verificar que `npm run build` passa

## 3. Metadata e dados estruturados

- [x] 3.1 Atualizar `generateMetadata` em `app/layout.tsx`: novo title (até 65 caracteres, com Silvestres, Exóticos, Domicílio e o nome), nova description, sem `keywords`, OG e Twitter apontando para `og.jpg` 1200x630 com alt descritivo. Verificar no `out/index.html` que o `<title>` está correto e que não existe `meta name="keywords"`
- [ ] 3.2 Criar o componente server `StructuredData` com um `@graph` contendo `VeterinaryCare` (`areaServed` derivado de `REGIONS`, sem `streetAddress`, `openingHours`, `sameAs` do Instagram, telefone), `Person` com credencial CRMV e `FAQPage` derivado de `FAQ_ITEMS`; renderizar em `app/page.tsx`. Verificar que o JSON em `out/index.html` passa no Schema Markup Validator sem erros
- [x] 3.3 Confirmar que `robots.txt` e `sitemap.xml` continuam sendo gerados em `out/` com a URL canônica

## 4. Seções e texto

- [x] 4.1 Reescrever o Hero: `h1` com "silvestres", "exóticos" e "a domicílio", regiões, CTA "Agendar visita pelo WhatsApp", sem linguagem B2B; substituir o destaque "5+ anos" por "Mestre em Ciência Animal · UFG" (decisão do usuário) e verificar visualmente com `npm run dev`
- [x] 4.2 Reescrever o About para o tutor, usando zoológico, CETAS e mestrado como credencial e sem superlativos; verificar com grep que "zoológicos e clínicas" não aparece mais como público
- [x] 4.3 Criar o componente `Species` (4 grupos, espécies como texto, Cães e gatos por último como complementar) e verificar visualmente que todas as espécies aparecem
- [x] 4.4 Criar o componente `HowItWorks` com as etapas numeradas e verificar visualmente a ordem
- [x] 4.5 Criar o componente `Faq` a partir de `FAQ_ITEMS` (usando `<details>`/`<summary>` ou equivalente acessível) e verificar que o texto visível é idêntico ao do `FAQPage` no JSON-LD
- [x] 4.6 Ajustar Services e Qualifications ao novo texto e incluir Species, HowItWorks e Faq em `app/page.tsx` na ordem Hero → About → Species → HowItWorks → Services → Qualifications → Faq → Contact; verificar que a navegação do cabeçalho rola até cada seção

## 5. Headings, rodapé e links

- [x] 5.1 Em todas as seções, trocar o rótulo `h2` por `<p>` e o título `h3` por `h2`, e os cards de `h4` para `h3`; no rodapé, trocar `h5` por `<p>`. Verificar com `grep -o '<h[1-6]' out/index.html | sort | uniq -c` que existe exatamente 1 `h1`, sem `h4`/`h5` fora de contexto
- [x] 5.2 Remover os links "Política de Privacidade" e "Termos de Uso" (`href="#"`) e adicionar o CRMV ao rodapé; verificar com `grep 'href="#"' out/index.html` que não sobra nenhum resultado

- [x] 5.3 Adicionar o ícone do site (casa + jabuti nas cores da marca) como `app/icon.svg` e `app/apple-icon.png` (180x180) e verificar que `out/index.html` contém `<link rel="icon"` e `<link rel="apple-touch-icon"`

## 6. Formulário para o WhatsApp

- [x] 6.1 Criar `lib/whatsapp.ts` com a função pura `buildWhatsappMessage({ nome, especie, cidade, mensagem })` e `buildWhatsappUrl(...)` usando `encodeURIComponent`; verificar com um script `node`/`tsx` pontual os casos com e sem mensagem e com acentos, "&", "?" e "#"
- [x] 6.2 Reescrever o formulário do `Contact`: nome, espécie (optgroups de `SPECIES_GROUPS` + "Outra"), cidade (de `REGIONS`) e mensagem opcional; remover o e-mail corporativo e o aviso de política de privacidade; botão "Enviar pelo WhatsApp". Verificar visualmente
- [ ] 6.3 Implementar o submit: validação de obrigatórios com `aria-invalid`/mensagem, `window.open` com fallback para `location.href`, sem outras requisições. Verificar no navegador (aba Network) que o envio válido abre o wa.me com o texto completo e que o envio sem espécie não abre nada

## 7. Revisão e verificação final

- [ ] 7.1 Revisar todo o texto conforme as regras de publicidade do CFMV (sem superlativos ou promessas de resultado, CRMV visível) e obter da profissional a validação das respostas da FAQ sobre urgência e documentação de silvestres
- [x] 7.2 Rodar `npm run build` e `npm run lint` sem erros, e conferir em `out/` o peso das imagens (até 250 KB), o title, a description, o OG e o JSON-LD
- [ ] 7.3 Rodar Lighthouse (mobile) na build servida localmente e registrar as notas de SEO e performance (meta: SEO ≥ 95, sem alerta de imagem grande no LCP)
