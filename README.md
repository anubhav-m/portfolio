# Anubhav Mishra · Portfolio

A one-page, frontend-only portfolio built with Vite, React, TypeScript, and Tailwind CSS. The visual direction is "Certificate of Measurement", in light and dark themes.

## Resume (placeholder)

> **TODO:** put your resume at `public/resume.pdf`.
>
> Until that file exists, every resume link on the site turns into a "Resume on request" email link, so nothing is broken at launch. The check runs when the dev server starts and at build time, so restart `npm run dev` (or rebuild) after adding the file.

## Editing content

All text, links, and numbers live in [`src/data/portfolio.ts`](src/data/portfolio.ts). Components only render that file. Only add numbers you measured yourself, and keep the "own test sets" caveat.

The photo is served from `public/anubhav-480.webp`, `public/anubhav-800.webp`, and `public/anubhav-800.jpg`, all generated from `my_photo.jpeg`.

## Scripts

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # tsc -b
npm run lint       # oxlint
npm run build      # typecheck + production build into dist/
npm run check      # all three
```

## Design records

- `PRODUCT.md`: product context (audience, evidence, constraints)
- `DESIGN.md`: the visual system
- `.impeccable/`: design-tool working files
