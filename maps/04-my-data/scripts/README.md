# Day 4 Processing Scripts

- `build-disney-park-visits.mjs` – reads Google Maps Timeline exports from `private-data/`, extracts all GPS waypoints from `timelinePath` arrays and `placeVisit` entries, filters waypoints to configured Disney park bounds (includes all global Disney parks), strips home/work buffers, and writes a sanitized GeoJSON with one Point per GPS waypoint at actual coordinates to `maps/04-my-data/data/disney-park-visits.geojson`.

## Script Features

- **Extracts all GPS waypoints:** Processes both `placeVisit` entries (named places) and `timelinePath` arrays (movement paths) from Google Timeline `semanticSegments` format
- **Handles string coordinates:** Parses coordinates in format like `"33.8142605°, -117.9229352°"` with degree symbols
- **Global park support:** Configured bounds for all Disney parks worldwide (Anaheim, WDW, Paris, Tokyo, Shanghai, Hong Kong)
- **Privacy filtering:** Excludes waypoints within configured exclusion circles (home/work)
- **Individual points:** Creates one Point feature per GPS waypoint (not aggregated) to show actual movement paths

## Usage

Update the config section before running so the input filenames, park bounds, exclusion circles, and display points match your dataset. Run with:

```bash
node maps/04-my-data/scripts/build-disney-park-visits.mjs
```

## Output

- **GeoJSON format:** FeatureCollection with one Point per GPS waypoint
- **Properties:** park_id, park_name, visit_date, start_time, end_time, duration_hours, place_name
- **Metadata:** `meta.park_summary` contains aggregated stats per park for summary displays

Raw exports stay inside `private-data/`; only the filtered GeoJSON is committed.

## Platform Upload Notes

When uploading the generated GeoJSON to AI development platforms:
- **Lovable**: Supports `.geojson` file uploads directly ✅
- **Bolt.new**: Does NOT support `.geojson` file uploads ❌
  - Workaround: Convert to `.txt` extension or embed GeoJSON inline in JavaScript
- **Other platforms**: Check file upload support for `.geojson` files

The GeoJSON file can be used directly in code by loading it as JSON or embedding it inline if needed.

## Timeline Format Support

The script handles Google Timeline `semanticSegments` format:
- `timelinePath` arrays with `point` (string) and `time` (ISO string) fields
- `visit` objects with `topCandidate.placeLocation.latLng` (string)
- `activity` objects with `start.latLng`, `end.latLng`, `parking.location.latLng` (strings)

Verified against timeline export from November 2025.
