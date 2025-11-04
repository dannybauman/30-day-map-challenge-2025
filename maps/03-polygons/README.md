# Day 3: Polygons - Airport Noise Footprint (PDX)

**Theme:** Polygons - Area features (regions, land use, boundaries)  
**Concept:** Airport Noise Footprint (PDX) - PDX Airport Noise Contours  
**Date:** November 3, 2025  
**Status:** 🔄 In Progress

---

## Concept

Visualize the Day-Night Average Sound Level (DNL) noise contours around Portland International Airport (PDX). Show the organic, lobed "petals" of noise exposure zones (typically 55/65/68 dB DNL bands) that extend outward from the airport along flight paths. Each contour band should be filled with a subtle pattern or color gradient, with opacity/transparency so overlapping zones create visual depth.

**Visual Goal:** Reveal a boundary that directly impacts quality of life but is rarely visualized - the actual noise footprint affecting nearby communities. The organic, lobed shapes should immediately show flight path influence (not uniform circles). Different DNL bands should be visually distinct but harmonious.

---

## Why This Concept?

**Chosen from:** ChatGPT's "Airport Noise Footprint (PDX)" concept (Round 2 ideation)

**Reasons:**
- Organic, lobed polygon shapes (not rectangular administrative boundaries)
- Novel boundary concept - noise exposure zones are rarely visualized
- Small dataset (3-6 polygons) should work well across all platforms
- PDX location chosen for local relevance (Portland area)
- Tests platform GIS data handling capabilities (LineString→Polygon conversion)
- Practical utility: reveals an invisible but important boundary affecting quality of life

**Human Feedback:**
- "Nice. The airport noise footprint of PDX Airport is a good idea. It seems cool. It seems visual. It seems useful and doable. So I'm liking that."

---

## Data Source

**Primary:** Big Ten Academic Alliance Geoportal  
**URL:** https://geo.btaa.org/catalog/e6b6fe6c6a6840a096f89f6be703dc64_144  
**Dataset:** "Airport Noise DNLS 65 and 68 [Oregon--Portland]"

**Raw Data:** `data/pdx_noise_raw.geojson` (50 KB, 6 LineString features)
- 68 DNL: 2 LineString features
- 65 DNL: 3 LineString features  
- 55 DNL: 1 LineString feature

**Processing Needed:**
- Convert LineStrings to Polygons (close the loops)
- Group by DNL_CONTOUR value
- Simplify polygons
- Standardize attributes (`dnl`, `level`)

**Data Handling Test:** This prompt tests whether platforms can download and process GIS data themselves, or if pre-processed data is needed.

---

## Implementation Details

**Key Technical Requirements:**
1. Download/process noise contour data (or use synthetic if unavailable)
2. Convert LineStrings to Polygons if needed
3. Fill each contour with pattern/color based on DNL level
4. Use transparency/opacity for overlapping zones
5. Add hover tooltips with DNL levels
6. Create legend showing dB levels and fill patterns

**Visual Encoding:**
- Fill pattern/color = DNL level (55/65/68 dB)
- Transparency = Visual depth (overlapping zones)
- Outline = Contour boundary

---

## Platform Results

**Total Platforms Tested:** 4/10 (In Progress)

### ⚠️ Partial Success (4 platforms)

#### ChatGPT Canvas (Grade C/C+)
- **Status:** ⚠️ Partial Success (Eventual Success with Mock Data)
- **Data Handling:** ⚠️ Did NOT attempt real data download/processing - chose mock data instead
- **Issues:** Multiple "Fix Bug" iterations required, intermittent error screen
- **Result:** Map works with synthetic contours, but did not test GIS data handling
- **Live URL:** https://chatgpt.com/canvas/shared/69097755f178819197f69e04646c287c
- **See:** `chatgpt-canvas/README.md` for full details

#### Claude Artifacts (Grade D)
- **Status:** ⚠️ Partial Success (CSP/CORS - same as Day 1 & Day 2)
- **Issue:** Cannot load external libraries (Leaflet, Mapbox GL JS)
- **Attempts:** 
  1. Leaflet → `Uncaught ReferenceError: L is not defined`
  2. Leaflet fix attempt → Same error
  3. Mapbox GL JS → `Uncaught ReferenceError: mapboxgl is not defined`
- **Result:** UI/legends generated but no map renders
- **Pattern:** Consistent limitation across Day 1, Day 2, Day 3
- **User Observation:** "funny thing is, that's probably good to have more locked down security and permissions, who knows"
- **Live URL:** https://claude.ai/public/artifacts/32b539ac-e024-47cd-9b8d-1b3be4f8c0eb
- **Data Handling:** Could not test (blocked before data processing)

**See:** `claude-artifacts/README.md` for full details

#### Gemini Canvas (Grade D)
- **Status:** ⚠️ Partial Success (same as Day 1 & Day 2)
- **Issue:** UI generated but data visualization didn't work, map tiles missing
- **Attempts:**
  1. Initial: UI OK, but data visualization failed, map tiles missing
  2. User feedback → Platform fix attempt → Still missing tiles, visualization not working
  3. User feedback → User fix attempt → Map doesn't show at all (regression)
- **Result:** Map disappeared entirely after fixes (worse than initial)
- **Pattern:** Consistent limitation across Day 1, Day 2, Day 3 - UI works, map/data rendering fails
- **Live URL:** https://gemini.google.com/share/908ebfdc84ed
- **Data Handling:** Could not test (visualization failed before data could be verified)
- **See:** `gemini-canvas/README.md` for full details

#### Lovable (Grade D)
- **Status:** ⚠️ Partial Success (Mapbox API key requirement)
- **Issue:** UI generated but Mapbox API key required, token validation failed
- **Attempts:**
  1. Initial: UI generated, Mapbox token dialog appeared
  2. User provided API key → Map didn't show
  3. Platform attempted automatic fix → Better error message about token
  4. User gave up after token validation error
- **Result:** UI visible but map blocked by Mapbox API key requirement
- **Key Learning:** Mapbox requires API keys (may need paid account), creates barrier for testing - **avoid Mapbox in future prompts**
- **Live URL:** https://pdx-noise-petals.lovable.app
- **Data Handling:** Could not test (blocked by Mapbox API key requirement)
- **See:** `lovable/README.md` for full details

---

## Key Observations (In Progress)

### What We're Learning

**Claude Artifacts Consistency:**
- Day 1, Day 2, Day 3 all show identical CSP/CORS limitation
- External library loading blocked by sandbox restrictions
- UI/legends generate successfully (shows AI capability)
- Map rendering requires external libraries, which are blocked

**Data Handling Test Results:**

**Claude Artifacts:**
- Blocked before data processing could occur
- External library loading fails first, preventing map initialization
- Would need pre-processed embedded data to test data handling capabilities

**ChatGPT Canvas:**
- ⚠️ **Did NOT attempt real data download/processing**
- Platform chose mock/synthetic data instead of downloading from provided URLs
- Said it would do mock data first, then user could provide real GeoJSON
- This reveals platform preference for easier path (synthetic) over testing GIS data handling

**Gemini Canvas:**
- Could not test data handling (visualization failed before data could be verified)
- UI generated but data visualization never worked
- Map tiles missing (CSP/CORS or network restrictions)
- Attempts to fix resulted in regression (map disappeared entirely)
- Consistent pattern: Day 1, Day 2, Day 3 all show same issues - UI works, map/data rendering fails

**Lovable:**
- Could not test data handling (blocked by Mapbox API key requirement)
- UI generated successfully with legend and data attribution
- **Key Learning:** Mapbox requires API keys (may need paid account for production), creates barrier for testing
- **Recommendation:** Avoid Mapbox in future prompts, use alternative basemaps (OpenStreetMap, MapLibre, etc.)
- Automatic fix feature worked to improve error messages

---

## Human Interventions & Decisions

**Key Human Decisions:**
1. **Data handling test approach**: Decided to provide data source URLs instead of pre-processed data to test platform capabilities (see `IMPLEMENTATION-PROMPT.md`)
2. **Claude Artifacts testing**: Provided feedback during testing, recognizing security/permissions aspect as potentially positive
3. **Gemini Canvas testing**: Provided feedback on data visualization and map tile issues, attempted additional fixes
4. **Lovable testing**: Provided Mapbox API key but gave up after token validation error, noted learning to avoid Mapbox in future prompts

**Human Feedback During Testing:**
- **Claude Artifacts:** Asked about alternative approaches when first error occurred, provided feedback on second attempt, made observation about security/permissions being potentially positive
- **ChatGPT Canvas:** Provided feedback on mock data usage and intermittent errors
- **Gemini Canvas:** Reported "the data visualization didn't work, and some of the map tiles are missing", then "basically same problems, not fixed. just shows a different base map, still missing tiles, not sure about the visualization", attempted one more fix which resulted in regression (map disappeared)
- **Lovable:** Reported "after pasting the mapbox api key, the dialog disappeared but the map didn't show", clicked automatic fix button, then gave up after token validation error: "I thought [token] is valid but I'm not paying, not sure, so i gave up. in the future maybe no mapbox?"

---

## Next Steps

**Remaining Platforms to Test (6/10):**
1. Bolt.new
2. MagicPatterns
3. Google AI Studio Apps
4. V0.dev
5. Firebase Studio
6. Base44

**Completed (4/10):**
- ✅ Claude Artifacts (Grade D - CSP/CORS)
- ✅ ChatGPT Canvas (Grade C/C+ - mock data)
- ✅ Gemini Canvas (Grade D - UI OK, map/data rendering failed)
- ✅ Lovable (Grade D - Mapbox API key requirement)

**Tasks:**
1. Continue testing remaining 6 platforms
2. Observe which platforms can handle GIS data processing (LineString→Polygon conversion)
3. Document data handling approaches (download vs. synthetic vs. embedded)
4. Capture screenshots for all platforms
5. Create HTML showcase page following Day 1/Day 2 format

**Implementation Prompt:** Ready in `IMPLEMENTATION-PROMPT.md` (copy/paste to each platform)

---

## Attribution

**Human (Danny):**
- Strategic direction and constraints for ideation (organic shapes, novel boundaries)
- Decision to use unified prompt across all 3 platforms (ensures fair comparison)
- Selected Airport Noise Footprint concept from Round 2 ideation
- Provided feedback during platform testing (Claude Artifacts, ChatGPT Canvas)
- Decided to test platform capabilities by providing data source URLs instead of pre-processed data
- Captured screenshots and documented all results

**AI (Claude, ChatGPT, Gemini):**
- Generated all concept ideas using unified prompt (Round 1: 6 ideas, Round 2: 6 ideas after human redirection)

**AI (ChatGPT Canvas, Claude Artifacts, Gemini Canvas):**
- Generated code and UI implementations
- ChatGPT Canvas: Created mock data implementation (did not attempt real data download)
- Claude Artifacts: Generated UI/legends (blocked by CSP/CORS from rendering map)
- Gemini Canvas: Generated UI but map/data rendering failed (consistent with Day 1 & Day 2)
- Lovable: Generated UI successfully but map blocked by Mapbox API key requirement

**AI (Cursor):**
- Logged ideation responses and organized content
- Crafted implementation prompt based on chosen concept
- Documented platform results and analysis

---

## Documentation

- `IDEATION-PROMPTS.md` - Unified ideation prompt used across all 3 platforms
- `IDEATION-RESPONSES.md` - Full responses from Claude, ChatGPT, Gemini (Round 1 & Round 2)
- `IMPLEMENTATION-PROMPT.md` - Full implementation prompt with data source URLs
- `LAUNCH-TRACKER.md` - Real-time platform testing notes
- `data/DATA-PREPARATION.md` - Data source and processing details
- `claude-artifacts/README.md` - Claude Artifacts specific notes
- `chatgpt-canvas/README.md` - ChatGPT Canvas specific notes
- `gemini-canvas/README.md` - Gemini Canvas specific notes
- `lovable/README.md` - Lovable specific notes

---

**Last Updated:** November 3, 2025  
**Status:** Testing in progress (4/10 platforms completed)

