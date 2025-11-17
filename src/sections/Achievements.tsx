import { achievements } from '../data/content';
import './Achievements.scss';

export function Achievements() {
  return (
    <section className="achievements" aria-labelledby="achievements-title">
      <div className="section-intro">
        <p className="section-intro__eyebrow">Achievements</p>
        <h2 id="achievements-title">Signals that show how I deliver</h2>
        <p>Snapshots from launches where clarity, trust, and measurable impact mattered most.</p>
      </div>
      <div className="achievements__grid">
        {achievements.map((achievement) => (
          <article key={achievement.title} className="achievement-card">
            <h3>{achievement.title}</h3>
            <p className="achievement-card__description">{achievement.description}</p>
            <p className="achievement-card__detail">{achievement.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
