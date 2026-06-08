# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page **bilingual FR/EN** portfolio for Zangafigué Mathias TRAORE, intended for **Vercel**. It is **product-first**: a clean dark page that leads with projects as illustrated case studies, to land an internship by showing he *ships products*. `PORTFOLIO_BRIEF.md` is the source of truth for the owner's identity/skills/projects (in French) — read it for content/copy work.

A previous version was a 3D "scroll through space" experience. That was dropped as the main UX (misaligned with the product-builder message + a junior-portfolio cliché), **but the 3D code is preserved, unmounted**, in `components/3d/*` (plus `data/planets.js`, `hooks/useScrollOffset.js`) for a planned future "lab" page. Don't assume it is wired into the app.

## Commands

```bash
npm run dev      # Vite dev server (HMR)
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # ESLint over the repo
```

There is **no test setup** (no test runner, no test script) — don't assume one exists.

ESLint notes:
- `no-unused-vars` ignores identifiers matching `^[A-Z_]` (PascalCase / `UPPER_CASE`).
- `eslint-plugin-react`'s `react/jsx-uses-vars` is enabled **only** so JSX-only usage like `<motion.div>` counts `motion` as used (lowercase, so the ignore pattern doesn't cover it). The full `react` recommended set is intentionally **not** enabled.

## Architecture

A plain, scrollable single page — **no 3D, no canvas** in the live app.

- `App.jsx` renders `<Navbar>` (fixed top bar), `<SectionOverlay>`, `<Footer>`.
- `components/layout/SectionOverlay.jsx` stacks the six sections (Landing / About / Skills / Projects / Certifications / Contact) in normal document flow. Each section has an `id` used as a scroll anchor; `index.css` sets `section[id] { scroll-margin-top }` so anchored nav clears the fixed navbar.
- The background is a CSS radial gradient on `body` (`index.css`). The bundle is lean (~130 KB gzip) because **nothing live imports `components/3d`**, so three.js / r3f / drei are tree-shaken out.

### Navigation
`Navbar.jsx` uses `hooks/useScrollSection.js` (an `IntersectionObserver` over section IDs) for the active link, and `scrollIntoView` / `window.scrollTo` to navigate. Desktop: inline top links. Mobile (`hooks/useMediaQuery.js`, `useSyncExternalStore`): a burger toggles an `AnimatePresence` dropdown. `LanguageToggle.jsx` is rendered inside the navbar.

### Section list lives in several places — keep in sync
`SectionOverlay.jsx` (imports/order) · `Navbar.jsx` (`navIds`) · `hooks/useScrollSection.js` (`sections`) · `i18n/*.json` (`nav.*`).

### Projects (the centerpiece)
- `sections/Projects.jsx`: projects with `featured: true` render as large **case-study cards**; the rest as a compact grid.
- `ui/ProjectCard.jsx` takes a `variant`: `featured` (image + role badge + description + `outcome` bullet + stack + links) or `compact` (text card).
- `ui/ProjectShot.jsx` renders `public/projects/<slug>.png`; on missing/error it shows a styled placeholder (browser frame + initials + stack). **Drop real screenshots in `public/projects/` (named by each project's `slug`) to replace placeholders.**

## i18n (bilingual FR/EN — LIVE)

- `src/i18n/index.js` initializes `i18next` + `react-i18next` (imported once in `main.jsx`). Language resolves `localStorage('lang')` → browser → `fr` fallback, and keeps `document.documentElement.lang` in sync. `LanguageToggle.jsx` flips it.
- **UI chrome** (nav, titles, buttons, labels, footer) lives in `src/i18n/en.json` + `fr.json`, read with `t('...')`.
- **Rich content** (projects, certs, timeline, about bio, skill category names, some skill items) lives in `src/data/*.js` as bilingual `{ en, fr }` fields — value may be a **string, an array, or (skill items) a mix of plain strings and `{ en, fr }`**. Localize via `useLoc()` from `src/i18n/localize.js` (`pick()` passes plain strings through untouched). Proper nouns / tech names / links / colors stay plain.

## Conventions

- **Styling is inline `style={{}}` objects**, not Tailwind classes (Tailwind v4 is installed with `@theme` tokens in `src/index.css`, but components don't use `className`). Palette: bg `#0a0a1a`, accent `#00B4D8`; fonts Inter (sans) + JetBrains Mono (mono, for labels/section numbers).
- **Animation** is Framer Motion (`motion.*`, `AnimatePresence`, `whileInView`).
- **Content is data-driven**: sections map over default-exported arrays in `src/data/*.js` (`timeline.js` also exports `typeColors`; `projects.js` exports an unused `categories`). Edit content there.

## Scaffolded but not wired (don't assume these work)

- **Preserved 3D** (future "lab"): `components/3d/*`, `data/planets.js`, `hooks/useScrollOffset.js`.
- **Orphaned components**: `ui/SkillBar.jsx` and `ui/ScrollIndicator.jsx` (unused since the product-first redesign), plus `components/3d/SpaceShip.jsx`, `sections/Resume.jsx`, `sections/Stats.jsx`, `ui/PlanetCard.jsx`, `ui/CertifBadge.jsx`.
- **Routing**: `react-router-dom` is a dependency but unused (single page, no routes).

## Contact form

`sections/Contact.jsx` sends via EmailJS (`@emailjs/browser`); `SERVICE_ID` / `TEMPLATE_ID` / `PUBLIC_KEY` are inline constants (public keys are client-side by design). No `.env`.

## Deployment

`vercel.json` pins the Vite framework / build command / `dist` output. URL-root static assets live in `public/`: `cv-zangafigue.pdf` (hero CV button), `hero.png` (OG/Twitter share image), and `projects/<slug>.png` (project screenshots).
