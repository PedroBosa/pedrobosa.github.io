/**
 * Seções do menu do cabeçalho, na ordem em que aparecem.
 * Cada id corresponde ao `id` da <section> e à chave em `nav` no dicionário i18n.
 */
export const NAV_SECTIONS = ['about', 'projects', 'stack', 'education', 'contact'] as const;

export type SectionId = (typeof NAV_SECTIONS)[number];
