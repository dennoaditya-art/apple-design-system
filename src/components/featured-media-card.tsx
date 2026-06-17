"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { StaggerGrid, StaggerItem } from "@/components/reveal"
import { easings, durations } from "@/lib/motion"
import { Play, CaretRight } from "@phosphor-icons/react"

interface ShowProps {
  name: string
  tagline: string
  imageSrc: string
}

const SHOWS: ShowProps[] = [
  {
    name: "Severance",
    tagline: "A workplace thriller like no other.",
    imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  },
  {
    name: "Ted Lasso",
    tagline: "Believe in the power of optimism.",
    imageSrc: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&q=80",
  },
  {
    name: "Foundation",
    tagline: "The fate of the galaxy awaits.",
    imageSrc: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80",
  },
  {
    name: "Monarch",
    tagline: "Legacy of monsters begins.",
    imageSrc: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&q=80",
  },
]

export function FeaturedMediaCard() {
  const prefersReduced = useReducedMotion()
  return (
    <section className="bg-cloud px-5 py-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: durations.slow, ease: easings.easeOut }}
          className="mb-8 text-center"
        >
          <p className="font-sf-pro-text text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">
            Apple TV+
          </p>
          <h2 className="mt-1 font-sf-pro-display md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite">
            Watch now
          </h2>
        </motion.div>

        <motion.a
              href="/tv"
              aria-label="Watch Silo, a dystopian mystery in the bunker"
          initial={prefersReduced ? undefined : { opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={prefersReduced ? { duration: 0 } : { duration: durations.slow, ease: easings.dramatic }}
          className="group relative mb-8 block overflow-hidden rounded-md shadow-xl"
          style={{ aspectRatio: "2 / 1" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80"
            alt="Poster for Silo"
            fill
            sizes="(max-width: 800px) 100vw, 800px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute right-8 top-8 flex h-7 w-7 items-center justify-center rounded-lg bg-white">
            <Play size={14} weight="fill" className="text-graphite" />
          </div>
          <div className="absolute bottom-8 left-8 right-8 flex items-end gap-5">
            <span className="inline-flex shrink-0 items-center rounded-full border border-paper px-[15px] py-[8px] font-sf-pro-text text-[14px] text-paper transition-opacity group-hover:opacity-60">
              Stream now
            </span>
            <div>
              <h3 className="font-sf-pro-display md:text-[28px] text-[22px] font-semibold leading-[1.14] tracking-[-0.28px] text-paper">
                Silo
              </h3>
              <p className="mt-0.5 font-sf-pro-text text-[14px] font-light leading-[1.43] text-paper/80">
                A dystopian mystery in the bunker.
              </p>
            </div>
          </div>
        </motion.a>

        <StaggerGrid className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {SHOWS.map((show) => (
            <StaggerItem key={show.name}>
              <a
                href="/tv"
                className="group block overflow-hidden rounded-md bg-paper shadow-xl transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative" style={{ aspectRatio: "3 / 4" }}>
                  <Image
                    src={show.imageSrc}
                    alt={show.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 280px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-4">
                  <h4 className="font-sf-pro-text text-[15px] font-semibold leading-[1.24] text-graphite">
                    {show.name}
                  </h4>
                  <p className="mt-0.5 font-sf-pro-text text-[12px] font-light leading-[1.33] text-fog">
                    {show.tagline}
                  </p>
                  <span className="mt-2 inline-block font-sf-pro-text text-[12px] font-normal leading-[1.33] text-apple-blue transition-all group-hover:translate-x-0.5">
                    Stream now <CaretRight size={12} weight="bold" className="inline" />
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
