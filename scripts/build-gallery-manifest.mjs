import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const ROOT = 'public/gallery';
const extsImg = new Set(['.jpg','.jpeg','.png','.gif','.webp']);
const extsVid = new Set(['.mp4','.webm','.mov']);
const items = [];
let id = 0;

let imageSize;
try {
  ({ imageSize } = await import('image-size'));
} catch {
  // optional dependency not installed
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else {
      const ext = extname(e.name).toLowerCase();
      if (extsImg.has(ext) || extsVid.has(ext)) {
        const s = await stat(p);
        const type = extsVid.has(ext) ? 'video' : 'image';
        let width, height;
        if (type === 'image' && imageSize) {
          try {
            const buf = await readFile(p);
            const dim = imageSize(buf);
            width = dim.width;
            height = dim.height;
          } catch {
            // ignore errors
          }
        }
        items.push({
          id: String(id++),
          type,
          src: '/' + relative('public', p).replace(/\\/g, '/'),
          thumb: '/' + relative('public', p).replace(/\\/g, '/'),
          folder: relative(ROOT, dir).replace(/\\/g, '/') || '/',
          filename: e.name,
          width,
          height,
          mtime: s.mtimeMs
        });
      }
    }
  }
}

await walk(ROOT);
items.sort((a,b)=> b.mtime - a.mtime);
await writeFile(join(ROOT, 'manifest.json'), JSON.stringify(items, null, 2));
console.log(`Generated manifest with ${items.length} items`);
