# Day 19: Projections

**Date:** November 19, 2025
**Theme:** Projections (Technical/GIS Day)
**Status:** ⏳ Phase 1 - Ideation in progress

---

## Theme

Focus on map projections—unusual projections, distortion visualization, projection comparison. Celebrate the technical side of cartography on GIS Day while keeping it visually engaging.

---

## Progress Tracker

**Phase 1: Ideation** ✅ Complete
**Phase 2: Implementation Prep** ✅ Complete
**Phase 3: Platform Launch** ⏳ Pending
**Phase 4: Review & Iterate** ⏳ Pending
**Phase 5: Human QA** ⏳ Pending
**Phase 6: Documentation** ⏳ Pending
**Phase 7: HTML Page** ⏳ Pending

---

## Concept: Shape Shifter - "The World is Not a Rectangle"

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

**Implementation approach:**
- Gemini 3 + Google AI Studio exclusively (celebrating "most improved" platform)
- Conversational prompting (less prescriptive, leverage one-shot quality)
- Focus on smooth morphing animation as critical success factor
- Expected: 2-3 prompts to Grade A (Day 18 pattern)

---

## Files

**Required (per WORKFLOW.md):**
- ✅ `IDEATION-PROMPTS.md` - The prompts sent to AI platforms
- ⏳ `IDEATION-RESPONSES.md` - Full responses from Claude, ChatGPT, Gemini 3 (awaiting responses)
- ⏳ `IMPLEMENTATION-PROMPT.md` - The prompt for implementation (will create after concept selection)
- ⏳ `LAUNCH-TRACKER.md` - Platform results (will create after testing)

---

## Next Steps

1. Run the ideation prompt in Claude.ai, ChatGPT, and Gemini 3
2. Paste all responses into `IDEATION-RESPONSES.md`
3. Review and select the best concept
4. Create implementation prompt
5. Launch across platforms (including Gemini 3 as Tier 1!)
6. Review, iterate, and document

---

**Last Updated:** November 19, 2025


