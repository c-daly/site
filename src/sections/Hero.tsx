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
          <a className="btn btn--ghost" href={profile.resume} target="_blank" rel="noreferrer">
            View resume
          </a>
          {profile.socials.map((social) => (
            <a key={social.label} className="btn btn--ghost" href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <div className="hero__card" aria-label="career metrics">
        <div className="hero__identity">
          <p className="hero__label">Currently</p>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
        </div>
        <div className="hero__metrics">
          {profile.metrics.map((metric) => (
            <article key={metric.label}>
              <span>{metric.value}</span>
              <p>{metric.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
