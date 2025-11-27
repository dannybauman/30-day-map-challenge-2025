# Developer Quickstart

Edit, build, and preview
- Pages live in `src/pages/<day>.njk` using `templates/layouts/day.njk` (layout injects head/nav/footer and base styles; per-page overrides go in `{% block page_styles %}`).
- Preview build to `maps-build/`: `npm run dev`
- Publish build (pages + docs): `npm run publish`
- Static server: `npm run dev:server` (serves `docs/` by default; add `--dir .`/`--port 3000` if needed)

Builders
- `scripts/build-days.mjs` renders NJK pages → `maps/` (or `maps-build/` in preview)
- `scripts/build-site.mjs` copies `maps/` → `docs/` and writes `days.json` + `docs/index.html`
