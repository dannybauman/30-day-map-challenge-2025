# Day 26: Transport — Implementation Prompt

We are building the **Transit Desert Clock** as a map-first experience (no clock-face UI). Keep it fast to load, single-page HTML/CSS/JS, no build steps. Use Leaflet + plain JS. Avoid API keys.

## Concept
Map shows when parts of a city lose transit access over a 24-hour cycle. Time is the storytelling layer: as the hour slider/animation advances, areas with active service stay lit; areas without service dim and get labeled as “transit deserts.”

## City & Data
- City: **Portland, OR metro (TriMet rail/bus subset)** to stay lightweight.
- Primary data: GTFS static feed: `https://developer.trimet.org/schedule/gtfs.zip` (public static GTFS; no key required).
- Only load what is needed for the Portland metro; keep the bounding box tight around the city.
- If remote fetch/CORS fails, **fall back to the embedded sample below** (small subset of TriMet stops + service windows). Build the app so it works fully with the embedded data. If the live fetch succeeds, replace the embedded data with the parsed GTFS.

### Embedded sample fallback (use as-is if fetch fails)
Include this inline so the experience works offline:
```
const sampleStops = [
  { id: "8336", name: "Pioneer Square North", lat: 45.51876, lon: -122.67902 },
  { id: "8337", name: "Pioneer Square South", lat: 45.51806, lon: -122.67883 },
  { id: "8374", name: "Rose Quarter TC MAX Station", lat: 45.53172, lon: -122.66679 },
  { id: "10579", name: "Beaverton TC", lat: 45.49098, lon: -122.80154 },
  { id: "8341", name: "Lloyd Center/NE 11th Ave", lat: 45.53163, lon: -122.65505 },
  { id: "8333", name: "SW 6th & Madison", lat: 45.51569, lon: -122.67964 },
  { id: "11584", name: "Gateway/NE 99th Ave TC", lat: 45.53184, lon: -122.56254 }
];
// Active service hours by stop (24h ints) — simple ranges for prototype
const sampleServiceHours = {
  "8336": [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  "8337": [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  "8374": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
  "10579": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
  "8341": [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
  "8333": [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
  "11584": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
};
```

## What to Build
- **Map-first UI**: Leaflet basemap (Carto light or OSM) centered on the Portland metro. No clock-face graphic. The primary canvas is the map with overlays.
- **Time control**: Hour slider (0–23) + Play/Pause button. Auto-advances every ~1.5s; pauses when user interacts. Show current hour label.
- **Desert detection**: For the current hour, highlight stops with active service (glow or bright markers). Stops without service at that hour appear dim. Compute a simple “desert” polygon/heat overlay: buffer all active stops by 800m; areas outside buffers are deserts → render with a semi-transparent red/purple mask.
- **Metrics panel**: Small card with current-hour stats: active stops count, % of stops active, and a short text (“Late night desert: most lines offline”).
- **Stop detail**: Hover/click popup shows stop name, first/last service hour, and whether it is active at the selected hour.
- **Legend**: Colors for active vs desert + play/pause/slider instructions.
- **Fallback ready**: If GTFS fetch fails, immediately use `sampleStops` + `sampleServiceHours` and still render buffers and stats.

## Data Handling
- If fetch works: download GTFS zip, parse `stops.txt`, `stop_times.txt`, `trips.txt` to derive service hours per stop (first and last departure times; mark each hour that has >=1 departure). You can do this client-side with JS unzip/parsing libraries, but keep it minimal—if complex, default to the embedded sample and note that live fetch is best-effort.
- Keep payload small: limit to Portland metro stops (TriMet) and cache results in memory.

## Interaction & UX
- Smooth hour animation; allow manual scrubbing without lag.
- Default hour: 22:00 to immediately show late-evening deserts.
- Mobile-friendly: controls stack; popups tap-friendly.
- Accessibility: sufficient color contrast; label controls; avoid flashing.

## Tech Guardrails
- HTML + CSS + JS only; Leaflet for map. No API keys. No build step.
- Include all code in one file (plus inline fallback data). External libs via CDN are ok.
- Prefer fetch + fallback; do not require a server. Must work on `file://` with the embedded data.

## Deliverables
- A single `index.html` that runs locally. Works with fallback data even if GTFS fetch fails.
- Clear comments where to switch between live GTFS and fallback data.
