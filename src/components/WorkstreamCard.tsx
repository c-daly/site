import type { Workstream } from '../data/content';
import './WorkstreamCard.scss';

const statusCopy: Record<Workstream['status'], string> = {
  active: 'Now shipping',
  pilot: 'In pilot',
  handoff: 'Recently handed off'
};

export function WorkstreamCard({ title, summary, stack, status, impact }: Workstream) {
  return (
    <article className="workstream-card">
      <header>
        <p className={`workstream-card__status workstream-card__status--${status}`}>
          {statusCopy[status]}
        </p>
        <h3>{title}</h3>
      </header>
      <p className="workstream-card__summary">{summary}</p>
      <ul className="workstream-card__stack">
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="workstream-card__impact">{impact}</p>
    </article>
  );
}
