# Day 12: Climate Migration Flows - Data Preparation

**Date:** November 12, 2025
**Concept:** Climate Migration Flows 2025-2125

## Overview

Pre-process multiple data sources into a single combined dataset to avoid platform download failures. Most AI coding platforms cannot download data from URLs (see Day 3 analysis), so we'll provide everything pre-processed.

## Data Sources

### 1. Natural Earth - Countries (Base Map)
- **Source:** Natural Earth 1:110m Admin 0 Countries
- **URL:** https://www.naturalearthdata.com/downloads/110m-cultural-vectors/
- **File:** `ne_110m_admin_0_countries.zip`
- **Purpose:** Base map boundaries
- **Processing:** Simplify to ~150KB, keep only essential properties

### 2. UN World Population Prospects 2024
- **Source:** UN Department of Economic and Social Affairs
- **URL:** https://population.un.org/wpp/Download/Standard/CSV/
- **File:** `WPP2024_General.csv` or similar
- **Purpose:** Population projections for 2025 and 2125
- **Processing:** Extract country-level projections, join to country boundaries

### 3. IPCC AR6 Climate Projections (Simplified)
- **Source:** IPCC AR6 Working Group I
- **URL:** https://zenodo.org/records/5914710 (or similar)
- **Purpose:** Temperature projections, sea level rise
- **Processing:** Create simplified habitability index based on:
  - Temperature threshold (>35°C wet-bulb = uninhabitable)
  - Sea level rise exposure
  - Water stress indicators

### 4. ND-GAIN Climate Vulnerability Index (Simplified)
- **Source:** Notre Dame Global Adaptation Initiative
- **URL:** https://gain.nd.edu/our-work/country-index/
- **Purpose:** Climate vulnerability scores
- **Processing:** Extract country-level vulnerability indices

## Output Dataset Structure

### File: `climate-migration-2125.geojson`

**Format:** GeoJSON FeatureCollection
**Target Size:** < 700KB (to stay under 1MB with other assets)

**Properties per country feature:**
```json
{
  "type": "Feature",
  "properties": {
    "name": "Country Name",
    "iso_a3": "ISO3",
    "pop_2025": 12345678,
    "pop_2125": 12345678,
    "habitability_index": 75,  // 0-100, higher = more habitable
    "habitability_category": "refuge",  // "refuge" | "moderate" | "vulnerable" | "uninhabitable"
    "vulnerability_score": 0.65,  // 0-1, higher = more vulnerable
    "temperature_rise_2125": 2.5,  // degrees C
    "sea_level_rise_2125": 0.5,  // meters
    "region": "region_name"
  },
  "geometry": { /* simplified country polygon */ }
}
```

### File: `migration-flows-2125.json`

**Format:** JSON array of flow definitions
**Purpose:** Source/destination pairs for platforms to generate flow lines algorithmically

**Structure:**
```json
[
  {
    "source": "BGD",  // ISO3 code
    "destination": "IND",
    "source_name": "Bangladesh",
    "destination_name": "India",
    "flow_volume_2125": 50000000,  // estimated migrants
    "reason": "coastal_flooding",
    "region": "South Asia"
  },
  // ... more flows
]
```

**Flow Categories:**
- Coastal flooding → Inland (Bangladesh → India, Vietnam → China)
- Extreme heat → Northern (Sahel → Mediterranean, Middle East → Europe)
- Water stress → Water-rich (India → Canada, Australia → New Zealand)
- Sea level rise → Higher elevation (Maldives → India, Netherlands → Germany)

**Target:** 30-50 major flow pairs representing largest migration corridors

## Processing Steps

1. **Download Natural Earth countries**
   - Simplify using mapshaper.org or topojson
   - Keep only essential properties (name, ISO codes)
   - Target: ~150KB

2. **Download/process UN population data**
   - Extract 2025 and 2125 projections
   - Join to country boundaries by ISO code
   - Handle missing data (use 2025 value or regional average)

3. **Create simplified habitability index**
   - Combine temperature, sea level, water stress into single 0-100 score
   - Categorize: refuge (80-100), moderate (50-79), vulnerable (25-49), uninhabitable (0-24)
   - Use simplified climate projections (not full IPCC dataset)

4. **Generate migration flow pairs**
   - Identify vulnerable countries (low habitability)
   - Identify refuge countries (high habitability, capacity)
   - Create source→destination pairs
   - Estimate flow volumes based on population and vulnerability

5. **Combine into single GeoJSON**
   - Merge country boundaries with population and habitability data
   - Validate geometry
   - Final size check (< 700KB)

## Script: `build-climate-migration-data.mjs`

Will handle:
- Downloading/loading data sources
- Processing and joining datasets
- Calculating habitability index
- Generating flow pairs
- Outputting combined GeoJSON + flow JSON

## Notes

- **Simplification is key:** We're creating a simplified model, not a full climate science dataset
- **Flow lines are algorithmic:** Platforms will generate the actual route lines from source/destination pairs
- **Mock data is acceptable:** Some platforms will use mock data, but the structure enables meaningful visualization
- **Focus on major corridors:** 30-50 flows covering the largest expected migration patterns

