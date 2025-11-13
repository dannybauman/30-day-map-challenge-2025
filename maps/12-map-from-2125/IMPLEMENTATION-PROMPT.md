# Day 12 Implementation Prompt

**Theme:** Map from 2125
**Concept:** Climate Migration Flows 2025-2125
**Datasets:** 
- `data/climate-migration-2125.geojson` (176 countries with population and habitability data)
- `data/migration-flows-2125.json` (15 migration flow pairs)

---

```
PROJECT: #30DayMapChallenge 2025 – Day 12: Map from 2125

CONCEPT:

Create "Climate Migration Flows 2025-2125," an interactive choropleth world map showing projected population migration patterns over the next century. The map visualizes which regions become uninhabitable due to climate change and where people will migrate, with animated flow lines showing major migration corridors. This is a speculative but data-driven vision of 2125.

REQUIREMENTS:

Visual:

- Interactive web-based world map with zoom/pan (use a global projection like Natural Earth or Winkel Tripel).

- Clean, modern styling that works on both desktop (wide layout) and mobile (single-column layout).

- Prominent title: "Climate Migration Flows 2025-2125" with subtitle explaining this is a speculative projection.

- Choropleth coloring: Countries colored by habitability index (0-100 scale):
  - Red/orange: Low habitability (vulnerable, 0-40)
  - Yellow: Moderate habitability (40-70)
  - Green/cyan: High habitability (refuge zones, 70-100)

- Animated flow lines: Draw curved lines (Bezier curves or great circle arcs) connecting source countries to destination countries, with animated particles flowing along the routes to show direction and intensity of migration.

- Timeline control: A slider or toggle to animate through time periods (2025 → 2125), showing how population and migration patterns change.

- Legend explaining:
  - Habitability color scale (red = vulnerable, green = refuge)
  - Flow line thickness/intensity represents migration volume
  - Animation direction (source → destination)

- Stats overlay: Display key statistics like "2.4 billion climate migrants by 2125" or total flow volumes.

Data:

- Two data files are provided:

  1. `data/climate-migration-2125.geojson` - GeoJSON FeatureCollection with 176 countries (~934 KB). Each feature has properties:
     ```json
     {
       "name": "Bangladesh",
       "iso_a3": "BGD",
       "region": "South Asia",
       "pop_2025": 175000000,
       "pop_2125": 180000000,
       "habitability_index": 25,
       "habitability_category": "vulnerable",
       "vulnerability_score": 0.85,
       "temperature_rise_2125": 3.5,
       "sea_level_rise_2125": 1.2
     }
     ```
     - `habitability_index`: 0-100 (higher = more habitable)
     - `habitability_category`: "uninhabitable", "vulnerable", "moderate", "refuge"
     - `pop_2025` and `pop_2125`: Population projections in millions
     - `vulnerability_score`: 0-1 (higher = more vulnerable)

  2. `data/migration-flows-2125.json` - Array of 15 migration flow objects (~3.3 KB, small):
     ```json
     {
       "source": "BGD",
       "destination": "IND",
       "source_name": "Bangladesh",
       "destination_name": "India",
       "flow_volume_2125": 50000000,
       "reason": "coastal_flooding",
       "region": "South Asia"
     }
     ```
     - `source` and `destination`: ISO A3 country codes
     - `flow_volume_2125`: Number of migrants (in millions)
     - `reason`: Migration driver ("coastal_flooding", "sea_level_rise", "extreme_heat", "water_stress", "climate_vulnerability")

- **Data loading strategy:**
  - **If file upload is available:** Upload `climate-migration-2125.geojson` as a file (some platforms support `.geojson`, others may need `.txt` version). The flows JSON is small enough to embed inline.
  - **If file upload is NOT available:** Embed the flows JSON inline (it's only 3.3 KB). For the large GeoJSON (~934 KB), you may need to:
    - Embed via `<script type="application/json">` tag (if platform supports it)
    - Or create mock/synthetic data with the same structure (acceptable fallback - the visualization structure is more important than exact data)
  - **DO NOT** try to fetch from remote URLs - all data must be embedded or uploaded as files.
  - **Note:** Some platforms struggle with very large inline data (>500 KB). If embedding the full GeoJSON causes issues, creating representative mock data with 20-30 key countries is acceptable as long as the visualization structure works correctly.

Functionality:

- Map interaction: zoom/pan, hover tooltips showing country name, population, habitability index, and vulnerability details.

- Click/tap on countries: Show detailed stats (population change 2025→2125, habitability category, climate projections).

- Flow line generation: For each flow in `migration-flows-2125.json`, draw a curved line connecting the source country centroid to the destination country centroid. Use Bezier curves or great circle arcs for visual appeal.

- Particle animation: Animate small particles (circles or dots) flowing along each route from source → destination. Animation speed should be proportional to flow volume (larger flows = faster particles or more particles).

- Timeline slider: Allow user to scrub through time (2025 → 2125) or toggle between two states. When animating:
  - Update population displays
  - Show/hide or adjust flow lines based on projected timeline
  - Update stats overlay

- Filter/highlight: Option to filter flows by reason (coastal flooding, extreme heat, etc.) or highlight top migration corridors.

- Include clear attribution for Natural Earth (base geography) and note that population/habitability data is speculative projections for 2125.

Technical:

- Deliver a single HTML file (can inline CSS/JS or link to bundled assets).

- Use modern JavaScript (ES6+). Mapping stack options:
  - Preferred: D3.js with `d3-geo` for projections and `d3-path` for flow lines
  - Acceptable: Leaflet.js with custom overlays for flow lines
  - Alternative: MapLibre GL JS if you prefer WebGL rendering

- No build steps—pure static assets. Use CDN-hosted libraries only.

- Avoid Mapbox (requires API keys). Use alternatives: OpenStreetMap (via Leaflet), MapLibre GL JS, CartoDB Positron/Dark Matter, or Stamen maps.

- Ensure mobile responsiveness (stack elements vertically, maintain readable labels, touch-friendly controls).

- Data loading: Use file upload if available, otherwise embed. The flows JSON (3.3 KB) should be easy to embed inline. The large GeoJSON (934 KB) may need file upload or can be mocked if embedding fails. DO NOT fetch from remote URLs.

- Animation performance: Use `requestAnimationFrame` for smooth particle animations. Provide a toggle to pause/disable animations if performance is an issue.

SPECIFIC TO THIS THEME:

- Emphasize the "2125" future vision from the moment the page loads—use futuristic but readable typography, consider a dark theme with neon accents for the flow lines.

- The animation is the core storytelling element: particles flowing along routes make abstract migration data tangible. Ensure the animation is smooth and clearly shows direction (source → destination).

- Include explanatory text (1-2 sentences) explaining that this is a speculative projection based on climate models and migration patterns, not a prediction.

- Provide fallback rendering: If particle animation is too complex, at minimum show static flow lines with arrows indicating direction.

SAMPLE DATA STRUCTURE:

GeoJSON (countries):
```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Bangladesh",
        "iso_a3": "BGD",
        "pop_2025": 175000000,
        "pop_2125": 180000000,
        "habitability_index": 25,
        "habitability_category": "vulnerable"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[...]]
      }
    }
  ]
}
```

Migration Flows JSON:
```json
[
  {
    "source": "BGD",
    "destination": "IND",
    "source_name": "Bangladesh",
    "destination_name": "India",
    "flow_volume_2125": 50000000,
    "reason": "coastal_flooding"
  }
]
```

DELIVERABLES:

- Fully functional interactive map with embedded data.

- Choropleth coloring by habitability index.

- Animated flow lines with particles showing migration routes.

- Timeline control (slider or toggle) for 2025→2125.

- Title, subtitle, explanatory text, legend, and stats overlay.

- Attribution footer citing Natural Earth and noting speculative nature of 2125 projections.

- Code comments for non-obvious logic (e.g., flow line curve generation, particle animation loop, timeline interpolation).

DESIGN INSPIRATION:

- Think "National Geographic meets sci-fi": Earth-tone base map with futuristic neon accents for flow lines.

- Dark ocean, softly glowing coastlines, bright flow lines in cyan/magenta/orange.

- Clean, readable typography with a hint of futuristic styling (but keep it accessible).

- Provide a hero view that would photograph well for social media: default view showing major migration corridors (e.g., Bangladesh → India, Sahel → Mediterranean).

IMPLEMENTATION NOTES:

- Flow line generation: Calculate country centroids from GeoJSON geometries, then draw curved paths. You can use:
  - Great circle arcs (shortest path on sphere)
  - Bezier curves for visual appeal
  - Adjust curve height based on distance (longer routes = higher arcs)

- Particle animation: Create a pool of particles for each flow line. Animate them along the path using parametric equations. Reset particles when they reach the destination.

- Timeline interpolation: When scrubbing the timeline, interpolate population values between 2025 and 2125, and show/hide flows based on projected timeline.

- Performance: For 15 flow lines, particle animation should be manageable. If performance is an issue, reduce particle count or provide a toggle to disable animation.

- Ensure tooltips are keyboard accessible (focusable triggers) and map controls remain usable on touch devices.

- Color accessibility: Ensure habitability color scale has sufficient contrast and is readable for colorblind users (consider adding patterns or icons in addition to color).
```

