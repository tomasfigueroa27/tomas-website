/**
 * validate-schema.ts
 *
 * Scans every HTML file in dist/ and checks that:
 *   1. At least one <script type="application/ld+json"> block is present
 *      (404.html and thank-you are exempt).
 *   2. Every JSON-LD block is valid JSON.
 *   3. Every block has @context and @type (or is a @graph wrapper).
 *
 * Usage: npm run validate:schema
 * Exit code 1 if any check fails.
 */

import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

const DIST = join(process.cwd(), 'dist');

// Pages that legitimately carry no schema
const SCHEMA_EXEMPT = new Set([
  '/404.html',
  '/404/index.html',
  '/thank-you/index.html',
  '/styleguide/index.html',
]);

// ── helpers ──────────────────────────────────────────────────────────────────

function walk(dir: string): string[] {
  const entries = readdirSync(dir);
  const files: string[] = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walk(full));
    } else if (entry.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

function relativePath(full: string): string {
  return full.slice(DIST.length);
}

function extractJsonLd(html: string): string[] {
  const blocks: string[] = [];
  const re = /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    blocks.push(m[1].trim());
  }
  return blocks;
}

// ── main ─────────────────────────────────────────────────────────────────────

const htmlFiles = walk(DIST);
let errors = 0;
let checked = 0;

for (const file of htmlFiles) {
  const rel = relativePath(file);
  const html = readFileSync(file, 'utf-8');
  const blocks = extractJsonLd(html);

  if (blocks.length === 0) {
    if (SCHEMA_EXEMPT.has(rel)) continue;
    console.error(`✗  MISSING SCHEMA   ${rel}`);
    errors++;
    continue;
  }

  for (const raw of blocks) {
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      console.error(`✗  INVALID JSON     ${rel}`);
      errors++;
      continue;
    }

    const obj = parsed as Record<string, unknown>;

    // @graph wrapper is valid without top-level @type
    if (obj['@graph']) {
      const graphs = Array.isArray(obj['@graph']) ? obj['@graph'] : [obj['@graph']];
      for (const node of graphs as Record<string, unknown>[]) {
        if (!node['@type']) {
          console.error(`✗  MISSING @type in @graph node   ${rel}`);
          errors++;
        }
      }
      checked++;
      continue;
    }

    if (!obj['@context']) {
      console.error(`✗  MISSING @context   ${rel}`);
      errors++;
    }
    if (!obj['@type']) {
      console.error(`✗  MISSING @type      ${rel}`);
      errors++;
    }

    checked++;
  }
}

// ── report ────────────────────────────────────────────────────────────────────

const total = htmlFiles.length;
const exempt = SCHEMA_EXEMPT.size;

if (errors === 0) {
  console.log(`✓  validate:schema — ${checked} schema block(s) valid across ${total - exempt} pages`);
  process.exit(0);
} else {
  console.error(`\n✗  validate:schema — ${errors} error(s) in ${total} pages`);
  process.exit(1);
}
