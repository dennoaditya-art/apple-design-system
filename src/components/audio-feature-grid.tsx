"use client"

import { motion, useReducedMotion } from "motion/react"
import { StaggerGrid, StaggerItem } from "@/components/reveal"
import { easings, durations } from "@/lib/motion"
import { Waveform, Sliders, Ear, Microphone } from "@phosphor-icons/react"

interface AudioFeature {
  icon: React.ReactNode
  name: string
  description: string
  bgClass?: string
}

const FEATURES: AudioFeature[] = [
  { icon: <Waveform size={28} weight="duotone" />, name: "Adaptive Audio", description: "Dynamically blends Transparency and Noise Cancellation based on your environment.", bgClass: "bg-gradient-to-br from-paper to-paper" },
  { icon: <Sliders size={28} weight="duotone" />, name: "Personalized Volume", description: "Learns your listening preferences over time and adjusts volume automatically.", bgClass: "bg-gradient-to-br from-paper to-blue-50/80" },
  { icon: <Ear size={28} weight="duotone" />, name: "Conversation Awareness", description: "Lowers music volume when you start speaking, then brings it back up.", bgClass: "bg-gradient-to-br from-paper to-indigo-50/80" },
  { icon: <Microphone size={28} weight="duotone" />, name: "Voice Isolation", description: "Advanced algorithm filters out background noise so your voice comes through loud and clear.", bgClass: "bg-gradient-to-br from-paper to-sky-50/80" },
]

export function AudioFeatureGrid() {
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
          Sound intelligence.
        </motion.h2>
        <motion.p
          initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.12 }}
          className="mt-2 text-center font-sf-pro-text text-[17px] font-light leading-[1.47] tracking-[-0.05px] text-fog"
        >
          AirPods Pro adapt to you and your environment in real time.
        </motion.p>

        <StaggerGrid className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {FEATURES.map((f) => (
            <StaggerItem key={f.name}>
              <div className={`flex items-start gap-5 rounded-[12px] ${f.bgClass} p-6 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-lg`}>
                <div className="shrink-0 rounded-[10px] bg-graphite/[0.04] p-3 text-graphite/70">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-sf-pro-text text-[17px] font-semibold leading-[1.24] text-graphite">{f.name}</h3>
                  <p className="mt-1 font-sf-pro-text text-[14px] font-normal leading-[1.43] text-fog">{f.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
