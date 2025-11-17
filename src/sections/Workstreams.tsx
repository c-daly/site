import { workstreams } from '../data/content';
import { WorkstreamCard } from '../components/WorkstreamCard';
import { SectionHeading } from '../components/SectionHeading';
import './Workstreams.scss';

export function Workstreams() {
  return (
    <section className="workstreams">
      <SectionHeading
        label="Active workstreams"
        eyebrow="What I am shipping"
        action={<a href="mailto:hello@alexrobbins.com" className="btn btn--ghost">Request briefing</a>}
      />
      <div className="workstreams__grid">
        {workstreams.map((workstream) => (
          <WorkstreamCard key={workstream.title} {...workstream} />
        ))}
      </div>
    </section>
  );
}
