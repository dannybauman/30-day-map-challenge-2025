# Day-by-Day Workflow

**Updated**: Post-Day 1 actual workflow

Here's my refined process after completing Day 1.

---

## Refined Daily Process (Based on Day 1)

### Phase 1: Ideation (Web LLMs)
**Duration**: 5-10 minutes

1. Get ideation prompts from templates
2. Paste into web versions:
   - Claude.ai (Anthropic Claude Sonnet 4.5)
   - ChatGPT (OpenAI GPT-5 Thinking)
   - Gemini (Google Gemini 2.5 Pro)
3. Review 6 ideas (2 from each)
4. Pick the best idea
5. Paste chosen concept into Cursor

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

**Recommended platforms** (based on Day 1):
- ✅ ChatGPT Canvas (reliable)
- ✅ Bolt.new (great data handling)
- ✅ Lovable (fast & clean)
- ✅ MagicPatterns (versatile)
- ✅ Google AI Studio Apps (solid)
- ⚠️ V0.dev (may need iteration)
- ⚠️ Google Gemini Canvas (errors with external APIs, but was close)
- ⚠️ Claude Artifacts (errors with external APIs, but was close)

### Phase 4: Review & Iterate
**Duration**: 20-30 minutes

1. Check results every 5-10 minutes
2. Note which worked/failed in LAUNCH-TRACKER
3. Iterate 1-2 times on partial successes
4. Save links to live demos
5. Note key observations

### Phase 5: Documentation
**Duration**: 15-30 minutes

**Essential (every day)**:
1. Update `maps/0X-theme/README.md` with results
2. Update `DAILY-LOG.md` (one line)
3. Update `PLATFORM-TRACKER.md` stats
4. Update `maps/0X-theme/LAUNCH-TRACKER.md`

**Optional (when time allows)**:
5. Create platform-specific READMEs
6. Create `index.html` page
7. Write `DAY-X-SUMMARY.md` for deeper analysis

### Phase 6: HTML Page (New!)
**Duration**: 20-25 minutes

**Step 1: Capture Screenshots** (10 min):
- **Desktop**: Resize to 1440x900, capture → `screenshot.png`
- **Mobile**: Resize to 393x852 (iPhone 15 Pro), capture → `screenshot-mobile.png`
- Wait 5+ seconds for content to load
- Watch for & approve permission dialogs!
- Tests responsive design quality

**Step 2: Create HTML** (10-15 min):
1. Copy `templates/day-showcase-template.html` → `index.html`
2. Fill with REAL data (not placeholders)
3. Include desktop & mobile screenshots side-by-side
4. Comment on responsive design
5. Keep times approximate (~1.5 hrs, not 87 min)
6. Keep it simple and easy to update later

**What to include**:
- Quick stats (platforms tested, success rate)
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
├── IMPLEMENTATION-PROMPT.md     # The prompt used
├── LAUNCH-TRACKER.md            # Quick results table
└── concept.md                   # Chosen concept (optional)
```

### Nice-to-Have (Time Permitting)
```
maps/0X-theme/
├── index.html                   # HTML page 🆕
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

---

## Time Budget (Refined)

| Phase | Time | Cumulative |
|-------|------|------------|
| Ideation | 5-10 min | 10 min |
| Prep prompt | 5 min | 15 min |
| Launch platforms | 5-10 min | 25 min |
| Review & iterate | 20-30 min | 55 min |
| Core documentation | 15 min | 70 min |
| HTML page | 10 min | 80 min |
| **Total** | **~80 min** | |

**Speed mode** (just essentials): ~60 min
**Full mode** (with HTML page): ~80 min

---

## HTML Page Guide

### Quick Start

1. **Copy template**:
   ```bash
   cp templates/day-showcase-template.html maps/0X-theme/index.html
   ```

2. **Fill in the key sections**:
   - Stats (platforms, success rate, time)
   - Ideation ideas (brief 1-2 sentences each)
   - Chosen concept
   - Platform results (use platform-card-snippet.html)
   - Key insights
   - Your editorial thoughts

3. **Follow the design system**:
   - Desktop screenshots: `col-7` (larger), Mobile: `col-5` (smaller)
   - Use CSS classes: `.screenshot-desktop` and `.screenshot-mobile`
   - Gap spacing: `g-3` for screenshot rows
   - Bold desktop labels, regular mobile labels
   - Consistent header colors (see DOCUMENTATION-GUIDE.md)
   - See `/maps/01-points/DESIGN-SYSTEM-UPDATE.md` for complete details

4. **Test locally**:
   ```bash
   open maps/0X-theme/index.html
   ```

### What Makes a Good Page

**Do**:
- ✅ Quick visual summary of the day
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

## Key Learnings from Day 1

1. **Parallel testing works!** - 9 platforms in 90 minutes
2. **ChatGPT Canvas, Bolt.new, Lovable** - most reliable
3. **Claude/Gemini Artifacts** - struggled with external APIs, but were close - may work with embedded data
4. **MagicPatterns** - surprise good performer
5. **Documentation time** - took longer than expected (~30 min)
6. **HTML page** - will make sharing results much easier

---

## For Tomorrow (Day 2)

**Streamlined approach**:
1. ✅ Use successful platforms from Day 1
2. ✅ Skip Claude/Gemini Artifacts (unless embedded data)
3. ✅ Focus on core documentation
4. ✅ Create HTML page for visual results
5. ✅ Keep platform READMEs optional

**Time goal**: 60-80 minutes total

---

**Last Updated**: November 2, 2025 (Post Day 1)
**Status**: Ready for Day 2
