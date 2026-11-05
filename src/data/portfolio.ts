// All site content lives here. Components only render what this file says.
// Rule: no metric appears anywhere unless it is in this file, and every
// number here is measured on the owner's own fictional test sets.

export type Link = { label: string; href: string }

export type EvalResult = {
  id: string
  system: string
  metric: string
  /** Names of the two runs being compared, e.g. "Baseline" / "After fixes". */
  runs: { before: string; after: string }
  total: number
  before: number
  after: number
  /** Whether higher counts are better (passes) or worse (violations). */
  kind: 'passes' | 'violations'
  conditions: string
}

export type Project = {
  id: string
  name: string
  subtitle: string
  year: number
  repo: string
  points: string[]
  stack: string[]
  note?: string
}

export type SkillGroup = { group: string; items: string[] }

export type Achievement = { kind: string; text: string }

export const profile = {
  name: 'Anubhav Mishra',
  programme: 'BTech Computer Science',
  batch: 'Batch 2027',
  pitch: 'I build LLM systems and measure whether they actually work.',
  email: 'mishra.anubhav108@gmail.com',
  github: 'https://github.com/anubhav-m',
  linkedin: 'https://www.linkedin.com/in/anubhav--m/',
  resume: '/resume.pdf',
  photo: {
    src: '/anubhav-800.webp',
    srcSet: '/anubhav-480.webp 480w, /anubhav-800.webp 800w',
    fallback: '/anubhav-800.jpg',
    width: 800,
    height: 960,
    alt: 'Portrait of Anubhav Mishra in a dark blazer and white shirt',
  },
} as const

export const evalCaveat =
  'Measured on my own fictional test sets. Not real-world performance.'

export const evalResults: EvalResult[] = [
  {
    id: 'collections-pass',
    system: 'Collections AI Agent',
    metric: 'Scenarios passed',
    runs: { before: 'Baseline', after: 'After fixes' },
    total: 38,
    before: 37,
    after: 38,
    kind: 'passes',
    conditions:
      '38-scenario suite: prompt injection, wrong-borrower access, invented policy.',
  },
  {
    id: 'collections-unauth',
    system: 'Collections AI Agent',
    metric: 'Unauthorized actions',
    runs: { before: 'Baseline', after: 'After fixes' },
    total: 38,
    before: 0,
    after: 0,
    kind: 'violations',
    conditions: 'Same 38-scenario suite. Zero in both runs.',
  },
  {
    id: 'logisketch-render',
    system: 'LogiSketch',
    metric: 'Kroki render success',
    runs: { before: 'RAG off', after: 'RAG on' },
    total: 45,
    before: 40,
    after: 44,
    kind: 'passes',
    conditions: 'Fixed set of 45 prompts across 15 diagram engines.',
  },
]

export const projects: Project[] = [
  {
    id: 'collections',
    name: 'Collections AI Agent',
    subtitle: 'Simulated Loan Collections System',
    year: 2026,
    repo: 'https://github.com/anubhav-m/collection-agent',
    note: 'Simulation using fictional data. Not deployed or production software.',
    points: [
      'LLM collections agent using Gemini function calling, FastAPI, and MongoDB on fictional data. Verification, lender plan rules, and human handoff are enforced in server code, not prompts.',
      '38-scenario evaluation suite covering prompt injection, wrong-borrower access, and invented policy. Passes went from 37/38 to 38/38, with 0 unauthorized actions in both runs.',
      'RAG for policy answers using local ONNX embeddings and NumPy vector search, with lender filtering, a score threshold, and source citations.',
      'Regex and LLM promise extraction benchmarked on 24 held-out fictional transcripts: date F1 of 96.8% and 100%, and 97% F1 for both on promise and amount detection.',
      'Nightly bash and PowerShell pipeline that extracts promises, loads SQLite, and runs SQL reports using CTEs and window functions.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'Gemini',
      'MongoDB',
      'SQLite',
      'fastembed',
      'NumPy',
      'React',
      'TypeScript',
      'pytest',
    ],
  },
  {
    id: 'logisketch',
    name: 'LogiSketch',
    subtitle: 'AI-powered Diagram Generator',
    year: 2025,
    repo: 'https://github.com/anubhav-m/logisketch-server',
    points: [
      'Diagram generation backend supporting 15 engines, using Express.js, Gemini, and Kroki.',
      'RAG over engine-specific syntax notes raised Kroki render success from 88.9% to 97.8% (40/45 to 44/45) on a fixed test set.',
      'Evaluation pipeline for 45 prompts across 15 engines, scoring render success, required-element coverage, latency, and token usage with code.',
      'JWT authentication, request validation, Arcjet rate limiting, and centralized error handling.',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Gemini', 'Kroki API'],
  },
  {
    id: 'nodenotion',
    name: 'NodeNotion',
    subtitle: 'Full Stack Blogging Platform',
    year: 2025,
    repo: 'https://github.com/anubhav-m/node-notion',
    points: [
      'Full-stack blogging platform with markdown publishing, an admin dashboard, and content moderation.',
      'Role-based access using JWT authentication, bcryptjs hashing, and Firebase OAuth.',
    ],
    stack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Redux Toolkit',
      'Firebase',
      'Supabase',
    ],
  },
]

export const skills: SkillGroup[] = [
  { group: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'C++'] },
  {
    group: 'AI / LLM',
    items: [
      'LLM Integration',
      'Function Calling',
      'RAG',
      'Embeddings',
      'Prompt Engineering',
      'LLM Evaluation',
      'Entity Extraction',
    ],
  },
  {
    group: 'Frontend',
    items: ['HTML5', 'CSS3', 'React.js', 'Redux Toolkit', 'Tailwind CSS'],
  },
  { group: 'Backend', items: ['FastAPI', 'Node.js', 'Express.js'] },
  { group: 'Database', items: ['MongoDB', 'MySQL'] },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'pytest', 'Postman', 'VS Code', 'Firebase', 'Supabase', 'Mongoose'],
  },
]

export const achievements: Achievement[] = [
  {
    kind: 'Publication',
    text: '“A Multi-Factor Analysis of Gaming Habits and Their Impact on Mental Health”, published on IEEE Xplore and presented at IEEE DELCON 2025.',
  },
  {
    kind: 'Hackathon',
    text: 'Team Rank 123 among 19,000+ participants in Round 1 of Odoo Hackathon 2025.',
  },
  {
    kind: 'Hackathon',
    text: 'Top 50 of 150+ teams in Yugantar Hackathon with “DeepSeak”, an AI-based eDNA analysis pipeline.',
  },
]

export const nav: Link[] = [
  { label: 'Results', href: '#results' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publication', href: '#publication' },
  { label: 'Contact', href: '#contact' },
]
