# Day 24 · Places and their names

**Theme focus**: Toponymy — fonts, label placement, languages, name meanings.
**Status**: Complete

## Chosen Concept

**Multilingual City Labels Map** (ChatGPT's straightforward/classic approach)

An interactive map displaying major world cities with labels in multiple languages (English, local language, and chosen secondary languages like French or Arabic). Users can switch between languages to see how place names appear in different scripts and languages.

**Why chosen**: Simple yet visually compelling, works well across platforms, and directly addresses the toponymy theme. The multilingual aspect showcases how the same places are named differently across cultures.

**Data source**: OpenStreetMap via Overpass API (tried but all platforms fell back to embedded hardcoded data due to API issues)

## Platform Results

| Platform | Grade | Status | Notes |
|----------|-------|--------|-------|
| Google AI Studio Apps | A- | Success | Strong implementation with dual-source data, generative AI calligraphy art, country masking, caching. Required minimal fixes, mostly feature additions. |
| Gemini Canvas | B | Success | Worked first try, solid implementation. Added more cities and languages per request. |
| Base44 | B- | Success | Good first try, minor UI issues with city icons (weird ovals) and one non-clickable element. |
| V0.dev | C | Success | OK but had errors initially. Fixed zoom/pan and label positioning issues. |
| Claude Artifacts | C- | Partial Success | Was working but got stuck at loading when trying to fetch data from API. |
| ChatGPT Canvas | D | Partial Success | Close to working, UI up and running but buggy. Eventually started outputting JSON in UI. |
| Bolt.new | - | Not run | Free tokens exhausted for this day |

## Key Observations

- **Overpass API issue**: All platforms tried Overpass API but none succeeded - all fell back to hardcoded data. Curious why even Gemini 3 didn't get Overpass working.
- **Google AI Studio standout**: The AI Studio implementation went above and beyond with generative AI features (calligraphy art for cities), country masking with textures, intelligent caching, and spatial deduplication. This was the most sophisticated implementation.
- **Consistent fallback pattern**: Despite API failures, all platforms successfully created working maps with embedded data, showing good error handling.
- **UI polish varies**: Base44 had minor visual issues (oval icons), while AI Studio had the most polished and feature-rich interface.

## Human Review

Work completed over two days: initial platform testing on first day, then wrapped up next day with fixes and feature additions (mostly on AI Studio version). All platforms received the same implementation prompt. Human guidance was minimal - mostly adding more cities/languages, fixing bugs, and requesting feature additions on the AI Studio version.

## Files
- `IDEATION-PROMPTS.md` — unified prompt sent to all platforms
- `IDEATION-RESPONSES.md` — full responses from Claude, ChatGPT, Gemini
- `IMPLEMENTATION-PROMPT.md` — the prompt used for implementation
- `LAUNCH-TRACKER.md` — detailed platform results and human guidance log
- `index.html` — HTML showcase page
