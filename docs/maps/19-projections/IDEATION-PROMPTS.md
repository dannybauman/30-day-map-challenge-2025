# Day 19: Projections - Ideation Prompt

**Date:** November 19, 2025
**Theme:** Projections (Technical/GIS Day)

**Attribution:**
- **Human (Danny):** Set the creative direction, confirmed that all platforms must receive the exact same prompt for a fair comparison, and emphasized focus on projection visualization techniques.
- **AI (Cursor):** Consolidated the workflow notes, formatted the unified prompt, and captured the documentation updates.

**Human Direction:**
- The concept must focus on map projections as the primary feature
- Can show projection comparison, distortion visualization, unusual projections
- Keep data simple (world boundaries, graticules) so the projection is the star
- Highlight why different projections matter and what they distort
- Should be visually compelling and educational
- Keep geometry manageable for web performance
- Consider that this is GIS Day - balance technical accuracy with accessibility

---

## Unified Ideation Prompt

**Use this EXACT prompt for Claude, ChatGPT, and Gemini 3 to ensure a fair comparison:**

```
Today's #30DayMapChallenge theme is: PROJECTIONS

Theme description: Focus on map projections. Unusual projections, highlight distortion. This is also GIS Day (November 19), so celebrate the technical side of cartography while keeping it visually engaging.

Context:
- We'll launch the winning concept across 8-12 AI coding platforms (ChatGPT Canvas, Claude Artifacts, Gemini Canvas, Bolt.new, Lovable, Gemini 3 + Google AI Studio, etc.), so it must be achievable in ~1 hour per platform with embedded static assets (GeoJSON/TopoJSON/SVG).
- External APIs or complex 3D engines are off-limits—everything should ship inside the repo and stay under ~1 MB once prepared.
- The projection itself should be the hero—show how different projections distort area, shape, distance, or direction. Make it educational but visually stunning.
- Can use simple world boundaries (Natural Earth 110m is perfect), focus computational effort on projection transformation and visualization.
- Interactivity is encouraged: toggle between projections, show distortion indicators, animate transitions.

Give me 2 map concepts:

- 1 bold/creative take that really showcases projection as art or exploration (unusual projections like Dymaxion, Waterman Butterfly, interrupted projections, or creative distortion visualization)

- 1 grounded/classic approach that educates about projection distortion (Tissot's indicatrix, side-by-side comparison, animation between common projections like Mercator → Robinson → Equal Earth)

For each concept include:

1. What the map shows (1-2 sentences)

2. How it showcases or educates about map projections (what projection technique, comparison, or distortion it highlights)

3. Data source(s) with concrete download endpoints (free/public, embeddable) - keep it simple! World boundaries at 110m resolution is perfect.

4. Data prep steps (format conversions, simplification) to keep the bundle ≤1 MB and friendly to multiple AI platforms

5. Suggested tech stack (libraries/frameworks) - D3.js with d3-geo is ideal for projection work

6. Difficulty (Easy/Medium/Hard) and estimated build time

7. One visual storytelling hook that makes the end result compelling for GIS Day while still feeling achievable in ~1 hour

Constraints:
- Embedded/static data only; no live API calls or auth keys
- Simple geometry (Natural Earth 110m world boundaries recommended)
- Must clearly demonstrate projection concepts (distortion, comparison, transformation)
- Keep file sizes manageable so mobile performance survives
- D3.js is preferred for projection transformations (d3-geo, d3-geo-projection)
- Should be educational but also visually beautiful
- Data prep must be scriptable/automated - no manual work

Format your response as a numbered list for easy scanning.
```

---

**Next Step:** Copy this exact prompt into Claude.ai, ChatGPT, and Gemini 3 (Google AI Studio or Gemini chat). Collect the full responses from all three platforms and paste them into `maps/19-projections/IDEATION-RESPONSES.md` before moving on to concept selection.


