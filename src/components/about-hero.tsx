"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { easings, durations } from "@/lib/motion"

export function AboutHero() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="px-5 pb-16 pt-32 lg:pt-40">
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReduced ? { duration: 0 } : { duration: durations.slow, ease: easings.easeOut }}
            className="md:w-1/2"
          >
            <h1 className="font-font-heading md:text-[56px] text-[40px] font-semibold leading-[1.07] tracking-[-1.23px] text-ink">
              Designed for the creative mind.
            </h1>
            <p className="mt-4 max-w-[400px] font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
              We build tools that stay out of your way, so your best ideas can take center stage.
            </p>
          </motion.div>

          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={prefersReduced ? { duration: 0 } : { duration: durations.hero, ease: easings.dramatic, delay: 0.1 }}
            className="md:w-[45%]"
          >
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ aspectRatio: "4 / 5" }}>
              <Image
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80"
                alt="Creative studio environment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
