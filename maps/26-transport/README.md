# Day 26 · Transport

**Theme focus**: Transit networks, mobility patterns, temporal aspects of transportation.
**Status**: Complete

## Chosen Concept

**Transit Desert Clock** (Claude's creative/unusual approach)

A map-first visualization showing when parts of a city lose transit access over a 24-hour cycle. As the hour slider advances, areas with active service stay lit while areas without service dim and get labeled as "transit deserts." The map reveals temporal inequality and when communities become stranded without transit access.

**Why chosen**: Flips the typical transit map narrative to emphasize temporal inequality. The concept is emotionally resonant, works well with standardized GTFS data, and tells a clear story about when and where communities lose mobility access.

**Data source**: TriMet GTFS static feed (https://developer.trimet.org/schedule/gtfs.zip) with embedded fallback sample data for offline functionality

## Platform Results

| Platform | Grade | Status | Notes |
|----------|-------|--------|-------|
| Google AI Studio | A- | Success | Strong implementation with smooth animations, GTFS upload support, data caching, and good visual distinction between active/inactive/desert zones. Required minimal fixes, mostly feature additions. |
| Gemini Canvas | B | Success | Worked first try with fallback data, clean implementation. Successfully added GTFS upload functionality when requested. |
| v0.dev | B | Success | Worked first try with fallback data. Did a nice job showing active vs inactive vs not covered at all with clear visual distinction. Successfully added GTFS upload functionality. |
| Claude Artifacts | C | Partial Success | Mostly worked but took multiple fixes. Zip file upload doesn't appear in UI despite AI claiming it was fixed. Base map stopped working. Wrong colors for inactive service area. As a positive, it had cool UI design styling choices. |
| base44 | C- | Partial Success | Almost worked but there's an issue with the map tiles displaying properly, some UI elements overlapping, and not showing the data properly. |
| ChatGPT Canvas | D | Partial Success | Got a UI up and running, but no data or map, even after a couple tries to fix it. |

## Key Observations

- **50/50 split**: Exactly half the platforms succeeded (3) and half had partial success (3). No complete failures.
- **Google AI Studio standout**: Handled complex requirements very well, including smooth minute-by-minute animations (not just hourly), GTFS upload with data persistence, and sophisticated visual states. Went beyond basic requirements.
- **GTFS upload success**: Multiple platforms (Gemini, v0, AI Studio) successfully added GTFS zip upload functionality when requested.
- **File upload limitations**: Automated browsers can't test file uploads due to security restrictions, so GTFS upload functionality needed manual testing.
- **Fallback data essential**: All platforms needed embedded fallback data since GTFS fetch failed - good error handling across platforms.

## Human Review

Work completed in one session (~1.5 hours). All platforms received the same implementation prompt. Human guidance included: requesting GTFS zip file upload functionality (Gemini, v0, AI Studio), asking AI Studio to add smooth animations based on data granularity, suggesting separate color for inactive zones, and requesting data caching for persistence. Fixed color gaps issue in AI Studio. Attempted to fix issues in Claude Artifact (zip upload, base map, colors) but zip upload not visible in UI and base map still broken.

## Files

- `IDEATION-PROMPTS.md` — unified prompt sent to all platforms
- `IDEATION-RESPONSES.md` — full responses from Claude, ChatGPT, Gemini
- `IMPLEMENTATION-PROMPT.md` — the prompt used for implementation
- `LAUNCH-TRACKER.md` — detailed platform results and human guidance log
- `index.html` — HTML showcase page

