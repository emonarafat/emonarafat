---
layout: default
title: Home
---

{% assign featured = site.posts | where: "featured", true %}

<section class="hero">
  <div>
    <div class="eyebrow">Portfolio / Resume</div>
    <h1>Building <span class="accent">scalable commerce</span>, cloud systems, and intelligent software.</h1>
    <p class="lede">I am Yaseer Arafat, AGM (Technical) at Othoba.com, .NET architect, and engineering leader with 14+ years of experience delivering backend platforms, cloud-native services, and AI-assisted product workflows.</p>

    <div class="hero-actions">
      <a class="button button-primary" href="{{ '/projects/' | relative_url }}">View Projects</a>
      <a class="button button-ghost" href="{{ '/contact/' | relative_url }}">Work With Me</a>
    </div>

    <div class="chip-row">
      <div class="chip">.NET 10 / ASP.NET Core</div>
      <div class="chip">Azure + AWS</div>
      <div class="chip">Microservices + CQRS</div>
      <div class="chip">E-commerce Architecture</div>
    </div>
  </div>

  <div class="hero-aside">
    <div class="panel">
      <div class="section-tag">Current Role</div>
      <h3>Assistant General Manager (Technical)</h3>
      <p class="muted">Leading architecture, performance, and delivery for Othoba.com, one of Bangladesh's largest online marketplaces.</p>
      <div class="tag-list">
        <span class="tag">Othoba.com</span>
        <span class="tag">nopCommerce</span>
        <span class="tag">Cloud + DevOps</span>
      </div>
    </div>

    <div class="stat-grid">
      <div class="metric">
        <span class="metric-value">14+</span>
        <span class="metric-label">Years Experience</span>
      </div>
      <div class="metric">
        <span class="metric-value">3</span>
        <span class="metric-label">Core Domains</span>
      </div>
      <div class="metric">
        <span class="metric-value">Global</span>
        <span class="metric-label">Team Exposure</span>
      </div>
    </div>
  </div>
</section>

<section class="section-card">
  <div class="section-tag">What I Do</div>
  <div class="grid three">
    <div class="card">
      <h3>Backend Systems</h3>
      <p>Designing reliable APIs, modular backend platforms, and integration-heavy enterprise services with .NET and Node.js.</p>
    </div>
    <div class="card">
      <h3>Cloud Delivery</h3>
      <p>Shipping containerized and serverless systems on Azure and AWS with CI/CD, monitoring, and operational rigor.</p>
    </div>
    <div class="card">
      <h3>Engineering Leadership</h3>
      <p>Guiding teams, architecture direction, and product execution without compromising maintainability or velocity.</p>
    </div>
  </div>
</section>

<section class="section-card">
  <div class="section-tag">Featured Work</div>
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
</section>

<section class="section-card">
  <div class="section-tag">Writing</div>
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
  <div class="section-tag">Next Step</div>
  <div class="grid two">
    <div class="quote-card">
      <h2>Need backend architecture, cloud modernization, or delivery leadership?</h2>
      <p class="muted">Explore my background, project work, and contact channels to start a conversation.</p>
    </div>
    <div class="contact-pills">
      <div class="contact-card"><strong>About</strong><a href="{{ '/about/' | relative_url }}">Career, strengths, and credentials</a></div>
      <div class="contact-card"><strong>Projects</strong><a href="{{ '/projects/' | relative_url }}">Selected engineering work</a></div>
      <div class="contact-card"><strong>Contact</strong><a href="{{ '/contact/' | relative_url }}">Email, WhatsApp, LinkedIn, Upwork</a></div>
    </div>
  </div>
</section>
