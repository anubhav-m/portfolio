import { profile } from '../data/portfolio'
import { resumeLink } from '../lib/resume'
import { Icon } from './Icon'

const cell =
  'flex h-full min-h-11 items-center justify-center gap-2 px-4 py-2.5 text-sm no-underline transition-colors sm:justify-start'

/** The certificate's link row: one ruled strip of fields, the resume printed solid. */
export function ContactLinks() {
  return (
    <div>
      <ul className="grid grid-cols-2 border-t border-l border-ink sm:inline-grid sm:grid-cols-[auto_auto_auto]">
        <li className="col-span-2 border-r border-b border-ink sm:col-span-1">
          <a
            href={resumeLink.href}
            {...(resumeLink.download ? { download: 'Anubhav-Mishra-Resume.pdf' } : {})}
            className={`${cell} bg-ink font-semibold text-on-ink hover:bg-seal hover:text-on-seal`}
          >
            <Icon name="file" />
            {resumeLink.label}
          </a>
        </li>
        <li className="border-r border-b border-ink">
          <a href={profile.github} rel="me noopener" target="_blank" className={`${cell} hover:bg-hair`}>
            GitHub
            <Icon name="arrow-up-right" className="size-3.5" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
        <li className="border-r border-b border-ink">
          <a href={profile.linkedin} rel="me noopener" target="_blank" className={`${cell} hover:bg-hair`}>
            LinkedIn
            <Icon name="arrow-up-right" className="size-3.5" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      </ul>
      <a
        href={`mailto:${profile.email}`}
        className="mt-4 inline-flex max-w-full items-center gap-2 py-1 font-mono text-[0.875rem] underline decoration-rule hover:text-seal hover:decoration-seal"
      >
        <Icon name="mail" className="size-4 shrink-0" />
        <span className="[overflow-wrap:anywhere]">{profile.email}</span>
      </a>
    </div>
  )
}
