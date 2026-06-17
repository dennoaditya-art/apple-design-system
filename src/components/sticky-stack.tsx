"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "motion/react"

gsap.registerPlugin(ScrollTrigger)

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
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced || !ref.current) return
    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".stack-card")
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cardEls[cardEls.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        })
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [prefersReduced])

  if (prefersReduced) {
    return (
      <section className="bg-ink px-5 py-[100px]">
        <div className="mx-auto max-w-[980px] space-y-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`rounded-3xl bg-gradient-to-br ${card.gradient} p-10`}
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
    <section ref={ref} className="relative bg-ink">
      {CARDS.map((card, i) => (
        <div
          key={card.title}
          className="stack-card sticky top-0 flex min-h-[100dvh] items-center justify-center px-5 py-20"
        >
          <div
            className={`w-full max-w-[980px] rounded-3xl bg-gradient-to-br ${card.gradient} p-10 md:p-16`}
          >
            <span className="font-sf-pro-text text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-paper/40">
              0{i + 1}
            </span>
            <h3 className="mt-4 font-sf-pro-display text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-paper md:text-[40px]">
              {card.title}
            </h3>
            <p className="mt-3 max-w-[520px] font-sf-pro-text text-[17px] font-light leading-[1.38] tracking-[-0.11px] text-paper/60 md:text-[21px]">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
