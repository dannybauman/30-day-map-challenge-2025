# Day 6: Dimensions - Ideation Prompt

**Date:** November 6, 2025
**Theme:** Dimensions (3D visualization, height encoding)

**Attribution:**
- **Human (Danny):** Set the creative direction, asked for the ideation prompt, and confirmed that all platforms must receive the exact same prompt for a fair comparison.
- **AI (Cursor):** Consolidated the workflow notes, formatted the unified prompt, and captured the documentation updates.

**Human Direction:**
- The concept must involve 3D visualization with height encoding
- Each AI should propose how to use dimensions (height, depth, elevation) in the map concept
- Keep data lightweight and ready to embed so all coding platforms can load it without external APIs
- Highlight why the concept fits the "Dimensions" theme
- Must have graceful 2D fallback if 3D element fails
- Keep geometry counts manageable for mobile performance

---

## Unified Ideation Prompt

**Use this EXACT prompt for Claude, ChatGPT, and Gemini to ensure a fair comparison:**

```
Today's #30DayMapChallenge theme is: DIMENSIONS

Theme description: Beyond flat 2D—think vertical extrusions, stacked variables, animated time, or any map that makes a second or third dimension obvious.

Context:

- We'll launch the winning concept across 8-12 AI coding platforms (ChatGPT Canvas, Claude Artifacts, Gemini Canvas, Bolt.new, Lovable, etc.), so it must be achievable in ~1 hour per platform with embedded static assets (GeoJSON/TopoJSON/CSV/JSON).

- External APIs, authentication, or heavyweight 3D engines are off-limits—everything should ship inside the repo and stay under ~1 MB once prepared.

- Platforms struggle with expensive WebGL or real-time streaming, so each concept needs a graceful 2D fallback (heatmap, contours, sparkline, etc.) that still sells the "Dimensions" idea if the 3D element fails.

- We skipped Day 5 (Earth); keep documentation hooks generic so we can slot that day in later without reworking this plan.

Give me 2 map concepts:

- 1 bold/creative take that really leans into extra dimensions (height, time, multivariate layering, perspective shifts, etc.)

- 1 grounded/classic approach that still showcases at least one clear additional dimension (e.g., extruded choropleth, time-step storyboard, dual-axis comparison)

For each concept include:

1. What the map shows (1-2 sentences)

2. The extra dimension(s) you're emphasizing and how they will be visualized (extrusions, animation frames, side-by-side facets, stacked charts, etc.)

3. Data source(s) with concrete download endpoints (free/public, embeddable) and the exact files we should export

4. Data prep steps (format conversions, simplification, sampling, tiling) to keep the bundle ≤1 MB and friendly to multiple AI platforms

5. Suggested tech stack (libraries/frameworks) plus one lightweight fallback if the 3D/animation layer fails

6. Difficulty (Easy/Medium/Hard) and estimated build time

7. One visual storytelling hook that makes the end result compelling on social media while still feeling achievable in ~1 hour

Constraints:

- Embedded/static data only; no live API calls or auth keys

- Keep geometry counts manageable so mobile performance survives

- Prefer reusable global/regional datasets so Day 5 can reuse prep work if needed

- Format your response as a numbered list for easy scanning
```

---

**Next Step:** Copy this exact prompt into Claude.ai, ChatGPT, and Gemini. Collect the full responses from all three platforms and paste them into `maps/06-dimensions/IDEATION-RESPONSES.md` before moving on to concept selection.
