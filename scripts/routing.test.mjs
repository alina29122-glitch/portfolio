import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pagePaths, pageMetadata, renderPage } from '../app.js';
import { createPreviewServer } from './serve.mjs';

test('every route contains complete semantic HTML and its own canonical metadata', async () => {
  const titles = new Set();
  for (const path of pagePaths) {
    const file = path === '/' ? 'dist/index.html' : `dist${path}.html`;
    const html = await readFile(file, 'utf8');
    assert(html.includes(renderPage(path)), `${path}: shared renderer content missing`);
    if (path.startsWith('/case/')) assert(html.includes('<h1'), `${path}: heading missing`);
    assert(html.includes(`href="${pageMetadata(path).canonical}"`));
    assert(!html.includes('href="#/'));
    assert(!html.includes('src="assets/'));
    titles.add(pageMetadata(path).title);
  }
  assert.equal(titles.size, pagePaths.length);
  const nda = await readFile('dist/case/new-project.html', 'utf8');
  for (const text of ['Guiding students from a blank page', 'Instant step-by-step math help', 'From study materials to active practice', 'Structuring AI learning into guided programs']) assert(nda.includes(text));
});

test('Vercel publishes generated HTML and preserves filesystem priority over SPA fallback', async () => {
  const config = JSON.parse(await readFile('vercel.json', 'utf8'));
  assert.equal(config.buildCommand, 'npm run build');
  assert.equal(config.outputDirectory, 'dist');
  assert.equal(config.cleanUrls, true);
  assert.deepEqual(config.rewrites, [{ source: '/(.*)', destination: '/index.html' }]);
});

test('direct requests and repeated refreshes serve case HTML, not the app shell', async t => {
  const server = createPreviewServer('dist');
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => server.close());
  const base = `http://127.0.0.1:${server.address().port}`;
  for (const path of pagePaths) {
    for (let i = 0; i < 2; i++) {
      const response = await fetch(base + path);
      assert.equal(response.status, 200);
      const html = await response.text();
      assert(html.includes(renderPage(path)), path);
    }
  }
  assert.equal((await fetch(base + '/app.js')).headers.get('content-type'), 'text/javascript');
});
