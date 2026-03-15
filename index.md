---
layout: default
title: Home
---

{% assign featured = site.posts | where: "featured", true %}

<section class="hero">
  <div>
    <div class="eyebrow">Engineering Portfolio</div>
    <h1>Building <span class="accent">resilient platforms</span> for commerce, cloud, and real-world scale.</h1>
    <p class="lede">I lead technical strategy at Othoba.com and work at the intersection of backend architecture, platform reliability, and business-critical delivery. My systems are designed to survive traffic spikes, team growth, and operational reality.</p>

    <div class="hero-badge">AGM (Technical) • Othoba.com • .NET & Cloud Architect</div>

    <div class="hero-actions">
      <a class="button button-primary" href="{{ '/projects/' | relative_url }}">View Projects</a>
      <a class="button button-ghost" href="{{ '/about/' | relative_url }}">Read My Background</a>
    </div>

    <div class="number-line">
      <div class="number-pill"><strong>14+</strong><span class="label-muted">Years in software engineering</span></div>
      <div class="number-pill"><strong>2009</strong><span class="label-muted">Shipping production systems since</span></div>
      <div class="number-pill"><strong>4</strong><span class="label-muted">Core pillars: backend, cloud, commerce, delivery</span></div>
    </div>

    <p class="hero-note">I care about architecture that remains understandable six months later, operations that stay calm under pressure, and delivery practices that keep engineering teams fast without becoming fragile.</p>
  </div>

  <div class="hero-aside">
    <div class="spotlight-card">
      <div class="section-tag">Current Mandate</div>
      <h3>National-scale marketplace engineering</h3>
      <p class="muted">Owning technical strategy, platform stability, and scalability for one of Bangladesh's largest commerce platforms.</p>
      <div class="tag-list">
        <span class="tag">Othoba.com</span>
        <span class="tag">nopCommerce</span>
        <span class="tag">Platform Reliability</span>
      </div>
    </div>

    <div class="signal-grid">
      <div class="mini-card">
        <span class="metric-value">.NET</span>
        <span class="metric-label">Architectures, APIs, CQRS, plugin systems</span>
      </div>
      <div class="mini-card">
        <span class="metric-value">Cloud</span>
        <span class="metric-label">Azure, AWS, containers, observability, delivery</span>
      </div>
      <div class="mini-card">
        <span class="metric-value">AI</span>
        <span class="metric-label">Practical workflows with Whisper, GPT, semantic search</span>
      </div>
    </div>
  </div>
</section>

<section class="section-card">
  <div class="section-tag">Capability Map</div>
  <p class="section-caption">A concise view of how I usually add value in complex engineering environments.</p>
  <div class="signal-grid">
    <div class="resume-panel">
      <h3>Backend Systems</h3>
      <p>Reliable APIs, modular service layers, authentication, distributed workflows, and performance-aware application design in .NET and Node.js.</p>
    </div>
    <div class="resume-panel">
      <h3>Cloud Delivery</h3>
      <p>Azure and AWS deployments, CI/CD pipelines, observability, environment hardening, cost awareness, and release stability.</p>
    </div>
    <div class="resume-panel">
      <h3>Leadership</h3>
      <p>Architecture direction, team mentoring, delivery planning, and technical decision-making that aligns with business priorities.</p>
    </div>
  </div>
</section>

<section class="section-card">
  <div class="section-tag">Selected Work</div>
  <div class="split-grid">
    <div class="project-grid">
    <article class="project-card">
      <h3>ContextAwareEFCore</h3>
      <p>Behavior-altering EF Core DbContext patterns for advanced application behavior and data access control.</p>
      <a class="inline-link" href="https://github.com/emonarafat/ContextAwareEFCore" target="_blank" rel="noreferrer">Open Repository</a>
    </article>
    <article class="project-card">
      <h3>MassTransitOutboxDemo</h3>
      <p>Demonstrates reliable event-driven architecture using MassTransit and the Outbox pattern in .NET.</p>
      <a class="inline-link" href="https://github.com/emonarafat/MassTransitOutboxDemo" target="_blank" rel="noreferrer">Open Repository</a>
    </article>
    <article class="project-card">
      <h3>lightningfast-whisperApi</h3>
      <p>Speech and AI backend experimentation focused on practical API delivery with Whisper and automation workflows.</p>
      <a class="inline-link" href="https://github.com/emonarafat/lightningfast-whisperApi" target="_blank" rel="noreferrer">Open Repository</a>
    </article>
    </div>

    <div class="story-grid">
      <div class="spotlight-card">
        <div class="section-tag">Working Style</div>
        <p>I prefer systems that are measurable, boring in production, and understandable by the next engineer without a guided tour.</p>
      </div>
      <div class="spotlight-card">
        <div class="section-tag">Recent Themes</div>
        <ul class="bullet-list">
          <li>Architecture maturity in real product teams</li>
          <li>Cloud cost discipline and reliability trade-offs</li>
          <li>Operational learning from production incidents</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section-card">
  <div class="section-tag">Featured Writing</div>
  <p class="section-caption">Long-form writing focused on practical engineering, not theory-only tutorials.</p>
  {% if featured.size > 0 %}
  <div class="grid two">
    {% for post in featured %}
    <article class="project-card">
      <small>{{ post.date | date: "%B %d, %Y" }}</small>
      <h3>{{ post.title }}</h3>
      <a class="inline-link" href="{{ post.url | relative_url }}">Read Article</a>
    </article>
    {% endfor %}
  </div>
  {% else %}
  <div class="quote-card">
    <p>No featured posts published yet.</p>
  </div>
  {% endif %}
</section>

<section class="section-card">
  <div class="section-tag">Medium Blog</div>
  <div class="section-heading-row">
    <div>
      <h2>Latest articles from Medium</h2>
      <p class="muted">Fresh writing on architecture, debugging, cloud systems, and engineering leadership.</p>
    </div>
    <a class="button button-ghost" href="{{ '/blog/' | relative_url }}">View All Posts</a>
  </div>

  <div class="medium-feed" data-feed-url="https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yaseer.arafat" data-limit="4">
    <div class="feed-status">Loading latest Medium posts...</div>
  </div>
</section>

<section class="section-card">
  <div class="section-tag">Get Oriented</div>
  <div class="resume-grid">
    <div class="quote-card">
      <h2>If you are evaluating me for architecture, platform modernization, or leadership support, start here.</h2>
      <p class="muted">The site is organized like a working resume: background, selected projects, live writing, and direct contact channels.</p>
    </div>
    <div class="link-stack">
      <a class="link-tile" href="{{ '/about/' | relative_url }}"><span><strong>About</strong>Career history, credentials, strengths</span><span>→</span></a>
      <a class="link-tile" href="{{ '/projects/' | relative_url }}"><span><strong>Projects</strong>Architecture and product work</span><span>→</span></a>
      <a class="link-tile" href="{{ '/contact/' | relative_url }}"><span><strong>Contact</strong>Email, WhatsApp, LinkedIn, Upwork</span><span>→</span></a>
    </div>
  </div>
</section>
