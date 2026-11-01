/**
 * Dados do site: identidade, links e números exibidos.
 *
 * Campos vazios simplesmente não são renderizados, então basta preenchê-los
 * para que o canal apareça na seção de contato:
 *   - LINKS.email: endereço completo, ex.: 'pedro@exemplo.com'
 */

export const PROFILE = {
  fullName: 'Pedro Lucas Ferreira Bosa',
  shortName: 'Pedro Bosa',
  githubUser: 'PedroBosa',
} as const;

export const LINKS = {
  github: `https://github.com/${PROFILE.githubUser}`,
  repos: `https://github.com/${PROFILE.githubUser}?tab=repositories`,
  repo: `https://github.com/${PROFILE.githubUser}/RadialFlow`,
  release: `https://github.com/${PROFILE.githubUser}/RadialFlow/releases/latest`,
  email: '',
  linkedin: 'https://www.linkedin.com/in/pedrobosa',
} as const;

/**
 * Números do RadialFlow exibidos em Projetos.
 * São valores fixos (o site é estático): atualize-os de tempos em tempos.
 */
export const STATS = {
  stars: '23',
  forks: '4',
  license: 'MIT',
} as const;
