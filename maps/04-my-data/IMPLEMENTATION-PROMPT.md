# Day 4 Implementation Prompt

**Theme:** My Data
**Concept:** Disney Park Visit Mix
**Dataset:** `data/disney-park-visits.geojson` (118 individual GPS waypoints showing actual movement paths within Disney parks)

---

```
Project: 30-Day Map Challenge 2025 – Day 4 "My Data"
Theme: Personal dataset visualization

Context:
I collected my own Google Maps Timeline exports, filtered them to extract all GPS waypoints within Disney parks I've actually visited (currently Anaheim Disneyland parks), removed anything near my home/work locations, and created a point cloud showing my actual movement paths. The sanitized dataset is included with the project as `data/disney-park-visits.geojson`.

Dataset shape (FeatureCollection of 118 points):
Each point represents one GPS waypoint from my actual movement within the parks.

{
  "type": "FeatureCollection",
  "features": [
  {
    "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [ -117.9084221, 33.8075887 ]
      },
    "properties": {
        "id": 1,
        "park_id": "dlp-disneyland",
        "park_name": "Disneyland Park (Anaheim)",
        "visit_date": "2025-09-05",
        "start_time": "2025-09-05T17:53:00.000Z",
        "end_time": "2025-09-05T17:53:00.000Z",
        "duration_hours": 0,
        "place_name": null
      }
    },
    … 117 more waypoints …
  ],
  "meta": {
    "generated_at": "2025-11-05T20:53:34.906Z",
    "total_visits": 118,
    "unique_parks": 2,
    "park_summary": [
      {
        "park_id": "dlp-disneyland",
        "park_name": "Disneyland Park (Anaheim)",
        "visit_count": 109,
      "unique_visit_days": 4,
        "first_visit": "2025-09-02T19:21:00.000Z",
        "last_visit": "2025-09-05T17:53:00.000Z",
        "total_hours": 38.57
      },
      {
        "park_id": "dlp-california-adventure",
        "park_name": "Disney California Adventure",
        "visit_count": 9,
        "unique_visit_days": 3,
        "first_visit": "2025-09-02T22:17:00.000Z",
        "last_visit": "2025-09-04T23:00:00.000Z",
        "total_hours": 1.79
      }
    ]
  }
}

Goal:
Build a responsive web page that visualizes this GPS waypoint dataset as an interactive map showing my actual movement paths within Disney parks. Use point clustering or heatmap visualization to show density patterns, and display aggregated stats per park.

Must have:
1. Load the GeoJSON directly from `data/disney-park-visits.geojson` (no external APIs).
2. Map (Leaflet or MapLibre GL JS) centered on Disneyland with automatic bounds fitting to all waypoints.
3. Point visualization: Use clustering (e.g., Leaflet.markercluster) or heatmap (e.g., Leaflet.heat) to show density of waypoints. Individual waypoints should be visible when zoomed in.
4. Color-code points by park: Different colors for each park (use `properties.park_id` or `properties.park_name`).
5. Tooltip or popup per waypoint when clicked (showing individual waypoint info):
   - Park name (`park_name`)
   - Visit date (`visit_date`)
   - Time (`start_time` formatted nicely)
   - Place name (`place_name` if available)
6. Sidebar or header summary using `meta.park_summary`:
   - Total parks visited (`unique_parks`)
   - Total waypoints (`total_visits`)
   - Most-visited park (from `park_summary`, highest `visit_count`)
   - Total hours across all parks (sum of `total_hours` from `park_summary`)
   - Per-park breakdown: List each park with visit count, unique days, and total hours
7. "My Data, My Rules" style callout that states the data is personal GPS waypoints, filtered to remove home/work locations, showing actual movement paths within parks.
8. Clean mobile layout (sidebar should stack below the map; clustering/heatmap controls readable under 400 px width).
9. Friendly colour palette that feels on-theme for Disney (think soft blues/purples/golds) while keeping WCAG contrast for text.
10. Plain HTML/CSS/JS (no frameworks other than the mapping library). Keep the codebase simple because multiple AI platforms will iterate on it.

Nice to have (if time permits):
- Toggle between clustering view and individual points view.
- Toggle between color-by-park and color-by-density.
- Show time-based animation (play through waypoints chronologically).
- Highlight waypoints from most-visited park with special styling.

Deliverables:
- `index.html`, `style.css`, `script.js` (or a single HTML file with embedded CSS/JS).
- All assets self-contained so I can zip the folder and re-upload elsewhere.
- Include the GeoJSON file in the same folder as `data/disney-park-visits.geojson`.
- Tested in a modern desktop browser; ensure hover/tap interactions work.

Reminder:
Do not add any new external API calls or analytics. Everything must work completely offline with the bundled GeoJSON file. The GeoJSON file includes 118 individual GPS waypoints, so use clustering or heatmap visualization to handle the density effectively.
```
