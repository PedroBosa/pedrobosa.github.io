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
      'Portfolio of Pedro Lucas Ferreira Bosa — Systems Analysis and Development student at IFPI and creator of RadialFlow. Projects in C#/.NET, web, databases, and IoT.',
    ogLocale: 'en_US',
    jobTitle: 'Developer in training',
  },

  nav: {
    about: 'About',
    projects: 'Projects',
    stack: 'Stack',
    education: 'Education',
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
    lead: 'I study Systems Analysis and Development at IFPI Floriano and build desktop and web software. Creator of RadialFlow, a native Windows radial menu in C#/.NET/WPF.',
    ctaProjects: 'See projects',
    ctaGithub: 'GitHub profile',
    ctaCv: 'Download CV',
    ctaEmail: 'Send email',
  },

  about: {
    p1: 'I’m Pedro Lucas Ferreira Bosa, based in Floriano, Piauí, Brazil. I graduated as a Computing Technician from IFPI Campus Floriano, where I now study Systems Analysis and Development (TADS) and placed in the Top 3 twice at the CAIS TECH Programming Marathon (2024 and 2025).',
    p2: 'In open source, I maintain RadialFlow — a Windows radial menu written in C#/.NET/WPF that puts context actions at the cursor and converts files through FFmpeg, Pandoc, and LibreOffice. It’s MIT-licensed, tested in CI, shipped with Windows installers, and has 22 stars and 4 forks on GitHub.',
    facts: [
      { label: 'Interests', value: 'C#/.NET · web development · databases · IoT' },
      { label: 'Location', value: 'Floriano, Piauí — Brazil' },
    ],
  },

  projects: {
    featuredTag: 'Featured project',
    lead: 'Open-source applications and smaller experiments I built and published on GitHub.',
    tagsLabel: 'RadialFlow technologies',
    featured: {
      name: 'RadialFlow',
      tagline: 'The Windows radial menu.',
      description:
        'I built RadialFlow to cut down repetitive steps in Windows Explorer. Holding the right mouse button opens file and folder commands in a ring around the cursor — just drag toward an action and release. Beyond system shortcuts, it integrates FFmpeg, Pandoc, and LibreOffice to convert audio, video, and documents straight from the menu without opening extra windows.',
      highlights: [
        'Cursor-centered trigger: hold right-click, drag, and release',
        'Local media and document conversion via FFmpeg, Pandoc, and LibreOffice',
        'Native C#/.NET/WPF desktop app with no Electron overhead',
        'Automated test suite and release builds on GitHub Actions',
      ],
      tags: ['Windows', 'C#', '.NET', 'WPF', 'Productivity'],
      demoAlt: 'RadialFlow demo: the radial menu opening around the cursor',
      demoCaption: 'The menu opens where the cursor is; pick an action and release.',
      caseStudy: [
        {
          label: 'Problem',
          text: 'The default Windows context menu buries frequent actions inside nested submenus and lacks built-in file conversion.',
        },
        {
          label: 'Approach',
          text: 'I built a pointer-centered radial UI in WPF wired to command-line tools (FFmpeg, Pandoc, and LibreOffice).',
        },
        {
          label: 'Result',
          text: 'Single-gesture execution, shipped under the MIT license with a Windows installer and a CI test pipeline.',
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
          'Brazilian Portuguese voiceover mod package for Saint Seiya Awakening, ported to Wwise v128 SoundBanks.',
        tags: ['Wwise', 'Audio', 'PT-BR'],
        link: 'https://github.com/PedroBosa/ssa-kotz-dublagem-ptbr',
      },
      {
        name: 'chrispincelmagico',
        description:
          'Interactive browser drawing board written in vanilla JavaScript with direct mouse and touch event handling.',
        tags: ['JavaScript', 'Web'],
        link: 'https://github.com/PedroBosa/chrispincelmagico',
      },
    ],
    viewAll: 'See all repositories',
  },

  stack: {
    lead: 'Languages and tools I work with across my projects and coursework.',
    groups: [
      {
        title: 'Languages',
        items: ['C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'TypeScript', 'PHP'],
      },
      { title: 'Desktop & .NET', items: ['.NET', 'WPF', 'XAML'] },
      { title: 'Web', items: ['HTML', 'CSS', 'Astro'] },
      { title: 'Data', items: ['SQL', 'Data modeling'] },
      { title: 'IoT & Systems', items: ['ESP32', 'PlatformIO'] },
      {
        title: 'Tooling',
        items: ['Git', 'GitHub Actions', 'CI/CD', 'FFmpeg', 'Pandoc', 'LibreOffice'],
      },
      {
        title: 'Design & Media',
        items: ['Photoshop', 'Illustrator', 'Vectorization', 'Image editing'],
      },
      { title: 'Productivity', items: ['Office suite'] },
    ],
    note: 'Day to day, my main focus is C#/.NET desktop development, web applications, and SQL databases.',
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
        period: '2023 — 2025',
        title: 'Technical Degree in Computing',
        org: 'IFPI Campus Floriano',
        detail: '3,200h · Completed in 2025',
        current: false,
      },
    ],
    complementaryTitle: 'Complementary courses',
    complementary: [
      {
        period: '2026',
        title: 'Desafio Liga Jovem — 4th edition',
        org: 'SEBRAE',
        detail: '30h',
      },
      {
        period: '2025',
        title: 'Desafio Liga Jovem — 3rd edition',
        org: 'SEBRAE',
        detail: '30h',
      },
      {
        period: '2023',
        title: 'Basic Computing',
        org: 'SENAI',
        detail: '40h',
      },
    ],
    awardsTitle: 'Awards',
    awards: [
      { title: '2× Top 3 — CAIS TECH Programming Marathon', detail: '2024 and 2025' },
      {
        title: 'Projects exhibited at the National Science and Technology Week',
        detail: 'IFPI project showcase',
      },
    ],
  },

  contact: {
    title: 'Let’s talk',
    lead: 'I’m open to IT internship opportunities, collaborative projects, or a conversation about software development. Feel free to reach out by email or through the links beside this.',
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
    builtWith: 'Built with Astro and vanilla CSS — 100% static.',
    top: 'Back to top',
  },
};
