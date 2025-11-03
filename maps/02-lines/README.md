# Day 2: Lines - Street Orientation Rainbow

**Theme:** Lines - Map linear features
**Concept:** Street Orientation Rainbow - Portland, Oregon
**Date:** November 2, 2025
**Status:** In Progress

---

## Concept

Color-code every street in Portland by its compass bearing (0-360°) using a full HSL color wheel. Cardinal directions appear as distinct colors, creating a visual fingerprint of the city's urban form - revealing Portland's iconic grid system alongside its more organic neighborhoods.

**Visual Goal:** The full 360° hue spectrum makes the grid pattern immediately obvious. East-West and North-South streets appear as distinct color bands. The contrast between regular grid (east Portland) and curvy hills (west Portland) becomes visually striking.

---

## Why This Concept?

**Chosen from:** ChatGPT's "Street Orientation Rainbow" concept

**Reasons:**
- Outside-the-box + colorful visualization
- Tests geometry calculations (bearing from coordinates)
- OSM Overpass API (similar reliability to Day 1's USGS)
- Portland location: local relevance + interesting mix of grid + organic patterns
- Should work across most platforms (standard API + calculations)
- Visually striking for social media sharing

---

## Data Source

**OpenStreetMap via Overpass API**
- Free, no authentication required
- Endpoint: `https://overpass-api.de/api/interpreter`
- Portland bounding box: `45.43,-122.84,45.65,-122.47`
- Returns street geometries with highway type and names

---

## Implementation Details

**Key Technical Requirements:**
1. Fetch street data from Overpass API
2. Calculate bearing for each street segment
3. Convert bearing to HSL color (0-360° maps to color wheel)
4. Vary line thickness by road type
5. Optional: Show directional indicators on one-way streets

**Visual Encoding:**
- Color = Compass bearing (Red=North, Yellow=East, Cyan=South, Purple=West)
- Line thickness = Road importance (motorway > primary > residential)
- Optional animation = One-way streets

---

## Platform Results

[To be filled after testing]

---

## Key Learnings

[To be filled]

---

## Files

- `IMPLEMENTATION-PROMPT.md` - Full prompt used across all platforms
- `LAUNCH-TRACKER.md` - Real-time platform testing notes
- Platform subdirectories with code, screenshots, and notes

---

## Attribution

Data: © OpenStreetMap contributors
Concept: ChatGPT (GPT-5 Thinking)
Implementation: 11 AI development platforms (parallel testing)

