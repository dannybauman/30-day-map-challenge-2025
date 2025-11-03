import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const mapsDir = path.join(repoRoot, 'maps');
const docsDir = path.join(repoRoot, 'docs');
const outputMapsDir = path.join(docsDir, 'maps');
const sourceAssetsDir = path.join(repoRoot, 'site-assets');
const outputAssetsDir = path.join(docsDir, 'site-assets');
const faviconSource = path.join(repoRoot, 'favicon.svg');
const faviconTarget = path.join(docsDir, 'favicon.svg');
const manifestPathRoot = path.join(repoRoot, 'days.json');
const manifestPathDocs = path.join(docsDir, 'days.json');
const rootDocsToCopy = ['PLATFORM-TRACKER.md'];

async function ensureDir(dir) {
    await fs.mkdir(dir, { recursive: true });
}

async function emptyDir(dir) {
    await fs.rm(dir, { recursive: true, force: true });
    await ensureDir(dir);
}

async function pathExists(targetPath) {
    try {
        await fs.access(targetPath);
        return true;
    } catch {
        return false;
    }
}

async function copyDir(src, dest) {
    await ensureDir(dest);
    const entries = await fs.readdir(src, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name === '.DS_Store') {
            continue;
        }
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            await copyDir(srcPath, destPath);
        } else if (entry.isSymbolicLink()) {
            const linkTarget = await fs.readlink(srcPath);
            await fs.symlink(linkTarget, destPath);
        } else {
            await fs.copyFile(srcPath, destPath);
        }
    }
}

function extractText(html, regex) {
    const match = html.match(regex);
    if (!match) {
        return undefined;
    }
    const text = match[1].replace(/<[^>]*>/g, '');
    return text.trim();
}

function buildManifestEntry(slug, html, hasReadme) {
    const dayNumberMatch = slug.match(/^(\d{2})/);
    const dayNumber = dayNumberMatch ? Number(dayNumberMatch[1]) : undefined;
    const heading = extractText(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const title = heading || extractText(html, /<title[^>]*>([\s\S]*?)<\/title>/i) || slug;
    let theme;
    if (heading) {
        const themeMatch = heading.match(/Day\s*\d+\s*:\s*(.*)$/i);
        theme = themeMatch ? themeMatch[1].trim() : undefined;
    }
    const status = extractText(html, /<strong>Status:<\/strong>\s*<span[^>]*>([^<]+)/i);

    const relativeUrl = `maps/${slug}/index.html`;
    const readmeUrl = hasReadme ? `maps/${slug}/README.md` : undefined;

    return {
        id: slug,
        dayNumber,
        title,
        theme,
        status,
        relativeUrl,
        readmeUrl
    };
}

function renderIndexHtml(days) {
    const dayCount = days.length;
    const dayCards = days
        .map((day) => {
            const readmeButton = day.readmeUrl
                ? `<a class="btn btn-outline-secondary btn-sm" href="${day.readmeUrl}">Day Docs</a>`
                : '';
            const subtitle = day.theme
                ? `<p class="text-muted small flex-grow-1">${day.theme}</p>`
                : '<div class="flex-grow-1"></div>';
            return `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex align-items-baseline justify-content-between mb-3">
                                <span class="badge bg-primary-subtle border border-primary-subtle text-primary-emphasis">
                                    Day ${day.dayNumber?.toString().padStart(2, '0') ?? '—'}
                                </span>
                                ${day.status ? `<span class="badge bg-success">${day.status}</span>` : ''}
                            </div>
                            <h3 class="h5">${day.title}</h3>
                            ${subtitle}
                            <div class="d-flex gap-2 mt-3">
                                <a class="btn btn-primary btn-sm" href="${day.relativeUrl}">View Page</a>
                                ${readmeButton}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
        .join('\n');

    const gridContent = dayCount
        ? `<div class="row">
                ${dayCards}
            </div>`
        : `<div class="alert alert-info">No pages published yet. Check back soon!</div>`;
    const generatedOn = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date());

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>#30DayMapChallenge 2025 | Daily Pages</title>
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background: #f8f9fa; }
        .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 0; margin-bottom: 40px; }
    </style>
</head>
<body>
    <header class="hero mb-5">
        <div class="container">
            <h1 class="display-5">#30DayMapChallenge 2025</h1>
            <p class="lead mb-0">AI-assisted mapping experiments, documented daily.</p>
            <p class="mt-3 mb-0">Published days: ${dayCount} / 30</p>
        </div>
    </header>

    <main class="container pb-5">
        <section class="mb-5" data-day-nav>
            <div class="text-center text-muted">Loading day navigator…</div>
        </section>

        <section>
            ${gridContent}
        </section>
    </main>

    <footer class="py-4 bg-dark text-white">
        <div class="container text-center">
            <p class="mb-1"><strong>#30DayMapChallenge 2025</strong></p>
            <p class="mb-2 small">Generated ${generatedOn} · GitHub Pages ready</p>
            <a class="text-white" href="https://github.com/dannyhines/30-day-map-challenge-2025">View Repository</a>
        </div>
    </footer>

    <script src="site-assets/js/day-navigation.js" data-manifest="days.json" data-base-path="./" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;
}

function renderRedirectHtml(day) {
    const targetUrl = day.relativeUrl;
    const generatedOn = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date());

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${targetUrl}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${day.title} | #30DayMapChallenge 2025</title>
    <link rel="canonical" href="${targetUrl}">
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
</head>
<body style="font-family: system-ui, sans-serif; background: #0f172a; color: #e2e8f0; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0;">
    <div style="text-align: center; max-width: 480px; padding: 24px;">
        <p style="letter-spacing: 0.2em; text-transform: uppercase; font-size: 0.8rem; margin-bottom: 8px;">#30DayMapChallenge 2025</p>
        <h1 style="font-size: clamp(1.75rem, 3vw, 2.25rem); margin: 0 0 12px 0;">Redirecting to ${day.title}</h1>
        <p style="margin: 0 0 24px 0;">Hang tight—if you're not redirected automatically, <a href="${targetUrl}" style="color: #38bdf8;">click here</a>.</p>
        <p style="font-size: 0.85rem; opacity: 0.75;">Generated ${generatedOn}</p>
    </div>
    <script>
        setTimeout(() => {
            window.location.replace('${targetUrl}');
        }, 100);
    </script>
</body>
</html>`;
}

async function build() {
    await ensureDir(docsDir);
    await emptyDir(outputMapsDir);

    if (await pathExists(sourceAssetsDir)) {
        await emptyDir(outputAssetsDir);
        await copyDir(sourceAssetsDir, outputAssetsDir);
    }

    if (await pathExists(faviconSource)) {
        await fs.copyFile(faviconSource, faviconTarget);
    }

    for (const docName of rootDocsToCopy) {
        const sourcePath = path.join(repoRoot, docName);
        if (await pathExists(sourcePath)) {
            const targetPath = path.join(docsDir, docName);
            await fs.copyFile(sourcePath, targetPath);
        }
    }

    const dayEntries = [];

    const mapDirEntries = await fs.readdir(mapsDir, { withFileTypes: true });
    for (const entry of mapDirEntries) {
        if (!entry.isDirectory()) {
            continue;
        }
        const slug = entry.name;
        const sourceDir = path.join(mapsDir, slug);
        const indexPath = path.join(sourceDir, 'index.html');
        const hasIndex = await pathExists(indexPath);
        if (!hasIndex) {
            continue;
        }

        const destDir = path.join(outputMapsDir, slug);
        await copyDir(sourceDir, destDir);

        const html = await fs.readFile(indexPath, 'utf-8');
        const readmeExists = await pathExists(path.join(sourceDir, 'README.md'));
        const manifestEntry = buildManifestEntry(slug, html, readmeExists);
        dayEntries.push(manifestEntry);
    }

    dayEntries.sort((a, b) => {
        if (typeof a.dayNumber === 'number' && typeof b.dayNumber === 'number') {
            return a.dayNumber - b.dayNumber;
        }
        return a.id.localeCompare(b.id);
    });

    const manifest = {
        generatedAt: new Date().toISOString(),
        days: dayEntries
    };

    const manifestJson = `${JSON.stringify(manifest, null, 2)}\n`;
    await fs.writeFile(manifestPathRoot, manifestJson, 'utf-8');
    await fs.writeFile(manifestPathDocs, manifestJson, 'utf-8');

    const defaultDaySlug = process.env.DEFAULT_DAY?.trim();
    let indexHtml;
    if (defaultDaySlug) {
        const defaultDay = dayEntries.find((entry) => entry.id === defaultDaySlug);
        if (defaultDay) {
            console.log(`Default day set to '${defaultDaySlug}'. Generating redirect entry page.`);
            indexHtml = renderRedirectHtml(defaultDay);
        } else {
            console.warn(`DEFAULT_DAY='${defaultDaySlug}' not found in manifest. Using overview index.`);
            indexHtml = renderIndexHtml(dayEntries);
        }
    } else {
        indexHtml = renderIndexHtml(dayEntries);
    }
    await fs.writeFile(path.join(docsDir, 'index.html'), indexHtml, 'utf-8');
}

build().catch((error) => {
    console.error('Build failed:', error);
    process.exitCode = 1;
});
