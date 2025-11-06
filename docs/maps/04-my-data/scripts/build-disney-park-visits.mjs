#!/usr/bin/env node

/**
 * Day 4 – My Data
 * ----------------
 * Extracts all GPS waypoints from Disney park visits in Google Maps Timeline exports
 * and produces a privacy-safe GeoJSON with one point per GPS waypoint at actual locations.
 *
 * Input (configure below):
 *   private-data/google-takeout/location-history/*.json
 *
 * Output:
 *   maps/04-my-data/data/disney-park-visits.geojson
 *
 * Workflow:
 *   1. Load Semantic Location History JSON exports.
 *   2. Extract placeVisit entries (named place visits) and activitySegment waypoints
 *      (all GPS points along movement paths).
 *   3. Filter waypoints that land inside configured park bounds (global Disney parks).
 *   4. Drop anything that overlaps a sensitive exclusion circle (home/work).
 *   5. Create one GeoJSON Point per waypoint at actual GPS coordinates.
 *   6. Include waypoint metadata (park, timestamp, place name if available).
 *   7. Calculate summary statistics per park in the meta section.
 *
 * Usage:
 *   node maps/04-my-data/scripts/build-disney-park-visits.mjs
 *
 * Notes:
 *   - Update CONFIG before running (input files, exclusion circles, park list).
 *   - The script only writes sanitized outputs; raw exports stay in private-data/.
 *   - Each GPS waypoint becomes a Point feature, creating a dense point cloud showing
 *     actual movement paths within parks, not just named place visits.
 *   - Includes all global Disney parks; parks you haven't visited will simply have no points.
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
    // Anaheim, California, USA
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
    // Walt Disney World, Florida, USA
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
    // Disneyland Paris, France
    {
      id: 'dlp-paris-disneyland',
      name: 'Disneyland Park (Paris)',
      bounds: { minLat: 48.865, maxLat: 48.880, minLng: 2.777, maxLng: 2.800 },
      displayPoint: { lat: 48.8725, lng: 2.7886 },
    },
    {
      id: 'dlp-paris-walt-disney-studios',
      name: 'Walt Disney Studios Park',
      bounds: { minLat: 48.860, maxLat: 48.875, minLng: 2.777, maxLng: 2.800 },
      displayPoint: { lat: 48.8675, lng: 2.7886 },
    },
    // Tokyo Disney Resort, Japan
    {
      id: 'tdr-tokyo-disneyland',
      name: 'Tokyo Disneyland',
      bounds: { minLat: 35.627, maxLat: 35.640, minLng: 139.875, maxLng: 139.890 },
      displayPoint: { lat: 35.6335, lng: 139.8825 },
    },
    {
      id: 'tdr-tokyo-disney-sea',
      name: 'Tokyo DisneySea',
      bounds: { minLat: 35.625, maxLat: 35.638, minLng: 139.875, maxLng: 139.890 },
      displayPoint: { lat: 35.6315, lng: 139.8825 },
    },
    // Shanghai Disney Resort, China
    {
      id: 'sdr-shanghai-disneyland',
      name: 'Shanghai Disneyland',
      bounds: { minLat: 31.140, maxLat: 31.155, minLng: 121.655, maxLng: 121.675 },
      displayPoint: { lat: 31.1475, lng: 121.665 },
    },
    // Hong Kong Disneyland Resort
    {
      id: 'hkdr-hong-kong-disneyland',
      name: 'Hong Kong Disneyland',
      bounds: { minLat: 22.308, maxLat: 22.322, minLng: 114.037, maxLng: 114.052 },
      displayPoint: { lat: 22.315, lng: 114.0445 },
    },
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

function parseLatLng(value) {
  if (!value) return { lat: null, lng: null };
  if (typeof value === 'string') {
    const cleaned = value.replace(/\u00b0/g, '').split(',');
    if (cleaned.length === 2) {
      const lat = Number(cleaned[0].trim());
      const lng = Number(cleaned[1].trim());
      if (Number.isFinite(lat) && Number.isFinite(lng)) {
        return { lat, lng };
      }
    }
  }
  if (typeof value === 'object') {
    const latCandidate =
      value.latitudeE7 ?? value.latitude ?? value.lat ?? null;
    const lngCandidate =
      value.longitudeE7 ?? value.longitude ?? value.lng ?? null;
    if (latCandidate != null && lngCandidate != null) {
      const lat =
        Math.abs(latCandidate) > 180 ? latCandidate / 1e7 : Number(latCandidate);
      const lng =
        Math.abs(lngCandidate) > 180 ? lngCandidate / 1e7 : Number(lngCandidate);
      if (Number.isFinite(lat) && Number.isFinite(lng)) {
        return { lat, lng };
      }
    }
  }
  return { lat: null, lng: null };
}

function parseTimestamp(value) {
  if (value == null) {
    return { date: null, iso: null, day: null, ms: null };
  }

  let date;
  if (typeof value === 'number') {
    date = new Date(value);
  } else if (typeof value === 'string') {
    const numeric = Number(value);
    if (!Number.isNaN(numeric) && value.trim() !== '') {
      date = new Date(numeric);
    }
    if (!date || Number.isNaN(date.getTime())) {
      date = new Date(value);
    }
  } else {
    return { date: null, iso: null, day: null, ms: null };
  }

  if (Number.isNaN(date.getTime())) {
    return { date: null, iso: null, day: null, ms: null };
  }

  const iso = date.toISOString();
  return {
    date,
    iso,
    day: iso.slice(0, 10),
    ms: date.getTime(),
  };
}

function durationHoursFromTimestamps(startTs, endTs) {
  if (!startTs?.ms || !endTs?.ms) return 0;
  if (endTs.ms <= startTs.ms) return 0;
  const hours = (endTs.ms - startTs.ms) / (1000 * 60 * 60);
  return Math.round(hours * 100) / 100;
}

function makeVisitRecord({ lat, lng, name, startTs, endTs }) {
  if (lat == null || lng == null) return null;
  return {
    lat,
    lng,
    name: name ?? null,
    startIso: startTs?.iso ?? null,
    endIso: endTs?.iso ?? null,
    dateKey: startTs?.day ?? null,
    durationHours: durationHoursFromTimestamps(startTs, endTs),
  };
}

function makeWaypointRecord({ lat, lng, timestamp }) {
  if (lat == null || lng == null) return null;
  const ts = parseTimestamp(timestamp);
  return {
    lat,
    lng,
    name: null,
    startIso: ts?.iso ?? null,
    endIso: ts?.iso ?? null,
    dateKey: ts?.day ?? null,
    durationHours: 0,
  };
}

function extractFromTimelineObjects(list) {
  const visits = [];
  for (const obj of list) {
    // Extract placeVisits (one point per named place visit)
    const placeVisit = obj.placeVisit;
    if (placeVisit) {
    const place = placeVisit.location ?? {};
    const { lat, lng } = parseLatLng({
      latitudeE7: place.latitudeE7,
      longitudeE7: place.longitudeE7,
      latitude: place.latitude,
      longitude: place.longitude,
    });

    const startTs = parseTimestamp(placeVisit.duration?.startTimestampMs);
    const endTs = parseTimestamp(placeVisit.duration?.endTimestampMs);
    const record = makeVisitRecord({
      lat,
      lng,
      name: place.name,
      startTs,
      endTs,
    });
    if (record) {
      visits.push(record);
      }
    }

    // Extract waypoints from activity segments (all GPS points along movement paths)
    const activitySegment = obj.activitySegment;
    if (activitySegment) {
      const startTs = parseTimestamp(activitySegment.duration?.startTimestampMs);
      const endTs = parseTimestamp(activitySegment.duration?.endTimestampMs);
      const waypointPath = activitySegment.waypointPath ?? [];

      if (waypointPath.length > 0) {
        // Calculate time step for interpolation if we have start/end times
        const duration = (startTs?.ms && endTs?.ms) ? (endTs.ms - startTs.ms) : 0;
        const timeStep = duration > 0 ? duration / Math.max(1, waypointPath.length - 1) : 0;

        for (let i = 0; i < waypointPath.length; i++) {
          const waypoint = waypointPath[i];

          // Try multiple field name variations for lat/lng
          const { lat, lng } = parseLatLng({
            latitudeE7: waypoint.latE7 ?? waypoint.latitudeE7,
            longitudeE7: waypoint.lngE7 ?? waypoint.longitudeE7,
            latitude: waypoint.lat ?? waypoint.latitude,
            longitude: waypoint.lng ?? waypoint.longitude,
            lat: waypoint.lat,
            lng: waypoint.lng,
          });

          if (lat != null && lng != null) {
            // Use waypoint's timestamp if available, otherwise interpolate
            let waypointTimestamp = null;
            if (waypoint.timestampMs || waypoint.timestamp) {
              waypointTimestamp = waypoint.timestampMs ?? waypoint.timestamp;
            } else if (startTs?.ms && timeStep > 0) {
              waypointTimestamp = startTs.ms + i * timeStep;
            } else if (startTs?.ms) {
              waypointTimestamp = startTs.ms;
            }

            if (waypointTimestamp) {
              const record = makeWaypointRecord({
                lat,
                lng,
                timestamp: waypointTimestamp,
              });
              if (record) {
                visits.push(record);
              }
            }
          }
        }
      }
    }
  }
  return visits;
}

function extractFromSemanticSegments(segments) {
  const visits = [];

  const collectVisit = (visit, segmentStartTs, segmentEndTs) => {
    if (!visit) return;
    const top = visit.topCandidate ?? {};
    const location = top.placeLocation ?? {};
    const { lat, lng } = parseLatLng(
      location.latLng
        ? location.latLng
        : {
            latitudeE7: location.latitudeE7,
            longitudeE7: location.longitudeE7,
            latitude: location.latitude,
            longitude: location.longitude,
          }
    );

    const startTs = visit.startTime
      ? parseTimestamp(visit.startTime)
      : segmentStartTs;
    const endTs = visit.endTime ? parseTimestamp(visit.endTime) : segmentEndTs;

    const record = makeVisitRecord({
      lat,
      lng,
      name: null,
      startTs,
      endTs,
    });
    if (record) {
      visits.push(record);
    }
  };

  // Extract waypoints from timelinePath (all GPS points along movement paths)
  const extractTimelinePath = (timelinePath, segmentStartTs, segmentEndTs) => {
    if (!Array.isArray(timelinePath)) return;

    for (const item of timelinePath) {
      // Extract point from timelinePath item
      if (item.point) {
        // point is a string like "33.8142605°, -117.9229352°"
        const { lat, lng } = parseLatLng(item.point);
        const pointTime = item.time ? parseTimestamp(item.time) : segmentStartTs;

        if (lat != null && lng != null && pointTime?.ms) {
          const record = makeWaypointRecord({
            lat,
            lng,
            timestamp: pointTime.ms,
          });
          if (record) {
            visits.push(record);
          }
        }
      }

      // Also check for visit objects nested in timelinePath
      if (item.visit) {
        collectVisit(item.visit, segmentStartTs, segmentEndTs);
      }
    }
  };

  // Extract points from activity start/end locations
  const extractActivity = (activity, segmentStartTs, segmentEndTs) => {
    if (!activity) return;

    // Extract start location
    if (activity.start?.latLng) {
      const { lat, lng } = parseLatLng(activity.start.latLng);
      if (lat != null && lng != null && segmentStartTs?.ms) {
        const record = makeWaypointRecord({
          lat,
          lng,
          timestamp: segmentStartTs.ms,
        });
        if (record) {
          visits.push(record);
        }
      }
    }

    // Extract end location
    if (activity.end?.latLng) {
      const { lat, lng } = parseLatLng(activity.end.latLng);
      if (lat != null && lng != null && segmentEndTs?.ms) {
        const record = makeWaypointRecord({
          lat,
          lng,
          timestamp: segmentEndTs.ms,
        });
        if (record) {
          visits.push(record);
        }
      }
    }

    // Extract parking location if available
    if (activity.parking?.location?.latLng) {
      const { lat, lng } = parseLatLng(activity.parking.location.latLng);
      const parkingTime = activity.parking.startTime
        ? parseTimestamp(activity.parking.startTime)
        : segmentEndTs;
      if (lat != null && lng != null && parkingTime?.ms) {
        const record = makeWaypointRecord({
          lat,
          lng,
          timestamp: parkingTime.ms,
        });
        if (record) {
          visits.push(record);
        }
      }
    }
  };

  for (const segment of segments) {
    const segmentStartTs = parseTimestamp(segment.startTime);
    const segmentEndTs = parseTimestamp(segment.endTime);

    // Extract visit entries (named place visits)
    if (segment.visit) {
      collectVisit(segment.visit, segmentStartTs, segmentEndTs);
    }

    // Extract timelinePath waypoints (all GPS points along movement paths)
    if (segment.timelinePath) {
      extractTimelinePath(segment.timelinePath, segmentStartTs, segmentEndTs);
        }

    // Extract activity start/end locations
    if (segment.activity) {
      extractActivity(segment.activity, segmentStartTs, segmentEndTs);
    }
  }

  return visits;
}

function extractPlaceVisits(data) {
  if (Array.isArray(data?.timelineObjects)) {
    return extractFromTimelineObjects(data.timelineObjects);
  }
  if (Array.isArray(data?.semanticSegments)) {
    return extractFromSemanticSegments(data.semanticSegments);
  }
  throw new Error(
    'Unrecognized timeline format. Expected timelineObjects[] or semanticSegments[].'
  );
}

function filterVisits(visits, config) {
  const filtered = [];

  for (const visit of visits) {
    const park = matchPark(visit.lat, visit.lng, config.parks);
    if (!park) continue;
    if (isInsideExclusion(visit.lat, visit.lng, config.exclusionCircles)) {
      continue;
    }

    filtered.push({
      ...visit,
        parkId: park.id,
        parkName: park.name,
    });
  }

  return filtered;
}

function buildFeatureCollection(filteredVisits) {
  // Sort by timestamp (most recent first)
  const sorted = filteredVisits.sort((a, b) => {
    const aTime = a.startIso || a.dateKey || '';
    const bTime = b.startIso || b.dateKey || '';
    return bTime.localeCompare(aTime);
  });

  const features = sorted.map((visit, index) => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [visit.lng, visit.lat],
    },
    properties: {
      id: index + 1,
      park_id: visit.parkId,
      park_name: visit.parkName,
      visit_date: visit.dateKey || null,
      start_time: visit.startIso || null,
      end_time: visit.endIso || null,
      duration_hours: visit.durationHours || 0,
      place_name: visit.name || null,
    },
  }));

  // Calculate summary stats
  const parkStats = new Map();
  for (const visit of filteredVisits) {
    if (!parkStats.has(visit.parkId)) {
      parkStats.set(visit.parkId, {
        parkId: visit.parkId,
        parkName: visit.parkName,
        visitCount: 0,
        uniqueDays: new Set(),
        totalHours: 0,
        firstVisit: visit.startIso || visit.dateKey || null,
        lastVisit: visit.startIso || visit.dateKey || null,
      });
    }
    const stats = parkStats.get(visit.parkId);
    stats.visitCount += 1;
    if (visit.dateKey) {
      stats.uniqueDays.add(visit.dateKey);
    }
    stats.totalHours += visit.durationHours || 0;
    const visitTime = visit.startIso || visit.dateKey || null;
    if (visitTime) {
      if (!stats.firstVisit || visitTime < stats.firstVisit) {
        stats.firstVisit = visitTime;
      }
      if (!stats.lastVisit || visitTime > stats.lastVisit) {
        stats.lastVisit = visitTime;
      }
    }
  }

  return {
    type: 'FeatureCollection',
    features,
    meta: {
      generated_at: new Date().toISOString(),
      total_visits: filteredVisits.length,
      unique_parks: parkStats.size,
      park_summary: Array.from(parkStats.values()).map((stats) => ({
        park_id: stats.parkId,
        park_name: stats.parkName,
        visit_count: stats.visitCount,
        unique_visit_days: stats.uniqueDays.size,
        first_visit: stats.firstVisit,
        last_visit: stats.lastVisit,
        total_hours: Math.round(stats.totalHours * 100) / 100,
      })),
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

  const filteredVisits = filterVisits(visits, CONFIG);

  if (filteredVisits.length === 0) {
    console.warn('No Disney park visits matched the filters. Adjust CONFIG and try again.');
    return;
  }

  const featureCollection = buildFeatureCollection(filteredVisits);
  await writeFile(CONFIG.outputFile, JSON.stringify(featureCollection, null, 2));

  console.log(`Sanitized GeoJSON written to ${CONFIG.outputFile}`);
  console.log(
    `Summary: ${featureCollection.meta.total_visits} individual visits across ${featureCollection.meta.unique_parks} parks`
  );
  console.log(`Park summary:`);
  featureCollection.meta.park_summary.forEach((park) => {
    console.log(`  - ${park.park_name}: ${park.visit_count} visits, ${park.unique_visit_days} unique days, ${park.total_hours} hours`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
