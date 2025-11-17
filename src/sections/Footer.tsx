import './Footer.scss';

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="site-footer__eyebrow">Let’s make the next launch calmer</p>
        <h2>Work sessions, embedded leadership, or fractional head-of product.</h2>
      </div>
      <div className="site-footer__links">
        <a className="btn btn--primary" href="mailto:hello@alexrobbins.com">
          Send a note
        </a>
        <a className="btn btn--ghost" href="https://cal.com/alexrobbins/30min" target="_blank" rel="noreferrer">
          Grab 30 min
        </a>
      </div>
    </footer>
  );
}
