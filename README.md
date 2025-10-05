# Firecast Front Door (Astro + Netlify + Sanity)

Marketing site (landing, funnels, blog) for Firecast Finance.

## Commands
- `npm i` — install
- `npm run dev` — local dev on http://localhost:4321
- `npm run build` — build to `dist/`

## Environment
Copy `.env.example` to `.env` and fill values from https://manage.sanity.io/ :
- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_VERSION`
- Optional: `SANITY_READ_TOKEN` (only if you want to preview drafts)

## Structure
- `src/pages/` — pages (landing, funnels, blog)
- `src/layouts/` — shared layout
- `src/components/` — header/footer/CTA
- `src/lib/sanity.ts` — Sanity client & GROQ helpers

## Deploy
Connect this repo to Netlify → builds run `npm run build` and publish `dist/`.
