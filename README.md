# Gamev2

## Local build and verification

Aura is a WebGL/physics scene. Run `npm ci --ignore-scripts`, `npm run build`, then serve `dist`. Exact original Three/Cannon versions now bundle locally rather than relying on unavailable Skypack URLs and placeholder integrity tags. Follow [.cursor/skills/verify-aura-physics/SKILL.md](.cursor/skills/verify-aura-physics/SKILL.md) for real startup/input/resize/fallback proof and explicit gameplay/audio/device limits.
