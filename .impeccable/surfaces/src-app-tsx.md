---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: ["index.html"]
---

## Scope

One-page portfolio (`index.html` → `src/App.tsx`). Visitor mode: Experience. Audience: a recruiter or engineer scanning for 60 seconds on a laptop or phone. Action: reach GitHub, LinkedIn, email, or the resume; believe the eval numbers.

## Direction contract

THESIS: The page is a certificate of measurement: every claim states its conditions, and the evidence is a strip of real pass/fail cells. It refuses the category default of a dark hero headline over three metric cards.

OWN-WORLD: Cool certificate paper (#F5F6F3) with near-black ink (#11161D) and 1–2px ink rules, plus one seal-green accent (#0A7A4F) printed flat, with no tints or gradients. Archivo, set expanded and heavy, for fields; Red Hat Mono only for data, conditions, and record metadata. Field-label grid (label column | value), a fixed margin column, and square cells. Dark mode is the same certificate on a lightbox: ink ground (#0E1215), paper-white type, seal green lifted to #3FBF86.

STORY: Who he is (Subject), what he claims (Statement under test), and the proof: switching Before/After re-registers 38 and 45 cells. Then projects as test records, skills, publication, contact.

FIRST VIEWPORT: Top rule with the document title, nav, and theme switch. Left: the Subject field with the name at about 6rem expanded 800 weight, Programme, then the Statement under test at about 2.1rem, then the link row (Resume primary, GitHub, LinkedIn, email). Right: the photo in a 5:6 ID frame with a rotated green "Measured on own test sets" seal. Below the fold line: the Results heading and the first cell strip.

FORM: Calibration certificate / metrology test report, candidate 3 of 7 on the ordered list. seed:878b2b21a4288287. Signature interaction: a Before/After run switch re-prints every result strip cell by cell; reduced motion snaps instantly. Raises: test strip (darkroom), charged margin (ikebana), flat registered accent (woodblock), recorded conditions (raku), one hub per row (title card).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Constraints

No eyebrows above headings, no section numbers, no Unicode-glyph icons, and monospace only for data. No invented metrics. Resume link degrades to "on request" when `public/resume.pdf` is absent.
