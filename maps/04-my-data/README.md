# Day 4: My Data – Disney Park Visit Mix

**Date:** November 4, 2025
**Theme:** My Data (personal dataset storytelling)

## Concept

Extract all GPS waypoints from my Google Maps Timeline exports to visualize actual movement paths within the Disneyland parks in California. Each GPS waypoint becomes a point on the map showing where I actually walked/stood throughout the parks, creating a dense point cloud of movement patterns rather than just aggregated visits.

## Dataset

- Source file: `data/disney-park-visits.geojson`
- Records: 118 individual GPS waypoints across 2 parks
- Format: One Point feature per GPS waypoint at actual coordinates
- Properties: `park_id`, `park_name`, `visit_date`, `start_time`, `end_time`, `duration_hours`, `place_name`
- Metadata: `meta.park_summary` contains aggregated stats per park
- Sanitization: home/work locations removed before processing, only filtered waypoints within park bounds

## Processing workflow

1. Drop Google Timeline exports in `private-data/google-takeout/location-history/`.
2. Run `node maps/04-my-data/scripts/build-disney-park-visits.mjs`.
3. Script extracts:
   - `placeVisit` entries (named place visits) from timeline
   - All GPS waypoints from `timelinePath` arrays (movement paths)
   - Activity start/end locations
4. Filters waypoints that fall within configured Disney park bounds (global parks included).
5. Excludes any waypoints within exclusion circles (home/work).
6. Writes GeoJSON with one Point per GPS waypoint at actual coordinates.

## Platform file format notes

When uploading the GeoJSON file to AI development platforms:
- **Lovable**: Supports `.geojson` file uploads directly ✅
- **Bolt.new**: Does NOT support `.geojson` file uploads ❌
  - Workaround: Use `.txt` version or embed GeoJSON inline in JavaScript
- **Google AI Studio**: Does NOT support `.geojson` file uploads ❌
  - Workaround: Use `.txt` version or embed GeoJSON inline in JavaScript
- **Other platforms**: Test file upload support before proceeding

**Note:** A `.txt` version of the GeoJSON file is available at `data/disney-park-visits.txt` for platforms that don't support `.geojson` uploads.

The GeoJSON file can be used directly in code by loading it as JSON or embedding it inline if needed.

## Timeline data coverage

- **Date range:** May 23, 2025 to November 4, 2025
- **Total place visits loaded:** 19,307 from timeline export
- **Disney park waypoints extracted:** 118 individual GPS points
- **Note:** This export only includes data from May 2025 onwards. Trips to Japan and Disney World (if before May 2025) would need separate timeline exports.

## Quick stats (Anaheim trip)

- **Total GPS waypoints:** 118 individual points
- **Parks visited:** 2 (Disneyland Park, Disney California Adventure)
- **Disneyland Park:** 109 waypoints across 4 unique days, 38.57 hours total
- **California Adventure:** 9 waypoints across 3 unique days, 1.79 hours total
- **Visit period:** September 2-5, 2025
- **Data density:** Point cloud showing actual movement paths within parks

## Platform Results

### Lovable
- **Status:** ✅ Success (Grade B)
- **Deployed URL:** https://disneymap-trails.lovable.app
- **Time:** ~5 minutes (first attempt)
- **Notes:** Worked on first attempt! Map renders correctly, stats work, good overview/stats/legend UI. Minor issue: UI takes up a lot of page space (need to scroll for map).

### Bolt.new
- **Status:** ⚠️ Partial Success (Grade B-)
- **Deployed URL:** https://my-disney-park-movem-zgf4.bolt.host
- **Time:** ~5 minutes
- **Notes:** Worked great in development! Nice two-column layout, stats work, extra clustering toggle feature. Deployed but has data loading error (SyntaxError: Unexpected token '<'). UI shows but no data. Tried to fix but ran out of tokens. Assumed fixable.

### Google AI Studio
- **Status:** ❌ Failed (Grade F)
- **Time:** ~10 minutes
- **Notes:** Errors prevented getting to a map. Tried Auto Fix 3 times, still no luck. No deployed code. Screenshot shows dev version with errors.

## Human notes

- Confirmed Claude's "Shadow Calendar" suggestion was not a map and redirected it.
- Chose the Disney concept to keep the story personal but not tied to my home ZIP.
- **Script development:** Updated from aggregated visits (one point per park) to individual GPS waypoints (one point per coordinate) to show actual movement paths.
- **Timeline format:** Verified script handles Google Timeline `semanticSegments` format with `timelinePath` arrays containing string coordinates like `"33.8142605°, -117.9229352°"`.
- **Data discovery:** Only Anaheim parks appear in current export (May-Nov 2025 date range). Japan and Disney World visits (if before May 2025) would need separate timeline exports.
- **Park bounds:** Verified bounds for all global Disney parks; script ready to process any parks when data becomes available.
- **Platform file formats:** Discovered Lovable supports `.geojson` directly, but Bolt.new and Google AI Studio require `.txt` version.
- Reviewed the generated GeoJSON to ensure only filtered waypoints are published (no raw traces, home/work excluded).
