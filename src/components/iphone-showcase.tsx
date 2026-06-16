"use client"

import { motion, useReducedMotion } from "framer-motion"
import { easings, durations } from "@/lib/motion"

export function IPhoneShowcase() {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return (
      <section className="flex flex-col items-center justify-center bg-cloud px-5 py-[80px] text-center">
        <h2 className="font-sf-pro-display md:text-[56px] text-[36px] font-semibold leading-[1.07] tracking-[-1.23px] text-graphite">
          iPhone
        </h2>
        <p className="mt-3 font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-fog">
          The ultimate iPhone experience awaits.
        </p>
      </section>
    )
  }

  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-cloud px-5 py-[80px] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40, filter: "blur(8px)", scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: durations.hero, ease: easings.dramatic }}
        className="font-sf-pro-display md:text-[56px] text-[36px] font-semibold leading-[1.07] tracking-[-1.23px] text-graphite"
      >
        iPhone
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.2 }}
        className="mt-3 font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-fog"
      >
        The ultimate iPhone experience awaits.
      </motion.p>
    </section>
  )
}
