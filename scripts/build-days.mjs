import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import nunjucks from 'nunjucks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const srcPagesDir = path.join(repoRoot, 'src', 'pages');
const defaultOutDir = path.join(repoRoot, 'maps-build');

function parseArgs() {
    const args = process.argv.slice(2);
    const options = { outDir: defaultOutDir, only: null };
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if ((arg === '--out' || arg === '-o') && args[i + 1]) {
            options.outDir = path.resolve(repoRoot, args[i + 1]);
            i++;
        } else if (arg === '--only' && args[i + 1]) {
            options.only = args[i + 1];
            i++;
        }
    }
    return options;
}

async function ensureDir(dir) {
    await fs.mkdir(dir, { recursive: true });
}

async function collectPages(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        if (entry.isDirectory()) {
            files.push(...(await collectPages(path.join(dir, entry.name))));
        } else if (entry.isFile() && entry.name.endsWith('.njk')) {
            files.push(path.join(dir, entry.name));
        }
    }
    return files;
}

function createRenderer() {
    const searchPaths = [path.join(repoRoot, 'templates'), srcPagesDir];
    return nunjucks.configure(searchPaths, { autoescape: false });
}

async function buildPage(renderer, filePath, outDir) {
    const slug = path.basename(filePath, '.njk');
    const raw = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(raw);

    const daySlug = data.daySlug || slug;
    const basePath = data.basePath ?? '../../';
    const manifestPath = data.manifestPath ?? path.posix.join(basePath, 'days.json');
    const faviconPath = data.faviconPath ?? path.posix.join(basePath, 'favicon.svg');

    const context = {
        ...data,
        daySlug,
        basePath,
        manifestPath,
        faviconPath
    };

    const rendered = renderer.renderString(content, context);

    const destDir = path.join(outDir, slug);
    await ensureDir(destDir);
    await fs.writeFile(path.join(destDir, 'index.html'), rendered, 'utf-8');
    console.log(`Built ${slug} -> ${path.relative(repoRoot, path.join(destDir, 'index.html'))}`);
}

async function main() {
    const { outDir, only } = parseArgs();
    const renderer = createRenderer();

    const pages = await collectPages(srcPagesDir);
    if (!pages.length) {
        console.warn('No .njk pages found in src/pages.');
        return;
    }

    const filtered = only
        ? pages.filter((p) => path.basename(p, '.njk') === only)
        : pages;

    if (!filtered.length) {
        console.warn(`No pages matched --only ${only}.`);
        return;
    }

    await ensureDir(outDir);
    for (const pagePath of filtered) {
        await buildPage(renderer, pagePath, outDir);
    }
}

main().catch((err) => {
    console.error('build-days failed:', err);
    process.exitCode = 1;
});
