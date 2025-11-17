import { profile } from '../data/content';
import './Hero.scss';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="intro-title">
      <div className="hero__content">
        <p className="hero__eyebrow">{profile.role}</p>
        <h1 id="intro-title">{profile.tagline}</h1>
        <p className="hero__summary">{profile.summary}</p>
        <div className="hero__meta">
          <span>{profile.location}</span>
          <span>{profile.availability}</span>
        </div>
        <div className="hero__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            Email {profile.name.split(' ')[0]}
          </a>
          {profile.socials.map((social) => (
            <a key={social.label} className="btn btn--ghost" href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <div className="hero__metrics" aria-label="career metrics">
        <article>
          <span className="hero__name">{profile.name}</span>
          <p>{profile.role}</p>
        </article>
        {profile.metrics.map((metric) => (
          <article key={metric.label}>
            <span>{metric.value}</span>
            <p>{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
