import type { EvalResult } from '../../data/portfolio'
import { CellStrip } from './CellStrip'
import type { Run } from './RunSwitch'

type ResultRowProps = { result: EvalResult; run: Run }

export function ResultRow({ result, run }: ResultRowProps) {
  const shown = result[run]
  const other = run === 'after' ? result.before : result.after
  const otherRun = run === 'after' ? result.runs.before : result.runs.after
  const isPasses = result.kind === 'passes'

  return (
    <li className="grid gap-x-10 gap-y-4 border-b border-hair py-6 md:first:pt-5 md:grid-cols-[minmax(13rem,17rem)_1fr_8.5rem] md:items-center">
      <div>
        <h3 className="text-base leading-snug font-semibold">
          {result.system}
          <span className="block font-normal text-muted">{result.metric}</span>
        </h3>
        <p className="mt-2 max-w-[38ch] font-mono text-xs leading-relaxed text-muted">
          {result.conditions}
        </p>
      </div>

      {isPasses ? (
        <CellStrip total={result.total} passed={shown} printKey={`${result.id}-${run}`} />
      ) : (
        <p className="border-y border-dashed border-rule py-3 text-sm text-muted">
          No scenario produced an unauthorized action. Verification and lender rules are enforced
          in server code, not prompts.
        </p>
      )}

      <div className="flex items-baseline justify-between gap-4 md:block md:text-right">
        <p className="font-mono text-[2rem] leading-none font-semibold">
          {isPasses ? (
            <>
              {shown}
              <span className="text-muted">/{result.total}</span>
            </>
          ) : (
            shown
          )}
        </p>
        <p className="font-mono text-xs text-muted md:mt-2">
          {result.runs[run]}
          <span className="block">
            {otherRun}: {isPasses ? `${other}/${result.total}` : other}
          </span>
        </p>
      </div>
    </li>
  )
}
