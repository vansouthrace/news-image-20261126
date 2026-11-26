// Sum up 26 November's world news in one image.
// Copies the pre-rendered front page (entry.png) to /output/entry.png.
// Deterministic: the same bytes every run, no network at run time.
//
// The image is a newspaper front page, "THE WORLD TODAY —
// THURSDAY 26 NOVEMBER 2026", with six stories from that day:
// US tariffs on China/EU/Brazil, the Houthi refinery-attack claim
// pushing Brent over $94, the Cairo tanker fire (31 killed), the
// Colombia supermarket hostage rescue, BepiColombo reaching Mercury,
// and the storm-postponed Macy's Thanksgiving parade.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = join(repoDir, "entry.png");
const dst = join(outDir, "entry.png");
copyFileSync(src, dst);
// The gate caps the file at 1 MiB and 1024x1024 px; refuse to emit
// anything larger instead of silently shipping an invalid entry.
if (statSync(dst).size > 1048576) {
  throw new Error(`entry.png is ${statSync(dst).size} bytes, over the 1 MiB cap`);
}
