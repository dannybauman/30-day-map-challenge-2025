# Day 24 · Places and their names — Implementation Prompt (Reduced)

**Project:** Single-page Leaflet map that displays major world cities with multilingual name variants. No backend.

## Core Objectives
- Render ~50–100 city points with multiple name fields (default/local, English, French, Arabic or similar).
- Let users switch or cycle visible label languages (toggle or per-city tooltip).
- Keep UI minimal, legible, mobile-friendly; right-to-left labels render correctly when Arabic is active.

## Data Requirements
- Prefer live Overpass fetch for `name`, `name:en`, `name:fr`, `name:ar` (or similar). If Overpass fails or CORS blocks, skip live fetch and use the embedded fallback without throwing errors.
- Fallback: embedded GeoJSON sample with fields: `name_default`, `name_local`, `name_en`, `name_fr`, `name_ar`, `lat`, `lon`, `population?`, `source`.
- Fabricated translations are allowed but must be marked `"ai-generated"` in `source`. Surface that note in the UI footer.

## Map Implementation
- Use **Leaflet** + a free, key-less basemap (OSM/Carto Positron). No Mapbox or paid services.
- Labels via `L.divIcon` (or equivalent) with subtle color variation by language; include legend chips keyed to language colors.
- Global language switch; optional tooltip cycling through all available names.
- Prevent clutter at low zoom: cluster or hide labels below a set zoom threshold.
- Attribution: include basemap + OSM credit in the footer.

## Interaction & UX
- Responsive layout; ensure label sizes stay legible on mobile.
- If a selected language is missing for a city, fall back to default/local.
- Optional image-gen: generate one hero/legend tile (“City names in multiple scripts”) if available; otherwise skip gracefully.

## Deliverables
- One `index.html` with inline CSS + JS (no bundler/build).
- Embedded dataset fallback so the page works offline.
- Brief UI note indicating which data or images were AI-generated.

## Constraints
- No API keys, no Mapbox, no paid services.
- Keep assets lightweight; avoid large tilesets.
- Don’t overload the UI with too many language options (stick to 3–4).***
