# 30-Day Map Challenge 2025: AI-Powered Cartography Experiment

## Project Overview

This project tackles the **#30DayMapChallenge** using AI as both creative partner and primary developer. Every November, the challenge presents 30 unique cartographic themes—one per day. With only **~1 hour available daily**, this project explores how frontier AI models and development platforms can transform map concepts into interactive visualizations with minimal human intervention.

**Core Philosophy**: Batch prompt across platforms, let them cook in parallel, document everything.

---

## The Reality: 1-Hour Parallel Processing Strategy

### The Batch Approach (Actually Faster!)

**Minutes 0-10**: Ideation & Prompt Crafting
- Query 2-3 AI models with daily theme
- Review generated concepts, pick 1-2 best ideas
- Craft ONE standardized implementation prompt
- Add any theme-specific data requirements

**Minutes 10-20**: Rapid-Fire Platform Launch
- Open 5-10 platforms in browser tabs
- **Copy/paste same prompt to each platform**
- Hit "generate" on all of them
- Let them cook while you grab coffee ☕

**Minutes 20-50**: Review & Curate (while AI works)
- Check platforms every 5-10 minutes
- Iterate on 2-3 most promising results
- Screenshot all attempts (working or not)
- Download code from successful implementations

**Minutes 50-60**: Documentation Blitz
- Create day folder with subfolders for each platform
- Quick README noting what worked/failed per platform
- Commit everything to GitHub
- One-sentence note in DAILY-LOG.md

### Why This Works

🚀 **Parallel Processing**: 10 AIs working simultaneously = 10x output in same time
🎯 **Real Comparison Data**: See which platforms excel at which map types
📊 **More Examples**: Even "failures" are valuable documentation
⚡ **No Extra Time**: Launching is fast, waiting is free, you curate results

---

## AI Tools Strategy (Multi-Platform Approach)

### Ideation Models (Use 2-3 for variety)
- **Claude Sonnet 4.5** ← Primary (best at creative + feasible)
- **GPT-4o** ← Secondary (good at technical detail)
- **Gemini 2.5 Pro** ← Wildcard (different perspective)

### Implementation Platforms (Use 5-10 Daily)

**Tier 1 - Fast Visual Prototypes (Use Every Day)**
1. **Claude Artifacts** - Fastest iteration, React + data viz
2. **ChatGPT Canvas** - Good for complex logic, iterative
3. **Bolt.new** - Full deployments, handles data files well
4. **V0.dev** - Beautiful UI, design-focused maps
5. **Google AI Studio Apps** - Gemini's platform, underrated

**Tier 2 - Full-Stack & Advanced (Use 2-3 per day)**
6. **Lovable** - Full apps with multiple pages
7. **Cursor** - When you need more control over code
8. **Windsurf** - Agentic coding, good for complex builds

**Tier 3 - Specialized Tools (Use When Relevant)**
10. **MagicPatterns** - Component libraries, UI systems
11. **GitHub Spark** - Quick demos with GitHub integration
12. **Firebase Studio** - Maps needing real-time data
13. **Google Sketch** - Quick mockups before coding
14. **Base 44** - Experimental, worth testing
15. **BMAD Method** - Workflow-based approach

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

## Streamlined Daily Workflow

### Actual Minute-by-Minute

**0:00-0:05** - Ideation Blitz
- Open Claude, paste: "Theme is [X]. Give me 3 creative + 2 straightforward map concepts"
- Open GPT-4o: same prompt
- Skim results, pick best idea

**0:05-0:10** - Prompt Preparation
- Open `implementation-base.txt` template
- Customize with: theme, chosen concept, data source
- Copy to clipboard

**0:10-0:15** - Launch All Platforms (Tab Blitz)
```
Open in separate tabs:
1. Claude Artifacts
2. ChatGPT Canvas
3. Bolt.new
4. V0.dev
5. Google AI Studio Apps
6. Lovable
7. Cursor (if complex)

Paste prompt in each → Click generate → Move to next
```

**0:15-0:40** - AI Cooking Time (Review & Iterate)
- Check platforms every 5 min
- If one looks good → do 1-2 iterations
- If one fails early → note why, move on
- Screenshot everything as you go

**0:40-0:55** - Collection & Organization
- Download/copy code from successful platforms
- Create platform subfolders
- Save screenshots with consistent names
- Note which worked/failed in quick list

**0:55-1:00** - Rapid Documentation
- Create main README from template
- Fill in platform results (just names + status)
- One-line update to DAILY-LOG.md
- Git commit with message: "Day X: [Theme] - [X] platforms"

---

## Success Metrics (Multi-Platform Edition)

### Minimum Viable Challenge
✅ **20 days completed** (67%)
✅ **100+ total map implementations** (5-10 per day × 20 days)
✅ **Every platform used at least 3 times**
✅ **Clear documentation of what works where**
✅ **Platform comparison matrix completed**

### Stretch Goals
🌟 **25+ days completed** (83%)
🌟 **150+ implementations** documented
🌟 **Comprehensive platform ranking** by map type
🌟 **Reusable prompt library** that others can use
🌟 **"State of AI Cartography 2025" analysis post**

### The Real Win
📊 **Comparative Data**: Which platforms excel at geospatial work?
🎯 **Pattern Recognition**: What prompts work universally vs. platform-specific?
💡 **Community Resource**: Open-source examples across 15+ platforms
🚀 **Personal Learning**: Deep understanding of AI dev tool landscape

---

## Code of Conduct Compliance

Per official challenge:
- ✅ All maps are original work (AI-assisted, human-directed)
- ✅ Data sources credited in every README
- ✅ Transparent about AI usage and methodology
- ✅ Focus on creativity, not just automation
- ✅ **AI handles implementation, I handle curation and creative direction**

**Philosophy**: This project uses AI as a *development multiplier*, not a replacement for human creativity. The insight is in concept selection, platform comparison, and pattern recognition—the AI just codes faster than I can.

---

## Links & Resources

- **Official Challenge**: https://30daymapchallenge.com/
- **Hashtag**: #30DayMapChallenge
- **Repository**: https://github.com/[your-username]/30-day-map-challenge-2025

### Quick Data Sources
- [OpenStreetMap](https://www.openstreetmap.org/) + [Overpass API](https://overpass-turbo.eu/)
- [Natural Earth](https://www.naturalearthdata.com/)
- [Overture Maps](https://overturemaps.org/)
- [Free GIS Data](https://freegisdata.rtwilson.com/)

---

## The Real Goal

This is a **comparative research project** disguised as a mapping challenge:

1. **Benchmark**: How do 15+ AI platforms handle identical geospatial tasks?
2. **Document**: What patterns emerge in success/failure across tools?
3. **Share**: Create open-source examples others can learn from
4. **Learn**: Build intuition for which AI tools excel where
5. **Contribute**: 100+ map examples to the cartography community

**The breakthrough insight**: With parallel processing, we can generate MORE comparative data in LESS time than traditional single-implementation approaches.

---

**Start Date**: November 1, 2025
**Estimated Output**: 20-30 days × 5-10 platforms = **100-300 map implementations**
**Time Investment**: ~1 hour/day = 30 hours total
**Value**: Comprehensive AI cartography platform analysis

*Let's turn one mapping challenge into the most extensive AI development platform comparison in geospatial visualization.* 🗺️🤖✨

