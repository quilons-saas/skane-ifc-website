import fs from "fs";
import sharp from "sharp";

const sources = [
  "public/images/Skåne IFC Logo-22-05.png",
  "public/images/Skåne IFC Logo1.png",
  "public/images/Skåne IFC Logo.png",
];
const output = "public/images/skane-ifc-logo.png";

function isLogoInk(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max < 55) return true;
  if (r > 120 && g > 85 && b < 115 && r > b) return true; // gold
  if (b >= r - 10 && b >= g - 20 && max < 150) return true; // navy
  return max < 130 && b >= g - 15;
}

function isBackground(r, g, b, a) {
  if (a < 10) return true;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (isLogoInk(r, g, b)) return false;
  // white, off-white, checkerboard gray
  return max > 175 && max - min < 40;
}

let best = null;

for (const src of sources) {
  if (!fs.existsSync(src)) continue;
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: c } = info;
  const out = Buffer.from(data);
  let transparent = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * c;
      const r = out[i];
      const g = out[i + 1];
      const b = out[i + 2];
      if (isBackground(r, g, b, out[i + 3])) {
        out[i + 3] = 0;
        transparent++;
      }
    }
  }
  const pct = transparent / (w * h);
  if (!best || pct > best.pct) best = { src, out, w, h, pct };
}

if (!best) {
  console.error("No source logo found");
  process.exit(1);
}

await sharp(best.out, { raw: { width: best.w, height: best.h, channels: 4 } })
  .png()
  .resize(1024, 1024, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .toFile(output);

const m = await sharp(output).metadata();
const { data } = await sharp(output).raw().toBuffer({ resolveWithObject: true });
let t = 0;
for (let i = 3; i < data.length; i += 4) if (data[i] < 10) t++;
console.log(
  `Source: ${best.src}\nWrote: ${output}\nTransparent: ${((100 * t) / (m.width * m.height)).toFixed(1)}%`
);
