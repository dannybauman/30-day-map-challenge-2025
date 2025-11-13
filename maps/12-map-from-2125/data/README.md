# Day 12 Data Files

Processed datasets for the Climate Migration Flows 2025-2125 map.

## Files

- `climate-migration-2125.geojson` - Combined country boundaries with population and habitability data
- `migration-flows-2125.json` - Source/destination pairs for flow line generation

## Setup

### Step 1: Download Natural Earth Countries

1. Go to: https://www.naturalearthdata.com/downloads/110m-cultural-vectors/
2. Download: "Admin 0 – Countries" (ne_110m_admin_0_countries.zip)
3. Extract the ZIP file
4. Copy `ne_110m_admin_0_countries.geojson` to this directory:
   ```
   maps/12-map-from-2125/data/ne_110m_admin_0_countries.geojson
   ```

**Alternative:** If you have the shapefile version, convert it to GeoJSON first using:
- mapshaper.org (drag and drop, export as GeoJSON)
- Or GDAL: `ogr2ogr -f GeoJSON ne_110m_admin_0_countries.geojson ne_110m_admin_0_countries.shp`

### Step 2: Run the Build Script

```bash
node maps/12-map-from-2125/scripts/build-climate-migration-data.mjs
```

This will:
- Load Natural Earth countries
- Add population projections (2025, 2125)
- Add habitability index and climate data
- Generate migration flow pairs
- Output combined GeoJSON and flow JSON files

### Step 3: Simplify if Needed

If the output GeoJSON is too large (>700KB), simplify it:

1. Go to https://mapshaper.org
2. Drag and drop `climate-migration-2125.geojson`
3. In the console, run: `simplify 10%` (adjust percentage as needed)
4. Export as GeoJSON
5. Replace the original file

## Data Structure

### climate-migration-2125.geojson

GeoJSON FeatureCollection with country polygons. Each feature has:

- `name`: Country name
- `iso_a3`: ISO 3166-1 alpha-3 code
- `pop_2025`: Population in 2025
- `pop_2125`: Population in 2125
- `habitability_index`: 0-100 score (higher = more habitable)
- `habitability_category`: "refuge" | "moderate" | "vulnerable" | "uninhabitable"
- `vulnerability_score`: 0-1 (higher = more vulnerable)
- `temperature_rise_2125`: Projected temperature rise in °C
- `sea_level_rise_2125`: Projected sea level rise in meters
- `region`: Geographic region

### migration-flows-2125.json

JSON array of flow definitions:

```json
{
  "source": "BGD",
  "destination": "IND",
  "source_name": "Bangladesh",
  "destination_name": "India",
  "flow_volume_2125": 50000000,
  "reason": "coastal_flooding",
  "region": "South Asia"
}
```

Platforms will generate actual route lines algorithmically from these source/destination pairs.

## Notes

- Data is simplified/synthetic for demonstration purposes
- Not a full climate science dataset - represents expected patterns
- Some countries may not have specific data (will use defaults)
- Flow volumes are estimates based on vulnerability and population

