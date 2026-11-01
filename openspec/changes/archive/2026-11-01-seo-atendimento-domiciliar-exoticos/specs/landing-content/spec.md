## Purpose

Definir o conteúdo visível da landing page, voltado a tutores que buscam atendimento veterinário a domicílio para animais silvestres e exóticos de companhia, com cães e gatos como serviço secundário.

## ADDED Requirements

### Requirement: Posicionamento voltado ao tutor e ao atendimento a domicílio
A primeira dobra (hero) SHALL comunicar que o serviço é atendimento veterinário **a domicílio** de **animais silvestres e exóticos**, nas regiões atendidas, com uma chamada principal para agendar pelo WhatsApp. O texto da página MUST NOT apresentar zoológicos, clínicas ou empresas como público-alvo principal, nem usar termos de venda corporativa como "Solicitar Proposta" ou "Email Corporativo". A experiência institucional (zoológico, CETAS, mestrado) SHALL aparecer como credencial.

#### Scenario: Hero comunica o serviço
- **WHEN** um visitante abre a página
- **THEN** o hero mostra "silvestres", "exóticos" e "a domicílio" (ou "atendimento em casa"), as regiões atendidas e um botão de agendamento pelo WhatsApp

#### Scenario: Sem linguagem B2B
- **WHEN** o texto da página é revisado
- **THEN** não há "Solicitar Proposta", "Email Corporativo" nem frases que tratem zoológicos ou empresas como cliente principal

### Requirement: Seção de espécies atendidas
A página SHALL ter uma seção de espécies atendidas organizada em quatro grupos, nesta ordem e com estes nomes visíveis em texto (não apenas em imagens):
- Aves: calopsita, periquito, papagaio, arara
- Répteis: jabuti, tartaruga/cágado, iguana, serpentes, lagartos
- Pequenos mamíferos: coelho, porquinho-da-índia, hamster, chinchila, furão, ouriço-pigmeu-africano
- Cães e gatos (apresentado como atendimento complementar)

#### Scenario: Todas as espécies listadas
- **WHEN** a seção de espécies é exibida
- **THEN** cada espécie listada acima aparece como texto dentro do seu grupo

#### Scenario: Cães e gatos como complementares
- **WHEN** a seção de espécies é exibida
- **THEN** o grupo "Cães e gatos" aparece por último e é descrito como atendimento também oferecido, não como especialidade principal

### Requirement: Seção "Como funciona o atendimento a domicílio"
A página SHALL explicar, em etapas numeradas, o fluxo do atendimento: contato pelo WhatsApp, triagem/agendamento (incluindo a informação da taxa de deslocamento), visita a domicílio e acompanhamento.

#### Scenario: Etapas visíveis
- **WHEN** a seção é exibida
- **THEN** ela apresenta pelo menos quatro etapas numeradas, na ordem contato, agendamento, visita e acompanhamento

### Requirement: Serviços com consulta a domicílio em destaque
A seção de serviços SHALL listar "Consulta a domicílio" como primeiro serviço e SHALL descrever os demais serviços (orientação de manejo, atestados e laudos para transporte, palestras) em linguagem voltada ao tutor.

#### Scenario: Ordem dos serviços
- **WHEN** a seção de serviços é exibida
- **THEN** o primeiro card é o da consulta a domicílio

### Requirement: Seção de perguntas frequentes
A página SHALL ter uma seção FAQ com pelo menos estas perguntas:
- se há taxa de deslocamento (resposta: sim, varia conforme cidade/distância e é informada no agendamento, sem valores fixos na página)
- quais espécies são atendidas
- se atende animais silvestres e qual documentação é necessária (deixando claro que o atendimento é de silvestres de origem legal)
- quais cidades são atendidas
- como proceder em caso de urgência

#### Scenario: Pergunta sobre deslocamento
- **WHEN** a FAQ é exibida
- **THEN** há uma pergunta sobre a taxa de deslocamento, cuja resposta confirma a cobrança sem citar valores

#### Scenario: Pergunta sobre silvestres legalizados
- **WHEN** a FAQ é exibida
- **THEN** há uma pergunta sobre animais silvestres, cuja resposta menciona a necessidade de origem legal ou documentação

### Requirement: Conformidade com publicidade veterinária
O CRMV da profissional SHALL estar visível na página. O texto MUST NOT conter superlativos ou promessas de resultado (por exemplo, "o melhor", "mais alto padrão", "garantia de cura"), e afirmações numéricas (como anos de experiência) SHALL ser verificáveis pela trajetória exibida.

#### Scenario: CRMV visível
- **WHEN** a página é exibida
- **THEN** o número CRMV aparece no cabeçalho ou no rodapé

#### Scenario: Sem superlativos
- **WHEN** o texto é revisado
- **THEN** não há superlativos promocionais nem promessas de resultado

### Requirement: Sem links ou promessas inexistentes
A página MUST NOT conter links sem destino (`href="#"`) nem citar documentos que não existem (como política de privacidade ou termos de uso não publicados).

#### Scenario: Links válidos
- **WHEN** todos os links da página são verificados
- **THEN** nenhum aponta para `#` sozinho, e todo documento citado existe

### Requirement: Navegação para as novas seções
A navegação do cabeçalho SHALL incluir links para as seções de espécies e FAQ, além das existentes.

#### Scenario: Links de navegação
- **WHEN** o visitante clica em "Espécies" ou "Dúvidas" no menu
- **THEN** a página rola até a seção correspondente
