"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"

// ── Scroll Progress Bar ──────────────────────────────────

interface ScrollProgressBarProps {
  className?: string
}

export function ScrollProgressBar({ className = "" }: ScrollProgressBarProps) {
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll()

  if (prefersReduced) return null

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className={`fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left bg-accent ${className}`}
    />
  )
}

// ── Subtle Image Parallax ─────────────────────────────────
// Use only on images/media, never on full content sections

interface ParallaxImageProps {
  children: React.ReactNode
  className?: string
  /** speed multiplier: 0.1–0.3 recommended */
  speed?: number
}

export function ParallaxImage({ children, className = "", speed = 0.15 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60 * speed, 0, -60 * speed])

  if (prefersReduced) return <div className={className}>{children}</div>

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

// ── Morphing Gradient Background ──────────────────────────
// Very subtle — max opacity 6%, never covers content

interface MorphGradientProps {
  children: React.ReactNode
  className?: string
}

export function MorphGradient({ children, className = "" }: MorphGradientProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const gradient = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [
      "linear-gradient(180deg, rgba(41,151,255,0.02) 0%, transparent 100%)",
      "linear-gradient(180deg, rgba(41,151,255,0.06) 0%, transparent 100%)",
      "linear-gradient(180deg, rgba(41,151,255,0.04) 0%, transparent 100%)",
      "linear-gradient(180deg, rgba(41,151,255,0.02) 0%, transparent 100%)",
    ]
  )

  if (prefersReduced) return <div className={className}>{children}</div>

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ background: gradient }}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}
