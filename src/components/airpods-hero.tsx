"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { PillButton } from "@/components/pill-button"

interface AirPodsHeroProps {
  as?: "h1" | "h2"
}

export function AirPodsHero({ as: Heading = "h2" }: AirPodsHeroProps) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return (
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-paper px-5 pb-0 pt-[80px] text-center">
        <Heading className="font-sf-pro-display md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
          AirPods Pro 2
        </Heading>
        <p className="mt-3 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
          Sound the way it was meant to be.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <PillButton variant="filled">Learn more</PillButton>
          <PillButton variant="outlined">Buy</PillButton>
        </div>
        <div className="relative mt-12 w-full max-w-[400px]">
          <div className="relative overflow-hidden shadow-xl" style={{ aspectRatio: "1 / 1" }}>
            <Image
              src="https://images.unsplash.com/photo-1631172220668-5675a45f19fc?w=600&q=80"
              alt="AirPods Pro 2 with charging case"
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
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-paper px-5 pb-0 pt-[80px] text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Heading className="font-sf-pro-display md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
          AirPods Pro 2
        </Heading>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-3 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite"
      >
        Sound the way it was meant to be.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-6 flex items-center gap-3"
      >
        <PillButton variant="filled">Learn more</PillButton>
        <PillButton variant="outlined">Buy</PillButton>
      </motion.div>

      <div className="relative mt-12 w-full max-w-[400px]">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, -2, 0, 2, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="relative overflow-hidden rounded-[8px] shadow-xl"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1631172220668-5675a45f19fc?w=600&q=80"
              alt="AirPods Pro 2 with charging case"
              fill
              sizes="(max-width: 400px) 100vw, 400px"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
            <motion.div
              animate={{ opacity: [0, 0.05, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/[0.03] to-white/0"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
