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
  email: 'pedrolucasfbosa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pedrobosa',
  cv: {
    pt: '/cv/pedro-bosa-cv-pt.pdf',
    en: '/cv/pedro-bosa-cv-en.pdf',
  },
} as const;

export interface RepoStats {
  stars: string;
  forks: string;
  license: string;
  version: string;
}

/**
 * Valores de segurança usados quando a API do GitHub não responde.
 * O site continua estático e o build nunca quebra por causa da API.
 */
export const FALLBACK_STATS: RepoStats = {
  stars: '22',
  forks: '4',
  license: 'MIT',
  version: 'v1.5.0',
};

let statsPromise: Promise<RepoStats> | null = null;

async function fetchRepoStats(): Promise<RepoStats> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'pedro-bosa-portfolio',
  };

  // Opcional: defina GITHUB_TOKEN no CI para elevar o limite de requisições.
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [repoResponse, releaseResponse] = await Promise.all([
      fetch(`https://api.github.com/repos/${PROFILE.githubUser}/RadialFlow`, {
        headers,
        signal: AbortSignal.timeout(5000),
      }),
      fetch(`https://api.github.com/repos/${PROFILE.githubUser}/RadialFlow/releases/latest`, {
        headers,
        signal: AbortSignal.timeout(5000),
      }),
    ]);

    if (!repoResponse.ok) {
      throw new Error(`GitHub API respondeu ${repoResponse.status}`);
    }

    const repo = (await repoResponse.json()) as {
      stargazers_count?: number;
      forks_count?: number;
      license?: { spdx_id?: string | null } | null;
    };

    let version = FALLBACK_STATS.version;

    if (releaseResponse.ok) {
      const release = (await releaseResponse.json()) as { tag_name?: string };
      version = release.tag_name ?? version;
    }

    return {
      stars: String(repo.stargazers_count ?? FALLBACK_STATS.stars),
      forks: String(repo.forks_count ?? FALLBACK_STATS.forks),
      license: repo.license?.spdx_id ?? FALLBACK_STATS.license,
      version,
    };
  } catch (error) {
    console.warn(`[site] Não foi possível buscar as métricas do GitHub; usando fallback. ${error}`);
    return FALLBACK_STATS;
  }
}

/**
 * Busca as métricas do RadialFlow em build-time.
 * A promessa é memoizada para que as duas páginas (PT e EN) não dupliquem chamadas.
 */
export function getRepoStats(): Promise<RepoStats> {
  statsPromise ??= fetchRepoStats();
  return statsPromise;
}
