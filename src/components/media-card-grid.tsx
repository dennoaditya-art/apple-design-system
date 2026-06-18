"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
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
  imageSrc: string
}

const SERVICES: ServiceProps[] = [
  {
    name: "Music+",
    tagline: "65 million songs. 3 months free.",
    icon: <MusicNote size={24} weight="regular" />,
    imageSrc: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
  },
  {
    name: "Arcade+",
    tagline: "Over 200 games. No ads. No in-app purchases.",
    icon: <GameController size={24} weight="regular" />,
    imageSrc: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&q=80",
  },
  {
    name: "Fitness+",
    tagline: "Studio workouts from home.",
    icon: <Heart size={24} weight="regular" />,
    imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
  },
  {
    name: "News+",
    tagline: "Leading stories. Curated for you.",
    icon: <Newspaper size={24} weight="regular" />,
    imageSrc: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&q=80",
  },
  {
    name: "Cloud+",
    tagline: "Store, sync, and share securely.",
    icon: <Cloud size={24} weight="regular" />,
    imageSrc: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&q=80",
  },
  {
    name: "Stream+",
    tagline: "Original stories from the best minds.",
    icon: <Television size={24} weight="regular" />,
    imageSrc: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
  },
  {
    name: "Books+",
    tagline: "Millions of books. Yours to discover.",
    icon: <BookOpen size={24} weight="regular" />,
    imageSrc: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80",
  },
  {
    name: "Maps+",
    tagline: "Explore the world around you.",
    icon: <MapPin size={24} weight="regular" />,
    imageSrc: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80",
  },
]

export function MediaCardGrid() {
  const prefersReduced = useReducedMotion()
  return (
    <section className="bg-fog px-5 py-[80px]">
      <div className="mx-auto max-w-[980px]">
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: durations.hero, ease: easings.dramatic }}
          className="mb-10 text-center"
        >
          <h2 className="font-font-heading md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-ink">
            More from Nova
          </h2>
          <p className="mt-2 font-font-body text-[17px] font-light leading-[1.47] tracking-[-0.05px] text-graphite">
            Discover services that power your digital life.
          </p>
        </motion.div>

        <StaggerGrid className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {SERVICES.map((service) => (
            <StaggerItem key={service.name}>
              <Link
                href="/store"
                className="group relative flex h-full flex-col overflow-hidden rounded-md bg-paper shadow-sm transition-all hover:-translate-y-1 hover:shadow-md active:scale-[0.98] active:transition-transform active:duration-75"
              >
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
                  <Image
                    src={service.imageSrc}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 240px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <motion.div
                    className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm backdrop-blur-sm transition-colors group-hover:text-accent"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-font-body text-[15px] font-semibold leading-[1.24] text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-1 font-font-body text-[13px] font-normal leading-[1.38] text-graphite">
                    {service.tagline}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-3 font-font-body text-[13px] font-normal leading-[1.38] text-accent transition-all group-hover:translate-x-0.5">
                    Learn more
                    <CaretRight size={12} weight="bold" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
MediaCardGrid.displayName = "MediaCardGrid"
