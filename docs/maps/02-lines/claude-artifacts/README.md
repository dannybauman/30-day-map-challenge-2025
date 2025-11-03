# Claude Artifacts - Day 2: Lines

**Platform:** Claude Artifacts
**Status:** ❌ Failed (CSP/CORS violations)
**Time:** ~15 minutes (3 fix attempts)
**Live URL:** https://claude.ai/public/artifacts/f6ba0dae-3ad2-4c9d-bb2c-9d2f4eb812cd

---

## Result

**Same issue as Day 1:** Claude Artifacts' sandbox blocks external library loading via Content Security Policy (CSP).

### Errors Encountered

**Attempt 1:**
```
Uncaught Error: Uncaught ReferenceError: L is not defined
```

**Attempt 2:**
```
Error: Leaflet not loaded yet
```

**Attempt 3:**
- Different error (hidden in console)
- Final visible error: "Error loading map library"

### Console Errors
```
Loading the stylesheet 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css' violates the following Content Security Policy directive...

Loading the script 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js' violates the following Content Security Policy directive...
```

---

## What It Generated

Despite the loading errors, Claude created:
- ✅ Nice legend UI with color gradient showing N/E/S/W directions
- ✅ Road types legend (Major Roads, Secondary, Residential)
- ✅ Clean dark theme layout
- ✅ Proper heading and description text
- ✅ Attribution
- ❌ **But no actual map** - blocked by CSP

---

## Analysis

**Pattern Recognition:** This is the exact same failure mode as Day 1 (earthquakes). Claude Artifacts:
1. Understands the prompt perfectly
2. Generates semantically correct code
3. Creates nice UI/legends
4. But **cannot load external mapping libraries** due to sandbox restrictions

**The Issue:** Claude Artifacts' iframe sandbox has strict CSP that blocks:
- External JavaScript libraries (Leaflet, Mapbox, etc.)
- External CSS files
- External API calls (in some cases)

**Why It Keeps Trying:** Claude attempts different loading strategies:
- Direct CDN links
- Async loading
- Fallback approaches
- But **none can bypass the CSP** - it's a platform limitation, not a code issue

---

## Comparison to Day 1

| Aspect | Day 1 (Points) | Day 2 (Lines) |
|--------|----------------|---------------|
| Error | CSP/CORS violations | CSP/CORS violations |
| Attempts | 3 | 3 |
| UI Generated | ✅ Good | ✅ Good |
| Map Loading | ❌ Failed | ❌ Failed |
| Final Status | Partial Success (D) | Failed |

---

## Takeaway

**Claude Artifacts is not suitable for maps that require:**
- External mapping libraries (Leaflet, Mapbox GL, etc.)
- External API calls
- Any external resources loaded via CDN

**Claude Artifacts might work for:**
- Canvas-based custom visualizations (drawing directly)
- SVG-based maps with embedded data
- Simple HTML/CSS/vanilla JS without external deps

**Recommendation:** Continue testing Claude Artifacts on future days, but don't expect success with standard mapping libraries. Consider it a "known limitation" rather than a platform failure.

---

## Screenshots

Desktop and mobile screenshots show the error state with "Error loading map library" message.

---

## Notes

- Platform limitation, not implementation quality issue
- Claude's code is well-structured when viewed
- UI/legend design is actually quite nice
- Just can't execute in the sandbox environment

