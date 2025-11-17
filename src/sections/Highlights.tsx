import { highlights } from '../data/content';
import { HighlightCard } from '../components/HighlightCard';
import { SectionHeading } from '../components/SectionHeading';
import './Highlights.scss';

export function Highlights() {
  return (
    <section className="highlights">
      <SectionHeading label="Signals from recent launches" eyebrow="Impact recap" />
      <div className="highlights__grid">
        {highlights.map((highlight) => (
          <HighlightCard key={highlight.title} {...highlight} />
        ))}
      </div>
    </section>
  );
}
