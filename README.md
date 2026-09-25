# Alina Diadenko Portfolio

Static portfolio using plain JavaScript modules (no React or TypeScript).

## Run locally

Requires Node.js 20 or later. No npm dependencies are required.

```bash
npm run dev
```

Open `http://localhost:5173`. Clean routes work directly, including `/case/new-project`.

## Build and verify

```bash
npm run build
npm test
npm run preview
```

The build writes `dist/`: homepage, Projects, About and all seven case pages as full semantic HTML, with unique titles, descriptions and canonical URLs. It uses the same renderer as the browser, so case content is not duplicated. It also generates `sitemap.xml` and `robots.txt`. Preview serves the generated pages with the hosting fallback behavior.

## Edit content

Most portfolio copy lives in `app.js`; extended case content is in `edtech-case.js`, `yola-growth.js`, and `mgid-onboarding.js`. Run the build after editing content. Asset URLs are root-relative so nested routes can load images, videos and scripts directly.

## Routing and deployment

The existing project is linked to Vercel. `vercel.json` explicitly runs `npm run build`, publishes only `dist`, enables clean URLs and adds an SPA fallback. Vercel serves matching generated HTML/assets before applying the fallback rewrite. Thus `/case/new-project` returns its own HTML to crawlers and on refresh, rather than just the app shell.

Deploy through the existing Vercel workflow; do not publish the unbuilt source folder. The configuration takes effect on the next deployment. No production deployment is performed by the build command.

Browser navigation uses the History API, preserves page transitions and starts a newly opened case at the top. Section fragments remain ordinary in-page anchors. Old hash-route bookmarks are converted once on load to their clean equivalent. Existing case slugs are preserved (the MGID dashboard case is `/case/mgid-feature-design`).

## VS Code Live Preview

Run `npm run build` once before opening clean routes in VS Code Live Preview (port 3000). The build also generates ignored `case/*/index.html`, `projects/index.html` and `about/index.html` entry points in the source workspace for this static server. They use the current source assets and remain available while `dist` is rebuilt. Subsequent builds replace them atomically, so refreshes do not encounter a missing route file. Production continues to serve only `dist`.
