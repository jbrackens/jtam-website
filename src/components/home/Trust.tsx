import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'

const safeguards = [
  { title: 'Transparent process', description: 'You see everything we do. No black boxes, no surprises. Full visibility at every stage.' },
  { title: 'Knowledge transfer', description: 'We build your team\'s capability alongside the systems. You own everything we create.' },
  { title: 'Measurable outcomes', description: 'Every engagement has clear success metrics defined upfront and tracked throughout.' },
  { title: 'Technology-agnostic', description: 'We recommend what\'s right for your business, not what earns us the biggest margin.' },
  { title: 'Existing stack integration', description: 'We work with your current tools and systems. No unnecessary rip-and-replace.' },
  { title: 'Flexible engagement', description: 'Start with a focused project. Expand as confidence grows. No lock-in contracts.' },
]

export default function Trust() {
  return (
    <section id="contact" className="relative overflow-hidden bg-base py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-[600px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Aurora ambient glow behind CTA */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[55%] h-[1000px] w-[1600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.22)_0%,rgba(45,212,191,0.12)_25%,rgba(56,189,248,0.06)_50%,transparent_72%)] blur-3xl" />
        <div className="absolute left-[30%] top-[45%] h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(110,231,183,0.16)_0%,rgba(45,212,191,0.08)_35%,transparent_65%)] blur-3xl" />
        <div className="absolute left-[70%] top-[60%] h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.16)_0%,rgba(56,189,248,0.08)_35%,transparent_65%)] blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Trust section */}
        <Reveal>
          <div className="rounded-stage border border-white/[0.06] bg-white/[0.02] p-8 sm:p-12 lg:p-16">
            {/* Corner brackets */}
            <div className="relative">
              {['top-0 left-0', 'top-0 right-0 rotate-90', 'bottom-0 right-0 rotate-180', 'bottom-0 left-0 -rotate-90'].map((pos) => (
                <span key={pos} className={`absolute ${pos} h-5 w-5 border-l-[1.5px] border-t-[1.5px] border-white/[0.1]`} />
              ))}

              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                Why JTAM
              </p>
              <h2 className="mt-4 max-w-[26ch] text-[28px] font-bold leading-[1.06] tracking-[-0.03em] text-white/90 sm:text-[36px]">
                Built on trust.{' '}
                <span className="text-white/40">Measured by results.</span>
              </h2>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {safeguards.map((s, i) => (
                  <Reveal key={s.title} delay={i * 60}>
                    <div className="py-3">
                      <h3 className="text-[20px] font-semibold text-white/80">{s.title}</h3>
                      <p className="mt-1.5 text-[14px] leading-[1.55] text-white/40">{s.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="mt-24 text-center sm:mt-32">
            <h2 className="mx-auto max-w-[22ch] text-[36px] font-bold leading-[1.02] tracking-[-0.04em] text-white/90 sm:text-[48px]">
              Ready to build{' '}
              <span className="text-spectral">what's next</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-[52ch] text-[18px] leading-[1.55] text-white/50">
              Whether you need a strategy partner, an engineering team, or operational expertise — we're ready to help you move forward.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="mailto:hello@jtamb.com" arrow>
                Start a conversation
              </Button>
              <Button href="#mission" variant="secondary">
                Learn more
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
