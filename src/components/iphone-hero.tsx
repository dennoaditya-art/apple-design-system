"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { PillButton } from "@/components/pill-button"
import { easings, durations } from "@/lib/motion"

export function IPhoneHero() {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [80, -80])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])
  const bgParallax = useTransform(scrollYProgress, [0, 1], [0, -60])

  if (prefersReduced) {
    return (
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-paper px-5 pb-0 pt-[80px] text-center">
        <h1 className="font-sf-pro-display md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
          iPhone 16 Pro
        </h1>
        <p className="mt-3 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
          Built for Apple Intelligence.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <PillButton variant="filled" href="/iphone">Learn more</PillButton>
          <PillButton variant="outlined" href="/store">Buy</PillButton>
        </div>
        <div className="relative mt-12 w-full max-w-[400px]">
          <div className="relative overflow-hidden shadow-xl">
            <div className="relative" style={{ aspectRatio: "9 / 16" }}>
              <Image
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80"
                alt="iPhone 16 Pro"
                fill
                sizes="(max-width: 400px) 100vw, 400px"
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
    <section ref={ref} className="relative flex flex-col items-center justify-center overflow-hidden bg-paper px-5 pb-0 pt-[80px] text-center">
      <motion.div
        style={{ y: bgParallax }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-apple-blue/3 to-transparent"
        aria-hidden="true"
      />

      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: durations.hero, ease: easings.dramatic }}
        className="font-sf-pro-display md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite"
      >
        iPhone 16 Pro
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.2 }}
        className="mt-3 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite"
      >
        Built for Apple Intelligence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.35 }}
        className="mt-6 flex items-center gap-3"
      >
        <PillButton variant="filled" href="/iphone">Learn more</PillButton>
        <PillButton variant="outlined" href="/store">Buy</PillButton>
      </motion.div>

      <div className="relative mt-12 w-full max-w-[400px]" style={{ perspective: 1000 }}>
        <motion.div
          initial={{ y: 250, rotateY: 40, scale: 0.85, opacity: 0 }}
          animate={{ y: 0, rotateY: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.4, ease: easings.dramatic }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div className="relative h-full w-full" style={{ y: imageParallaxY, scale: imageScale }}>
            <div className="relative overflow-hidden shadow-xl">
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                className="relative"
                style={{ aspectRatio: "9 / 16" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80"
                  alt="iPhone 16 Pro"
                  fill
                  sizes="(max-width: 400px) 100vw, 400px"
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />

                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0) 100%)",
                      "linear-gradient(225deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0) 100%)",
                      "linear-gradient(315deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0) 100%)",
                      "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0) 100%)",
                    ],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                  className="pointer-events-none absolute inset-0"
                />

                <motion.div
                  animate={{ opacity: [0, 0.06, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                  className="pointer-events-none absolute -inset-4 bg-gradient-to-b from-white/0 via-white/[0.02] to-white/0 blur-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute -inset-4 rounded-full bg-gradient-to-b from-transparent via-transparent to-black/5 blur-2xl"
          style={{ transform: "translateY(40px)" }}
        />
      </div>
    </section>
  )
}
