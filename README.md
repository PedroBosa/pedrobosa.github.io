# Pedro Bosa — Portfólio

Portfólio de uma página, em português e inglês, feito com [Astro](https://astro.build).
Saída 100% estática: nenhum framework JavaScript roda no navegador.

- Cabeçalho flutuante que vira uma "pílula" com menu ao rolar a página
- Menu mobile acessível (`aria-expanded`, `aria-controls`, Escape e fechamento ao clicar)
- Hero com rastro de tinta que segue o cursor (e pincel automático quando o mouse está parado)
- Versões `/` (PT-BR) e `/en/` (EN), com `hreflang`, canonical e lembrança do idioma escolhido
- Demonstração do RadialFlow em vídeo, com poster estático e respeito a `prefers-reduced-motion`
- Currículo em PDF (PT e EN), e-mail, GitHub e LinkedIn em destaque
- SEO completo: Open Graph, Twitter Card, JSON-LD `Person`, sitemap, `robots.txt` e página 404
- Fontes self-hosted em WOFF2, subset Latin, com preload e `font-display: optional`
- Respeita `prefers-reduced-motion`, tem link "pular para o conteúdo" e foco visível
- Deploy automático no GitHub Pages

## Começando

Requer **Node.js 24 LTS** (ou qualquer versão `>= 22.23.4`). A versão usada no CI está em `.nvmrc`.

```bash
npm ci
npm run dev       # servidor local em http://localhost:4321
```

| Comando           | O que faz                                              |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Servidor de desenvolvimento com recarga automática     |
| `npm run check`   | Verifica tipos (TypeScript) e arquivos `.astro`        |
| `npm run build`   | Gera o site estático em `dist/`                        |
| `npm run preview` | Serve o conteúdo de `dist/` para conferir o build      |

Antes de publicar, rode os dois comandos de validação:

```bash
npm run check   # 0 erros, 0 avisos, 0 hints
npm run build   # gera dist/ com /, /en/, /404.html e sitemap
```

## Estrutura

```
.
├── .github/workflows/deploy.yml   # check + build + deploy no GitHub Pages
├── public/
│   ├── cv/                        # currículos em PDF (PT e EN)
│   ├── fonts/                     # Archivo e Source Serif 4 (WOFF2, subset Latin)
│   ├── og/og-image.png            # imagem 1200×630 para Open Graph/Twitter
│   ├── projects/                  # vídeo, poster e GIF do RadialFlow
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/                # Header (menu mobile) e Footer
│   │   ├── sections/              # Hero, About, Projects, Education, Stack, Contact
│   │   ├── ui/                    # Edge e Swoosh (decoração)
│   │   └── HomePage.astro         # monta a página completa em um idioma
│   ├── data/
│   │   ├── site.ts                # nome, links, CV, e-mail e métricas do GitHub
│   │   └── nav.ts                 # seções do menu do cabeçalho
│   ├── i18n/
│   │   ├── pt.ts                  # textos em português (define o tipo do dicionário)
│   │   ├── en.ts                  # textos em inglês (precisa ter as mesmas chaves)
│   │   └── index.ts               # t(), rotas e idioma alternativo
│   ├── layouts/Layout.astro       # <head>, SEO, JSON-LD, fontes, header e footer
│   ├── pages/
│   │   ├── index.astro            # rota /     (PT)
│   │   ├── en/index.astro         # rota /en/  (EN)
│   │   └── 404.astro              # página de erro
│   └── styles/
│       ├── global.css             # ponto de entrada (importa os demais)
│       ├── fonts.css              # @font-face self-hosted
│       ├── tokens.css             # cores, fontes, espaçamento
│       ├── base.css               # reset, tipografia, skip link
│       ├── components.css         # botões, links, listas, tons de seção
│       ├── layout.css             # cabeçalho, menu mobile e rodapé
│       └── sections.css           # estilos de cada seção
├── astro.config.mjs               # site, sitemap e i18n
├── package.json
└── README.md
```

## Como editar o conteúdo

| Quero mudar…                                  | Edite                                                       |
| --------------------------------------------- | ----------------------------------------------------------- |
| Textos (PT e EN)                              | `src/i18n/pt.ts` e `src/i18n/en.ts`                         |
| E-mail, LinkedIn, GitHub, CV                  | `src/data/site.ts`                                          |
| Estrelas, forks, licença e versão             | `src/data/site.ts` (fallback) + API do GitHub no build      |
| Itens do menu                                 | `src/data/nav.ts` (e a chave `nav` nos dicionários)         |
| Cores, fontes, espaçamento                    | `src/styles/tokens.css`                                     |
| Domínio do site                               | `site` em `astro.config.mjs`                                |
| Currículos                                    | Substitua os PDFs em `public/cv/`                           |
| Imagem de compartilhamento                    | Substitua `public/og/og-image.png` (1200×630)               |
| Vídeo/poster do RadialFlow                    | Substitua os arquivos em `public/projects/`                 |

### Métricas do GitHub

`getRepoStats()` em `src/data/site.ts` consulta a API do GitHub em build-time e usa valores de fallback se a API falhar, estourar o rate limit ou o build estiver offline. No GitHub Actions, o workflow passa `GITHUB_TOKEN` para elevar o limite de requisições.

### Currículos

Os PDFs em `public/cv/` são gerados a partir de HTML A4 e impressos com Chrome headless. Para atualizar, edite o conteúdo, gere novamente os PDFs e confira se cada um continua com uma página.

### Fontes

As fontes em `public/fonts/` são subsets Latin das variáveis Archivo e Source Serif 4. O `Layout.astro` faz preload dos dois arquivos e `fonts.css` usa `font-display: optional` para evitar CLS. Se adicionar textos com novos caracteres, gere um novo subset antes de publicar.

## Deploy (GitHub Pages)

O site é servido na raiz de `https://pedrobosa.github.io`, com o repositório `pedrobosa.github.io`.

1. Crie o repositório `pedrobosa.github.io` na sua conta do GitHub.
2. Faça push da branch `main`.
3. No repositório, abra **Settings → Pages** e em **Source** escolha **GitHub Actions**.
4. O workflow roda `npm ci`, `npm run check`, `npm run build` e publica `dist/`.
5. Se o repositório tiver outro nome, defina também `base: '/nome-do-repositorio'` em `astro.config.mjs` e ajuste o caminho do favicon em `src/layouts/Layout.astro` e as rotas em `src/i18n/index.ts`.

### Checklist pós-deploy

- [ ] `https://pedrobosa.github.io/` abre a versão PT
- [ ] `https://pedrobosa.github.io/en/` abre a versão EN
- [ ] O toggle PT/EN funciona nos dois sentidos
- [ ] O menu mobile abre, fecha no Escape e fecha ao clicar em um link
- [ ] O skip link leva o foco ao conteúdo
- [ ] O e-mail abre o cliente de e-mail
- [ ] Os dois CVs baixam
- [ ] O vídeo do RadialFlow carrega (ou mostra o poster com reduced motion)
- [ ] `https://pedrobosa.github.io/404.html` e uma URL inexistente mostram a 404
- [ ] `https://pedrobosa.github.io/sitemap-index.xml` e `/robots.txt` respondem
- [ ] O preview de link (Open Graph) mostra a imagem 1200×630
- [ ] O Lighthouse mobile está sem erros de acessibilidade e com CLS baixo

## Notas técnicas

- **Redirecionamento de idioma:** só acontece na raiz `/`. Um acesso explícito a `/en/` nunca é sequestrado.
- **Menu mobile:** o botão usa `aria-expanded` e `aria-controls`; o painel fecha no Escape, ao clicar em um link e ao clicar fora.
- **Skip link:** `<main id="main" tabindex="-1">` recebe o foco, com `scroll-margin-top` para compensar o header fixo.
- **Contraste:** o texto sobre o vermelho usa `#fff` (4,68:1), aprovado no AA.
- **Sitemap:** gerado por `@astrojs/sitemap` em `dist/sitemap-index.xml`.
- **404:** `src/pages/404.astro` é publicada como `404.html` pelo GitHub Pages.
