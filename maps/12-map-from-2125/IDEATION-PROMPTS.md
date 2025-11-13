# Day 12: Map from 2125 - Ideation Prompt

**Date:** November 12, 2025
**Theme:** Map from 2125 - How will maps look 100 years from now? Create a future vision.

**Attribution:**
- **Human (Danny):** Set the creative direction, asked for the ideation prompt to explore speculative futuristic map concepts, and confirmed that all platforms must receive the exact same prompt for a fair comparison.
- **AI (Cursor):** Consolidated the workflow notes, formatted the unified prompt, and captured the documentation updates.

**Human Direction:**
- The concept should imagine what maps might look like in 2125, considering climate change, technological advances, space exploration, urbanization, or other future scenarios.
- Each AI should propose how to visualize a future world (sea level rise, Mars colonies, floating cities, climate-changed biomes, neural interfaces, etc.).
- Keep data lightweight and ready to embed so all coding platforms can load it without external APIs.
- Highlight why the concept feels futuristic and compelling while still being achievable in ~1 hour per platform.
- Can use speculative/projected data (climate models, population projections) or creative interpretations of current data to show future states.

---

## Unified Ideation Prompt

**Use this EXACT prompt for Claude, ChatGPT, and Gemini to ensure a fair comparison:**

```
Today's #30DayMapChallenge theme is: MAP FROM 2125

Theme description: How will maps look 100 years from now? Create a future vision of cartography, geography, or the world itself.

Context:
- We'll launch the winning concept across 8-12 AI coding platforms (ChatGPT Canvas, Claude Artifacts, Gemini Canvas, Bolt.new, Lovable, etc.), so it must be achievable in ~1 hour per platform with embedded static assets (GeoJSON/TopoJSON/CSV/JSON).
- External APIs, authentication, or complex 3D engines are off-limits—everything should ship inside the repo and stay under ~1 MB once prepared.
- The map should feel futuristic through either: (1) showing projected future states (sea level rise, climate zones, population shifts), (2) imagining new geographies (Mars colonies, floating cities, underwater settlements), or (3) reimagining how maps themselves work (neural interfaces, holographic projections, data layers we don't have today).
- Can use current data as a base and transform it to show future scenarios, or create speculative datasets that represent 2125.

Give me 2 map concepts:

- 1 bold/creative take that really leans into speculative future scenarios (Mars colonies, floating cities, climate-changed world, underwater settlements, space elevators, etc.)

- 1 grounded/classic approach that still showcases a clear future vision (sea level rise projections, climate zone shifts, projected urban growth, future transportation networks, etc.)

For each concept include:

1. What the map shows (1-2 sentences)

2. How it represents the year 2125 (what future scenario, technology, or change it visualizes)

3. Data source(s) with concrete download endpoints (free/public, embeddable) or how to create speculative data from current sources

4. Data prep steps (format conversions, simplification, projections, transformations) to keep the bundle ≤1 MB and friendly to multiple AI platforms

5. Suggested tech stack (libraries/frameworks) and visual style that makes it feel futuristic

6. Difficulty (Easy/Medium/Hard) and estimated build time

7. One visual storytelling hook that makes the end result compelling on social media while still feeling achievable in ~1 hour

Constraints:
- Embedded/static data only; no live API calls or auth keys
- Keep geometry counts manageable so mobile performance survives
- Must clearly signal the "2125" future theme to viewers
- Can use climate projections, population forecasts, or creative interpretations of current data

Format your response as a numbered list for easy scanning.
```

---

**Next Step:** Copy this exact prompt into Claude.ai, ChatGPT, and Gemini. Collect the full responses from all three platforms and paste them into `maps/12-map-from-2125/IDEATION-RESPONSES.md` before moving on to concept selection.

