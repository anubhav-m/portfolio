import { nav } from '../data/portfolio'
import { ThemeToggle } from './ThemeToggle'

function NavList({ className }: { className: string }) {
  return (
    <ul className={className}>
      {nav.map((item) => (
        <li key={item.href}>
          <a href={item.href} className="inline-block py-1 no-underline hover:underline">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Header() {
  return (
    <header className="border-b-2 border-ink pt-5 pb-3 md:pt-7">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[0.6875rem] font-bold tracking-[0.12em] uppercase [font-stretch:125%] sm:text-[0.8125rem] sm:tracking-[0.2em]">
          Certificate of Measurement
        </p>
        <div className="flex items-center gap-6">
          <nav aria-label="Sections" className="hidden md:block">
            <NavList className="flex gap-6 text-sm" />
          </nav>
          <ThemeToggle />
        </div>
      </div>
      <nav aria-label="Sections" className="mt-3 md:hidden">
        <NavList className="grid grid-cols-3 gap-x-3 text-sm min-[360px]:flex min-[360px]:justify-between" />
      </nav>
    </header>
  )
}
