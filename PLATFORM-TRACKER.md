# Platform Performance Tracker

Tracking which AI platforms excel at different types of cartographic tasks across the 30-day challenge.

---

## Overall Success Rates

| Platform | Attempts | Success | Partial | Failed | Success % | Avg Time |
|----------|----------|---------|---------|--------|-----------|----------|
| ChatGPT Canvas | 2 | 1 | 1 | 0 | 50% | 5-10 min |
| Bolt.new | 1 | 1 | 0 | 0 | 100% | 5 min |
| Lovable | 1 | 1 | 0 | 0 | 100% | 5 min |
| Base44 | 1 | 1 | 0 | 0 | 100% | 5 min |
| MagicPatterns | 2 | 2 | 0 | 0 | 100% | 5 min |
| Google AI Studio | 1 | 1 | 0 | 0 | 100% | 5 min |
| Firebase Studio | 1 | 1 | 0 | 0 | 100% | 15 min |
| V0.dev | 1 | 0 | 1 | 0 | 0% | 10 min |
| Claude Artifacts | 3 | 0 | 3 | 0 | 0% | 15 min |
| Gemini | 1 | 0 | 1 | 0 | 0% | 15 min |
| Cursor | 0 | 0 | 0 | 0 | -- | -- |
| Windsurf | 0 | 0 | 0 | 0 | -- | -- |

---

## Best Platform By Map Type

### Basic Mapping
**Points, Lines, Polygons**
- 🥇 ChatGPT Canvas, Bolt.new, Lovable (three-way tie)
  - **ChatGPT**: Best UI polish, good permission model, good tooltips
  - **Bolt**: Best data handling & stats display, solid tooltips
  - **Lovable**: Fast, clean, good tooltips
- Strong Contenders: Base44 (best stats dashboard), Firebase Studio (full VS Code editor)

**Notes**: *After Day 1 (Points) - Top 3 are equally strong with different specialties. ChatGPT has cleanest UI, Bolt has best data handling, Lovable has great speed. Base44 excels at stats dashboards.*

---

### Data Visualization
**Charts, Graphs, Complex Data**
- 🥇 TBD
- 🥈 TBD
- 🥉 TBD

**Notes**: *To be determined*

---

### 3D & Advanced
**3D Models, WebGL, Advanced Graphics**
- 🥇 TBD
- 🥈 TBD
- 🥉 TBD

**Notes**: *To be determined*

---

### Interactive Features
**User Controls, Animations, Real-time Updates**
- 🥇 TBD
- 🥈 TBD
- 🥉 TBD

**Notes**: *To be determined*

---

### Design & Aesthetics
**UI, Polish, Typography**
- 🥇 ChatGPT Canvas, Bolt.new, Base44 (three-way tie for top-tier design)
  - **ChatGPT**: Cleanest, most polished UI
  - **Bolt**: Professional, strong stats display
  - **Base44**: Clean dark theme, best stats dashboard
- 🥈 Lovable, MagicPatterns (modern Tailwind aesthetic)

**Notes**: *Top 3 all have strong visual design. ChatGPT has best overall polish, Bolt has great data presentation, Base44 wins for dark theme & stats dashboard. Tooltips: Lovable, Bolt, ChatGPT best; others lag behind.*

---

### Data Handling
**Large Datasets, API Integration, Processing**
- 🥇 Bolt.new (7,734 earthquakes with full stats: total, max mag, avg depth)
- 🥈 Base44 (comprehensive dashboard: 7,729 total, max mag, updated time - but Avg Depth bug)
- 🥉 ChatGPT Canvas, Lovable (smooth API integration)

**Notes**: *Bolt.new excels at data presentation. Base44 has best stats dashboard but one calculation bug. ChatGPT & Lovable handle data well with no stats. Claude & Gemini struggled with external API calls - major weakness.*

---

### Speed
**Fastest Time to Working Prototype**
- 🥇 Bolt.new / Lovable / MagicPatterns / Base44 (all ~5 min)
- 🥈 ChatGPT Canvas / Google AI Studio (~5 min)
- 🥉 V0.dev (~10 min)

**Notes**: *Seven platforms achieved working implementations in ~5 minutes from prompt to live demo. Firebase Studio took ~15 min due to API key setup. V0.dev, Claude, and Gemini needed 10-15 min due to iterations/debugging.*

---

## Common Failure Modes by Platform

### Claude Artifacts
**Successes**:
- Good UI structure and design sense
- Clear code organization
- Fast initial generation
- Was close to working - UI rendered, just had API/sandbox issues

**Struggles**:
- ⚠️ CSP/CORS violations with external libraries (Leaflet CDN blocked)
- External API data fetching fails
- Difficult to debug/fix sandbox restrictions
- Multiple iterations don't resolve core issues

**Best For**: Self-contained visualizations with embedded data, scenarios without external APIs
**Avoid For**: External API integrations, CDN-dependent libraries
**Note**: May work well in other scenarios - worth retrying on future days with embedded data
**Human Oversight**: Captured the failure state and noted how the sandbox blocked external libraries for documentation.

---

### ChatGPT Canvas
**Successes**:
- ⭐ Best overall implementation quality
- Clean, polished UI design
- Reliable external API integration
- User permission model for data fetching (good UX)
- Smooth interactions and hover effects
- One-shot success (~5 min)

**Struggles**:
- None observed in Day 1 test

**Best For**: Production-quality implementations, external APIs, polished UIs
**Avoid For**: Nothing yet - top performer
**Human Oversight**: Approved the data-fetch prompt and logged the mobile overlap issue for follow-up.

---

### Bolt.new
**Successes**:
- Strong data handling (7,734 earthquakes displayed)
- Shows detailed stats (max magnitude, avg depth, 24h count)
- Robust implementation despite console errors
- Fast generation (~5 min)
- Good Leaflet integration
- Full deployment included

**Struggles**:
- Some SVG circle radius errors in console (non-breaking)
- UI slightly more generic/Tailwind-y

**Best For**: Data-heavy applications, robust implementations, detailed analytics
**Avoid For**: Nothing major - solid all-around
**Human Oversight**: Flagged the oversized mobile legend and left notes to revisit the layout later.

---

### V0.dev
**Successes**:
- Points render correctly
- Color coding works
- One-click error fixing available

**Struggles**:
- Initial error prevented page load
- Missing basemap (just colored points on white)
- Layout issues
- Required iteration (~10 min total)
- Shows "0 earthquakes" despite displaying points

**Best For**: UI-focused designs where iteration is acceptable
**Avoid For**: One-shot requirements, complex mapping needs
**Human Oversight**: Triggered the platform auto-fix and documented the missing basemap for manual coding later.

---

### Google AI Studio Apps
**Successes**:
- ⭐ Surprise performer - works great!
- Clean, minimal UI
- All core features present
- Fast generation (~5 min)
- Reliable data handling
- Good Gemini-based implementation

**Struggles**:
- Requires Google account/sign-in to view
- Less flashy than competitors

**Best For**: Functional, minimal implementations; Google ecosystem projects
**Avoid For**: Public sharing without Google account barriers
**Human Oversight**: Noted the alignment quirks and bland default styling for a future polish pass.

---

### Lovable
**Successes**:
- Fast one-shot success (~5 min)
- Clean modern Tailwind design
- Professional appearance
- Reliable implementation
- Similar quality to Bolt.new
- Good legend and UI elements

**Struggles**:
- None observed - worked well

**Best For**: Fast, clean implementations; modern web apps
**Avoid For**: Nothing yet - top tier performer
**Human Oversight**: Captured desktop/mobile screenshots and jotted down legend wording to finesse later.

---

### MagicPatterns
**Successes**:
- ⭐ Surprise good performer
- Tested both Tailwind and Chakra UI variants - both worked well
- Fast generation (~5 min each)
- Professional, polished designs
- Reliable data handling
- Great legend and UI components

**Struggles**:
- Tooltips not as polished as top 3

**Best For**: Component-based designs; multiple UI library options
**Avoid For**: When tooltip quality is critical
**Human Oversight**: Compared the Tailwind vs. Chakra variants and kept the stronger option for documentation.

---

### Base44
**Successes**:
- 🎨 Top-tier visual design - competes with Bolt & ChatGPT
- 📊 **Best stats dashboard** of all platforms (total, max mag, avg depth, updated time)
- Clean dark theme
- 6 depth categories (most detailed)
- Fast one-shot success (~5 min)
- Strong responsive design
- Professional polish

**Struggles**:
- Avg Depth calculation bug (shows 0.0km instead of ~21km)
- Tooltip design falls behind Lovable, Bolt, ChatGPT
- Less documentation than established platforms

**Best For**: Data dashboards, dark-themed projects, visual presentations, comprehensive stats
**Avoid For**: When every calculation must be accurate (verify data!), when tooltip quality is critical
**Human Oversight**: Noted the average-depth bug and added a reminder to clean up the dashboard copy later.

---

### Firebase Studio
**Successes**:
- 🔥 **Full VS Code editor in browser** - standout feature
- Seamless switch between AI generation and code editing
- Firebase backend integration ready (hosting, auth, database)
- Good API key UX for Gemini key (special prompt box)
- Google Maps integration
- Production-ready Firebase hosting

**Struggles**:
- Requires 2 API keys (Gemini + Google Maps)
- Google Maps key not prompted (had to add manually via code editor)
- Bland default Google Maps basemap
- Didn't follow custom styling directions
- Took longer (~15 min due to API key setup)

**Best For**: Projects needing Firebase features, developers comfortable with code, production deployments, when full control matters
**Avoid For**: Quick prototypes (API key friction), non-developers, beautiful default designs
**Human Oversight**: Entered the required API keys and noted the need to improve the default styling and copy.

---

### Google Gemini Canvas (Artifacts)
**Successes**:
- Good UI structure
- Fast initial generation
- Was close to working - just needed external API integration fixed

**Struggles**:
- ⚠️ **Had errors with external APIs when tested** (but was close!)
- Similar issues to Claude Artifacts
- External API data loading problems
- Requires sign-in to view shared artifacts
- Multiple iterations needed

**Best For**: Google ecosystem work with embedded data, scenarios where APIs aren't needed
**Avoid For**: External API integrations (for now), public sharing
**Note**: May work well in other scenarios - worth retrying on future days
**Human Oversight**: Captured the failing requests and logged Gemini's sandbox limitation for future planning.

---

### Cursor
**Successes**:
- *Not tested Day 1*

**Struggles**:
- *Not tested Day 1*

**Best For**: *TBD*
**Avoid For**: *TBD*

---

### Windsurf
**Successes**:
- *Not tested Day 1*

**Struggles**:
- *Not tested Day 1*

**Best For**: *TBD*
**Avoid For**: *TBD*

---

## Platform-Specific Insights

### Prompting Strategies That Work

#### Universal (Work Everywhere)
- Clear data source URLs (USGS API worked well)
- Specific visual requirements (size by X, color by Y)
- Standard formats (GeoJSON is universally supported)
- Single HTML file deliverable (when possible)

#### Platform-Specific
- **ChatGPT Canvas**: Prompt will ask for permission before external fetches - this is normal
- **Bolt.new**: Can handle complex stats and analytics - lean into data-heavy features
- **Base44**: Good for stats dashboards - verify calculations!
- **Firebase Studio**: Be ready with API keys (Gemini + Google Maps), use code editor for fixes
- **V0.dev**: May need iteration - be prepared to refine
- **Claude/Gemini Artifacts**: Struggled with external APIs, but were close - use embedded data instead when possible

---

### Iteration Patterns

**Fast Iterators** (Quick to refine):
- V0.dev (one-click fixes available)
- ChatGPT Canvas (responsive to feedback)

**One-Shot Winners** (Get it right first time):
- Bolt.new
- Lovable
- Base44
- MagicPatterns
- Google AI Studio

**Struggled but Close** (May work in other scenarios):
- Claude Artifacts (sandbox issues with external APIs, but UI/design was good)
- Google Gemini Canvas (similar struggles to Claude, but was close)

---

## Weekly Insights

### Week 1 (Nov 1-8): System Calibration

**Day 1 (Points): Earthquake Visualization**

**Top Performers** (three-way tie):
1. ChatGPT Canvas - Best UI polish, great tooltips
2. Bolt.new - Best data handling, solid tooltips
3. Lovable - Fast, clean, good tooltips

**Strong Contenders**:
- Base44 - Best stats dashboard, top-tier visual design
- Firebase Studio - Full VS Code editor (standout feature)
- MagicPatterns - Surprise solid performance

**Biggest Surprises**:
- MagicPatterns performed well (both variants)
- Google AI Studio delivered quietly solid implementation
- Claude & Gemini Artifacts struggled with external APIs (but were close - UI worked, just API issues)

**Areas for Improvement**:
- Claude Artifacts couldn't handle external library loading (but UI/design was good)
- Google Gemini Canvas had similar API issues to Claude (but was close to working)
- V0.dev needed iteration despite reputation

**Key Learning**: Top chat models ≠ best code generation platforms for web artifacts. However, Claude & Gemini Artifacts showed promise - they were close and may work well with embedded data or in other scenarios.

---

### Week 2 (Nov 9-16): Optimization
*To be filled*

---

### Week 3 (Nov 17-23): Deep Comparison
*To be filled*

---

### Week 4 (Nov 24-30): Strong Finish
*To be filled*

---

## Final Rankings

*To be completed at end of challenge (Dec 1)*

### Overall Champion
🏆 **TBD** (Currently: ChatGPT Canvas leading)

### Category Winners
- **Speed**: Bolt.new / Lovable / MagicPatterns (tie at ~5 min)
- **Quality**: ChatGPT Canvas
- **Versatility**: TBD (need more days)
- **Data Handling**: Bolt.new
- **Design**: ChatGPT Canvas
- **3D/Advanced**: TBD (not tested yet)

### Most Improved
*Platform that got better over time*: TBD

### Biggest Surprise
**MagicPatterns** - Performed well with both variants working

---

## Recommendations for Future Projects

**If you need...**
- **Quick prototypes**: Bolt.new, Lovable, or MagicPatterns (~5 min)
- **Production-ready**: ChatGPT Canvas (best polish)
- **Beautiful design**: ChatGPT Canvas, Lovable
- **Complex data**: Bolt.new (solid stats/analytics)
- **3D visualization**: TBD
- **Learning/experimentation**: Multiple platforms (this project!)

**Avoid for external APIs** (but worth retrying in other scenarios): Claude Artifacts, Google Gemini Canvas (they were close!)

---

**Last Updated**: November 2, 2025
**Days Completed**: 1/30
**Platforms Tested**: 9 unique platforms (11 implementations including variants)
**Total Implementations**: 9
