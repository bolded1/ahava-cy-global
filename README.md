# AHAVA Cyprus — brochure (ahava.com look)

Static Greek brochure for AHAVA in Cyprus. Same catalogue and URLs as the existing Cyprus site, with a new layout based on the AHAVA global identity: white canvas, `#282928` header and footer, pill buttons, Inter, and a single gold accent (`#C5A16D`).

This build is a catalogue only. There is no cart, checkout, account, or price.

The preview is not for indexing: every page sends `noindex, nofollow`, and `robots.txt` disallows all crawlers.

## Build

```bash
npm ci
npm run build
```

Output is `dist/`. Local preview:

```bash
npm run preview
```

## Deploy

`netlify.toml` sets the build command (`npm run build`), the publish directory (`dist`), a `noindex` header, and the legacy redirects from `src/data/redirects.json` (301).

## Content

Copy and product data live in `src/data/` (`products.json`, `categories.json`, `site.json`, `redirects.json`, `nav.js`). Images are in `public/img`. The AHAVA logo is used as supplied and is not recolored. The distributor mark uses `msj-logo-white.svg` on the dark footer and `msj-logo-dark.svg` on light pages.

Contact and pharmacy-partnership forms render with a notice and a disabled submit button. They do not post anywhere.
