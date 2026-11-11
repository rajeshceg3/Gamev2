# Verify Gamev2
Aura (Hardened) - physics garden game (three.js + cannon-es, esbuild bundler).
## Launch
npm install && npm run build, then serve the repo root.
## Doctor
`python3 .cursor/skills/verify-gamev2/verify.py`
## Drive
Bundles with esbuild (scripts/build.mjs), serves the site, and renders it in headless Chromium asserting the boot marker and zero JS console errors.
## Evidence
`.cursor/skills/verify-gamev2/evidence.json`
## Cleanup
Static/streamlit/next server terminated after the render.
## Known boundaries
Render smoke only; e2e suites not exercised here.
