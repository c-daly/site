import { profile } from '../data/content';
import './Contact.scss';

export function Contact() {
  return (
    <section className="contact" aria-labelledby="contact-title">
      <div className="contact__content">
        <p className="section-intro__eyebrow">Next step</p>
        <h2 id="contact-title">Let’s map your next launch together</h2>
        <p>
          I run whiteboard sessions, help teams pressure-test roadmaps, and can embed to steer execution. Share what
          you’re working on and I’ll send over an outline within a day.
        </p>
      </div>
      <div className="contact__actions">
        <a className="btn btn--primary" href={`mailto:${profile.email}`}>
          Write me a note
        </a>
        <a className="btn btn--ghost" href={profile.socials[0].url} target="_blank" rel="noreferrer">
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}
