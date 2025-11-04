import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');
const outputDir = join(rootDir, 'screenshots');

// Use the live GitHub Pages URL
const liveUrl = 'https://dannybauman.github.io/30-day-map-challenge-2025/maps/01-points/index.html';

console.log(`Taking screenshots of Day 1 page...`);
console.log(`Source: ${liveUrl}`);
console.log(`Output directory: ${outputDir}`);

const browser = await chromium.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 2, // High DPI for better quality
});

const page = await context.newPage();

try {
  // Navigate to the live page
  console.log('Loading page...');
  await page.goto(liveUrl, { waitUntil: 'networkidle' });

  // Wait a bit for any dynamic content to load
  await page.waitForTimeout(2000);

  // Take screenshot at the top of the page
  console.log('Taking screenshot at top of page...');
  const topScreenshotPath = join(outputDir, 'day1-top.png');
  await page.screenshot({
    path: topScreenshotPath,
    fullPage: false, // Just the viewport
    clip: { x: 0, y: 0, width: 1920, height: 1080 }
  });
  console.log(`✓ Saved: ${topScreenshotPath}`);

  // Scroll to the "Top 3" section
  console.log('Scrolling to Top 3 section...');
  await page.evaluate(() => {
    const top3Heading = Array.from(document.querySelectorAll('h3')).find(
      h3 => h3.textContent.includes('Top 3')
    );
    if (top3Heading) {
      top3Heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Wait for scroll to complete
  await page.waitForTimeout(1000);

  // Take screenshot of the Top 3 section
  console.log('Taking screenshot of Top 3 section...');
  const top3ScreenshotPath = join(outputDir, 'day1-top3.png');
  await page.screenshot({
    path: top3ScreenshotPath,
    fullPage: false, // Just the viewport
    clip: { x: 0, y: 0, width: 1920, height: 1080 }
  });
  console.log(`✓ Saved: ${top3ScreenshotPath}`);

  console.log('\n✅ Screenshots completed successfully!');

} catch (error) {
  console.error('Error taking screenshots:', error);
  process.exit(1);
} finally {
  await browser.close();
}
