# 30-Day Map Challenge 2025: AI-Powered Mapping Experiment

Live site: [https://dannybauman.github.io/30-day-map-challenge-2025/](https://dannybauman.github.io/30-day-map-challenge-2025/)

![Day 1 HTML page - Top](maps/01-points/html-screenshot-top.png)

![Day 1 HTML page - Top 3 Results](maps/01-points/html-screenshot-top3.png)

## Project Overview

For the **[#30DayMapChallenge](https://30daymapchallenge.com/)**, I wanted to use AI as both creative partner and primary developer. 30 unique map themes, one per day, and my project explores how top AI models and a variety of AI-first development platforms can quickly ideate and bulid map ideas into prototypes. And to see a Nov 2025 snapshot of how good these AI tools are for something like this.

**Idea**: Prompt across AI platforms, let them work in parallel, use AI to help journal and report everything.

I'm approaching this with the 30 Day Map Challenge [code of conduct](https://30daymapchallenge.com/#code-of-conduct) in mind: I'm publishing only my own work, sharing clear data sources, and using AI to evaluate which tools genuinely help human mapmakers instead of letting them replace the creative joy of mapmaking. Huge respect and gratitude to the artists, cartographers, designers, software engineers, storytellers, and everyone else crafting maps without AI - your craft sets the bar and keeps this community grounded in the social and environmental realities that careless AI use can ignore. My goal is to document the good, discard the noise, and feed those lessons back into workflows that stay useful for people.

---

## Parallel Processing Methodology

### The Multi-Platform Approach

Instead of building 1 map per day, my hope is to easily build like 10-20! I'll use multiple AI models to help come up with ideas, then choose 1-2 to run through a bunch of AI development platforms simultaneously. This way it'll show a comparison on how different tools handle the same geospatial prototyping task.

### To Vibe Code or Not To Vibe Code
For this I'll mostly be vibe coding with minimal care for code quality or longevity, which is NOT right for most projects. I'm treating this as a rapid prototyping lab to watch how well AI-assisted development performs in between the human craft steps.

My earlier code of conduct note is my guardrail: I only ship work I personally guide, I cite every dataset and call out every AI-based contribution, and I log when AI shortcuts actually cost more than they save. Documenting those wins and misses should make it easier for anyone to decide what tools deserve their time.

Vibe coding is just one way to use AI to help write software. People are inventing new workflows daily, from exploratory prototypes to deep, targeted engineering. My goal here is to surface the useful patterns, flag the dead ends, and keep the focus on the human creativity that makes the challenge magical.

### The Workflow

**Phase 1: Ideation & Concept Selection**
- Prompt ChatGPT, Claude, and Gemini models with the daily theme
- Review generated concepts, pick 1-2 best ideas
- Draft one implementation prompt
- Add any theme-specific data requirements

**Phase 2: Parallel Platform Launch**
- Open 5-15 AI development platforms in browser tabs (ChatGPT, Claude, Gemini, v0, bolt, lovable, etc.)
- Copy/paste same prompt to each platform
- Hit GO on all of them simultaneously
- Let them work in parallel, see how it goes

**Phase 3: Review & Iteration**
- Check as they generate results
- Fix errors up with up to 3 tries max
- Screenshot all attempts, working or not
- Deploy code if possible for sharing
- Optional: Iterate on promising implementations

**Phase 4: Documentation & Analysis**
- Create day folder with subfolders for each platform
- Document what worked/failed per platform
- Note patterns, strengths, and failure modes
- Commit everything with platform comparison notes
- Create a visual HTML report for each day to share the results and my thoughts

### Why This Approach?

**Parallel AI**: Multiple AIs working simultaneously generate comparative data efficiently

**Real Comparison**: See which platforms excel at which map types and why

**Push the Limits**: Even failures are valuable documentation of platform limitations

**Lots of Examples**: Generate 5-15 implementations per theme instead of just one

**See How Platforms Compare**: Same prompt, same concept makes for a balanced comparison across platforms

---

## AI Tools Strategy (Multi-Platform Approach)

### Ideation Models (Use 3 for variety)
- **Anthropic Claude Sonnet 4.5**
- **OpenAI GPT-5 Thinking**
- **Google Gemini 2.5 Pro**

### Implementation Platforms (Use 5-15 Daily)

**Tier 1 - Fast Visual Prototypes**
- **Claude Artifacts** - Chat-based frontend prototypes
- **Google Gemini Canvas** - Chat-based frontend prototypes
- **ChatGPT Canvas** - Chat-based frontend prototypes
- **Bolt.new** - Full deployments, handles data files well
- **V0.dev** - Nice UI, design-focused maps
- **Google AI Studio Apps** - Gemini's larger developer platform, new but promising


**Tier 2 - Full-Stack & Advanced**
- **Lovable** - Full apps with multiple pages
- **Cursor** - AI powered IDE, new features added frequently
- **Windsurf** - Agentic coding, good for complex builds

**Tier 3 - Specialized Tools**
- **MagicPatterns** - Tuned well for well-designed prototypes, component libraries, UI systems
- **GitHub Spark** - Quick demos with GitHub integration
- **Firebase Studio** - Part of a nice big Firebase ecosystem of dev tools
- **Google Sketch** - Quick mockups before coding
- **Base 44** - New to me, heard it's good
- **BMAD Method** - Workflow-based approach

---

## GitHub Repository Structure (Multi-Platform Edition)

```
30-day-map-challenge-2025/
│
├── README.md                          # This document
├── DAILY-LOG.md                       # Quick daily tracker
├── THEMES.md                          # All 30 themes + my notes
├── PLATFORM-TRACKER.md                # Which platforms succeeded per theme
│
├── templates/
│   ├── idea-prompts/
│   │   ├── claude-ideation.txt
│   │   ├── gpt-ideation.txt
│   │   └── gemini-ideation.txt
│   ├── implementation-base.txt        # Core prompt template
│   └── daily-doc-template.md          # Fast copy/paste docs
│
├── maps/
│   ├── 01-points/
│   │   ├── README.md                  # Overview + platform comparison
│   │   ├── concept.md                 # The chosen idea(s)
│   │   ├── claude-artifacts/
│   │   │   ├── code.html
│   │   │   └── screenshot.png
│   │   ├── chatgpt-canvas/
│   │   │   ├── code.html
│   │   │   └── screenshot.png
│   │   ├── bolt-new/
│   │   │   ├── deployed-url.txt
│   │   │   └── screenshot.png
│   │   ├── v0-dev/
│   │   ├── lovable/
│   │   └── (other platforms)
│   ├── 02-lines/
│   └── ... (through 30)
│
└── analysis/
    ├── platform-strengths.md          # Which excels at what
    ├── failure-patterns.md            # Common issues per platform
    ├── weekly-reflections.md          # Lessons learned
    └── final-comparison.md            # Month-end platform rankings
```

---

## HTML Pages for Each Day

Each day includes a simple HTML page (`index.html`) for easy browsing and sharing:

**What's included:**
- Quick stats and platform comparison
- Ideation concepts from each AI
- Platform results with live demo links
- Key insights and lessons learned
- Editorial thoughts

**How to use:**
- Template: `templates/day-showcase-template.html`
- Simple to fill in - just HTML/Bootstrap
- Makes results easy to browse and share on social media

**View Day 1**: [https://dannybauman.github.io/30-day-map-challenge-2025/maps/01-points/index.html](https://dannybauman.github.io/30-day-map-challenge-2025/maps/01-points/index.html)

---

## Daily Workflow

### Step-by-Step Process

**Step 1: Ideation**
- Ask Claude, ChatGPT, and Gemini for 2 ideas for the current day's map theme
- Review results, pick best idea(s)

**Step 2: Prompt Preparation**
- Open `implementation-base.txt` template
- Customize with: theme, chosen concept, data source
- Copy the prompt to clipboard

**Step 3: Parallel Platform Launch**
Open in separate tabs:
1. Claude Artifacts (⚠️ struggles with external APIs, but close)
2. Google Gemini Canvas (⚠️ struggles with external APIs, but was close)
3. ChatGPT Canvas
4. Bolt.new
5. V0.dev
6. Google AI Studio Apps
7. Lovable
8. Others...

Paste prompt in each → Click generate → Move to next

**Step 4: Active Monitoring & Iteration**
- Check as they generate results
- If one fails early, note what went wrong
- Record any manual fixes (data cleaning, styling tweaks, bug patches) as you apply them
- Screenshot everything as you go

**Step 5: Collection & Organization**
- Deploy code if possible
- Create platform subfolders
- Save screenshots with consistent naming
- Create quick list of what worked/failed

**Step 6: Documentation**
- Create main README from template
- Fill in platform results (names + status + insights)
- Update DAILY-LOG.md
- Capture a short “Human review” note that calls out what you verified or edited manually
- Create `index.html` page for easy sharing

---

## Deployment & Hosting

### Build the public site
- Requires Node.js 18+ (no other dependencies).
- Run `node scripts/build-site.mjs` to generate the deployable site in `docs/`.
- The script copies each `maps/<day>` directory (with an `index.html`) into `docs/maps/`, publishes shared assets to `docs/site-assets/`, and emits a `days.json` manifest used by the day selector.
- `docs/index.html` is rebuilt every run with an overview of published days; avoid editing files inside `docs/` by hand.
- To temporarily make a specific day the homepage, set `DEFAULT_DAY=<day-slug>` before running the build (e.g., `DEFAULT_DAY=01-points node scripts/build-site.mjs`). Clear the variable to switch back to the overview grid.

### Publish with GitHub Pages
- In the repository settings, enable GitHub Pages using the `main` branch and the `/docs` folder.
- Push the updated `docs/` directory whenever you add or edit a day page; GitHub Pages will deploy the latest build automatically.
- The generated site uses relative paths, so it works at both `https://<user>.github.io/<repo>/` and local `file://` previews.

### Adding a new day
- Create the new HTML page at `maps/<day-slug>/index.html` (using `templates/day-showcase-template.html`).
- Ensure the `<script>` tag at the end of the page has `data-day="<day-slug>"`, `data-manifest="../../days.json"`, and `data-base-path="../../"` so navigation works locally and in production.
- Re-run `node scripts/build-site.mjs` after adding or updating any day so the manifest, docs build, and navigation stay in sync.

---

## Grading Criteria

**Success Grades (A, B, C) - Full Success:**
- **A (Excellent)**: Fast, beautiful, fully functional, great mobile UX. Map renders correctly, all features work, responsive design is strong.
- **B (Good)**: Works well, minor issues (e.g., tooltip contrast, legend style), responsive. Map is functional and usable.
- **C (OK)**: Usable but significant issues (performance problems, UX issues like sluggish pan/zoom). Map works but has notable problems.

**Partial Success (Grade D):**
- Major functionality broken but some elements work. Examples:
  - UI/legends generated but map doesn't load (CSP/CORS issues)
  - Data loads but visualization broken
  - Map loads but interaction doesn't work
- **Key point**: Even CSP/CORS failures that generate UI/legends get Grade D (Partial Success), not F. If it generates something useful, it's at least D.

**Failed (Grade F):**
- No code generated at all (platform error, completely unusable - rare). Examples:
  - Platform returns "internal error" and never generates code
  - Platform crashes before any output
- **Key distinction**: Grade F is reserved for when no code/output is generated at all (platform infrastructure failures), not for code that doesn't work properly.

---

## Code of Conduct Compliance

Per the [official challenge](https://30daymapchallenge.com/):
- ✅ All maps are original work (AI-assisted, human-directed)
- ✅ Data sources credited in every README
- ✅ Transparent about AI usage and methodology
- ✅ Focus on creativity, not just automation
- ✅ **AI handles implementation, I handle curation and creative direction**
- ✅ Every map includes a clearly documented human review pass before publishing

**Philosophy**: This project uses AI as a *development multiplier*, not a replacement for human creativity. The insight is in concept selection, platform comparison, and pattern recognition—the AI just codes faster than I can.

---

## Links & Resources

- **Official Challenge**: [30daymapchallenge.com](https://30daymapchallenge.com/)
- **Hashtag**: #30DayMapChallenge
- **Repository**: https://github.com/[your-username]/30-day-map-challenge-2025

### Quick Data Sources
- [OpenStreetMap](https://www.openstreetmap.org/) + [Overpass API](https://overpass-turbo.eu/)
- [Natural Earth](https://www.naturalearthdata.com/)
- [Overture Maps](https://overturemaps.org/)
- [Free GIS Data](https://freegisdata.rtwilson.com/)

---

## The Real Goal

This is a comparative AI and usability research project within a mapping challenge:

1. **Benchmark**: How do 15+ AI platforms handle identical geospatial tasks?
2. **Document**: What patterns emerge in success/failure across tools?
3. **Share**: Create open-source examples others can learn from
4. **Learn**: Build intuition for which AI tools excel where
5. **Contribute**: 100+ map examples to the mapping community

**The key insight**: Basically, it works! You can quickly ideate and prototype at a fairly high quality level with the help of AI. Each platform has strengths, weaknesses, and quirks, but most of these tools quickly helped me build something cool or interesting or a starting point for something useful.

---

**Date**: November, 2025
**By**: Danny Bauman

*Let's use a fun map challenge to make an AI development platform experiment.* 🗺️🤖✨
