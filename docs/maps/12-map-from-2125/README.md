# Day 12: Map from 2125

**Date:** November 12, 2025
**Theme:** Map from 2125
**Status:** ✅ Complete
**Result:** Base44 (Grade B-)

---

## Concept: Climate Migration Flows 2025-2125

**Selected from:** Claude Concept 2

**What it shows:**
A choropleth world map with animated flow lines showing projected population migration patterns over the century. Regions are color-coded by habitability index (temperature, water stress, sea level), and major migration corridors are highlighted with animated particles flowing along routes.

**Why this concept:**
- Strong future vision (climate migration is a real 2125 concern)
- Meaningful animation: both route-based (particles flowing along migration routes) and time-based (timeline scrubber)
- All data sources are public and downloadable
- Data prep is calculation-based (no manual drawing required)
- Flow lines can be algorithmically generated from source/destination pairs
- Works well as a web-based interactive map
- Clear visual storytelling hook (animated migration flows)

---

## Platform Results

| Platform | Status | Grade | Notes |
|----------|--------|-------|-------|
| **Base44** | ✅ Success | **B-** | Best result. Shows map and animations reasonably well, though paths are a bit messed up. UI ok. |
| **Firebase Studio** | ⚠️ Partial | **C+** | Did ok. Not a real map (visuals off), weird colors. Required auto-fixing errors. |
| **Claude Artifacts** | ⚠️ Partial | **C+** | Similar to Firebase Studio. Not a real map, but shows some path animations. Timeline animation broken. |
| **ChatGPT Canvas** | ❌ Failed | **D** | Like V0, wasn't able to show map or data. Just UI. UI is nice but a little busy. |
| **V0.dev** | ❌ Failed | **D** | Had errors. UI looks fine but couldn't display map or data. |
| **MagicPatterns** | ❌ Failed | **C-** | Map shows as green background only. Data not showing properly. |
| **Gemini Canvas** | ❌ Failed | **C-** | Map shows as single background color. No data, no timeline animation. |

**See full results in [LAUNCH-TRACKER.md](LAUNCH-TRACKER.md)**

---

## Data Preparation

**Approach:** Pre-processed single dataset (Option 1 from feasibility analysis)

**Why pre-process:**
- Previous days showed platforms struggle with downloading data from URLs
- Multiple data sources (UN, IPCC, ND-GAIN) would likely fail
- Single combined file works better for platforms that support file uploads
- Some platforms will mock data, but visualization structure still works

**Data files:**
- `data/climate-migration-2125.geojson` (934 KB) - 176 countries with population, habitability, and climate data
- `data/migration-flows-2125.json` (3.3 KB) - 15 migration flow pairs with source/destination, volumes, and reasons

---

## Key Insights

1. **Map Rendering Issues:** Most platforms (MagicPatterns, Gemini, Firebase) struggled to render a "real" map, often defaulting to abstract shapes or solid backgrounds.
2. **Data Complexity:** The concept involved multiple layers (habitability, flows, timeline), which seemed to overwhelm the "one-shot" generation capabilities.
3. **Base44 Strength:** Base44 continues to show strength in handling more complex map/data combinations compared to the others.
4. **Animation Difficulty:** Timeline animations driving data updates were a common failure point.

---

**View the showcase page:** [index.html](index.html)
