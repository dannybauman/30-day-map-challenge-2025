# Day 2: Lines - Implementation Prompt

**Chosen Concept:** Street Orientation Rainbow
**Location:** Portland, Oregon
**Data Source:** OpenStreetMap via Overpass API
**Date:** November 2, 2025

---

## Implementation Prompt (Copy/Paste to All Platforms)

```
PROJECT: #30DayMapChallenge 2025 - Day 2: LINES

CONCEPT:
Create an interactive "Street Orientation Rainbow" map of Portland, Oregon. Color-code every street segment by its compass bearing (0-360°) using a full HSL color wheel, so cardinal directions appear as distinct colors. This creates a visual fingerprint of Portland's urban form - revealing the city's iconic grid system alongside its more organic neighborhoods. Optionally, show directional indicators (arrows or animated dashes) on one-way streets.

LOCATION:
Portland, Oregon bounding box:
- North: 45.65
- South: 45.43
- East: -122.47
- West: -122.84

REQUIREMENTS:

Visual:
- Interactive web-based map centered on Portland
- Each street segment colored by its compass bearing using HSL color scale:
  - 0° (North) = Red
  - 90° (East) = Yellow-Green
  - 180° (South) = Cyan
  - 270° (West) = Blue-Purple
  - Full 360° spectrum wraps around
- Line thickness can vary by road type (motorway > primary > residential)
- Dark basemap that makes the rainbow colors pop
- Modern, clean design
- Responsive layout (mobile-friendly)

Data:
- Data source: OpenStreetMap via Overpass API (free, no API key required)
- Endpoint: https://overpass-api.de/api/interpreter
- Query parameters for Portland streets:
  ```
  [out:json][timeout:25];
  (
    way["highway"]
      ["highway"~"motorway|trunk|primary|secondary|tertiary|residential|unclassified|living_street|service"]
      (45.43,-122.84,45.65,-122.47);
    >;
  );
  out body;
  ```
- This returns OSM JSON format with node coordinates
- Fields to use:
  - `elements[].type` - "way" for streets
  - `elements[].tags.highway` - road type for line thickness
  - `elements[].tags.oneway` - "yes" for one-way streets (optional directional indicators)
  - `elements[].tags.name` - street name for tooltips
  - Node coordinates need to be assembled into line geometries

Functionality:
- Calculate bearing/angle for each street segment from its coordinates
  - Formula: `bearing = Math.atan2(lon2-lon1, lat2-lat1) * (180/Math.PI)`
  - Normalize to 0-360 range
  - Convert bearing to HSL color: `hsl(bearing, 85%, 60%)`
- Zoom and pan controls
- Hover tooltips showing: street name, bearing/direction, road type
- Line thickness based on highway type:
  - motorway/trunk: 4-6px
  - primary/secondary: 3-4px
  - tertiary/residential: 2-3px
  - service/unclassified: 1-2px
- Optional: Directional arrows or animated dashes on one-way streets
- Smooth interactions

Technical:
- Single HTML file preferred (unless platform requires different structure)
- Use modern JavaScript (ES6+)
- Mapping library: Your choice (Leaflet, Mapbox GL JS, MapLibre GL JS, deck.gl, or platform's preferred library)
- Fetch from Overpass API OR embed pre-fetched data if CORS is an issue
- Convert OSM JSON to GeoJSON LineStrings with bearing calculations
- Use CDN links for any external libraries
- No build step required - should run directly

SPECIFIC TO DAY 2 (LINES THEME):
- Focus on line direction and orientation visualization
- Demonstrate how line color can encode directional information
- Show urban morphology patterns (grid vs. organic growth)
- Create visually striking rainbow effect for social media sharing
- Make the contrast between Portland's east-side grid and west-side hills visible

DELIVERABLES:
- Fully functional interactive street orientation map
- Title: "Street Orientation Rainbow: Portland, Oregon"
- Attribution: "Data: © OpenStreetMap contributors"
- Legend showing:
  - Color wheel with cardinal directions labeled (N=Red, E=Yellow, S=Cyan, W=Purple)
  - Line thickness scale by road type
- Brief description: "Portland's streets colored by compass bearing. Each color represents a different direction, revealing the city's grid patterns and organic growth."
- Clean, commented code
- Responsive design for mobile and desktop

VISUAL GOALS:
- The full 360° hue spectrum should make Portland's grid pattern immediately obvious
- East-West and North-South streets should appear as distinct color bands
- Diagonal streets should show as transitional hues
- The contrast between regular grid (east Portland) and curvy hills (west Portland) should be visually striking
```

---

## Notes

- Based on ChatGPT's "Street Orientation Rainbow" concept
- Portland bounding box chosen for local relevance and interesting mix of grid + organic street patterns
- OSM Overpass API similar to Day 1's USGS API (worked well across platforms)
- Geometry calculation (bearing) tests platform capabilities for data transformation
- Visual output should be immediately shareable and engaging

