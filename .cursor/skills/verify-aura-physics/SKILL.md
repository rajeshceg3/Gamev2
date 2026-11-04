---
name: verify-aura-physics
description: Build Gamev2's actual Aura WebGL/physics scene with locked local modules, drive pointer input, inspect moving finite motes and resize/fallback evidence, without claiming full gameplay or audio acceptance.
---
# Aura physics source verification

## Launch
Use Node22.12+, Chrome and `npm ci --ignore-scripts`, then `npm run build`. The esbuild platform package is installed by npm; no global bundler is required. Serve dist with `python3 -m http.server 8080 --directory dist --bind 127.0.0.1`. Original inline source moved to src/app.js; same exact three0.137.5/cannon-es0.19.0 versions now bundled locally. Original Skypack URLs returned404 and placeholder SRI tags did not protect inline imports. Do not restore fake integrity metadata or disable security checks to make imports work.

## Doctor
Install helper: `npm ci --ignore-scripts --prefix .cursor/skills/verify-aura-physics`. Run `node .cursor/skills/verify-aura-physics/helpers/verify.mjs /tmp/aura-proof`. It requires actual built dist/assets/app.js, owns a loopback static server and fresh browser contexts. No external runtime request is allowed. Ready means actual canvas plus50finite physics motes, not HTTP alone. CHROME_PATH overrides /usr/bin/google-chrome. Chrome software WebGL is explicitly allowed for this local proof, not device/GPU performance evidence.

## Drive
Actual mouse movement/click at390/1365 changes normalized pointer position and resumes WebAudio. Wait real500ms, observe50finite motes changing under real Cannon physics; resize viewport and confirm actual backing canvas updates. Exported snapshot is read-only, with no setters; neither internal handlers nor direct state mutation drive the test. Module import reads the already-running singleton, not a duplicate app. The source's real Cannon normalize returned a number, so chained normalize().scale crashed startup; now normalize and scale separately. No library major upgrades.

## Evidence
Named output has result.json and both-width scene.png plus unsupported.png. A separate fresh-context getContext-null boundary fixture checks visible unsupported-browser recovery; this is labeled simulated unavailability. Read actual pixels. Central glass form is visible; many initial motes spawn outside the camera and arrive later. This startup/input proof does not establish whole journey/attraction/game completion/reset or visual richness. No completion is accelerated with setters. AudioContext running is not listening/music quality acceptance.

## Cleanup
Helper closes its own browser/server and preserves named proof. Separate output/context per concurrent run, no shared browser/user state. Never kill by process name, delete original source or change deployments/settings. npm build writes only dist; generated output remains ignored. Failure logs/result remain for investigation.

## Coverage and maintenance
Completion to harmony1/reset5seconds, longrunphysics, physicaltouch/deviceGPUperformance, reducedmotion/keyboard/soundcontrols, audioartistry, hosted/CI and security acceptance remain open. Audit at installation reported0 for this small locked tree, not a security guarantee. Canvas startup failure now has visible fallback instead of a blank page. Use /maintain-verification-skill when expanding source or gameplay; never count read-only snapshots as full gameplay proof.
