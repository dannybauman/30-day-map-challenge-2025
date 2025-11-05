#!/usr/bin/env node

/**
 * Day 4 – My Data
 * ----------------
 * Aggregates Disney park visits from Google Maps Timeline exports and produces a
 * privacy-safe GeoJSON with one point per park and visit statistics.
 *
 * Input (configure below):
 *   private-data/google-takeout/location-history/*.json
 *
 * Output:
 *   maps/04-my-data/data/disney-park-visits.geojson
 *
 * Workflow:
 *   1. Load Semantic Location History JSON exports.
 *   2. Identify placeVisit entries that land inside the configured park bounds.
 *   3. Drop anything that overlaps a sensitive exclusion circle (home/work).
 *   4. Count visits per park, track distinct visit days, and total dwell time.
 *   5. Emit a GeoJSON FeatureCollection with one point per park (predefined
 *      display coordinates – no raw visit coordinates are stored).
 *
 * Usage:
 *   node maps/04-my-data/scripts/build-disney-park-visits.mjs
 *
 * Notes:
 *   - Update CONFIG before running (input files, exclusion circles, park list).
 *   - The script only writes sanitized outputs; raw exports stay in private-data/.
 */

import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '../../..');
const PRIVATE_DATA_ROOT = resolve(repoRoot, 'private-data');

const CONFIG = {
  inputFiles: [
    join(PRIVATE_DATA_ROOT, 'google-takeout/location-history/timeline.json'),
    // Add additional exports as needed.
  ],
  outputFile: resolve(__dirname, '../data/disney-park-visits.geojson'),
  exclusionCircles: [
    // { lat: 00.000, lng: -00.000, radiusKm: 1.0 },
  ],
  parks: [
    {
      id: 'dlp-disneyland',
      name: 'Disneyland Park (Anaheim)',
      bounds: { minLat: 33.802, maxLat: 33.821, minLng: -117.923, maxLng: -117.906 },
      displayPoint: { lat: 33.812511, lng: -117.918976 },
    },
    {
      id: 'dlp-california-adventure',
      name: 'Disney California Adventure',
      bounds: { minLat: 33.803, maxLat: 33.817, minLng: -117.924, maxLng: -117.910 },
      displayPoint: { lat: 33.807711, lng: -117.918877 },
    },
    {
      id: 'wdw-magic-kingdom',
      name: 'Magic Kingdom',
      bounds: { minLat: 28.413, maxLat: 28.425, minLng: -81.586, maxLng: -81.561 },
      displayPoint: { lat: 28.418705, lng: -81.581221 },
    },
    {
      id: 'wdw-epcot',
      name: 'EPCOT',
      bounds: { minLat: 28.362, maxLat: 28.378, minLng: -81.559, maxLng: -81.541 },
      displayPoint: { lat: 28.373548, lng: -81.549401 },
    },
    {
      id: 'wdw-hollywood-studios',
      name: 'Hollywood Studios',
      bounds: { minLat: 28.352, maxLat: 28.364, minLng: -81.571, maxLng: -81.548 },
      displayPoint: { lat: 28.3575, lng: -81.5587 },
    },
    {
      id: 'wdw-animal-kingdom',
      name: 'Animal Kingdom',
      bounds: { minLat: 28.348, maxLat: 28.370, minLng: -81.609, maxLng: -81.578 },
      displayPoint: { lat: 28.3574, lng: -81.5907 },
    },
    // Add additional parks you have visited.
  ],
};

const toRadians = (deg) => (deg * Math.PI) / 180;

function haversineKm(a, b) {
  const R = 6371;
  const dLat = toRadians(b.lat - a.lat);
  const dLng = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  return 2 * R * Math.asin(Math.sqrt(h));
}

function isInsideBounds(lat, lng, bounds) {
  return (
    lat >= bounds.minLat &&
    lat <= bounds.maxLat &&
    lng >= bounds.minLng &&
    lng <= bounds.maxLng
  );
}

function matchPark(lat, lng, parks) {
  return parks.find((park) => isInsideBounds(lat, lng, park.bounds)) ?? null;
}

function isInsideExclusion(lat, lng, exclusionCircles) {
  return exclusionCircles.some((circle) => {
    if (circle.lat == null || circle.lng == null || circle.radiusKm == null) {
      return false;
    }
    return haversineKm({ lat, lng }, circle) <= circle.radiusKm;
  });
}

function formatIsoDate(timestampMs) {
  if (!timestampMs) return null;
  const date = new Date(Number(timestampMs));
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10);
}

function durationHours(duration) {
  const start = Number(duration?.startTimestampMs);
  const end = Number(duration?.endTimestampMs);
  if (!Number.isFinite(start) || !Number.isFinite(end)) return 0;
  if (end <= start) return 0;
  const hours = (end - start) / (1000 * 60 * 60);
  return Math.round(hours * 100) / 100;
}

function extractPlaceVisits(data) {
  const list = Array.isArray(data.timelineObjects)
    ? data.timelineObjects
    : data;

  if (!Array.isArray(list)) {
    throw new Error('Unrecognized timeline format. Expected timelineObjects[].');
  }

  return list
    .filter((obj) => obj.placeVisit)
    .map((obj) => {
      const place = obj.placeVisit?.location ?? {};
      return {
        name: place.name ?? 'Unnamed Place',
        lat: place.latitudeE7 != null ? place.latitudeE7 / 1e7 : null,
        lng: place.longitudeE7 != null ? place.longitudeE7 / 1e7 : null,
        duration: obj.placeVisit?.duration ?? {},
      };
    })
    .filter((visit) => visit.lat != null && visit.lng != null);
}

function aggregateVisits(visits, config) {
  const buckets = new Map();

  for (const visit of visits) {
    const park = matchPark(visit.lat, visit.lng, config.parks);
    if (!park) continue;
    if (isInsideExclusion(visit.lat, visit.lng, config.exclusionCircles)) {
      continue;
    }

    const key = park.id;
    const visitDate = formatIsoDate(visit.duration?.startTimestampMs);
    const visitDuration = durationHours(visit.duration);

    if (!buckets.has(key)) {
      buckets.set(key, {
        parkId: park.id,
        parkName: park.name,
        displayPoint: park.displayPoint,
        count: 0,
        totalHours: 0,
        firstVisit: visitDate,
        lastVisit: visitDate,
        daySet: new Set(),
        sampleNames: new Set(),
      });
    }

    const bucket = buckets.get(key);
    bucket.count += 1;
    bucket.totalHours += visitDuration;

    if (visitDate) {
      bucket.daySet.add(visitDate);
      if (!bucket.firstVisit || visitDate < bucket.firstVisit) {
        bucket.firstVisit = visitDate;
      }
      if (!bucket.lastVisit || visitDate > bucket.lastVisit) {
        bucket.lastVisit = visitDate;
      }
    }

    if (visit.name) {
      bucket.sampleNames.add(visit.name);
    }
  }

  return Array.from(buckets.values());
}

function buildFeatureCollection(groups) {
  const totalVisits = groups.reduce((sum, item) => sum + item.count, 0);

  const features = groups
    .sort((a, b) => b.count - a.count)
    .map((group, index) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [group.displayPoint.lng, group.displayPoint.lat],
      },
      properties: {
        id: index + 1,
        park_id: group.parkId,
        park_name: group.parkName,
        visit_count: group.count,
        unique_visit_days: group.daySet.size,
        first_visit: group.firstVisit,
        last_visit: group.lastVisit,
        total_hours: Math.round(group.totalHours * 100) / 100,
        sample_places: Array.from(group.sampleNames).slice(0, 5),
      },
    }));

  return {
    type: 'FeatureCollection',
    features,
    meta: {
      generated_at: new Date().toISOString(),
      total_visits: totalVisits,
      unique_parks: groups.length,
    },
  };
}

async function readAllVisits(files) {
  const visits = [];
  for (const file of files) {
    const data = JSON.parse(await readFile(file, 'utf8'));
    visits.push(...extractPlaceVisits(data));
  }
  return visits;
}

async function main() {
  if (!CONFIG.inputFiles.length) {
    throw new Error('Configure at least one input file in CONFIG.inputFiles.');
  }

  console.log('Reading timeline exports:');
  CONFIG.inputFiles.forEach((file) => console.log(` - ${file}`));

  const visits = await readAllVisits(CONFIG.inputFiles);
  console.log(`Total place visits loaded: ${visits.length}`);

  const grouped = aggregateVisits(visits, CONFIG);

  if (grouped.length === 0) {
    console.warn('No Disney park visits matched the filters. Adjust CONFIG and try again.');
    return;
  }

  const featureCollection = buildFeatureCollection(grouped);
  await writeFile(CONFIG.outputFile, JSON.stringify(featureCollection, null, 2));

  console.log(`Sanitized GeoJSON written to ${CONFIG.outputFile}`);
  console.log(
    `Summary: ${featureCollection.meta.total_visits} visits across ${featureCollection.meta.unique_parks} parks`
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
