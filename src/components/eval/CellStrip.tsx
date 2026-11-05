import type { CSSProperties } from 'react'

type CellStripProps = {
  total: number
  passed: number
  /** Changes on every run switch so the cells re-print. */
  printKey: string
}

/**
 * One cell per test case: solid seal = passed, outlined = failed.
 * Passes are drawn first; cell order is not scenario order.
 */
export function CellStrip({ total, passed, printKey }: CellStripProps) {
  const half = Math.ceil(total / 2)
  return (
    <div
      key={printKey}
      aria-hidden="true"
      className="grid [grid-template-columns:repeat(var(--cols-sm),minmax(0,1fr))] gap-[3px] md:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))]"
      style={{ '--cols': total, '--cols-sm': half } as CSSProperties}
    >
      {Array.from({ length: total }, (_, i) => {
        const pass = i < passed
        return (
          <span
            key={i}
            style={{ '--i': i } as CSSProperties}
            className={`cell-print h-6 md:h-7 ${
              pass ? 'bg-seal' : 'border-2 border-ink bg-transparent'
            }`}
          />
        )
      })}
    </div>
  )
}
