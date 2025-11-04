# Gemini Canvas - Day 2: Lines

**Platform:** Gemini Canvas
**Status:** ❌ Failed (CSP/CORS violations)
**Time:** ~15 minutes (3 fix attempts)
**Live URL:** https://gemini.google.com/share/3b970078b72c

---

## Result

**Same issue as Day 1:** Gemini Canvas' sandbox blocks external library loading via Content Security Policy (CSP).

### Errors Encountered

Console errors (now hidden in the UI, but visible in browser dev tools):
```
Access to script at 'https://unpkg.com/maplibre-gl@4.3.2/dist/maplibre-gl.mjs' from origin '...' has been blocked by CORS policy

Failed to load resource: net::ERR_FAILED @ https://unpkg.com/maplibre-gl@4.3.2/dist/maplibre-gl.mjs
```

**User experience:**
- Generated UI loads
- Loading spinner appears
- But map never loads (blocked by CORS)
- No error message shown to user (errors are hidden)

### Fix Attempts

1. **Attempt 1:** Initial generation failed with external library loading
2. **Attempt 2:** Used "Fix error" button - same error
3. **Attempt 3:** Tried "Fix error" again - still blocked by CORS

---

## What It Generated

Despite the loading errors, Gemini created:
- ✅ Beautiful color wheel legend showing N/E/S/W bearings
- ✅ Comprehensive road type legend (Motorway, Primary, Tertiary, Service)
- ✅ Clean dark theme layout with proper hierarchy
- ✅ Title and description
- ✅ Proper attribution (#30DayMapChallenge tag included!)
- ❌ **But no actual map** - blocked by CSP

**Notable:** The color wheel legend is actually one of the nicest-looking ones generated across all platforms!

---

## Analysis

**Pattern Recognition:** This is the exact same failure mode as Day 1 (earthquakes). Gemini Canvas:
1. Understands the prompt perfectly
2. Generates well-designed UI
3. Creates beautiful legends
4. But **cannot load external mapping libraries** due to sandbox restrictions

**The Issue:** Gemini Canvas' iframe sandbox has strict CSP that blocks:
- External JavaScript libraries (MapLibre GL, Leaflet, etc.)
- External module imports (.mjs files)
- External API calls
- External resources loaded via CDN

**Improved UX vs Claude:** Gemini now hides error messages from the user interface (they're still in console). This is better UX than showing raw errors, but makes debugging harder.

---

## Comparison to Day 1

| Aspect | Day 1 (Points) | Day 2 (Lines) |
|--------|----------------|---------------|
| Error | CSP/CORS violations | CSP/CORS violations |
| Attempts | 3 | 3 |
| UI Generated | ✅ Good | ✅ Strong (best legend) |
| Map Loading | ❌ Failed | ❌ Failed |
| Error Visibility | Shown | Hidden (spinner only) |
| Final Status | Partial Success (D) | Failed |

---

## Takeaway

**Gemini Canvas is not suitable for maps that require:**
- External mapping libraries (Leaflet, Mapbox GL, MapLibre GL, etc.)
- External API calls
- JavaScript modules loaded via CDN (.mjs files)
- Any external resources

**Gemini Canvas might work for:**
- Canvas-based custom visualizations
- SVG-based maps with embedded data
- Simple HTML/CSS/vanilla JS without external dependencies
- Static visualizations

**Positive note:** Gemini generates some of the nicest UI/legend designs. The color wheel is beautiful and intuitive.

**Recommendation:** Like Claude Artifacts, Gemini Canvas has a consistent platform limitation. Worth testing on future days with different approaches (Canvas API, SVG, embedded data), but don't expect success with standard mapping libraries.

---

## Screenshots

Desktop and mobile screenshots show:
- Beautiful color wheel legend for compass bearings
- Clean road type hierarchy
- Loading spinner (map never loads)
- Professional dark theme

---

## Notes

- Platform limitation, not implementation quality issue
- UI design is actually among the best
- The color wheel legend is beautiful
- Just can't execute external libraries in the sandbox
- Errors now hidden from users (better UX but harder debugging)

