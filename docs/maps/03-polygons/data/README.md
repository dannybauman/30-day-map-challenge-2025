# PDX Noise Contour Data Preparation Guide

## Quick Start Options

### Option 1: Direct Download (Easiest)
1. Visit: https://geo.btaa.org/catalog/e6b6fe6c6a6840a096f89f6be703dc64_144
2. Click "Download" or "Export" button
3. If GeoJSON available: Save as `pdx_noise_raw.geojson`
4. If shapefile: Download .zip, extract, then convert (see below)

### Option 2: Online Conversion (No install needed)
1. Download shapefile from BTAA Geoportal
2. Use online converter: https://mapshaper.org/ or https://geojson.io/
3. Upload shapefile, simplify, export as GeoJSON
4. Save as `pdx_noise.geojson`

### Option 3: Python Script (If you have Python/GIS tools)
See `prepare_pdx_noise.py` - requires geopandas installation

---

## Detailed Steps

### Step 1: Download Data

**Primary Source: Big Ten Academic Alliance Geoportal**
- URL: https://geo.btaa.org/catalog/e6b6fe6c6a6840a096f89f6be703dc64_144
- Dataset: "Airport Noise DNLS 65 and 68 [Oregon--Portland]"
- Contains: 65 and 68 DNL contours

**Alternative: City of Portland**
- May have PDF maps (requires georeferencing)
- URL: https://www.portland.gov/ppd/documents/zoning-code-information-guide-portland-international-airport-noise-impact-overlay/download

### Step 2: Prepare Data

**If you have GeoJSON already:**
1. Open in https://geojson.io/
2. Use "Simplify" tool to reduce complexity
3. Export as `pdx_noise.geojson`

**If you have Shapefile:**
1. Use online converter (mapshaper.org or geojson.io)
2. Or use Python script (see below)

**If you have PDF:**
- Requires georeferencing in QGIS or ArcGIS
- Not recommended for this quick project

### Step 3: Process Data

**Target specifications:**
- File: `pdx_noise.geojson`
- Format: GeoJSON FeatureCollection
- Features: 2-3 polygons (65 and 68 DNL bands, possibly 55 if available)
- Size: < 100 KB
- Properties: 
  - `dnl`: number (e.g., 65, 68)
  - `level`: string (e.g., "65 dB DNL")
- Center: PDX at 45.5898° N, -122.5951° W
- Extent: ~10-15 km radius around PDX

**Manual cleanup in geojson.io:**
1. Load your GeoJSON
2. Zoom to PDX area
3. Delete any features outside 15km radius
4. Simplify geometries (Edit → Simplify)
5. Ensure each feature has `dnl` property
6. Add `level` property: `"65 dB DNL"` format
7. Export

**Using Python script:**
```bash
# Install dependencies (if needed)
pip install geopandas pandas shapely

# Run script
python prepare_pdx_noise.py input.shp pdx_noise.geojson
# or
python prepare_pdx_noise.py input.geojson pdx_noise.geojson
```

### Step 4: Verify Data

Check that `pdx_noise.geojson`:
- ✅ Has 2-3 polygon features
- ✅ File size < 100 KB
- ✅ Each feature has `dnl` and `level` properties
- ✅ Coordinates are in WGS84 (lon, lat)
- ✅ Polygons are simplified (not too detailed)

### Step 5: Test in Browser

Open `pdx_noise.geojson` in https://geojson.io/ to verify:
- Polygons display correctly
- Attributes are correct
- Shape looks good (organic lobed forms)

---

## Expected Result

The final `pdx_noise.geojson` should contain 2-3 polygons representing:
- **65 DNL contour**: Outer/moderate noise zone
- **68 DNL contour**: Inner/higher noise zone  
- **55 DNL contour**: (if available) Outer/lower noise zone

The polygons should have organic, lobed shapes extending from PDX in different directions (following flight paths), not perfect circles.

---

## Troubleshooting

**Can't find download button on BTAA site?**
- Try clicking "Export" or "Download" in the dataset page
- Look for "Download" link in the right sidebar
- May need to create free account

**File too large?**
- Simplify more aggressively in geojson.io
- Or increase `SIMPLIFY_TOLERANCE` in Python script

**Missing DNL attributes?**
- Manually add in geojson.io: Click feature → Edit properties → Add `dnl: 65`
- Or edit GeoJSON file directly

**Wrong coordinate system?**
- Ensure coordinates are WGS84 (EPSG:4326)
- Longitude should be around -122.6, latitude around 45.6

---

## Next Steps

Once `pdx_noise.geojson` is ready:
1. Place it in `maps/03-polygons/data/` directory
2. Update `IMPLEMENTATION-PROMPT.md` if needed to reference actual data
3. Ready to launch on platforms!

