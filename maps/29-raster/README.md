# Day 29 · Raster

**Theme focus**: Raster data: satellite imagery, DEMs, land cover, pixel-based art.
**Status**: Complete
**Date**: November 29, 2025

## Chosen Concept

**"Rorschach Rain: Retro CRT Storm Patterns"**

Enhanced from Gemini's "Retro CRT Storm Tracker" concept. Transforms real-time precipitation radar into ink blot/Rorschach test-style visualizations with retro CRT monitor aesthetic. Uses simple blob detection (primary) or optional SAM2 AI segmentation to detect precipitation patterns, then mirrors and stylizes them as organic ink blot shapes.

## Platform Results

| Platform | Grade | Status | Notes |
|----------|-------|--------|-------|
| Google AntiGravity | A | ✅ Success | New tool discovery - worked well, added features (local + cloud detection) |
| Gemini Canvas | B+ | ✅ Success | Almost worked first try, color scheme issue fixed, pan/zoom issues resolved |
| Google AI Studio | B+ | ✅ Success | Had errors but got to working state, cool local object detection algorithm |
| v0 | B | ✅ Success | Pan/zoom issues, choppy animation, inkblot needs improvement |
| ChatGPT Canvas | C- | ⚠️ Partial | Nice UI but map/data not showing after multiple tries |
| Claude Artifact | C- | ⚠️ Partial | Shows ink blots but not real rain or map, pan/zoom issues |
| Base44 | F | ❌ Failed | Started working but stuck in error, blank screen |

## Key Observations

**New Tool Discovery: Google AntiGravity**
- Google's new AI-powered IDE (similar to Cursor)
- Made by Windsurf team (almost acquired by OpenAI but not quite, then hired by Google instead)
- Downloadable Mac app, works outside browser
- Good for larger projects with more control
- Automated browser control for debugging/testing
- Similar results to Gemini 3 + Google AI Studio
- Spent most development time here adding features
- **Deployment note:** Doesn't have simple one-click deploy, so set up GitHub repo and deployed to GitHub Pages. AI made the setup easy.

**Common Issues Across Platforms:**
- Pan/zoom issues with rain raster staying locked to map (most platforms had this initially)
- Most could be fixed with follow-up prompts
- Color scheme visibility issues (dark rain on dark map)
- Animation playback choppiness (improved with prompts)

**AntiGravity Features Added:**
- Local object detection (simple algorithm with interesting results)
- Cloud detection via Gemini Vision API (more thorough analysis)
- Area selection for targeted rain analysis
- Responsive UI/UX improvements
- Image generation capabilities

## Human Review

Tried multiple platforms initially, but once AntiGravity showed promise, focused development time there to add features and improvements. The local + cloud detection approach worked well - simple local algorithm for quick results, Gemini Vision for deeper analysis.

## Files

- `IDEATION-PROMPTS.md` — unified prompt sent to all platforms
- `IDEATION-RESPONSES.md` — full responses from Claude, ChatGPT, Gemini
- `IMPLEMENTATION-PROMPT.md` — the prompt used for implementation
- `LAUNCH-TRACKER.md` — detailed platform results and human guidance log
- `index.html` — HTML showcase page

