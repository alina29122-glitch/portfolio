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
    if (path !== '/') {
      const preview = await readFile(`.${path}/index.html`, 'utf8');
      assert.equal(preview, html, `${path}: Live Preview entry point must match the build`);
    }
    if (path.startsWith('/case/')) assert(html.includes('<h1'), `${path}: heading missing`);
    assert(html.includes(`href="${pageMetadata(path).canonical}"`));
    assert(!html.includes('href="#/'));
    assert(!html.includes('src="assets/'));
    titles.add(pageMetadata(path).title);
  }
  assert.equal(titles.size, pagePaths.length);
  const nda = await readFile('dist/case/ai-learning.html', 'utf8');
  for (const text of ['Guiding students from a blank page', 'Instant step-by-step math help', 'From study materials to active practice', 'Structuring AI learning into guided programs']) assert(nda.includes(text));
});

test('Vercel publishes generated HTML and preserves filesystem priority over SPA fallback', async () => {
  const config = JSON.parse(await readFile('vercel.json', 'utf8'));
  assert.equal(config.buildCommand, 'npm run build');
  assert.equal(config.outputDirectory, 'dist');
  assert.equal(config.cleanUrls, true);
  assert.deepEqual(config.rewrites, [{ source: '/(.*)', destination: '/index.html' }]);
  for (const source of ['/case/new-project', '/case/new-project.html', '/case/new-project/index.html']) {
    assert.deepEqual(config.redirects.find(rule => rule.source === source), {
      source, destination: '/case/ai-learning', statusCode: 301
    });
  }
});

test('AI learning is the only renamed route and all generated links use it', async () => {
  assert.deepEqual(pagePaths.filter(path => path.startsWith('/case/')), [
    '/case/ai-learning', '/case/mgid-feature-design', '/case/mgid-user-activation',
    '/case/yola-growth', '/case/latitude-retention', '/case/sitebuilder-tools', '/case/site-templates'
  ]);
  for (const path of pagePaths) {
    const html = renderPage(path);
    assert(!html.includes('href="/case/new-project'), path);
    for (const [, target] of html.matchAll(/href="(\/case\/[^"#?]+)[^"]*"/g)) {
      assert(pagePaths.includes(target), `${path}: broken case link ${target}`);
    }
  }
  const html = renderPage('/case/ai-learning');
  assert(html.includes('case-page-new-project'), 'existing styling hooks must remain stable');
  assert.equal(pageMetadata('/case/ai-learning').canonical, 'https://alina-di.com/case/ai-learning');
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  assert(sitemap.includes('/case/ai-learning</loc>'));
  assert(!sitemap.includes('/case/new-project'));
});

test('old URLs redirect permanently before file serving, preserving query strings', async t => {
  for (const directory of ['.', 'dist']) {
    const server = createPreviewServer(directory);
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    t.after(() => server.close());
    const base = `http://127.0.0.1:${server.address().port}`;
    for (const path of ['/case/new-project', '/case/new-project/', '/case/new-project.html', '/case/new-project/index.html']) {
      for (const method of ['GET', 'HEAD']) {
        const response = await fetch(base + path + '?utm_source=bookmark', { redirect: 'manual', method });
        assert.equal(response.status, 301, `${directory}: ${path}`);
        assert.equal(response.headers.get('location'), '/case/ai-learning?utm_source=bookmark');
      }
      const response = await fetch(base + path);
      assert.equal(response.status, 200);
      assert.equal(response.url, base + '/case/ai-learning');
      assert((await response.text()).includes(renderPage('/case/ai-learning')));
    }
  }
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
