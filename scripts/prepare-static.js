#!/usr/bin/env node
const { existsSync, writeFileSync } = require("fs");
const { join } = require("path");

const outDir = join(process.cwd(), "out");

if (!existsSync(outDir)) {
  console.error("[prepare-static] Missing 'out' directory. Run 'npm run build' first.");
  process.exit(1);
}

const noJekyllPath = join(outDir, ".nojekyll");
writeFileSync(noJekyllPath, "");
console.log(`[prepare-static] Wrote ${noJekyllPath}`);

const customDomain = (process.env.CUSTOM_DOMAIN ?? "").trim();
if (customDomain) {
  const cnamePath = join(outDir, "CNAME");
  writeFileSync(cnamePath, `${customDomain}\n`);
  console.log(`[prepare-static] Wrote CNAME for ${customDomain}`);
} else {
  console.log("[prepare-static] CUSTOM_DOMAIN not set. Skipping CNAME.");
}
