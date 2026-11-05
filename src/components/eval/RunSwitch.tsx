export type Run = 'before' | 'after'

const options: { value: Run; label: string; hint: string }[] = [
  { value: 'before', label: 'Before', hint: 'Baseline · RAG off' },
  { value: 'after', label: 'After', hint: 'After fixes · RAG on' },
]

type RunSwitchProps = { value: Run; onChange: (run: Run) => void }

/** A two-way switch between runs. Radio semantics give arrow-key support for free. */
export function RunSwitch({ value, onChange }: RunSwitchProps) {
  return (
    <fieldset className="min-w-0">
      <legend className="sr-only">Show results from run</legend>
      <div className="inline-flex border border-ink">
        {options.map((opt) => {
          const active = opt.value === value
          return (
            <label
              key={opt.value}
              className={`relative flex cursor-pointer flex-col px-4 py-2 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-seal sm:px-5 ${
                active ? 'bg-ink text-on-ink' : 'hover:bg-hair'
              }`}
            >
              <input
                type="radio"
                name="run"
                value={opt.value}
                checked={active}
                onChange={() => onChange(opt.value)}
                className="sr-only"
              />
              <span className="text-sm font-semibold">{opt.label}</span>
              <span className={`font-mono text-[0.6875rem] ${active ? 'opacity-80' : 'text-muted'}`}>
                {opt.hint}
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
