"use client"

import { motion, useReducedMotion } from "motion/react"
import { StaggerGrid, StaggerItem } from "@/components/reveal"
import { easings, durations } from "@/lib/motion"
import {
  MusicNote,
  GameController,
  Heart,
  Newspaper,
  Cloud,
  Television,
  BookOpen,
  MapPin,
  CaretRight,
} from "@phosphor-icons/react"

interface ServiceProps {
  name: string
  tagline: string
  icon: React.ReactNode
}

interface ServiceProps {
  name: string
  tagline: string
  icon: React.ReactNode
  cardClass?: string
}

const SERVICES: ServiceProps[] = [
  {
    name: "Apple Music",
    tagline: "65 million songs. 3 months free.",
    icon: <MusicNote size={28} weight="regular" />,
    cardClass: "bg-gradient-to-br from-paper to-paper via-paper",
  },
  {
    name: "Apple Arcade",
    tagline: "Over 200 games. No ads. No in-app purchases.",
    icon: <GameController size={28} weight="regular" />,
    cardClass: "bg-gradient-to-br from-paper to-sky-50/60",
  },
  {
    name: "Apple Fitness+",
    tagline: "Studio workouts from home.",
    icon: <Heart size={28} weight="regular" />,
    cardClass: "bg-gradient-to-br from-paper to-rose-50/60",
  },
  {
    name: "Apple News+",
    tagline: "Leading stories. Curated for you.",
    icon: <Newspaper size={28} weight="regular" />,
    cardClass: "bg-gradient-to-br from-paper to-amber-50/60",
  },
  {
    name: "iCloud+",
    tagline: "Store, sync, and share securely.",
    icon: <Cloud size={28} weight="regular" />,
    cardClass: "bg-gradient-to-br from-paper to-blue-50/60",
  },
  {
    name: "Apple TV+",
    tagline: "Original stories from the best minds.",
    icon: <Television size={28} weight="regular" />,
    cardClass: "bg-gradient-to-br from-paper to-indigo-50/60",
  },
  {
    name: "Apple Books",
    tagline: "Millions of books. Yours to discover.",
    icon: <BookOpen size={28} weight="regular" />,
    cardClass: "bg-gradient-to-br from-paper to-orange-50/60",
  },
  {
    name: "Apple Maps",
    tagline: "Explore the world around you.",
    icon: <MapPin size={28} weight="regular" />,
    cardClass: "bg-gradient-to-br from-paper to-emerald-50/60",
  },
]

export function MediaCardGrid() {
  const prefersReduced = useReducedMotion()
  return (
    <section className="bg-cloud px-5 py-[80px]">
      <div className="mx-auto max-w-[980px]">
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: durations.hero, ease: easings.dramatic }}
          className="mb-10 text-center"
        >
          <h2 className="font-sf-pro-display md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite">
            More from Apple
          </h2>
          <p className="mt-2 font-sf-pro-text text-[17px] font-light leading-[1.47] tracking-[-0.05px] text-fog">
            Discover services that power your digital life.
          </p>
        </motion.div>

        <StaggerGrid className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {SERVICES.map((service) => (
            <StaggerItem key={service.name}>
              <a
                href="/store"
                className={`group flex h-full flex-col rounded-[8px] ${service.cardClass} p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-lg`}
              >
                <motion.div
                  className="text-graphite transition-colors group-hover:text-apple-blue"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="mt-4 font-sf-pro-text text-[17px] font-semibold leading-[1.24] text-graphite">
                  {service.name}
                </h3>
                <p className="mt-1 font-sf-pro-text text-[14px] font-normal leading-[1.43] text-fog">
                  {service.tagline}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 font-sf-pro-text text-[14px] font-normal leading-[1.43] text-apple-blue transition-all group-hover:translate-x-0.5">
                  Learn more
                  <CaretRight size={14} weight="bold" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
