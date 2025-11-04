# Quick Start Guide - Day 1: Points

Your 30-Day Map Challenge 2025 repository is ready! Let's launch Day 1. 🚀

---

## 🎯 The Workflow (Cursor as Your Assistant)

**Cursor's Role**: Workflow manager, prompt crafter, implementation coordinator
**Web LLMs' Role**: Ideation (Claude.ai, ChatGPT, Gemini)
**Dev Platforms' Role**: Implementation (Bolt.new, V0, etc.)

---

## 🚀 Day 1: Points - Start Here!

### Phase 1: Ideation (10 minutes)

I've prepared 3 prompts for you to use on the web versions of each LLM.

#### Step 1: Copy & Paste These Prompts

**Go to Claude.ai** and paste:

```
Today's #30DayMapChallenge theme is: POINTS

Theme description: Point data (locations, POIs, clusters). Focus on symbolization and density visualization.

Give me 2 map concepts for this theme - one creative/unusual and one straightforward/classic.

For each concept, provide:
1. Title and 2-sentence description
2. Specific data source (must be free/accessible)
3. Estimated implementation difficulty (Easy/Medium/Hard)
4. Why it would work well across multiple AI development platforms
5. Visual appeal for social media sharing

Constraints:
- Must be achievable in ~1 hour
- Should work as web-based interactive map
- Data must be free and readily available
- Will be implemented using platforms like Claude Artifacts, Bolt.new, V0.dev, etc.
- Goal is to test which platforms handle point visualization best

Please be specific about data sources and keep concepts realistic for rapid implementation.
```

---

**Go to ChatGPT** and paste:

```
I'm doing the #30DayMapChallenge. Today's theme is: POINTS

Description: Point data (locations, POIs, clusters). Focus on symbolization and density.

Give me 2 map concepts:
- 1 creative/unexpected interpretation
- 1 straightforward/classic approach

For each, specify:
1. Clear concept description (2-3 sentences)
2. Exact data source (with URL if possible)
3. Difficulty level and estimated time
4. Why it's good for testing AI development platforms
5. What makes it visually compelling

Requirements:
- Implementable in 1 hour across multiple platforms
- Free, accessible data
- Web-based interactive visualization
- Should work on platforms like Lovable, ChatGPT Canvas, etc.
- Test case for comparing AI coding tools

Be specific about data access and implementation approach.
```

---

**Go to Gemini** and paste:

```
#30DayMapChallenge Theme: POINTS

Focus: Point data - locations, POIs, clusters. Emphasize symbolization and density visualization.

Please provide 2 map concepts:
1. One creative/artistic interpretation
2. One practical/straightforward approach

For each concept include:
- Title and description (2-3 sentences)
- Data source (must be free and accessible)
- Implementation complexity (Easy/Medium/Hard)
- Why it tests AI platform capabilities well
- Visual/shareability factor

Context:
- I'll implement this across 8-10 AI development platforms (Claude Artifacts, ChatGPT Canvas, Google Gemini Canvas, Bolt.new, V0.dev, Google AI Studio Apps, etc.)
- Goal is comparative analysis: which platforms handle mapping best
- Need concepts that work in ~1 hour
- Should be web-based, interactive
- Will be shared on social media

Focus on feasible, well-defined concepts with clear data sources.
```

---

### Manual checkpoints during ideation
- Note any personal context or constraints you add to the prompts (so you can document it later).
- Flag datasets that need extra license review or human vetting before publishing.

---
#### Step 2: Review & Choose

You now have **6 concepts** (2 from each LLM).

Pick the BEST one based on:
- ✅ Clear, accessible data source
- ✅ Interesting visual potential
- ✅ Reasonable difficulty for 1 hour
- ✅ Will work across multiple platforms
- ✅ You're excited about it!

---

#### Step 3: Paste Back All Ideation Responses to Cursor

Come back here and paste the **full outputs from all 3 platforms** (Claude, ChatGPT, Gemini). I'll:
1. Log all ideas to `maps/0X-theme/IDEATION-RESPONSES.md`
2. Help you analyze and choose the best concept
3. Then craft the perfect implementation prompt
4. Prepare it for all platforms
5. Guide you through the launch

---

## 📋 What to Paste Back

**Paste the complete responses from all 3 platforms:**

- Claude.ai's full response (2 ideas)
- ChatGPT's full response (2 ideas)  
- Gemini's full response (2 ideas)

I'll organize them in the documentation and help you choose the best one.

---

## ⏰ Time Breakdown

```
✅ 0:00-0:05   Repository setup (done!)
📋 0:05-0:15   Get ideation from web LLMs (← YOU ARE HERE)
🔙 0:15-0:20   Paste all 3 full responses back to Cursor, Cursor logs and helps choose
🛠️  0:20-0:25   Cursor helps craft implementation prompt
🚀 0:25-0:30   Launch across all platforms
🔄 0:30-0:50   Review & iterate
💾 0:50-0:60   Save & document
```

---

## 🎯 Next Steps

1. **Open 3 browser tabs**:
   - Claude.ai
   - ChatGPT (chat.openai.com)
   - Gemini (gemini.google.com)

2. **Paste the SAME prompt** into all three platforms (ensures fair comparison)

3. **Review the 6 concepts** they give you

4. **Paste all 3 full responses back here** (Claude, ChatGPT, Gemini)

5. **I'll log them and help you choose** the best concept, then prep for implementation!

6. **Before sharing anything publicly**, run a human QA pass:
   - Verify the dataset terms of use and attribution text.
   - Spot-check a few entries from the API/CSV against the map output.
   - Write a short “Human review” note capturing what you inspected or edited.

---

## 💡 Tips for Choosing

**Good signs**:
- Data source is a known, reliable API or dataset
- Concept is specific, not vague
- You can visualize what it should look like
- It sounds fun to you!

**Red flags**:
- "Might be able to use..." (vague data)
- Requires data scraping or complex preprocessing
- Too many moving parts for 1 hour
- Boring to you

---

## ✅ Human-in-the-Loop Reminders
- Every map must include your own judgement call about accuracy and storytelling—log it in the daily README.
- When AI suggests styling or copy, read it carefully and adjust tone/details before publishing.
- Keep track of any manual code edits (e.g., bug fixes, accessibility tweaks) so you can list them in the "Human review" section later.

**Remember**: You'll be implementing this across 8-10 platforms today, so pick something that:
- Has clear success criteria
- Will look good in screenshots
- You'd be proud to share

## 📊 Grading & Consistency Guidelines

**Grading Scale** (consistent across all days):

**Success Grades (A, B, C) - Full Success:**
- **A (Excellent / Full Success)**: Fast, beautiful, fully functional, great mobile UX. Map renders correctly, all features work, responsive design is strong.
- **B (Good / Full Success)**: Works well, minor issues (e.g., tooltip contrast, legend style), responsive. Map is functional and usable.
- **C (OK / Full Success)**: Usable but significant issues (performance problems, UX issues like sluggish pan/zoom). Map works but has notable problems.

**Partial Success (Grade D):**
- **D (Poor / Partial Success)**: Major functionality broken but some elements work. Examples:
  - UI/legends generated but map doesn't load (CSP/CORS issues)
  - Data loads but visualization broken
  - Map loads but interaction doesn't work
  - **Key point**: Even CSP/CORS failures that generate UI/legends get Grade D (Partial Success), not F. If it generates something useful, it's at least D.

**Failed (Grade F):**
- **F (Failed)**: No code generated at all (platform error, completely unusable - rare). Examples:
  - Platform returns "internal error" and never generates code
  - Platform crashes before any output
  - **Key distinction**: Grade F is reserved for when no code/output is generated at all (platform infrastructure failures), not for code that doesn't work properly.

**Platform Colors** (use Day 1 as source of truth - must match across all days):
- See `maps/01-points/index.html` for complete color scheme
- Each platform has a consistent header color across all days

**Screenshot Sizing** (important for HTML pages):
- Single winner (full width `col-md-12`): Use `col-8` for desktop, `col-4` for mobile
- Multiple winners (`col-md-6`): Use `col-7` for desktop, `col-5` for mobile
- Mobile screenshot should be smaller when winner takes full width to prevent it from being too large

---

## 🆘 If You're Stuck

**Can't access the web LLMs?**
- Let me know and I can adjust the workflow

**Getting too complex ideas?**
- Ask them to simplify
- Emphasize "1 hour implementation"
- Request "with embedded sample data"

**All ideas seem meh?**
- Ask for 2 more from your favorite LLM
- Or try a second round with different phrasing

---

## 🎉 Ready?

You're all set! The prompts are ready above.

**Your mission**:
1. Copy/paste to Claude.ai, ChatGPT, and Gemini
2. Pick the best concept
3. Come back and paste it here
4. Let's build!

**Go for it!** 🚀🗺️

---

*See `WORKFLOW.md` for the full process documentation*
