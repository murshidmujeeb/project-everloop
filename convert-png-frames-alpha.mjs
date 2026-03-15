// convert-png-frames-alpha.mjs
// Flood-fill background removal for PNG frames:
// Starts from all 4 corners, removes connected pixels similar to the corner color,
// and writes transparent PNGs.

import { Jimp } from 'jimp';
import { readdir, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT_DIR = path.join(__dirname, 'public', 'png frames');
const OUTPUT_DIR = path.join(__dirname, 'public', 'png-frames-alpha');
const TOLERANCE = 34; // Background similarity tolerance (tune if needed)

function colorDist(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

async function processFrame(inputPath, outputPath) {
  const img = await Jimp.read(inputPath);
  const w = img.bitmap.width;
  const h = img.bitmap.height;
  const data = img.bitmap.data; // RGBA

  // Sample background color from the top-left pixel.
  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];

  const visited = new Uint8Array(w * h);
  const queue = [];

  const seed = (x, y) => {
    const idx = y * w + x;
    if (!visited[idx]) {
      visited[idx] = 1;
      queue.push([x, y]);
    }
  };

  seed(0, 0);
  seed(w - 1, 0);
  seed(0, h - 1);
  seed(w - 1, h - 1);

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  let qi = 0;
  while (qi < queue.length) {
    const [cx, cy] = queue[qi++];
    const pixIdx = (cy * w + cx) * 4;
    const pr = data[pixIdx];
    const pg = data[pixIdx + 1];
    const pb = data[pixIdx + 2];

    // Only clear pixels that are within tolerance of the sampled background.
    if (colorDist(pr, pg, pb, bgR, bgG, bgB) <= TOLERANCE) {
      data[pixIdx + 3] = 0;
    } else {
      continue;
    }

    for (let d = 0; d < 4; d++) {
      const nx = cx + dx[d];
      const ny = cy + dy[d];
      if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
      const nidx = ny * w + nx;
      if (visited[nidx]) continue;
      visited[nidx] = 1;
      queue.push([nx, ny]);
    }
  }

  await img.write(outputPath);
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = (await readdir(INPUT_DIR))
    .filter((f) => f.toLowerCase().endsWith('.png'))
    .sort();

  console.log(`Processing ${files.length} PNG frames...`);
  let done = 0;

  for (const file of files) {
    const inPath = path.join(INPUT_DIR, file);
    const outPath = path.join(OUTPUT_DIR, file);
    await processFrame(inPath, outPath);
    done++;
    if (done % 20 === 0) console.log(`  ${done}/${files.length} done`);
  }

  console.log('All frames converted! Output at:', OUTPUT_DIR);
}

main().catch(console.error);

