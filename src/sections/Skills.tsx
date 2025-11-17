import { skillGroups } from '../data/content';
import './Skills.scss';

export function Skills() {
  return (
    <section className="skills" aria-labelledby="skills-title">
      <div className="section-intro">
        <p className="section-intro__eyebrow">Toolkit</p>
        <h2 id="skills-title">Ways I help teams move faster</h2>
        <p>
          A blend of leadership, systems, and product muscles honed across robotics platforms, trusted AI reviews, and civic
          tech partnerships.
        </p>
      </div>
      <div className="skills__grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skills-card">
            <h3>{group.title}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
