# Claude Artifacts - Day 3: Polygons

**Platform:** Claude Artifacts  
**Date:** November 3, 2025  
**Concept:** Airport Noise Footprint (PDX)  
**Status:** ⚠️ Partial Success (Grade D)

---

## Result

**Grade:** D (Partial Success)

**Why Partial Success:**
- UI and legends generated successfully
- Map rendering blocked by CSP/CORS sandbox restrictions
- Cannot load external mapping libraries (Leaflet, Mapbox GL JS)

---

## Attempts & Errors

### Attempt 1: Leaflet
- **Error:** `Uncaught ReferenceError: L is not defined`
- Claude tried to load Leaflet from CDN, blocked by sandbox

### Attempt 2: Leaflet (after user feedback)
- User asked: "as usual, getting this error when trying to access external data sources, is there a way that works? or a different data source?"
- Claude attempted fix → **Same error:** `Uncaught ReferenceError: L is not defined`

### Attempt 3: Mapbox GL JS
- Claude tried: "Let me try a completely different approach using Mapbox GL JS instead, which sometimes loads more reliably"
- **Error:** `Uncaught ReferenceError: mapboxgl is not defined`
- Same sandbox restriction, different library

---

## Pattern Recognition

**Consistent Limitation Across 3 Days:**
- Day 1: CSP/CORS blocked external libraries
- Day 2: CSP/CORS blocked external libraries  
- Day 3: CSP/CORS blocked external libraries

**What Works:**
- UI generation
- Legend design
- HTML structure
- CSS styling

**What Doesn't Work:**
- Loading external CDN libraries (Leaflet, Mapbox GL, MapLibre GL, etc.)
- Fetching external data sources (CSP/CORS restrictions)
- Map rendering (depends on external libraries)

---

## Human Interventions & Feedback

**Human (Danny) feedback during testing:**

1. **After first Leaflet error:**
   - "as usual, getting this error when trying to access external data sources, is there a way that works? or a different data source?"
   - Claude attempted fix → same error

2. **After second attempt:**
   - "still didn't work, no map, got this error: Uncaught Error: Uncaught ReferenceError: L is not defined"
   - Claude tried Mapbox GL JS → different error

3. **Final observation:**
   - "sorry claude, your artifacts and external data is having trouble. funny thing is, that's probably good to have more locked down security and permissions, who knows"

**Human Analysis:**
This is an interesting perspective - the sandbox restrictions, while limiting for this use case, may actually be a security feature that prevents malicious code execution. The user recognized a potential positive aspect of the limitation.

---

## Data Handling Test

**Result:** Could not test
- Platform blocked before data processing could occur
- External library loading fails first, preventing map initialization
- Would need pre-processed embedded data to test data handling capabilities

**Recommendation for Future:**
- If testing Claude Artifacts again, provide pre-processed GeoJSON embedded directly in HTML
- Use Canvas API or SVG rendering instead of external mapping libraries
- Focus on data processing logic rather than library integration

---

## Live URL

**Artifact:** https://claude.ai/public/artifacts/32b539ac-e024-47cd-9b8d-1b3be4f8c0eb

**Screenshots:**
- `screenshot.png` - Desktop view showing UI but no map
- `screenshot-mobile.png` - (if applicable)

---

## Technical Details

**Code Quality:** Good (UI/legends well-structured)  
**Error Handling:** N/A (blocked before execution)  
**Platform Limitation:** CSP/CORS sandbox restrictions  
**Workaround Possible:** Yes (embedded data + Canvas/SVG rendering)

---

## Conclusion

Claude Artifacts continues to show the same limitation across all 3 days: external library loading is blocked by sandbox restrictions. The platform generates excellent UI and structure, but cannot render maps that require external CDN libraries. This is a platform limitation, not a code quality issue.

**Grade:** D (Partial Success) - UI generated but map blocked by sandbox

**Consistency:** Day 1, Day 2, Day 3 all show identical pattern

