import { useEffect, useState } from 'react';
import { githubProfile } from '../data/content';
import './GithubShowcase.scss';

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
};

export function GithubShowcase() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'loaded' | 'error'>('idle');

  useEffect(() => {
    async function loadRepos() {
      try {
        setStatus('loading');
        const response = await fetch(
          `https://api.github.com/users/${githubProfile.username}/repos?sort=updated&per_page=6`
        );
        if (!response.ok) {
          throw new Error('Unable to load repositories');
        }
        const data: Repo[] = await response.json();
        setRepos(data);
        setStatus('loaded');
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    }

    loadRepos();
  }, []);

  return (
    <section className="github" aria-labelledby="github-title">
      <div className="section-intro">
        <p className="section-intro__eyebrow">Open source</p>
        <h2 id="github-title">GitHub pulse</h2>
        <p>{githubProfile.note}</p>
      </div>
      <div className="github__grid">
        {status === 'error' && <p className="github__status">Unable to reach GitHub right now, please try again later.</p>}
        {status !== 'error' &&
          (repos.length ? (
            repos.map((repo) => (
              <article key={repo.id} className="repo-card">
                <header>
                  <h3>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      {repo.name}
                    </a>
                  </h3>
                  {repo.language && <span>{repo.language}</span>}
                </header>
                {repo.description && <p>{repo.description}</p>}
                <footer>
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
                </footer>
              </article>
            ))
          ) : (
            <p className="github__status">{status === 'loading' ? 'Loading projects…' : 'No public repositories found.'}</p>
          ))}
      </div>
    </section>
  );
}
