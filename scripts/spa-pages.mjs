// GitHub Pages has no SPA fallback, so give every route its own copy of index.html.
// /experience is served from experience.html (200), anything else from 404.html.
import { copyFileSync } from 'node:fs';

const routes = ['projects', 'skills', 'certifications', 'experience', 'contact'];

for (const route of routes) copyFileSync('dist/index.html', `dist/${route}.html`);
copyFileSync('dist/index.html', 'dist/404.html');
