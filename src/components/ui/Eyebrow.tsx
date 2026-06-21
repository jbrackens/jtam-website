import type { ReactNode } from 'react'

type EyebrowProps = {
  children: ReactNode
  chip?: boolean
  dark?: boolean
  className?: string
}

export default function Eyebrow({ children, chip = false, dark = false, className = '' }: EyebrowProps) {
  const base = 'inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] leading-none'
  const tone = dark ? 'text-dark-muted' : 'text-muted'

  if (chip) {
    return (
      <span className={`${base} ${tone} rounded-pill border ${dark ? 'border-white/15' : 'border-line'} px-3.5 py-1.5 ${className}`}>
        <span className="h-2 w-2 rounded-full bg-spectral" aria-hidden="true" />
        {children}
      </span>
    )
  }

  return <span className={`${base} ${tone} ${className}`}>{children}</span>
}
