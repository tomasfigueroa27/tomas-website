# MIGRATION-PARITY.md

**Branch:** `TheAgencyRoatan` (Astro 5 rebuild)
**Compared against:** `main` (live Next.js site) — URL inventory from `app/sitemap.ts` + data files
**Generated:** 2026-09-23 · **Last updated:** 2026-09-24

> **Read-only analysis — no code changes.** This document flags every URL that would 404 on
> launch day if the Astro branch went live as-is.

---

## Summary (as of 2026-09-24)

| Category | Count |
|----------|-------|
| Live URLs in sitemap | 27 |
| Live URLs not in sitemap (form redirect) | 1 |
| **Total live routes to account for** | **28** |
| ✅ Done on Astro branch | 26 |
| 🔴 Still 404 | 1 |
| ⚠️ Redirects still needed | 1 |

**1 live URL still 404 on this branch before launch.**

---

## Full parity table

Legend: ✅ Done · ⚠️ Redirect needed · 🔴 404 on launch · ➕ New on Astro (no live equivalent)

### Core pages

| Live URL | Astro branch | Status | Notes |
|----------|-------------|--------|-------|
| `/` | `/` | ✅ Done | — |
| `/about` | `/about/` | ✅ Done | Ported 2026-09-24 |
| `/properties` | `/properties/` | ✅ Done | Ported 2026-09-24 |
| `/neighborhoods` | `/neighborhoods/` | ✅ Done | Ported with 6 slug pages |
| `/new-developments` | `/new-developments/` | ✅ Done | — |
| `/roatan-market` | `/roatan-market/` | ✅ Done | Ported 2026-09-24 |
| `/where-to-buy-in-roatan` | `/where-to-buy-in-roatan/` | ✅ Done | Ported 2026-09-24 |
| `/us-buyers-guide-roatan` | `/us-buyers-guide-roatan/` | ✅ Done | Ported 2026-09-24 |
| `/faq` | `/faq/` | ✅ Done | Ported 2026-09-24 |
| `/guides` | `/guides/` | ✅ Done | — |
| `/calculator` | `/calculator/` | ✅ Done | Dedicated page added 2026-09-24; `/calculator → /buy/closing-costs-roatan/` redirect no longer needed |
| `/resources` | `/resources/` | ✅ Done | Ported 2026-09-24 |
| `/success` | `/thank-you/` | ⚠️ Redirect | Add Netlify redirect: `/success → /thank-you/ 301` |

### Neighborhood detail pages (6 live, all on Astro)

| Live URL | Astro branch | Status |
|----------|-------------|--------|
| `/neighborhoods/west-bay-beach` | `/neighborhoods/west-bay-beach/` | ✅ Done |
| `/neighborhoods/west-end` | `/neighborhoods/west-end/` | ✅ Done |
| `/neighborhoods/sandy-bay` | `/neighborhoods/sandy-bay/` | ✅ Done |
| `/neighborhoods/pristine-bay` | `/neighborhoods/pristine-bay/` | ✅ Done |
| `/neighborhoods/french-harbour` | `/neighborhoods/french-harbour/` | ✅ Done |
| `/neighborhoods/coxen-hole` | `/neighborhoods/coxen-hole/` | ✅ Done |

### Blog / article pages (8 live, all on Astro)

| Live URL | Astro branch | Status |
|----------|-------------|--------|
| `/blog` | `/blog/` | ✅ Done |
| `/blog/bay-islands-market-report-q2-2026` | `/blog/bay-islands-market-report-q2-2026/` | ✅ Done |
| `/blog/roatan-q1-2026-market-report` | `/blog/roatan-q1-2026-market-report/` | ✅ Done |
| `/blog/roatan-travel-guide-faqs` | `/blog/roatan-travel-guide-faqs/` | ✅ Done |
| `/blog/top-roatan-real-estate-agencies` | `/blog/top-roatan-real-estate-agencies/` | ✅ Done |
| `/blog/utila-market-spotlight-2026` | `/blog/utila-market-spotlight-2026/` | ✅ Done |
| `/blog/where-is-roatan` | `/blog/where-is-roatan/` | ✅ Done |
| `/blog/why-buyers-use-real-estate-agents-roatan` | `/blog/why-buyers-use-real-estate-agents-roatan/` | ✅ Done |

### Development detail pages

| Live URL | Astro branch | Status | Notes |
|----------|-------------|--------|-------|
| `/new-developments/the-palm-haus` | — | 🔴 404 | P0 — not yet ported; needs MDX entry in `src/content/developments/` |
| `/new-developments/ava-towers` | `/new-developments/ava-towers/` | ➕ New | No live equivalent |
| `/new-developments/sunset-vista-condos` | `/new-developments/sunset-vista-condos/` | ➕ New | No live equivalent |

### Pages new on Astro (no live equivalent — no 404 risk)

| Astro URL | Notes |
|-----------|-------|
| `/new-developments/ava-towers/` | New development |
| `/new-developments/sunset-vista-condos/` | New development |
| `/guides/roatan-capital-gains-tax-zolitur/` | New guide |
| `/buy/closing-costs-roatan/` | New; calculator now at `/calculator/` |
| `/contact/` | New standalone contact page |
| `/thank-you/` | Replaces `/success`; redirect pending |

---

## Remaining redirects needed before launch

```
/success   /thank-you/   301
```

> `trailingSlash: 'always'` + static output means Astro already generates redirect rules for
> bare paths → trailing-slash equivalents (e.g. `/guides` → `/guides/`). No manual rules needed
> for pages that exist on the Astro branch.

---

## Remaining action list

### P0 — Still outstanding
1. **`/new-developments/the-palm-haus`** — live development detail page; real leads land here. Port as MDX entry in `src/content/developments/the-palm-haus.mdx`.

### Housekeeping (non-parity, deferred)
- Set `/success → /thank-you/ 301` in `netlify.toml`
- Replace `TODO: Phone` (WhatsApp `50499999999`) with real number `+50488483226` in Footer
- Replace `TODO_TURNSTILE_SITE_KEY` with real Cloudflare Turnstile site key
- Set `SITE_MODE=production` in Netlify before launch
- Add favicon files to `public/`
- Update `Footer.astro` "since [TODO: year]" copy

---

## Coverage as of 2026-09-24

| Category | Live | Astro |
|----------|----- |-------|
| Core static pages | 11 | 12 (+1 new: /calculator) |
| Neighborhood pages | 7 | 7 |
| Blog posts | 8 | 9 (+1 new: /blog/index) |
| Development details | 1 | 3 (2 new; 1 live still missing) |
| Guides | 1 | 2 (+1 new) |
| Buy guides | 0 | 1 (new) |
| Utility | 2 | 2 |
| **Total** | **30** | **36** |
