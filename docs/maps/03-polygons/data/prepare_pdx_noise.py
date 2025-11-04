#!/usr/bin/env python3
"""
Prepare PDX Airport Noise Contour Data

This script:
1. Loads noise contour data (shapefile or GeoJSON)
2. Clips to ~10-15 km around PDX
3. Simplifies polygons
4. Standardizes attributes
5. Exports as GeoJSON for embedding

Usage:
    python prepare_pdx_noise.py input.shp output.geojson
    python prepare_pdx_noise.py input.geojson output.geojson
"""

import sys
import json
from pathlib import Path

try:
    import geopandas as gpd
    import pandas as pd
    import shapely
    from shapely.geometry import Point
except ImportError:
    print("Error: geopandas, pandas, and shapely are required.")
    print("Install with: pip install geopandas pandas shapely")
    sys.exit(1)

# PDX coordinates
PDX_CENTER = Point(-122.5951, 45.5898)  # (lon, lat)
CLIP_RADIUS_KM = 15  # kilometers
SIMPLIFY_TOLERANCE = 0.0001  # degrees (roughly 10-15 meters)

def clip_to_pdx(gdf, center=PDX_CENTER, radius_km=CLIP_RADIUS_KM):
    """Clip geometries to a circle around PDX."""
    # Create bounding box (approximate circle)
    # 1 degree ≈ 111 km at this latitude
    buffer_deg = radius_km / 111.0
    bbox = shapely.geometry.box(
        center.x - buffer_deg,
        center.y - buffer_deg,
        center.x + buffer_deg,
        center.y + buffer_deg
    )
    
    # Clip to bounding box
    gdf_clipped = gdf[gdf.intersects(bbox)]
    
    # Further clip to actual circle if needed
    circle = center.buffer(buffer_deg)
    gdf_clipped['geometry'] = gdf_clipped.geometry.intersection(circle)
    
    return gdf_clipped

def standardize_attributes(gdf):
    """Standardize DNL attributes."""
    # Try to find DNL column
    dnl_cols = [col for col in gdf.columns if 'dnl' in col.lower() or 'level' in col.lower() or 'noise' in col.lower()]
    
    if dnl_cols:
        # Use existing DNL column
        gdf['dnl'] = gdf[dnl_cols[0]]
    else:
        # Try to extract from other columns or assign default
        print("Warning: No DNL column found. Attempting to infer from data...")
        # You may need to manually inspect and map attributes
        gdf['dnl'] = 65  # Default
    
    # Ensure dnl is numeric
    gdf['dnl'] = pd.to_numeric(gdf['dnl'], errors='coerce')
    
    # Create human-readable level
    gdf['level'] = gdf['dnl'].apply(lambda x: f"{int(x)} dB DNL" if pd.notna(x) else "Unknown")
    
    # Keep only necessary columns
    keep_cols = ['dnl', 'level', 'geometry']
    gdf = gdf[keep_cols]
    
    return gdf

def simplify_polygons(gdf, tolerance=SIMPLIFY_TOLERANCE):
    """Simplify polygon geometries."""
    gdf['geometry'] = gdf.geometry.simplify(tolerance, preserve_topology=True)
    return gdf

def main():
    if len(sys.argv) < 3:
        print("Usage: python prepare_pdx_noise.py <input_file> <output_file>")
        print("  input_file:  shapefile (.shp) or GeoJSON (.geojson)")
        print("  output_file: GeoJSON (.geojson)")
        sys.exit(1)
    
    input_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2])
    
    if not input_path.exists():
        print(f"Error: Input file not found: {input_path}")
        sys.exit(1)
    
    print(f"Loading: {input_path}")
    
    # Load data
    try:
        gdf = gpd.read_file(input_path)
    except Exception as e:
        print(f"Error loading file: {e}")
        sys.exit(1)
    
    print(f"  Loaded {len(gdf)} features")
    print(f"  CRS: {gdf.crs}")
    
    # Reproject to WGS84 if needed
    if gdf.crs != 'EPSG:4326':
        print("  Reprojecting to WGS84...")
        gdf = gdf.to_crs('EPSG:4326')
    
    # Clip to PDX area
    print("  Clipping to PDX area...")
    gdf = clip_to_pdx(gdf)
    print(f"  After clipping: {len(gdf)} features")
    
    # Standardize attributes
    print("  Standardizing attributes...")
    gdf = standardize_attributes(gdf)
    
    # Simplify
    print("  Simplifying polygons...")
    gdf = simplify_polygons(gdf)
    
    # Remove empty geometries
    gdf = gdf[~gdf.geometry.is_empty]
    
    print(f"  Final: {len(gdf)} features")
    
    # Export
    print(f"Exporting to: {output_path}")
    gdf.to_file(output_path, driver='GeoJSON')
    
    # Check file size
    file_size_kb = output_path.stat().st_size / 1024
    print(f"  File size: {file_size_kb:.1f} KB")
    
    if file_size_kb > 100:
        print("  Warning: File size > 100 KB. Consider further simplification.")
    
    print("Done!")

if __name__ == '__main__':
    main()

