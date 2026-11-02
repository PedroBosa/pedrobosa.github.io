/**
 * Conteúdo em português (idioma padrão).
 * O tipo `Dictionary` é derivado deste arquivo e obriga `en.ts` a ter exatamente as mesmas chaves.
 */
export const pt = {
  meta: {
    lang: 'pt-BR',
    title: 'Pedro Bosa — Desenvolvedor em formação',
    description:
      'Portfólio de Pedro Lucas Ferreira Bosa, desenvolvedor em formação (TADS @ IFPI). Ferramentas pequenas que resolvem problemas reais — C#/.NET, web, banco de dados e IoT.',
    ogLocale: 'pt_BR',
    jobTitle: 'Desenvolvedor em formação',
  },

  nav: {
    about: 'Sobre',
    projects: 'Projetos',
    education: 'Formação',
    stack: 'Stack',
    contact: 'Contato',
  },

  a11y: {
    skip: 'Pular para o conteúdo',
    mainNav: 'Navegação principal',
    openMenu: 'Abrir o menu de navegação',
    closeMenu: 'Fechar o menu de navegação',
  },

  header: {
    language: 'Idioma',
    other: 'English',
    otherShort: 'EN',
    menu: 'Menu',
    github: 'GitHub',
  },

  hero: {
    eyebrow: 'TADS @ IFPI · Floriano, Piauí',
    role: 'Desenvolvedor em formação',
    status: 'Buscando estágio em TI',
    lead: 'Curso Análise e Desenvolvimento de Sistemas no IFPI, sou Técnico em Informática e fui 2× Top 3 na Maratona de Programação CAIS TECH. Desenvolvo o RadialFlow, menu radial nativo para Windows em C#/.NET/WPF.',
    ctaProjects: 'Ver projetos',
    ctaGithub: 'Perfil no GitHub',
    ctaCv: 'Baixar CV',
    ctaEmail: 'Enviar e-mail',
  },

  about: {
    p1: 'Sou Pedro Lucas Ferreira Bosa, de Floriano, Piauí. Sou Técnico em Informática pelo IFPI Campus Floriano, onde hoje curso Análise e Desenvolvimento de Sistemas (TADS) e fui 2× Top 3 na Maratona de Programação CAIS TECH (2024 e 2025).',
    p2: 'Meu principal projeto aberto é o RadialFlow, um menu radial para Windows escrito em C#/.NET/WPF que reúne ações de contexto e conversão de arquivos com FFmpeg, Pandoc e LibreOffice. O código tem licença MIT, testes automatizados em CI, releases publicadas e soma 22 estrelas e 4 forks no GitHub.',
    facts: [
      { label: 'Interesses', value: 'C#/.NET · desenvolvimento web · banco de dados · IoT' },
      { label: 'Local', value: 'Floriano, Piauí — Brasil' },
    ],
  },

  projects: {
    featuredTag: 'Projeto em destaque',
    lead: 'Do projeto em destaque aos experimentos menores — código aberto, testado e documentado.',
    tagsLabel: 'Tecnologias do RadialFlow',
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
      tags: ['Windows', 'C#', '.NET', 'WPF', 'Produtividade'],
      demoAlt: 'Demonstração do RadialFlow em uso: o menu radial abrindo ao redor do cursor',
      demoCaption: 'O menu abre onde o cursor está; escolha uma ação e solte.',
      caseStudy: [
        {
          label: 'Problema',
          text: 'Menus de contexto do Windows escondem ações em submenus e exigem vários cliques para tarefas repetitivas.',
        },
        {
          label: 'Abordagem',
          text: 'Menu radial nativo em C#/.NET/WPF, aberto no cursor, com conversão de arquivos via FFmpeg, Pandoc e LibreOffice.',
        },
        {
          label: 'Resultado',
          text: 'Ação em dois movimentos, sem janelas extras; código aberto, testado em CI e com releases para Windows.',
        },
      ],
      ctaGithub: 'Ver no GitHub',
      ctaDownload: 'Baixar instalador',
    },
    stats: {
      stars: 'estrelas',
      forks: 'forks',
      license: 'licença',
      version: 'versão',
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
        period: '2023 — 2025',
        title: 'Técnico em Informática',
        org: 'IFPI Campus Floriano',
        detail: '3.200h · Conclusão em 2025',
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
    lead: 'Tecnologias e ferramentas que uso e estudo, organizadas por área.',
    groups: [
      { title: 'Linguagens', items: ['C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'TypeScript', 'PHP'] },
      { title: 'Desktop & .NET', items: ['.NET', 'WPF', 'XAML'] },
      { title: 'Web', items: ['HTML', 'CSS', 'Astro'] },
      { title: 'Dados', items: ['SQL', 'Modelagem de dados'] },
      { title: 'IoT & Sistemas', items: ['ESP32', 'PlatformIO'] },
      { title: 'Ferramentas', items: ['Git', 'GitHub Actions', 'CI/CD', 'FFmpeg', 'Pandoc', 'LibreOffice'] },
      { title: 'Design & Mídia', items: ['Photoshop', 'Illustrator', 'Vetorização', 'Edição de imagens'] },
      { title: 'Produtividade', items: ['Pacote Office', 'Word', 'Excel', 'PowerPoint'] },
    ],
    note: 'Aprendendo e praticando continuamente — esta lista cresce junto com os projetos.',
  },

  contact: {
    title: 'Vamos conversar',
    lead: 'Se você tem uma vaga, um projeto ou só quer trocar ideia sobre código, me chama.',
    emailLabel: 'E-mail',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    instagramLabel: 'Instagram',
    ctaEmail: 'Enviar e-mail',
    ctaCv: 'Baixar CV',
    availability: 'Disponível para estágio em TI',
    location: 'Floriano, Piauí — remoto ou presencial',
  },

  footer: {
    builtWith: 'Feito com Astro, sem framework rodando no cliente.',
    top: 'Voltar ao topo',
  },
};

export type Dictionary = typeof pt;
