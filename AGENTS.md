# AGENTS.md — The Agency Roatán · Astro Site

Authoritative reference for AI agents on the `TheAgencyRoatan` branch.
Read this before writing any code, content, or schema.

---

## Branch context

This is a **full Astro 5 rebuild**. The previous Next.js site lives on `main`.

**NEVER `git merge main` into this branch.** Doing so restores thousands of
deleted Next.js files and breaks the build. Content is ported by hand;
configs, packages, and pages are always written fresh on this branch.

Always pull before pushing:

```
git pull origin TheAgencyRoatan --rebase
git push -u origin TheAgencyRoatan
```

The user uploads assets directly on GitHub between sessions, creating remote
commits. Rebase avoids diverged histories.

---

## Design system

### Color tokens — `src/styles/tokens.css`

| Token | Hex | Use |
|-------|-----|-----|
| `--agency-red` | `#ED2127` | Accent only — CTAs, active nav, badges, highlights |
| `--iron` | `#000000` | Primary text, dark sections, filled buttons |
| `--canvas` | `#FFFFFF` | Main background |
| `--plaster` | `#F7F8F6` | Alt section bg, cards, inputs |

Iron at opacity: `--iron-80/60/40/20/10` → `rgba(0,0,0,.80/.60/.40/.20/.10)`

**No new colors, no tints, no gradients** beyond these four and their opacity variants.

### Typography

| Token | Family | Use |
|-------|--------|-----|
| `--font-sleek` | Barlow Condensed | ALL CAPS headings, eyebrows, nav labels, badges |
| `--font-chic` | Noto Serif | Long-form section headings, pull quotes |
| `--font-text` | Roboto | Body copy, form labels, small UI text |

Tracking: `--tracking-sleek: 0.075em` for sleek ALL CAPS · `--tracking-chic: 0em` for chic serif.

No Tailwind. All layout uses CSS custom properties from `tokens.css`.

### Spacing scale

`--space-1` (4px) through `--space-40` (160px). Note: **`--space-7` does not exist** —
the scale jumps from `--space-6` (24px) to `--space-8` (32px).

---

## SEO / AEO / GEO requirements

### Every page must have

1. **Canonical** — `Base.astro` sets `Astro.url.href` by default; override with `canonicalUrl` prop when needed.
2. **OG tags** — `og:title`, `og:description`, `og:url`, `og:image` — emitted automatically in production (suppressed in staging).
3. **JSON-LD schema** — pass a `schema` prop to `Base.astro`. Minimum: `WebPage`. See the schema type table below.
4. **40–60 word answer-first opening** — the first paragraph under the H1 must directly state the core fact or answer, as if replying to a voice query or AI search.

### Title format

```
[Topic] – [Geography or Qualifier] | The Agency Roatán
```

- Max 60 characters total
- "Roatán" must appear in every `<title>`

### Meta description

- 150–160 characters
- Lead with the key fact or number
- End with an action phrase ("Here's how it works", "See the breakdown", "Join the priority list")

### Heading hierarchy

One `<h1>` per page, in the hero. Section headings use `<h2>`. Sub-sections use `<h3>`. Never skip levels.

### Images

- **Format**: AVIF or WebP only. Max **300 KB** each.
- Always include `width` and `height` attributes (prevents layout shift).
- Meaningful `alt` text on every content image. Decorative images: `alt=""`.

---

## Compliance rules

### Franchise disclaimer (required in footer)

`src/components/layout/Footer.astro` must always contain:

> Independently owned and operated franchisee of The Agency.

Do not remove, shorten, or reword this line. The full legal disclaimer from
The Agency brand manual goes here once received.

### Ranking and superlative claims

Any claim using "the #1", "the best", "most popular", "highest-rated",
"fastest-growing", or similar must include **all four**:

- Category (e.g. "beachfront condo sales")
- Geographic scope (e.g. "West Bay, Roatán")
- Timeframe (e.g. "Q1–Q3 2026")
- Source (e.g. "Roatán MLS data")

If a source cannot be cited, rephrase as a factual description:
"one of the most established agencies on the island", "among Roatán's
most active brokers in pre-construction sales."

### No market claims without source

Any statistic — yield, price per m², appreciation rate, average DOM —
must trace to a named source: Tomas's own closing records, ZOLITUR filings,
a named publication, or the Master Fact Sheet. Do not invent or estimate
without labeling as "modeled."

### No placeholders in shipped content

Never leave `TODO:`, `[placeholder]`, `TBD`, `Lorem ipsum`, `TODO_*`, or
empty `href="#"` in any file that ships to `dist/`. Fill in the real value
or remove the field entirely.

---

## Site routes

Current pages as of 2026-09:

| URL | Source file | JSON-LD type |
|-----|------------|--------------|
| `/` | `src/pages/index.astro` | `WebPage` + `RealEstateAgent` |
| `/new-developments/` | `src/pages/new-developments/index.astro` | `CollectionPage` |
| `/new-developments/[slug]/` | `src/layouts/Development.astro` | `ApartmentComplex` |
| `/guides/` | `src/pages/guides/index.astro` | `CollectionPage` |
| `/guides/roatan-capital-gains-tax-zolitur/` | `src/pages/guides/roatan-capital-gains-tax-zolitur/index.astro` | `Article` |
| `/buy/closing-costs-roatan/` | `src/pages/buy/closing-costs-roatan/index.astro` | `WebPage` + `HowTo` |
| `/contact/` | `src/pages/contact/index.astro` | `ContactPage` |
| `/thank-you/` | `src/pages/thank-you/index.astro` | `WebPage` |
| `/404` | `src/pages/404.astro` | — |

### Footer-linked routes not yet built

These appear in `Footer.astro` but have no page yet. Do not create them
until you have real content to fill them. Until then, do not link to them
from navigation or internal copy.

`/properties/`, `/neighborhoods/`, `/market-reports/`, `/living-in-roatan/`,
`/journal/`, `/about/`, `/sell/`, `/developers/`, `/reviews/`, `/faq/`,
`/buy/buying-property-in-roatan/`, `/buy/can-americans-buy-property-in-roatan/`,
`/buy/buying-pre-construction-in-roatan/`, `/buy/financing-roatan-property/`,
`/buy/residency-honduras/`

---

## Content collections — `src/content/`

Powered by Astro 5 `glob` loader. All collections are defined in `src/content/config.ts`.

| Collection | Base path | Entry files |
|------------|-----------|-------------|
| `developments` | `src/content/developments/` | `*.{md,mdx}` |
| `neighborhoods` | `src/content/neighborhoods/` | `*.{md,mdx}` |
| `guides` | `src/content/guides/` | `*.{md,mdx}` |
| `market-reports` | `src/content/market-reports/` | `*.{md,mdx}` |
| `videos` | `src/content/videos/` | `*.{md,mdx}` |
| `testimonials` | `src/content/testimonials/` | `*.{json,yaml}` |
| `faqs` | `src/content/faqs/` | `*.{json,yaml}` |

In Astro 5, render MDX with:
```ts
import { render } from 'astro:content';
const { Content } = await render(entry);
```
Do **not** use `entry.render()` — that was removed in Astro 5.

---

## Staging vs. production

`SITE_MODE=staging` is set in `netlify.toml` (and should be overridden in
Netlify's production environment variables to `production` before launch).

When `SITE_MODE=staging`:
- Every page gets `<meta name="robots" content="noindex, nofollow">`
- All OG tags are suppressed
- The sitemap is still generated (harmless; robots.txt blocks it if needed)

Verify with:

```
npm run build && npm run check:noindex
```

In staging, `check:noindex` expects **every** HTML page to carry noindex.
In production, it expects **no** page to carry it (unless `noindex: true`
was explicitly passed to `Base.astro`).

---

## Build and validation checklist

Run before every commit:

```bash
npm run build            # must complete 0 errors
npm run validate:schema  # JSON-LD present and valid on all built pages
npm run check:noindex    # staging = all noindex; production = none unexpected
npm run check:orphans    # no page in dist/ unreachable from any other page
```

The `[WARN] [router] No API Route handler exists for the method "GET" for the
route "/api/lead"` warning during build is expected and harmless.

---

## React islands

Interactive components (calculator, map, forms) live in `src/components/`
as `.tsx` files and are mounted with `client:load` or `client:visible` in
Astro pages. They use inline styles referencing the same brand constants
(hardcoded hex, not CSS vars, since CSS vars are not available in React
component scope without a context provider).

The closing cost calculator is at `src/components/calculator/ClosingCalculator.tsx`.
It has no external dependencies beyond React — lucide-react was removed and
replaced with inline SVGs.
