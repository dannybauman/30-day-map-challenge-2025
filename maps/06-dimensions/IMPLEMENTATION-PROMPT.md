# Day 6 Implementation Prompt

**Theme:** Dimensions
**Concept:** 3D Population Peaks Hex Map
**Dataset:** `data/population_hex_peaks.geojson` (hexagonal polygons with population data)

---

```
PROJECT: #30DayMapChallenge 2025 – Day 6: Dimensions

CONCEPT:

Create "Population Peaks," a honeycomb surface where each hex column's height encodes the total population of nearby cities and the fill color conveys population density. The visualization should immediately read as a landscape of global population clusters, even when animations or 3D effects fall back to flat rendering.

REQUIREMENTS:

Visual:

- Interactive web-based map with zoom/pan.

- Clean, modern styling that works on both desktop (wide layout) and mobile (single-column layout).

- Prominent title, subtitle, and legend explaining height + color dimensions.

- Optional subtle animation (e.g., gentle rise on load or looping breathing effect) is encouraged but must degrade gracefully—static rendering still needs to look excellent.

Data:

- Embed a single GeoJSON file: `data/population_hex_peaks.geojson`.

- Each feature is a hexagonal polygon with properties:

  ```json
  {
    "hex_id": "string",
    "pop_sum": 12345678,
    "density": 123.4,
    "top_city": "Example Metro",
    "country": "Country Name"
  }
  ```

  - `pop_sum`: total population (sum of POP_MAX from contributing cities).

  - `density`: population per km² inside the hex (precalculated).

  - `top_city`: most populous contributing city (metadata for tooltips).

  - `country`: dominant country for labeling (optional, already embedded).

- Data size must remain ≤ 1 MB once embedded (expect ~500–1,000 hexes).

Functionality:

- Map interaction: zoom/pan, hover tooltips, and click summaries (mobile tap friendly).

- Legend showing how height and color encode variables (include numeric ranges).

- Provide a quick filter or toggle to highlight top peaks (e.g., top 10 hexes).

- If animation is implemented (e.g., columns gently pulsing), ensure a toggle to pause/disable it.

- Include clear attribution for Natural Earth populated places.

Technical:

- Deliver a single HTML file (can inline CSS/JS or link to bundled assets).

- Use modern JavaScript (ES6+). Mapping stack options:

  - Preferred: MapLibre GL JS with `fill-extrusion` (works across most platforms).

  - Acceptable fallback: Canvas/SVG (D3.js) rendering of hex polygons with faux extrusion shading.

- No build steps—pure static assets. Use CDN-hosted libraries only.

- Ensure mobile responsiveness (stack elements vertically, maintain readable labels).

- Test data loading synchronously (no fetch from remote URLs; embed via `<script type="application/json">` or inline JS constant).

SPECIFIC TO THIS THEME:

- Emphasize the third dimension from the moment the page loads—height and color should both reinforce the "Dimensions" brief.

- Include copy that explains what each dimension represents and why the map matters (1–2 sentences in an info panel).

- Provide a fallback rendering path for platforms that can't handle WebGL; even without height animation, the color ramp must still communicate population distribution.

SAMPLE DATA STRUCTURE:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-74.05, 40.70],
            [-73.95, 40.70],
            [-73.90, 40.78],
            [-73.95, 40.86],
            [-74.05, 40.86],
            [-74.10, 40.78],
            [-74.05, 40.70]
          ]
        ]
      },
      "properties": {
        "hex_id": "hex-001",
        "pop_sum": 18600000,
        "density": 1150.2,
        "top_city": "New York",
        "country": "United States"
      }
    }
  ]
}
```

DELIVERABLES:

- Fully functional interactive map with embedded data.

- Title, subtitle, explanatory text, and legend.

- Attribution footer citing Natural Earth (cities + boundaries) and any processing notes.

- Code comments for non-obvious logic (e.g., extrusion scaling, animation loop).

DESIGN INSPIRATION:

- Think "digital relief map": soft gradients, subtle shadowing, dark background optional but ensure accessibility (contrast AA).

- Provide a hero view that would photograph well for social media thumbnails (e.g., default camera angled to highlight multiple peaks).

IMPLEMENTATION NOTES:

- Keep extrusion scaling tunable via a single variable so tweaking height is easy.

- Provide toggle or fallback path if animation causes performance issues.

- Ensure tooltips are keyboard accessible (focusable triggers) and map controls remain usable on touch devices.
```
