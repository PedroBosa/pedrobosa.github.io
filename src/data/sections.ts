/**
 * Estrutura de navegação compartilhada entre o cabeçalho e o menu radial.
 * Cada seção tem um id de âncora e um ícone desenhado à mão (stroke, 24x24).
 */

export type SectionId =
  | 'home'
  | 'about'
  | 'projects'
  | 'education'
  | 'stack'
  | 'contact';

export interface Section {
  id: SectionId;
  icon: string;
}

/** Ícones (apenas o miolo do SVG; o wrapper é aplicado no componente). */
export const icons = {
  home: '<path d="M3.6 10.7 12 4l8.4 6.7"/><path d="M5.7 9.5V19a1.4 1.4 0 0 0 1.4 1.4h9.8A1.4 1.4 0 0 0 18.3 19V9.5"/><path d="M9.8 20.4v-5.3h4.4v5.3"/>',

  user: '<circle cx="12" cy="8.2" r="3.6"/><path d="M4.9 20.4a7.1 7.1 0 0 1 14.2 0"/>',

  code: '<path d="M8.9 8.3 4.7 12.4l4.2 4.1"/><path d="m15.1 8.3 4.2 4.1-4.2 4.1"/><path d="M13.4 5.5l-2.8 13.8"/>',

  cap: '<path d="M3 9.6 12 5.1l9 4.5-9 4.5z"/><path d="M6.9 11.9v4c0 1.1 2.3 2.2 5.1 2.2s5.1-1.1 5.1-2.2v-4"/><path d="M20.5 10.1v5.1"/>',

  layers:
    '<path d="m12 4.2 8.2 4.2-8.2 4.2-8.2-4.2z"/><path d="m4.4 12.3 7.6 3.9 7.6-3.9"/><path d="m4.4 16.1 7.6 3.9 7.6-3.9"/>',

  mail: '<rect x="3.4" y="6.2" width="17.2" height="11.6" rx="2.2"/><path d="m4.7 8.1 7.3 5.1 7.3-5.1"/>',

  star: '<path d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75-5.2 2.75 1-5.8-4.2-4.1 5.8-.85z"/>',

  fork: '<circle cx="7" cy="5.6" r="2.1"/><circle cx="17" cy="5.6" r="2.1"/><circle cx="12" cy="18.4" r="2.1"/><path d="M7 7.7v2.2a3.4 3.4 0 0 0 3.4 3.4h3.2A3.4 3.4 0 0 0 17 9.9V7.7"/><path d="M12 13.3v3.1"/>',

  download: '<path d="M12 3.8v10.4"/><path d="m7.6 10.4 4.4 4.4 4.4-4.4"/><path d="M4.6 18.2v1.2a.8.8 0 0 0 .8.8h13.2a.8.8 0 0 0 .8-.8v-1.2"/>',

  github:
    '<path d="M12 2.6a9.4 9.4 0 0 0-3 18.3c.47.09.64-.2.64-.45v-1.7c-2.6.57-3.16-1.15-3.16-1.15-.43-1.08-1.04-1.37-1.04-1.37-.85-.58.06-.57.06-.57.94.07 1.44.97 1.44.97.84 1.43 2.2 1.02 2.73.78.09-.6.33-1.02.6-1.25-2.08-.24-4.27-1.04-4.27-4.63 0-1.02.36-1.86.96-2.51-.1-.24-.42-1.19.09-2.48 0 0 .79-.25 2.58.96a8.9 8.9 0 0 1 4.7 0c1.79-1.21 2.58-.96 2.58-.96.51 1.29.19 2.24.09 2.48.6.65.96 1.49.96 2.51 0 3.6-2.2 4.39-4.29 4.62.34.29.64.87.64 1.75v2.6c0 .25.17.54.65.45A9.4 9.4 0 0 0 12 2.6Z"/>',

  linkedin:
    '<rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4"/><path d="M8.1 10.4v6.3"/><circle cx="8.1" cy="7.7" r="1.15"/><path d="M12 16.7v-6.3"/><path d="M12 13.2c0-1.6.95-2.6 2.4-2.6s2.3 1 2.3 2.6v3.5"/>',

  mailSolid:
    '<rect x="3.2" y="5.6" width="17.6" height="12.8" rx="2.4"/><path d="m4.6 7.6 7.4 5.1 7.4-5.1"/>',

  arrow: '<path d="M5 12h13"/><path d="m12.5 6 6 6-6 6"/>',

  check: '<path d="m4.8 12.6 4.6 4.6 9.8-10.4"/>',

  pin: '<path d="M12 21s6.6-5.4 6.6-10.4A6.6 6.6 0 0 0 5.4 10.6C5.4 15.6 12 21 12 21Z"/><circle cx="12" cy="10.4" r="2.4"/>',

  trophy:
    '<path d="M7.4 4.4h9.2v3.9a4.6 4.6 0 0 1-9.2 0z"/><path d="M7.4 5.6H5a1.6 1.6 0 0 0 0 3.2h1"/><path d="M16.6 5.6H19a1.6 1.6 0 0 1 0 3.2h-1"/><path d="M12 13v3.4"/><path d="M8.6 19.6h6.8l-.7-2.2a1 1 0 0 0-.95-.7h-3.5a1 1 0 0 0-.95.7z"/>',

  calendar:
    '<rect x="3.6" y="5.4" width="16.8" height="15" rx="2.4"/><path d="M3.6 10h16.8"/><path d="M8.2 3.6v3.4"/><path d="M15.8 3.6v3.4"/>',

  external:
    '<path d="M14 4.4h5.6V10"/><path d="M19.6 4.4 11 13"/><path d="M18 14v4.6a1 1 0 0 1-1 1H5.4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1H10"/>',

  menu: '<path d="M4.6 8.4h14.8"/><path d="M4.6 15.6h14.8"/>',

  globe:
    '<circle cx="12" cy="12" r="8.4"/><path d="M3.6 12h16.8"/><path d="M12 3.6c2.2 2.3 3.4 5.3 3.4 8.4S14.2 18.1 12 20.4c-2.2-2.3-3.4-5.3-3.4-8.4S9.8 5.9 12 3.6Z"/>',
} as const;

/** Ordem dos setores na roda (começa no topo e gira em sentido horário). */
export const sections: Section[] = [
  { id: 'home', icon: icons.home },
  { id: 'about', icon: icons.user },
  { id: 'projects', icon: icons.code },
  { id: 'education', icon: icons.cap },
  { id: 'stack', icon: icons.layers },
  { id: 'contact', icon: icons.mail },
];
