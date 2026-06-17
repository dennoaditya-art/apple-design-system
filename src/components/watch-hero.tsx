"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Image from "next/image"
import { PillButton } from "@/components/pill-button"
import { easings, durations } from "@/lib/motion"

interface WatchHeroProps {
  as?: "h1" | "h2"
}

export function WatchHero({ as: Heading = "h2" }: WatchHeroProps) {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const imageParallaxScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  if (prefersReduced) {
    return (
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-paper px-5 pb-0 pt-[80px] text-center">
        <Heading className="font-font-heading md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
          Watch Pro
        </Heading>
        <p className="mt-3 max-w-[640px] font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
          Adventure awaits.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <PillButton variant="filled" href="/watch">Learn more</PillButton>
          <PillButton variant="outlined" href="/store">Buy</PillButton>
        </div>
        <div className="relative mt-12 w-full max-w-[400px]">
          <div className="relative overflow-hidden shadow-xl" style={{ aspectRatio: "1 / 1" }}>
            <Image
              src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80"
              alt="Watch Pro on wrist"
              fill
              sizes="(max-width: 400px) 100vw, 400px"
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
    <section ref={ref} className="relative flex flex-col items-center justify-center overflow-hidden bg-paper px-5 pb-0 pt-[80px] text-center">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: durations.hero, ease: easings.dramatic }}
      >
        <Heading className="font-font-heading md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
          Watch Pro
        </Heading>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.15 }}
        className="mt-3 max-w-[640px] font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite"
      >
        Adventure awaits.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.3 }}
        className="mt-6 flex items-center gap-3"
      >
        <PillButton variant="filled">Learn more</PillButton>
        <PillButton variant="outlined">Buy</PillButton>
      </motion.div>

      <div className="relative mt-12 w-full max-w-[400px]">
        <motion.div
          className="relative h-full w-full"
          style={{ y: imageParallaxY, scale: imageParallaxScale }}
          initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: easings.dramatic }}
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="relative overflow-hidden rounded-full shadow-xl"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80"
              alt="Watch Pro on wrist"
              fill
              sizes="(max-width: 400px) 100vw, 400px"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
            <motion.div
              animate={{ opacity: [0, 0.06, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
