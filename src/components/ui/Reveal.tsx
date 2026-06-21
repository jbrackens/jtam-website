import type { ReactNode } from 'react'
import useReveal from '@/hooks/useReveal'

export default function Reveal({ className = '', delay = 0, children }: { className?: string; delay?: number; children: ReactNode }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
