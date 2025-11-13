# Day 12: Map from 2125

**Date:** November 12, 2025  
**Theme:** Map from 2125  
**Status:** Data preparation complete, ready for implementation

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

**Visual storytelling hook:**
Dramatic stat overlay: "2.4 billion climate migrants by 2125" with animated counter. Show specific corridors like "Sahel → Mediterranean" or "Bangladesh → Northern India" with estimated flow volumes. Click regions to see gain/loss statistics.

---

## Data Preparation

**Approach:** Pre-processed single dataset (Option 1 from feasibility analysis)

**Why pre-process:**
- Previous days showed platforms struggle with downloading data from URLs
- Multiple data sources (UN, IPCC, ND-GAIN) would likely fail
- Single combined file works better for platforms that support file uploads
- Some platforms will mock data, but visualization structure still works

**Data sources:**
- **Base geography:** Natural Earth 110m Admin 0 Countries
- **Population:** UN World Population Prospects patterns (simplified for 27 key countries)
- **Habitability:** Synthetic index based on temperature, sea level rise, water stress
- **Migration flows:** 15 major flow pairs (source → destination with volumes)

**Data files:**
- `data/climate-migration-2125.geojson` (934 KB) - 176 countries with population, habitability, and climate data
- `data/migration-flows-2125.json` (3.3 KB) - 15 migration flow pairs with source/destination, volumes, and reasons

**Data coverage:**
- **27 countries with real population data:** All major migration sources (Bangladesh, Egypt, Ethiopia, India, Nigeria, Pakistan, Vietnam) and destinations (Canada, Sweden, Norway, Finland, New Zealand, Argentina, Chile, Germany, Australia, Russia)
- **149 countries with estimated population:** Fallback estimates based on region averages (acceptable for speculative 2125 map)
- **All 22 migration flow countries have real data:** Every country involved in the 15 migration flows has accurate population and habitability data

**Data prep script:**
- `scripts/build-climate-migration-data.mjs` - Processes Natural Earth data, adds population and habitability data, generates migration flow pairs

**Human decisions:**
- Chose pre-processed data approach to avoid platform download failures
- Added population fallback estimates for countries without explicit data (region-based averages)
- All migration flow countries verified to have real data
- Data format: GeoJSON (works with Lovable, can provide .txt version for Bolt.new/Google AI Studio)

---

## Ideation Process

**Platforms:** Claude.ai, ChatGPT, Gemini

**Key constraints:**
- No manual hand-drawing or manual data creation
- All data prep must be scriptable/automated
- Preference for meaningful animation (routes, time-based, or data-driven)

**Eliminated concepts:**
- Gemini Concept 1: Required manually creating arcologies.json
- Gemini Concept 2: Required manually drawing points/lines in geojson.io
- ChatGPT Concept 1: Required hand-crafting Mars settlement data

**Selected concept rationale:**
- Claude Concept 2 provides both route animation (particles flowing along routes) and time animation (timeline scrubber)
- All data processing is automated/scriptable
- Flow lines generated algorithmically from source/destination pairs
- Strong visual storytelling with meaningful data-driven animation

See `IDEATION-RESPONSES.md` for full analysis.

---

## Implementation Status

**Phase 1: Ideation** ✅ Complete  
**Phase 2: Data Preparation** ✅ Complete  
**Phase 3: Implementation Prompt** ⏳ Ready to create  
**Phase 4: Platform Launch** ⏳ Pending  
**Phase 5: Review & Iterate** ⏳ Pending  
**Phase 6: Documentation** ⏳ Pending  
**Phase 7: HTML Page** ⏳ Pending  

---

## Files

**Required (per WORKFLOW.md):**
- ✅ `IDEATION-PROMPTS.md` - The prompts sent to AI platforms
- ✅ `IDEATION-RESPONSES.md` - Full responses from Claude, ChatGPT, Gemini
- ⏳ `IMPLEMENTATION-PROMPT.md` - The prompt for implementation (ready to create)
- ⏳ `LAUNCH-TRACKER.md` - Platform results (will create after testing)

**Supporting:**
- `DATA-FEASIBILITY-ANALYSIS.md` - Analysis of data roadblocks from previous days
- `data/DATA-PREPARATION.md` - Data prep documentation
- `data/README.md` - Data setup instructions
- `scripts/build-climate-migration-data.mjs` - Data processing script
- `scripts/README.md` - Script documentation

---

## Human Review

**Data preparation:**
- Verified all 22 migration flow countries have real population data
- Added fallback estimates for 149 countries without explicit data (region-based)
- Confirmed data format compatibility with platforms (GeoJSON, can provide .txt version)
- Data size: 934 KB (under 1 MB limit)

**Concept selection:**
- Chose Claude Concept 2 based on meaningful animation preference (routes + time)
- Verified no manual work required (all data prep scriptable)
- Confirmed data feasibility with pre-processed approach

**Next steps:**
- Create implementation prompt
- Launch across platforms
- Review and iterate

---

**Last Updated:** November 12, 2025

