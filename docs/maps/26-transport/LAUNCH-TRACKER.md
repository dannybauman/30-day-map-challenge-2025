# Day 26: Transport - Platform Launch Tracker

**Concept:** Transit Desert Clock - Map showing when parts of a city lose transit access over a 24-hour cycle
**Date Started:** November 26, 2025
**Status:** 🔄 In Progress (Screenshots: 5/6 complete, Claude Artifact pending manual capture due to Cloudflare)

---

## Quick Launch Checklist

```
✅ Copy prompt from IMPLEMENTATION-PROMPT.md
✅ Open all platform tabs (see list below)
✅ Paste prompt → Generate on all platforms
✅ Start timer: check results every 5-10 minutes
⬜ Screenshot all attempts (success or failure)
⬜ Download code from successful implementations
⬜ Document results in table below
⬜ Create platform subfolder structure
⬜ Update README.md with results
```

---

## Platform Status Tracker

| Platform | Status | Grade | Time Spent | Notes | Screenshot | Code Saved |
|----------|--------|-------|------------|-------|------------|------------|
| ChatGPT Canvas | ⚠️ Partial | D | ~15 min | Got a UI up and running, but no data or map, even after a couple tries to fix it | ⬜ | ⬜ |
| Claude Artifact | ⚠️ Partial | C | ~20 min | Mostly worked, but took a few times fixing errors. Zip file upload doesn't appear in UI (AI said it fixed it but it's not visible). Base map stopped working. Wrong colors for inactive service area. As a positive, it had cool UI design styling choices | ⬜ | ⬜ |
| Gemini Canvas | ✅ Success | B | ~10 min | Did fine, worked the first try with fallback data. Asked it to allow uploading of GTFS zip data and that worked | ⬜ | ⬜ |
| v0.dev | ✅ Success | B | ~10 min | Did fine, worked the first try with fallback data. Asked it to allow uploading of GTFS zip data and that worked. Did a nice job showing active vs inactive vs not covered at all | ⬜ | ⬜ |
| base44 | ⚠️ Partial | C- | ~15 min | Almost worked, but there's an issue with the map tiles displaying properly, some UI elements overlapping, and not showing the data properly | ⬜ | ⬜ |
| Google AI Studio | ✅ Success | A- | ~20 min | Did an excellent job. Little hiccup with it showing some gaps in the colors, but after easily fixing that and asking to allow uploading of GTFS zip data, then asked it to make more smooth animations for not just each hour but based on the granularity of the data, and it did that well. It didn't do this on its own but another platform had the idea of showing a separate color for inactive zones that would later be filled in with the active color, so asked this to do it too and it did. Also asked it to cache the user uploaded data so it can be there after refresh, and it did | ⬜ | ⬜ |

**Status Legend:**
- ⬜ Not Started
- 🔄 In Progress
- ✅ Success
- ⚠️ Partial Success (works but has issues)
- ❌ Failed
- ⏸️ Paused/Deferred

---

## Platform URLs (Quick Access)

1. **ChatGPT Canvas**: https://chatgpt.com/canvas/shared/692767f664a88191bc139b8c9f513705
2. **Claude Artifact**: https://claude.ai/public/artifacts/4fb00173-8f9e-43e7-8361-ac0a9ac95b44
3. **Gemini Canvas**: https://gemini.google.com/share/29557d2f72c0
4. **v0.dev**: https://v0-transit-desert-clock.vercel.app/
5. **base44**: https://transit-desert-clock-0d56e6c9.base44.app
6. **Google AI Studio**: https://portland-transit-desert-clock-903076358991.us-west1.run.app

---

## Results Summary

**Total Platforms Tested:** 6
**Successful:** 3 (50%)
**Partial Success:** 3 (50%)
**Failed:** 0 (0%)

**Top Performer:**
- **Google AI Studio (A-)** - Excellent implementation with smooth animations, GTFS upload support, data caching, and good visual distinction between active/inactive/desert zones

**Strong Performers:**
- **Gemini Canvas (B)** - Worked first try with fallback data, GTFS upload added successfully
- **v0.dev (B)** - Worked first try, good visual distinction between service states

**Partial Success:**
- **Claude Artifact (C)** - Required multiple fixes, base map stopped working, zip upload not visible in UI despite AI claiming it was fixed. Nice UI styling choices
- **ChatGPT Canvas (D)** - UI generated but no data/map functionality
- **base44 (C-)** - Map tile issues, UI overlap problems, data not displaying properly

---

## Human Guidance vs AI Contributions

### User Guidance (Human Contributions):
- Requested GTFS zip file upload functionality (Gemini, v0, AI Studio)
- Asked AI Studio to add smooth animations based on data granularity (not just hourly)
- Suggested showing separate color for inactive zones that would later be filled with active color (AI Studio)
- Requested data caching so uploaded GTFS data persists after refresh (AI Studio)
- Fixed color gaps issue in AI Studio implementation
- Attempted to fix zip file upload, base map bug, and inactive service area colors in Claude Artifact (zip upload not visible in UI, base map still broken)

### AI Contributions:
- Initial implementation of transit desert clock concept
- GTFS data parsing and processing
- Map rendering with Leaflet
- Time slider and animation controls
- Service hour calculations from GTFS data
- Buffer/coverage area calculations
- UI design and styling choices
- Fallback data handling
- Stop detail popups and interactions

---

## Notes & Observations

**Common Issues:**
- GTFS zip file upload not working/not visible (Claude - AI claimed it was fixed but not in UI, ChatGPT)
- Base map stopped working (Claude Artifact)
- Map tile rendering issues (base44)
- UI element overlapping (base44)
- Data not displaying properly (ChatGPT, base44)

**Platform Strengths:**
- **Google AI Studio**: Excellent at handling complex requirements, smooth animations, data persistence
- **Gemini Canvas**: Reliable first-try success with fallback data
- **v0.dev**: Good visual distinction between different service states
- **Claude Artifact**: Strong UI design styling choices

**Platform Weaknesses:**
- **ChatGPT Canvas**: Struggled with data loading and map rendering
- **base44**: Map tile and UI layout issues
- **Claude Artifact**: Required multiple iterations, base map broke, zip upload not visible despite AI claiming it was fixed

**Surprising Results:**
- Google AI Studio handled complex requirements (smooth animations, data caching) very well
- Multiple platforms successfully added GTFS upload functionality when requested
- v0.dev's visual distinction between active/inactive/desert zones was well-executed

---

## Next Steps

- [ ] Take screenshots of all implementations (desktop + mobile)
- [ ] Create platform subfolders
- [ ] Save code from successful implementations
- [ ] Update README.md with comparison
- [ ] Create index.html showcase page

