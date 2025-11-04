# Day 3: Polygons - Launch Tracker

**Concept:** Airport Noise Footprint (PDX) - PDX Airport Noise Contours  
**Start Time:** November 3, 2025  
**Theme:** Polygons - Area features (regions, land use, boundaries). Use fills, patterns, choropleths.

---

## Platform Launch Status

### Claude Artifacts

#### ⚠️ Claude Artifacts
- **Launch Time:** November 3, 2025
- **Status:** ⚠️ Partial Success (CSP/CORS - same as Day 1 & Day 2)
- **Notes:** 
  - Same issue as Day 1 and Day 2 - cannot load external libraries (Leaflet, Mapbox GL JS)
  - Tried 3 different approaches:
    1. Initial attempt with Leaflet → `Uncaught ReferenceError: L is not defined`
    2. **Human intervention:** User asked "as usual, getting this error when trying to access external data sources, is there a way that works? or a different data source?" → Claude tried fix → same Leaflet error
    3. **Human intervention:** User noted "still didn't work, no map, got this error" → Claude tried Mapbox GL JS instead → `Uncaught ReferenceError: mapboxgl is not defined`
  - Generated UI/legends but no map renders
  - Platform limitation (sandbox restrictions), not code quality issue
  - **Human observation:** User noted: "sorry claude, your artifacts and external data is having trouble. funny thing is, that's probably good to have more locked down security and permissions, who knows" - recognized potential positive aspect of security restrictions
  - **Consistent pattern**: Day 1, Day 2, Day 3 all show same CSP/CORS limitation
- **Screenshot:** ✅ screenshot.png (desktop), screenshot-mobile.png (mobile) - Shows UI/legends but no map (empty map area)
- **Mobile Check:** N/A (no map loads)
- **Live URL:** https://claude.ai/public/artifacts/32b539ac-e024-47cd-9b8d-1b3be4f8c0eb
- **Grade:** D (Partial Success - UI generated but map blocked by sandbox)

#### ⚠️ ChatGPT Canvas (GPT-5 Thinking)
- **Launch Time:** November 3, 2025
- **Status:** ⚠️ Partial Success (Eventual Success with Mock Data)
- **Notes:**
  - **Data handling test:** Platform chose mock data over real data download - did not attempt to download/process real data from provided URLs
  - ChatGPT Canvas said it wouldn't do real data first - would do mock data, then user could provide real data as GeoJSON
  - **Multiple iterations required:**
    1. Initial: UI/map showed but no data
    2. "Fix Bug" button appeared → fixed to get mock GeoJSON data
    3. Error: `'At least one polygon fill is a pattern url()'`
    4. After more fixes: Eventually working with mock data
  - **Final state:** Still mock data, still shows error screen sometimes ("Cannot preview your code")
  - **User feedback:** "still mock data tho, and still told me to fix errors, and still sometimes showed a rough error screen"
  - Map renders with synthetic contours (3 polygons: 68, 65, 55 dB DNL)
  - Pattern fills work after removing `leaflet.pattern` dependency
  - Network permission dialog for basemap tiles (user must approve)
  - **Data attribution:** "Data: Representative noise contours (synthetic). Replace with PDX Part 150 contours when processed."
- **Screenshot:** ✅ screenshot.png (desktop), screenshot-mobile.png (mobile), screenshot-error.png (error screen)
- **Mobile Check:** ✅ Responsive (after fixes)
- **Live URL:** https://chatgpt.com/canvas/shared/69097755f178819197f69e04646c287c
- **Grade:** C/C+ (Partial Success - Works but with mock data and intermittent errors)
- **Data Handling:** ⚠️ Did not attempt real data download/processing (chose mock data instead)

#### ⚠️ Gemini Canvas
- **Launch Time:** November 3, 2025
- **Status:** ⚠️ Partial Success (Grade D - same as Day 1 & Day 2)
- **Notes:**
  - Similar to Claude Artifacts - UI showed up mostly OK but data visualization didn't work
  - Map tiles missing
  - **Multiple iterations required:**
    1. Initial: UI showed up mostly OK, but data visualization didn't work, map tiles missing
    2. **Human intervention:** User said "the data visualization didn't work, and some of the map tiles are missing" → Platform attempted fix → Shows different base map, still missing tiles, visualization still not working
    3. **Human intervention:** User said "basically same problems, not fixed. just shows a different base map, still missing tiles, not sure about the visualization" → User tried one more fix → Map doesn't show at all (regression)
  - **Final state:** Map doesn't show at all after fixes (worse than initial)
  - **Consistent pattern**: Day 1, Day 2, Day 3 all show same issues - UI works, map/data rendering fails
  - **Data handling test:** Could not test (visualization failed before data could be verified)
- **Screenshot:** ✅ screenshot.png (desktop), screenshot-mobile.png (mobile) - Shows UI with map iframe but map tiles/data visualization issues
- **Mobile Check:** N/A (map doesn't show)
- **Live URL:** https://gemini.google.com/share/908ebfdc84ed
- **Grade:** D (Partial Success - UI generated but map/data rendering failed, consistent with Day 1 & Day 2)

#### ⚠️ Lovable
- **Launch Time:** November 3, 2025
- **Status:** ⚠️ Partial Success (Grade D - Mapbox API key requirement)
- **Notes:**
  - UI generated successfully with legend and data attribution
  - **Mapbox API key required** - dialog appeared requesting Mapbox token
  - **User provided API key** but map didn't show after dialog disappeared
  - **Multiple iterations:**
    1. Initial: UI generated, Mapbox token dialog appeared
    2. **User feedback:** "after pasting the mapbox api key, the dialog disappeared but the map didn't show" → Platform attempted automatic fix
    3. **User action:** Clicked button to "try to fix automatically by Lovable" → Better error message about Mapbox token
    4. **User decision:** "I thought [token] is valid but I'm not paying, not sure, so i gave up" - Token validation error
  - **Final state:** UI visible but map blocked by Mapbox API key requirement
  - **Key Learning:** Mapbox requires API keys (may need paid account for production), creates barrier for testing - **avoid Mapbox in future prompts**
  - **Data handling test:** Could not test (blocked by Mapbox API key requirement)
- **Screenshot:** ✅ screenshot.png (desktop), screenshot-mobile.png (mobile) - Shows UI with Mapbox Token Required dialog and legend
- **Mobile Check:** ✅ Responsive (UI visible, map blocked)
- **Live URL:** https://pdx-noise-petals.lovable.app
- **Grade:** D (Partial Success - UI generated but map blocked by Mapbox API key requirement)

#### ✅ MagicPatterns
- **Launch Time:** November 3, 2025
- **Status:** ✅ Full Success (Grade B)
- **Notes:**
  - **Data handling test:** Could not pull from real data source, but successfully created mock data
  - Map works well overall
  - UI functional and responsive
  - Legend with checkbox controls for different noise levels (68 dB, 65 dB, 55 dB DNL) - allows users to show/hide individual layers
  - **Positive UX feature:** Checkboxes to show/hide layers - nice interactive feature
  - Map tiles load correctly (OpenStreetMap via Leaflet)
  - **User feedback:** "it couldn't pull from the real data source, so it mocked the data, but otherwise it worked well! i can probably upload the data or maybe it could try another way, but we'll call this a success with a B rating"
  - **User observation:** "nice that it got the right airport location, just mock sound data" - Platform correctly identified PDX airport location, only used mock data for noise contours
  - **User observation:** "the checkboxes to show/hide layers is a nice idea too" - Positive UX feature
  - **Data attribution:** "Data: Representative noise contours" (mock data)
  - **First full success for Day 3!**
  - **Consistent performance:** Day 2 winner, Day 3 success
  - **Platform limitation:** User reached free tier limit (for today?) and couldn't follow up with more changes
- **Screenshot:** ✅ screenshot.png (desktop), screenshot-mobile.png (mobile) - Shows working map with legend and checkbox controls
- **Mobile Check:** ✅ Responsive (map and UI work well)
- **Live URL:** https://project-pdx-noise-contour-map-520.magicpatterns.app
- **Grade:** B (Full Success - Works well with mock data, minor limitation: couldn't pull from real data source)

---

## Platform Testing Summary

**Total Platforms Tested:** 5/10 (Claude Artifacts, ChatGPT Canvas, Gemini Canvas, Lovable, MagicPatterns)

**Status Breakdown:**
- ✅ Full Success: 1
  - MagicPatterns - Grade B (Works well with mock data)
- ⚠️ Partial Success: 4
  - Claude Artifacts - Grade D (UI/legends, no map)
  - ChatGPT Canvas - Grade C/C+ (Mock data, works after fixes)
  - Gemini Canvas - Grade D (UI OK, map/data rendering failed)
  - Lovable - Grade D (UI generated but map blocked by Mapbox API key requirement)
- ❌ Failure: 0

**Patterns Observed:**

**Claude Artifacts:**
- Consistent CSP/CORS limitation across all 3 days (Day 1, Day 2, Day 3)
- Same error pattern: External library references fail (`L is not defined`, `mapboxgl is not defined`)
- UI/legends generate successfully, but map rendering blocked by sandbox
- User noted the security/permissions aspect is actually a positive feature

**ChatGPT Canvas:**
- **Data handling test result:** Did NOT attempt real data download/processing
- Chose mock/synthetic data instead of downloading from provided URLs
- Required multiple "Fix Bug" iterations to get working
- Intermittent error screen still appears
- Eventually works but with synthetic data, not real PDX contours

**Gemini Canvas:**
- **Data handling test result:** Could not test (visualization failed before data could be verified)
- UI generated but data visualization never worked
- Map tiles missing (CSP/CORS or network restrictions)
- Attempts to fix resulted in regression (map disappeared entirely)
- Consistent pattern: Day 1, Day 2, Day 3 all show same issues - UI works, map/data rendering fails

**Lovable:**
- **Data handling test result:** Could not test (blocked by Mapbox API key requirement)
- UI generated successfully with legend and data attribution
- **Key Learning:** Mapbox requires API keys (may need paid account for production), creates barrier for testing
- **Recommendation:** Avoid Mapbox in future prompts, use alternative basemaps (OpenStreetMap, MapLibre, etc.)
- Automatic fix feature worked to improve error messages

**MagicPatterns:**
- **Data handling test result:** Could not pull from real data source, but successfully created mock data
- Map works well overall with mock data
- **First full success for Day 3!**
- **Consistent performance:** Day 2 winner, Day 3 success
- User notes: Could potentially upload data or try another approach, but satisfied with result
- Map tiles load correctly (OpenStreetMap via Leaflet)
- Legend with checkbox controls for different noise levels

---

## Notes for HTML Page (Future)

**When creating `index.html` for Day 3:**

1. **Platform Colors** (from Day 1/2):
   - ChatGPT Canvas: `bg-success` (green)
   - Claude Artifacts: `bg-warning` (yellow/orange)
   - Gemini Canvas: `bg-warning` (yellow/orange) - same as Claude

2. **Screenshot Requirements:**
   - **ChatGPT Canvas**: Desktop and mobile showing map with mock data, error screen screenshot available
   - **Claude Artifacts**: Desktop and mobile showing UI/legends but black/empty map area
   - **Gemini Canvas**: Desktop and mobile showing UI with map iframe but missing map tiles/data visualization issues

3. **Content to Include:**
   - **ChatGPT Canvas**: Note that it chose mock data over real data download, required multiple "Fix Bug" iterations, intermittent error screen
   - **ChatGPT Canvas**: Data handling test: Did NOT attempt real data download/processing
   - **Claude Artifacts**: Note consistent limitation across 3 days (Day 1, Day 2, Day 3)
   - **Claude Artifacts**: Document that UI/legends are generated (shows AI capability)
   - **Claude Artifacts**: Mention user's observation about security/permissions being potentially positive
   - **Gemini Canvas**: Note consistent limitation across 3 days (Day 1, Day 2, Day 3) - UI works, map/data rendering fails
   - **Gemini Canvas**: Document regression issue (attempts to fix made it worse - map disappeared entirely)
   - **Gemini Canvas**: Data handling test: Could not test (visualization failed)
   - **Grades**: ChatGPT Canvas: C/C+ (Partial Success - works but with mock data), Claude Artifacts: D (Partial Success - consistent with Day 1 & Day 2), Gemini Canvas: D (Partial Success - consistent with Day 1 & Day 2)

4. **Data Handling Test Results:**
   - **ChatGPT Canvas**: Did NOT attempt real data download/processing (chose mock data instead)
   - **Claude Artifacts**: Could not test data handling (blocked before data processing)
   - **Gemini Canvas**: Could not test data handling (visualization failed before data could be verified)
   - All platforms reveal they prefer easier paths (synthetic/embedded) over testing GIS data handling, or are blocked by sandbox restrictions

---

**Last Updated:** November 3, 2025

