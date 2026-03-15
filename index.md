---
layout: default
title: Home
---

# Welcome

I am **Yaseer Arafat**, a backend-focused software engineer building APIs, distributed systems, and cloud-native applications.

I specialize in .NET and backend architecture, with practical delivery across cloud platforms, DevOps workflows, and production-grade systems.

## Profile Sections

- [About](/about/)
- [Projects](/projects/)
- [Contact](/contact/)

## Connect

- [GitHub Profile](https://github.com/emonarafat)
- [LinkedIn](https://www.linkedin.com/in/yaseerarafat)
- [Upwork](https://www.upwork.com/freelancers/~019243c0d9b337e319)

## Featured Posts

{% assign featured = site.posts | where: "featured", true %}
{% if featured.size > 0 %}
<ul>
  {% for post in featured %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <br>
      <small>{{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
{% else %}
No featured posts yet.
{% endif %}

## Recent Posts

{% if site.posts.size > 0 %}
<ul>
  {% for post in site.posts limit: 8 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <br>
      <small>{{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
{% else %}
No posts published yet.
{% endif %}

## Featured Repositories

- [ContextAwareEFCore](https://github.com/emonarafat/ContextAwareEFCore)
- [MassTransitOutboxDemo](https://github.com/emonarafat/MassTransitOutboxDemo)
- [Dapper.Sharding](https://github.com/emonarafat/Dapper.Sharding)

## Quick Links

- [All GitHub Repositories](https://github.com/emonarafat?tab=repositories)
- [Profile README](https://github.com/emonarafat)
