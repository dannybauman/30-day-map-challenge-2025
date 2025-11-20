# Day 12: Data Feasibility Analysis

**Date:** November 12, 2025
**Concept:** Climate Migration Flows 2025-2125

## Data Requirements from Claude Concept 2

1. **Natural Earth** (countries) - Base map
2. **UN World Population Prospects 2024** - Population data
3. **IPCC AR6 projections** - Climate/temperature projections
4. **ND-GAIN data** - Climate vulnerability indices
5. **Algorithmically generated flow lines** - Migration routes

## Roadblocks from Previous Days

### Pattern 1: Most Platforms Can't Download Data from URLs
**Evidence from Day 3:**
- MagicPatterns: "Could not pull from real data source, but successfully created mock data"
- Bolt.new: "Could not get real data, but successfully created mock data"
- V0.dev: "Could not directly download data, but successfully created mock data"
- ChatGPT Canvas: "Did NOT attempt real data download/processing - Platform chose mock/synthetic data instead"
- **Only Firebase Studio** successfully downloaded real data (Day 3) - and it required manual intervention

**Implication for Day 12:**
- UN World Population Prospects (CSV download) - likely won't work
- IPCC AR6 projections (data downloads) - likely won't work
- ND-GAIN data (API/download) - likely won't work
- Most platforms will create mock data instead

### Pattern 2: Large Inline Data Causes Issues
**Evidence from Day 6:**
- ChatGPT Canvas: "Couldn't handle the GeoJSON file well - tried to copy it all inline which takes a lot of tokens"
- Claude Artifacts: "Had to try a few different ways to get all the GeoJSON data in there" - output stopped, had to click continue

**Evidence from Day 4:**
- Claude Artifacts: Output interruption with large inline GeoJSON
- ChatGPT Canvas: Large inline GeoJSON caused issues

**Implication for Day 12:**
- If we pre-process all data into one large GeoJSON/CSV, platforms may struggle to embed it inline
- Multiple smaller files might work better, but platforms can't download them

### Pattern 3: Multiple Data Sources Are Problematic
**Evidence:**
- Day 3 tested single data source (PDX noise contours) - most platforms still couldn't download it
- Day 4 used single pre-processed file - worked better when uploaded
- No previous day tested multiple data source downloads

**Implication for Day 12:**
- Combining UN + IPCC + ND-GAIN data requires multiple downloads
- Platforms that can't download one source definitely can't download three
- Would need all data pre-processed into single file

### Pattern 4: File Upload Works Better (But Not Always Available)
**Evidence from Day 4:**
- Base44: "No file upload in initial prompt, but uploaded .txt after it started"
- MagicPatterns: "Only allows attaching images at first" - had to provide GeoJSON later
- Firebase Studio: "Only allows attaching images at first, provided GeoJSON later"
- Lovable: "Supports .geojson file uploads directly ✅"

**Implication for Day 12:**
- If we pre-process data, some platforms can use it via upload
- But upload isn't always available in initial prompt
- Many platforms will fall back to mock data

## Feasibility Assessment

### ❌ **High Risk: Multiple Data Source Downloads**
- UN World Population Prospects: CSV download from UN website
- IPCC AR6 projections: Data downloads from Zenodo/IPCC
- ND-GAIN data: API or download from Notre Dame
- **Verdict:** Most platforms will create mock data instead of downloading

### ⚠️ **Medium Risk: Pre-Processed Combined Data**
- Could pre-process all sources into single GeoJSON/CSV
- But large files cause inline embedding issues (Day 6)
- File upload works but not always available initially
- **Verdict:** Would work for some platforms (Lovable, Bolt.new with upload), but others will mock

### ✅ **Low Risk: Natural Earth Base Map**
- Static file, commonly used
- Platforms can embed or fetch
- **Verdict:** Should work fine

### ✅ **Low Risk: Algorithmic Flow Line Generation**
- Flow lines generated from source/destination pairs
- No external data needed
- Can use mock/synthetic source-destination pairs
- **Verdict:** This part should work - platforms can generate routes algorithmically

## Recommendations

### Option 1: Pre-Process All Data (Recommended)
**Approach:**
- Pre-process UN + IPCC + ND-GAIN data into single combined dataset
- Create simplified habitability index (pre-calculated)
- Generate flow lines algorithmically (platforms can do this)
- Provide as single GeoJSON/CSV file

**Pros:**
- Works with platforms that support file upload (Lovable, Bolt.new, etc.)
- Avoids multiple download failures
- Still tells the climate migration story

**Cons:**
- Requires manual data prep (but scriptable)
- Large files may cause inline embedding issues
- Some platforms will still mock data

### Option 2: Simplify Data Sources
**Approach:**
- Use only Natural Earth + simple population estimates
- Create simplified habitability index from basic climate data (temperature thresholds)
- Generate flow lines algorithmically
- Accept that platforms will use mock/synthetic data

**Pros:**
- Simpler, fewer data sources
- Platforms can generate synthetic data that still tells the story
- Less manual prep needed

**Cons:**
- Less "real" data, more synthetic
- May not feel as grounded in actual projections

### Option 3: Hybrid Approach
**Approach:**
- Pre-process core data (countries + habitability index) into single file
- Let platforms generate flow lines algorithmically
- Accept mock data for some platforms, real data for others

**Pros:**
- Balances realism with feasibility
- Some platforms will use real data (Lovable, Bolt.new)
- Others will mock but still create meaningful visualization

**Cons:**
- Mixed results across platforms
- Need to document which used real vs mock data

## Human Decision

**Decision:** ✅ **Proceed with Claude Concept 2 using Option 1 (Pre-Processed Data)**

**Rationale:**
- Concept fits user's animation preference (route + time-based)
- Pre-processing data addresses the multiple download roadblock
- Flow line animation (key feature) can be generated algorithmically by platforms
- Some platforms will use real data (Lovable, Bolt.new), others will mock but still create meaningful visualization

**Implementation Plan:**
1. Pre-process UN + IPCC + ND-GAIN data into single combined dataset
2. Create simplified habitability index (pre-calculated per country)
3. Provide as single GeoJSON/CSV file with:
   - Country boundaries (Natural Earth, simplified)
   - Habitability index (pre-calculated)
   - Population projections (2025, 2125) - simplified
   - Source/destination pairs for flow lines (platforms generate routes algorithmically)
4. Platforms generate flow lines algorithmically from source/destination pairs
5. Accept that some platforms will use mock data, but visualization will still work

**Next Step:** Create implementation prompt with pre-processed data approach

