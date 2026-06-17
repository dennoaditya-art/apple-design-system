"use client"

import { motion, useReducedMotion } from "motion/react"
import { StaggerGrid, StaggerItem } from "@/components/reveal"
import { easings, durations } from "@/lib/motion"
import { Heart, Compass, Timer, Waveform } from "@phosphor-icons/react"

interface LifestyleFeature {
  icon: React.ReactNode
  name: string
  description: string
  bgClass?: string
}

const FEATURES: LifestyleFeature[] = [
  { icon: <Heart size={28} weight="duotone" />, name: "Health Monitoring", description: "ECG, blood oxygen, temperature sensing", bgClass: "bg-gradient-to-br from-paper to-rose-50/60" },
  { icon: <Compass size={28} weight="duotone" />, name: "Outdoor GPS", description: "Precision dual-frequency GPS with maps", bgClass: "bg-gradient-to-br from-paper to-emerald-50/60" },
  { icon: <Timer size={28} weight="duotone" />, name: "Endurance", description: "Up to 36 hours of battery life", bgClass: "bg-gradient-to-br from-paper to-amber-50/60" },
  { icon: <Waveform size={28} weight="duotone" />, name: "Action Button", description: "Customizable shortcut for your workouts", bgClass: "bg-gradient-to-br from-paper to-blue-50/60" },
]

export function LifestyleShowcase() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="bg-cloud px-5 py-[80px]">
      <div className="mx-auto max-w-[980px]">
        <motion.h2
          initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durations.hero, ease: easings.dramatic }}
          className="text-center font-sf-pro-display md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite"
        >
          Built for the elements.
        </motion.h2>
        <motion.p
          initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.12 }}
          className="mt-2 text-center font-sf-pro-text text-[17px] font-light leading-[1.47] tracking-[-0.05px] text-fog"
        >
          Designed to withstand extreme environments.
        </motion.p>

        <StaggerGrid className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          <StaggerItem>
            <div className="flex flex-col gap-5">
              {FEATURES.slice(0, 2).map((f) => (
                <div key={f.name} className={`flex items-start gap-5 rounded-xl ${f.bgClass} p-6 shadow-xl`}>
                  <div className="shrink-0 text-graphite/70">{f.icon}</div>
                  <div>
                    <h3 className="font-sf-pro-text text-[17px] font-semibold leading-[1.24] text-graphite">{f.name}</h3>
                    <p className="mt-1 font-sf-pro-text text-[14px] font-normal leading-[1.43] text-fog">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col gap-5">
              {FEATURES.slice(2).map((f) => (
                <div key={f.name} className={`flex items-start gap-5 rounded-xl ${f.bgClass} p-6 shadow-xl`}>
                  <div className="shrink-0 text-graphite/70">{f.icon}</div>
                  <div>
                    <h3 className="font-sf-pro-text text-[17px] font-semibold leading-[1.24] text-graphite">{f.name}</h3>
                    <p className="mt-1 font-sf-pro-text text-[14px] font-normal leading-[1.43] text-fog">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>
        </StaggerGrid>
      </div>
    </section>
  )
}
