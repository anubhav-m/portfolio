import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  /** Record metadata printed in the margin column on wide screens. */
  meta?: string
  /** Control set on the heading's row on wide screens (e.g. the run switch). */
  aside?: ReactNode
  /** Tighter top spacing, for the section that must reach the first viewport. */
  compact?: boolean
  children: ReactNode
}

export function Section({ id, title, meta, aside, compact = false, children }: SectionProps) {
  const headingId = `${id}-title`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`grid border-t-2 border-ink pt-6 md:pt-8 lg:grid-cols-[8.5rem_1fr] lg:gap-x-10 ${
        compact ? 'mt-16 md:mt-12' : 'mt-20 md:mt-28'
      }`}
    >
      <p className="hidden font-mono text-xs leading-relaxed text-muted lg:block lg:pt-2">{meta}</p>
      <div className="min-w-0">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2
            id={headingId}
            className="text-[2rem] leading-none font-bold tracking-[-0.01em] [font-stretch:112%] md:text-[2.5rem]"
          >
            {title}
          </h2>
          {aside}
        </div>
        <div className={compact ? 'mt-5' : 'mt-8 md:mt-10'}>{children}</div>
      </div>
    </section>
  )
}
