# Day 1: Points

**Theme**: Point data (locations, POIs, clusters). Focus on symbolization and density.
**Date**: November 1, 2025
**Status**: ✅ Complete

---

## 📋 Workflow Status

- [x] **Phase 1**: Get ideation from web LLMs (Claude, ChatGPT, Gemini)
- [x] **Phase 2**: Choose best concept and prepare implementation prompt
- [x] **Phase 3**: Launch across 9 platforms
- [x] **Phase 4**: Review results and iterate
- [x] **Phase 5**: Document and save ← **COMPLETE!**

---

## 🎨 Chosen Concept

**Title**: Global Earthquakes - Last 30 Days

**Description**: An interactive map displaying all earthquakes from the past 30 days with points sized by magnitude and colored by depth. Includes hover tooltips showing magnitude, location, date/time, and depth. Reveals natural patterns like the Pacific "Ring of Fire."

**Data Source**: USGS Earthquake API (free, no API key)
- Endpoint: `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson`
- Format: GeoJSON
- Updates every 5 minutes
- ~8,000-10,000 points

**Difficulty**: Easy

**Source LLM**: Claude.ai

**Why chosen**:
- Most reliable data source (USGS, no API key needed)
- GeoJSON format works universally across all mapping libraries
- Clear visualization requirements (size = magnitude, color = depth)
- Good point density for testing platform performance
- Visually compelling - reveals natural geographic patterns
- Perfect for Day 1 multi-platform comparison

---

## 🛠️ Implementation Prompt

**Full prompt available in**: `IMPLEMENTATION-PROMPT.md`

**Quick Summary**: Create interactive earthquake map with points sized by magnitude, colored by depth, with hover tooltips. Use USGS GeoJSON API. Should be visually striking and reveal geographic patterns.

---

## 🤖 Platform Results

### ✅ Successful Implementations (8/11 - 73%)

1. **ChatGPT Canvas (GPT-5 Thinking)** 🏆 Top Tier
   - Live: https://chatgpt.com/canvas/shared/6906d4f356ec81918cddaa043840c0f8
   - Time: ~5 min
   - Notes: Good UI polish, smooth interactions, asks permission before external data fetch. Strong tooltips.

2. **Bolt.new** 🏆 Top Tier
   - Live: https://global-earthquakes-l-5bh2.bolt.host
   - Time: ~5 min
   - Notes: Best data handling. Shows actual stats (7,734 earthquakes, max mag 7.6, avg depth 21km). Strong tooltips, robust implementation.

3. **Lovable** 🏆 Top Tier
   - Live: https://quake-viz-com.lovable.app
   - Time: ~5 min
   - Notes: Clean Tailwind design, good tooltips. Similar quality to Bolt and ChatGPT. One-shot success.

4. **Google AI Studio Apps**
   - Live: https://ai.studio/apps/drive/18cX2TQXmcUCY8EPeOp4qAUp9Wr_W5F-a
   - Time: ~5 min
   - Notes: Minimal but functional UI. Surprisingly solid implementation.

5. **MagicPatterns (Tailwind)**
   - Live: https://project-playful-eagle-286.magicpatterns.app
   - Time: ~5 min
   - Notes: Works perfectly! Professional Tailwind aesthetic.

6. **MagicPatterns (Chakra UI)**
   - Live: (see chat link)
   - Time: ~5 min
   - Notes: Same quality as Tailwind version, just different UI library.

7. **Firebase Studio** 🔥
   - Live: https://studio--studio-5411671878-961de.us-central1.hosted.app/
   - Time: ~15 min (API key setup)
   - Notes: Required Gemini + Google Maps API keys. Good UX for Gemini key with special prompt box (see `firebase-studio-api-key-prompt.png`). Most full-featured code editor (VS Code in browser), though others like Bolt/Lovable also have code editing. Google Maps basemap, bland defaults. Firebase backend integration ready.

8. **Base44** 📊 Best Stats Dashboard
   - Live: https://seismic-watch-361323d1.base44.app/
   - Time: ~5 min
   - Notes: Clean dark theme with strong visuals. **Best stats dashboard** (7,729 total, max mag 7.6, updated time). Minor bug: Avg Depth shows 0.0km (should be ~21km). Tooltips not as good as top 3.

---

### ⚠️ Partial Success (3/11 - 27%)

1. **Claude Artifacts (Sonnet 4.5)**
   - Live: https://claude.ai/public/artifacts/ec2f5f3e-867c-4d0d-a333-078749d2f831
   - Time: ~15 min (with 3 fix attempts)
   - Issue: CSP/CORS violations prevent external library loading. UI renders but data fetch fails.

2. **Gemini Pro 2.5**
   - Live: https://gemini.google.com/share/ca0176434f8c
   - Time: ~15 min
   - Issue: Similar to Claude - data loading problems despite proper UI structure.

3. **V0.dev**
   - Live: https://v0-earthquake-visualization-map.vercel.app/
   - Time: ~10 min (1 iteration)
   - Issue: Had initial error, fixed with one click. Points display but no basemap, layout issues.

---

### ❌ Failed (0/9)

None! All platforms produced at least a partial implementation.

---

## 📊 Platform Rankings (Day 1)

### 🏆 Top 3 (Tie - Each Best at Different Things)

🥇 **ChatGPT Canvas** - Best overall UI polish, good permission model
🥇 **Bolt.new** - Best data handling & stats display
🥇 **Lovable** - Fast, clean, strong tooltips

**Strong Contenders:**
- Base44 - Best stats dashboard, strong visual design
- Firebase Studio - Most full-featured code editor (VS Code in browser), though Bolt/Lovable also have code editing
- MagicPatterns (both variants) - Solid performance
- Google AI Studio - Solid dark horse contender

**Total Time**: ~2 hours (including iterations + API key setup)
**Platforms Attempted**: 11
**Successful Outputs**: 8
**Success Rate**: 73%

---

## 💡 Key Learnings

### What Worked
- **Same prompt across all platforms** proved the concept - one implementation prompt, 9 different outputs
- **Fast one-shot platforms**: Bolt, Lovable, MagicPatterns all delivered working code in ~5 min
- **ChatGPT's permission model** for external data fetches is a nice UX pattern
- **USGS API** was a good choice - standard GeoJSON works everywhere

### What Didn't
- **Claude & Gemini struggled** with external API integration - will retry in future days since they work sometimes
- **CSP/CORS issues** are the biggest failure mode for artifact-style platforms
- **V0.dev needed iteration** despite being highly regarded - not always one-shot success

### Surprises
- **MagicPatterns** performed well - tested 2 variants, both worked
- **Google AI Studio** quietly delivered a solid implementation without fanfare
- **Top chat models ≠ best code gen platforms** - Claude/Gemini chat are strong for ideation, but their code artifacts struggled

### For Next Time
- Consider using embedded data for platforms that struggle with external APIs
- Test V0.dev early since it may need iteration
- ChatGPT Canvas is the reliability benchmark
- Bolt.new is the data handling champion

---

## 🔗 Links

- **Live Demos**: _[Update after launch]_
- **Code**: See platform subfolders (`claude-artifacts/`, `bolt-new/`, etc.)
- **Data Source**: [USGS Earthquake Hazards Program](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson)
- **Social Media**: _[Update after completion]_

---

## 📝 Launch Instructions

1. **Copy the prompt**: Open `IMPLEMENTATION-PROMPT.md` and copy the entire prompt
2. **Open platforms**: Launch 5-10 platforms in browser tabs (see `LAUNCH-TRACKER.md` for URLs)
3. **Paste & generate**: Paste the same prompt to each platform and hit generate
4. **Track progress**: Use `LAUNCH-TRACKER.md` to record results
5. **Screenshot everything**: Both successes and failures are valuable data
6. **Document**: Update this README with results

---

**Created**: November 1, 2025
**Theme Category**: Challenge Classic
**Challenge Day**: 1/30
