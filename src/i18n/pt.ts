/**
 * Conteúdo em português (idioma padrão).
 * O tipo `Dictionary` é derivado deste arquivo e obriga `en.ts` a ter exatamente as mesmas chaves.
 */
export const pt = {
  meta: {
    lang: 'pt-BR',
    title: 'Pedro Bosa — Desenvolvedor em formação',
    description:
      'Portfólio de Pedro Lucas Ferreira Bosa, estudante de TADS no IFPI e criador do RadialFlow. Projetos em C#/.NET, desenvolvimento web, banco de dados e IoT.',
    ogLocale: 'pt_BR',
    jobTitle: 'Desenvolvedor em formação',
  },

  nav: {
    about: 'Sobre',
    projects: 'Projetos',
    stack: 'Stack',
    education: 'Formação',
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
    lead: 'Estudo Análise e Desenvolvimento de Sistemas no IFPI Floriano e construo software para desktop e web. Criei o RadialFlow, menu radial nativo para Windows em C#/.NET/WPF.',
    ctaProjects: 'Ver projetos',
    ctaGithub: 'Perfil no GitHub',
    ctaCv: 'Baixar CV',
    ctaEmail: 'Enviar e-mail',
  },

  about: {
    p1: 'Me chamo Pedro Lucas Ferreira Bosa e moro em Floriano, no Piauí. Me formei Técnico em Informática pelo IFPI Campus Floriano, onde hoje curso Análise e Desenvolvimento de Sistemas (TADS) e fiquei duas vezes no Top 3 da Maratona de Programação CAIS TECH (2024 e 2025).',
    p2: 'No código aberto, mantenho o RadialFlow: um menu radial para Windows feito em C#/.NET/WPF que abre ações de contexto no cursor e converte arquivos usando FFmpeg, Pandoc e LibreOffice. O projeto tem licença MIT, testes automatizados em CI, instaladores publicados e conta com 22 estrelas e 4 forks no GitHub.',
    facts: [
      { label: 'Interesses', value: 'C#/.NET · desenvolvimento web · banco de dados · IoT' },
      { label: 'Local', value: 'Floriano, Piauí — Brasil' },
    ],
  },

  projects: {
    featuredTag: 'Projeto em destaque',
    lead: 'Aplicações e experimentos que desenvolvi e publiquei com código aberto no GitHub.',
    tagsLabel: 'Tecnologias do RadialFlow',
    featured: {
      name: 'RadialFlow',
      tagline: 'O menu radial do Windows.',
      description:
        'Criei o RadialFlow para encurtar tarefas repetitivas no Windows Explorer. Ao segurar o botão direito do mouse, os comandos do arquivo ou da pasta abrem em círculo ao redor do cursor: basta arrastar na direção desejada e soltar. Além de atalhos de sistema, ele integra FFmpeg, Pandoc e LibreOffice para converter áudio, vídeo e documentos direto pelo menu, sem abrir janelas extras.',
      highlights: [
        'Acionamento direto no cursor: segurar o botão direito, arrastar e soltar',
        'Conversão local de mídia e documentos via FFmpeg, Pandoc e LibreOffice',
        'Aplicação desktop nativa em C#/.NET/WPF, sem depender de Electron',
        'Testes automatizados e geração de releases via GitHub Actions',
      ],
      tags: ['Windows', 'C#', '.NET', 'WPF', 'Produtividade'],
      demoAlt: 'Demonstração do RadialFlow em uso: o menu radial abrindo ao redor do cursor',
      demoCaption: 'O menu abre onde o cursor está; escolha uma ação e solte.',
      caseStudy: [
        {
          label: 'Problema',
          text: 'O menu de contexto padrão do Windows esconde opções frequentes em submenus lentos e não converte arquivos nativamente.',
        },
        {
          label: 'Abordagem',
          text: 'Desenvolvi uma interface radial em WPF acionada no ponteiro do mouse, conectada a ferramentas de linha de comando (FFmpeg, Pandoc e LibreOffice).',
        },
        {
          label: 'Resultado',
          text: 'Execução imediata em um único gesto, distribuída sob licença MIT com instalador para Windows e pipeline de testes em CI.',
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
          'Pacote de modificação de áudio com a dublagem brasileira para Saint Seiya Awakening, portado para os SoundBanks Wwise v128.',
        tags: ['Wwise', 'Áudio', 'PT-BR'],
        link: 'https://github.com/PedroBosa/ssa-kotz-dublagem-ptbr',
      },
      {
        name: 'chrispincelmagico',
        description:
          'Site institucional para o studio Chris Pincel Mágico em Floriano e Barão de Grajaú, desenvolvido com Next.js 16, React 19 e Tailwind CSS 4.',
        tags: ['Next.js', 'React', 'Tailwind CSS'],
        link: 'https://github.com/PedroBosa/chrispincelmagico',
      },
    ],
    viewAll: 'Ver todos os repositórios',
  },

  stack: {
    lead: 'Linguagens e ferramentas que utilizo nos meus projetos e na graduação.',
    groups: [
      {
        title: 'Linguagens',
        items: ['C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'TypeScript', 'PHP'],
      },
      { title: 'Desktop & .NET', items: ['.NET', 'WPF', 'XAML'] },
      { title: 'Web', items: ['HTML', 'CSS', 'Astro'] },
      { title: 'Dados', items: ['SQL', 'Modelagem de dados'] },
      { title: 'IoT & Sistemas', items: ['ESP32', 'PlatformIO'] },
      {
        title: 'Ferramentas',
        items: ['Git', 'GitHub Actions', 'CI/CD', 'FFmpeg', 'Pandoc', 'LibreOffice'],
      },
      {
        title: 'Design & Mídia',
        items: ['Photoshop', 'Illustrator', 'Vetorização', 'Edição de imagens'],
      },
      { title: 'Produtividade', items: ['Pacote Office'] },
    ],
    note: 'No dia a dia, meu foco principal é desenvolvimento desktop com C#/.NET, aplicações web e banco de dados SQL.',
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
        period: '2023 — 2025',
        title: 'Técnico em Informática',
        org: 'IFPI Campus Floriano',
        detail: '3.200h · Conclusão em 2025',
        current: false,
      },
    ],
    complementaryTitle: 'Cursos complementares',
    complementary: [
      {
        period: '2026',
        title: 'Desafio Liga Jovem — 4ª edição',
        org: 'SEBRAE',
        detail: '30h',
      },
      {
        period: '2025',
        title: 'Desafio Liga Jovem — 3ª edição',
        org: 'SEBRAE',
        detail: '30h',
      },
      {
        period: '2023',
        title: 'Informática Básica',
        org: 'SENAI',
        detail: '40h',
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

  contact: {
    title: 'Vamos conversar',
    lead: 'Estou aberto a oportunidades de estágio em TI, projetos em conjunto ou uma boa conversa sobre desenvolvimento. Pode me chamar por e-mail ou pelos links ao lado.',
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
    builtWith: 'Desenvolvido com Astro e CSS puro — 100% estático.',
    top: 'Voltar ao topo',
  },
};

export type Dictionary = typeof pt;
