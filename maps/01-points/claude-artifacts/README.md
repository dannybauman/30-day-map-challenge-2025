# Claude Artifacts - Day 1: Points

## Result: ⚠️ **Partial Success**

### Implementation Details
- **Platform**: Claude Artifacts (Sonnet 4.5)
- **Time to Complete**: ~15 minutes (with 3 fix attempts)
- **Iterations**: 4 (initial + 3 debugging attempts)
- **Status**: UI renders but data loading fails

### Live Links
- **Artifact**: https://claude.ai/public/artifacts/ec2f5f3e-867c-4d0d-a333-078749d2f831
- **Chat**: https://claude.ai/chat/a6227dbe-f442-4d7c-a787-e19f6bf84702

### What Worked Well
- 🎨 Good UI structure and layout design
- 📝 Clean code organization
- ⚡ Fast initial generation
- 🎯 Understood requirements correctly

### Issues Encountered
- ❌ **CSP/CORS violations** - external Leaflet library blocked
- ❌ **Data fetch fails** - USGS API calls don't work in sandbox
- ⚠️ **Sandbox restrictions** - too strict for external resources
- 🔄 **Hard to debug** - multiple iterations didn't resolve issues
- 📉 Console errors:
  - `Loading the stylesheet 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css' violates CSP`
  - `Loading the script 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js' violates CSP`

### Technical Notes
- Artifact sandbox has strict Content Security Policy
- Cannot load external CDN libraries
- External API fetches fail
- Would need embedded data + bundled libraries to work
- Shows "Loading earthquake data..." indefinitely

### Fix Attempts
1. **Attempt 1**: Tried alternative CDN - same CSP violation
2. **Attempt 2**: Attempted to bundle inline - still failed
3. **Attempt 3**: Tried data fetch workarounds - no success

### Rating: **D** (Below Average)

**Verdict**: Claude Artifacts struggled with the same implementation that worked well elsewhere. The sandbox security is too restrictive for external libraries and APIs. Claude's chat is excellent, but the Artifacts platform has significant limitations for web development.

### Recommendation
**Best For**:
- Self-contained visualizations
- Embedded/inline data
- When you can bundle all dependencies

**Avoid For**:
- External API integrations
- CDN-dependent libraries
- Complex web applications
- When you need it to "just work"

### Lessons Learned
- **Top chat model ≠ best code platform**
- Claude is brilliant for ideation and code discussion
- But Claude Artifacts has crippling sandbox restrictions
- Consider ChatGPT Canvas or Bolt.new for web apps instead

---

*Day 1 - Points | #30DayMapChallenge 2025*

