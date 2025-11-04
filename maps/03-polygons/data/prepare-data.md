# PDX Noise Contour Data Preparation

## Data Sources Found

1. **Big Ten Academic Alliance Geoportal** (Recommended)
   - Dataset: "Airport Noise DNLS 65 and 68 [Oregon--Portland]"
   - URL: https://geo.btaa.org/catalog/e6b6fe6c6a6840a096f89f6be703dc64_144
   - Format: Likely shapefile or GeoJSON
   - Contains: 65 and 68 DNL contours

2. **City of Portland**
   - Noise Impact Overlay Zone maps (may be PDF format)
   - URL: https://www.portland.gov/ppd/documents/zoning-code-information-guide-portland-international-airport-noise-impact-overlay/download
   - Contains: 55, 65, 68 DNL contours

## Steps to Prepare Data

### Option 1: Direct Download (if GeoJSON available)
1. Download from BTAA Geoportal
2. If already GeoJSON, simplify and clip
3. Save as `pdx_noise.geojson`

### Option 2: Shapefile Conversion
1. Download shapefile from BTAA Geoportal
2. Convert to GeoJSON using `ogr2ogr` or Python `geopandas`
3. Simplify and clip
4. Save as `pdx_noise.geojson`

### Option 3: Python Script (if manual download needed)
Use the `prepare_pdx_noise.py` script to:
- Load shapefile or GeoJSON
- Clip to ~10-15 km around PDX center
- Simplify polygons
- Add/standardize DNL attributes
- Export as GeoJSON

## Target Output

- File: `pdx_noise.geojson`
- Format: GeoJSON FeatureCollection
- Features: 3-6 polygons (55, 65, 68 DNL bands)
- Size: < 100 KB
- Properties: `dnl` (number), `level` (string like "65 dB DNL")
- Center: PDX at 45.5898° N, -122.5951° W
- Extent: ~10-15 km radius

