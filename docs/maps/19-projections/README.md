# Day 19: Projections

**Date:** November 19, 2025
**Theme:** Projections (Technical/GIS Day)
**Status:** ✅ Both concepts complete - Gemini 3 Pro success

---

## Theme

Focus on map projections—unusual projections, distortion visualization, projection comparison. Celebrate the technical side of cartography on GIS Day while keeping it visually engaging.

---

## Progress Tracker

**Phase 1: Ideation** ✅ Complete
**Phase 2: Implementation Prep** ✅ Complete
**Phase 3: Platform Launch** ✅ Complete (Gemini 3 Pro × 2 concepts)
**Phase 4: Review & Iterate** ✅ Complete (~8-13 prompts per concept)
**Phase 5: Human QA** ✅ Complete (verified both deployments)
**Phase 6: Documentation** ✅ Complete
**Phase 7: HTML Page** ⏳ Pending

---

## Concepts: Two Projection Visualizations

**Day 19 will include two complementary projection visualizations:**

### Concept 1: Shape Shifter - "The World is Not a Rectangle"

**Selected from:** Gemini 3 Concept 1 (Bold/Creative)

**What it shows:**
An animated world map that continuously morphs between radically different projections (Equirectangular → Heart/Bonne → Star/Berghaus → Butterfly/Waterman → Interrupted projections). The smooth morphing animation shows how continents bend, stretch, and reshape as projection mathematics transform the globe.

**Why this concept:**
- **Meaningful animation:** The morphing IS the math - visualizes the actual transformation process, not decoration
- **GIS Day message:** "The world is not a rectangle" challenges fundamental mapping assumptions
- **Gemini 3 strength alignment:** Leverages Day 18's proven success with timeline animations and smooth transitions
- **Visual storytelling:** Graticule bending makes invisible mathematics visible
- **Technical feasibility:** D3 projection interpolation, CDN data strategy, achievable in ~1 hour

**Key features:**
- Continuous morphing loop between 4-5 dramatic projections
- Both land masses AND graticule (grid lines bend with the transformation)
- Playback controls: Play/Pause, Speed (1x/2x/5x), Reset
- Projection labels showing current view
- Mobile responsive design
- Educational context about projection mathematics

**Data source:**
- CDN: `https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json` (TopoJSON)
- Graticule generated programmatically with D3

**Tech stack:**
- D3.js (d3-geo, d3-geo-projection)
- TopoJSON client
- Vanilla JavaScript
- SVG rendering

---

### Concept 2: Truth Teller - "Tissot's Lie Detector: Mercator vs The World"

**Selected from:** Gemini 3 Concept 2 (Grounded/Classic)

**What it shows:**
An interactive split-screen or toggle comparison between Mercator projection and an Equal Area projection (Equal Earth or Mollweide). Overlaid with Tissot's indicatrices - a grid of circles that reveal where maps distort area and shape. The circles stretch into massive ellipses on Mercator (especially at poles) but stay relatively circular on Equal Area projections.

**Why this concept:**
- **Meaningful animation:** "Breathing circles" - watching distorted ellipses deflate into proper circles as you transition from Mercator to Equal Area
- **Educational value:** Classic GIS Day lesson - makes invisible distortion visible
- **Clear message:** "Greenland looks the size of Africa on Mercator. It's not."
- **Complements Shape Shifter:** Shows distortion (this) vs shows transformation (Shape Shifter)
- **Flexible design:** Can add more projections later (Robinson, Winkel Tripel, etc.)

**Key features:**
- Side-by-side or toggle comparison: Mercator vs Equal Area
- Tissot circles overlay (red, translucent, evenly spaced grid)
- Smooth slider transition with "breathing circles" animation
- Educational messaging about map distortion
- Mobile responsive design

**Data source:**
- CDN: `https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json` (TopoJSON)
- Tissot circles generated programmatically with `d3.geoCircle()` (no data file needed)

**Tech stack:**
- D3.js (d3-geo - standard library sufficient)
- TopoJSON client
- Vanilla JavaScript
- SVG rendering

**Implementation approach:**
- Gemini 3 + Google AI Studio exclusively
- Conversational prompting
- Focus on smooth "breathing circles" animation as critical success factor
- Design flexible for adding more projections later
- Expected: 2-3 prompts to Grade A (Day 18 pattern)

---

## Files

**Required (per WORKFLOW.md):**
- ✅ `IDEATION-PROMPTS.md` - The prompts sent to AI platforms
- ✅ `IDEATION-RESPONSES.md` - Full responses from Claude, ChatGPT, Gemini 3
- ✅ `IMPLEMENTATION-PROMPT.md` - Prompt for Shape Shifter concept
- ✅ `IMPLEMENTATION-PROMPT-TISSOT.md` - Prompt for Truth Teller concept
- ✅ `LAUNCH-TRACKER.md` - Results for both Gemini 3 implementations
- ✅ `gemini3-shape-shifter/README.md` - Platform documentation
- ✅ `gemini3-tissot/README.md` - Platform documentation

---

## Implementation Summary

Both concepts successfully implemented with Gemini 3 Pro in Google AI Studio:

### Shape Shifter
- **URL:** https://shape-shifter-gis-day-903076358991.us-west1.run.app
- **Status:** ✅ Success (Grade A)
- **Prompts:** Working in 3, polished in ~10 more
- **Features:** Smooth morphing between 6+ projections with speed controls

### Tissot's Lie Detector
- **URL:** https://tissot-s-lie-detector-903076358991.us-west1.run.app
- **Status:** ✅ Success (Grade A)
- **Prompts:** Working in 3, expanded to 9 projections in ~10 more
- **Features:** Morph + side-by-side comparison modes

See `LAUNCH-TRACKER.md` for detailed results and observations.

---

**Last Updated:** November 19, 2025


