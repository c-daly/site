---
layout: default
title: Christopher D. Daly
permalink: /
---

<section class="hero" id="hero">
  <p class="eyebrow">AI + Robotics Engineer</p>
  <h1>Launch explainable autonomous systems faster.</h1>
  <p>
    I design intelligent agents, robotics demos, and resilient data platforms that blend
    research-grade ideas with pragmatic delivery. My work spans knowledge-graph-powered RAG,
    ROS2 navigation stacks, and SaaS billing rebuilds that keep teams unblocked.
  </p>
  <div class="hero-cta">
    <a class="btn primary" href="mailto:{{ site.email }}">Start a conversation</a>
    <a class="btn" href="{{ site.links.resume }}" target="_blank" rel="noreferrer">Download résumé</a>
  </div>
  <ul class="hero-meta">
    <li><strong>Location</strong>{{ site.location }}</li>
    <li><strong>Focus</strong> Applied AI, robotics, and platform engineering</li>
    <li><strong>Availability</strong> Open to contract or full-time roles</li>
  </ul>
</section>

<section id="highlights" class="section">
  <div class="section-heading">
    <p class="eyebrow">Recent Wins</p>
    <h2>Highlights</h2>
    <p>Deployable work that mixes ML, systems, and hardware craft.</p>
  </div>
  <ul class="card-grid">
    {% for highlight in site.data.highlights %}
    <li class="card highlight-card">
      <p class="card-kicker">{{ highlight.domain }}</p>
      <h3>{{ highlight.title }}</h3>
      <p>{{ highlight.summary }}</p>
      <p class="card-metric">{{ highlight.metric }}</p>
    </li>
    {% endfor %}
  </ul>
</section>

<section id="skills" class="section">
  <div class="section-heading">
    <p class="eyebrow">What I ship with</p>
    <h2>Technical Toolkit</h2>
  </div>
  <div class="skills-grid">
    {% for skill in site.data.skills %}
    <article class="skills-card">
      <h3>{{ skill.name }}</h3>
      <p>{{ skill.summary }}</p>
      <ul>
        {% for item in skill.items %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
    </article>
    {% endfor %}
  </div>
</section>

<section id="projects" class="section">
  <div class="section-heading">
    <p class="eyebrow">Proof of execution</p>
    <h2>Featured Projects</h2>
  </div>
  <div class="projects">
    {% for project in site.data.projects %}
    <article class="project-card">
      <header>
        <p class="card-kicker">{{ project.stack | join: ' · ' }}</p>
        <h3><a href="{{ project.url }}" target="_blank" rel="noreferrer">{{ project.name }}</a></h3>
      </header>
      <p>{{ project.summary }}</p>
      <ul>
        {% for bullet in project.highlights %}
        <li>{{ bullet }}</li>
        {% endfor %}
      </ul>
    </article>
    {% endfor %}
  </div>
</section>

<section id="experience" class="section">
  <div class="section-heading">
    <p class="eyebrow">Career snapshots</p>
    <h2>Professional Experience</h2>
  </div>
  <div class="timeline">
    {% for role in site.data.experience %}
    <article class="timeline-card">
      <header>
        <h3>{{ role.role }} · {{ role.company }}</h3>
        <p>{{ role.location }} · {{ role.period }}</p>
      </header>
      <ul>
        {% for achievement in role.achievements %}
        <li>{{ achievement }}</li>
        {% endfor %}
      </ul>
    </article>
    {% endfor %}
  </div>
</section>

<section id="education" class="section">
  <div class="section-heading">
    <p class="eyebrow">Foundations</p>
    <h2>Education</h2>
  </div>
  <div class="education">
    {% for edu in site.data.education %}
    <article class="education-card">
      <h3>{{ edu.program }}</h3>
      <p>{{ edu.school }} · {{ edu.location }} · {{ edu.year }}</p>
      <p>{{ edu.focus }}</p>
    </article>
    {% endfor %}
  </div>
</section>

<section id="contact" class="section contact-section">
  <div class="section-heading">
    <p class="eyebrow">Let's collaborate</p>
    <h2>Contact</h2>
  </div>
  <p>
    Need a systems thinker who can take an idea from concept to deployable demo? Send a note and
    let's scope the next project.
  </p>
  <div class="contact-links">
    <a class="btn primary" href="mailto:{{ site.email }}">Email {{ site.title }}</a>
    <a class="btn" href="{{ site.links.linkedin }}" target="_blank" rel="noreferrer">LinkedIn</a>
    <a class="btn" href="{{ site.links.github }}" target="_blank" rel="noreferrer">GitHub</a>
  </div>
</section>
