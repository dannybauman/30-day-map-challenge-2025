# V0.dev - Day 2: Lines

**Platform:** V0.dev
**Status:** ⚠️ Partial Success (map not rendering)
**Time:** ~10 minutes
**Live URL:** https://v0-portland-street-map.vercel.app/

---

## Result

**Partial success** - Data loaded, tooltips work, but the map area is completely black. Something failed in the rendering pipeline.

### What It Generated

✅ **UI elements working:**
- Clean header with title and attribution
- Nice loading modal: "Loading street data..."
- **Compass Rose legend** with color squares (N/E/S/W)
- Road types legend with line samples
- Controls section with instructions
- #30DayMapChallenge tag
- "Built with v0" badge

✅ **Data loading works:**
- Successfully fetched from Overpass API
- Tooltip shows: "Northeast 43rd Avenue Bearing: 72° Type: residential"
- This proves data is present and hover detection works

❌ **Map rendering failed:**
- Map area is completely black
- No streets visible despite data being loaded
- Console error: 404 (resource not found)
- Likely Canvas/SVG rendering issue or missing dependency

---

## The Mystery

**The paradox:** Tooltips work (showing street names, bearings, types) which means:
1. Data successfully loaded from API
2. Geometry calculations completed
3. Hover detection is functioning
4. **But nothing is visible on screen**

**Most likely cause:** Missing basemap tiles, Canvas rendering failure, or a CSS issue hiding the rendered elements. The 404 error in console suggests a resource (possibly tiles or fonts) failed to load.

---

## Comparison to Day 1

| Aspect | Day 1 (Points) | Day 2 (Lines) |
|--------|----------------|---------------|
| Initial Success | ⚠️ Partial (no basemap) | ⚠️ Partial (black map) |
| Needed iteration | Yes (1 fix) | Not attempted |
| UI Design | Good | Good |
| Final Status | B (working but incomplete) | D (not functional) |

**Day 1 pattern repeats:** V0.dev had basemap issues on Day 1 too (missing basemap tiles). Day 2 has similar rendering problems.

---

## Design Analysis

**Legend type:** Four color squares representing cardinal directions (not circular, not linear - just 4 colors)

Shows only N/E/S/W with colored squares:
- Red: North (0°)
- Green: East (90°)
- Cyan: South (180°)
- Purple: West (270°)

**Simple but incomplete** - Only shows the 4 cardinal directions, not the full 360° spectrum. The "Compass Rose" naming is accurate though the visual is just 4 squares, not a rose or circle.

---

## Strengths

1. **Clean UI design** - Good hierarchy and layout
2. **Loading modal** - "Loading street data..." is nice UX
3. **Data loading works** - Successfully fetched and processed
4. **Tooltips work** - Hover detection functional
5. **Legend naming** - "Compass Rose" is the right terminology
6. **Good documentation** - Controls section explains interactions
7. **Mobile responsive** - Layout adapts well

---

## Weaknesses

1. **Map doesn't render** - Black screen despite data loading
2. **404 error** - Missing resource preventing visualization
3. **No auto-fix attempted** - Unlike ChatGPT's "Fix Bug" button
4. **Same pattern as Day 1** - Rendering issues on both days

---

## Technical Details

**What worked:**
- Fetched data from Overpass API
- Calculated bearings (tooltip shows correct angles)
- Hover detection and tooltip positioning
- UI layout and responsive design

**What failed:**
- Canvas/SVG rendering of street lines
- Console shows 404 error (missing resource)
- Map area displays as pure black
- No visible streets despite data being present

**Possible causes:**
1. Missing basemap tile server (404 error)
2. Canvas element not initializing
3. CSS z-index hiding rendered content
4. Missing mapping library dependency
5. Incorrect Canvas context or API usage

---

## Notes

- **Data is there!** The tooltip proves everything worked except rendering
- **Similar to Day 1** - V0.dev struggles with map rendering on both days
- **Would need iteration** - Like Day 1, this could potentially be fixed with follow-up prompts
- **Time constraints** - Not attempting fixes for this comparison (3-try limit)

**Key insight:** V0.dev can generate good UI and data processing, but has consistent issues with map rendering. The fact that tooltips work is actually impressive - shows it got 90% of the way there.

---

## Rating

**Quality: D**
- Concept execution: C (data works, rendering doesn't)
- UI design: A (clean, well-organized)
- Data loading: A (works perfectly)
- Rendering: F (completely broken)
- Reliability: D (two days, two rendering failures)

**Overall:** Frustrating near-miss. The hardest parts (API, calculations, tooltips) work perfectly, but the core visualization fails. With the circular legend, good UI, and working data pipeline, this would have been A-tier if the rendering worked.

**Pattern:** V0.dev seems to struggle specifically with map rendering/visualization, despite handling data processing well. This suggests a systematic issue with how it implements Canvas or mapping libraries.

