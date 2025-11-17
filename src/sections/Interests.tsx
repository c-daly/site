import { interests } from '../data/content';
import './Interests.scss';

export function Interests() {
  return (
    <section className="interests" aria-labelledby="interests-title">
      <div className="section-intro">
        <p className="section-intro__eyebrow">Interests</p>
        <h2 id="interests-title">Questions I keep exploring</h2>
        <p>These are the themes that keep me curious between launches and inform who I collaborate with.</p>
      </div>
      <div className="interests__grid">
        {interests.map((interest) => (
          <article key={interest.title} className="interest-card">
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
            <div className="interest-card__examples" aria-label="examples">
              {interest.examples.map((example) => (
                <span key={example}>{example}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
