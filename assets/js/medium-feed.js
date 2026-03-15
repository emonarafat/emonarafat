document.addEventListener("DOMContentLoaded", () => {
  const feedContainers = document.querySelectorAll(".medium-feed[data-feed-url]");
  const experienceContainers = document.querySelectorAll(".experience-feed[data-feed-url]");

  if (!feedContainers.length && !experienceContainers.length) {
    return;
  }

  const decodeHtml = (value) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = value || "";
    return textarea.value;
  };

  const stripHtml = (value) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = value || "";
    return (wrapper.textContent || wrapper.innerText || "").trim();
  };

  const extractImage = (html) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html || "";
    return wrapper.querySelector("img")?.getAttribute("src") || "";
  };

  const cleanLink = (value) => {
    try {
      const url = new URL(value);
      url.searchParams.delete("source");
      return url.toString();
    } catch {
      return value;
    }
  };

  const formatDate = (value) => {
    try {
      return new Date(value).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return value;
    }
  };

  const escapeHtml = (value) =>
    String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const buildCard = (item) => {
    const title = decodeHtml(item.title || "Untitled post");
    const link = cleanLink(item.link || "https://medium.com/@yaseer.arafat");
    const image = item.thumbnail || extractImage(item.description || item.content || "");
    const excerpt = stripHtml(item.description || item.content || "").slice(0, 180).trim();
    const categories = Array.isArray(item.categories) ? item.categories.slice(0, 3) : [];

    return `
      <article class="project-card blog-card">
        <div class="thumb">${image ? `<img src="${image}" alt="${title}">` : ""}</div>
        <div class="blog-meta">${formatDate(item.pubDate || "")}</div>
        <h3>${title}</h3>
        <p class="blog-excerpt">${excerpt || "Read the full article on Medium."}</p>
        ${categories.length ? `<div class="blog-tags">${categories.map((category) => `<span class="blog-tag">${decodeHtml(category)}</span>`).join("")}</div>` : ""}
        <a class="inline-link" href="${link}" target="_blank" rel="noreferrer">Read on Medium</a>
      </article>
    `;
  };

  feedContainers.forEach(async (container) => {
    const feedUrl = container.getAttribute("data-feed-url");
    const limit = Number(container.getAttribute("data-limit") || "6");

    try {
      const response = await fetch(feedUrl, { headers: { Accept: "application/json" } });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const payload = await response.json();

      if (payload.status !== "ok" || !Array.isArray(payload.items)) {
        throw new Error("Unexpected feed format");
      }

      const items = payload.items.slice(0, limit);

      if (!items.length) {
        container.innerHTML = '<div class="feed-status">No Medium posts found yet.</div>';
        return;
      }

      container.innerHTML = `<div class="blog-grid">${items.map(buildCard).join("")}</div>`;
    } catch {
      container.innerHTML = '<div class="feed-error">The Medium feed is temporarily unavailable. You can still read all posts on <a href="https://medium.com/@yaseer.arafat" target="_blank" rel="noreferrer">Medium</a>.</div>';
    }
  });

  const buildExperienceCard = (item) => {
    const badgeSeed = item.company || item.title || "Experience";
    const badge = badgeSeed
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() || "")
      .join("") || "EX";

    const responsibilities = Array.isArray(item.responsibilities)
      ? item.responsibilities
          .slice(0, 4)
          .map((entry) => `<li>${escapeHtml(entry)}</li>`)
          .join("")
      : "";

    const company = item.website
      ? `<a class="inline-link" href="${item.website}" target="_blank" rel="noreferrer">${escapeHtml(item.company || "")}</a>`
      : escapeHtml(item.company || "");

    return `
      <article class="timeline-item experience-card">
        <div class="experience-head">
          <div class="experience-role-wrap">
            <span class="experience-badge" aria-hidden="true">${badge}</span>
            <div>
              <div class="timeline-role">${escapeHtml(item.title || "Experience")}</div>
              <div class="timeline-meta experience-company">${company}</div>
            </div>
          </div>
          <div class="experience-meta">
            <span class="experience-period">${escapeHtml(item.period || "")}</span>
            <span>${escapeHtml(item.location || "")}</span>
          </div>
        </div>
        ${responsibilities ? `<p class="experience-kicker">Impact highlights</p><ul class="experience-list">${responsibilities}</ul>` : ""}
      </article>
    `;
  };

  const getExperienceItems = (payload) => {
    if (Array.isArray(payload)) {
      return payload;
    }

    if (Array.isArray(payload?.items)) {
      return payload.items;
    }

    if (Array.isArray(payload?.data)) {
      return payload.data;
    }

    if (Array.isArray(payload?.experiences)) {
      return payload.experiences;
    }

    if (Array.isArray(payload?.data?.experiences)) {
      return payload.data.experiences;
    }

    return [];
  };

  experienceContainers.forEach(async (container) => {
    const feedUrl = container.getAttribute("data-feed-url");
    const limit = Number(container.getAttribute("data-limit") || "12");

    try {
      const response = await fetch(feedUrl, { headers: { Accept: "application/json" } });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const payload = await response.json();
      const items = getExperienceItems(payload).slice(0, limit);

      if (!items.length) {
        container.innerHTML = '<div class="feed-status">No experience entries found.</div>';
        return;
      }

      container.innerHTML = `<div class="timeline">${items.map(buildExperienceCard).join("")}</div>`;
    } catch {
      container.innerHTML = '<div class="feed-error">The experience feed is temporarily unavailable. Please check back later.</div>';
    }
  });
});