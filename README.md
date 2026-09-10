# Marci Metzger homepage redesign

A single-page real estate homepage built with **Vite, React, TypeScript, and CSS**. The original design and all 21 original images are retained.

## Run locally

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

```sh
npm run typecheck
npm run build
npm run smoke
npm run preview
```

Vite creates the deployable website in `dist/`. Author the website in `src/` and keep original images in `public/assets/`; generated output and dependencies are excluded from Git.

## Skills demonstrated

The implementation is aligned with the development skills listed in the supplied CV:

| Listed skill or experience | Demonstrated here |
| --- | --- |
| React | Reusable page components, stateful mobile navigation, gallery, dialogs, and forms |
| TypeScript | Strict type checking, typed component props, event handlers, refs, and photo data |
| JavaScript | Price validation, currency formatting, keyboard navigation, clipboard integration |
| Node.js | Vite development server, production build, and smoke checks |
| Git/GitHub | Version-controlled source with a reproducible npm lockfile |
| Front-end responsiveness and usability | Responsive CSS, semantic HTML, labeled fields, keyboard-accessible dialogs, reduced-motion support |
| Smoke/build verification | TypeScript checks, production compilation, React rendering and asset smoke checks |
| Technical documentation | Setup instructions, component structure, and integration limitations |

Vite is the requested build tool. No backend, database, or AI framework is needed for this single-page assignment. The CV itself is not included in the project or deployment.

## Source structure

- `src/App.tsx`: page composition and shared inquiry message state.
- `src/components/Sections.tsx`: original homepage content as React sections.
- `src/components/Header.tsx`: responsive navigation.
- `src/components/Gallery.tsx`: expandable gallery and photo navigation.
- `src/components/Dialog.tsx`: reusable accessible native modal.
- `src/components/PropertySearch.tsx`: search preferences, validation, and inquiry handoff.
- `src/components/Contact.tsx`: controlled contact fields and copy-to-contact workflow.
- `src/data/photos.ts`: typed gallery data.
- `src/styles.css`: responsive styles.
- `public/assets/`: 21 images downloaded directly from the original website.

## Content and integrations

Source: https://marcimetzger.com/ (downloaded September 10, 2026).

The homepage retains the business content, portrait, sales highlights, services, photo gallery, affiliation logos, social profiles, phone, address, and hours. The original 2021 statistics remain dated. Duplicated responsive headings are consolidated. The original platform's analytics and reCAPTCHA notices are not applied to this site because those integrations are not installed.

The original MLS widget uses a domain-specific integration. Search summarizes preferences, links to Marci's live listings, and can add preferences to an inquiry. It does not return live filtered MLS results.

The contact component prepares and copies a message before opening the original secure contact form. It does not submit messages or claim successful delivery. A production replacement would require authorized form and MLS integrations.

## Validation and hosting

Strict TypeScript checking, Vite production build, React render smoke checks, and original-image integrity checks pass. Browser interaction and visual testing have not been performed.

The project uses its existing Sites deployment. Access remains private pending explicit approval for public visibility. The `dist` folder is also compatible with static hosts.
