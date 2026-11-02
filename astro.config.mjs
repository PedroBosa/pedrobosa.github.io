import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Domínio final do site. Troque se usar domínio próprio.
  // (Se publicar em um subcaminho, como usuario.github.io/repo, defina também `base`.)
  site: 'https://pedrobosa.github.io',

  // Saída 100% estática: nenhum framework JavaScript no cliente.
  output: 'static',

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: {
          pt: 'pt-BR',
          en: 'en',
        },
      },
    }),
  ],

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      // Português na raiz (/) e inglês em /en/.
      prefixDefaultLocale: false,
    },
  },

  build: {
    // CSS pequeno entra inline automaticamente; o restante vira um arquivo único.
    inlineStylesheets: 'auto',
  },

  compressHTML: true,
});
