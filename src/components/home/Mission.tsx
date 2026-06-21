import Container from '@/components/ui/Container'

export default function Mission() {
  return (
    <section id="mission" className="bg-[#F5F3EE]">
      {/* Horse equation band */}
      <div className="flex items-center justify-center px-8 py-16 sm:py-20 lg:py-24">
        <img
          src="/horse-and-rider.svg"
          alt="Strategy plus execution equals partnership — illustrated as a rider and horse together"
          className="w-full max-w-[840px]"
        />
      </div>

      {/* Mission content */}
      <div className="border-t border-black/[0.06]">
        <Container className="py-20 sm:py-24 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Big staggered text */}
            <div
              className="flex flex-col gap-1 text-[44px] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[#0C0F14] sm:text-[56px] lg:text-[68px]"
              aria-hidden="true"
            >
              <span className="inline-block">
                <span className="bg-spectral bg-clip-text text-transparent">WE</span>
              </span>
              <span className="ml-[12%] inline-block">
                <span className="bg-spectral bg-clip-text text-transparent">ARE</span>
              </span>
              <span className="inline-block">CO.</span>
              <span className="ml-[18%] inline-block">NSUL</span>
              <span className="inline-block">TANTS</span>
            </div>

            {/* Mission statement */}
            <div className="flex flex-col justify-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0C0F14]/60">
                Our Mission
              </span>
              <h2 className="mt-4 text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-[#0C0F14] sm:text-[38px] lg:text-[42px]">
                Transforming ideas into&nbsp;reality
              </h2>
              <div className="mt-8 space-y-5 text-[16px] leading-[1.7] text-[#0C0F14]/70 sm:text-[17px]">
                <p>
                  We are consultants, helping leading companies navigate the digital
                  landscape — from advice to implementation. At the intersection of
                  strategy and technology, we turn complexity into clarity.
                </p>
                <p>
                  We bring deep expertise through collective intelligence and a culture
                  of collaboration. Our ambition is to co-create and be a true partner
                  to our clients as they build, scale, and transform. Together, like
                  horse and rider.
                </p>
                <p>
                  Our clients range from industry-leading enterprises to ambitious
                  startups. Trusted with their most complex challenges, we&rsquo;ve
                  built a unique approach to navigating uncharted territory and going
                  from idea to reality, together.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
