import { profile } from '../data/portfolio'
import { ContactLinks } from './ContactLinks'
import { Portrait } from './Portrait'

const fieldLabel = 'font-mono text-xs leading-5 tracking-[0.08em] text-muted uppercase md:pt-1.5'

/** The certificate's record block: who, what is claimed, how to reach him. */
export function Hero() {
  return (
    <section
      aria-labelledby="subject-name"
      className="grid pt-10 md:pt-12 lg:grid-cols-[8.5rem_1fr] lg:gap-x-10"
    >
      <dl className="hidden content-start gap-5 border-r border-rule pr-6 font-mono text-xs text-muted lg:grid lg:pt-1.5">
        <div>
          <dt className="tracking-[0.08em] uppercase">Systems</dt>
          <dd className="mt-1 text-ink">2 measured</dd>
        </div>
        <div>
          <dt className="tracking-[0.08em] uppercase">Runs</dt>
          <dd className="mt-1 text-ink">Before / After</dd>
        </div>
        <div>
          <dt className="tracking-[0.08em] uppercase">Test sets</dt>
          <dd className="mt-1 text-ink">Own, fictional</dd>
        </div>
      </dl>

      <div className="grid gap-x-14 md:grid-cols-[1fr_15rem] md:gap-y-8 lg:grid-cols-[1fr_17.5rem]">
        <dl className="grid min-w-0 content-start gap-y-3 md:grid-cols-[9.5rem_1fr] md:gap-x-6 md:gap-y-5">
          <dt className={`sr-only md:not-sr-only ${fieldLabel}`}>Subject</dt>
          <dd className="min-w-0">
            <h1
              id="subject-name"
              className="text-[clamp(2.75rem,10.5vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.025em] [font-stretch:116%]"
            >
              Anubhav
              <br />
              Mishra
            </h1>
          </dd>

          <dt className={`${fieldLabel} mt-3 md:mt-0`}>Programme</dt>
          <dd className="text-lg text-muted md:pt-0.5">
            {profile.programme} · {profile.batch}
          </dd>

          <dt className={`${fieldLabel} mt-6 md:mt-0 md:border-t md:border-rule md:pt-5`}>
            Statement under test
          </dt>
          <dd className="md:border-t md:border-rule md:pt-4">
            <p className="max-w-[27ch] text-[clamp(1.625rem,4.2vw,2.375rem)] leading-[1.1] font-medium tracking-[-0.01em] [font-stretch:94%]">
              {profile.pitch}
            </p>
          </dd>

        </dl>
        <div className="mt-8 md:col-start-1 md:row-start-2 md:mt-0 md:pl-[11rem]">
          <ContactLinks />
        </div>

        <div className="justify-self-start pt-10 md:col-start-2 md:row-span-2 md:row-start-1 md:justify-self-end md:pt-2">
          <Portrait />
        </div>
      </div>
    </section>
  )
}
