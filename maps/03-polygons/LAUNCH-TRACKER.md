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
- **Screenshot:** ⚠️ Screenshots needed (desktop, mobile)
- **Mobile Check:** N/A (map doesn't show)
- **Live URL:** https://gemini.google.com/share/908ebfdc84ed
- **Grade:** D (Partial Success - UI generated but map/data rendering failed, consistent with Day 1 & Day 2)

---

## Platform Testing Summary

**Total Platforms Tested:** 3/10 (Claude Artifacts, ChatGPT Canvas, Gemini Canvas)

**Status Breakdown:**
- ✅ Full Success: 0
- ⚠️ Partial Success: 3
  - Claude Artifacts - Grade D (UI/legends, no map)
  - ChatGPT Canvas - Grade C/C+ (Mock data, works after fixes)
  - Gemini Canvas - Grade D (UI OK, map/data rendering failed)
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
   - **Gemini Canvas**: Desktop and mobile showing UI but missing map tiles or empty map (screenshots needed)

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

