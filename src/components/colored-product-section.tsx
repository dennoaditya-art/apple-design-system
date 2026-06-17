"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Image from "next/image"
import { PillButton } from "@/components/pill-button"
import { easings, durations } from "@/lib/motion"

export function ColoredProductSection() {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [40, -40])

  if (prefersReduced) {
    return (
      <section className="flex flex-col items-center justify-center px-5 py-[80px] text-center" style={{ backgroundColor: "var(--color-bone, #e2e2e5)" }}>
        <h2 className="font-font-heading md:text-[56px] text-[36px] font-semibold leading-[1.07] tracking-[-1.23px] text-graphite">
          Tablet Air
        </h2>
        <p className="mt-3 max-w-[640px] font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
          Supercharged performance.
        </p>
        <div className="mt-5 flex items-center gap-3">
          <PillButton variant="filled" href="/tablets">Learn more</PillButton>
          <PillButton variant="outlined" href="/store" className="border-graphite text-graphite hover:border-graphite hover:text-graphite">Buy</PillButton>
        </div>
        <div className="relative mt-10 w-full max-w-[65vw] shadow-xl" style={{ aspectRatio: "4 / 3" }}>
          <Image
            src="https://images.unsplash.com/photo-1682426526490-667d4912b8de?w=1000&q=80"
            alt="Tablet Air"
            fill
            sizes="65vw"
            className="object-contain"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="flex flex-col items-center justify-center overflow-hidden px-5 py-[80px] text-center" style={{ backgroundColor: "var(--color-bone, #e2e2e5)" }}>
      <motion.h2
        initial={{ opacity: 0, y: 40, filter: "blur(8px)", scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: durations.hero, ease: easings.dramatic }}
        className="font-font-heading md:text-[56px] text-[36px] font-semibold leading-[1.07] tracking-[-1.23px] text-graphite"
      >
        Tablet Air
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.2 }}
        className="mt-3 max-w-[640px] font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite"
      >
        Supercharged performance.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.35 }}
        className="mt-5 flex items-center gap-3"
      >
        <PillButton variant="filled">Learn more</PillButton>
        <PillButton variant="outlined" className="border-graphite text-graphite hover:border-graphite hover:text-graphite">Buy</PillButton>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: easings.dramatic, delay: 0.4 }}
        className="relative mt-10 w-full max-w-[65vw] shadow-xl"
        style={{ aspectRatio: "4 / 3", y: imageParallaxY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1682426526490-667d4912b8de?w=1000&q=80"
          alt="Tablet Air"
          fill
          sizes="65vw"
          className="object-contain"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
      </motion.div>
    </section>
  )
}
