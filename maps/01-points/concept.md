# Day 1: Points - Chosen Concept

**Title:** Global Earthquakes - Last 30 Days

**Source:** Claude.ai

**Chosen Date:** [Fill in when selected]

---

## Concept Description

An interactive globe or flat map displaying all earthquakes from the past 30 days with points sized by magnitude and colored by depth. Includes hover tooltips showing magnitude, location, date, and depth with smooth zoom/pan controls.

## Why This Concept?

✅ **Reliable data source** - USGS API (free, no key, updates every 5 minutes)
✅ **Universal format** - GeoJSON works natively with all mapping libraries
✅ **Clear visualization** - Size by magnitude, color by depth = easy to understand
✅ **Good point density** - ~8,000-10,000 points tests performance without breaking
✅ **Cross-platform friendly** - No preprocessing, no complex data parsing
✅ **Visually compelling** - Natural "ring of fire" pattern, dramatic visualization
✅ **Educational** - Universal relevance increases shareability

## Data Source

**USGS Earthquake API**
- **Endpoint:** `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson`
- **Format:** GeoJSON (native)
- **No API key required**
- **Auto-updates every 5 minutes**
- **Fields:** magnitude (`properties.mag`), depth (`properties.depth`), location, time, coordinates

## Implementation Difficulty

**Easy** - Perfect for Day 1 multi-platform testing

## Testing Criteria

This concept will test each platform's ability to:
1. Fetch external GeoJSON API
2. Handle ~8-10k points efficiently
3. Size markers by data value (magnitude)
4. Color markers by data value (depth)
5. Create interactive tooltips/popups
6. Render clean, responsive map UI
