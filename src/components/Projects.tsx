import { projects, type Project } from '../data/portfolio'
import { Icon } from './Icon'
import { Section } from './Section'

function repoPath(url: string) {
  return url.replace('https://github.com/', '')
}

function ProjectRecord({ project }: { project: Project }) {
  const titleId = `project-${project.id}`
  return (
    <article
      aria-labelledby={titleId}
      className="grid gap-x-12 gap-y-6 border-b border-rule py-10 first:pt-0 last:border-b-0 md:grid-cols-[minmax(14rem,19rem)_1fr]"
    >
      <header className="min-w-0">
        <h3
          id={titleId}
          className="text-[1.75rem] leading-[1.05] font-bold tracking-[-0.01em] [font-stretch:110%]"
        >
          {project.name}
        </h3>
        <p className="mt-2 text-base text-muted">
          {project.subtitle}
          <span className="whitespace-nowrap">
            {' · '}
            <span className="font-mono text-sm">{project.year}</span>
          </span>
        </p>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener"
          className="mt-5 inline-flex max-w-full items-center gap-2 border border-ink px-3 py-2 font-mono text-[0.8125rem] no-underline transition-colors hover:bg-ink hover:text-on-ink"
        >
          <Icon name="code" className="size-4 shrink-0" />
          <span className="truncate">{repoPath(project.repo)}</span>
          <Icon name="arrow-up-right" className="size-3.5 shrink-0" />
          <span className="sr-only">GitHub repository (opens in a new tab)</span>
        </a>
        {project.note && (
          <p className="mt-5 max-w-[30ch] border-2 border-seal px-3 py-2 font-mono text-xs leading-relaxed font-medium text-seal">
            {project.note}
          </p>
        )}
      </header>

      <div className="min-w-0">
        <ul className="max-w-[70ch] space-y-3">
          {project.points.map((point) => (
            <li key={point} className="grid grid-cols-[0.875rem_1fr] gap-x-3 text-base leading-relaxed">
              <span aria-hidden="true" className="mt-[0.6em] size-1.5 bg-ink" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 border-t border-hair pt-4 font-mono text-[0.8125rem] text-muted">
          <span className="text-ink">Stack</span>
          {project.stack.map((s, i) => (
            <span key={s}>
              {s}
              {i < project.stack.length - 1 && <span aria-hidden="true"> ·</span>}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Projects" meta={`${projects.length} records · 2025–2026`}>
      {projects.map((p) => (
        <ProjectRecord key={p.id} project={p} />
      ))}
    </Section>
  )
}
