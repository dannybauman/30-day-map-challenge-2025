#!/usr/bin/env node

/**
 * Day 12 – Map from 2125: Climate Migration Flows
 * -------------------------------------------------
 * Pre-processes data for the Climate Migration Flows 2025-2125 map.
 * 
 * Combines:
 * - Natural Earth country boundaries (simplified)
 * - Population projections (2025, 2125) - simplified estimates
 * - Habitability index (pre-calculated based on climate projections)
 * - Migration flow pairs (source/destination for algorithmic route generation)
 * 
 * Output:
 *   maps/12-map-from-2125/data/climate-migration-2125.geojson
 *   maps/12-map-from-2125/data/migration-flows-2125.json
 * 
 * Usage:
 *   node maps/12-map-from-2125/scripts/build-climate-migration-data.mjs
 * 
 * Notes:
 * - Uses simplified/synthetic data to avoid complex API dependencies
 * - Habitability index is a simplified model, not full climate science
 * - Flow pairs represent major expected migration corridors
 * - Platforms will generate actual route lines algorithmically from flow pairs
 */

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { open } from 'shapefile';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '../../..');
const DATA_DIR = resolve(__dirname, '../data');

// Simplified population data (2025 → 2125 projections)
// Based on UN World Population Prospects patterns, simplified
const POPULATION_DATA = {
  // High growth / vulnerable regions
  'BGD': { name: 'Bangladesh', pop_2025: 175000000, pop_2125: 180000000, region: 'South Asia' },
  'IND': { name: 'India', pop_2025: 1450000000, pop_2125: 1500000000, region: 'South Asia' },
  'PAK': { name: 'Pakistan', pop_2025: 250000000, pop_2125: 280000000, region: 'South Asia' },
  'IDN': { name: 'Indonesia', pop_2025: 280000000, pop_2125: 300000000, region: 'Southeast Asia' },
  'VNM': { name: 'Vietnam', pop_2025: 100000000, pop_2125: 105000000, region: 'Southeast Asia' },
  'PHL': { name: 'Philippines', pop_2025: 115000000, pop_2125: 130000000, region: 'Southeast Asia' },
  'NGA': { name: 'Nigeria', pop_2025: 230000000, pop_2125: 400000000, region: 'West Africa' },
  'EGY': { name: 'Egypt', pop_2025: 110000000, pop_2125: 150000000, region: 'North Africa' },
  'ETH': { name: 'Ethiopia', pop_2025: 125000000, pop_2125: 200000000, region: 'East Africa' },
  'BRA': { name: 'Brazil', pop_2025: 220000000, pop_2125: 230000000, region: 'South America' },
  'MEX': { name: 'Mexico', pop_2025: 130000000, pop_2125: 140000000, region: 'North America' },
  
  // Climate refuge regions (high habitability)
  'CAN': { name: 'Canada', pop_2025: 40000000, pop_2125: 50000000, region: 'North America' },
  'RUS': { name: 'Russia', pop_2025: 140000000, pop_2125: 130000000, region: 'Europe/Asia' },
  'SWE': { name: 'Sweden', pop_2025: 11000000, pop_2125: 13000000, region: 'Europe' },
  'NOR': { name: 'Norway', pop_2025: 5500000, pop_2125: 7000000, region: 'Europe' },
  'FIN': { name: 'Finland', pop_2025: 5500000, pop_2125: 6000000, region: 'Europe' },
  'NZL': { name: 'New Zealand', pop_2025: 5200000, pop_2125: 6500000, region: 'Oceania' },
  'ARG': { name: 'Argentina', pop_2025: 47000000, pop_2125: 55000000, region: 'South America' },
  'CHL': { name: 'Chile', pop_2025: 20000000, pop_2125: 23000000, region: 'South America' },
  
  // Moderate / vulnerable
  'USA': { name: 'United States', pop_2025: 340000000, pop_2125: 380000000, region: 'North America' },
  'CHN': { name: 'China', pop_2025: 1400000000, pop_2125: 1200000000, region: 'East Asia' },
  'DEU': { name: 'Germany', pop_2025: 83000000, pop_2125: 75000000, region: 'Europe' },
  'FRA': { name: 'France', pop_2025: 68000000, pop_2125: 70000000, region: 'Europe' },
  'GBR': { name: 'United Kingdom', pop_2025: 68000000, pop_2125: 75000000, region: 'Europe' },
  'AUS': { name: 'Australia', pop_2025: 28000000, pop_2125: 35000000, region: 'Oceania' },
  'JPN': { name: 'Japan', pop_2025: 120000000, pop_2125: 100000000, region: 'East Asia' },
  'KOR': { name: 'South Korea', pop_2025: 51000000, pop_2125: 45000000, region: 'East Asia' },
  
  // Small island states (highly vulnerable)
  'MDV': { name: 'Maldives', pop_2025: 550000, pop_2125: 600000, region: 'South Asia' },
  'TUV': { name: 'Tuvalu', pop_2025: 12000, pop_2125: 15000, region: 'Oceania' },
  'KIR': { name: 'Kiribati', pop_2025: 130000, pop_2125: 150000, region: 'Oceania' },
};

// Simplified habitability index (0-100, higher = more habitable)
// Based on: temperature, sea level rise, water stress, existing infrastructure
const HABITABILITY_DATA = {
  // Climate refuges (high habitability)
  'CAN': { index: 95, category: 'refuge', vulnerability: 0.15, temp_rise: 2.0, slr: 0.3 },
  'RUS': { index: 85, category: 'refuge', vulnerability: 0.25, temp_rise: 2.5, slr: 0.2 },
  'SWE': { index: 90, category: 'refuge', vulnerability: 0.20, temp_rise: 2.0, slr: 0.2 },
  'NOR': { index: 92, category: 'refuge', vulnerability: 0.18, temp_rise: 2.0, slr: 0.2 },
  'FIN': { index: 88, category: 'refuge', vulnerability: 0.22, temp_rise: 2.0, slr: 0.2 },
  'NZL': { index: 85, category: 'refuge', vulnerability: 0.25, temp_rise: 1.8, slr: 0.4 },
  'ARG': { index: 75, category: 'moderate', vulnerability: 0.35, temp_rise: 2.2, slr: 0.3 },
  'CHL': { index: 78, category: 'moderate', vulnerability: 0.32, temp_rise: 2.0, slr: 0.3 },
  
  // Highly vulnerable (low habitability)
  'BGD': { index: 25, category: 'vulnerable', vulnerability: 0.85, temp_rise: 3.5, slr: 1.2 },
  'MDV': { index: 15, category: 'uninhabitable', vulnerability: 0.95, temp_rise: 2.8, slr: 1.5 },
  'TUV': { index: 10, category: 'uninhabitable', vulnerability: 0.98, temp_rise: 2.8, slr: 1.5 },
  'KIR': { index: 12, category: 'uninhabitable', vulnerability: 0.97, temp_rise: 2.8, slr: 1.5 },
  'VNM': { index: 35, category: 'vulnerable', vulnerability: 0.75, temp_rise: 3.2, slr: 0.8 },
  'PHL': { index: 40, category: 'vulnerable', vulnerability: 0.70, temp_rise: 3.0, slr: 0.7 },
  'EGY': { index: 30, category: 'vulnerable', vulnerability: 0.80, temp_rise: 3.8, slr: 0.6 },
  'NGA': { index: 35, category: 'vulnerable', vulnerability: 0.75, temp_rise: 3.5, slr: 0.3 },
  'ETH': { index: 38, category: 'vulnerable', vulnerability: 0.72, temp_rise: 3.2, slr: 0.2 },
  
  // Moderate
  'IND': { index: 45, category: 'moderate', vulnerability: 0.65, temp_rise: 3.0, slr: 0.5 },
  'PAK': { index: 40, category: 'vulnerable', vulnerability: 0.70, temp_rise: 3.2, slr: 0.4 },
  'IDN': { index: 50, category: 'moderate', vulnerability: 0.60, temp_rise: 2.8, slr: 0.6 },
  'BRA': { index: 60, category: 'moderate', vulnerability: 0.50, temp_rise: 2.5, slr: 0.4 },
  'MEX': { index: 55, category: 'moderate', vulnerability: 0.55, temp_rise: 2.8, slr: 0.3 },
  'USA': { index: 70, category: 'moderate', vulnerability: 0.40, temp_rise: 2.5, slr: 0.4 },
  'CHN': { index: 55, category: 'moderate', vulnerability: 0.55, temp_rise: 2.8, slr: 0.5 },
  'AUS': { index: 65, category: 'moderate', vulnerability: 0.45, temp_rise: 2.2, slr: 0.4 },
  'JPN': { index: 60, category: 'moderate', vulnerability: 0.50, temp_rise: 2.5, slr: 0.5 },
  'DEU': { index: 75, category: 'moderate', vulnerability: 0.35, temp_rise: 2.2, slr: 0.3 },
  'FRA': { index: 72, category: 'moderate', vulnerability: 0.38, temp_rise: 2.2, slr: 0.3 },
  'GBR': { index: 70, category: 'moderate', vulnerability: 0.40, temp_rise: 2.0, slr: 0.4 },
  'KOR': { index: 65, category: 'moderate', vulnerability: 0.45, temp_rise: 2.5, slr: 0.4 },
};

// Major migration flow pairs (source → destination)
// Based on expected climate migration patterns
const MIGRATION_FLOWS = [
  // Coastal flooding → Inland
  { source: 'BGD', destination: 'IND', volume: 50000000, reason: 'coastal_flooding', region: 'South Asia' },
  { source: 'VNM', destination: 'CHN', volume: 15000000, reason: 'coastal_flooding', region: 'Southeast Asia' },
  { source: 'MDV', destination: 'IND', volume: 400000, reason: 'sea_level_rise', region: 'South Asia' },
  { source: 'TUV', destination: 'NZL', volume: 10000, reason: 'sea_level_rise', region: 'Oceania' },
  { source: 'KIR', destination: 'AUS', volume: 120000, reason: 'sea_level_rise', region: 'Oceania' },
  
  // Extreme heat → Northern
  { source: 'EGY', destination: 'DEU', volume: 8000000, reason: 'extreme_heat', region: 'North Africa → Europe' },
  { source: 'NGA', destination: 'CAN', volume: 12000000, reason: 'extreme_heat', region: 'West Africa → North America' },
  { source: 'ETH', destination: 'SWE', volume: 3000000, reason: 'extreme_heat', region: 'East Africa → Europe' },
  { source: 'PAK', destination: 'RUS', volume: 10000000, reason: 'extreme_heat', region: 'South Asia → Central Asia' },
  { source: 'IND', destination: 'CAN', volume: 25000000, reason: 'extreme_heat', region: 'South Asia → North America' },
  
  // Water stress → Water-rich
  { source: 'PHL', destination: 'NZL', volume: 5000000, reason: 'water_stress', region: 'Southeast Asia → Oceania' },
  { source: 'IDN', destination: 'AUS', volume: 8000000, reason: 'water_stress', region: 'Southeast Asia → Oceania' },
  { source: 'MEX', destination: 'CAN', volume: 15000000, reason: 'water_stress', region: 'North America' },
  
  // General climate vulnerability
  { source: 'BRA', destination: 'ARG', volume: 5000000, reason: 'climate_vulnerability', region: 'South America' },
  { source: 'CHN', destination: 'RUS', volume: 20000000, reason: 'climate_vulnerability', region: 'East Asia → Central Asia' },
];

async function loadNaturalEarthCountries() {
  // Try to load GeoJSON first
  const neGeoJSONPath = join(DATA_DIR, 'ne_110m_admin_0_countries.geojson');
  try {
    const data = await readFile(neGeoJSONPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    // Try to load and convert shapefile
    const neShapefilePath = join(DATA_DIR, 'ne_110m_admin_0_countries.shp');
    try {
      console.log('Loading shapefile and converting to GeoJSON...');
      const source = await open(neShapefilePath);
      const collection = { type: 'FeatureCollection', features: [] };
      let result;
      while ((result = await source.read())) {
        collection.features.push(result.value);
      }
      await source.close();
      console.log(`✓ Converted shapefile: ${collection.features.length} features`);
      return collection;
    } catch (err2) {
      console.error(`Natural Earth file not found at ${neGeoJSONPath} or ${neShapefilePath}`);
      console.error('Please download from: https://www.naturalearthdata.com/downloads/110m-cultural-vectors/');
      return null;
    }
  }
}

async function createCombinedDataset() {
  console.log('Building climate migration dataset...');
  
  // Load Natural Earth countries
  let countriesGeoJSON = await loadNaturalEarthCountries();
  
  if (!countriesGeoJSON) {
    console.error('Natural Earth data not found. Please download it first.');
    console.error('URL: https://www.naturalearthdata.com/downloads/110m-cultural-vectors/');
    console.error('Extract and place: ne_110m_admin_0_countries.geojson in the data/ directory');
    process.exit(1);
  }
  
  // Process each country feature
  const processedFeatures = countriesGeoJSON.features.map(feature => {
    const props = feature.properties || {};
    // Try multiple ways to get ISO code
    const iso_a3 = props.ISO_A3 || props.ISO_A3_EH || props.ADM0_A3 || feature.id || props.id;
    
    if (!iso_a3 || iso_a3 === '-99' || iso_a3 === 'NUL') {
      return null; // Skip invalid entries
    }
    
    // Get population data
    const popData = POPULATION_DATA[iso_a3];
    const habitData = HABITABILITY_DATA[iso_a3];
    
    // Create new properties
    const newProps = {
      name: props.NAME || props.NAME_EN || props.NAME_LONG || props.name || 'Unknown',
      iso_a3: iso_a3,
      region: popData?.region || habitData?.region || 'Unknown',
    };
    
    // Add population if available
    if (popData) {
      newProps.pop_2025 = popData.pop_2025;
      newProps.pop_2125 = popData.pop_2125;
    } else {
      // Use default estimates based on existing population if available
      const existingPop = props.POP_EST || props.POP_RANK;
      if (existingPop) {
        newProps.pop_2025 = existingPop;
        newProps.pop_2125 = Math.floor(existingPop * 1.1); // 10% growth estimate
      } else {
        // Fallback: estimate based on region and country size
        // This is speculative data for 2125, so rough estimates are acceptable
        const region = newProps.region;
        let estimatedPop2025 = 5000000; // Default: 5M
        
        // Rough estimates by region (in millions)
        if (region.includes('Europe')) {
          estimatedPop2025 = 8000000; // 8M average for European countries
        } else if (region.includes('Africa')) {
          estimatedPop2025 = 15000000; // 15M average for African countries
        } else if (region.includes('Asia')) {
          estimatedPop2025 = 25000000; // 25M average for Asian countries
        } else if (region.includes('America')) {
          estimatedPop2025 = 12000000; // 12M average for American countries
        } else if (region.includes('Oceania')) {
          estimatedPop2025 = 2000000; // 2M average for Oceania countries
        }
        
        // Adjust for known small countries (islands, microstates)
        const smallCountries = ['MDV', 'TUV', 'KIR', 'MHL', 'FSM', 'PLW', 'WSM', 'TON', 'VUT', 'SLB', 'NRU', 'MCO', 'LIE', 'SMR', 'VAT', 'AND', 'MLT', 'ISL', 'LUX'];
        if (smallCountries.includes(iso_a3)) {
          estimatedPop2025 = 500000; // 500K for small island states
        }
        
        newProps.pop_2025 = estimatedPop2025;
        newProps.pop_2125 = Math.floor(estimatedPop2025 * 1.15); // 15% growth to 2125
      }
    }
    
    // Add habitability data if available
    if (habitData) {
      newProps.habitability_index = habitData.index;
      newProps.habitability_category = habitData.category;
      newProps.vulnerability_score = habitData.vulnerability;
      newProps.temperature_rise_2125 = habitData.temp_rise;
      newProps.sea_level_rise_2125 = habitData.slr;
    } else {
      // Default moderate values for countries without specific data
      newProps.habitability_index = 50;
      newProps.habitability_category = 'moderate';
      newProps.vulnerability_score = 0.50;
      newProps.temperature_rise_2125 = 2.5;
      newProps.sea_level_rise_2125 = 0.4;
    }
    
    return {
      type: 'Feature',
      properties: newProps,
      geometry: feature.geometry,
    };
  }).filter(f => f !== null);
  
  const outputGeoJSON = {
    type: 'FeatureCollection',
    features: processedFeatures,
  };
  
  // Write output
  const outputPath = join(DATA_DIR, 'climate-migration-2125.geojson');
  await writeFile(outputPath, JSON.stringify(outputGeoJSON, null, 2));
  console.log(`✓ Created ${outputPath}`);
  console.log(`  Features: ${processedFeatures.length}`);
  
  // Calculate file size
  const stats = await import('node:fs').then(m => m.promises.stat(outputPath));
  const sizeKB = (stats.size / 1024).toFixed(1);
  console.log(`  Size: ${sizeKB} KB`);
  
  return outputGeoJSON;
}

async function createMigrationFlows() {
  console.log('Creating migration flow pairs...');
  
  const flows = MIGRATION_FLOWS.map(flow => {
    const sourcePop = POPULATION_DATA[flow.source];
    const destPop = POPULATION_DATA[flow.destination];
    
    return {
      source: flow.source,
      destination: flow.destination,
      source_name: sourcePop?.name || flow.source,
      destination_name: destPop?.name || flow.destination,
      flow_volume_2125: flow.volume,
      reason: flow.reason,
      region: flow.region,
    };
  });
  
  const outputPath = join(DATA_DIR, 'migration-flows-2125.json');
  await writeFile(outputPath, JSON.stringify(flows, null, 2));
  console.log(`✓ Created ${outputPath}`);
  console.log(`  Flows: ${flows.length}`);
  
  return flows;
}

async function main() {
  try {
    await createCombinedDataset();
    await createMigrationFlows();
    console.log('\n✓ Data preparation complete!');
    console.log('\nNext steps:');
    console.log('1. Review the generated files in maps/12-map-from-2125/data/');
    console.log('2. If Natural Earth file is too large, simplify it using mapshaper.org');
    console.log('3. Proceed to create implementation prompt');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();

