# Pointer and resize

## Sub-features
Move/click actual pointer near viewport edge, normalized coordinates update, WebAudio resumes, physical simulation evolves and resized canvas backing bounds match viewport. Snapshot observes read-only state, not synthetic gameplay.

## How to get to it (user POV)
Install/build and serve dist, then open the white Aura scene and move/touch to influence motes. No login or data store.

## Driving it with Puppeteer
Use actual helper in SKILL.md for bounded startup/input/resize, then inspect pixels/result after cleanup. Completion is explicitly not covered by that helper.

## Gotchas
SoftwareWebGL not deviceperformance. RunningAudioContext not musicquality. Completion/reducedmotion/keyboard/soundcontrols/hosted/CI unverified.
