# Day page templating (lightweight)

Source pages now support Nunjucks so shared layout pieces live in one place.

- Source pages live in `src/pages/*.njk` with front matter for `pageTitle`, `daySlug`, `basePath`, `manifestPath`, `faviconPath` (all optional except `daySlug`).
- Layout and partials live under `templates/` (base layout: `templates/layouts/day.njk`).
- Build command: `npm run build:days` (defaults to `maps-build/` to keep changes safe). To write directly to `maps/`, run `npm run build:days -- --out maps` (or add `--only <slug>` to build a single page).
- After regenerating pages, run the existing `node scripts/build-site.mjs` to rebuild `docs/` for GitHub Pages.

Example: `src/pages/26-transport.njk` uses the layout and renders back to `maps/26-transport/index.html`. Migrate other days by copying their current `maps/<slug>/index.html` into `src/pages/<slug>.njk`, trimming the outer HTML tags, and keeping their body + styles inside the Nunjucks blocks.
