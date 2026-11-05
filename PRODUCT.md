# Product

<!-- impeccable:product-schema 1 -->

<!-- Init answered from the owner's written brief at the owner's instruction ("answer it yourself from this brief"). No live interview round was run. -->

## Platform

web

## Stack

Vite + React + TypeScript + Tailwind CSS, current stable versions, modern React. Frontend-only: no backend, login, or CMS. All content lives in `src/data/portfolio.ts`; small modular components. (Pinned by the owner's brief.)

## Users

Primary: a recruiter or engineer scanning the site for about 60 seconds, on a laptop or a phone, deciding whether Anubhav is worth an interview or a closer look at his repos. Secondary: an engineer who clicks through to GitHub to check whether the work is real.

## Product Purpose

The one-page personal portfolio of Anubhav Mishra (BTech Computer Science, Batch 2027). It shows that he builds LLM systems and measures whether they work. Success means the visitor leaves with that one idea, has seen the real evaluation numbers, and can reach GitHub, LinkedIn, email, or the resume in one click.

## Positioning

"I build LLM systems and measure whether they actually work." What sets him apart is the evaluation discipline: fixed test sets, before/after numbers, and safety rules enforced in server code rather than prompts. Plenty of student portfolios list LLM projects; few show their own measured pass rates, honestly framed.

## Operating Context

Read quickly in a browser tab opened from a resume, LinkedIn, or a job application. Visitors skim headings and numbers, open GitHub repos, and may download the resume PDF.

## Capabilities and Constraints

- Sections: Hero, Featured evaluation display (interactive), Projects (each with a GitHub link), Skills (grouped), Publication & achievements, Footer with contact.
- Links: GitHub https://github.com/anubhav-m, LinkedIn https://www.linkedin.com/in/anubhav--m/, mishra.anubhav108@gmail.com, and `/resume.pdf`. The resume link must not be broken if `public/resume.pdf` is missing: it falls back to an email request.
- Phone number is never shown.
- Owner-supplied portrait: `my_photo.jpeg`, served as `public/anubhav-*.webp/jpg`.
- Light and dark themes are both required (owner request), following the OS setting by default, with a manual toggle.
- The GATE line was not supplied and is omitted. Live at https://anubhav-mishra-dev.vercel.app/ (Vercel, deploys from `main`); canonical and OG URLs use it.
- Fully responsive down to 320px, with reduced-motion support, semantic HTML, keyboard access, visible focus, good contrast, SEO metadata, and a favicon.

## Brand Commitments

- Feel: precise, confident, engineering-led, like a strong engineer's personal site. Restraint and typography borrowed from well-made developer portfolios, without copying any specific site.
- Banned by the owner: generic AI-template looks, purple gradients, glassmorphism, skill-percentage bars, floating blobs, heavy animation.
- Required by the owner: a distinctive type pairing, one accent color, strong spacing.
- Never use another company's name or branding.

## Evidence on Hand

All numbers are measured on the owner's own fictional test sets, not real-world performance, and must be labelled that way.
- Collections AI Agent (2026), repo https://github.com/anubhav-m/collection-agent: 38-scenario eval suite, baseline 37/38 → 38/38 after fixes, 0 unauthorized actions in both runs. Promise extraction on 24 held-out fictional transcripts: date F1 96.8% (regex) and 100% (LLM); 97% F1 for both on promise and amount detection. Must carry the label "Simulation using fictional data. Not deployed or production software."
- LogiSketch (2025), repo https://github.com/anubhav-m/logisketch-server: Kroki render success 40/45 (88.9%) with RAG off, 44/45 (97.8%) with RAG on; 45 prompts across 15 engines.
- NodeNotion (2025), repo https://github.com/anubhav-m/node-notion: no metrics.
- Publication: "A Multi-Factor Analysis of Gaming Habits and Their Impact on Mental Health", IEEE Xplore, presented at IEEE DELCON 2025.
- Odoo Hackathon 2025 Round 1: Team Rank 123 of 19,000+ participants. Yugantar Hackathon: Top 50 of 150+ teams with "DeepSeak", an AI-based eDNA analysis pipeline.
- Absent, never to be fabricated: employers, users, customers, testimonials, deployments, production claims, and any metric not listed above. The words "production", "deployed", "customers", and "users" are never used about these projects.

## Product Principles

1. Show the measurement, not the adjective. Numbers come with their denominators and their test-set caveat.
2. Honesty is the brand: label simulations as simulations, and never round up.
3. Sixty seconds is the budget. The pitch, the proof, and the links have to land in the first viewport and the first scroll.
4. Restraint over decoration. Every element earns its place the way a line of code does.

## Accessibility & Inclusion

WCAG AA contrast, full keyboard operation with visible focus states, semantic landmarks, `prefers-reduced-motion` respected, and usable at 320px width.
