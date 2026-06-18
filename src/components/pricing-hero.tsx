"use client"

import { motion, useReducedMotion } from "motion/react"
import { easings, durations } from "@/lib/motion"

export function PricingHero() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="px-5 pt-32 lg:pt-40">
      <div className="mx-auto max-w-[980px]">
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={prefersReduced ? { duration: 0 } : { duration: durations.slow, ease: easings.easeOut }}
          className="md:max-w-[600px]"
        >
          <h1 className="font-font-heading md:text-[56px] text-[40px] font-semibold leading-[1.07] tracking-[-1.23px] text-ink">
            Simple pricing.
            <br />
            No hidden fees.
          </h1>
        </motion.div>
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={prefersReduced ? { duration: 0 } : { duration: durations.slow, delay: 0.2 }}
          className="mb-2"
        >
          <p className="font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
            Start free, upgrade when you need to.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
PricingHero.displayName = "PricingHero"
