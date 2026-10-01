import { build } from 'esbuild';

await build({
  entryPoints: ['components/ui/project-preview-cursor.tsx'],
  outfile: 'components/ui/project-preview-cursor.js',
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2022',
  minify: true,
  define: { 'process.env.NODE_ENV': '"production"' },
});
