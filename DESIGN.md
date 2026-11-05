---
name: Anubhav Mishra · LLM systems, measured
description: A one-page portfolio printed as a certificate of measurement; ink rules on cool paper, one flat seal green.
colors:
  paper: "#f5f6f3"
  ink: "#11161d"
  muted: "#525a63"
  rule: "#b8beb8"
  hair: "#dcdfda"
  seal: "#0a7a4f"
  on-seal: "#ffffff"
  on-ink: "#f5f6f3"
  paper-dark: "#0e1215"
  ink-dark: "#e8ebe7"
  muted-dark: "#9ba4a1"
  rule-dark: "#424a4e"
  hair-dark: "#242b2f"
  seal-dark: "#3fbf86"
  on-seal-dark: "#06110c"
  on-ink-dark: "#0e1215"
typography:
  display:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 10.5vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 116"
  statement:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 4.2vw, 2.375rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 94"
  headline:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 110"
  document-title:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.2em"
    fontVariation: "'wdth' 125"
  body:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "'ss01'"
  data:
    fontFamily: "Red Hat Mono Variable, ui-monospace, SFMono-Regular, monospace"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1
    fontFeature: "'tnum', 'zero'"
  label:
    fontFamily: "Red Hat Mono Variable, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.25rem
    letterSpacing: "0.08em"
    fontFeature: "'tnum', 'zero'"
rounded:
  none: "0px"
spacing:
  cell-gap: "3px"
  margin-column: "8.5rem"
  column-gap: "2.5rem"
  label-column: "9.5rem"
  section-gap: "7rem"
  section-gap-sm: "5rem"
  page-x-lg: "3.5rem"
  page-x-sm: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.seal}"
    textColor: "{colors.on-seal}"
  button-ruled:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  button-ruled-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
  link-cell-hover:
    backgroundColor: "{colors.hair}"
  run-switch-option:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 20px"
  run-switch-option-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
  result-cell-pass:
    backgroundColor: "{colors.seal}"
    rounded: "{rounded.none}"
    height: "28px"
  result-cell-fail:
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    height: "28px"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "36px"
---

# Design System: Anubhav Mishra · LLM systems, measured

## Overview

**Creative North Star: "The Certificate of Measurement"**

The page is a calibration certificate. Every claim is a field on a ruled form, every number states the conditions it was measured under, and the evidence is a strip of square pass/fail cells printed in one flat green. The sheet is cool paper with near-black ink rules; the only colour that is not ink is the seal.

Density is that of a test report: a fixed margin column carries record metadata in small mono type, a label column names each field, and the value column holds the content. Heavy, expanded Archivo carries the fields that must be read from across a room (the subject's name, section headings); Red Hat Mono carries the data. Dark mode is not a different design, it is the same certificate laid on a lightbox: ink ground, paper-white type, seal green lifted for luminance.

Nothing floats. There are no shadows, no radii on rectangles, no gradients, no tints. Depth and grouping come from rule weight alone (2px ink between sections, 1px ink around fields, hairlines between rows). The one curved object is the seal itself, a rotated circular stamp, which is why it reads as a stamp.

**Key Characteristics:**
- Ruled field grid: margin column | label column | value, collapsing to stacked label-over-value on narrow screens.
- One accent, seal green, printed flat at full strength; never tinted, never a gradient.
- Square corners everywhere except the circular seal.
- Archivo on its width axis (94% to 125%) for fields and headings; Red Hat Mono, tabular and slashed-zero, for data, conditions, and record metadata.
- Signature motion: the Before/After run switch re-prints every result cell, staggered, and snaps instantly under reduced motion.

## Colors

A two-ink print: near-black on cool paper, with one registered seal green.

### Primary
- **Seal Green** (`seal`; `seal-dark` on the lightbox): the pass cells, the seal stamp, the focus ring, text selection, caret, the primary link's hover fill, recorded-condition notes, and hover text on footer links. Printed at full strength only.

### Neutral
- **Certificate Paper** (`paper` / `paper-dark`): the page ground and the seal's inner fill.
- **Ink** (`ink` / `ink-dark`): all body type, every structural rule, fail-cell outlines, the solid primary link and the active run option.
- **Faded Ink** (`muted` / `muted-dark`): field labels, margin metadata, conditions, secondary run readings, subtitles.
- **Ruling Grey** (`rule` / `rule-dark`): secondary rules (between project records, the margin column's edge, statement divider), link underline at rest, scrollbar thumb.
- **Hairline** (`hair` / `hair-dark`): row dividers inside lists and the hover fill of ruled link cells; also the photo frame's backing.
- **On-Ink / On-Seal**: type printed on a solid ink or seal fill.

### Named Rules
**The Flat Seal Rule.** Seal green appears at 100% or not at all: no alpha, no tints, no gradients, no green-on-green. Hover and pressed states move between ink, hair, and seal; they never lighten the seal.

**The Green Means Passed Rule.** Seal green is reserved for measured success, the stamp, and interaction feedback (focus, hover, selection). It is never decoration, never a section fill, never a heading colour.

## Typography

**Display Font:** Archivo Variable, with its `wdth` axis (fallback ui-sans-serif, system-ui)
**Body Font:** Archivo Variable (stylistic set `ss01` on)
**Label/Mono Font:** Red Hat Mono Variable (fallback ui-monospace, SFMono-Regular), always tabular numerals with slashed zero

**Character:** An expanded, heavy grotesque printed like the filled-in fields of a form, against a quiet monospace that reads as the instrument's own output.

### Hierarchy
- **Display** (800, clamp 2.75rem to 5.5rem, 0.9, width 116%): the subject's name only, broken across two lines.
- **Statement** (500, clamp 1.625rem to 2.375rem, 1.1, width 94%, max 27ch): the one claim under test, condensed so it holds as a sentence.
- **Headline** (700, 2rem stepping to 2.5rem at md, 1, width 112%): section headings and the contact heading.
- **Title** (700, 1.75rem, 1.05, width 110%): project record titles. Result-row system names drop to 1rem semibold.
- **Document Title** (700, 0.6875rem to 0.8125rem, tracking 0.12em to 0.2em, width 125%, uppercase): the certificate's name in the top rule; one per page.
- **Body** (400, 1rem, relaxed 1.625, max 68 to 70ch): bullets, achievements, skills, captions of results.
- **Data** (mono 600, 2rem, 1): result readings such as `38/38`, with the denominator in faded ink.
- **Label** (mono 400, 0.75rem, tracking 0.06em to 0.08em, uppercase): field labels in the label column and group names in definition lists. Margin metadata, conditions, and run readings use the same size in sentence case.

### Named Rules
**The Mono Is Data Rule.** Red Hat Mono is for numbers, conditions, repository paths, email addresses, field labels, and record metadata. Prose, headings, and buttons are Archivo.

**The Width Axis Rule.** Hierarchy is set by weight and `font-stretch` together: expand (110% to 125%) for headings and the document title, condense (94%) for the long statement. Do not reach for a second display face.

## Layout

A centred sheet, max 84rem, with side padding of 1rem, 2rem at sm, 3.5rem at lg. From lg, every section is a two-column grid: an 8.5rem margin column of muted mono record metadata, a 2.5rem gutter, then content. Below lg the margin column disappears; the metadata is supplementary, never the only carrier of meaning.

Inside the hero, fields are a definition list with a 9.5rem label column (md and up), and the portrait sits in a right column of 15rem (md) to 17.5rem (lg). Result rows are a three-part grid: name and conditions (13 to 17rem), the cell strip (fluid), the reading (8.5rem, right-aligned). Project records split into a header column (14 to 19rem) and points.

Sections open on a 2px ink rule with 5rem (mobile) to 7rem (md) between them; the Results section tightens to 4rem/3rem so its first strip reaches the first viewport. Rows inside lists breathe at 1rem to 1.5rem vertical padding, divided by hairlines. Breakpoints are Tailwind's defaults (640 / 768 / 1024) plus a 360px step for the mobile nav.

## Elevation & Depth

The system is completely flat. There is no `box-shadow` anywhere; depth is replaced by rule weight and fill inversion.

### Named Rules
**The Rule Weight Rule.** Structure is told by line weight: 2px ink opens the header and each section, 1px ink frames fields and starts lists, 1px ruling grey separates records, hairline separates rows. Pick the weight by structural level, not by taste.

**The Invert, Don't Lift Rule.** An active or primary element becomes a solid ink (or seal on hover) fill with paper type. Nothing rises, glows, or casts a shadow.

## Shapes

Every rectangle has square corners (0px): link cells, buttons, the run switch, the photo frame, result cells, and even the bullet marks (6px ink squares). Fields are drawn as shared-border ruled strips, so adjacent cells read as one printed form. The single exception is the seal, a circular stamp with a double ring, mono text on its circumference and a square-capped check, rotated about -9deg over the photo's corner. Icons are hand-drawn 24px SVG line icons at 1.6 stroke with square caps and mitred joins, matching the rule language.

## Components

### Buttons
Printed fields, not pills.
- **Shape:** square (0px), 1px ink borders shared between neighbours.
- **Primary (Resume):** solid ink fill, paper type, semibold 0.875rem, min height 44px, leading file icon. Hover fills seal green with on-seal type.
- **Ruled link cells (GitHub, LinkedIn):** transparent inside the same ruled strip; hover fills hairline. External links carry a 14px up-right arrow.
- **Ruled outline (repository link, theme toggle):** 1px ink border, mono path or icon; hover inverts to ink fill and paper type.
- **Focus:** 2px seal outline at 3px offset everywhere (2px offset inside the run switch).

### Run Switch (signature)
A two-option segmented control inside one 1px ink frame, built on radio inputs for arrow-key support. Each option stacks an Archivo semibold label over a mono hint ("Baseline · RAG off"). The active option is solid ink with paper type, its hint at 80% opacity; inactive options fill hairline on hover. Switching runs re-keys every cell strip so it re-prints.

### Result Cell Strip (signature)
One square-cornered cell per test case, 24px tall (28px at md), 3px gaps, columns equal to the case count (halved on mobile so cells stay legible). Passed = solid seal; failed = 2px ink outline on transparent. Passes are drawn first, and a mono legend under the list states that order is not scenario order. On run change each cell animates from 35% height and 40% opacity to full, bottom-anchored, 420ms `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 11ms per cell; under reduced motion there is no animation. A live region announces the new readings.

### Cards / Containers
There are no cards. Content sits in ruled lists: a 1px ink top rule, then rows divided by hairlines (results, skills, achievements, footer links) or by ruling grey (project records). No backgrounds, no padding boxes.

### Recorded-Condition Note
A caveat that qualifies a project: 2px seal border, seal mono text at 0.75rem, max 30ch. It is the only bordered text block and it always states the conditions a project was built or measured under (for example, simulated on fictional data).

### Navigation
The top rule carries the document title left, a row of 0.875rem Archivo links right (underline on hover), and the square theme toggle. On mobile the links drop to a second line beneath, spread edge to edge. Section anchors scroll smoothly only when motion is allowed.

### Portrait
The photograph sits in a 1px ink frame at 5:6, cropped from the top, with a ruled mono caption strip beneath ("Subject photograph") and the seal stamped across its top-right corner.

## Do's and Don'ts

### Do:
- **Do** set every claim as a field: a mono label in the label column, the value beside it, separated by rules.
- **Do** state the conditions next to every number, in mono, in faded ink.
- **Do** use seal green at full strength only, for passes, the stamp, focus, selection, and hover feedback.
- **Do** keep every rectangle square (0px) and every icon a square-capped 1.6-stroke SVG.
- **Do** choose rule weight by structural level: 2px ink for sections, 1px ink for fields and list tops, hairline for rows.
- **Do** gate every movement behind `prefers-reduced-motion: no-preference`; the cell re-print snaps when motion is reduced.
- **Do** keep dark mode as the same sheet on a lightbox: swap the token values, never the layout or the accent's role.

### Don't:
- **Don't** add shadows, gradients, glows, or tinted/transparent seal green.
- **Don't** round rectangles; the circular seal is the only curve.
- **Don't** set prose, headings, or buttons in Red Hat Mono, or bring in a second display face.
- **Don't** put small uppercase labels above headings; labels live in the label or margin column beside their value.
- **Don't** introduce a second accent colour or use green for anything that is not a pass, the stamp, or interaction feedback.
- **Don't** use Unicode glyphs as icons.
- **Don't** wrap content in cards; group with rules.
