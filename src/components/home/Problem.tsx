import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const stats = [
  { value: '70%', label: 'of digital transformations fail to meet their objectives' },
  { value: '2.5×', label: 'cost overrun on average for large technology projects' },
  { value: '18mo', label: 'average delay before leadership recognizes a project is off track' },
]

export default function Problem() {
  return (
    <section className="relative bg-base py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
              The problem
            </p>
            <h2 className="mt-4 text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-white/90 sm:text-[42px]">
              Complexity scales faster{' '}
              <span className="text-white/40">than teams.</span>
            </h2>
            <p className="mt-6 text-[18px] leading-[1.6] text-white/50">
              Every new product, every new market, every new integration adds layers of complexity. Teams respond by hiring more people, adopting more tools, creating more process. The overhead compounds. The velocity drops. The knowledge stays locked in people's heads.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[900px] gap-5 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 100}>
              <div className="rounded-card border border-white/[0.06] bg-white/[0.02] p-6 text-center">
                <p className="text-spectral text-[36px] font-bold tracking-[-0.03em] sm:text-[42px]">{stat.value}</p>
                <p className="mt-2 text-[14px] leading-[1.5] text-white/40">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
