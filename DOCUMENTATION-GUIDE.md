# Documentation Strategy

Quick guide to what docs to create each day and why.

---

## Daily Documentation Tiers

### 🔥 Essential (Required Every Day - 15 min)

1. **`maps/0X-theme/README.md`**
   - Quick overview of the day
   - Platform results summary
   - Key learnings (3-5 bullets)
   - Links to live demos
   - Human Review section

2. **`DAILY-LOG.md`** (one line)
   - Theme, platforms tested, success count, time
   - Add `Human check:` shorthand (e.g., “Human check: verified USGS mag ranges”)

3. **`PLATFORM-TRACKER.md`** (update stats)
   - Add to platform success rates
   - Update category rankings if needed
   - Note any human interventions per platform if they materially changed the outcome

4. **`maps/0X-theme/LAUNCH-TRACKER.md`**
   - Quick results table
   - Notes on what worked/didn't
   - Flag where human edits happened (e.g., “Manual fix: legend colors”)

**Total time**: ~15 minutes

---

### ⭐ Recommended (When Time Allows - +15 min)

5. **`maps/0X-theme/index.html`**
   - Visual showcase page
   - Copy from template
   - Fill in key sections
   - Makes results easy to browse/share

**Total time**: ~30 minutes (essential + recommended)

---

### 📚 Deep Dive (Optional - +30 min)

6. **`maps/0X-theme/DAY-X-SUMMARY.md`**
   - Comprehensive analysis
   - Detailed insights
   - Statistical breakdown
   - Only on interesting days or when you have time

7. **Platform-specific READMEs**
   - `chatgpt-canvas/README.md`
   - `bolt-new/README.md`
   - etc.
   - Deep dive into each platform's performance
   - Great for reference but time-consuming

**Total time**: ~60+ minutes (if doing everything)

---

## File Structure Per Day

### Minimal Setup (Speed Mode)
```
maps/0X-theme/
├── README.md                    # Essential
├── IMPLEMENTATION-PROMPT.md     # Essential (from Cursor)
└── LAUNCH-TRACKER.md            # Essential
```
**Time**: 15 minutes

### Standard Setup (Recommended)
```
maps/0X-theme/
├── README.md                    # Essential
├── IDEATION-PROMPTS.md          # Prompts sent to AI platforms
├── IDEATION-RESPONSES.md        # Full responses from Claude, ChatGPT, Gemini (source for HTML ideation section)
├── IMPLEMENTATION-PROMPT.md     # Essential
├── LAUNCH-TRACKER.md            # Essential
└── index.html                   # Recommended (extract concepts from IDEATION-RESPONSES.md)
```
**Time**: 30 minutes

### Complete Setup (When You Have Time)
```
maps/0X-theme/
├── README.md                    # Essential
├── IMPLEMENTATION-PROMPT.md     # Essential
├── LAUNCH-TRACKER.md            # Essential
├── index.html                   # Recommended
├── DAY-X-SUMMARY.md             # Optional deep dive
├── concept.md                   # Optional
├── chatgpt-canvas/
│   ├── README.md                # Optional per-platform
│   └── screenshot.png           # Screenshot of result
├── bolt-new/
│   ├── README.md                # Optional per-platform
│   └── screenshot.png           # Screenshot of result
└── [other platforms...]         # Each gets own folder
```

**IMPORTANT**: Every platform gets its own folder with README.md inside.
Never use `other-platforms/` or loose .md files.

**Platform Folder Naming:**
- Use lowercase with hyphens: `chatgpt-canvas/`, `bolt-new/`, `v0-dev/`
- Each contains: `README.md` + `screenshot.png` + `screenshot-mobile.png`
- NO loose .md files, NO `other-platforms/` subfolder
**Time**: 60+ minutes

---

## When to Use Each Approach

### Speed Mode (15 min)
**Use when:**
- Time constrained
- Straightforward day
- Results are clear

**Skip:**
- HTML showcase
- Platform READMEs
- Deep analysis

### Standard Mode (30 min)
**Use when:**
- Normal circumstances
- Want to share results visually
- Have a bit more time

**Include:**
- All essentials
- HTML showcase

### Deep Dive Mode (60+ min)
**Use when:**
- Really interesting results
- Major insights discovered
- Want comprehensive reference
- Weekend/more time available

**Include:**
- Everything
- Per-platform analysis
- Statistical deep dive
- Human commentary

---

## HTML Showcase Guide

### Why Create It?

**Benefits:**
- ✅ Visual summary in 10-15 minutes
- ✅ Easy to share on social media
- ✅ Browsable results without reading markdown
- ✅ Professional presentation
- ✅ Makes the project more accessible

**When to skip:**
- ❌ Super time-constrained
- ❌ Results are boring/nothing new
- ❌ Already documented well in README

### How to Create (10-15 min)

1. **Capture screenshots** (10 min):

   **Desktop (1440x900):**
   - Resize browser to 1440x900 (landscape laptop)
   - Navigate to each live demo
   - Wait 5+ seconds for map to load
   - Check for permission dialogs - click them!
   - Take screenshot
   - Save as `platform-name/screenshot.png`

   **Mobile (393x852 - iPhone 15 Pro):**
   - Resize browser to 393x852
   - Navigate to same live demo
   - Wait 5+ seconds for map to load
   - Take screenshot
   - Save as `platform-name/screenshot-mobile.png`

   This tests responsive design quality!

2. **Fill in actual content** (10 min):
   - **Extract ideation concepts from `IDEATION-RESPONSES.md`** - pick the best/favorite concept from each platform's response (one concept per platform)
   - Use the real data, not template placeholders
   - Include actual stats (platforms tested, success rate, time)
   - Add real platform results with live demo links
   - Include BOTH desktop and mobile screenshots (side by side)
   - Comment on responsive design quality
   - Keep times approximate (~1.5 hrs, not 87 min)
   - Keep it concise but accurate
   - HTML should be easy to update later!

3. **Test locally** (30 sec):
   ```bash
   open maps/0X-theme/index.html
   ```

4. **Done!**

**Screenshot Tips:**
- **Desktop**: 1440x900 (laptop landscape) → `screenshot.png`
- **Mobile**: 393x852 (iPhone 15 Pro) → `screenshot-mobile.png`
- Wait for content to fully load (5+ seconds)
- Watch for permission dialogs - approve them first!
- Capture when map is fully rendered
- Both sizes test responsive design quality!

**Design System (Updated Nov 4, 2025):**
- **Desktop/Mobile ratio**: Use `col-7` / `col-5` (desktop larger, mobile smaller)
- **CSS classes**: Add `.screenshot-desktop` and `.screenshot-mobile`
- **Gap spacing**: Use `g-3` for screenshot rows
- **Labels**: Bold desktop labels (`<strong>Desktop</strong>`), regular for mobile
- **Header colors**:
  - Winners: `bg-success` (green), `bg-primary` (blue), or `bg-info` (cyan)
  - Strong: Custom brand colors (e.g., Firebase orange, Base44 purple)
  - Partial: `bg-warning` (yellow/orange)
  - Failed: `bg-danger` (red)
- See `DESIGN-SYSTEM.md` for the full, consolidated guide.

### What to Include

**Must have:**
- Quick stats (4 cards at top)
- Platform results with links
- Key insights (what worked/didn't)

**Nice to have:**
- Ideation concepts
- Screenshots
- Your editorial thoughts

**Skip:**
- Full implementation prompt (link to it)
- Duplicate markdown content
- Complex custom styling

---

## Documentation Anti-Patterns

### ❌ Don't Do This

1. **Over-documentation**
   - Don't write the same thing in 5 places
   - Don't create docs "just in case"
   - Don't duplicate markdown in HTML

2. **Premature documentation**
   - Don't create all 30 folders upfront
   - Don't write templates for everything
   - Create docs as you go
   - Don't fill the “Human review” note with placeholders—write the real checks you performed right after doing them

3. **Perfect documentation**
   - Don't spend 2 hours on docs
   - Don't overthink structure
   - Don't polish endlessly

4. **Siloed documentation**
   - Don't forget to update DAILY-LOG
   - Don't skip PLATFORM-TRACKER updates
   - Keep cross-references working

---

## Quality Over Quantity

### Good Documentation Is:

✅ **Accurate** - Captures what actually happened
✅ **Concise** - Gets to the point quickly
✅ **Actionable** - Future you can learn from it
✅ **Scannable** - Easy to skim and find info
✅ **Honest** - Documents failures too

### Good Documentation Is NOT:

❌ Comprehensive to the point of being overwhelming
❌ Perfectly formatted with no typos
❌ Written for an audience of thousands
❌ Trying to document every tiny detail
❌ Taking longer than the actual work

---

## The 80/20 Rule

**80% of the value comes from 20% of the docs:**

**The 20% that matters:**
1. Platform results (what worked/didn't)
2. Live demo links
3. Key insights (3-5 bullets)
4. One-line daily log update

**The 80% that's optional:**
- Detailed platform analysis
- Screenshots
- Deep statistical analysis
- Individual platform READMEs
- Long-form editorial

**Strategy**: Always do the 20%. Add the 80% only when:
- You have extra time
- Results are particularly interesting
- You want to create a reference

---

## Quick Decision Tree

**After completing a day:**

```
Do you have 15 minutes?
├─ No → Just update DAILY-LOG.md, commit and move on
└─ Yes → Create README.md + LAUNCH-TRACKER.md

Do you have 30 minutes?
├─ No → Stop here
└─ Yes → Add index.html showcase

Do you have 60 minutes?
├─ No → Stop here
└─ Yes → Add platform READMEs or DAY-X-SUMMARY.md

Are results particularly interesting?
├─ No → Stop here
└─ Yes → Go deep! Full documentation justified.
```

---

## Weekly Cleanup

**Every Sunday** (or week-end):
- Skim through the week's docs
- Fix any broken links
- Update PLATFORM-TRACKER with weekly insights
- Archive any redundant files
- Don't spend more than 30 min

---

## End Goal

At the end of 30 days, you should have:

**Minimum** (if using speed mode all month):
- 30 README.md files (day overviews)
- Complete DAILY-LOG.md (30 lines)
- Complete PLATFORM-TRACKER.md (updated weekly)

**Standard** (recommended approach):
- Above, plus:
- 20-30 HTML showcases
- Key insights documented
- Platform comparison data

**Maximum** (if going deep on some days):
- Above, plus:
- 10-15 deep dive summaries
- Platform-specific READMEs for interesting cases
- Screenshots of memorable implementations
- Comprehensive analysis docs

---

## Remember

> **The code is the primary output. The docs are just to help you remember and share.**

Don't let documentation become the bottleneck. If you're spending more time documenting than creating, something's wrong.

**Rule of thumb**: Documentation should take 25% of total time
- 60 min on platforms → 15 min on docs
- 80 min including iteration → 20 min on docs

---

**Last Updated**: November 2, 2025
**Based on**: Day 1 actual experience
