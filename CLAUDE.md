# CLAUDE.md

## Project Overview

Personal website for Tomas Figueroa, a real estate agent in Roatan, Honduras. A marketing/portfolio site showcasing Caribbean real estate listings, neighborhoods, and new developments.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite
- **Routing:** React Router DOM 7 with `HashRouter` (`#/` URLs)
- **Styling:** Tailwind CSS 3 with CSS variables (HSL-based), class-based dark mode
- **UI Components:** shadcn/ui (New York style) + Radix UI primitives + Lucide icons
- **Forms:** React Hook Form + Zod validation
- **Charts:** Recharts
- **Carousel:** Embla Carousel
- **Toasts:** Sonner
- **Deployment:** Netlify (with Netlify Forms for newsletter)

## Common Commands

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # TypeScript check + Vite production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Project Structure

```
src/
├── components/ui/   # shadcn/ui components (do not edit manually — use shadcn CLI)
├── pages/           # Top-level route pages (About, NewDevelopments, etc.)
├── sections/        # Page sections composed inside pages (Hero, Header, Footer, etc.)
├── hooks/           # Custom React hooks
├── lib/utils.ts     # Shared utilities (cn() helper for Tailwind class merging)
├── App.tsx          # Router setup and route definitions
└── main.tsx         # App entry point
```

## Path Aliases

`@/` maps to `./src/` — use it for all internal imports:

```ts
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```

## Adding shadcn/ui Components

Use the CLI — do not copy/paste or hand-edit files under `src/components/ui/`:

```bash
npx shadcn@latest add <component-name>
```

## TypeScript

Strict mode is enabled. The build will fail on:
- Unused locals/parameters
- Implicit `any`
- Type errors

Run `npm run build` (not just `npm run dev`) to catch all TypeScript errors before committing.

## Routing

Routes are defined in `src/App.tsx` using `HashRouter`. Add new pages in `src/pages/` and register them there.

## Git Workflow

- Always work on the `dev` branch
- Never commit directly to `main`
- Changes to `main` only happen via pull request after review

## Netlify Forms

The newsletter form uses Netlify's form handling. The hidden HTML form in `index.html` must stay in sync with the React form in `src/sections/Newsletter.tsx`.
