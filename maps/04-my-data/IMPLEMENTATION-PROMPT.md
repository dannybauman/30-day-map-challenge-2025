# Day 4 Implementation Prompt

**Theme:** My Data  
**Concept:** Disney Park Visit Mix  
**Dataset:** `data/disney-park-visits.geojson` (one point per park with visit counts, unique visit days, total hours, first/last visit timestamps)

---

```
Project: 30-Day Map Challenge 2025 – Day 4 “My Data”
Theme: Personal dataset visualization

Context:
I collected my own Google Maps Timeline exports, filtered them to the Disney parks I’ve actually visited (Anaheim + Walt Disney World), removed anything near my home ZIP, and aggregated the visits per park. The sanitized dataset ships with the project as `data/disney-park-visits.geojson`.

Dataset shape (FeatureCollection of points):
[
  {
    "type": "Feature",
    "geometry": { "type": "Point", "coordinates": [ -81.581221, 28.418705 ] },
    "properties": {
      "park_id": "wdw-magic-kingdom",
      "park_name": "Magic Kingdom",
      "visit_count": 7,
      "unique_visit_days": 4,
      "first_visit": "2018-10-14",
      "last_visit": "2024-02-02",
      "total_hours": 18.5,
      "sample_places": ["Pirates of the Caribbean", "Liberty Tree Tavern", "Space Mountain"]
    }
  },
  … more parks …
]

Goal:
Build a responsive web page that visualizes this dataset as an interactive map and quick stats dashboard. Make it easy to compare which parks I gravitate toward.

Must have:
1. Load the GeoJSON directly from `data/disney-park-visits.geojson` (no external APIs).
2. Map (Leaflet or MapLibre GL JS) centered on Walt Disney World / Disneyland with automatic bounds fitting to the features.
3. Markers or proportional circles colour-coded by `visit_count` tiers (e.g., occasional, regular, favourite). Include a legend explaining the tiers.
4. Tooltip or popup per park with:
   - Park name
   - Total visits (`visit_count`)
   - Unique visit days (`unique_visit_days`)
   - Total hours (`total_hours`) with “hrs” suffix
   - First/last visit dates (year-month-day)
   - Up to three sample places joined by commas
5. Sidebar or header summary with overall stats: total parks visited, total visits, most-visited park (name + count), and total hours.
6. “My Data, My Rules” style callout that states the data is personal, filtered to remove home/work, and aggregated before publishing.
7. Clean mobile layout (sidebar should stack below the map; buttons/legend readable under 400 px width).
8. Friendly colour palette that feels on-theme for Disney (think soft blues/purples/golds) while keeping WCAG contrast for text.
9. Plain HTML/CSS/JS (no frameworks other than the mapping library). Keep the codebase simple because multiple AI platforms will iterate on it.

Nice to have (if time permits):
- Toggle to switch between “Total visits” and “Unique visit days” for marker sizing.
- Highlight the top park with a badge or special styling in the sidebar.
- Animated marker entry on load.

Deliverables:
- `index.html`, `style.css`, `script.js` (or a single HTML file with embedded CSS/JS).
- All assets self-contained so I can zip the folder and re-upload elsewhere.
- Tested in a modern desktop browser; ensure hover/tap interactions work.

Reminder:
Do not add any new external API calls or analytics. Everything must work completely offline with the bundled GeoJSON file.
```
