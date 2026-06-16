"use client"

import { motion, useReducedMotion } from "framer-motion"
import { easings, durations, fadeIn } from "@/lib/motion"
import type { Direction } from "@/types"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: Direction
  distance?: number
  duration?: keyof typeof durations
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  duration = "slow",
}: RevealProps) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  const variants = fadeIn(direction, distance)

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { duration: durations[duration], ease: easings.easeOut, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerGridProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  direction?: Direction
}

export function StaggerGrid({
  children,
  className = "",
  staggerDelay = 0.1,
  direction: _direction = "up",
}: StaggerGridProps) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  /** 0=fade, 1=fade+slide, 2=scale, 3=blur */
  variant?: 0 | 1 | 2 | 3
  direction?: Direction
}

export function StaggerItem({
  children,
  className = "",
  variant = 1,
  direction = "up",
}: StaggerItemProps) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  const variants = {
    hidden:
      variant === 0
        ? { opacity: 0 }
        : variant === 2
          ? { opacity: 0, scale: 0.92 }
          : variant === 3
            ? { opacity: 0, y: 20, filter: "blur(6px)" }
            : { opacity: 0, x: direction === "right" ? 20 : direction === "left" ? -20 : 0, y: direction === "up" ? 20 : direction === "down" ? -20 : 0 },
    visible:
      variant === 0
        ? { opacity: 1, transition: { duration: durations.normal, ease: easings.easeOut } }
        : variant === 2
          ? { opacity: 1, scale: 1, transition: { duration: durations.normal, ease: easings.elastic } }
          : variant === 3
            ? { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: durations.slow, ease: easings.dramatic } }
            : { opacity: 1, x: 0, y: 0, transition: { duration: durations.slow, ease: easings.easeOut } },
  }

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}
