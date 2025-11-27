#!/usr/bin/env node
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { watch } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const docsDir = path.join(repoRoot, 'docs');
const mapsDir = path.join(repoRoot, 'maps');
const sourceAssetsDir = path.join(repoRoot, 'site-assets');

function parseArgs() {
    const args = process.argv.slice(2);
    const defaultDir = docsDir;
    const opts = { dir: defaultDir, port: 8080, host: '0.0.0.0' };
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if ((arg === '--dir' || arg === '-d') && args[i + 1]) {
            opts.dir = path.resolve(args[i + 1]);
            i++;
        } else if ((arg === '--port' || arg === '-p') && args[i + 1]) {
            opts.port = Number(args[i + 1]) || opts.port;
            i++;
        } else if (arg === '--host' && args[i + 1]) {
            opts.host = args[i + 1];
            i++;
        }
    }
    return opts;
}

const MIME_TYPES = {
    '.html': 'text/html; charset=UTF-8',
    '.htm': 'text/html; charset=UTF-8',
    '.js': 'application/javascript; charset=UTF-8',
    '.mjs': 'application/javascript; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.json': 'application/json; charset=UTF-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain; charset=UTF-8',
    '.map': 'application/octet-stream'
};

function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return MIME_TYPES[ext] || 'application/octet-stream';
}

function send(res, status, body, headers = {}) {
    res.writeHead(status, headers);
    res.end(body);
}

async function serveFile(rootDir, urlPath, res) {
    const cleanPath = decodeURIComponent(urlPath.split('?')[0]);
    const safePath = path.normalize(cleanPath).replace(/^(\.\.[/\\])+/, '');
    let target = path.join(rootDir, safePath);

    try {
        let stat = await fs.stat(target);
        if (stat.isDirectory()) {
            const indexPath = path.join(target, 'index.html');
            const indexStat = await fs.stat(indexPath);
            target = indexPath;
            stat = indexStat;
        }
        const data = await fs.readFile(target);
        const mime = getMimeType(target);
        send(res, 200, data, { 'Content-Type': mime });
    } catch (err) {
        if (err.code === 'ENOENT' && rootDir !== docsDir) {
            // Fallback: if serving repo root and docs/ exists, try docs/ path
            try {
                const altRoot = docsDir;
                const altTarget = path.join(altRoot, safePath === '/' ? 'index.html' : safePath);
                const altStat = await fs.stat(altTarget);
                const data = await fs.readFile(altTarget);
                const mime = getMimeType(altTarget);
                send(res, 200, data, { 'Content-Type': mime });
                return;
            } catch {
                // ignore and fall through
            }
        }
        if (err.code === 'ENOENT') {
            send(res, 404, 'Not Found', { 'Content-Type': 'text/plain; charset=UTF-8' });
        } else {
            send(res, 500, 'Server Error', { 'Content-Type': 'text/plain; charset=UTF-8' });
        }
    }
}

async function copyDir(src, dest) {
    await fs.mkdir(dest, { recursive: true });
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

async function rebuildDay(slug) {
    const sourceDir = path.join(mapsDir, slug);
    const destDir = path.join(docsDir, 'maps', slug);
    try {
        await fs.stat(sourceDir);
        await copyDir(sourceDir, destDir);
        console.log(`✓ Rebuilt: ${slug}`);
        return true;
    } catch (err) {
        if (err.code === 'ENOENT') {
            // Day directory doesn't exist, skip
            return false;
        }
        console.error(`Error rebuilding ${slug}:`, err.message);
        return false;
    }
}

async function rebuildAssets() {
    const outputAssetsDir = path.join(docsDir, 'site-assets');
    try {
        await fs.stat(sourceAssetsDir);
        await fs.rm(outputAssetsDir, { recursive: true, force: true });
        await copyDir(sourceAssetsDir, outputAssetsDir);
        console.log('✓ Rebuilt: site-assets');
        return true;
    } catch (err) {
        if (err.code === 'ENOENT') {
            return false;
        }
        console.error('Error rebuilding assets:', err.message);
        return false;
    }
}

async function rebuildManifest() {
    // Import build-site functions dynamically
    const buildSitePath = path.join(__dirname, 'build-site.mjs');
    const buildSite = await import(buildSitePath + '?update=' + Date.now());
    // We'll need to call the manifest building logic
    // For now, just trigger a full manifest rebuild by running build-site
    // Pass empty env to avoid inheriting process.argv arguments
    const { spawn } = await import('node:child_process');
    return new Promise((resolve) => {
        const proc = spawn('node', [buildSitePath], { 
            stdio: 'inherit',
            env: { ...process.env }
        });
        proc.on('close', (code) => {
            if (code === 0) {
                console.log('✓ Rebuilt: manifest and index');
            }
            resolve(code === 0);
        });
    });
}

// Debounce function to avoid too many rebuilds
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

let rebuildQueue = new Set();
let isRebuilding = false;

async function processRebuildQueue() {
    if (isRebuilding || rebuildQueue.size === 0) return;
    isRebuilding = true;

    const needsManifest = rebuildQueue.has('manifest') || rebuildQueue.has('assets');
    const needsAssets = rebuildQueue.has('assets');
    const days = Array.from(rebuildQueue).filter(slug => slug !== 'manifest' && slug !== 'assets');

    rebuildQueue.clear();

    try {
        if (needsAssets) {
            await rebuildAssets();
        }

        for (const slug of days) {
            await rebuildDay(slug);
        }

        if (needsManifest || days.length > 0) {
            await rebuildManifest();
        }
    } catch (err) {
        console.error('Rebuild error:', err);
    } finally {
        isRebuilding = false;
        if (rebuildQueue.size > 0) {
            processRebuildQueue();
        }
    }
}

const debouncedRebuild = debounce(processRebuildQueue, 300);

function watchForChanges() {
    console.log('👀 Watching for file changes...');

    // Watch maps directory
    watch(mapsDir, { recursive: true }, (eventType, filename) => {
        if (!filename) return;

        const fullPath = path.join(mapsDir, filename);
        const relativePath = path.relative(mapsDir, fullPath);

        // Extract day slug from path (e.g., "18-out-of-this-world/index.html" -> "18-out-of-this-world")
        const parts = relativePath.split(path.sep);
        if (parts.length > 0 && parts[0]) {
            const slug = parts[0];
            if (slug !== '.DS_Store' && !slug.startsWith('.')) {
                rebuildQueue.add(slug);
                debouncedRebuild();
            }
        }
    });

    // Watch site-assets
    if (sourceAssetsDir) {
        watch(sourceAssetsDir, { recursive: true }, () => {
            rebuildQueue.add('assets');
            rebuildQueue.add('manifest');
            debouncedRebuild();
        });
    }

    // Watch root files that affect manifest
    const rootFiles = ['favicon.svg', 'PLATFORM-TRACKER.md'];
    for (const file of rootFiles) {
        const filePath = path.join(repoRoot, file);
        watch(filePath, () => {
            rebuildQueue.add('manifest');
            debouncedRebuild();
        });
    }
}

function injectReloadScript(html) {
    const reloadScript = `
    <script>
        (function() {
            if (typeof EventSource !== 'undefined') {
                const evtSource = new EventSource('/__reload');
                evtSource.onmessage = function(e) {
                    if (e.data && e.data.trim() === 'reload') {
                        window.location.reload();
                    }
                };
                evtSource.onerror = function() {
                    // Reconnect on error
                    setTimeout(function() {
                        evtSource.close();
                        location.reload();
                    }, 1000);
                };
            }
        })();
    </script>`;

    // Inject before closing </body> tag
    if (html.includes('</body>')) {
        return html.replace('</body>', reloadScript + '</body>');
    }
    return html;
}

function startServer({ dir, port, host }) {
    // Track reload clients
    const reloadClients = new Set();

    const broadcastReload = () => {
        reloadClients.forEach(client => {
            try {
                if (!client.destroyed) {
                    client.write('data: reload\n\n');
                }
            } catch (err) {
                // Client disconnected, remove it
                reloadClients.delete(client);
            }
        });
        // Clean up destroyed clients
        reloadClients.forEach(client => {
            if (client.destroyed) {
                reloadClients.delete(client);
            }
        });
    };

    // Hook into rebuild to broadcast reload
    const originalProcessRebuild = processRebuildQueue;
    processRebuildQueue = async function() {
        await originalProcessRebuild();
        broadcastReload();
    };

    const server = http.createServer(async (req, res) => {
        // Handle Server-Sent Events for reload
        if (req.url === '/__reload') {
            res.writeHead(200, {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
                'Access-Control-Allow-Origin': '*',
            });
            reloadClients.add(res);
            // Keep connection open with keepalive
            const interval = setInterval(() => {
                try {
                    if (!res.destroyed) {
                        res.write(': keepalive\n\n');
                    } else {
                        clearInterval(interval);
                        reloadClients.delete(res);
                    }
                } catch (err) {
                    clearInterval(interval);
                    reloadClients.delete(res);
                }
            }, 30000);
            req.on('close', () => {
                clearInterval(interval);
                reloadClients.delete(res);
            });
            return;
        }

        // Serve files with reload script injection for HTML
        const urlPath = req.url || '/';
        const cleanPath = decodeURIComponent(urlPath.split('?')[0]);
        const safePath = path.normalize(cleanPath).replace(/^(\.\.[/\\])+/, '');
        let target = path.join(dir, safePath);

        try {
            let stat = await fs.stat(target);
            if (stat.isDirectory()) {
                const indexPath = path.join(target, 'index.html');
                const indexStat = await fs.stat(indexPath);
                target = indexPath;
                stat = indexStat;
            }

            let data = await fs.readFile(target);
            const mime = getMimeType(target);

            // Inject reload script for HTML files
            if (mime.includes('text/html')) {
                const html = data.toString('utf-8');
                const htmlWithReload = injectReloadScript(html);
                data = Buffer.from(htmlWithReload, 'utf-8');
            }

            send(res, 200, data, { 'Content-Type': mime });
        } catch (err) {
            if (err.code === 'ENOENT' && dir !== docsDir) {
                try {
                    const altRoot = docsDir;
                    const altTarget = path.join(altRoot, safePath === '/' ? 'index.html' : safePath);
                    const altStat = await fs.stat(altTarget);
                    let altData = await fs.readFile(altTarget);
                    const mime = getMimeType(altTarget);

                    if (mime.includes('text/html')) {
                        const html = altData.toString('utf-8');
                        const htmlWithReload = injectReloadScript(html);
                        altData = Buffer.from(htmlWithReload, 'utf-8');
                    }

                    send(res, 200, altData, { 'Content-Type': mime });
                    return;
                } catch {
                    // ignore and fall through
                }
            }
            if (err.code === 'ENOENT') {
                send(res, 404, 'Not Found', { 'Content-Type': 'text/plain; charset=UTF-8' });
            } else {
                send(res, 500, 'Server Error', { 'Content-Type': 'text/plain; charset=UTF-8' });
            }
        }
    });

    server.listen(port, host, () => {
        const displayDir = path.relative(process.cwd(), dir) || '.';
        console.log(`Dev server running at http://${host}:${port} (serving ${displayDir})`);
        console.log(`🔄 Hot reload enabled - changes will auto-rebuild and refresh`);
        if (dir !== docsDir) {
            console.log(`Tip: run with default options to serve docs/ (deployed view).`);
        }
        watchForChanges();
    });
}

const options = parseArgs();
startServer(options);
