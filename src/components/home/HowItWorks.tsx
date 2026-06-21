import { useState } from 'react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

type StepVisual =
  | { kind: 'sources'; sources: string[]; label: string }
  | { kind: 'checks'; checks: string[]; label: string }
  | { kind: 'actions'; actions: string[]; label: string }
  | { kind: 'escalation'; from: string; to: string; label: string }
  | { kind: 'items'; items: string[]; label: string }

const steps: { num: string; title: string; description: string; visual: StepVisual }[] = [
  {
    num: '01',
    title: 'Discover',
    description: 'We start by understanding your business, your technology landscape, and where the gaps are. We map stakeholders, systems, and constraints to build a clear picture of what needs to change.',
    visual: {
      kind: 'sources',
      sources: ['Stakeholder interviews', 'System audit', 'Market analysis', 'Risk assessment', 'Opportunity mapping'],
      label: 'Context assembled',
    },
  },
  {
    num: '02',
    title: 'Design',
    description: 'With a clear understanding of the landscape, we design solutions that balance ambition with pragmatism. Architecture decisions, technology choices, and roadmaps — all grounded in your reality.',
    visual: {
      kind: 'checks',
      checks: ['Architecture design', 'Technology selection', 'Roadmap planning', 'Risk mitigation'],
      label: 'Solution designed',
    },
  },
  {
    num: '03',
    title: 'Build',
    description: 'We execute with precision — building systems, shipping features, and standing up infrastructure. Every sprint delivers working software, not slide decks.',
    visual: {
      kind: 'actions',
      actions: ['Ship features', 'Build APIs', 'Deploy infra', 'Write tests', 'Set up CI/CD', 'Migrate data'],
      label: 'Delivering incrementally',
    },
  },
  {
    num: '04',
    title: 'Operate',
    description: 'Great systems need great operations. We design monitoring, alerting, and runbooks so your team can run what we build — confidently and at scale.',
    visual: {
      kind: 'escalation',
      from: 'System deployed',
      to: 'Team operational',
      label: 'Handoff complete',
    },
  },
  {
    num: '05',
    title: 'Evolve',
    description: 'Technology doesn\'t stand still, and neither should your systems. We help you measure, learn, and iterate — turning operational data into better decisions and better products.',
    visual: {
      kind: 'items',
      items: ['Metrics → Insights', 'Feedback → Iteration', 'Growth → Optimization'],
      label: 'Continuous improvement',
    },
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)

  return (
    <section id="how-it-works" className="relative bg-base py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-[600px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            Our process
          </p>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-white/90 sm:text-[42px]">
            How we work.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[45%_1fr]">
          {/* Accordion */}
          <div className="space-y-1">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 60}>
                <button
                  type="button"
                  className={`w-full rounded-lg text-left transition-all duration-300 ${active === i ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-expanded={active === i}
                  aria-controls={`step-panel-${step.num}`}
                >
                  <div className="flex items-start gap-4 px-5 py-4">
                    <div className="flex items-center">
                      {active === i && (
                        <span className="mr-3 h-8 w-[3px] rounded-full bg-spectral-v" />
                      )}
                      <span className={`font-mono text-[13px] font-semibold ${active === i ? 'text-cyan' : 'text-white/25'}`}>
                        {step.num}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className={`text-[17px] font-bold transition-colors ${active === i ? 'text-white/90' : 'text-white/50'}`}>
                        {step.title}
                      </p>
                      <div
                        id={`step-panel-${step.num}`}
                        role="region"
                        className="grid transition-all duration-500"
                        style={{ gridTemplateRows: active === i ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <p className="pt-2 text-[14px] leading-[1.6] text-white/45">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Visual panel */}
          <Reveal>
            <div className="relative overflow-hidden rounded-stage border border-white/[0.06] bg-graphite p-8 lg:p-10">
              {/* Corner brackets */}
              {['top-3 left-3', 'top-3 right-3 rotate-90', 'bottom-3 right-3 rotate-180', 'bottom-3 left-3 -rotate-90'].map((pos) => (
                <span key={pos} className={`absolute ${pos} h-4 w-4 border-l-[1.5px] border-t-[1.5px] border-white/[0.15]`} />
              ))}

              {/* Step visual */}
              <div className="relative min-h-[300px]">
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ${active === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                  >
                    <div className="space-y-3">
                      {step.visual.kind === 'sources' && (
                        <div className="flex flex-wrap gap-2">
                          {step.visual.sources.map((s) => (
                            <span key={s} className="rounded-pill border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-white/60">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                      {step.visual.kind === 'checks' && (
                        <div className="space-y-2">
                          {step.visual.checks.map((c) => (
                            <div key={c} className="flex items-center gap-3">
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan/20">
                                <svg viewBox="0 0 16 16" className="h-3 w-3 text-cyan"><path d="M4 8l3 3 5-5" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                              </span>
                              <span className="text-[14px] text-white/60">{c}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {step.visual.kind === 'actions' && (
                        <div className="grid grid-cols-2 gap-2">
                          {step.visual.actions.map((a) => (
                            <div key={a} className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                              <span className="text-[13px] text-white/60">{a}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {step.visual.kind === 'escalation' && (
                        <div className="flex items-center gap-4">
                          <div className="rounded-lg border border-sky/30 bg-sky/10 px-4 py-3">
                            <p className="text-[13px] font-medium text-sky">{step.visual.from}</p>
                          </div>
                          <div className="flex-1 border-t border-dashed border-white/20" />
                          <div className="rounded-lg border border-cyan/30 bg-cyan/10 px-4 py-3">
                            <p className="text-[13px] font-medium text-cyan">{step.visual.to}</p>
                          </div>
                        </div>
                      )}
                      {step.visual.kind === 'items' && (
                        <div className="space-y-3">
                          {step.visual.items.map((item) => (
                            <div key={item} className="flex items-center gap-3 rounded-lg bg-white/[0.04] px-4 py-3">
                              <span className="text-[14px] text-white/60">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/30">
                      {step.num} · {step.visual.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom chrome */}
              <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/20">
                  {steps[active].num} · {steps[active].title}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/20">
                  engagement lifecycle
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
