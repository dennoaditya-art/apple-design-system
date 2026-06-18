"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "motion/react"
import Image from "next/image"

export interface PanPanel {
  src: string
  alt: string
  title: string
  description: string
  eyebrow?: string
}

interface HorizontalPanProps {
  panels: PanPanel[]
  bgClass?: string
}

export function HorizontalPan({ panels, bgClass = "bg-ink" }: HorizontalPanProps) {
  const wrap = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (prefersReduced || !wrap.current || !track.current) return

    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth

      if (distance <= 0) return

      gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      ScrollTrigger.refresh()
    }, wrap)

    return () => ctx.revert()
  }, [prefersReduced])

  if (prefersReduced) {
    return (
      <section className={`px-5 py-[80px] ${bgClass}`}>
        <div className="mx-auto max-w-[980px] space-y-16">
          {panels.map((panel) => (
            <div key={panel.title} className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-800/60 md:w-1/2" style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src={panel.src}
                  alt={panel.alt}
                  fill
                  className="object-contain p-4"
                  sizes="50vw"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                {panel.eyebrow && (
                  <span className="font-font-body text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-paper/40">
                    {panel.eyebrow}
                  </span>
                )}
                <h3 className="mt-2 font-font-heading text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-paper">
                  {panel.title}
                </h3>
                <p className="mt-2 font-font-body text-[17px] font-light leading-[1.47] text-paper/60">
                  {panel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section ref={wrap} className={`relative overflow-hidden ${bgClass}`}>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-ink via-transparent to-ink" />
      <div ref={track} className="flex h-[100dvh] items-center">
        {panels.map((panel, idx) => (
          <div
            key={panel.title}
            className="relative flex h-full w-screen shrink-0 items-center justify-center px-8 md:px-20"
          >
            <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 md:flex-row md:gap-20">
              <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-800/40 md:w-1/2" style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src={panel.src}
                  alt={panel.alt}
                  fill
                  className="object-contain p-6"
                  sizes="50vw"
                  priority={idx === 0}
                />
              </div>
              <div className="md:w-1/2">
                {panel.eyebrow && (
                  <span className="font-font-body text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-paper/30">
                    {panel.eyebrow}
                  </span>
                )}
                <h3 className="mt-2 font-font-heading text-[32px] font-semibold leading-[1.1] tracking-[-0.6px] text-paper md:text-[48px]">
                  {panel.title}
                </h3>
                <p className="mt-3 max-w-[400px] font-font-body text-[17px] font-light leading-[1.47] text-paper/50 md:text-[21px]">
                  {panel.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <span className="font-font-body text-[11px] uppercase tracking-[0.15em] text-paper/30">
          Scroll &rarr;
        </span>
      </div>
    </section>
  )
}
HorizontalPan.displayName = "HorizontalPan"
