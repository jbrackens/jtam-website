import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const capabilities = [
  {
    title: 'Technology Strategy',
    description: 'Define the right technology direction for your business. We align technical decisions with commercial goals and market realities.',
    color: 'text-mint',
    bgColor: 'bg-mint/[0.08]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Product Engineering',
    description: 'Full-stack development from concept through launch. We build products that users love and systems that scale.',
    color: 'text-teal',
    bgColor: 'bg-teal/[0.08]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Design, deploy, and manage cloud infrastructure that is secure, cost-effective, and ready for growth.',
    color: 'text-cyan',
    bgColor: 'bg-cyan/[0.08]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <rect x="2" y="3" width="20" height="7" rx="2" />
        <rect x="2" y="14" width="20" height="7" rx="2" />
        <circle cx="6" cy="6.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="6" cy="17.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Data & Analytics',
    description: 'Turn your data into decisions. We build pipelines, dashboards, and models that give you clarity — not just numbers.',
    color: 'text-sky',
    bgColor: 'bg-sky/[0.08]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'AI & Automation',
    description: 'Practical AI that solves real problems. From intelligent automation to custom models, we deliver AI that works in production.',
    color: 'text-blue',
    bgColor: 'bg-blue/[0.08]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
        <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
      </svg>
    ),
  },
  {
    title: 'Security & Compliance',
    description: 'Build secure systems from day one. We help you meet regulatory requirements without slowing down delivery.',
    color: 'text-mint',
    bgColor: 'bg-mint/[0.08]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-base py-24 sm:py-32">
      {/* Subtle divider */}
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-[600px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <Container>
        <Reveal>
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
              Capabilities
            </p>
            <h2 className="mx-auto mt-4 max-w-[24ch] text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-white/90 sm:text-[42px]">
              Full-spectrum expertise.{' '}
              <span className="font-serif font-normal italic">Covered.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 80}>
              <div className="group rounded-card border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.04]">
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] ${cap.bgColor} ${cap.color}`}>
                  {cap.icon}
                </div>
                <h3 className="text-[17px] font-bold text-white/90">{cap.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-white/45">{cap.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
