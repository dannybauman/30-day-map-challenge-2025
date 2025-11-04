# PDX Noise Contour Data Preparation

**Date:** November 3, 2025  
**Status:** Raw data downloaded, needs processing

## Data Source

**Source:** Big Ten Academic Alliance Geoportal  
**URL:** https://geo.btaa.org/catalog/e6b6fe6c6a6840a096f89f6be703dc64_144  
**Dataset:** "Airport Noise DNLS 65 and 68 [Oregon--Portland]"

## Current Data (`pdx_noise_raw.geojson`)

**File:** `maps/03-polygons/data/pdx_noise_raw.geojson`  
**Size:** 50 KB  
**Format:** GeoJSON FeatureCollection  
**Features:** 6 LineString features  
**CRS:** WGS84 (OGC:1.3:CRS84)

**DNL Contours Found:**
- 68 DNL: 2 LineString features
- 65 DNL: 3 LineString features  
- 55 DNL: 1 LineString feature

**Properties:**
- `DNL_CONTOUR`: Noise level (55, 65, 68)
- `Disclosure`, `Easement`, `Insulation`, `Residential_uses`: Zoning info
- `Shape_Length`: Length of line segment

## Processing Needed

**Issue:** Data is LineStrings, but we need Polygons for the map visualization.

**Steps Required:**
1. Convert LineStrings to Polygons (close the loops)
2. Group by DNL_CONTOUR value (may need to merge multiple LineStrings per DNL level)
3. Simplify polygons (reduce complexity while preserving organic shapes)
4. Standardize attributes:
   - Add `dnl`: numeric value from `DNL_CONTOUR`
   - Add `level`: human-readable string like "65 dB DNL"
   - Keep only necessary properties
5. Clip to ~10-15 km around PDX center (45.5898° N, -122.5951° W)
6. Target file size: < 100 KB

**Note:** The implementation prompt tests whether AI platforms can handle this conversion themselves. If platforms struggle, we can provide pre-processed data as a fallback.

## Next Steps

1. Platforms will attempt to process the raw data
2. If platforms fail, we can process using `prepare_pdx_noise.py` script
3. Final processed data should be saved as `pdx_noise.geojson` (ready for embedding)

