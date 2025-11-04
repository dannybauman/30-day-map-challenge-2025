# Day 2: Lines - Ideation Concepts

**Theme:** Map linear features (roads, rivers, migration paths, flow lines). Explore line thickness, color, and direction to convey information.

**Date:** November 2, 2025

---

## Concepts from Claude

### 🎨 CREATIVE/UNUSUAL: "The Geometry of Street Names"

**Description:** A map visualizing streets whose names contain directional words (North, South, East, West, Straight, Circle, etc.) with each line colored and styled based on how well the street's actual geometry matches its name. Does "Straight Street" actually run straight? Do "Circle" roads form circles?

**Data Source:**
- OpenStreetMap via Overpass API (free, no auth required)
- Query: `[out:json];area[name="Portland"]->.a;way(area.a)["highway"]["name"~"North|South|East|West|Straight|Circle|Round|Curve"];out geom;`
- Alternative: Use Overpass Turbo (overpass-turbo.eu) to export GeoJSON

**Difficulty:** Medium

**Cross-Platform Compatibility:**
- Uses standard GeoJSON format (universally supported)
- Relies on Leaflet.js or Mapbox GL JS (available via CDN on all platforms)
- No complex dependencies or build requirements
- Pure JavaScript calculations for geometry analysis
- All platforms handle fetch() and array manipulation identically

**Social Media Appeal:**
- Humorous/surprising results (ironically named streets)
- Color-coded visual makes it instantly understandable
- Local relevance - people love finding streets they know
- Creates engagement ("Check out my street!")
- Shareable insight: "Only 23% of 'Straight' streets are actually straight"

---

### 📍 STRAIGHTFORWARD/CLASSIC: "Major River Basins Flow Network"

**Description:** A clean, elegant visualization of the world's major rivers (Amazon, Nile, Mississippi, Yangtze, etc.) with line thickness proportional to discharge volume and color gradient representing elevation from source to mouth. Shows tributary networks branching into main channels.

**Data Source:**
- Natural Earth Data - Rivers + Lake Centerlines (free, public domain)
- Download: naturalearthdata.com/downloads/10m-physical-vectors/
- Direct link: `naturalearthdata.com/http//www.naturalearthdata.com/download/10m/physical/ne_10m_rivers_lake_centerlines.zip`
- Pre-converted to GeoJSON available at: geojson.xyz or convert using GDAL online tools

**Difficulty:** Easy

**Cross-Platform Compatibility:**
- Static GeoJSON file (can be embedded or fetched)
- Standard vector rendering using Leaflet/Mapbox
- Simple CSS-style properties for line width and color
- No external processing or APIs required
- Identical rendering across all platforms
- Fallback to embedded small GeoJSON if fetch fails

**Social Media Appeal:**
- Universally recognizable features (everyone knows these rivers)
- Beautiful, minimalist aesthetic
- Educational value (scale comparison between rivers)
- Works at any zoom level
- Classic cartographic style = timeless appeal
- Great for "which river is longest?" discussions

---

## Concepts from ChatGPT

### 🎨 CREATIVE/UNEXPECTED: "Street Orientation Rainbow"

**Description:** Turn a city's street network into a color wheel: each segment's hue encodes its compass bearing (0–360°), so cardinal directions pop as distinct colors. Optional tiny moving dashes travel along one-way streets to show directionality. It's a striking fingerprint of urban form and traffic rules.

**Data Source:**
- OpenStreetMap via Overpass API (live, free, no key)
- Example bbox query for streets:
  ```
  https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];(way["highway"]["highway"~"motorway|trunk|primary|secondary|tertiary|residential|unclassified|living_street|service"](bbox);>;);out body;
  ```
- Replace `(bbox)` with `south,west,north,east` (e.g., Portland): `45.43,-122.84,45.65,-122.47`

**Difficulty:** Easy–Medium (bearing math + styling)

**Time:** ~45–60 min

**Why it's good for testing AI coding platforms:**
- Tests fetching/parsing Overpass JSON → GeoJSON conversion
- Requires light geometry work (compute segment bearings from first/last coords)
- Compares how platforms scaffold a MapLibre GL or deck.gl PathLayer quickly
- Tests how well they handle color scales (HSL/HSV) and animation ticks

**Visual Appeal:**
- The full 360° hue ramp makes grids vs. organic networks instantly obvious
- Direction dashes on one-ways add motion without heavy WebGL
- Thick/thin lines can scale by highway class for extra hierarchy

**Implementation notes:**
- Use deck.gl PathLayer (super fast to wire on any platform)
- Compute bearing per small segment: `bearing = Math.atan2( dy, dx ) * 180/Math.PI` normalized to 0–360
- Color = `hsl(bearing, 90%, 55%)`
- For one-way roads, enable dashJustified/getDashArray with animation

---

### 📍 STRAIGHTFORWARD/CLASSIC: "City Rivers & Streams by Order"

**Description:** Render a single metro/country's waterways and vary stroke width/color by importance: rivers thick/dark, streams thin/light, intermittent channels dashed. The result is a clean hydrology portrait that reads at a glance.

**Data Source:**
- OpenStreetMap via Overpass API (live, free, no key)
- Query rivers/streams/canals within a bbox:
  ```
  https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];
  (way["waterway"~"river|stream|canal|drain|ditch"](bbox););
  out body;>;out skel qt;
  ```

**Difficulty:** Easy

**Time:** ~30–45 min

**Why it's good for testing AI coding platforms:**
- Simple ingestion/GeoJSON conversion + categorical styling based on OSM tags
- Quick check of platform ergonomics for line width scales, dashed patterns
- Tests responsive zoom-dependent styling
- Great baseline to compare build speed and preview/deploy loops

**Visual Appeal:**
- Classic monochrome or two-tone palette with hierarchy
- Dash patterns for intermittent waterways add subtle information density
- Zoom-dependent width makes the network feel alive

**Implementation notes:**
- Convert Overpass JSON → GeoJSON (osmtogeojson in-browser)
- Style by waterway type: river (3-5px), stream/ditch (1-2px), canal (2-4px)
- Use line-dasharray for intermittent waterways

---

## Concepts from Gemini

### 🎨 CREATIVE/ARTISTIC: "Global Connections: The Arteries of the Sky"

**Description:** An interactive 3D globe visualizing major global flight routes. Lines are rendered as great-circle arcs connecting city pairs. The map is visually striking, with arcs "glowing" against a dark globe, and allows users to hover over a connection to see the airline and route.

**Data Source:**
- OpenFlights.org
- Two files needed:
  1. `routes.dat`: CSV of flight routes linking source and destination airports by IDs
  2. `airports.dat`: CSV of airports (ID, name, latitude, longitude)

**Difficulty:** Medium

**Why it tests AI platforms well:**
- Tests data munging and transformation (joining two CSV files)
- Must match route's airport IDs to airport coordinates
- Output GeoJSON LineString collection
- Tests generation of specialized 3D visualization code (arcs)
- Goes beyond simple 2D maps

**Visual/Shareability Factor:**
- Very High
- 3D globes with glowing, arcing lines are visually impressive
- Highly shareable on social media
- Works well as video or interactive embed

---

### 📍 PRACTICAL/STRAIGHTFORWARD: "City in Motion: Visualizing Public Transit"

**Description:** A clean, interactive 2D map of a city's public transit system (e.g., San Francisco's BART). Each route is a distinct line, styled with its official color. Users can hover or click on a line or station to get its name and connecting routes.

**Data Source:**
- Static GTFS feed
- Example: SF BART GTFS feed: `https://www.bart.gov/dev/schedules/google_transit.zip`
- Zip contains multiple `.txt` files defining the system

**Difficulty:** Medium

**Why it tests AI platforms well:**
- Good test of handling complex, multi-file data schema
- Must understand GTFS (General Transit Feed Specification) schema
- Parse: `routes.txt` (route color/name), `trips.txt` (link routes to shapes), `shapes.txt` (line coordinates)
- Tests deep data processing and precise data-driven styling
- Use `route_color` column to color each line

**Visual/Shareability Factor:**
- High
- City-based data is highly relatable
- Clean, accurate transit map is both practical and visually pleasing
- People enjoy seeing their own city's "veins" mapped out

---

## Summary of All Concepts

| AI | Concept Type | Title | Difficulty | Data Source | Key Feature |
|---|---|---|---|---|---|
| Claude | Creative | The Geometry of Street Names | Medium | OSM Overpass API | Street names vs. actual geometry |
| Claude | Classic | Major River Basins Flow Network | Easy | Natural Earth Data | River hierarchy visualization |
| ChatGPT | Creative | Street Orientation Rainbow | Easy-Medium | OSM Overpass API | Compass bearing color wheel |
| ChatGPT | Classic | City Rivers & Streams by Order | Easy | OSM Overpass API | Waterway hierarchy |
| Gemini | Creative | Global Connections: Arteries of Sky | Medium | OpenFlights.org | 3D flight route arcs |
| Gemini | Classic | City in Motion: Public Transit | Medium | GTFS feed | Transit line visualization |

---

## Notes for Selection

**Easiest to implement:**
1. City Rivers & Streams (ChatGPT) - 30-45 min
2. Major River Basins (Claude) - Easy
3. Street Orientation Rainbow (ChatGPT) - 45-60 min

**Most visually striking:**
1. Global Connections 3D Globe (Gemini)
2. Street Orientation Rainbow (ChatGPT)
3. The Geometry of Street Names (Claude)

**Best for platform comparison:**
1. Street Orientation Rainbow - Tests geometry calculations, color scales, animation
2. Public Transit - Tests complex data parsing (GTFS)
3. The Geometry of Street Names - Tests geometry analysis

**Most reliable data sources:**
1. OSM Overpass API (used by 4 concepts)
2. Natural Earth Data (static files)
3. GTFS feeds (well-documented standard)

