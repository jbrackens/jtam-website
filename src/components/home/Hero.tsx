import { useEffect, useRef, useState } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import AuroraCanvas from './AuroraCanvas'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const totalScroll = rect.height - window.innerHeight
      const progress = Math.max(0, Math.min(1, -rect.top / totalScroll))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const contentOpacity = 1 - scrollProgress * 2.5
  const contentTranslate = scrollProgress * -60

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-base">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <AuroraCanvas />

        {/* Radial vignette overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_center,transparent_30%,#050608_90%)]" />

        <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <div
            style={{
              opacity: Math.max(0, contentOpacity),
              transform: `translateY(${contentTranslate}px)`,
              transition: 'none',
            }}
          >
            <span className="inline-block animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-pill border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                Technology Consulting
              </span>
            </span>

            <div className="mt-8 animate-fade-up" style={{ animationDelay: '120ms' }}>
              <h1 className="mx-auto max-w-[20ch] text-balance text-[44px] font-bold leading-[0.94] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl xl:text-[96px]">
                Strategy meets{' '}
                <span className="text-spectral">execution.</span>
              </h1>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '240ms' }}>
              <p className="mx-auto mt-8 max-w-[52ch] text-[18px] font-medium leading-[1.55] text-white/60 sm:text-xl">
                JTAM Group helps businesses navigate complexity — from strategy and architecture through engineering and operations — so you can build with confidence and scale with clarity.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="mailto:hello@jtamb.com" arrow>
                  Start a conversation
                </Button>
                <Button href="#how-it-works" variant="secondary">
                  How we work
                </Button>
              </div>
            </div>

            {/* Roles strip */}
            <div className="mt-16 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[12px] uppercase tracking-[0.14em] text-white/30">
                <span>Strategy</span>
                <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
                <span>Engineering</span>
                <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
                <span>Operations</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 5) }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-white/20 to-transparent" />
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base to-transparent" />
      </div>
    </section>
  )
}
