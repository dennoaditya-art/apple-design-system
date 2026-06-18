import { Reveal } from "@/components/reveal"

export function AboutStory() {
  return (
    <section className="bg-fog px-5 py-[120px]">
      <div className="mx-auto max-w-[980px]">
        <Reveal>
          <div className="mx-auto max-w-[65ch]">
            <h2 className="font-font-heading text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-ink">
              Our philosophy
            </h2>
            
            <div className="mt-8 space-y-6 font-font-body text-[17px] font-light leading-[1.6] text-slate">
              <p>
                When we started Nova, we noticed a recurring pattern in the industry: software was becoming increasingly complex, cluttered with features that most people never use. Interfaces were noisy, and the actual work—the writing, the designing, the creating—was being pushed to the margins.
              </p>
              
              <p>
                We believed there was a better way. We set out to build tools that prioritize focus and clarity. Tools that are quietly powerful, revealing their depth only when you ask for it.
              </p>

              <p>
                Our design language is rooted in reduction. By stripping away the non-essential, we make space for what truly matters. Every pixel, every animation, and every interaction is carefully considered to feel natural and responsive. We don't just build software; we craft digital environments where creativity can thrive.
              </p>
            </div>
            
            <div className="mt-16 h-[1px] w-full bg-ink opacity-10" />
            
            <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2">
              <div>
                <h3 className="font-font-body text-[14px] font-semibold text-ink">Founded</h3>
                <p className="mt-1 font-font-body text-[17px] text-graphite">2026, San Francisco</p>
              </div>
              <div>
                <h3 className="font-font-body text-[14px] font-semibold text-ink">Mission</h3>
                <p className="mt-1 font-font-body text-[17px] text-graphite">To clear the path for creative work.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
