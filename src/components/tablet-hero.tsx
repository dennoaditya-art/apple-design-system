"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Image from "next/image"
import { PillButton } from "@/components/pill-button"
import { easings, durations } from "@/lib/motion"

interface TabletHeroProps {
  as?: "h1" | "h2"
}

export function TabletHero({ as: Heading = "h2" }: TabletHeroProps) {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const bgParallax = useTransform(scrollYProgress, [0, 1], [0, -30])

  if (prefersReduced) {
    return (
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-paper px-5 pb-0 pt-[80px] text-center">
        <Heading className="font-font-heading md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-ink">
          Tablet Pro
        </Heading>
        <p className="mt-3 max-w-[640px] font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-ink">
          The ultimate tablet experience.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <PillButton variant="filled" href="/tablets">Learn more</PillButton>
          <PillButton variant="outlined" href="/store">Buy</PillButton>
        </div>
        <div className="relative mt-12 w-full max-w-[500px]">
          <div className="relative overflow-hidden shadow-xl" style={{ aspectRatio: "4 / 3" }}>
            <Image
              src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80"
              alt="Tablet Pro"
              fill
              sizes="(max-width: 500px) 100vw, 500px"
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
        style={{ y: bgParallax }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/2 to-transparent"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: durations.hero, ease: easings.dramatic }}
      >
        <Heading className="font-font-heading md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-ink">
          Tablet Pro
        </Heading>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.15 }}
        className="mt-3 max-w-[640px] font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-ink"
      >
        The ultimate tablet experience.
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

      <div className="relative mt-12 w-full max-w-[500px]" style={{ perspective: 1000 }}>
        <motion.div
          initial={{ rotateX: 20, y: 100, opacity: 0 }}
          animate={{ rotateX: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: easings.dramatic }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative overflow-hidden rounded-xs shadow-xl" style={{ aspectRatio: "4 / 3" }}>
            <motion.div
              style={{ y: imageParallaxY }}
              className="absolute inset-0"
            >
              <div
                className="animate-bob relative h-full w-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80"
                  alt="Tablet Pro"
                  fill
                  sizes="(max-width: 500px) 100vw, 500px"
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
              </div>
            </motion.div>
            <motion.div
              animate={{ opacity: [0, 0.04, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/[0.03] to-white/0"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute -inset-4 rounded-full bg-gradient-to-b from-transparent via-transparent to-black/5 blur-2xl"
          style={{ transform: "translateY(30px)" }}
        />
      </div>
    </section>
  )
}
TabletHero.displayName = "TabletHero"
