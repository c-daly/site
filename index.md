---
layout: default
title: Alex Robbins — Emerging Tech Delivery
---

<main>
  <section class="hero">
    <div class="hero-copy">
      <p class="eyebrow">Recent missions</p>
      <h2>Shipping automation, AI governance, and robotics pilots that actually land.</h2>
      <p>
        I partner with operations, policy, and engineering leaders to thread cutting-edge agents, robotics,
        and copilots into live programs. The remit: reduce risk, accelerate deployment, and prove the math on
        enterprise automation.
      </p>
    </div>
    <div class="metric-grid">
      {% for metric in site.data.metrics %}
      <div class="metric-card">
        <span class="value">{{ metric.value }}</span>
        <span class="label">{{ metric.label }}</span>
      </div>
      {% endfor %}
    </div>
  </section>

  <section class="section highlights">
    <div class="section-heading">
      <p class="eyebrow">Highlights</p>
      <h3>Recent delivery snapshots</h3>
      <p>Program briefs that turned emerging tech experiments into accountable operations.</p>
    </div>
    <div class="card-grid">
      {% for highlight in site.data.highlights %}
      <article class="card">
        <header>
          <p class="metric">{{ highlight.metric }}</p>
          <h4>{{ highlight.title }}</h4>
        </header>
        <p>{{ highlight.description }}</p>
      </article>
      {% endfor %}
    </div>
  </section>

  <section class="section workstreams">
    <div class="section-heading">
      <p class="eyebrow">Active workstreams</p>
      <h3>Where I am spending cycles now</h3>
      <p>Blending technical prototyping with executive coaching to move the work from pilot to scale.</p>
    </div>
    <div class="workstream-grid">
      {% for workstream in site.data.workstreams %}
      <article class="workstream-card">
        <div class="status status-{{ workstream.status }}">{{ workstream.status | capitalize }}</div>
        <h4>{{ workstream.title }}</h4>
        <p>{{ workstream.summary }}</p>
        <dl>
          <dt>Stack</dt>
          <dd>{{ workstream.stack | join: ', ' }}</dd>
          <dt>Impact</dt>
          <dd>{{ workstream.impact }}</dd>
        </dl>
      </article>
      {% endfor %}
    </div>
  </section>

  <section class="section contact">
    <div class="section-heading">
      <p class="eyebrow">Let’s team up</p>
      <h3>Need an operator who speaks AI, robotics, and policy?</h3>
      <p>
        I embed with teams to unblock go-lives, stand up governance, and prove the business case for automation.
        Happy to lead workshops, spin up tiger teams, or advise executives on responsible AI programs.
      </p>
    </div>
    <div class="cta-group">
      <a class="cta" href="mailto:alex@alexrobbins.dev">Email Alex</a>
      <a class="cta secondary" href="https://cal.com/robbinsalex/intro" target="_blank" rel="noreferrer">Schedule a call</a>
    </div>
  </section>
</main>
