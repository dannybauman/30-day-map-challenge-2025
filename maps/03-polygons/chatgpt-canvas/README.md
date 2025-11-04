# ChatGPT Canvas - Day 3: Polygons

**Platform:** ChatGPT Canvas (GPT-5 Thinking)  
**Date:** November 3, 2025  
**Concept:** Airport Noise Footprint (PDX)  
**Status:** ⚠️ Partial Success (Grade C/C+)

---

## Result

**Grade:** C/C+ (Partial Success - Eventual Success with Mock Data)

**Why Partial Success:**
- Map eventually renders with mock data
- Required multiple "Fix Bug" iterations
- Did not download/process real data from provided URLs
- Sometimes shows error screen ("Cannot preview your code")
- User noted: "still told me to fix errors, and still sometimes showed a rough error screen"

---

## Data Handling Test

**Platform Approach:** Used mock/synthetic data instead of downloading/processing real data

**What Happened:**
1. **Initial Response:** ChatGPT Canvas said it wouldn't do real data first - would do mock data, then user could provide real data as GeoJSON
2. **UI Generated:** Showed UI and map, but no data initially
3. **Error 1:** "Fix Bug" button appeared, fixed to get some mock GeoJSON data
4. **Error 2:** Got error: `'At least one polygon fill is a pattern url()'`
5. **After Fix:** Eventually got working somewhat with mock data
6. **Final State:** Still mock data, still shows error screen sometimes

**Data Handling Capability:** ⚠️ Did not test real data download/processing
- Platform chose to use synthetic data instead
- Did not attempt to download from BTAA Geoportal or City of Portland URLs
- Did not attempt LineString→Polygon conversion
- User would need to provide pre-processed GeoJSON

**Mock Data Quality:**
- Created synthetic contours around PDX
- Note in UI: "This demo uses representative, synthetic contours generated around PDX. Replace with processed Part 150 contours when available."
- Data attribution: "Data: Representative noise contours (synthetic). Replace with PDX Part 150 contours when processed."

---

## Technical Issues

**Errors Encountered:**
1. Initial error (no data showing)
2. Pattern fill error: `'At least one polygon fill is a pattern url()'`
3. Intermittent error screen: "Cannot preview your code" / "An error occured while trying to run"

**Fixes Applied:**
- ChatGPT Canvas used "Fix Bug" button multiple times
- Removed `leaflet.pattern` dependency
- Switched to native SVG patterns that survive redraw/zoom
- Note in UI: "Fix: Removed leaflet.pattern dependency and now use robust native SVG patterns that survive redraw/zoom."

**User Feedback:**
- "it showed the UI and map, but no data"
- "it showed the Fix Bug button since there was an error"
- "after one more try, eventually it got working somewhat with the mock data"
- "still mock data tho, and still told me to fix errors, and still sometimes showed a rough error screen"

---

## Map Rendering

**Status:** Eventually works with mock data
- Map loads with Leaflet
- Shows synthetic noise contours (3 polygons: 68, 65, 55 dB DNL)
- Pattern fills work (after fixes)
- Legend displays correctly
- Network permission dialog for basemap tiles (user must approve)

**Issues:**
- Intermittent error screen still appears
- Requires multiple bug fixes to get working
- Not using real data from provided sources

---

## Human Interventions

**User Observations:**
- Noted that platform chose mock data over real data download
- Saved error screenshot: `screenshot-error.png` (or `screenshot-network.error.png`)
- Documented that multiple iterations were needed

---

## Live URL

**Canvas:** https://chatgpt.com/canvas/shared/69097755f178819197f69e04646c287c

**Screenshots:**
- `screenshot.png` - Desktop view (173K)
- `screenshot-mobile.png` - Mobile view (256K)
- `screenshot-error.png` - Error screen (if saved)

---

## Technical Details

**Code Quality:** Good (works after fixes)  
**Error Handling:** Required multiple iterations  
**Data Handling:** Chose mock data over real data download  
**Platform Limitation:** Did not attempt to download/process GIS data from URLs  
**Workaround:** Platform suggests user can provide pre-processed GeoJSON

---

## Conclusion

ChatGPT Canvas eventually delivered a working map with mock data, but did not attempt to download or process real data from the provided URLs. This reveals that the platform chose the easier path (synthetic data) rather than testing GIS data handling capabilities. The map works, but required multiple bug fixes and still shows intermittent errors. For the data handling test, this platform did not attempt the real data workflow.

**Grade:** C/C+ (Partial Success - Works but with mock data and errors)

**Data Handling Test:** ⚠️ Did not attempt real data download/processing

