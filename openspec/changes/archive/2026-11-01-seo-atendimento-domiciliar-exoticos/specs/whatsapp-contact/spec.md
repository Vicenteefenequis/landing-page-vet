## Purpose

Transformar o formulário de contato em um canal real de agendamento, que gera uma mensagem pré-preenchida e abre a conversa no WhatsApp da profissional, sem backend.

## ADDED Requirements

### Requirement: Campos do formulário
O formulário de contato SHALL ter os campos: nome (obrigatório), espécie (seleção obrigatória, agrupada em Aves, Répteis, Pequenos mamíferos e Cães e gatos, com as mesmas espécies da seção de espécies, mais a opção "Outra"), cidade (seleção obrigatória com as cidades atendidas) e mensagem (opcional). O formulário MUST NOT pedir e-mail.

#### Scenario: Opções de espécie coerentes
- **WHEN** o seletor de espécie é aberto
- **THEN** ele lista os mesmos grupos e espécies exibidos na seção de espécies, mais "Outra"

#### Scenario: Opções de cidade coerentes
- **WHEN** o seletor de cidade é aberto
- **THEN** ele lista exatamente as cidades atendidas exibidas na página

### Requirement: Envio abre o WhatsApp com mensagem pré-preenchida
Ao enviar um formulário válido, o sistema SHALL abrir o WhatsApp do número configurado com uma mensagem pré-preenchida que contenha o nome, a espécie, a cidade e, se houver, a mensagem digitada. O texto SHALL estar corretamente codificado para URL, preservando acentos e quebras de linha.

#### Scenario: Envio válido
- **WHEN** o visitante preenche nome "Ana", espécie "Calopsita", cidade "Vila Velha" e mensagem "Está espirrando", e clica em enviar
- **THEN** abre-se `https://wa.me/<número configurado>` com um texto que contém "Ana", "Calopsita", "Vila Velha", "Está espirrando" e o pedido de consulta a domicílio

#### Scenario: Mensagem opcional vazia
- **WHEN** o visitante envia sem preencher a mensagem
- **THEN** o texto pré-preenchido é gerado sem trechos vazios ou marcadores sobrando

#### Scenario: Caracteres especiais
- **WHEN** o nome ou a mensagem contém acentos, "&", "?" ou "#"
- **THEN** o texto chega íntegro ao WhatsApp, sem truncar nem quebrar a URL

### Requirement: Validação antes do envio
O sistema MUST NOT abrir o WhatsApp se algum campo obrigatório estiver vazio. Nesse caso, SHALL indicar de forma acessível qual campo falta.

#### Scenario: Campo obrigatório ausente
- **WHEN** o visitante clica em enviar sem escolher a espécie
- **THEN** o WhatsApp não é aberto e o campo de espécie é sinalizado como obrigatório

### Requirement: Transparência sobre o redirecionamento
O botão de envio SHALL deixar claro que a mensagem será enviada pelo WhatsApp (por exemplo, "Enviar pelo WhatsApp"). O formulário MUST NOT afirmar concordância com uma política de privacidade inexistente.

#### Scenario: Rótulo do botão
- **WHEN** o formulário é exibido
- **THEN** o botão de envio menciona o WhatsApp, e não há referência a uma política de privacidade inexistente

### Requirement: Funcionamento sem servidor
O formulário SHALL funcionar inteiramente no navegador, compatível com a exportação estática do site, sem enviar dados a nenhum servidor próprio ou de terceiros além do redirecionamento ao WhatsApp.

#### Scenario: Sem requisições de rede no envio
- **WHEN** o formulário é enviado
- **THEN** nenhuma requisição é feita além da navegação para o link do WhatsApp
