"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Image from "next/image"
import { PillButton } from "@/components/pill-button"
import { easings, durations } from "@/lib/motion"

export function PhoneHero() {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.04, 1])

  if (prefersReduced) {
    return (
      <section className="relative grid min-h-[100dvh] items-center gap-12 overflow-hidden bg-paper px-5 md:grid-cols-2 md:px-12">
        <div className="z-10 max-w-lg">
          <p className="font-font-mono text-[13px] uppercase tracking-[0.15em] text-accent">New arrival</p>
          <h1 className="mt-4 font-font-heading text-[44px] font-bold leading-[1.05] tracking-[-1px] text-graphite md:text-[64px]">
            UltraPhone X
          </h1>
          <p className="mt-4 max-w-[440px] font-font-body text-[18px] leading-[1.5] text-fog">
            Built for next-gen intelligence. Titanium design. Pro camera system.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <PillButton variant="filled" href="/phones">Learn more</PillButton>
            <PillButton variant="outlined" href="/store">Buy</PillButton>
          </div>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <div className="relative w-full max-w-[420px]" style={{ aspectRatio: "9 / 16" }}>
            <Image
              src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80"
              alt="UltraPhone X"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="relative grid min-h-[100dvh] items-center gap-12 overflow-hidden bg-paper px-5 md:grid-cols-2 md:px-12">
      <div className="z-10 max-w-lg">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: durations.fast, ease: easings.easeOut }}
          className="font-font-mono text-[13px] uppercase tracking-[0.15em] text-accent"
        >
          New arrival
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: durations.hero, ease: easings.dramatic, delay: 0.1 }}
          className="mt-4 font-font-heading text-[44px] font-bold leading-[1.05] tracking-[-1px] text-graphite md:text-[64px]"
        >
          UltraPhone X
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.25 }}
          className="mt-4 max-w-[440px] font-font-body text-[18px] leading-[1.5] text-fog"
        >
          Built for next-gen intelligence. Titanium design. Pro camera system.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.4 }}
          className="mt-8 flex items-center gap-4"
        >
          <PillButton variant="filled" href="/phones">Learn more</PillButton>
          <PillButton variant="outlined" href="/store">Buy</PillButton>
        </motion.div>
      </div>

      <div className="relative flex h-full items-center justify-center" style={{ perspective: 1000 }}>
        <motion.div
          initial={{ rotateY: 25, x: 80, opacity: 0 }}
          animate={{ rotateY: 0, x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: easings.dramatic }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-full max-w-[420px]"
        >
          <motion.div style={{ y: imageParallaxY, scale: imageScale }}>
            <div className="relative overflow-hidden shadow-xl" style={{ aspectRatio: "9 / 16" }}>
              <Image
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80"
                alt="UltraPhone X"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute -inset-4 rounded-full bg-gradient-to-b from-transparent via-transparent to-black/5 blur-2xl"
          style={{ transform: "translateY(40px)" }}
        />
      </div>
    </section>
  )
}
