/**
 * Ponto de entrada do i18n.
 * Cada página é gerada estaticamente no seu idioma — trocar de idioma é uma
 * navegação real (/ ↔ /en/), sem JavaScript para renderizar texto.
 */
import { pt, type Dictionary } from './pt';
import { en } from './en';

export type { Dictionary };

export const ui = { pt, en } as const;

export type Lang = keyof typeof ui;

/** Rota de cada idioma — português na raiz, inglês em /en/. */
export const routes: Record<Lang, string> = {
  pt: '/',
  en: '/en/',
};

/** Dicionário do idioma pedido. */
export function t(lang: Lang): Dictionary {
  return ui[lang];
}

/** O outro idioma — usado pelo seletor de idioma. */
export function altLang(lang: Lang): Lang {
  return lang === 'pt' ? 'en' : 'pt';
}
