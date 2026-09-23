/**
 * check-orphans.ts
 *
 * Finds pages in dist/ that are not reachable from any other built page.
 * An "orphan" has no inbound internal link from any other HTML file.
 *
 * Pages excluded from the orphan check (roots that don't need inbound links):
 *   - /index.html          (homepage — the universal root)
 *   - /404/index.html      (error page)
 *   - /sitemap-index.xml   (non-HTML)
 *   - /robots.txt          (non-HTML)
 *
 * Usage: npm run check:orphans
 * Exit code 1 if orphans are found.
 */

import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

const DIST = join(process.cwd(), 'dist');

const ROOT_EXEMPT = new Set([
  '/index.html',
  '/404/index.html',
  '/404.html',
  // Intentionally standalone — no nav path needed
  '/thank-you/index.html',   // POST-form redirect target, no inbound link required
  '/styleguide/index.html',  // Dev-only reference, not in nav
]);

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
  return full.slice(DIST.length);
}

/** Normalise a path to the canonical key used in our set (always /foo/index.html) */
function normalisePath(href: string): string | null {
  // Drop fragment and query
  const clean = href.split('#')[0].split('?')[0];
  if (!clean.startsWith('/')) return null;  // external or protocol-relative
  if (clean.endsWith('/')) return clean + 'index.html';
  if (clean.endsWith('.html')) return clean;
  // Astro trailingSlash: 'always' → /foo/ → /foo/index.html
  return clean + '/index.html';
}

function extractInternalLinks(html: string): string[] {
  const links: string[] = [];
  const re = /href=["']([^"']+)["']/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const norm = normalisePath(m[1]);
    if (norm) links.push(norm);
  }
  return links;
}

// ── build link graph ──────────────────────────────────────────────────────────

const htmlFiles = walk(DIST);
const allPages  = new Set(htmlFiles.map(rel));
const reachable = new Set<string>();

// The homepage always counts as reachable (it's the entry point)
reachable.add('/index.html');

for (const file of htmlFiles) {
  const html  = readFileSync(file, 'utf-8');
  const links = extractInternalLinks(html);
  for (const link of links) {
    if (allPages.has(link)) {
      reachable.add(link);
    }
  }
}

// ── find orphans ──────────────────────────────────────────────────────────────

const orphans: string[] = [];

for (const page of allPages) {
  if (ROOT_EXEMPT.has(page)) continue;
  if (!reachable.has(page)) {
    orphans.push(page);
  }
}

// ── report ────────────────────────────────────────────────────────────────────

console.log(`\ncheck:orphans — ${allPages.size} page(s) in dist/`);

if (orphans.length === 0) {
  console.log(`✓  No orphaned pages found.\n`);
  process.exit(0);
} else {
  console.error(`\n✗  ${orphans.length} orphaned page(s) — not reachable from any built page:\n`);
  for (const p of orphans) console.error(`     ${p}`);
  console.error('\n  Add an internal link to each, or verify the page is intentionally standalone.\n');
  process.exit(1);
}
