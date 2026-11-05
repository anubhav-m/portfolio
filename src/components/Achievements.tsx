import { achievements } from '../data/portfolio'
import { Section } from './Section'

export function Achievements() {
  return (
    <Section id="publication" title="Publication & achievements" meta="IEEE · hackathons">
      <ul className="border-t border-ink">
        {achievements.map((a) => (
          <li
            key={a.text}
            className="grid gap-x-6 gap-y-1 border-b border-hair py-5 sm:grid-cols-[7.5rem_1fr]"
          >
            <span className="font-mono text-xs leading-6 tracking-[0.06em] text-muted uppercase">
              {a.kind}
            </span>
            <span className="max-w-[68ch] text-base leading-relaxed">{a.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
