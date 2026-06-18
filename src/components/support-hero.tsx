"use client"

import { motion, useReducedMotion } from "motion/react"
import { easings, durations } from "@/lib/motion"
import { MagnifyingGlass } from "@phosphor-icons/react"

export function SupportHero() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="px-5 pb-16 pt-32 lg:pt-40">
      <div className="mx-auto max-w-[980px]">
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReduced ? { duration: 0 } : { duration: durations.slow, ease: easings.easeOut }}
          className="max-w-[700px]"
        >
          <h1 className="font-font-heading md:text-[56px] text-[40px] font-semibold leading-[1.07] tracking-[-1.23px] text-ink">
            How can we help?
          </h1>
          <p className="mt-4 font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
            Search our knowledge base or browse frequently asked questions below.
          </p>

          <div className="mt-10 relative max-w-[500px]">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-graphite">
              <MagnifyingGlass size={20} weight="bold" />
            </div>
            <input
              type="text"
              placeholder="Search for articles..."
              aria-label="Search for articles"
              className="w-full rounded-full border border-silver bg-transparent py-4 pl-12 pr-6 font-font-body text-[17px] text-ink outline-none transition-all focus:border-accent focus:ring-4 focus:ring-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
SupportHero.displayName = "SupportHero"
