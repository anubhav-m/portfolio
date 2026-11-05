import { skills } from '../data/portfolio'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" title="Skills" meta={`${skills.length} groups`}>
      <dl className="grid border-t border-ink md:grid-cols-2 md:gap-x-12">
        {skills.map((g) => (
          <div
            key={g.group}
            className="grid gap-x-6 gap-y-1 border-b border-hair py-4 sm:grid-cols-[7.5rem_1fr]"
          >
            <dt className="font-mono text-xs leading-7 tracking-[0.06em] text-muted uppercase">
              {g.group}
            </dt>
            <dd className="text-base leading-relaxed">{g.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
