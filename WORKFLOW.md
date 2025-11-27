# Day-by-Day Workflow

**Updated**: Post-Day 1 actual workflow

Here's my refined process after completing Day 1.

---

## Refined Daily Process (Based on Day 1)

**Before starting any day:** Review `MY-WRITING-STYLE.md` to refresh on language guidelines and avoid overly formal or technical phrasing.

### Phase 1: Ideation (Web LLMs)
**Duration**: 5-10 minutes

1. Get ideation prompt from templates (or `maps/0X-theme/IDEATION-PROMPTS.md`)
   - **IMPORTANT: Use the SAME prompt for all 3 platforms** - this ensures fair comparison
   - **Prompt always asks for 2 concepts total**: 1 creative/unusual, 1 straightforward/classic
   - The prompt should be identical across Claude, ChatGPT, and Gemini
   - **Do NOT include internal file structure references** (like `IDEATION-RESPONSES.md` or "HTML showcase page") in the prompt sent to AI platforms - these are workflow details for you, not creative constraints for the AI
   - **Concepts must NOT require manual work** - no manual hand-drawing, manual creation of data files in text editors, or extensive use of external tools for manual data creation (e.g., manually drawing points/lines in geojson.io). All data prep should be scriptable/automated. The goal is for AI coding platforms to generate everything.
2. Paste the **same prompt** into web versions:
   - Claude.ai (Anthropic Claude Opus 4.5)
   - ChatGPT (OpenAI GPT-5.1 Thinking)
   - Gemini (Google Gemini 3 Pro)
   - _Note: Model versions can change during the 30 days as new releases land; we use the latest stable trio to keep comparisons current._
3. Review 6 ideas (2 from each platform)
4. **Paste back full outputs from all 3 platforms into Cursor**
5. Cursor logs all ideas to `maps/0X-theme/IDEATION-RESPONSES.md`
   - **If iteration needed**: Log as "Round 1", document human feedback, then "Round 2" with new responses
6. Cursor helps analyze and choose the best concept

**Note on Iterations/Redos (All Phases):**
- If any phase needs to be redone, document it clearly:
  - **Ideation**: Log as "Round 1", document human feedback, then "Round 2" with new responses
  - **Implementation**: Log iteration attempts in `LAUNCH-TRACKER.md` with retry counts
  - **Platform Launch**: Track retry attempts per platform in `LAUNCH-TRACKER.md`
- This documents the iterative process and shows how human direction improves results
- Always preserve original attempts alongside new ones to show progression

### Phase 2: Implementation Prep (Cursor)
**Duration**: 5 minutes

1. Cursor helps craft the implementation prompt
2. Customize for the chosen concept
3. Save as `IMPLEMENTATION-PROMPT.md`
4. Copy to clipboard

### Phase 3: Multi-Platform Launch
**Duration**: 5-10 minutes

1. Open 6-9 platform tabs
2. Paste same prompt into each
3. Hit generate on all
4. Let them cook while you take a break ☕

**Recommended platforms** (based on Day 1 & Day 3):
- ✅ ChatGPT Canvas (reliable)
- ✅ Bolt.new (great data handling, consistent success)
- ✅ Lovable (fast & clean, but avoid Mapbox - use alternative basemaps)
- ✅ MagicPatterns (versatile, consistent success, watch for free tier limits)
- ⚠️ Google AI Studio Apps (improved from Day 2, but still map rendering issues)
- ⚠️ V0.dev (consistent map rendering issues across all days)
- ⚠️ Google Gemini Canvas (errors with external APIs, consistent UI works but map/data rendering fails)
- ⚠️ Claude Artifacts (errors with external APIs, consistent CSP/CORS limitation)

### Phase 4: Review & Iterate
**Duration**: 20-30 minutes

1. Check results every 5-10 minutes
2. Note which worked/failed in LAUNCH-TRACKER
3. **Document human interventions** - if you provide feedback or ask questions during platform testing, log it
4. Iterate 1-2 times on partial successes
   - **Note**: Some platforms may regress after fixes (e.g., map disappears after attempt to fix) - document this in LAUNCH-TRACKER
5. Manually confirm data accuracy (spot-check API responses, units, legends)
6. Apply human tweaks (copy edits, accessibility fixes, visual polish) — log each change
7. Save links to live demos
8. Note key observations

### Phase 5: Human QA & Sign-off
**Duration**: 5-10 minutes

1. Verify attribution text and licenses for every dataset
2. Write a short “Human review” summary (what was inspected or ideated or changed)
3. Double-check that sensitive data is excluded or anonymized

### Phase 6: Documentation
**Duration**: 15-30 minutes

**Essential (every day)**:
1. Update `maps/0X-theme/README.md` with results
2. Update `DAILY-LOG.md` (one line)
3. Update `PLATFORM-TRACKER.md` stats
4. Update `maps/0X-theme/LAUNCH-TRACKER.md`
5. Add the “Human review” note + attribution details to each doc
6. Cross-check `DOCUMENTATION-GUIDE.md` for the latest required content and structure before wrapping

**Optional (when time allows)**:
5. Create platform-specific READMEs
6. Write `DAY-X-SUMMARY.md` for deeper analysis

### Phase 7: HTML Page (REQUIRED)
**Duration**: 20-25 minutes

**Note:** The HTML showcase page is a **required deliverable** for each day. "Platform testing complete" means all platforms have been tested, but the day is not complete until the HTML page is generated.

**Step 1: Capture Screenshots** (10 min):
- **Desktop**: Resize to 1440x900, capture → `screenshot.png`
- **Mobile**: Resize to 393x852 (iPhone 15 Pro), capture → `screenshot-mobile.png`
- Wait 5+ seconds for content to load
- Watch for & approve permission dialogs!
- Tests responsive design quality
- **Multiple screenshots**: When needed, capture additional screenshots:
  - Desktop: Add `screenshot-{description}.png` (e.g., `screenshot-tooltip-issue.png`) for specific issues or features
  - Mobile: Add `screenshot-mobile-{description}.png` (e.g., `screenshot-mobile-map.png`) for different views (e.g., scrolled to show map)
  - Include all screenshots in HTML - stack multiple desktop screenshots in the desktop column, multiple mobile in mobile column
- **Note**: Can automate with Cursor or Playwright browser tools. A screenshot script is available in `scripts/` for capturing showcase page screenshots (workaround until better tooling is available).

**Step 2: Create HTML** (10-15 min):
1. Edit `src/pages/<day-slug>.njk` (front matter + blocks) instead of hand-editing `maps/<day>/index.html`. The shared layout injects head/nav/footer scripts.
2. **Extract ideation concepts from `IDEATION-RESPONSES.md`** - pick the best/favorite concept from each platform's response to show in the ideation cards
3. Fill with REAL data (not placeholders) and include desktop & mobile screenshots side-by-side
4. Comment on responsive design
5. Keep times approximate (~1.5 hrs, not 87 min)
6. Keep it simple and easy to update later
7. Before publishing, review `DESIGN-SYSTEM.md` to ensure layout, styling, and grade badges match the current standards
8. Reuse the color palette already defined in the template—new callouts should lean on existing gradients/badge styles instead of bespoke colors.
9. In the body copy, refer to logs and summaries generically (e.g., “documentation” or “project log”) rather than surfacing raw filenames.
10. Build pages with `npm run build:pages` (or `npm run build:pages:check` to output to `maps-build/` for diffing). Then run `npm run build:site` to regenerate `docs/`/`days.json`.
    - Shortcuts: `npm run dev` → `npm run build:pages:check`, `npm run publish` → `npm run build:all`.
    - Local server for manual review: `npm run dev:server` (serves `docs/` by default at http://localhost:8080; pass `--dir .` to serve the repo root).

**What to include**:
- Quick stats (platforms tested, success rate)
- **Ideation concepts** (extracted from `IDEATION-RESPONSES.md` - one concept per platform)
- Chosen concept & why
- Platform results with BOTH screenshots
- Responsive design ratings
- Key insights and lessons
- Brief editorial

**What to skip**:
- Don't overthink design
- Don't duplicate all the markdown docs
- Keep it visual and scannable
- 80/20 rule: capture the essentials fast

---

## Streamlined Documentation Structure

### Must-Have Files (Every Day)
```
maps/0X-theme/
├── README.md                    # Main day overview
├── IDEATION-PROMPTS.md          # The prompts sent to AI platforms
├── IDEATION-RESPONSES.md        # Full responses from Claude, ChatGPT, Gemini (logged)
├── IMPLEMENTATION-PROMPT.md     # The prompt used for implementation
└── LAUNCH-TRACKER.md            # Quick results table
```

### Nice-to-Have (Time Permitting)
```
maps/0X-theme/
├── index.html                   # HTML page
├── DAY-X-SUMMARY.md             # Deep analysis
├── platform-name/
│   └── README.md                # Platform-specific details
└── screenshots/                 # If screenshots taken
```

### Project-Level (Updated Daily)
```
/
├── DAILY-LOG.md                 # One line per day
└── PLATFORM-TRACKER.md          # Running comparison
```

**Important Note on `docs/` folder:**
- The `docs/` folder is **auto-generated** by the build script (`scripts/build-site.mjs`)
- When making updates, **only edit files in `maps/`** (the source files)
- Never manually edit files in `docs/` - they will be overwritten by the build script
- Run `node scripts/build-site.mjs` to regenerate `docs/` after making changes to source files
- **To set a specific day as the homepage**:
  - **Day number (recommended)**: `node scripts/build-site.mjs 19` (automatically finds `19-projections`)
  - **Day slug**: `DEFAULT_DAY=19-projections node scripts/build-site.mjs`
- To switch back to the overview grid, run without arguments: `node scripts/build-site.mjs`

---

## Time Budget (Refined)

| Phase | Time | Cumulative |
|-------|------|------------|
| Ideation | 5-10 min | 10 min |
| Prep prompt | 5 min | 15 min |
| Launch platforms | 5-10 min | 25 min |
| Review & iterate | 20-30 min | 55 min |
| Human QA & sign-off | 5-10 min | 65 min |
| Documentation | 15 min | 80 min |
| HTML page (REQUIRED) | 20-25 min | 105 min |
| **Total** | **~105 min** | |

**Speed mode** (platform testing only, skip HTML): ~80 min
**Full mode** (with required HTML page): ~105 min

**Note:** HTML page is required for each day. If time is limited, platform testing can be done in one session and HTML page generation in a separate session.

---

## HTML Page Guide

### Quick Start

1. **Copy template**:
   ```bash
   cp templates/day-showcase-template.html maps/0X-theme/index.html
   ```

2. **Fill in the key sections**:
   - Stats (platforms, success rate, time)
   - Ideation recap:
     - Narrative paragraph capturing the back-and-forth
     - Bullet list of the pivots where you redirected the AI
     - Three platform cards, highlighting which concept won
   - Chosen concept (title, why it mattered, data source)
   - Platform results (winners + partials, desktop/mobile screenshots)
   - AI Collaboration Snapshot (two quick lists: where you drove vs. where AI accelerated - summary of Process Timeline)
   - Process Timeline (detailed play-by-play, collapsed by default)
   - Key insights + lessons, then the editorial wrap-up

3. **Follow the design system**:
   - **Screenshot sizing (important!)**:
     - Single winner (full width `col-md-12`): Use `col-8` for desktop, `col-4` for mobile
     - Multiple winners (`col-md-6`): Use `col-7` for desktop, `col-5` for mobile
     - Mobile screenshot should be smaller when winner takes full width to prevent it from being too large
   - Use CSS classes: `.screenshot-desktop` and `.screenshot-mobile`
   - Gap spacing: `g-3` for screenshot rows
   - Bold desktop labels, regular mobile labels
   - Consistent header colors (see DOCUMENTATION-GUIDE.md)
   - **AI Collaboration Snapshot**: Place BEFORE Process Timeline, fill with concise bullets (3-4 max each column) summarizing the Process Timeline content
   - Leave the timeline collapsed by default; only expand it while proofreading
   - Timeline labels should read "Me" and "AI" (never "Human")
   - See `DESIGN-SYSTEM.md` for complete details

4. **Test locally**:
   ```bash
   open maps/0X-theme/index.html
   ```

### What Makes a Good Page

**Do**:
- ✅ Quick visual summary of the day
- ✅ Call out where you (the human) redirected or corrected the AI
- ✅ Use the collaboration snapshot + timeline to show the Me/AI split at a glance
- ✅ Links to all live demos
- ✅ Key insights and learning
- ✅ Your honest opinion/editorial
- ✅ Easy to skim and understand

**Don't**:
- ❌ Duplicate everything from markdown docs
- ❌ Spend more than 15 minutes on it
- ❌ Overthink the design
- ❌ Include code snippets (link to code instead)

---

## Key Learnings from Day 1, Day 2 & Day 3

1. **Parallel testing works!** - 10-11 platforms in 90-120 minutes
2. **ChatGPT Canvas, Bolt.new, Lovable, MagicPatterns** - most reliable
3. **Claude/Gemini Artifacts** - struggled with external APIs (CSP/CORS) - consistent partial success (Grade D) across all 3 days
4. **Grading consistency**: All platforms get at least Grade D (Partial Success) - even CSP/CORS failures generate UI/legends. Grade F reserved only for truly unusable (rare).
5. **Platform colors**: Consistent across days - use Day 1 as source of truth for all platform header colors
6. **Documentation time** - took longer than expected (~30 min)
7. **HTML page** - makes sharing results much easier
8. **Avoid Mapbox in prompts** - Requires API keys (may need paid account), creates barrier for testing. Use alternatives: OpenStreetMap (via Leaflet), MapLibre GL JS, CartoDB Positron/Dark Matter, Stamen maps
9. **Free tier limits** - Some platforms (e.g., MagicPatterns) have daily free tier limits that may restrict iterations or testing on the same day
10. **Data handling test results** - Most platforms (MagicPatterns, Bolt.new, V0.dev) couldn't download real data but successfully created mock data as fallback. **Firebase Studio (Day 3) was the FIRST platform to successfully use real data!**
11. **Consistent platform patterns** - V0.dev (Day 1, 2, 3: map rendering issues), Google AI Studio Apps (Day 2: Grade F, Day 3: Grade D - improved but still blank page), Claude Artifacts (Day 1, 2, 3: CSP/CORS), Gemini Canvas (Day 1, 2, 3: UI works but map/data rendering fails)
12. **API key barriers** - Firebase Studio (Day 3) required manual `.env.local` file creation for Google Maps API key - not user friendly, but platform successfully handled real data once configured

---

## Grading & Platform Colors (Consistent Across Days)

**Grading Scale:**
- **A (Excellent / Full Success)**: Fast, beautiful, fully functional, great mobile UX. Map renders correctly, all features work, responsive design is strong.
- **B (Good / Full Success)**: Works well, minor issues (e.g., tooltip contrast, legend style), responsive. Map is functional and usable.
- **C (OK / Full Success)**: Usable but significant issues (performance problems, UX issues like sluggish pan/zoom). Map works but has notable problems.
- **D (Poor / Partial Success)**: Major functionality broken but some elements work. Examples:
  - UI/legends generated but map doesn't load (CSP/CORS issues)
  - Data loads but visualization broken
  - Map loads but interaction doesn't work
  - **Key point**: Even CSP/CORS failures that generate UI/legends get Grade D (Partial Success), not F. If it generates something useful, it's at least D.
- **F (Failed)**: No code generated at all (platform error, completely unusable - rare). Examples:
  - Platform returns "internal error" and never generates code
  - Platform crashes before any output
  - **Key distinction**: Grade F is reserved for when no code/output is generated at all (platform infrastructure failures), not for code that doesn't work properly.

**Platform Colors** (consistent across all days - use Day 1 as source of truth):
- **Lovable**: `bg-info` (blue)
- **ChatGPT Canvas**: `bg-success` (green)
- **Bolt.new**: `bg-primary` (blue)
- **Firebase Studio**: `#ff6d00` (orange)
- **Base44**: `#7c3aed` (purple)
- **MagicPatterns**: `#9b59b6` (purple/violet)
- **Google AI Studio**: `#34a853` (green)
- **Claude/Gemini/V0**: `bg-warning` (yellow/orange)

**Ideation Phase Colors** (consistent across all days):
- **Claude**: Orange `#fd7e14`
- **ChatGPT**: Green `bg-success`
- **Gemini**: Blue `#4285f4`
- **Chosen concept**: Add `concept-chosen` class with `border-color: #fd7e14;`

## For Tomorrow (Day 3+)

**Streamlined approach**:
1. ✅ Use successful platforms from previous days
2. ✅ Claude/Gemini Artifacts - expect Grade D (Partial Success) due to CSP/CORS
3. ✅ Focus on core documentation
4. ✅ Create HTML page for visual results
5. ✅ Keep platform READMEs optional
6. ✅ Use consistent platform colors from Day 1
7. ✅ Grade appropriately: even failures that generate UI get Grade D

**Time goal**: 60-80 minutes total

---

**Last Updated**: November 3, 2025 (Post Day 2, updated Day 3)
**Status**: Ready for Day 3+
