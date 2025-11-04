# Day 2: Lines - Street Orientation Rainbow

**Theme:** Lines - Map linear features
**Concept:** Street Orientation Rainbow - Portland, Oregon
**Date:** November 2, 2025
**Status:** ✅ Complete

---

## Concept

Color-code every street in Portland by its compass bearing (0-360°) using a full HSL color wheel. Cardinal directions appear as distinct colors, creating a visual fingerprint of the city's urban form - revealing Portland's iconic grid system alongside its more organic neighborhoods.

**Visual Goal:** The full 360° hue spectrum makes the grid pattern immediately obvious. East-West and North-South streets appear as distinct color bands. The contrast between regular grid (east Portland) and curvy hills (west Portland) becomes visually striking.

---

## Why This Concept?

**Chosen from:** ChatGPT's "Street Orientation Rainbow" concept

**Reasons:**
- Outside-the-box + colorful visualization
- Tests geometry calculations (bearing from coordinates)
- OSM Overpass API (similar reliability to Day 1's USGS)
- Portland location: local relevance + interesting mix of grid + organic patterns
- Should work across most platforms (standard API + calculations)
- Visually striking for social media sharing

---

## Data Source

**OpenStreetMap via Overpass API**
- Free, no authentication required
- Endpoint: `https://overpass-api.de/api/interpreter`
- Portland bounding box: `45.43,-122.84,45.65,-122.47`
- Returns street geometries with highway type and names

---

## Implementation Details

**Key Technical Requirements:**
1. Fetch street data from Overpass API
2. Calculate bearing for each street segment
3. Convert bearing to HSL color (0-360° maps to color wheel)
4. Vary line thickness by road type
5. Optional: Show directional indicators on one-way streets

**Visual Encoding:**
- Color = Compass bearing (Red=North, Yellow=East, Cyan=South, Purple=West)
- Line thickness = Road importance (motorway > primary > residential)
- Optional animation = One-way streets

---

## Platform Results

### 🏆 Winner: MagicPatterns (Grade A)
**Why:** Fastest data loading, best pan/zoom performance, most intuitive circular legend, excellent mobile UX. Zero human intervention required. Superior out-of-the-box quality in every category.

**Live Demo:** https://project-portland-street-orientation-rainbow-map-450.magicpatterns.app/

---

### ✅ Success (3 platforms)

#### Lovable (Grade B)
- Clean UI, good performance, one-shot success
- Minor issue: Tooltip bug (light text on white background)
- Legend: Linear (less intuitive than circular)
- Live: https://portland-hue-lines.lovable.app

#### Bolt.new (Grade B)
- Effective circular legend, good UI
- Performance: Sluggish pan/zoom (~10 sec lag)
- Mobile responsive
- Live: https://street-orientation-r-fc5r.bolt.host/

---

### ⚠️ Partial Success (3 platforms)

#### ChatGPT Canvas (Grade C+)
- Works but VERY SLOW (~1 min data load)
- CSP violations in console but still renders
- Eventually displays full colored map
- Live: https://chatgpt.com/canvas/shared/6908395f84ec8191b7d57c4c883d5354

#### V0.dev (Grade D)
- UI works, tooltips functional
- Map rendering FAILED (black screen)
- Same issue pattern as Day 1
- Live: https://v0-portland-street-map.vercel.app/

#### Base44 (Grade C)
- Data loads, performance decent
- **Critical flaw**: Incorrect color circle (wrong HSL mapping)
- **Mobile fail**: Legend takes >50% of screen, can't collapse
- Live: https://portland-street-atlas-3ab01ba5.base44.app/

---

### ⚠️ Partial Success (continued - 3 platforms)

#### Claude Artifacts (Grade D)
- CSP/CORS restrictions block external libraries
- Cannot load Leaflet, tried 3 different approaches
- Platform limitation, not code quality issue
- Day 1 + Day 2 both failed identically

#### Gemini Canvas (Grade D)
- CORS policy blocks MapLibre GL
- "Fix error" button tried 3x, all failed
- Errors now hidden from users (just spinner)
- Day 1 + Day 2 both failed identically

#### Firebase Studio (Grade D)
- Stuck at "Starting app"
- Autonomous debugging identified 91MB data exceeds Next.js 2MB limit
- Proposed fixes but couldn't resolve
- Impressive debugging feature, but ultimately failed

---

### ❌ Failure (1 platform)

#### Google AI Studio (Grade F - no code generated)
- Internal platform error: "An internal error occurred"
- Never generated any code - completely unusable
- Day 1 worked, Day 2 broken - reliability concern
- **Grade F justification**: Unlike Claude/Gemini which generated UI/legends, Google AI Studio generated nothing

---

### 📊 Success Rates

| Category | Count | Percentage |
|----------|-------|------------|
| Success | 3 | 30% |
| Partial Success | 6 | 60% |
| Complete Failure | 1 | 10% |
| **Usable** | **3** | **30%** |

**Day 1 vs Day 2 Comparison:**
- Day 1: 73% success rate
- Day 2: 30% full success, 30% usable (partial successes need fixes before they’re shareable)
- Partial successes are documented because the UI exists, but they still require manual intervention before deployment.
- **Conclusion**: Larger dataset (91MB) + geometry calculations challenged more platforms

---

## Key Learnings

### 🎨 Design Insights
- **Circular legends win**: For directional/compass data, circular color wheels (Bolt.new, MagicPatterns) were far more intuitive than linear gradients or 4-square compass roses
- **Legend UX matters**: Base44's non-collapsible mobile legend made the map nearly unusable on phones, despite solid technical execution
- **Performance = UX**: ChatGPT Canvas's ~1 minute load time turned initial "failure" perception into eventual success, but user patience required

### ⚡ Technical Lessons
- **Large datasets expose weaknesses**: 91MB Overpass API data separated the robust platforms (MagicPatterns, Bolt.new) from the fragile ones (Firebase Studio's 2MB Next.js cache limit)
- **Leaflet struggles with size**: Platforms using Leaflet (ChatGPT Canvas, Bolt.new) had sluggish pan/zoom; MapLibre GL (Lovable, MagicPatterns) performed better
- **CSP/CORS = dealbreaker**: Claude Artifacts and Gemini Canvas remain unusable for real external API mapping projects (Day 1 + Day 2 = 0% success)
- **Geometry calculations well-handled**: Bearing calculations (Math.atan2) + HSL color conversion worked across all platforms that loaded data successfully

### 🏆 Platform Rankings
1. **MagicPatterns**: Clear winner - best performance, UX, and mobile experience
2. **Bolt.new**: Solid choice, circular legend, minor performance issues
3. **Lovable**: Reliable, works well, minor tooltip bug
4. **ChatGPT Canvas**: Functional but requires patience (very slow)
5. **Base44**: Technical success, UX failures (legend issues)
6. **V0.dev**: UI works but rendering broken (persistent issue)
7-9. **Partial successes**: Claude Artifacts, Gemini Canvas, Firebase Studio (UI generated but blocked by sandboxes or platform limits)
10. **Failure**: Google AI Studio (internal platform error, no code generated)

### 🔮 Patterns Emerging
- **Consistent performers**: Lovable, Bolt.new (Day 1 + Day 2 both successful)
- **Consistent partials**: Claude Artifacts, Gemini Canvas, Firebase Studio (sandboxes or caching limits keep them from full delivery)
- **Unreliable**: Google AI Studio (Day 1 worked, Day 2 error)
- **Dark horse**: MagicPatterns (not a household name but delivered #1 result)

### 💡 For Future Days
- Consider **data size** when choosing concepts - smaller datasets may allow more platforms to succeed
- **Circular legends** should be directly requested in prompts for directional data
- **Mobile responsiveness** needs clear prompt emphasis (most platforms got this right)
- **Performance testing** should be part of evaluation - not just "does it work" but "does it work well"
- **Patience required** for slower platforms (don't assume failure at first glance)

---

## Files

- `IMPLEMENTATION-PROMPT.md` - Full prompt used across all platforms
- `LAUNCH-TRACKER.md` - Real-time platform testing notes
- Platform subdirectories with code, screenshots, and notes

---

## Attribution

Data: © OpenStreetMap contributors
Concept: ChatGPT (GPT-5 Thinking)
Implementation: 10 AI development platforms (parallel testing)
