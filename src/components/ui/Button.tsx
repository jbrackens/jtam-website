import type { ReactNode } from 'react'

const VARIANTS = {
  primary: 'bg-white text-dark border border-transparent hover:bg-white/90',
  secondary: 'bg-white/[0.06] text-white/90 border border-white/[0.1] hover:bg-white/[0.1]',
  ghost: 'bg-transparent text-white/80 border border-white/[0.12] hover:bg-white/[0.06]',
  signal: 'bg-signal text-[#04263a] border border-[#bfe9fb] hover:bg-[#9fe0ff]',
  white: 'bg-white text-dark border border-transparent hover:bg-white/90',
}

type ButtonProps = {
  href?: string
  children: ReactNode
  variant?: keyof typeof VARIANTS
  arrow?: boolean
  className?: string
  onClick?: () => void
}

function Arrow() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className="h-4 w-4">
      <path d="M3 9h11M9.5 4.5 14 9l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Button({ href, children, variant = 'primary', arrow = false, className = '', onClick }: ButtonProps) {
  const cls = `inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-5 text-[15px] font-semibold leading-none transition-colors duration-150 ${VARIANTS[variant]} ${className}`
  const inner = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  )
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {inner}
    </button>
  )
}
