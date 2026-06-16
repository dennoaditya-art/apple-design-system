"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { PillButton } from "@/components/pill-button"
import { easings, durations } from "@/lib/motion"

interface MacBookHeroProps {
  as?: "h1" | "h2"
}

export function MacBookHero({ as: Heading = "h2" }: MacBookHeroProps) {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const bgParallax = useTransform(scrollYProgress, [0, 1], [0, -40])

  if (prefersReduced) {
    return (
      <section className="relative overflow-hidden bg-paper px-5 py-[80px] text-center">
        <div className="mx-auto max-w-[980px]">
          <Heading className="font-sf-pro-display md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
            MacBook Pro
          </Heading>
          <p className="mt-3 font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-fog">
            M4 Max. Built for the impossible.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <PillButton variant="filled" href="/mac">Learn more</PillButton>
            <PillButton variant="outlined" href="/store">Buy</PillButton>
          </div>
          <div className="relative mx-auto mt-16 max-w-[800px]">
            <div className="relative overflow-hidden rounded-[4px] shadow-xl">
              <div className="relative" style={{ aspectRatio: "3 / 2" }}>
                <Image
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80"
                  alt="MacBook Pro with M4 Max"
                  fill
                  sizes="(max-width: 800px) 100vw, 800px"
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="relative overflow-hidden bg-paper px-5 py-[80px] text-center">
      <motion.div
        style={{ y: bgParallax }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-apple-blue/2 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[980px]">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: durations.hero, ease: easings.dramatic }}
        >
          <Heading className="font-sf-pro-display md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
            MacBook Pro
          </Heading>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.15 }}
          className="mt-3 font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-fog"
        >
          M4 Max. Built for the impossible.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <PillButton variant="filled">Learn more</PillButton>
          <PillButton variant="outlined">Buy</PillButton>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-[800px]" style={{ perspective: 1200 }}>
          <motion.div
            initial={{ rotateX: 55, opacity: 0, y: 80 }}
            whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, delay: 0.2, ease: easings.dramatic }}
            style={{ transformStyle: "preserve-3d", transformOrigin: "bottom center" }}
          >
            <motion.div className="relative h-full w-full" style={{ y: imageParallaxY }}>
              <div className="relative overflow-hidden rounded-[4px] shadow-xl">
                <div className="relative" style={{ aspectRatio: "3 / 2" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80"
                    alt="MacBook Pro with M4 Max"
                    fill
                    sizes="(max-width: 800px) 100vw, 800px"
                    className="object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />

                  <motion.div
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                    style={{ clipPath: "inset(0 0 42% 0)" }}
                  >
                    <div className="h-full w-full bg-black" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.4, ease: easings.easeOut }}
                    className="absolute inset-0"
                    style={{ clipPath: "inset(0 0 42% 0)" }}
                  >
                    <div className="h-full w-full bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0.3 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: easings.easeOut }}
                    className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.15)]"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
