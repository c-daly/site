import { experiences } from '../data/content';
import './Experience.scss';

export function Experience() {
  return (
    <section className="experience" aria-labelledby="experience-title">
      <div className="section-intro">
        <p className="section-intro__eyebrow">Experience</p>
        <h2 id="experience-title">Resume snapshots</h2>
        <p>
          Program leadership roles where I paired research, prototyping, and delivery coaching to keep launches calm and
          measurable.
        </p>
      </div>
      <div className="experience__timeline" role="list">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.period}`} className="experience-card" role="listitem">
            <header>
              <div>
                <p className="experience-card__period">{experience.period}</p>
                <h3>{experience.role}</h3>
                <p className="experience-card__company">{experience.company}</p>
              </div>
              <span className="experience-card__location">{experience.location}</span>
            </header>
            <p className="experience-card__summary">{experience.summary}</p>
            <ul>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
