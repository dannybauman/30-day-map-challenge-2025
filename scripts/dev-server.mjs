#!/usr/bin/env node
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const docsDir = path.join(repoRoot, 'docs');

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

function startServer({ dir, port, host }) {
    const server = http.createServer((req, res) => {
        serveFile(dir, req.url || '/', res);
    });

    server.listen(port, host, () => {
        const displayDir = path.relative(process.cwd(), dir) || '.';
        console.log(`Dev server running at http://${host}:${port} (serving ${displayDir})`);
        if (dir !== docsDir) {
            console.log(`Tip: run with default options to serve docs/ (deployed view).`);
        }
    });
}

const options = parseArgs();
startServer(options);
