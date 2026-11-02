/**
 * check-noindex.ts
 *
 * Verifies that every HTML page in dist/ is consistent with the build mode:
 *
 *   staging    →  ALL pages must carry  <meta name="robots" content="noindex…">
 *   production →  NO page should carry  noindex (script warns, exits 0, since
 *                 some pages may opt-in intentionally via noindex:true)
 *
 * Mode is detected from the built HTML itself (homepage sample), so the check
 * matches whatever SITE_MODE was used at build time — not the shell environment.
 * Netlify.toml sets SITE_MODE=staging; local builds default to production unless
 * you prefix: SITE_MODE=staging npm run build
 *
 * Usage: npm run check:noindex
 * Exit code 1 only when staging and a page is missing noindex.
 */

import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

const DIST = join(process.cwd(), 'dist');

// Pages / path prefixes that may legitimately carry noindex in production.
// Exact paths or prefixes ending in '/' (all pages under that prefix match).
const ALLOWED_NOINDEX_IN_PROD_EXACT = new Set([
  '/thank-you/index.html',
  '/styleguide/index.html',
  '/404.html',
  '/404/index.html',
]);
const ALLOWED_NOINDEX_IN_PROD_PREFIX = [
  '/new-developments/',  // pre-sale / coming-soon developments are intentionally noindexed
];

function allowedNoindexInProd(rel: string): boolean {
  if (ALLOWED_NOINDEX_IN_PROD_EXACT.has(rel)) return true;
  return ALLOWED_NOINDEX_IN_PROD_PREFIX.some(p => rel.startsWith(p));
}

// ── helpers ───────────────────────────────────────────────────────────────────

function walk(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walk(full));
    } else if (entry.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

function rel(full: string): string {
  return full.slice(DIST.length) || '/index.html';
}

function hasNoindex(html: string): boolean {
  return /<meta\s[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)
      || /<meta\s[^>]*content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots["']/i.test(html);
}

// ── detect built mode from homepage ──────────────────────────────────────────

function detectBuiltMode(): 'staging' | 'production' {
  const homepage = join(DIST, 'index.html');
  try {
    const html = readFileSync(homepage, 'utf-8');
    return hasNoindex(html) ? 'staging' : 'production';
  } catch {
    // fallback: check netlify.toml
    try {
      const toml = readFileSync(join(process.cwd(), 'netlify.toml'), 'utf-8');
      const m = toml.match(/SITE_MODE\s*=\s*"?(\w+)"?/);
      if (m) return m[1] === 'production' ? 'production' : 'staging';
    } catch { /* ignore */ }
    return 'staging';
  }
}

// ── main ──────────────────────────────────────────────────────────────────────

const mode  = detectBuiltMode();
const files = walk(DIST);

const missing: string[] = [];   // staging: pages WITHOUT noindex
const unexpected: string[] = []; // production: pages WITH noindex (not allowed)

for (const file of files) {
  const r    = rel(file);
  const html = readFileSync(file, 'utf-8');
  const ni   = hasNoindex(html);

  if (mode === 'staging' && !ni) {
    missing.push(r);
  } else if (mode === 'production' && ni && !allowedNoindexInProd(r)) {
    unexpected.push(r);
  }
}

const total   = files.length;
const blocked = files.filter(f => hasNoindex(readFileSync(f, 'utf-8'))).length;
const indexed = total - blocked;

console.log(`\ncheck:noindex — built mode: ${mode.toUpperCase()}`);
console.log(`  ${blocked} page(s) with    noindex`);
console.log(`  ${indexed} page(s) without noindex`);

if (mode === 'staging') {
  if (missing.length === 0) {
    console.log(`\n✓  All ${total} page(s) correctly carry noindex.\n`);
    process.exit(0);
  } else {
    console.error(`\n✗  ${missing.length} page(s) are missing noindex in staging:\n`);
    for (const p of missing) console.error(`     ${p}`);
    console.error(`\n  Build with SITE_MODE=staging to produce a full staging build:\n`);
    console.error(`  SITE_MODE=staging npm run build && npm run check:noindex\n`);
    process.exit(1);
  }
} else {
  if (unexpected.length === 0) {
    console.log(`\n✓  No unexpected noindex in production build.\n`);
  } else {
    console.warn(`\n⚠  ${unexpected.length} page(s) carry noindex in production (verify intent):\n`);
    for (const p of unexpected) console.warn(`     ${p}`);
    console.warn('');
  }
  process.exit(0);
}
