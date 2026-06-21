import { useEffect, useRef, useState } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import AuroraCanvas from './AuroraCanvas'

const TICKER_ITEMS = [
  'Strategy',
  'Engineering',
  'Operations',
  'Cloud & Infra',
  'Data & AI',
  'Architecture',
  'Security',
  'Product',
  'Consulting',
  'Transformation',
]

function TickerStrip() {
  return (
    <div className="flex shrink-0 items-center">
      {TICKER_ITEMS.map((item, i) => (
        <span key={i} className="flex shrink-0 items-center">
          <span className="px-4 text-[24px] font-bold uppercase tracking-[0.08em] text-white sm:px-6 sm:text-[36px] lg:px-8 lg:text-[44px]">
            {item}
          </span>
          <span className="h-2 w-2 shrink-0 rounded-full bg-white/40 sm:h-2.5 sm:w-2.5" />
        </span>
      ))}
    </div>
  )
}

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
          </div>
        </Container>

        {/* Marquee ticker band */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-y border-white/[0.06] bg-white/[0.03] py-5 backdrop-blur-sm sm:py-6"
          aria-hidden="true"
        >
          <div className="flex w-max animate-marquee">
            <TickerStrip />
            <TickerStrip />
          </div>
        </div>
      </div>
    </section>
  )
}
