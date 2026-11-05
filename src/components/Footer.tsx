import { profile } from '../data/portfolio'
import { resumeLink } from '../lib/resume'
import { Icon } from './Icon'

const year = new Date().getFullYear()

const row =
  'flex items-center justify-between gap-4 border-b border-hair py-3.5 no-underline transition-colors hover:text-seal'

export function Footer() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="mt-20 grid border-t-2 border-ink pt-6 pb-12 md:mt-28 md:pt-8 lg:grid-cols-[8.5rem_1fr] lg:gap-x-10"
    >
      <p className="hidden font-mono text-xs text-muted lg:block lg:pt-2">Contact</p>
      <div className="grid min-w-0 gap-x-16 gap-y-10 md:grid-cols-[1fr_20rem]">
        <div className="min-w-0">
          <h2
            id="contact-title"
            className="text-[2rem] leading-none font-bold [font-stretch:112%] md:text-[2.5rem]"
          >
            Get in touch
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block font-mono text-[clamp(1rem,3.6vw,1.75rem)] font-medium [overflow-wrap:anywhere] decoration-seal decoration-2 hover:text-seal"
          >
            {profile.email}
          </a>
        </div>
        <ul className="border-t border-ink text-base">
          <li>
            <a href={profile.github} target="_blank" rel="me noopener" className={row}>
              GitHub <Icon name="arrow-up-right" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="me noopener" className={row}>
              LinkedIn <Icon name="arrow-up-right" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              href={resumeLink.href}
              {...(resumeLink.download ? { download: 'Anubhav-Mishra-Resume.pdf' } : {})}
              className={row}
            >
              {resumeLink.label} <Icon name="file" />
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-16 flex flex-col gap-2 font-mono text-xs text-muted sm:flex-row sm:justify-between lg:col-start-2">
        <p>
          Signed, <span className="text-ink">Anubhav Mishra</span> · {year}
        </p>
        <p>All results measured on own fictional test sets.</p>
      </div>
    </footer>
  )
}
