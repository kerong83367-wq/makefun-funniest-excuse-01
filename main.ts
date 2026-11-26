// make.fun entry: The Funniest Excuse for Skipping a Meeting.
// Writes one razor-sharp excuse (1-200 characters) to entry.txt.
// Node 22, standard library only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Can't make the sync - I'm busy doing the thing this meeting was called to discuss.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const text = EXCUSE.trim();
if (text.length < 1 || text.length > 200) {
  console.error(`entry must be 1-200 characters, got ${text.length}`);
  process.exit(1);
}
if (text.includes("\n")) {
  console.error("entry must be a single line");
  process.exit(1);
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote entry.txt (${text.length} chars)`);
