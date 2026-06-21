import Container from '@/components/ui/Container'
import Logo from '@/components/Logo'

const cols: [string, [string, string][]][] = [
  ['Services', [['About', '#mission'], ['Contact', 'mailto:hello@jtamb.com']]],
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-base pt-10">
      <Container>
        <div className="flex flex-wrap justify-between gap-8 pb-7">
          <p className="max-w-[48ch] text-[15px] leading-[1.6] text-white/50">
            JTAM Group delivers strategy, engineering, and operations expertise to help businesses build, scale, and operate with confidence.
          </p>
          <div className="flex gap-12">
            {cols.map(([title, links]) => (
              <div key={title}>
                <p className="mb-3 text-[14px] font-semibold text-white/80">{title}</p>
                {links.map(([label, href]) => (
                  <a key={label} href={href} className="block min-h-[44px] py-2.5 text-[14px] text-white/40 transition-colors hover:text-white/80">
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="text-spectral select-none pb-3 text-[clamp(90px,21vw,260px)] font-extrabold leading-[0.86] tracking-[-0.05em]" aria-hidden="true">
          JTAM
        </div>

        <div className="flex flex-col gap-2 border-t border-white/[0.06] py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2.5">
            <Logo size={17} spin />© 2026 JTAM Group
          </span>
          <span>Strategy · Engineering · Operations</span>
        </div>
      </Container>
    </footer>
  )
}
