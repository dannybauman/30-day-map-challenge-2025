# Day 24 · Places and their names — Launch Tracker

| Platform | Status (A/B/C/D/F) | Notes | Human guidance given? |
| --- | --- | --- | --- |
| Google AI Studio Apps | A- | Strong! Built sophisticated map with dual-source data, generative AI calligraphy art, country masking, caching. Required minimal fixes, mostly feature additions. | Added more cities/languages, refined prompts for image generation, implemented country masking feature |
| Gemini Canvas | B | Worked first try, solid implementation. Added more cities and languages per request. | Asked to add more cities and languages |
| Base44 | B- | Good first try, minor UI issues with city icons (weird ovals) and one non-clickable element. | None |
| V0.dev | C | OK but had errors initially. Fixed zoom/pan and label positioning issues. | Fixed errors, corrected zoom/pan, fixed label positioning |
| Claude Artifacts | C- | Was working but got stuck at loading when trying to fetch data from API. | Tried getting it to fetch data from API |
| ChatGPT Canvas | D | Close to working, UI up and running but buggy. Eventually started outputting JSON in UI which took over most of the interface. | None |
| Bolt.new | - | Not run (free tokens exhausted for this day) | - |
| Lovable | - | Not run | - |
| MagicPatterns | - | Not run | - |

Notes:
- Bolt.new: not run (free tokens exhausted for this day).
- All platforms tried Overpass API but none succeeded - all fell back to hardcoded data. Curious why even Gemini 3 didn't get Overpass working.
- Work completed over two days: initial platform testing on first day, then wrapped up next day with fixes and feature additions (mostly on AI Studio version).

Legend: “Human guidance given?” should record specific nudges you provided (e.g., clarified data source, asked to swap basemap, requested auto image generation).
