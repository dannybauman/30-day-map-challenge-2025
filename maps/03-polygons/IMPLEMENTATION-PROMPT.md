# Day 3: Polygons - Implementation Prompt

**Chosen Concept:** Airport Noise Footprint (PDX)  
**Location:** Portland International Airport (PDX), Oregon  
**Data Source:** PDX Part 150 Noise Exposure Map contours (embedded GeoJSON)  
**Date:** November 3, 2025

**Attribution:**
- **Human (Danny)**: Selected Airport Noise Footprint concept from Round 2 ideation, provided feedback: "Nice. The airport noise footprint of PDX Airport is a good idea. It seems cool. It seems visual. It seems useful and doable. So I'm liking that." **Decided to test platform capabilities by providing data source URLs instead of pre-processed data** (see Notes section for lesson learned)
- **AI (ChatGPT)**: Generated the Airport Noise Footprint concept in Round 2 ideation
- **AI (Cursor)**: Crafted implementation prompt based on chosen concept

---

## Implementation Prompt (Copy/Paste to All Platforms)

```
PROJECT: #30DayMapChallenge 2025 - Day 3: POLYGONS

CONCEPT:
Create an interactive map visualizing the Day-Night Average Sound Level (DNL) noise contours around Portland International Airport (PDX). Show the organic, lobed "petals" of noise exposure zones (typically 60/65/70 dB DNL bands) that extend outward from the airport along flight paths. Each contour band should be filled with a subtle pattern or color gradient, with opacity/transparency so overlapping zones create visual depth. This reveals a boundary that directly impacts quality of life but is rarely visualized - the actual noise footprint affecting nearby communities.

LOCATION:
Portland International Airport (PDX), Oregon
- Center: 45.5898° N, -122.5951° W
- Extent: ~10-15 km radius around PDX
- Focus area: Metro Portland region showing noise impact zones

REQUIREMENTS:

Visual:
- Interactive web-based map centered on PDX
- Each noise contour polygon (typically 55/65/68 dB DNL bands) filled with:
  - Distinct pattern or color (e.g., striped pattern, gradient fill, or subtle color ramp)
  - Semi-transparent fill (opacity 0.3-0.6) so overlapping zones blend visually
  - Thin outline/border for each contour band
- Basemap: Light or neutral style that makes the noise contours stand out
- Modern, clean design
- Responsive layout (mobile-friendly)
- Title: "PDX Airport Noise Footprint"
- Legend showing dB levels and corresponding fill patterns/colors

Data:
- **Data source options** (try these in order):
  
  1. **Primary: Big Ten Academic Alliance Geoportal**
     - URL: https://geo.btaa.org/catalog/e6b6fe6c6a6840a096f89f6be703dc64_144
     - Dataset: "Airport Noise DNLS 65 and 68 [Oregon--Portland]"
     - Contains: 65 and 68 DNL contours
     - Format: Likely shapefile or GeoJSON
     - Download and convert/process as needed
  
  2. **Alternative: City of Portland**
     - URL: https://www.portland.gov/ppd/documents/zoning-code-information-guide-portland-international-airport-noise-impact-overlay/download
     - May have PDF maps or GIS data
     - Contains: 55, 65, 68 DNL contours
  
  3. **Fallback: Create synthetic representative data**
     - If real data sources are unavailable or inaccessible
     - Create 3-4 organic, lobed polygons extending from PDX in different directions (representing flight paths)
     - Make shapes organic and irregular (not perfect circles)
     - Assign DNL values: 68 dB (inner/closest), 65 dB (middle), 55 dB (outer, if needed)
     - Center polygons at PDX: 45.5898° N, -122.5951° W
     - Extend ~10-15 km radius from airport

- **Data processing requirements:**
  - If downloading shapefile: Convert to GeoJSON
  - Clip to ~10-15 km around PDX center
  - Simplify polygons (reduce complexity while preserving organic shapes)
  - Ensure each feature has:
    - `properties.dnl`: Noise level in dB (e.g., 55, 65, 68)
    - `properties.level`: Human-readable label (e.g., "65 dB DNL")
  - Target file size: < 100 KB (keep simplified)
  - Final format: GeoJSON FeatureCollection, embedded in HTML or as separate file

- **Data structure** (target format):
```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "dnl": 65,
        "level": "65 dB DNL"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-122.5951, 45.5898],
          [-122.5800, 45.6000],
          ...
        ]]
      }
    }
  ]
}
```

- **Note**: If you can download and process the real data, use it! Otherwise, create synthetic data that looks realistic (organic lobed shapes, not perfect circles).

Functionality:
- Zoom and pan controls
- Hover tooltips showing: DNL level, description of noise impact
- Click on polygon to highlight or show details
- Smooth interactions
- Optional: Toggle visibility of different DNL bands
- Optional: Show airport location marker

Technical:
- Single HTML file preferred (unless platform requires different structure)
- Use modern JavaScript (ES6+)
- Mapping library: Your choice (Leaflet, MapLibre GL JS, MapLibre GL JS, or platform's preferred library)
- Embed GeoJSON data directly in HTML (as JS variable) OR load from separate file
- Pattern fills: Use SVG patterns, CSS fills, or library-specific pattern support
- No build step required - should run directly
- Use CDN links for any external libraries

SPECIFIC TO DAY 3 (POLYGONS THEME):
- Focus on polygon fills, patterns, and choropleth techniques
- Demonstrate how fill patterns/colors can encode information (noise levels)
- Show organic, non-rectangular polygon shapes (not administrative boundaries)
- Create visually striking visualization of an invisible boundary (noise impact)
- The lobed, organic shapes should reveal flight path influence patterns
- Make the contrast between different noise levels visually clear

DELIVERABLES:
- Fully functional interactive noise contour map
- Title: "PDX Airport Noise Footprint"
- Attribution: "Data: PDX Part 150 Noise Exposure Map" (or "Representative noise contours" if synthetic)
- Legend showing:
  - DNL levels (60/65/70 dB) with corresponding fill patterns/colors
  - Brief explanation: "Day-Night Average Sound Level (DNL) contours show noise exposure zones"
- Brief description: "Noise impact zones around Portland International Airport. Each contour represents a different DNL level, revealing how flight paths affect nearby communities."
- Clean, commented code
- Responsive design for mobile and desktop

VISUAL GOALS:
- The organic, lobed shapes should immediately show flight path influence (not uniform circles)
- Different DNL bands should be visually distinct but harmonious
- Overlapping zones should create depth through transparency
- The map should reveal an invisible but important boundary that affects quality of life
- Overall aesthetic should be clean and professional, suitable for social media sharing

DATA PREPARATION NOTES:
- **Try real data first**: Download from BTAA Geoportal or City of Portland sources listed above
- **If real data available**: Download shapefile/GeoJSON, clip to ~10-15 km around PDX, simplify, ensure DNL attributes are correct
- **If real data unavailable**: Create synthetic representative polygons (organic lobed shapes, not perfect circles)
- **Simplification**: Reduce polygon complexity while preserving organic shape (use mapshaper, QGIS, or online tools if needed)
- **Final GeoJSON**: Should be < 100 KB, embedded in HTML or loaded as separate file
- **Platform capability test**: This prompt tests whether platforms can download and process GIS data themselves, or if pre-processed data is needed
```

---

## Notes

- Based on ChatGPT's "Airport Noise Footprint (PDX)" concept from Round 2 ideation
- Chosen for its organic, lobed polygon shapes (not rectangular administrative boundaries)
- Novel boundary concept - noise exposure zones are rarely visualized
- Small dataset (3-6 polygons) should work well across all platforms
- PDX location chosen for local relevance (Portland area)
- Emphasis on embedded GeoJSON data (no external API calls) for better platform compatibility
- Visual appeal: The organic "petal" shapes extending from the airport along flight paths should be visually striking

---

## Data Status

**Raw data downloaded:** `maps/03-polygons/data/pdx_noise_raw.geojson` (50 KB)  
**Source:** BTAA Geoportal (https://geo.btaa.org/catalog/e6b6fe6c6a6840a096f89f6be703dc64_144)  
**Current format:** 6 LineString features (DNL contours: 55, 65, 68)  
**Processing needed:** Convert LineStrings to Polygons, simplify, standardize attributes  
**See:** `data/DATA-PREPARATION.md` for details

**Note:** The prompt tests whether platforms can process this raw data. If platforms struggle with LineString→Polygon conversion, we can provide pre-processed data as fallback.

---

## Lesson: Testing Platform Data Handling Capabilities

**Approach:** Instead of pre-processing the data ourselves, we're providing data source URLs and letting the platforms handle downloading and processing the GIS data themselves.

**Rationale:**
- Tests whether AI platforms can download and process shapefiles/GeoJSON from external sources
- Tests their ability to convert formats, clip, simplify, and process GIS data
- Reveals platform capabilities and limitations for GIS data workflows
- If platforms struggle, we can fall back to providing pre-processed data or synthetic data

**What to observe:**
- Which platforms successfully download and process the data?
- Which platforms create synthetic data instead?
- Which platforms ask for clarification or fail?
- How do results compare between platforms that use real vs. synthetic data?

**If platforms fail:** We can provide pre-processed GeoJSON in a future iteration, but this test reveals valuable information about platform GIS capabilities.

---

## Lesson: Avoid Mapbox for Rapid Testing

**Issue:** Lovable (Day 3) required Mapbox API key, which blocked testing. User's token may have been invalid or required paid account.

**Recommendation:**
- **Avoid Mapbox** in future implementation prompts
- **Use alternative basemaps** that don't require API keys:
  - OpenStreetMap (via Leaflet, MapLibre GL JS)
  - MapLibre GL JS (open source, no API key required)
  - CartoDB Positron / Dark Matter (free, no API key)
  - Stamen maps (free, no API key)
- **If Mapbox is needed:** Specify in prompt that platform should use free alternatives to avoid API key barriers

**Why this matters:**
- Mapbox API keys create barriers for rapid testing
- Free tokens may not work for production use
- Alternative basemaps work just as well for most mapping projects
- Keeps testing workflow smooth and unblocked

---

## Data Sources to Check

1. **FAA Part 150 Noise Exposure Maps**: https://www.faa.gov/airports/environmental/airport_noise/noise_exposure_maps/
2. **Portland Metro RLIS**: Regional Land Information System may have noise contour data
3. **Port of Portland**: PDX airport authority may publish noise contour data

**If data not available**: Create synthetic representative noise contours as described in prompt (3-4 organic, lobed polygons extending from PDX).

