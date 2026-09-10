# Marci Metzger homepage redesign

A responsive single-page real estate website built with plain HTML, CSS, and JavaScript. No installation or build step is needed. Open `dist/index.html`, or serve `dist` with any static web server.

## Design

Editorial serif typography, charcoal and gold, generous spacing, original Pahrump photography, and clear buyer/seller paths. Mobile navigation, keyboard-accessible photo dialogs, reduced-motion support, labeled forms, and a skip link are included.

## Content and images

Source: https://marcimetzger.com/ (downloaded September 10, 2026).

All 21 distinct homepage images are downloaded directly from the original site's image host and stored in `dist/assets`. This includes the logo, original background and metadata photograph, portrait, three sales images, seven gallery photos, three service images, and four affiliation logos. The loading placeholder is intentionally excluded.

The redesign retains the original homepage's business information, services, sales highlights, phone, address, hours, social profiles, search fields, and gallery. Repeated headings created by the original responsive markup are consolidated. The original 2021 statistics remain dated. Original cookie and reCAPTCHA platform notices are not applied to this static site because it runs no analytics and has no reCAPTCHA integration.

## Integrations

The source website's MLS widget is tied to its domain and API key. This redesign validates the requested price range, summarizes preferences, links to the original live listings, and can add preferences to the contact message. It does not claim to return live or filtered MLS results.

Contact details can be prepared and copied before opening the original secure contact form. The static site does not submit messages or claim successful delivery. A production replacement would require an authorized form endpoint and MLS integration.

## Hosting

The `dist` folder can be uploaded directly to any static web host. `.openai/hosting.json` connects this project to Sites. No secrets are included in the website.

## Validation

JavaScript syntax, local assets, fragment targets, document structure, and image integrity are checked before publication. Browser interaction and visual testing have not been performed.
