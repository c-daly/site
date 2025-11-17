import { metrics } from '../data/content';
import './Hero.scss';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Alex Robbins · Emerging Tech Delivery Lead</p>
        <h1>
          I turn ambiguous agent + robotics ideas into calm launches that real teams trust.
        </h1>
        <p>
          Currently coaching robotics, finance, and policy groups through generative AI adoption while
          keeping velocity and governance in balance.
        </p>
        <div className="hero__cta-group">
          <a className="btn btn--primary" href="mailto:hello@alexrobbins.com">Book working session</a>
          <a className="btn" href="https://www.linkedin.com/in/alexrobbins" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="hero__metrics">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <span>{metric.value}</span>
            <p>{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
