import { projects } from '../data/content';
import './Projects.scss';

export function Projects() {
  return (
    <section className="projects" aria-labelledby="projects-title">
      <div className="section-intro">
        <p className="section-intro__eyebrow">Projects</p>
        <h2 id="projects-title">Experiments and tools in active rotation</h2>
        <p>Each project blends research, prototyping, and delivery coaching so teams inherit something stable.</p>
      </div>
      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <ul>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="project-card__link" href={project.link} target="_blank" rel="noreferrer">
              View repository
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
