import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { pagePaths, pageMetadata, renderPage } from '../app.js';

const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.xml': 'application/xml', '.txt': 'text/plain' };
const escape = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
export function createPreviewServer(directory = '.') {
  const root = resolve(directory);
  return createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const path = pathname.replace(/\/+$/, '') || '/';
      const candidate = resolve(root, `.${path}`);
      if (candidate !== root && !candidate.startsWith(root + sep)) { res.writeHead(403).end(); return; }
      let file;
      for (const name of [candidate, candidate + '.html', resolve(candidate, 'index.html')]) {
        if (await stat(name).then(s => s.isFile()).catch(() => false)) { file = name; break; }
      }
      // Mirrors Vercel: existing HTML/assets first, then SPA fallback.
      file ||= resolve(root, 'index.html');
      let data = await readFile(file);
      if (directory === '.' && pagePaths.includes(path) && extname(file) === '.html') {
        const meta = pageMetadata(path);
        data = Buffer.from(data.toString()
          .replace('<main id="app"></main>', () => `<main id="app">${renderPage(path)}</main>`)
          .replace(/<title>.*?<\/title>/s, `<title>${escape(meta.title)}</title>`)
          .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/s, (_, a, b) => a + escape(meta.description) + b)
          .replace(/(<link rel="canonical" href=")[^"]*(")/, (_, a, b) => a + meta.canonical + b));
      }
      const headers = { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache', 'Accept-Ranges': 'bytes' };
      const range = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
      if (range) {
        const start = Number(range[1]);
        const end = Math.min(range[2] ? Number(range[2]) : data.length - 1, data.length - 1);
        if (start > end) { res.writeHead(416).end(); return; }
        res.writeHead(206, { ...headers, 'Content-Range': `bytes ${start}-${end}/${data.length}`, 'Content-Length': end - start + 1 });
        res.end(req.method === 'HEAD' ? undefined : data.subarray(start, end + 1));
      } else {
        res.writeHead(200, { ...headers, 'Content-Length': data.length });
        res.end(req.method === 'HEAD' ? undefined : data);
      }
    } catch { res.writeHead(404).end('Not found'); }
  });
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const port = Number(process.env.PORT || 5173);
  createPreviewServer(process.argv[2] || '.').listen(port, '127.0.0.1', () => console.log(`Preview: http://127.0.0.1:${port}`));
}
