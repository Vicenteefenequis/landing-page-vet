# landing-seo Specification

## Purpose

Garantir que a landing page seja encontrada e entendida por buscadores e redes sociais como serviço veterinário de silvestres e exóticos a domicílio nas regiões atendidas.

## Requirements

### Requirement: Title e description focados em atendimento a domicílio de silvestres e exóticos
A página SHALL ter um `<title>` de no máximo 65 caracteres que contenha os termos "silvestres", "exóticos" e "domicílio", além do nome da profissional. A meta description SHALL ter entre 120 e 160 caracteres e citar o atendimento a domicílio, pelo menos três grupos de espécies e pelo menos duas cidades atendidas. A página MUST NOT emitir a meta tag `keywords`.

#### Scenario: Title adequado
- **WHEN** o HTML exportado da página inicial é inspecionado
- **THEN** o `<title>` tem até 65 caracteres e contém "Silvestres", "Exóticos", "Domicílio" e o nome da profissional

#### Scenario: Description adequada
- **WHEN** a meta `description` é inspecionada
- **THEN** ela tem entre 120 e 160 caracteres e menciona atendimento a domicílio, grupos de espécies (por exemplo, aves, répteis e pequenos mamíferos) e cidades atendidas

#### Scenario: Sem meta keywords
- **WHEN** o `<head>` é inspecionado
- **THEN** não existe `<meta name="keywords">`

### Requirement: Imagem Open Graph com dimensões reais
A página SHALL declarar uma imagem Open Graph/Twitter cujas dimensões reais correspondam às declaradas, no formato paisagem 1200x630, com texto alternativo descritivo.

#### Scenario: Dimensões coerentes
- **WHEN** a imagem referenciada em `og:image` é baixada
- **THEN** seu tamanho é 1200x630 pixels e coincide com `og:image:width` e `og:image:height`

### Requirement: Dados estruturados de negócio veterinário de área de serviço
A página SHALL incluir JSON-LD válido do tipo `VeterinaryCare` com nome, URL, telefone, imagem, `areaServed` listando cada cidade atendida, horário de atendimento, perfis sociais (`sameAs`) e a profissional responsável como `Person` com a credencial CRMV. Como o atendimento é exclusivamente a domicílio, o JSON-LD MUST NOT declarar endereço de rua (`streetAddress`).

#### Scenario: Schema válido
- **WHEN** a página é submetida ao validador de dados estruturados (Schema Markup Validator ou Teste de Resultados Avançados (Rich Results Test))
- **THEN** o bloco `VeterinaryCare` é reconhecido sem erros

#### Scenario: Todas as cidades em areaServed
- **WHEN** o JSON-LD é inspecionado
- **THEN** `areaServed` contém uma entrada `City` para cada cidade exibida na página, sem omissões nem extras

#### Scenario: Sem endereço físico
- **WHEN** o JSON-LD é inspecionado
- **THEN** não há `streetAddress`

### Requirement: Dados estruturados de FAQ espelhando o conteúdo visível
A página SHALL incluir JSON-LD `FAQPage` cujas perguntas e respostas sejam idênticas às exibidas na seção FAQ.

#### Scenario: FAQ sincronizado
- **WHEN** o JSON-LD `FAQPage` e a seção FAQ visível são comparados
- **THEN** cada pergunta e resposta do schema aparece com o mesmo texto na página, e vice-versa

### Requirement: Hierarquia de headings semântica
A página SHALL ter exatamente um `h1`, que expresse o serviço principal (silvestres e exóticos a domicílio). Cada seção de conteúdo SHALL ter um único `h2` como título, e os itens internos SHALL usar `h3`. Rótulos decorativos acima dos títulos ("Sobre Mim", "Trajetória" etc.) MUST NOT ser headings.

#### Scenario: Um único h1
- **WHEN** o HTML exportado é inspecionado
- **THEN** existe exatamente um elemento `h1`, e ele contém os termos "silvestres" e "exóticos"

#### Scenario: Sem saltos de nível
- **WHEN** o outline de headings é gerado
- **THEN** nenhuma seção pula de `h2` para `h4`, e nenhum rótulo decorativo aparece como heading

### Requirement: Imagens leves e descritivas
Cada imagem de conteúdo SHALL ser servida em formato moderno e comprimido, com no máximo 250 KB por arquivo. Cada uma SHALL ter texto alternativo que descreva o animal ou a cena em português. A imagem principal (LCP) SHALL ser carregada com prioridade.

#### Scenario: Peso das imagens
- **WHEN** o diretório exportado é inspecionado
- **THEN** nenhuma imagem referenciada pela página passa de 250 KB

#### Scenario: Alt descritivo
- **WHEN** as tags `<img>` são inspecionadas
- **THEN** todas têm `alt` não vazio que nomeia a espécie ou a situação (por exemplo, "Jabuti em consulta veterinária a domicílio")

### Requirement: Ícone do site
A página SHALL declarar um ícone de site (favicon) próprio, que represente o atendimento a domicílio de animais silvestres e exóticos, legível a partir de 16x16 pixels, além de um ícone de toque Apple de 180x180 pixels.

#### Scenario: Ícones declarados
- **WHEN** o `<head>` do HTML exportado é inspecionado
- **THEN** existem `<link rel="icon">` e `<link rel="apple-touch-icon">` apontando para arquivos que existem no build

### Requirement: Sitemap e robots preservados
A página SHALL continuar publicando `robots.txt`, que permite rastreamento e aponta para o sitemap, e `sitemap.xml`, que contém a URL canônica da página inicial.

#### Scenario: Arquivos de rastreamento
- **WHEN** o build estático é gerado
- **THEN** `robots.txt` e `sitemap.xml` existem e referenciam a URL canônica do site
