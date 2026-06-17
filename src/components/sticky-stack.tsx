"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"

interface StackCard {
  title: string
  description: string
  gradient: string
}

const CARDS: StackCard[] = [
  {
    title: "A17 Pro chip",
    description: "Groundbreaking performance powers gaming, creativity, and productivity.",
    gradient: "from-indigo-950 via-indigo-900 to-indigo-800",
  },
  {
    title: "Pro camera system",
    description: "48 MP Main | Ultra Wide | Telephoto. Pro-level photo and video.",
    gradient: "from-zinc-950 via-zinc-900 to-zinc-800",
  },
  {
    title: "All-day battery",
    description: "Up to 29 hours of video playback. Fast charging with USB-C.",
    gradient: "from-stone-950 via-stone-900 to-stone-800",
  },
]

export function StickyStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return (
      <section className="bg-ink px-5 py-[100px]">
        <div className="mx-auto max-w-[980px] space-y-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`rounded-[20px] bg-gradient-to-br ${card.gradient} p-10`}
            >
              <h3 className="font-sf-pro-display text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-paper">
                {card.title}
              </h3>
              <p className="mt-2 max-w-[480px] font-sf-pro-text text-[17px] font-light leading-[1.47] text-paper/70">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section ref={containerRef} className="relative bg-ink">
      {CARDS.map((card, i) => (
        <StackCardItem
          key={card.title}
          card={card}
          index={i}
          total={CARDS.length}
          containerRef={containerRef}
        />
      ))}
    </section>
  )
}

function StackCardItem({
  card,
  index,
  total,
  containerRef,
}: {
  card: StackCard
  index: number
  total: number
  containerRef: React.RefObject<HTMLDivElement | null>
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isLast = index === total - 1

  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: containerRef,
    offset: isLast ? undefined : ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], isLast ? [1, 1] : [1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.5])

  return (
    <div
      ref={cardRef}
      className="sticky top-0 flex min-h-[100dvh] items-center justify-center px-5 py-20"
    >
      <motion.div
        style={{ scale, opacity }}
        className={`w-full max-w-[980px] rounded-[20px] bg-gradient-to-br ${card.gradient} p-10 md:p-16`}
      >
        <span className="font-sf-pro-text text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-paper/40">
          0{index + 1}
        </span>
        <h3 className="mt-4 font-sf-pro-display md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-paper">
          {card.title}
        </h3>
        <p className="mt-3 max-w-[520px] font-sf-pro-text md:text-[21px] text-[17px] font-light leading-[1.38] tracking-[-0.11px] text-paper/60">
          {card.description}
        </p>
      </motion.div>
    </div>
  )
}
