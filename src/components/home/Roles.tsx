import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const roles = [
  {
    title: 'Strategy & Advisory',
    description: 'We help you define the right problems to solve, align stakeholders, and build roadmaps that connect business goals to technical execution.',
    capabilities: ['Technology strategy', 'Digital transformation', 'Roadmap planning', 'Stakeholder alignment', 'Market analysis'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Engineering & Delivery',
    description: 'From architecture through deployment, we build scalable systems that perform under pressure and evolve with your business.',
    capabilities: ['System architecture', 'Full-stack development', 'Cloud infrastructure', 'CI/CD pipelines', 'Performance optimization'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <rect x="2" y="3" width="20" height="7" rx="2" />
        <rect x="2" y="14" width="20" height="7" rx="2" />
        <circle cx="6" cy="6.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="6" cy="17.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Operations & Scale',
    description: 'We design and run the operational systems that let you scale without chaos — monitoring, automation, and team processes that grow with you.',
    capabilities: ['Operational design', 'Process automation', 'Team scaling', 'Monitoring & observability', 'Incident management'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
        <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
      </svg>
    ),
  },
]

export default function Roles() {
  return (
    <section className="relative bg-base py-24 sm:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
            What we do
          </p>
          <h2 className="mt-4 max-w-[22ch] text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-white/90 sm:text-[42px]">
            End-to-end expertise.{' '}
            <span className="font-serif font-normal italic">Delivered.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 100}>
              <div className="group rounded-card border border-line bg-white/[0.02] p-7 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[12px] bg-white/[0.06] text-cyan">
                  {role.icon}
                </div>
                <h3 className="text-[20px] font-bold text-white/90">{role.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-white/50">{role.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {role.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-pill border border-line bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/55"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
