"use client"

import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"
import { StaggerGrid, StaggerItem } from "@/components/reveal"
import { easings, durations } from "@/lib/motion"
import { PencilSimple, Keyboard, AppWindow, LinkSimple, CaretRight } from "@phosphor-icons/react"

interface ActionItem {
  icon: React.ReactNode
  name: string
  description: string
}

const ACTIONS: ActionItem[] = [
  { icon: <PencilSimple size={24} weight="duotone" />, name: "Pencil Pro", description: "Pixel-perfect precision with squeeze, barrel roll, and haptic feedback." },
  { icon: <Keyboard size={24} weight="duotone" />, name: "Magic Keyboard", description: "Floating design with trackpad, backlit keys, and USB-C passthrough." },
  { icon: <AppWindow size={24} weight="duotone" />, name: "Stage Manager", description: "Organize apps in overlapping windows for effortless multitasking." },
  { icon: <LinkSimple size={24} weight="duotone" />, name: "Continuity", description: "Seamlessly connect across all your devices." },
]

export function ProductActionGrid() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="bg-paper px-5 py-[80px]">
      <div className="mx-auto max-w-[980px]">
        <motion.h2
          initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durations.hero, ease: easings.dramatic }}
          className="text-center font-font-heading md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-ink"
        >
          Your computer. Not a computer.
        </motion.h2>
        <motion.p
          initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.12 }}
          className="mt-2 text-center font-font-body text-[17px] font-light leading-[1.47] tracking-[-0.05px] text-graphite"
        >
          A creative powerhouse for work and play.
        </motion.p>

        <StaggerGrid className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {ACTIONS.map((item) => (
            <StaggerItem key={item.name}>
              <div className="flex gap-4 rounded-xl border border-silver bg-fog p-6 transition-all hover:border-accent/20 hover:shadow-md">
                <div className="shrink-0 text-ink/60">{item.icon}</div>
                <div>
                  <h3 className="font-font-body text-[17px] font-semibold leading-[1.24] text-ink">{item.name}</h3>
                  <p className="mt-1 font-font-body text-[14px] font-normal leading-[1.43] text-graphite">{item.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/store"
            className="inline-flex items-center gap-1.5 font-font-body text-[17px] font-normal leading-[1.47] text-accent transition-all hover:text-accent-dark"
          >
            Explore tablet accessories <CaretRight size={14} weight="bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
ProductActionGrid.displayName = "ProductActionGrid"
