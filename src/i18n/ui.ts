/**
 * Dicionário de conteúdo PT/EN.
 * Cada página é gerada estaticamente no idioma correspondente — a troca de
 * idioma é uma navegação real, sem JavaScript para renderizar texto.
 */

const pt = {
  meta: {
    lang: 'pt-BR',
    title: 'Pedro Bosa — Desenvolvedor em formação',
    description:
      'Portfólio de Pedro Lucas Ferreira Bosa, desenvolvedor em formação (TADS @ IFPI). Ferramentas pequenas que resolvem problemas reais — C#/.NET, web, banco de dados e IoT.',
    ogLocale: 'pt_BR',
  },

  nav: {
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    education: 'Formação',
    stack: 'Stack',
    contact: 'Contato',
  },

  audio: {
    play: 'Tocar a trilha',
    pause: 'Pausar',
    hint: 'Trilha original gerada no navegador. O equalizador reage ao som.',
  },

  a11y: {
    skip: 'Pular para o conteúdo',
    mainNav: 'Navegação principal',
    radial: 'Menu de navegação radial',
    radialHint: 'Solte o botão sobre uma seção para ir até ela.',
    radialKeys: 'Setas navegam · Enter escolhe · Esc fecha',
    close: 'Fechar menu',
    openMenu: 'Abrir o menu de navegação',
    scrollHint: 'Continue rolando para explorar',
  },

  header: {
    menu: 'Menu',
    language: 'Idioma',
    other: 'English',
    otherShort: 'EN',
    preview: 'Prévia',
    github: 'GitHub',
    download: 'Download',
  },

  hero: {
    eyebrow: 'TADS @ IFPI · Floriano, Piauí',
    role: 'Desenvolvedor em formação',
    lead: 'Estudo Análise e Desenvolvimento de Sistemas no IFPI, em Floriano (PI). Escrevo utilitários nativos para Windows em C# e procuro estágio em TI.',
    gesture: 'Segure. Arraste. Escolha.',
    gestureSub:
      'Clique com o botão direito em qualquer lugar da página para abrir o menu.',
    gestureKeys: 'Ou aperte M · setas navegam · Enter escolhe',
    ctaProjects: 'Ver projetos',
    ctaGithub: 'Perfil no GitHub',
    ctaDownload: 'Baixar o RadialFlow',
    status: 'Buscando estágio em TI',
    facts: {
      stars: 'estrelas no RadialFlow',
      awards: 'vezes no Top 3 da Maratona CAIS TECH',
      hours: 'horas de formação técnica pelo IFPI',
    },
  },

  about: {
    eyebrow: 'Sobre',
    title: 'Ferramentas pequenas, problemas reais.',
    p1: 'Sou Pedro Lucas Ferreira Bosa, desenvolvedor em formação em Floriano, no interior do Piauí. Curso Análise e Desenvolvimento de Sistemas (TADS) no IFPI Campus Floriano e sou Técnico em Informática pela mesma instituição.',
    p2: 'Meu interesse está no ponto onde o software encosta no dia a dia: utilitários que reduzem atrito, automatizam o repetitivo e desaparecem no fundo da rotina. Gosto de software nativo, leve e direto — e desconfio de soluções infladas para problemas simples.',
    quote: 'Código é poesia. Cada projeto é um verso.',
    info: [
      { label: 'Formação', value: 'TADS no IFPI Campus Floriano (cursando) · Técnico em Informática (2025)' },
      { label: 'Conquistas', value: '2× Top 3 na Maratona de Programação CAIS TECH (2024 e 2025)' },
      { label: 'Interesses', value: 'C#/.NET · desenvolvimento web · banco de dados · IoT' },
      { label: 'Mostra', value: 'Projetos apresentados na Semana Nacional de Ciência e Tecnologia' },
      { label: 'Objetivo', value: 'Uma oportunidade de estágio em TI' },
      { label: 'Local', value: 'Floriano, Piauí — Brasil' },
    ],
  },

  projects: {
    eyebrow: 'Projetos',
    title: 'O que eu construí',
    lead: 'Do projeto em destaque aos experimentos menores — código aberto, testado e documentado.',
    featuredTag: 'Projeto em destaque',
    featured: {
      name: 'RadialFlow',
      tagline: 'O menu radial do Windows.',
      description:
        'Segure o botão direito, arraste e escolha: os comandos do arquivo ou da pasta aparecem exatamente onde o cursor está, sem janelas extras e sem menus aninhados. Ação em dois movimentos, sem tirar a mão do mouse — com conversão de arquivos via FFmpeg, Pandoc e LibreOffice, tudo nativo em C#/.NET/WPF e coberto por testes automatizados.',
      highlights: [
        'Interação em dois movimentos: segurar, arrastar e soltar',
        'Conversão de arquivos com FFmpeg, Pandoc e LibreOffice',
        'Nativo em C#/.NET/WPF — leve, sem Electron',
        'Testes automatizados rodando em integração contínua',
      ],
      demoAlt: 'Demonstração do RadialFlow em uso: o menu radial abrindo ao redor do cursor',
      tags: ['Windows', 'C#', '.NET', 'WPF', 'Produtividade'],
      ctaGithub: 'Ver no GitHub',
      ctaDownload: 'Baixar instalador',
      ctaDemo: 'Ver demonstração',
    },
    stats: {
      stars: 'estrelas',
      forks: 'forks',
      downloads: 'downloads',
      license: 'licença',
      ci: 'CI',
    },
    othersTitle: 'Também no GitHub',
    others: [
      {
        name: 'ssa-kotz-dublagem-ptbr',
        description:
          'Dublagem PT-BR fan-made atualizada para os SoundBanks Wwise v128 de Saint Seiya Awakening.',
        tags: ['Wwise', 'Áudio', 'PT-BR'],
        link: 'https://github.com/PedroBosa/ssa-kotz-dublagem-ptbr',
      },
      {
        name: 'chrispincelmagico',
        description:
          'Experimento em JavaScript: um pincel para desenhar livremente direto no navegador.',
        tags: ['JavaScript', 'Web'],
        link: 'https://github.com/PedroBosa/chrispincelmagico',
      },
    ],
    viewAll: 'Ver todos os repositórios',
  },

  education: {
    eyebrow: 'Formação & Conquistas',
    title: 'O caminho até aqui',
    lead: 'Formação técnica e acadêmica, com competições de programação no meio do caminho.',
    currentLabel: 'Em curso',
    timeline: [
      {
        period: '2026 — 2028',
        title: 'Análise e Desenvolvimento de Sistemas (TADS)',
        org: 'IFPI Campus Floriano',
        detail: '5 semestres · 2.100h · conclusão prevista para o 1º semestre de 2028',
        current: true,
      },
      {
        period: '2026',
        title: 'Desafio Liga Jovem — 4ª edição',
        org: 'SEBRAE',
        detail: '30h',
        current: false,
      },
      {
        period: '2025',
        title: 'Técnico em Informática',
        org: 'IFPI Campus Floriano',
        detail: '3.200h',
        current: false,
      },
      {
        period: '2025',
        title: 'Desafio Liga Jovem — 3ª edição',
        org: 'SEBRAE',
        detail: '30h',
        current: false,
      },
      {
        period: '2023',
        title: 'Informática Básica',
        org: 'SENAI',
        detail: '40h',
        current: false,
      },
    ],
    awardsTitle: 'Conquistas',
    awards: [
      { title: '2× Top 3 — Maratona de Programação CAIS TECH', detail: '2024 e 2025' },
      {
        title: 'Projetos apresentados na Semana Nacional de Ciência e Tecnologia',
        detail: 'Mostra de trabalhos do IFPI',
      },
    ],
  },

  stack: {
    eyebrow: 'Stack',
    title: 'Com o que eu trabalho',
    lead: 'Áreas de interesse e ferramentas que uso no dia a dia — do desktop ao microcontrolador.',
    groups: [
      { title: 'Desktop & .NET', icon: 'code', items: ['C#', '.NET', 'WPF', 'XAML'] },
      { title: 'Web', icon: 'globe', items: ['HTML', 'CSS', 'JavaScript', 'Astro'] },
      { title: 'Dados', icon: 'layers', items: ['SQL', 'Modelagem de dados'] },
      { title: 'IoT & Sistemas', icon: 'home', items: ['ESP32', 'PlatformIO', 'C++'] },
      { title: 'Ferramentas', icon: 'check', items: ['Git', 'GitHub Actions', 'CI/CD', 'FFmpeg', 'Pandoc'] },
    ],
    note: 'Aprendendo e praticando continuamente — esta lista cresce junto com os projetos.',
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Vamos conversar',
    lead: 'Estou em busca de uma oportunidade de estágio em TI. Se você tem uma vaga, um projeto ou só quer trocar ideia sobre código, me chama.',
    emailLabel: 'E-mail',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    availability: 'Disponível para estágio em TI',
    location: 'Floriano, Piauí — remoto ou presencial',
  },

  footer: {
    quote: 'Código é poesia. Cada projeto é um verso.',
    builtWith: 'Feito com Astro, sem framework rodando no cliente.',
    rights: 'Pedro Lucas Ferreira Bosa',
    top: 'Voltar ao topo',
    navTitle: 'Navegar',
    linksTitle: 'Encontre-me',
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  meta: {
    lang: 'en',
    title: 'Pedro Bosa — Developer in training',
    description:
      'Portfolio of Pedro Lucas Ferreira Bosa, a developer in training (TADS @ IFPI). Small tools that solve real problems — C#/.NET, web, databases and IoT.',
    ogLocale: 'en_US',
  },

  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    education: 'Education',
    stack: 'Stack',
    contact: 'Contact',
  },

  audio: {
    play: 'Play the track',
    pause: 'Pause',
    hint: 'Original track generated in the browser. The equalizer reacts to the sound.',
  },

  a11y: {
    skip: 'Skip to content',
    mainNav: 'Main navigation',
    radial: 'Radial navigation menu',
    radialHint: 'Release the button over a section to jump to it.',
    radialKeys: 'Arrow keys navigate · Enter selects · Esc closes',
    close: 'Close menu',
    openMenu: 'Open the navigation menu',
    scrollHint: 'Keep scrolling to explore',
  },

  header: {
    menu: 'Menu',
    language: 'Language',
    other: 'Português',
    otherShort: 'PT',
    preview: 'Preview',
    github: 'GitHub',
    download: 'Download',
  },

  hero: {
    eyebrow: 'TADS @ IFPI · Floriano, Piauí — Brazil',
    role: 'Developer in training',
    lead: 'I study Systems Analysis and Development at IFPI in Floriano, Piauí. I write native Windows utilities in C# and I’m looking for an IT internship.',
    gesture: 'Hold. Drag. Choose.',
    gestureSub: 'Right-click anywhere on the page to open the menu.',
    gestureKeys: 'Or press M · arrow keys navigate · Enter selects',
    ctaProjects: 'See projects',
    ctaGithub: 'GitHub profile',
    ctaDownload: 'Get RadialFlow',
    status: 'Looking for an IT internship',
    facts: {
      stars: 'stars on RadialFlow',
      awards: 'times in the CAIS TECH Marathon top 3',
      hours: 'hours of technical training at IFPI',
    },
  },

  about: {
    eyebrow: 'About',
    title: 'Small tools, real problems.',
    p1: 'I’m Pedro Lucas Ferreira Bosa, a developer in training from Floriano, in the countryside of Piauí, Brazil. I’m studying Systems Analysis and Development (TADS) at IFPI Campus Floriano and I hold a Technical Degree in Computing from the same institution.',
    p2: 'My interest lives where software meets everyday life: utilities that cut friction, automate the repetitive and fade into the background. I like native, lightweight, to-the-point software — and I’m suspicious of bloated solutions to simple problems.',
    quote: 'Code is poetry. Every project is a verse.',
    info: [
      { label: 'Education', value: 'TADS at IFPI Campus Floriano (ongoing) · Technical Degree in Computing (2025)' },
      { label: 'Awards', value: '2× top 3 at the CAIS TECH Programming Marathon (2024 and 2025)' },
      { label: 'Interests', value: 'C#/.NET · web development · databases · IoT' },
      { label: 'Showcase', value: 'Projects exhibited at Brazil’s National Science and Technology Week' },
      { label: 'Goal', value: 'An IT internship opportunity' },
      { label: 'Location', value: 'Floriano, Piauí — Brazil' },
    ],
  },

  projects: {
    eyebrow: 'Projects',
    title: 'What I’ve built',
    lead: 'From the flagship project to smaller experiments — open source, tested and documented.',
    featuredTag: 'Featured project',
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
      demoAlt: 'RadialFlow demo: the radial menu opening around the cursor',
      tags: ['Windows', 'C#', '.NET', 'WPF', 'Productivity'],
      ctaGithub: 'View on GitHub',
      ctaDownload: 'Download installer',
      ctaDemo: 'Watch the demo',
    },
    stats: {
      stars: 'stars',
      forks: 'forks',
      downloads: 'downloads',
      license: 'license',
      ci: 'CI',
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
    eyebrow: 'Education & Awards',
    title: 'The road so far',
    lead: 'Technical and academic training, with programming contests along the way.',
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
        period: '2025',
        title: 'Technical Degree in Computing',
        org: 'IFPI Campus Floriano',
        detail: '3,200h',
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
    eyebrow: 'Stack',
    title: 'What I work with',
    lead: 'Areas of interest and the tools I use every day — from desktop to microcontroller.',
    groups: [
      { title: 'Desktop & .NET', icon: 'code', items: ['C#', '.NET', 'WPF', 'XAML'] },
      { title: 'Web', icon: 'globe', items: ['HTML', 'CSS', 'JavaScript', 'Astro'] },
      { title: 'Data', icon: 'layers', items: ['SQL', 'Data modelling'] },
      { title: 'IoT & Systems', icon: 'home', items: ['ESP32', 'PlatformIO', 'C++'] },
      { title: 'Tooling', icon: 'check', items: ['Git', 'GitHub Actions', 'CI/CD', 'FFmpeg', 'Pandoc'] },
    ],
    note: 'Learning and practising continuously — this list grows along with the projects.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk',
    lead: 'I’m looking for an IT internship. If you have a role, a project, or just want to talk code, reach out.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    availability: 'Available for an IT internship',
    location: 'Floriano, Piauí — remote or on-site',
  },

  footer: {
    quote: 'Code is poetry. Every project is a verse.',
    builtWith: 'Built with Astro, no framework running on the client.',
    rights: 'Pedro Lucas Ferreira Bosa',
    top: 'Back to top',
    navTitle: 'Browse',
    linksTitle: 'Find me',
  },
};

export const ui = { pt, en };

export type Lang = keyof typeof ui;

export const defaultLang: Lang = 'pt';

/** Rota de cada idioma — português na raiz, inglês em /en. */
export const routes: Record<Lang, string> = {
  pt: '/',
  en: '/en/',
};

export const htmlLang: Record<Lang, string> = {
  pt: 'pt-BR',
  en: 'en',
};

/** Retorna o dicionário do idioma pedido. */
export function t(lang: Lang): Dictionary {
  return ui[lang];
}

/** O outro idioma — usado pelo seletor de idioma. */
export function altLang(lang: Lang): Lang {
  return lang === 'pt' ? 'en' : 'pt';
}
