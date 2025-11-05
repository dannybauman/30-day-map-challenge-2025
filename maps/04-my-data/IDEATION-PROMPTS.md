# Day 4: My Data - Ideation Prompt

**Date:** November 4, 2025  
**Theme:** My Data - Map something personal using your own dataset (GPS traces, commute data, unique logs).

**Attribution:**
- **Human (Danny):** Set the creative direction, asked for the ideation prompt to make the AI recommend which personal dataset to use, flagged privacy as a top priority, and confirmed that all platforms must receive the exact same prompt for a fair comparison.
- **AI (Cursor):** Consolidated the workflow notes, formatted the unified prompt, and captured the documentation updates.

**Human Direction:**
- The concept must revolve around personal exports that are quick to grab (Google Location History JSON, Strava GPX runs, Apple Health CSV summaries, transit tap history, coffee shop check-ins, photo EXIF locations, etc.).
- Each AI should propose how to use that personal data (or a combination of data sources) in the map concept instead of assuming a dataset is already chosen.
- Emphasize privacy: aggregate, jitter, or summarize so home/work addresses are never exposed; prefer neighborhood or route-level storytelling.
- Keep data lightweight (<= 1 MB after preparation) and ready to embed so all coding platforms can load it without external APIs.
- Highlight why the concept feels personal and worth sharing within the one-hour implementation window.

---

## Unified Ideation Prompt

**Use this EXACT prompt for Claude, ChatGPT, and Gemini to ensure a fair comparison:**

```
Today's #30DayMapChallenge theme is: MY DATA

Theme description: Map something personal using your own dataset (GPS traces, commute records, check-ins, etc.).

Context:
- I can quickly export personal datasets such as Google Location History JSON, Strava GPX runs, Apple Health walking distance CSV files, transit tap history spreadsheets, coffee shop check-in logs, or photo EXIF location data.
- You should decide which personal dataset(s) (one or a pairing) will power each concept and explain why they fit.
- Privacy comes first: aggregate, cluster, jitter, or generalize so no exact home/work addresses or sensitive locations appear.
- Implementation will happen across 8-12 AI coding platforms that prefer embedded static data (GeoJSON, CSV, JSON). Avoid external APIs or anything needing live authentication.

Give me 2 map concepts:
- 1 creative/unexpected interpretation of my personal data
- 1 straightforward/classic approach

For each concept include:
1. What the map shows (1-2 sentences)
2. Which personal dataset(s) to export and why they work (mention the specific file type/name if relevant)
3. Data preparation steps (export path, filtering, cleaning, anonymizing)
4. How to embed the prepared data inside the project (format, approximate record count, fields)
5. Difficulty level (Easy/Medium/Hard) and estimated build time
6. One unique aspect that keeps it interesting while respecting privacy

Constraints:
- Target prepared dataset size <= 1 MB.
- No live API calls; everything is included with the project.
- Achievable in ~1 hour per platform.
- Must clearly signal the "My Data" theme to viewers.
- Include at least one concrete privacy safeguard per concept.

Format your response as a numbered list for easy scanning.
```

---

**Next Step:** Copy this exact prompt into Claude.ai, ChatGPT, and Gemini. Collect the full responses from all three platforms and paste them into `maps/04-my-data/IDEATION-RESPONSES.md` before moving on to concept selection.
