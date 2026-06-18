"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { easings, durations } from "@/lib/motion"
import { ArrowRight } from "@phosphor-icons/react"

const FEATURES = [
  {
    title: "Titanium design",
    desc: "Grade 5 titanium — strong yet light.",
    src: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80",
  },
  {
    title: "Pro camera",
    desc: "48 MP Fusion with 5x optical zoom.",
    src: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
  },
  {
    title: "Next-gen chip",
    desc: "3nm processor with 16-core Neural Engine.",
    src: "https://images.unsplash.com/photo-1726732946451-98690db97aae?w=400&q=80",
  },
]

export function PhoneShowcase() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="bg-fog px-5 py-[80px] md:py-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.h2
              initial={prefersReduced ? undefined : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: durations.hero, ease: easings.dramatic }}
              className="font-font-heading text-[36px] font-bold leading-[1.05] tracking-[-0.8px] text-ink md:text-[48px]"
            >
              Phones built to last.
            </motion.h2>
            <motion.p
              initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.12 }}
              className="mt-4 max-w-[440px] font-font-body text-[17px] leading-[1.6] text-graphite"
            >
              Every detail engineered for performance. Titanium frame, pro-grade camera system, and a display that sets the standard.
            </motion.p>
            <motion.div
              initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.25 }}
              className="mt-6"
            >
              <Link
                href="/phones"
                className="inline-flex items-center gap-2 font-font-body text-[15px] font-semibold text-accent transition-all hover:gap-3"
              >
                View all phones <ArrowRight size={16} weight="bold" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: durations.slow, ease: easings.easeOut, delay: 0.1 * i }}
                className={`group relative overflow-hidden rounded-xl bg-paper shadow-sm transition-all hover:shadow-md ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <div className="relative" style={{ aspectRatio: i === 0 ? "4 / 3" : "1 / 1" }}>
                  <Image
                    src={f.src}
                    alt={f.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 280px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-font-body text-[15px] font-semibold text-paper">{f.title}</h3>
                    <p className="mt-0.5 font-font-body text-[13px] text-paper/80">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
PhoneShowcase.displayName = "PhoneShowcase"
