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

---

## Platform Testing Summary

**Total Platforms Tested:** 2/10 (Claude Artifacts, ChatGPT Canvas)

**Status Breakdown:**
- ✅ Full Success: 0
- ⚠️ Partial Success: 2
  - Claude Artifacts - Grade D (UI/legends, no map)
  - ChatGPT Canvas - Grade C/C+ (Mock data, works after fixes)
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

---

## Notes for HTML Page (Future)

**When creating `index.html` for Day 3:**

1. **Platform Colors** (from Day 1/2):
   - ChatGPT Canvas: `bg-success` (green)
   - Claude Artifacts: `bg-warning` (yellow/orange)

2. **Screenshot Requirements:**
   - **ChatGPT Canvas**: Desktop and mobile showing map with mock data, error screen screenshot available
   - **Claude Artifacts**: Desktop and mobile showing UI/legends but black/empty map area

3. **Content to Include:**
   - **ChatGPT Canvas**: Note that it chose mock data over real data download, required multiple "Fix Bug" iterations, intermittent error screen
   - **ChatGPT Canvas**: Data handling test: Did NOT attempt real data download/processing
   - **Claude Artifacts**: Note consistent limitation across 3 days (Day 1, Day 2, Day 3)
   - **Claude Artifacts**: Document that UI/legends are generated (shows AI capability)
   - **Claude Artifacts**: Mention user's observation about security/permissions being potentially positive
   - **Grades**: ChatGPT Canvas: C/C+ (Partial Success - works but with mock data), Claude Artifacts: D (Partial Success - consistent with Day 1 & Day 2)

4. **Data Handling Test Results:**
   - **ChatGPT Canvas**: Did NOT attempt real data download/processing (chose mock data instead)
   - **Claude Artifacts**: Could not test data handling (blocked before data processing)
   - Both platforms reveal they prefer easier paths (synthetic/embedded) over testing GIS data handling

---

**Last Updated:** November 3, 2025

