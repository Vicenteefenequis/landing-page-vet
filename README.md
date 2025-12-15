# Landing page - Dra. Isadora Nascimento

Landing page estática para destacar a atuação veterinária da Dra. Isadora Nascimento. O projeto foi migrado para Next.js (App Router) com geração estática (SSG), otimização de fontes/imagens e configuração de SEO completa.

## Requisitos

- Node.js 20+
- npm (ou outro gerenciador compatível)

## Desenvolvimento

```bash
npm install
npm run dev
```
Acesse http://localhost:3000.

## Build e exportação estática

```bash
npm run build
```
O build gera a pasta `out/` pronta para deploy estático (FTP/CDN). Para pré-visualizar o resultado exportado:

```bash
npx serve out
```

## SEO e arquivos gerados

- `app/layout.tsx` define metadata (título, descrição, canonical, Open Graph e Twitter).
- `app/sitemap.ts` e `app/robots.ts` geram `sitemap.xml` e `robots.txt` durante o build.
- Imagens locais usam `next/image` com otimização estática (`images.unoptimized` no `next.config.mjs`).
- Defina `NEXT_PUBLIC_SITE_URL` para usar seu domínio real nas tags e arquivos gerados.

## Deploy (GitHub Actions)

O workflow em `.github/workflows/deploy.yml` instala dependências, roda o build e publica o conteúdo de `out/` via FTP.
