# Day 3: Polygons - Ideation Prompt

**Date:** November 3, 2025  
**Theme:** Polygons - Area features (regions, land use, boundaries). Use fills, patterns, choropleths.

**Attribution:**
- **Human (Danny)**: Strategic direction, prompt constraints, emphasis on interesting polygon shapes vs administrative boundaries, **decision to use unified prompt across all platforms (ensures fair comparison)**, concept selection criteria
- **AI (Cursor)**: Crafted unified prompt template, formatted prompt, documentation structure

**Human Direction:** 
- Smaller embedded datasets (avoid external APIs)
- **CRITICAL: The polygons must have interesting, organic shapes themselves - NOT just rectangular administrative boundaries (states, countries, counties)**
- **CRITICAL: Prefer useful boundaries people haven't thought of before - novel, meaningful ways to divide space**
- Examples of interesting polygon types: topography/contour lines/elevation bands, water bodies (lakes, rivers), watershed boundaries, land use polygons, geological formations, protected areas, tree canopy coverage, urban heat islands, noise zones, accessibility zones, time zones (curved boundaries), etc.
- The Great Lakes example was good - the polygons (water bodies) have organic, interesting shapes themselves
- Think: What boundaries matter but aren't usually mapped? What polygons have naturally interesting shapes?
- Creative but natural concepts, optimal polygon count for zoom level
- Prioritize feasibility and visual appeal over performance challenges

---

## Unified Ideation Prompt

**Use this EXACT prompt for all three platforms (Claude, ChatGPT, Gemini) to ensure fair comparison:**

```
Today's #30DayMapChallenge theme is: POLYGONS

Theme description: Area features (regions, land use, boundaries). Use fills, patterns, choropleths.

Give me 2 map concepts for this theme:
- 1 creative/unusual approach
- 1 straightforward/classic approach

For each concept, include:
1. What the map shows (1-2 sentences)
2. Data source needed (prefer embedded/static GeoJSON/JSON files, avoid external APIs)
3. Difficulty level (Easy/Medium/Hard)
4. Estimated implementation time
5. One unique aspect that makes it interesting

IMPORTANT CONSTRAINTS:
- **CRITICAL: The polygons must have interesting, organic shapes themselves - NOT rectangular administrative boundaries like states/countries/counties**
- **CRITICAL: Prefer useful boundaries people haven't thought of before - novel, meaningful ways to divide space that aren't usually mapped**
- Examples of interesting polygon types: topography/contour lines/elevation bands (organic curves), water bodies (lakes, rivers - organic shapes), watershed boundaries (drainage basins), land use polygons, geological formations, protected areas, tree canopy coverage, urban heat islands, noise zones, accessibility zones, time zones (curved boundaries), etc.
- Think: What boundaries matter but aren't usually mapped? What polygons have naturally interesting, non-rectangular shapes?
- Use embedded/static datasets (GeoJSON, JSON files) rather than external APIs to avoid CORS issues
- Smaller dataset sizes preferred for better platform success rates
- Optimal polygon count for the zoom level (not too many, not too few - just right for visual clarity)
- Geographic scope should be optimized for the dataset (city, region, or country - whatever makes sense for the polygon density)
- Creative but natural concepts (not overly abstract)
- Must be achievable in ~1 hour across multiple AI platforms
- Should work well as web-based interactive map
- Visual appeal and shareability important

Consider:
- What can be realistically built in ~1 hour across multiple AI platforms
- Data availability (prefer free, accessible sources that can be embedded)
- Technical feasibility for web-based visualization
- Creativity within constraints

Format your response as a numbered list for easy scanning.
```

---

**Next Step:** Copy this EXACT prompt into Claude.ai, ChatGPT, and Gemini, review the 6 ideas (2 from each platform), then paste back all full responses to Cursor for logging and concept selection.
