import { build } from 'esbuild';
import fs from 'node:fs';
fs.mkdirSync('dist/assets',{recursive:true});
await build({entryPoints:['src/app.js'],outfile:'dist/assets/app.js',bundle:true,format:'esm',sourcemap:true});
fs.copyFileSync('index.html','dist/index.html');
