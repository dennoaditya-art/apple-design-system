"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Image from "next/image"
import { PillButton } from "@/components/pill-button"
import { easings, durations } from "@/lib/motion"

interface LaptopHeroProps {
  as?: "h1" | "h2"
}

export function LaptopHero({ as: Heading = "h2" }: LaptopHeroProps) {
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
      <section className="relative overflow-hidden bg-paper px-5 py-[80px]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <div className="text-left">
            <Heading className="font-font-heading md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
              Laptop Pro
            </Heading>
            <p className="mt-3 max-w-[440px] font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-fog">
              Built for the impossible.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <PillButton variant="filled" href="/laptops">Learn more</PillButton>
              <PillButton variant="outlined" href="/store">Buy</PillButton>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xs shadow-xl">
            <div className="relative" style={{ aspectRatio: "3 / 2" }}>
              <Image
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80"
                alt="MacBook Pro with M4 Max"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="relative overflow-hidden bg-paper px-5 py-[80px]">
      <motion.div
        style={{ y: bgParallax }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/2 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: durations.hero, ease: easings.dramatic }}
          >
            <Heading className="font-font-heading md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
              Laptop Pro
            </Heading>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.15 }}
            className="mt-3 max-w-[440px] font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-fog"
          >
            Built for the impossible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.3 }}
            className="mt-6 flex items-center gap-3"
          >
            <PillButton variant="filled" href="/laptops">Learn more</PillButton>
            <PillButton variant="outlined" href="/store">Buy</PillButton>
          </motion.div>
        </div>

        <div className="relative" style={{ perspective: 1200 }}>
          <motion.div
            initial={{ rotateY: -45, opacity: 0, x: 60 }}
            whileInView={{ rotateY: 0, opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, delay: 0.2, ease: easings.dramatic }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div className="relative h-full w-full" style={{ y: imageParallaxY }}>
              <div className="relative overflow-hidden rounded-xs shadow-xl">
                <div className="relative" style={{ aspectRatio: "3 / 2" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80"
                alt="Laptop Pro"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
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
