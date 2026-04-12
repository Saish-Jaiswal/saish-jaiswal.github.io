# [YOUR_NAME] — Academic Personal Website

A clean, minimal, static academic homepage built with plain HTML, CSS, and JavaScript.
Hosted on [GitHub Pages](https://pages.github.com/).

**Live site → [https://saish-jaiswal.github.io](https://saish-jaiswal.github.io)**

---

## File Structure

```
saish-jaiswal.github.io/
├── index.html      ← All page content (edit your info here)
├── style.css       ← All styles and responsive layout
├── script.js       ← Smooth scroll, nav highlight, mobile menu
├── README.md       ← This file
└── assets/
    ├── profile.jpg ← Your profile photo (add this!)
    └── cv.pdf      ← Your CV / résumé PDF (add this!)
```

> **Note:** Create the `assets/` folder manually and drop in your `profile.jpg` and `cv.pdf`.
> If `profile.jpg` is missing the site will show styled initials instead — nothing breaks.

---

## Customising the Website

Open `index.html` and search for placeholders in `[SQUARE_BRACKETS]`.
Replace each one with your actual information.

### Placeholder Reference

| Placeholder | Replace with |
|---|---|
| `[YOUR_NAME]` | Your full name |
| `[YOUR_INITIALS]` | 2–3 letter initials shown if photo is absent |
| `[YOUR_TITLE]` | Browser tab title, e.g. `PhD Student` |
| `[YOUR_POSITION]` | e.g. `PhD Student` or `Postdoctoral Researcher` |
| `[YOUR_UNIVERSITY_OR_INSTITUTION]` | Your affiliation |
| `[YOUR_BIO]` | 2–3 sentence bio paragraph |
| `[YOUR_EMAIL]` | your@email.com |
| `[YOUR_GITHUB]` | GitHub username |
| `[YOUR_LINKEDIN]` | LinkedIn username (part after `/in/`) |
| `[YOUR_TWITTER]` | Twitter / X handle (without @) |
| `[YOUR_SCHOLAR_ID]` | Google Scholar profile ID from the URL |
| `[ADD_PUBLICATIONS_HERE]` | Copy a `pub-entry` block for each paper |
| `[ADD_PROJECTS_HERE]` | Copy a `project-card` block for each project |
| `[ADD_EXPERIENCE_HERE]` | Copy a `timeline-item` block for each entry |

---

## Adding Publications

Each publication uses a `pub-entry` block. Copy and paste it for each new paper:

```html
<div class="pub-entry">
  <div class="pub-badge">Conference</div>   <!-- or: pub-badge-journal / pub-badge-preprint / pub-badge-workshop -->
  <div class="pub-content">
    <h3 class="pub-title">Paper Title</h3>
    <p class="pub-authors"><strong>Your Name</strong>, Co-author 1, Co-author 2</p>
    <p class="pub-venue">Venue Name (ACRONYM), Year</p>
    <div class="pub-links">
      <a href="LINK" class="pub-link">[Paper]</a>
      <a href="LINK" class="pub-link">[Code]</a>
    </div>
    <p class="pub-tldr"><strong>TL;DR:</strong> One-sentence summary.</p>
  </div>
</div>
```

**Available badge colours:**

| Class | Colour | Use for |
|---|---|---|
| `pub-badge` | Blue | Conference papers |
| `pub-badge pub-badge-journal` | Green | Journal articles |
| `pub-badge pub-badge-preprint` | Yellow/amber | arXiv preprints |
| `pub-badge pub-badge-workshop` | Purple | Workshop papers |

---

## Adding Projects

Copy a `project-card` block inside `.projects-grid`:

```html
<div class="project-card">
  <div class="project-header">
    <h3 class="project-title">Project Name</h3>
    <div class="project-links">
      <a href="GITHUB_URL" target="_blank" rel="noopener" class="project-link">GitHub</a>
      <a href="DEMO_URL" class="project-link">Demo</a>
    </div>
  </div>
  <p class="project-desc">2–3 sentence description.</p>
  <div class="project-tags">
    <span class="tag">Python</span>
    <span class="tag">PyTorch</span>
  </div>
</div>
```

---

## Adding Experience / Education

Copy a `timeline-item` block inside `.timeline`:

```html
<div class="timeline-item">
  <div class="timeline-marker"></div>
  <div class="timeline-content">
    <div class="timeline-header">
      <h3 class="timeline-role">Role or Degree</h3>
      <span class="timeline-date">Month Year – Month Year</span>
    </div>
    <p class="timeline-org">Organisation · Location</p>
    <ul class="timeline-details">
      <li>Key detail or achievement.</li>
    </ul>
  </div>
</div>
```

---

## Changing the Accent Colour

Open `style.css` and update the `:root` block at the top:

```css
:root {
  --color-accent:      #2563eb;  /* Main blue — change this */
  --color-accent-dark: #1d4ed8;  /* Hover state — slightly darker */
  --color-bg-alt:      #f8f9fa;  /* Alternate section background */
}
```

---

## Deploying to GitHub Pages

This repository is already named `saish-jaiswal.github.io`, so every push to the
`main` branch automatically publishes to:

```
https://saish-jaiswal.github.io
```

No build step, no configuration needed — it's a fully static site.

---

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, flexbox, grid, IntersectionObserver
- **Vanilla JavaScript** — no frameworks, no dependencies
- **Google Fonts** — [Inter](https://fonts.google.com/specimen/Inter)

---

## License

Feel free to use and adapt this template for your own academic homepage.
