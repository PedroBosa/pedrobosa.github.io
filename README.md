# Pedro Bosa — Portfólio

Portfólio de uma página, em português e inglês, feito com [Astro](https://astro.build).
Saída 100% estática: nenhum framework JavaScript roda no navegador.

- Cabeçalho flutuante que vira uma "pílula" com menu ao rolar a página
- Hero com rastro de tinta que segue o cursor (e pincel automático quando o mouse está parado)
- Versões `/` (PT-BR) e `/en/` (EN), com `hreflang`, canonical e lembrança do idioma escolhido
- Respeita `prefers-reduced-motion`, com link "pular para o conteúdo" e foco visível
- Deploy automático no GitHub Pages

## Começando

Requer Node.js 20.3 ou superior (a versão usada no CI está em `.nvmrc`).

```bash
npm install
npm run dev       # servidor local em http://localhost:4321
```

| Comando           | O que faz                                              |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Servidor de desenvolvimento com recarga automática     |
| `npm run check`   | Verifica tipos (TypeScript) e arquivos `.astro`        |
| `npm run build`   | Gera o site estático em `dist/`                        |
| `npm run preview` | Serve o conteúdo de `dist/` para conferir o build      |

## Estrutura

```
.
├── .github/workflows/deploy.yml   # check + build + deploy no GitHub Pages
├── public/                        # arquivos servidos como estão (favicon)
├── src/
│   ├── components/
│   │   ├── layout/                # Header e Footer
│   │   ├── sections/              # Hero, About, Projects, Education, Stack, Contact
│   │   ├── ui/                    # peças decorativas: Edge (borda ondulada), Swoosh
│   │   └── HomePage.astro         # monta a página completa em um idioma
│   ├── data/
│   │   ├── site.ts                # nome, links (GitHub, LinkedIn, e-mail) e números
│   │   └── nav.ts                 # seções do menu do cabeçalho
│   ├── i18n/
│   │   ├── pt.ts                  # textos em português (define o tipo do dicionário)
│   │   ├── en.ts                  # textos em inglês (precisa ter as mesmas chaves)
│   │   └── index.ts               # t(), rotas e idioma alternativo
│   ├── layouts/Layout.astro       # <head>, SEO, cabeçalho, rodapé
│   ├── pages/
│   │   ├── index.astro            # rota /     (PT)
│   │   └── en/index.astro         # rota /en/  (EN)
│   └── styles/
│       ├── global.css             # ponto de entrada (importa os demais)
│       ├── tokens.css             # cores, fontes, espaçamento
│       ├── base.css               # reset, tipografia, acessibilidade
│       ├── components.css         # botões, links, listas, tons de seção
│       ├── layout.css             # cabeçalho e rodapé
│       └── sections.css           # estilos de cada seção
├── astro.config.mjs
└── package.json
```

## Como editar o conteúdo

| Quero mudar…                                  | Edite                                              |
| --------------------------------------------- | -------------------------------------------------- |
| Textos (PT e EN)                              | `src/i18n/pt.ts` e `src/i18n/en.ts`                |
| E-mail, LinkedIn, GitHub, estrelas/forks      | `src/data/site.ts`                                 |
| Itens do menu                                 | `src/data/nav.ts` (e a chave `nav` nos dicionários) |
| Cores, fontes, espaçamento                    | `src/styles/tokens.css`                            |
| Domínio do site                               | `site` em `astro.config.mjs`                       |

Pontos de atenção:

- **E-mail:** `LINKS.email` está vazio. Preencha em `src/data/site.ts` e o canal aparece sozinho na seção de contato.
- **Estrelas e forks do RadialFlow** (`STATS`) são valores fixos, porque o site é estático. Atualize-os de tempos em tempos.
- **Dicionários:** `en.ts` é tipado a partir de `pt.ts`. Se faltar ou sobrar uma chave em um idioma, o `npm run check` (e o deploy) acusa o erro.

## Deploy (GitHub Pages)

1. No repositório, abra **Settings → Pages** e em **Source** escolha **GitHub Actions**.
2. Faça push na branch `main`. O workflow roda `npm ci`, `npm run check` e `npm run build`, e publica `dist/`.

O site está configurado para ser servido na **raiz do domínio** (`https://pedrobosa.github.io`, repositório `pedrobosa.github.io`). Para publicar em um subcaminho (`usuario.github.io/repositorio`), defina também `base: '/repositorio'` em `astro.config.mjs` e ajuste o caminho do favicon em `src/layouts/Layout.astro` e as rotas em `src/i18n/index.ts`.
