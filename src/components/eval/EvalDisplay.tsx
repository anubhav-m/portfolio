import { useState } from 'react'
import { evalCaveat, evalResults } from '../../data/portfolio'
import { Section } from '../Section'
import { ResultRow } from './ResultRow'
import { RunSwitch, type Run } from './RunSwitch'

export function EvalDisplay() {
  const [run, setRun] = useState<Run>('after')

  const summary = evalResults
    .map((r) => `${r.system} ${r.metric.toLowerCase()}: ${r[run]}${r.kind === 'passes' ? ` of ${r.total}` : ''}`)
    .join('. ')

  return (
    <Section
      id="results"
      title="Results"
      meta="2 systems · 3 measurements · 2 runs each"
      aside={<RunSwitch value={run} onChange={setRun} />}
      compact
    >
      <p className="text-base leading-relaxed">
        Before-and-after runs from my own evaluation suites.{' '}
        <strong className="font-semibold">{evalCaveat}</strong>
      </p>

      <ul className="mt-5 border-t border-ink">
        {evalResults.map((r) => (
          <ResultRow key={r.id} result={r} run={run} />
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-3.5 w-2.5 bg-seal" /> passed
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-3.5 w-2.5 border-2 border-ink" /> failed
        </span>
        <span>One cell per test case. Passes drawn first; order is not scenario order.</span>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {run === 'after' ? 'after' : 'before'} run. {summary}.
      </p>
    </Section>
  )
}
