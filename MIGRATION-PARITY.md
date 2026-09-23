# MIGRATION-PARITY.md

**Branch:** `TheAgencyRoatan` (Astro 5 rebuild)
**Compared against:** `main` (live Next.js site) — URL inventory from `app/sitemap.ts` + data files
**Generated:** 2026-09-23

> **Read-only analysis — no code changes.** This document flags every URL that would 404 on
> launch day if the Astro branch went live as-is.

---

## Summary

| Category | Count |
|----------|-------|
| Live URLs in sitemap | 27 |
| Live URLs not in sitemap (form redirect) | 1 |
| **Total live routes to account for** | **28** |
| Already on Astro branch (done) | 5 |
| Would 404 on launch day | 19 |
| Need a redirect rule | 4 |

**19 URLs would 404 on launch day without further porting.**

---

## Full parity table

Legend: ✅ Done · ⚠️ Redirect needed · 🔴 404 on launch · ➕ New on Astro (no live equivalent)

### Core pages

| Live URL | Astro branch | Status | Plan |
|----------|-------------|--------|------|
| `/` | `/` | ✅ Done | — |
| `/about` | — | 🔴 404 | Port: agent bio, credentials, The Agency brand story |
| `/properties` | — | 🔴 404 | Port: MLS search or listings grid — defer until listings data is ready |
| `/neighborhoods` | — | 🔴 404 | Port: index grid; 6 neighborhood detail pages also needed (see below) |
| `/new-developments` | `/new-developments/` | ✅ Done | Astro `trailingSlash: 'always'` redirects `/new-developments` → `/new-developments/` |
| `/roatan-market` | — | 🔴 404 | Port: market data hub; maps to future `/market-reports/` route in AGENTS.md |
| `/where-to-buy-in-roatan` | — | 🔴 404 | Port or redirect to `/neighborhoods/` once that page exists |
| `/us-buyers-guide-roatan` | — | 🔴 404 | Port as a guide under `/guides/` or a standalone buying guide |
| `/faq` | — | 🔴 404 | Port; content collection `faqs` already defined in `src/content/config.ts` |
| `/guides` | `/guides/` | ✅ Done | Trailing-slash redirect handles it |
| `/calculator` | `/buy/closing-costs-roatan/` | ⚠️ Redirect | Add Netlify redirect: `/calculator → /buy/closing-costs-roatan/ 301` |
| `/resources` | — | 🔴 404 | Assess: if thin/redundant → redirect to `/guides/`; otherwise port |
| `/success` | `/thank-you/` | ⚠️ Redirect | Add Netlify redirect: `/success → /thank-you/ 301` |

### Neighborhood detail pages (6 live, 0 on Astro)

| Live URL | Astro branch | Status | Plan |
|----------|-------------|--------|------|
| `/neighborhoods/west-bay-beach` | — | 🔴 404 | Port; content collection `neighborhoods` already defined |
| `/neighborhoods/west-end` | — | 🔴 404 | Port |
| `/neighborhoods/sandy-bay` | — | 🔴 404 | Port |
| `/neighborhoods/pristine-bay` | — | 🔴 404 | Port |
| `/neighborhoods/french-harbour` | — | 🔴 404 | Port |
| `/neighborhoods/coxen-hole` | — | 🔴 404 | Port |

### Blog / article pages (7 live, 0 on Astro)

| Live URL | Astro branch | Status | Plan |
|----------|-------------|--------|------|
| `/blog` | — | 🔴 404 | Decide route name first (`/blog/` vs `/journal/`); AGENTS.md footer links to `/journal/` |
| `/blog/bay-islands-market-report-q2-2026` | — | 🔴 404 | Port under chosen blog route |
| `/blog/roatan-q1-2026-market-report` | — | 🔴 404 | Port |
| `/blog/roatan-travel-guide-faqs` | — | 🔴 404 | Port |
| `/blog/top-roatan-real-estate-agencies` | — | 🔴 404 | Port |
| `/blog/utila-market-spotlight-2026` | — | 🔴 404 | Port |
| `/blog/where-is-roatan` | — | 🔴 404 | Port |
| `/blog/why-buyers-use-real-estate-agents-roatan` | — | 🔴 404 | Port |

### Development detail pages

| Live URL | Astro branch | Status | Plan |
|----------|-------------|--------|------|
| `/new-developments/the-palm-haus` | — | 🔴 404 | Port as MDX entry in `src/content/developments/`; two other developments (ava-towers, sunset-vista-condos) already on Astro but are **new** — no live equivalent |

### Pages new on Astro (no live equivalent — no 404 risk)

| Astro URL | Notes |
|-----------|-------|
| `/new-developments/ava-towers/` | New development; not on live site |
| `/new-developments/sunset-vista-condos/` | New development; not on live site |
| `/guides/roatan-capital-gains-tax-zolitur/` | New guide; not on live site |
| `/buy/closing-costs-roatan/` | Replaces `/calculator`; redirect planned |
| `/contact/` | New; live site had no standalone contact page in sitemap |
| `/thank-you/` | Replaces `/success`; redirect planned |

---

## Redirects needed before launch

These should go in `netlify.toml` `[[redirects]]` blocks (or a `public/_redirects` file):

```
/calculator              /buy/closing-costs-roatan/   301
/success                 /thank-you/                  301
/where-to-buy-in-roatan  /neighborhoods/              301  # tentative — port preferred
/resources               /guides/                     301  # tentative — assess content first
```

> `trailingSlash: 'always'` + static output means Astro already generates redirect rules for
> bare paths → trailing-slash equivalents (e.g. `/guides` → `/guides/`). No manual rules needed
> for pages that exist on the Astro branch.

---

## Prioritised action list

### P0 — Must have before launch (top SEO / traffic)
1. **`/neighborhoods/`** + all 6 detail pages — high search intent, internal link target for 3 live pages
2. **`/blog/`** + all 7 posts — existing Google-indexed URLs; 404s lose ranking immediately
3. **`/new-developments/the-palm-haus`** — live development detail page; real leads land here

### P1 — Port soon after (significant organic traffic)
4. **`/about`** — trust signal; linked from nav
5. **`/faq`** — rich snippet source; content collection already scaffolded
6. **`/roatan-market`** — market data page, decision-stage traffic
7. **`/us-buyers-guide-roatan`** — long-form; probably multiple backlinks

### P2 — Evaluate / decide
8. **`/where-to-buy-in-roatan`** — may merge into `/neighborhoods/` with a redirect
9. **`/resources`** — assess: if it was thin, redirect to `/guides/`; if substantive, port
10. **`/properties`** — defer until listing feed / MLS data is wired up

### Routing decision needed (before P0 blog work)
- **`/blog/` vs `/journal/`** — AGENTS.md footer links to `/journal/`, but 7 live Google-indexed
  URLs use `/blog/`. Options:
  - **Keep `/blog/`** and update footer links (zero SEO disruption)
  - **Use `/journal/`** and add permanent redirects from all `/blog/*` URLs (clean, costs one crawl cycle)
  - Recommendation: keep `/blog/` unless there's a brand reason for `/journal/`

---

## Coverage after all P0+P1 work is done

| Category | Live | Astro after P0+P1 |
|----------|----- |-------------------|
| Core static pages | 11 | 11 |
| Neighborhood pages | 7 | 7 |
| Blog posts | 8 | 8 |
| Development details | 1 | 4 (3 new added) |
| Guides | 1 | 2 (1 new added) |
| Buy guides | 0 | 1 (new) |
| Utility | 2 | 2 |
| **Total** | **30** | **35** |
