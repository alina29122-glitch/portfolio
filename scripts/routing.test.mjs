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
    assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${path}: expected one H1`);
    assert(html.includes(`href="${pageMetadata(path).canonical}"`));
    assert(!html.includes('href="#/'));
    assert(!html.includes('src="assets/'));
    titles.add(pageMetadata(path).title);
  }
  assert.equal(titles.size, pagePaths.length);
  const nda = await readFile('dist/case/ai-learning.html', 'utf8');
  for (const text of ['Guiding students from a blank page', 'Instant step-by-step math help', 'From study materials to active practice', 'Structuring AI learning into guided programs']) assert(nda.includes(text));
});

test('Vercel publishes generated HTML without an indexable SPA fallback', async () => {
  const config = JSON.parse(await readFile('vercel.json', 'utf8'));
  assert.equal(config.buildCommand, 'npm run build');
  assert.equal(config.outputDirectory, 'dist');
  assert.equal(config.cleanUrls, true);
  assert.equal(config.rewrites, undefined);
  for (const source of ['/case/new-project', '/case/new-project.html', '/case/new-project/index.html']) {
    assert.deepEqual(config.redirects.find(rule => rule.source === source), {
      source, destination: '/case/ai-learning', statusCode: 301
    });
  }
});

test('AI learning is the only renamed route and all generated links use it', async () => {
  assert.deepEqual(pagePaths.filter(path => path.startsWith('/case/')), [
    '/case/ai-learning', '/case/mgid-feature-design', '/case/mgid-user-activation',
    '/case/yola-growth'
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

test('removed cases have no generated pages or sitemap entries and return 404', async t => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  for (const directory of ['.', 'dist']) {
    const server = createPreviewServer(directory);
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    t.after(() => server.close());
    const base = `http://127.0.0.1:${server.address().port}`;
    for (const slug of ['latitude-retention', 'sitebuilder-tools', 'site-templates']) {
      const path = `/case/${slug}`;
      assert(!pagePaths.includes(path));
      assert(!sitemap.includes(path));
      assert(renderPage(path).includes('Page not found'));
      await assert.rejects(readFile(`dist${path}.html`), { code: 'ENOENT' });
      await assert.rejects(readFile(`.${path}/index.html`), { code: 'ENOENT' });
      for (const suffix of ['', '/', '.html', '/index.html']) {
        for (const method of ['GET', 'HEAD']) {
          const response = await fetch(base + path + suffix, { method });
          assert.equal(response.status, 404);
          if (method === 'GET') {
            const html = await response.text();
            assert(html.includes('Page not found'));
            assert(html.includes('content="noindex"'));
          }
        }
      }
    }
  }
});

test('each page embeds its own social preview and ships a 1200 by 630 PNG', async () => {
  const expected = {
    '/': 'homepage.png',
    '/projects': 'projects.png',
    '/about': 'about.png',
    '/case/ai-learning': 'project-nda.png',
    '/case/mgid-feature-design': 'project-mgid-features.png',
    '/case/mgid-user-activation': 'project-mgid-onboarding.png',
    '/case/yola-growth': 'project-yola.png'
  };
  for (const [path, filename] of Object.entries(expected)) {
    const html = await readFile(path === '/' ? 'dist/index.html' : `dist${path}.html`, 'utf8');
    const tags = Object.fromEntries([...html.matchAll(/<meta (?:property|name)="((?:og|twitter):[^"]+)" content="([^"]*)"/g)].map(([, key, value]) => [key, value]));
    const image = `https://alina-di.com/assets/og/${filename}`;
    assert.equal(tags['og:image'], image, path);
    assert.equal(tags['twitter:image'], image, path);
    assert.equal(tags['og:url'], pageMetadata(path).canonical);
    assert.equal(tags['og:title'], pageMetadata(path).title);
    assert.equal(tags['twitter:card'], 'summary_large_image');
    assert.equal(tags['og:image:width'], '1200');
    assert.equal(tags['og:image:height'], '630');
    const png = await readFile(`dist/assets/og/${filename}`);
    assert.equal(png.subarray(1, 4).toString(), 'PNG');
    assert.equal(png.readUInt32BE(16), 1200);
    assert.equal(png.readUInt32BE(20), 630);
  }
});

test('the shipped cursor stays within its 10 KB JavaScript budget', async () => {
  const source = await readFile('components/ui/project-preview-cursor.js');
  const shipped = await readFile('dist/components/ui/project-preview-cursor.js');
  assert.deepEqual(shipped, source, 'ship the vanilla module directly');
  assert(shipped.length < 10_000, `cursor is ${shipped.length} bytes`);
  assert(!/^import\s/m.test(shipped.toString()), 'cursor must not load framework dependencies');
});
