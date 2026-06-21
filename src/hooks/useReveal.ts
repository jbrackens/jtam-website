import { useEffect, useRef } from 'react'

type RevealOptions = {
  threshold?: number
  rootMargin?: string
}

// Returns a ref; adds `is-visible` to the element when it scrolls into view.
// Base hidden state lives in CSS scoped to `.js [data-reveal]`, so content
// stays visible with no JS / no observer support.
export default function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.12,
  rootMargin = '0px 0px -8% 0px',
}: RevealOptions = {}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin])

  return ref
}
