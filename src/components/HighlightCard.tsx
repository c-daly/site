import type { Highlight } from '../data/content';
import './HighlightCard.scss';

export function HighlightCard({ title, description, metric }: Highlight) {
  return (
    <article className="highlight-card">
      <p className="highlight-card__metric">{metric}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
