"use client"

import { motion, useReducedMotion } from "motion/react"
import { easings, durations } from "@/lib/motion"
import { Cpu, Lightning, Cube, Gauge } from "@phosphor-icons/react"

interface SpecItem {
  icon: React.ReactNode
  name: string
  description: string
}

const SPECS: SpecItem[] = [
  { icon: <Cpu size={28} weight="duotone" />, name: "M4 Max", description: "Up to 16-core CPU, 40-core GPU, 16-core Neural Engine" },
  { icon: <Lightning size={28} weight="duotone" />, name: "Battery", description: "Up to 24 hours of battery life" },
  { icon: <Cube size={28} weight="duotone" />, name: "Memory", description: "Up to 128 GB unified memory" },
  { icon: <Gauge size={28} weight="duotone" />, name: "Performance", description: "3.5x faster than M2 Max" },
]

export function ProductSpecGrid() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="bg-ink px-5 py-[100px]">
      <div className="mx-auto max-w-[1100px]">
        <motion.h2
          initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durations.hero, ease: easings.dramatic }}
          className="font-sf-pro-display md:text-[48px] text-[32px] font-semibold leading-[1.08] tracking-[-0.8px] text-paper"
        >
          Pro performance <br />redefined.
        </motion.h2>

        <motion.p
          initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.12 }}
          className="mt-3 max-w-[560px] font-sf-pro-text text-[17px] font-light leading-[1.47] tracking-[-0.05px] text-ash"
        >
          The most powerful chip ever created for a personal computer.
        </motion.p>

        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
          {SPECS.map((spec, i) => (
            <motion.div
              key={spec.name}
              initial={prefersReduced ? undefined : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: easings.easeOut }}
              className="rounded-[16px] border border-paper/10 bg-paper/5 p-6"
            >
              <div className="text-paper/80">{spec.icon}</div>
              <h3 className="mt-4 font-sf-pro-display text-[20px] font-semibold leading-[1.2] tracking-[-0.3px] text-paper">
                {spec.name}
              </h3>
              <p className="mt-1.5 font-sf-pro-text text-[14px] font-normal leading-[1.5] text-ash">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
