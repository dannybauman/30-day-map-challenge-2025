# Private Data Workspace

This folder stores the raw personal datasets that feed the Day 4 processing scripts.

## Usage

- Drop exports here (for example: `google-takeout/location-history/Records.json`, `strava/activities/`, or `apple-health/walking-distance.csv`).
- Keep everything inside this folder out of version control.
- Run the day-specific scripts (for example `maps/04-my-data/scripts/build-disney-footfall.mjs`) to generate sanitized outputs inside the corresponding `maps/<day>/data/` directories.
- Delete the raw exports when you're done processing if they no longer need to live on disk.

## Privacy Reminder

Raw files in `private-data/` may contain sensitive location traces. Do not copy or move them into the `maps/` subfolders. Only the filtered, anonymized outputs should be committed to the repository.
