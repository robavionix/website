// scripts/generate-og-image.mjs
// Regenerates public/images/og-image.jpg: a branded 1200x630 social-share
// card showing a fault-injected-then-recovered control signal trace.
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");
const OUTPUT_PATH = path.resolve(
  PROJECT_ROOT,
  "public",
  "images",
  "og-image.jpg",
);

const W = 1200;
const H = 630;

// Flat -> oscillates (fault injected) -> damps back to flat (recovered).
function tracePath() {
  const points = [];
  const n = 400;
  const xStart = 90;
  const xEnd = W - 90;
  const yMid = 430;

  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = xStart + t * (xEnd - xStart);
    let y = yMid;

    if (t > 0.28) {
      const localT = (t - 0.28) / 0.54;
      const envelope =
        Math.exp(-localT * 3.2) * (1 - Math.exp(-((t - 0.28) * 40)));
      const osc = Math.sin(localT * Math.PI * 7);
      y = yMid - envelope * osc * 95;
    }

    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }

  return points.join(" ");
}

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="${W}" y2="${H}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0A165E"/>
      <stop offset="100%" stop-color="#040D43"/>
    </linearGradient>
    <linearGradient id="traceFade" x1="90" y1="0" x2="${W - 90}" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2B4DFF" stop-opacity="0.35"/>
      <stop offset="26%" stop-color="#2B4DFF" stop-opacity="0.55"/>
      <stop offset="55%" stop-color="#5CE1E6" stop-opacity="0.95"/>
      <stop offset="82%" stop-color="#2B4DFF" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#2B4DFF" stop-opacity="0.5"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <g fill="#FFFFFF" opacity="0.05">
    ${Array.from({ length: 24 })
      .map((_, col) =>
        Array.from({ length: 13 })
          .map(
            (__, row) =>
              `<circle cx="${20 + col * 52}" cy="${20 + row * 52}" r="1.4"/>`,
          )
          .join(""),
      )
      .join("")}
  </g>

  <text x="90" y="150" font-family="Helvetica, Arial, sans-serif" font-size="20" letter-spacing="6" font-weight="700" fill="#5CE1E6">FAULT-TOLERANT FLIGHT CONTROL &#183; HIL TEACHING PLATFORM</text>

  <text x="88" y="238" font-family="Helvetica, Arial, sans-serif" font-size="92" font-weight="800" fill="#FFFFFF">Robavionix</text>

  <text x="90" y="300" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="400" fill="#CED0DF">See a controller fail. Then fix it.</text>

  <path d="${tracePath()}" fill="none" stroke="url(#traceFade)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="90" y1="430" x2="${W - 90}" y2="430" stroke="#FFFFFF" stroke-opacity="0.12" stroke-width="1.5" stroke-dasharray="2 6"/>

  <text x="90" y="500" font-family="Helvetica, Arial, sans-serif" font-size="18" letter-spacing="1.5" fill="#8891C7">PID</text>
  <text x="435" y="500" font-family="Helvetica, Arial, sans-serif" font-size="18" letter-spacing="1.5" fill="#5CE1E6">FAULT INJECTED</text>
  <text x="985" y="500" font-family="Helvetica, Arial, sans-serif" font-size="18" letter-spacing="1.5" fill="#8891C7">RECOVERED</text>
</svg>
`;

await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toFile(OUTPUT_PATH);

console.log(`[generate-og-image] ✓ Wrote ${OUTPUT_PATH}`);
