import { profile } from '../data/portfolio'

export type ResumeLink = {
  href: string
  label: string
  download: boolean
}

/**
 * Points at /resume.pdf only when public/resume.pdf shipped with the build.
 * Otherwise it becomes an email request, so the link is never a 404.
 */
export const resumeLink: ResumeLink = __RESUME_AVAILABLE__
  ? { href: profile.resume, label: 'Resume (PDF)', download: true }
  : {
      href: `mailto:${profile.email}?subject=${encodeURIComponent('Resume request')}`,
      label: 'Resume on request',
      download: false,
    }
