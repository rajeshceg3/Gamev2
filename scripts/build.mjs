import { build } from 'esbuild';
import fs from 'node:fs';
// Preserve the repository's existing GitHub Pages root-hosting contract.
fs.mkdirSync('assets',{recursive:true});
await build({entryPoints:['src/app.js'],outfile:'assets/app.js',bundle:true,format:'esm',minify:true,legalComments:'eof'});
fs.writeFileSync('assets/app.js',fs.readFileSync('assets/app.js','utf8').replace(/[ \t]+$/gm,''));
fs.mkdirSync('dist/assets',{recursive:true});
fs.copyFileSync('assets/app.js','dist/assets/app.js');
fs.copyFileSync('index.html','dist/index.html');
