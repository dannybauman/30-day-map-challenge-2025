# Implementation Prompt - Day 1: Points
**Copy/paste this prompt to all platforms**

---

PROJECT: #30DayMapChallenge 2025 - Day 1: POINTS

CONCEPT:
Create an interactive map showing all global earthquakes from the past 30 days. Each earthquake is displayed as a point sized by magnitude (larger = stronger earthquake) and colored by depth (darker = deeper underground). Include hover tooltips that show magnitude, location name, date/time, and depth. The map should reveal natural patterns like the Pacific "Ring of Fire."

REQUIREMENTS:

Visual:
- Interactive web-based map (flat or globe projection, your choice)
- Dark or light basemap that makes colored points stand out
- Modern, clean design with clear visual hierarchy
- Responsive layout (works on mobile and desktop)
- Points should be clearly visible and distinguishable
- Color gradient should be intuitive (e.g., red/orange for shallow, yellow for medium, blue for deep)

Data:
- Data source: USGS Earthquake API (free, no API key required)
- Endpoint: `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson`
- Format: GeoJSON (standard format, works with all mapping libraries)
- Fields to use:
  - `properties.mag` - magnitude (for point size)
  - `properties.depth` - depth in kilometers (for point color)
  - `properties.place` - location name (for tooltip)
  - `properties.time` - timestamp (for tooltip, convert to readable date)
  - `geometry.coordinates` - [longitude, latitude] array

Functionality:
- Zoom and pan controls
- Hover tooltips showing: magnitude, location name, date/time, depth
- Points sized proportionally by magnitude (use minimum and maximum sizes, e.g., 3px to 20px radius)
- Points colored by depth (use a color gradient, e.g., red/orange for shallow < 50km, yellow for medium 50-300km, blue for deep > 300km)
- Smooth interactions (no lag when hovering/zooming)
- Optional: Click to show more details in a popup

Technical:
- Single HTML file preferred (unless platform requires different structure)
- Use modern JavaScript (ES6+)
- Mapping library: Your choice (Leaflet, Mapbox GL JS, MapLibre GL JS, D3.js, or platform's preferred library)
- Fetch the GeoJSON from the USGS API endpoint
- Handle the data and render points efficiently
- Use CDN links for any external libraries
- No build step required - should run directly

SPECIFIC TO DAY 1 (POINTS THEME):
- Focus on interesting point symbolization (size + color encoding)
- Demonstrate density visualization (where earthquakes cluster)
- Show how point maps reveal geographic patterns
- Make it visually striking for social media sharing

SAMPLE DATA STRUCTURE:
The API returns standard GeoJSON format:
```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-122.4194, 37.7749]
      },
      "properties": {
        "mag": 4.5,
        "place": "10km SSE of San Francisco, CA",
        "time": 1699200000000,
        "depth": 8.5
      }
    }
  ]
}
```

DELIVERABLES:
- Fully functional interactive earthquake map
- Title: "Global Earthquakes - Last 30 Days"
- Attribution: "Data: USGS Earthquake Hazards Program"
- Legend showing magnitude scale (size) and depth scale (color)
- Brief description: "Earthquakes from the past month. Point size = magnitude. Color = depth."
- Clean, commented code
- Responsive and works in modern browsers

DESIGN INSPIRATION:
- Clean, scientific aesthetic (think weather maps or data journalism)
- Color gradient should be intuitive (hot colors for shallow, cool colors for deep)
- Points should be visible but not overwhelming
- Consider using a dark basemap to make colored points pop

IMPLEMENTATION NOTES:
- Make it visually striking - this will be shared on social media
- The "Ring of Fire" pattern should be clearly visible
- Prioritize working functionality over perfection
- Include USGS data source attribution
- Test that hover tooltips work smoothly
- Ensure points are sized/colored correctly based on data values
- Handle edge cases: some earthquakes may have null magnitude or depth

Ready? Create this earthquake visualization map!

