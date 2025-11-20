# Day 19 Implementation Prompt - Tissot's Indicatrix

**Theme:** Projections (Technical/GIS Day)
**Concept:** Truth Teller - "Tissot's Lie Detector: Mercator vs The World"
**Platform:** Gemini 3 Pro + Google AI Studio (conversational approach)
**Selected by:** Danny (Human)

---

## Gemini 3 Optimized Prompt

**Note:** This is the second projection visualization for Day 19. The first was "Shape Shifter" (morphing projections). This one focuses on making distortion visible through Tissot's indicatrices.

Based on Day 18 performance, Gemini 3 excels at:
- Smooth animations and transitions
- Real data integration from CDN sources
- Mobile-first responsive design
- Clean, educational UI

**Critical success factor:** The "breathing circles" animation - watching distorted ellipses deflate into proper circles as you transition from Mercator to Equal Earth.

---

```
I want to create a second projection visualization for GIS Day - this one focuses on making map distortion visible.

**Concept: "Tissot's Lie Detector: Mercator vs The World"**

Create an interactive split-screen or toggle visualization comparing Mercator projection with an Equal Area projection (like Equal Earth or Mollweide). The key is overlaying Tissot's indicatrices - a grid of circles that reveal where maps distort area and shape.

**The Core Experience:**

Show two projections side-by-side (or toggle between them):
- **Mercator** - the familiar Google Maps projection
- **Equal Area** (Equal Earth or Mollweide) - preserves area accurately

Overlay both maps with identical Tissot circles (red circles, evenly spaced grid). The circles reveal the distortion:
- On Mercator: Circles near the poles stretch into massive ellipses (Greenland looks huge)
- On Equal Area: Circles stay relatively circular and constant size (accurate area representation)

**The Critical Animation - "Breathing Circles":**

If you use a slider to transition between projections, the distorted ellipses at the poles should smoothly "deflate" into proper small circles. This animation makes the distortion visible - you're watching the map's lies get corrected in real-time.

The animation itself teaches: same circles, different mathematical transformations, visible distortion.

**Controls & Interaction:**

- **Toggle or slider** - switch between Mercator and Equal Area (or smoothly transition)
- **Side-by-side view** - show both projections simultaneously for direct comparison
- Maybe both options? Toggle for quick switch, slider for smooth animation

**Visual Design:**

- Red circles for Tissot indicatrices (translucent so you can see the map underneath)
- Clean, educational layout - this is about teaching distortion
- Brief text explaining what Tissot circles show
- Mobile responsive (your strength from Day 18)
- Maybe a dark theme to make the red circles pop?

**Educational Layer:**

- Title: "Tissot's Lie Detector: Mercator vs The World"
- Brief explanation: "These circles reveal where maps distort. Same circles, different projections, visible lies."
- Point out Greenland specifically: "Greenland looks the size of Africa on Mercator. It's not."
- GIS Day message: "Maps are measurements, not truth. This shows the distortion."

**Technical Approach:**

- Use **D3.js** with d3-geo (standard library has Mercator and Equal Earth)
- **Data:** Fetch from CDN: `https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json`
  - TopoJSON format, use topojson-client to extract
- **Tissot circles:** Generate programmatically with `d3.geoCircle()`
  - Create a grid (every 20 degrees longitude × 15 degrees latitude, or similar)
  - Fixed radius (like 2.5 degrees or 500km)
  - Generate on the fly - no data file needed
- For smooth transition: use D3 path tweening if doing slider animation
- SVG rendering is fine

**What Success Looks Like:**

When someone drags the slider from Mercator to Equal Earth, they see those giant distorted blobs at the poles shrink into proper circles. It's instantly clear: "Oh, Greenland isn't actually that big." The animation teaches without needing paragraphs of explanation.

**Flexibility:**

Start with Mercator vs Equal Earth (2 projections). But design it so we could add more projections later (Robinson, Winkel Tripel, etc.) if we want to expand the comparison.

**Don't Stress About:**
- Perfect circle placement - a regular grid is fine
- Complex distortion calculations - the visual comparison does the teaching
- Detailed explanations - the circles speak for themselves

**Do Prioritize:**
- Smooth "breathing circles" animation (this is the whole point!)
- Clear side-by-side comparison
- Mobile works well
- Fast load time (CDN data)
- That "aha" moment when distortion becomes visible

This is GIS Day - let's show people what maps are hiding!

Ready to build?
```

---

## Gemini 3 Strengths to Leverage

**From Day 18 SeismicWatch success:**
1. Timeline controls - smooth slider implementation
2. Real-time animation - smooth transitions
3. Mobile-first - responsive by default

**From Day 18 Climate Migration success:**
1. Side-by-side comparison - choropleth with controls
2. Educational messaging - clear explanations
3. Dark theme aesthetics - appropriate visual mood

**Expected iteration pattern:**
- **Prompt 1:** Generate complete baseline with Mercator vs Equal Earth comparison
- **Prompt 2:** Refine animation (smooth "breathing circles" transition)
- **Prompt 3:** Polish (add more projections if desired, improve labels)
- **Target:** Grade A in 2-3 prompts

---

## Technical Notes

**Why this prompt structure works for Gemini 3:**

1. **Conversational tone:** "I want to create..." vs requirements list
2. **Visual goals emphasized:** "breathing circles," "deflate," "aha moment"
3. **Flexibility built in:** "design it so we could add more projections later"
4. **Leverage proven strengths:** Slider controls (SeismicWatch pattern)
5. **CDN data strategy:** Uses same approach as Shape Shifter
6. **Mobile priority explicit:** Called out as critical
7. **Educational focus:** Clear teaching moment

**Deployment strategy:**
- Simple stack (D3 + vanilla JS) to avoid React dependency issues
- CDN data to avoid file upload problems
- Test preview thoroughly (50% deployment success rate concern)
- Keep dependencies minimal

---

## Human Direction Log

**Strategic decisions:**
- Selected Gemini 3's "Truth Teller" as second projection visualization
- Focus on making distortion visible (complements morphing animation from Shape Shifter)
- Design flexible for adding more projections later
- Using Gemini 3 + AI Studio exclusively
- Conversational prompting approach

**Key success criteria:**
- **Primary:** "Breathing circles" animation works smoothly
- **Secondary:** Clear side-by-side comparison
- **Tertiary:** Mobile responsive, fast load, educational messaging

**Why this matters:**
- Complements Shape Shifter (shows transformation vs shows distortion)
- Classic GIS Day lesson: making invisible distortion visible
- Tests Gemini 3's animation capabilities with different type of transition
- Educational value: proves maps lie about area

---

**Last Updated:** November 19, 2025
**Status:** Ready for Gemini 3 + Google AI Studio implementation


