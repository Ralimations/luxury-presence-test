# Marci Metzger Homepage

A responsive, single-page real estate website built with React, TypeScript, Vite, and CSS.

## Getting started

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

## Build and checks

```sh
npm run typecheck
npm run build
npm run smoke
npm run preview
```

The production build is written to `dist/`. Upload that folder to a static web host. Edit source files in `src/`; images are stored in `public/assets/`.

## Project structure

- `src/App.tsx` — page layout and shared inquiry state.
- `src/components/Sections.tsx` — homepage content sections.
- `src/components/Header.tsx` — responsive navigation.
- `src/components/Gallery.tsx` — photo gallery and navigation.
- `src/components/Dialog.tsx` — reusable native modal.
- `src/components/PropertySearch.tsx` — property preferences and price validation.
- `src/components/Contact.tsx` — contact fields and message preparation.
- `src/data/photos.ts` — gallery data.
- `src/styles.css` — responsive styles.
- `public/assets/` — website images.
- `scripts/smoke.mjs` — rendering, link, and asset checks.

## Features

- Responsive layouts and mobile navigation.
- Seven-photo gallery with keyboard navigation.
- Property preferences with minimum/maximum price validation.
- Contact message preparation and clipboard support.
- Accessible field labels, modal focus handling, and reduced-motion support.

## Content and integrations

Content and 21 images are sourced from https://marcimetzger.com/ for this homepage redesign assignment. Sales figures are labeled with their original reporting year.

Property search summarizes preferences and links to the existing live listings. Live MLS filtering requires an authorized integration.

The contact form prepares a message for copying into the existing secure contact form. It does not send messages directly. Direct delivery requires an authorized form endpoint.

## Validation

TypeScript checks, production compilation, React rendering, internal anchors, and asset references are covered by the commands above. Browser interaction and visual testing have not been performed.
