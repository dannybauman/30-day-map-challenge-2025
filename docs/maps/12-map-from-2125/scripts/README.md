# Day 12 Data Processing Scripts

## build-climate-migration-data.mjs

Pre-processes data for the Climate Migration Flows map.

**Usage:**
```bash
node maps/12-map-from-2125/scripts/build-climate-migration-data.mjs
```

**Requirements:**
- Natural Earth 110m countries GeoJSON file in `../data/ne_110m_admin_0_countries.geojson`
- Node.js 18+ (uses ES modules)

**What it does:**
1. Loads Natural Earth country boundaries
2. Adds population projections (2025, 2125) from simplified dataset
3. Adds habitability index and climate vulnerability data
4. Generates migration flow pairs (source/destination)
5. Outputs combined GeoJSON and flow JSON files

**Output:**
- `../data/climate-migration-2125.geojson` - Combined country data
- `../data/migration-flows-2125.json` - Flow pair definitions

**Data Sources:**
- Natural Earth: https://www.naturalearthdata.com/downloads/110m-cultural-vectors/
- Population data: Simplified estimates based on UN patterns
- Habitability index: Simplified model based on climate projections
- Migration flows: Major expected corridors based on vulnerability patterns

