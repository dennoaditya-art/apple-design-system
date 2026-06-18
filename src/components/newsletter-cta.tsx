"use client"

import { Reveal } from "@/components/reveal"

export function NewsletterCta() {
  return (
    <section className="bg-ink px-5 py-[120px]">
      <div className="mx-auto max-w-[980px]">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-font-heading text-[32px] font-semibold leading-[1.14] tracking-[-0.28px] text-paper md:text-[44px]">
              Stay in the loop.
            </h2>
            <p className="mt-4 max-w-[500px] font-font-body text-[17px] font-light leading-[1.47] text-graphite">
              Get the latest updates on new features, product releases, and early access to upcoming tools.
            </p>
            
            <form className="mt-10 flex w-full max-w-[400px] flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
                required
                className="w-full rounded-full border border-steel bg-slate px-5 py-3.5 font-font-body text-[15px] text-paper outline-none transition-all placeholder:text-graphite focus:border-accent focus:ring-2 focus:ring-accent/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-accent px-6 py-3.5 font-font-body text-[15px] font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent-solid active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
