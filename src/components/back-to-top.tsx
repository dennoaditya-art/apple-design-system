"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"
import { springs } from "@/lib/motion"

export function BackToTop() {
  const prefersReduced = useReducedMotion()
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [400, 600], [0, 1])
  const y = useTransform(scrollY, [400, 600], [20, 0])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: prefersReduced ? "instant" : "smooth" })
  }

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{ opacity, y }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={springs.snappy}
      className="fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M8 13V3M3 8L8 3L13 8" />
      </svg>
    </motion.button>
  )
}
BackToTop.displayName = "BackToTop"
