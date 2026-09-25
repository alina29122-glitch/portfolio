import { cp, mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { pagePaths, pageMetadata, renderPage } from '../app.js';

const output = resolve('dist');
const template = await readFile('index.html', 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['assets', 'components', 'app.js', 'edtech-case.js', 'yola-growth.js', 'mgid-onboarding.js', 'styles.css', 'mgid-onboarding.css']) {
  await cp(file, resolve(output, file), { recursive: true });
}
for (const path of pagePaths) {
  const meta = pageMetadata(path);
  let html = template
    .replace(/<title>.*?<\/title>/s, `<title>${escape(meta.title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/s, (_, before, after) => before + escape(meta.description) + after)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, (_, before, after) => before + escape(meta.canonical) + after)
    .replace('<main id="app"></main>', () => `<main id="app">${renderPage(path)}</main>`)
    .replace('<body>', `<body class="${path === '/' ? 'is-home-route' : path === '/about' ? '' : 'is-work-route'}">`);
  const file = resolve(output, path === '/' ? 'index.html' : `${path.slice(1)}.html`);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
  // VS Code Live Preview serves the source workspace without SPA rewrites.
  // Keep directory entry points outside dist so rebuilds never remove them.
  if (path !== '/') {
    const previewFile = resolve(`.${path}`, 'index.html');
    await mkdir(dirname(previewFile), { recursive: true });
    await writeFile(previewFile + '.tmp', html);
    await rename(previewFile + '.tmp', previewFile);
  }
}
await writeFile(resolve(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pagePaths.map(path => `<url><loc>${pageMetadata(path).canonical}</loc></url>`).join('')}</urlset>\n`);
await writeFile(resolve(output, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: https://alina-di.com/sitemap.xml\n');
console.log(`Built ${pagePaths.length} pages with full HTML, unique metadata and clean URLs.`);
