## Context

O site é uma página única em Next.js 15 com `output: 'export'` e `images.unoptimized: true`. Não há servidor nem otimização de imagens em runtime. Todo o conteúdo está centralizado em `constants.ts` e é consumido por componentes de seção. A motivação está em proposal.md e os requisitos em `specs/`.

Estado atual relevante:
- A metadata está em `app/layout.tsx` (`generateMetadata`). A imagem OG declara 1200x630, mas `arara.jpeg` tem 3024x4032 (retrato, cerca de 830 KB).
- As imagens `feline.png` e `jabuti.png` têm 864x1184 e pesam 1,5 a 2,2 MB.
- Todas as seções usam `h2` como rótulo pequeno e `h3` como título. O rodapé usa `h5`.
- O formulário do `Contact` faz `preventDefault` e não faz nada. O rodapé tem links `#` para "Política de Privacidade" e "Termos de Uso".
- O hero afirma "5+ anos de experiência", mas a trajetória exibida começa em 2021 (ONG), com graduação em 2023.

## Goals / Non-Goals

**Goals:**
- Uma única fonte de verdade em `constants.ts` para espécies, cidades, FAQ e etapas. A UI, o JSON-LD e o formulário derivam dela.
- Continuar 100% estático, sem novas dependências de runtime.

**Non-Goals:**
- Pipeline automático de otimização de imagens no build.
- Analytics e rastreamento de conversão do WhatsApp.
- Páginas por espécie ou por cidade (ficam para uma change futura; o modelo de dados abaixo já prepara isso).

## Decisions

### 1. Conteúdo estruturado em `constants.ts`, com uma fonte para três consumidores

```
constants.ts
  SPECIES_GROUPS  ----+--> <Species/>         (seção visível)
                      +--> <Contact/> select  (optgroups)
                      +--> description/FAQ    (texto)
  REGIONS         ----+--> Hero / Contact / select de cidade
                      +--> JSON-LD areaServed
  FAQ_ITEMS       ----+--> <Faq/>
                      +--> JSON-LD FAQPage
  HOW_IT_WORKS    -------> <HowItWorks/>
```

Novos tipos em `types.ts`: `SpeciesGroup { id, title, description, species: string[], primary: boolean, image? }`, `FaqItem { question, answer }` e `Step { title, description }`.

Por quê: garante por construção os requisitos de sincronia (FAQ visível igual ao schema; espécies e cidades iguais no select e na seção). A alternativa de deixar o texto direto nos componentes foi descartada porque gera divergência.

### 2. JSON-LD via `<script type="application/ld+json">` renderizado no servidor

Um componente `StructuredData` (server component) é renderizado em `app/page.tsx` e monta um `@graph`:

```
@graph
  VeterinaryCare  @id=<site>#business
    name, url, image, telephone (+55 62 ...), priceRange (omitir)
    areaServed: REGIONS.map(c => {@type: City, name: c, containedInPlace: "Espírito Santo"})
    openingHoursSpecification: Mo-Fr 08:00-18:00   (o mesmo texto já exibido no Contact)
    sameAs: [Instagram]
    founder / employee -> Person @id=<site>#isadora
  Person
    name, jobTitle, alumniOf: UFG
    hasCredential: EducationalOccupationalCredential "CRMV ES 04663"
  FAQPage
    mainEntity: FAQ_ITEMS.map(Question/Answer)
```

Sem `address.streetAddress`. Por ser um negócio de área de serviço, o `address` fica de fora ou, no máximo, com `addressRegion: "ES"` e `addressCountry: "BR"`.

Alternativa considerada: o campo `other` do `Metadata` do Next. Descartada porque não suporta script JSON-LD. O padrão recomendado pela documentação do Next é o `<script>` inline no page.

Observação: desde 2023, o Google restringe o rich result de FAQ a sites de governo e saúde. O `FAQPage` continua sendo semântica válida e o conteúdo da FAQ continua ajudando no ranking, mas o snippet expandido não é garantido.

### 3. Metadata

- Title (de 60 a 65 caracteres): `Veterinária de Silvestres e Exóticos a Domicílio | Dra. Isadora`.
- Description com atendimento a domicílio, aves, répteis e pequenos mamíferos, "também cães e gatos", e duas a três cidades principais (Vitória, Vila Velha, Cariacica).
- `SEO_KEYWORDS` e `keywords` são removidos.
- `openGraph.images` aponta para um novo `public/images/og.jpg` de 1200x630, recortado da arara, com cerca de 150 KB.

### 4. Imagens: conversão única e versionada, sem pipeline no build

Os arquivos são convertidos uma vez (sharp-cli, squoosh ou ferramenta equivalente, rodada pontualmente fora do build) para WebP com qualidade de cerca de 75, redimensionados para no máximo cerca de 1000 px no lado maior. Os novos arquivos são versionados e os originais pesados saem do `public/`.

Alternativa considerada: `next-image-export-optimizer`. Ela adiciona uma dependência e um passo de build para apenas 3 a 4 imagens. Não compensa agora, mas pode ser reavaliada quando houver páginas por espécie com muitas imagens.

As fotos continuam no About (`felino.webp`, `jabuti.webp`) e no Hero (`arara.webp`), com alts descritivos. Durante a implementação constatou-se que `feline.png` mostra uma **onça-pintada anestesiada**, não um gato doméstico. Por isso ela fica no About como evidência de experiência com fauna silvestre, e a seção de espécies fica sem foto (a spec não exige uma).

### 5. Headings

O padrão de cada seção passa a ser `<p class="eyebrow">Rótulo</p>` + `<h2>Título</h2>`, com `h3` nos cards e itens. O mesmo estilo visual é mantido, trocando apenas as tags. O `h5` do rodapé vira `<p>`.

### 6. Formulário para o WhatsApp

`Contact` já é `'use client'`. O formulário passa a ser controlado (ou lido via `FormData` no submit):

```
submit -> validação nativa (required) + checagem
       -> monta texto:
            "Olá, Dra. Isadora! Meu nome é {nome}, sou de {cidade}.
             Tenho um(a) {espécie} e gostaria de agendar uma consulta a domicílio."
             + (mensagem ? "\n\n{mensagem}" : "")
       -> url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`
       -> window.open(url, '_blank', 'noopener')  (fallback: location.href)
```

- O select de espécie usa `<optgroup>` gerado de `SPECIES_GROUPS`, mais a opção "Outra". A cidade vem de `REGIONS`.
- A validação usa `required` nativo mais `aria-invalid` e mensagem associada via `aria-describedby`.
- A função de montar o texto fica pura e exportável, por exemplo `buildWhatsappMessage(data)` em `lib/whatsapp.ts`, o que facilita testá-la isoladamente.
- `WHATSAPP_LINK` é mantido para os botões genéricos, com texto atualizado para mencionar a consulta a domicílio.

### 7. Rodapé e links mortos

Os links "Política de Privacidade" e "Termos de Uso" (`href="#"`) são removidos. O CRMV é adicionado ao rodapé, além do cabeçalho.

## Risks / Trade-offs

- [O DDD 62 não reforça o sinal local do ES] → O sinal local passa a vir de `areaServed`, das cidades no texto e, fora do código, do Google Perfil da Empresa configurado como área de serviço. A decisão de manter o número é da responsável.
- [Rich result de FAQ não aparece] → Isso é esperado (veja a Decisão 2). O valor está no conteúdo, não no snippet.
- [Furão, ouriço-pigmeu, papagaio e arara têm regras legais específicas] → A FAQ deixa claro que o atendimento é de animais de origem legal. A profissional confirma o texto antes da publicação.
- [O texto reescrito pode conter superlativos que conflitam com as regras do CFMV] → Há uma revisão explícita de texto entre as tarefas.
- [`window.open` pode ser bloqueado em alguns navegadores móveis] → Fallback para `location.href`.
- [Remover os originais das imagens] → Eles continuam no histórico do git, então a remoção pode ser revertida.

## Migration Plan

Deploy estático normal (`next build` → `out/`). Para rollback, basta reverter o commit. Depois do deploy:
1. Validar a página no Teste de Resultados Avançados (Rich Results Test) e no Schema Markup Validator.
2. Reenviar o sitemap no Google Search Console.
3. (Fora do código) Criar ou ajustar o Google Perfil da Empresa como área de serviço com as 7 cidades.

## Open Questions

- ~~"5+ anos de experiência" no hero~~ Resolvido: substituído pelo destaque verificável "Mestre em Ciência Animal · UFG".
- O texto final das respostas da FAQ sobre urgência e documentação de silvestres: a profissional valida a redação antes do deploy.
