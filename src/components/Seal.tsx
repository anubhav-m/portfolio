/** The certificate's stamp: states the conditions every number was measured under. */
export function Seal({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label="Measured on own test sets, not real-world performance"
      className={`text-seal ${className}`}
    >
      <circle
        cx="60"
        cy="60"
        r="57"
        style={{ fill: 'var(--paper)' }}
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="60" cy="60" r="38" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <defs>
        <path id="seal-ring" d="M60 60 m-47 0 a47 47 0 1 1 94 0 a47 47 0 1 1 -94 0" />
      </defs>
      <text
        fill="currentColor"
        style={{ fontFamily: 'var(--font-mono)' }}
        fontSize="10.5"
        fontWeight="600"
        letterSpacing="1.2"
      >
        <textPath href="#seal-ring" textLength="290" lengthAdjust="spacing">MEASURED ON OWN TEST SETS ·</textPath>
      </text>
      <path
        d="M44 61 l11 11 l21 -24"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="square"
      />
    </svg>
  )
}
