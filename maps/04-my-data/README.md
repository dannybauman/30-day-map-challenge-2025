# Day 4: My Data – Disney Park Visit Mix

**Date:** November 4, 2025  
**Theme:** My Data (personal dataset storytelling)

## Concept

Aggregate my own Google Maps Timeline exports to see where I actually spend time inside Disney parks. Each park becomes one point on the map with total visits, unique visit days, total hours on the ground, and first/last visit timestamps. The current dataset covers my Anaheim trip and already shows a clear bias toward Disneyland Park.

## Dataset

- Source file: `data/disney-park-visits.geojson`
- Records: 2 parks (Disneyland Park, Disney California Adventure)
- Metrics per park: `visit_count`, `unique_visit_days`, `total_hours`, `first_visit`, `last_visit`, `sample_places`
- Sanitization: home ZIP removed before processing, visits aggregated to park centroids, no raw traces committed

## Processing workflow

1. Drop Google Timeline exports in `private-data/google-takeout/location-history/`.
2. Run `node scripts/build-disney-park-visits.mjs` from `maps/04-my-data/`.
3. Script parses the Semantic Location History format, matches visits against configured park bounds, filters out exclusion circles, and writes the aggregated GeoJSON.

## Quick stats (Anaheim trip)

- Total visits: 7 (6 Disneyland Park, 1 California Adventure)
- Total time: 40.36 hours across both parks
- Visit streak: three consecutive days at Disneyland Park (Sept 2-4, 2025)

## Human notes

- Confirmed Claude’s “Shadow Calendar” suggestion was not a map and redirected it.
- Chose the Disney concept to keep the story personal but not tied to my home ZIP.
- Reviewed the generated GeoJSON to ensure only aggregated values are published.
