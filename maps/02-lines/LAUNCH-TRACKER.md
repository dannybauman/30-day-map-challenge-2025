# Day 2: Lines - Launch Tracker

**Concept:** Street Orientation Rainbow - Portland, Oregon
**Start Time:** [To be filled]
**Theme:** Lines - Map linear features with focus on direction visualization

---

## Platform Launch Status

### Tier 1 - Fast Visual Prototypes

#### ✅ Lovable
- **Launch Time:** [Launched]
- **Status:** ✅ Success (with tooltip bug)
- **Notes:** One-shot success! Beautiful rainbow visualization, excellent loading UX (~10 sec with status message). MapLibre GL = good performance. BUT: Tooltip bug (light text on white, don't hide - artifact visible in screenshot). Linear legend instead of circular (less intuitive for directions).
- **Screenshot:** ✅ screenshot.png (shows tooltip artifact), screenshot-mobile.png
- **Mobile Check:** ✅ Good responsive design
- **Live URL:** https://portland-hue-lines.lovable.app

#### ✅ ChatGPT Canvas (GPT-5 Thinking)
- **Launch Time:** [Launched]
- **Status:** ⚠️ Eventual Success (very slow)
- **Notes:** Initial data load error, used "Fix Bug" button. After fix, EXTREMELY SLUGGISH - took ~1 minute to show data after map appeared. Pan/zoom very slow (~10 sec). Console shows CSP violations for Overpass API + basemap tiles but map eventually rendered with colors. Leaflet performance issues with large dataset. Linear legend. Required patience.
- **Screenshot:** ✅ screenshot.png (manual), screenshot-mobile.png
- **Mobile Check:** ✅ Responsive
- **Live URL:** https://chatgpt.com/canvas/shared/6908395f84ec8191b7d57c4c883d5354

#### ✅ Bolt.new
- **Launch Time:** [Launched]
- **Status:** ✅ Success
- **Notes:** One-shot success! **Circular color wheel legend** (perfect for directional data!). Beautiful rainbow viz, good zoom level. Performance sluggish (~10 sec lag on pan/zoom) - same Leaflet issue as ChatGPT. Clean UI, mobile responsive.
- **Screenshot:** ✅ screenshot.png, screenshot-mobile.png
- **Mobile Check:** ✅ Good - legend works well
- **Live URL:** https://street-orientation-r-fc5r.bolt.host/

#### ⚠️ V0.dev
- **Launch Time:** [Launched]
- **Status:** ⚠️ Partial Success (map not rendering)
- **Notes:** UI works, data loads, tooltips work ("Northeast 43rd Ave Bearing: 72°"), but map area is BLACK. Console 404 error. Same rendering issue pattern as Day 1. Compass Rose legend (color squares, not circular). Nice loading modal.
- **Screenshot:** ✅ screenshot.png (shows black map), screenshot-mobile.png
- **Mobile Check:** ✅ UI responsive but map still black
- **Live URL:** https://v0-portland-street-map.vercel.app/

#### ⚠️ Google AI Studio Apps
- **Launch Time:** [Launched]
- **Status:** ⚠️ Partial Success (platform error)
- **Notes:** Platform error: "An internal error occurred." Clicked Retry, same error. Never generated any code. Day 1 worked fine, Day 2 broken - reliability concern.
- **Screenshot:** ✅ screenshot.png (shows error message)
- **Mobile Check:** N/A (never generated code)
- **Live URL:** N/A

#### ⚠️ Claude Artifacts
- **Launch Time:** [Launched]
- **Status:** ⚠️ Partial Success (CSP/CORS)
- **Notes:** Same issue as Day 1 - cannot load external libraries (Leaflet). Tried 3 different approaches, all blocked by CSP. Generated nice UI/legends but no map. Platform limitation, not code quality.
- **Screenshot:** ✅ screenshot.png, screenshot-mobile.png
- **Mobile Check:** N/A (didn't load)
- **Live URL:** https://claude.ai/public/artifacts/f6ba0dae-3ad2-4c9d-bb2c-9d2f4eb812cd

#### ⚠️ Gemini Canvas
- **Launch Time:** [Launched]
- **Status:** ⚠️ Partial Success (CSP/CORS)
- **Notes:** Same issue as Day 1 - cannot load MapLibre GL. Tried "Fix error" button 3x, all blocked by CORS. Generated beautiful color wheel legend (best design!) but no map loads. Errors now hidden from users (just shows spinner).
- **Screenshot:** ✅ screenshot.png, screenshot-mobile.png
- **Mobile Check:** N/A (didn't load)
- **Live URL:** https://gemini.google.com/share/3b970078b72c

---

### Tier 2 - Full-Stack & Advanced

#### ⚠️ Firebase Studio
- **Launch Time:** [Launched]
- **Status:** ⚠️ Partial Success (stuck on "Starting app")
- **Notes:** Autonomous "Investigate" debugging! AI found: 91MB Overpass data exceeds Next.js 2MB cache limit. Proposed fixes but couldn't resolve. Stuck at "Starting app". Impressive debugging feature but failed to deliver. Required Gemini API key.
- **Screenshot:** ✅ screenshot.png (shows debugging attempt)
- **Mobile Check:** N/A (never started)
- **Live URL:** N/A

---

### Tier 3 - Specialized Tools

#### ✅ MagicPatterns
- **Launch Time:** [Launched]
- **Status:** ⭐ **BEST OVERALL** - Excellent Success
- **Notes:** **Winner for Day 2!** Fastest data loading (quickest of all). Most performant pan/zoom (~1-2 sec lag, better than all others). **Best legend UI** - beautiful circular color wheel. Excellent mobile responsive. All features work. Only minor issues: zoom buttons overlay header slightly, tooltip contrast could be better. Zero human intervention needed. Superior out-of-the-box quality.
- **Screenshot:** ✅ screenshot.png, screenshot-mobile.png
- **Mobile Check:** ⭐ Excellent - best mobile experience
- **Live URL:** https://project-portland-street-orientation-rainbow-map-450.magicpatterns.app/

#### ⚠️ Base44
- **Launch Time:** [Launched]
- **Status:** ⚠️ Partial Success (UX issues)
- **Notes:** Data loads and displays well, pan/zoom performance good. **BUT: Color circle legend is incorrect** - colors don't follow proper HSL/compass order (red should be north/0°). **Mobile fail: Legend takes up >50% of screen and can't be hidden**, making map barely usable on phones. Technical execution solid, but critical UX/design flaws.
- **Screenshot:** ✅ screenshot.png (shows incorrect color gradient), screenshot-mobile.png (shows legend dominating screen)
- **Mobile Check:** ❌ Poor - legend dominates, no collapse option
- **Live URL:** https://portland-street-atlas-3ab01ba5.base44.app/

---

## Quick Stats

- **Total Platforms:** 10 (tested)
- **Full Success:** 3 (Lovable, Bolt.new, MagicPatterns)
- **Partial Success:** 7 (ChatGPT Canvas, V0.dev, Base44, Claude Artifacts, Gemini Canvas, Google AI Studio, Firebase Studio)
- **Success Rate:** 30% full success, 60% usable
- **Total Time:** ~2 hours (including ideation, prompt creation, testing, documentation)

---

## Key Observations

### What Worked ✅
- **MagicPatterns dominated**: Fastest loading, best performance, best legend design, excellent mobile UX
- **Circular legends superior**: Bolt.new and MagicPatterns' circular color wheels were far more intuitive than linear legends for directional data
- **Data loading mostly successful**: 6/10 platforms successfully fetched and displayed 91MB Overpass API data
- **Mobile responsive design**: Most successful platforms adapted well to mobile viewports

### What Didn't Work ❌
- **Large dataset performance**: 91MB of Portland street data caused sluggishness across most platforms (ChatGPT Canvas took ~1 min to render)
- **CSP/CORS sandbox restrictions**: Claude Artifacts and Gemini Canvas continue to fail on external library/data loading
- **Platform reliability issues**: Google AI Studio had internal error, Firebase Studio couldn't start app
- **Rendering failures**: V0.dev's map rendering still problematic (black screen)
- **Legend UX problems**: Base44's incorrect color mapping and non-collapsible mobile legend

### Surprises 🤔
- **Firebase Studio's autonomous debugging**: Impressive feature that diagnosed the 91MB data issue and Next.js cache limit, even if it couldn't fix it
- **Performance variance**: Huge differences in pan/zoom speed despite similar tech stacks (Leaflet/MapLibre)
- **Legend design creativity**: Platforms interpreted "color wheel legend" differently - circular, linear, 4-square compass rose
- **ChatGPT Canvas eventually worked**: Initially appeared broken but after ~1 minute of patience, fully rendered
- **MagicPatterns as dark horse**: Not a household name but delivered the best overall result

### Platform-Specific Notes 📝
- **Best for production**: MagicPatterns (performance + UX)
- **Best legend design**: MagicPatterns (circular + responsive)
- **Most patient required**: ChatGPT Canvas (~1 min load)
- **Best debugging tools**: Firebase Studio (autonomous investigation)
- **Most reliable**: Bolt.new, Lovable (consistent Day 1 → Day 2)
- **Least reliable**: Google AI Studio (internal error), Claude/Gemini Artifacts (persistent CSP issues)

---

## Day 1 Comparison

**Day 1 Results:**
- 11 platforms tested
- 8 successful (73%)
- 3 partial success
- ~1.5 hours total

**Day 2 Expectations:**
- Geometry calculations (bearing) may challenge some platforms
- OSM Overpass API should work similarly to Day 1's USGS API
- Color scale generation (HSL) is a new test
- Watch for: CORS issues (Claude/Gemini Artifacts), data parsing complexity

---

## Mobile Responsiveness Tracking

| Platform | Desktop Quality | Mobile Quality | Overall |
|----------|----------------|----------------|---------|
| Lovable | B | B | B |
| ChatGPT Canvas | C (slow) | B | C+ |
| Bolt.new | B | B | B |
| V0.dev | D (black map) | D (black map) | D |
| Google AI Studio | D (error) | D (no code) | D |
| Firebase Studio | D (no start) | D (no start) | D |
| Claude Artifacts | D (CSP) | D (CSP) | D |
| Gemini Canvas | D (CORS) | D (CORS) | D |
| MagicPatterns | A | A | **A** ⭐ |
| Base44 | B | D (legend issue) | C |

**Rating Scale:** A (Excellent) / B (Good) / C (OK) / D (Poor)

**Key:**
- **A (Excellent)**: Fast, beautiful, fully functional, great mobile UX
- **B (Good)**: Works well, minor issues, responsive
- **C (OK)**: Usable but significant issues (performance, UX problems)
- **D (Poor)**: Major functionality broken but some elements work (e.g., UI works but map doesn't load)

