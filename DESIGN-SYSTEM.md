# Design System & Visual Standards

**Last Updated:** November 4, 2025
**Source Docs Consolidated:** `maps/01-points/DESIGN-SYSTEM-UPDATE.md`, `maps/01-points/TASK-2-IMPROVEMENTS.md`, `maps/01-points/MOBILE-RESPONSIVE-NOTES.md`, `maps/01-points/FIXES-APPLIED.md`, `DOCUMENTATION-GUIDE.md`, `WORKFLOW.md`, Day 2 design notes.

This guide centralizes every design decision that shaped the day showcase pages and platform cards. Treat it as the single reference for layout, styling, and visual QA as we progress through the 30 Day Map Challenge.

---

## 1. Layout Foundations

- **Screenshot grid:** Use a Bootstrap row with `g-3`. Standard cards place desktop in `col-7` and mobile in `col-5`, with the desktop caption wrapped in `<strong>`. If a single winner spans the full width, follow the template guidance (`col-8` desktop, `col-4` mobile).
- **Spacing:** Screenshot captions stay `mt-1`. Section wrappers in the template rely on `mb-5`; keep that value unless a layout change requires something tighter.
- **Platform card structure:** Copy markup from the Platform Results block in `templates/day-showcase-template.html`. That version already includes the grade badge placement, success/partial/failed header colors, and screenshot guidance. The standalone snippet file is legacy—use it only as a starting point if you immediately replace the `Quality` field and rating badges with the grade badge pattern.
- **Insight boxes:** Keep the white background, 4px left border, and rounded corners baked into the template. Avoid ad‑hoc overrides.
- **Mobile-first HTML:** Stick with Bootstrap utilities (no inline widths). Let the framework handle responsive behavior; we only adjust column sizing through the grid classes noted above.

---

## 2. CSS Components

All custom styles live in `templates/day-showcase-template.html`. When verifying a page, confirm these definitions are present (and do not re-declare them per day):

```css
.platform-card img {
    width: 100%;
    height: auto;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.screenshot-desktop { border: 2px solid #495057; }
.screenshot-mobile { border: 2px solid #6c757d; opacity: 0.95; }
.status-winner { background: linear-gradient(135deg, #198754 0%, #20c997 100%); }
.status-strong { background: linear-gradient(135deg, #0d6efd 0%, #6610f2 100%); }
.status-good { background: linear-gradient(135deg, #0dcaf0 0%, #20c997 100%); }
.status-partial { background: linear-gradient(135deg, #ffc107 0%, #fd7e14 100%); }
.status-failed { background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%); }
.grade-a { background-color: #28a745; color: #fff; font-weight: 500; }
.grade-b-plus { background-color: #0d6efd; color: #fff; font-weight: 500; }
.grade-b { background-color: #007bff; color: #fff; font-weight: 500; }
.grade-c-plus { background-color: #ffc107; color: #000; font-weight: 500; }
.grade-c { background-color: #fd7e14; color: #fff; font-weight: 500; }
.grade-c-minus { background-color: #fd7e14; color: #fff; font-weight: 500; opacity: 0.85; }
.grade-d { background-color: #ff4500; color: #fff; font-weight: 500; }
.grade-f { background-color: #dc3545; color: #fff; font-weight: 500; }
```

If an update is necessary, adjust the template first, then re-run the build or patch downstream HTML so everything stays synchronized.

---

## 3. Grade & Color System

- **Grade badges:** Every platform card uses the `grade-*` badge classes defined in the template (`Grade A`, `Grade B+`, … `Grade F`). Do not reintroduce the older “Quality” field or `rating-*` spans.
- **Header colors:** Full successes can keep brand colors or gradients (e.g., Lovable `bg-info`, Bolt.new `bg-primary`, MagicPatterns `#9b59b6`). Partial successes default to `bg-warning text-dark`; failures default to `bg-danger text-white`.
- **Status gradients:** The `.status-*` gradient classes remain available for callouts or supplementary chips, but they are optional now that grade badges communicate performance.
- **Contrast check:** Whenever you deviate from Bootstrap defaults, ensure `text-white` or `text-dark` keeps AA contrast, especially on custom brand colors.

---

## 4. Responsive & Screenshot Standards

- **Capture workflow:** Desktop at 1440×900 (`screenshot.png`), mobile at 393×852 (`screenshot-mobile.png`). Wait five seconds for assets to resolve; accept permission prompts before capturing.
- **Multiple screenshots:** When capturing additional screenshots for specific features or issues:
  - **Desktop**: Use naming pattern `screenshot-{description}.png` (e.g., `screenshot-tooltip-issue.png`)
  - **Mobile**: Use naming pattern `screenshot-mobile-{description}.png` (e.g., `screenshot-mobile-map.png` for scrolled view showing map)
  - **HTML inclusion**: Stack multiple screenshots in the same column (desktop screenshots in desktop column, mobile in mobile column) with `mt-2` spacing between them
  - **Example pattern** (from Day 2 Lovable): Desktop column shows two stacked images (main + tooltip issue), mobile column shows one
- **Folder naming:** Each platform gets a folder (`chatgpt-canvas/`, `bolt-new/`, etc.) with `README.md`, `screenshot.png`, and (when captured) `screenshot-mobile.png`. Additional screenshots follow the naming patterns above.
- **Testing checklist:** Resize manually or use responsive dev tools to confirm:
  1. Sidebar elements stack cleanly.
  2. Legends remain readable and do not consume >50% width on mobile.
  3. Touch targets stay large enough (Tailwind defaults help here).
  4. No horizontal scrolling.
- **Documentation:** Log responsive grades and notable patterns in the day's README or summary. `maps/01-points/MOBILE-RESPONSIVE-NOTES.md` holds historical findings—reference it when spotting regressions.

---

## 5. Visualization Patterns to Prioritize

- **Legends:** For directional datasets (e.g., Day 2 street bearings), request circular legends explicitly. Linear gradients or four-square compass cards performed worse in usability tests.
- **Performance cues:** Record when pan/zoom drops below acceptable smoothness (≈10s lag). ChatGPT Canvas and Bolt.new slowed under large payloads; note that in the platform cards so readers know when patience is required.
- **Framework preference:** Tailwind-based outputs (Bolt.new, Lovable, MagicPatterns, V0.dev) delivered consistent responsive wins. When providing human feedback, nudge platforms toward Tailwind or modern utility CSS.
- **Human QA:** Always annotate what you inspected (e.g., “Verified HSL -> bearing mapping,” “Corrected tooltip contrast”). The HTML `Human Review` block should mirror the notes you keep in Markdown.

---

## 6. Day Page Checklist

Before publishing a new day:

1. Update `templates/day-showcase-template.html` if design rules evolve. Run diffs to confirm no day pages are out of sync.
2. Populate the stat cards (platform count, usable results, build time ~approximate, manual review callout).
3. Fill ideation cards with actual concepts from `IDEATION-RESPONSES.md`.
4. Add platform cards using the snippet and design rules above.
5. Embed desktop + mobile screenshots for every platform with a public build. Link to live demos.
6. Highlight 2–3 design takeaways (legend effectiveness, responsive quirks, UX wins).
7. Verify contrast using quick dev tools (Chrome Lighthouse or manual inspection) when colors drift from Bootstrap defaults.

---

## 7. Keeping the System Healthy

- **Single source of truth:** This document replaces `maps/01-points/DESIGN-SYSTEM-UPDATE.md`; retire that file in day folders going forward.
- **Change log:** When the design system shifts, add a dated, bullet-style summary at the top of this file and reference the affected templates.
- **Cross-document links:** `DOCUMENTATION-GUIDE.md` and `WORKFLOW.md` now point here for design guidance. Update their references if section names change.
- **Pull requests / commits:** Mention “Design system update” in commit messages so later audits can locate visual changes quickly.

---

Use this file as the first stop whenever you spin up a new day or refactor HTML. Consistency was the Day 1 lesson; maintain it so later analysis focuses on platform performance, not visual drift.
