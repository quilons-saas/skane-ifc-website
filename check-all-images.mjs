import fs from "fs";
import path from "path";
import sharp from "sharp";

const dir = "public/images";
const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".png")).sort();

function analyze(p) {
  return sharp(p)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
    .then(async ({ data, info }) => {
      const w = info.width;
      const h = info.height;
      let transparent = 0;
      let checker = 0;
      let white = 0;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];
          if (a < 10) transparent++;
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          if (a > 200 && max > 240 && max - min < 25) white++;
          if (a > 200 && max > 175 && max < 230 && max - min < 25) checker++;
        }
      }
      const m = await sharp(p).metadata();
      return {
        file: p,
        format: m.format,
        hasAlpha: m.hasAlpha,
        size: `${w}x${h}`,
        transparentPct: +((100 * transparent) / (w * h)).toFixed(2),
        checkerGrayPct: +((100 * checker) / (w * h)).toFixed(2),
        whitePct: +((100 * white) / (w * h)).toFixed(2),
      };
    });
}

const results = [];
for (const f of files) {
  const p = path.join(dir, f);
  results.push(await analyze(p));
}
console.log(JSON.stringify(results, null, 2));
