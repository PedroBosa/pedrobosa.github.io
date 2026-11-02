/**
 * Conteúdo em inglês. Tipado por `Dictionary` (derivado de `pt.ts`):
 * se faltar ou sobrar uma chave em relação ao português, o `npm run check` acusa.
 */
import type { Dictionary } from './pt';

export const en: Dictionary = {
  meta: {
    lang: 'en',
    title: 'Pedro Bosa — Developer in training',
    description:
      'Portfolio of Pedro Lucas Ferreira Bosa, a developer in training (TADS @ IFPI). Small tools that solve real problems — C#/.NET, web, databases and IoT.',
    ogLocale: 'en_US',
    jobTitle: 'Developer in training',
  },

  nav: {
    about: 'About',
    projects: 'Projects',
    education: 'Education',
    stack: 'Stack',
    contact: 'Contact',
  },

  a11y: {
    skip: 'Skip to content',
    mainNav: 'Main navigation',
    openMenu: 'Open the navigation menu',
    closeMenu: 'Close the navigation menu',
  },

  header: {
    language: 'Language',
    other: 'Português',
    otherShort: 'PT',
    menu: 'Menu',
    github: 'GitHub',
  },

  hero: {
    eyebrow: 'TADS @ IFPI · Floriano, Piauí, Brazil',
    role: 'Developer in training',
    status: 'Looking for an IT internship',
    lead: 'I study Systems Analysis and Development at IFPI, hold a Technical Degree in Computing, and placed Top 3 twice at the CAIS TECH Programming Marathon. I build RadialFlow, a native Windows radial menu in C#/.NET/WPF.',
    ctaProjects: 'See projects',
    ctaGithub: 'GitHub profile',
    ctaCv: 'Download CV',
    ctaEmail: 'Send email',
  },

  about: {
    p1: 'I’m Pedro Lucas Ferreira Bosa, based in Floriano, Piauí, Brazil. I hold a Technical Degree in Computing from IFPI Campus Floriano, where I’m now studying Systems Analysis and Development (TADS) and placed Top 3 twice at the CAIS TECH Programming Marathon (2024 and 2025).',
    p2: 'My main open-source project is RadialFlow, a Windows radial menu built with C#/.NET/WPF that brings context actions and file conversion via FFmpeg, Pandoc and LibreOffice to the cursor. Released under the MIT license with automated CI tests and published builds, it has 22 stars and 4 forks on GitHub.',
    facts: [
      { label: 'Interests', value: 'C#/.NET · web development · databases · IoT' },
      { label: 'Location', value: 'Floriano, Piauí — Brazil' },
    ],
  },

  projects: {
    featuredTag: 'Featured project',
    lead: 'From the flagship project to smaller experiments — open source, tested and documented.',
    tagsLabel: 'RadialFlow technologies',
    featured: {
      name: 'RadialFlow',
      tagline: 'The Windows radial menu.',
      description:
        'Hold the right mouse button, drag and choose: the commands for the file or folder appear exactly where the cursor is, with no extra windows and no nested menus. Two movements, without lifting your hand off the mouse — with file conversion through FFmpeg, Pandoc and LibreOffice, all native in C#/.NET/WPF and covered by automated tests.',
      highlights: [
        'Two-movement interaction: hold, drag and release',
        'File conversion with FFmpeg, Pandoc and LibreOffice',
        'Native C#/.NET/WPF — lightweight, no Electron',
        'Automated tests running in continuous integration',
      ],
      tags: ['Windows', 'C#', '.NET', 'WPF', 'Productivity'],
      demoAlt: 'RadialFlow demo: the radial menu opening around the cursor',
      demoCaption: 'The menu opens where the cursor is; pick an action and release.',
      caseStudy: [
        {
          label: 'Problem',
          text: 'Windows context menus hide actions in submenus and take several clicks for repetitive tasks.',
        },
        {
          label: 'Approach',
          text: 'A native C#/.NET/WPF radial menu opened at the cursor, with file conversion through FFmpeg, Pandoc and LibreOffice.',
        },
        {
          label: 'Result',
          text: 'Action in two movements, with no extra windows; open source, CI-tested and shipped as Windows releases.',
        },
      ],
      ctaGithub: 'View on GitHub',
      ctaDownload: 'Download installer',
    },
    stats: {
      stars: 'stars',
      forks: 'forks',
      license: 'license',
      version: 'version',
    },
    othersTitle: 'Also on GitHub',
    others: [
      {
        name: 'ssa-kotz-dublagem-ptbr',
        description:
          'Fan-made Brazilian Portuguese dub, updated for the Wwise v128 SoundBanks of Saint Seiya Awakening.',
        tags: ['Wwise', 'Audio', 'PT-BR'],
        link: 'https://github.com/PedroBosa/ssa-kotz-dublagem-ptbr',
      },
      {
        name: 'chrispincelmagico',
        description:
          'A JavaScript experiment: a brush for drawing freely right in the browser.',
        tags: ['JavaScript', 'Web'],
        link: 'https://github.com/PedroBosa/chrispincelmagico',
      },
    ],
    viewAll: 'See all repositories',
  },

  education: {
    currentLabel: 'In progress',
    timeline: [
      {
        period: '2026 — 2028',
        title: 'Systems Analysis and Development (TADS)',
        org: 'IFPI Campus Floriano',
        detail: '5 semesters · 2,100h · expected completion in the first half of 2028',
        current: true,
      },
      {
        period: '2026',
        title: 'Desafio Liga Jovem — 4th edition',
        org: 'SEBRAE',
        detail: '30h',
        current: false,
      },
      {
        period: '2023 — 2025',
        title: 'Technical Degree in Computing',
        org: 'IFPI Campus Floriano',
        detail: '3,200h · Completed in 2025',
        current: false,
      },
      {
        period: '2025',
        title: 'Desafio Liga Jovem — 3rd edition',
        org: 'SEBRAE',
        detail: '30h',
        current: false,
      },
      {
        period: '2023',
        title: 'Basic Computing',
        org: 'SENAI',
        detail: '40h',
        current: false,
      },
    ],
    awardsTitle: 'Awards',
    awards: [
      { title: '2× top 3 — CAIS TECH Programming Marathon', detail: '2024 and 2025' },
      {
        title: 'Projects exhibited at the National Science and Technology Week',
        detail: 'IFPI project showcase',
      },
    ],
  },

  stack: {
    lead: 'Technologies and tools I use and study, organised by area.',
    groups: [
      { title: 'Languages', items: ['C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'TypeScript', 'PHP'] },
      { title: 'Desktop & .NET', items: ['.NET', 'WPF', 'XAML'] },
      { title: 'Web', items: ['HTML', 'CSS', 'Astro'] },
      { title: 'Data', items: ['SQL', 'Data modelling'] },
      { title: 'IoT & Systems', items: ['ESP32', 'PlatformIO'] },
      { title: 'Tooling', items: ['Git', 'GitHub Actions', 'CI/CD', 'FFmpeg', 'Pandoc', 'LibreOffice'] },
      { title: 'Design & Media', items: ['Photoshop', 'Illustrator', 'Vectorization', 'Image editing'] },
      { title: 'Productivity', items: ['Office suite', 'Word', 'Excel', 'PowerPoint'] },
    ],
    note: 'Learning and practising continuously — this list grows along with the projects.',
  },

  contact: {
    title: 'Let’s talk',
    lead: 'If you have a role, a project, or just want to talk code, reach out.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    instagramLabel: 'Instagram',
    ctaEmail: 'Send email',
    ctaCv: 'Download CV',
    availability: 'Available for an IT internship',
    location: 'Floriano, Piauí — remote or on-site',
  },

  footer: {
    builtWith: 'Built with Astro, no framework running on the client.',
    top: 'Back to top',
  },
};
