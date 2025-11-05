# Day 4 Processing Scripts

- `build-disney-park-visits.mjs` – reads Google Maps Timeline exports from `private-data/`, filters visits to the configured Disney park bounds, strips home/work buffers, aggregates total visits per park, and writes a sanitized point GeoJSON to `maps/04-my-data/data/disney-park-visits.geojson`.

Update the config section before running so the input filenames, park bounds, exclusion circles, and display points match your dataset. Run with:

```bash
node maps/04-my-data/scripts/build-disney-park-visits.mjs
```

Raw exports stay inside `private-data/`; only the aggregated GeoJSON is committed.
