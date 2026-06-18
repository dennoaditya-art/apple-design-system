"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"

interface ScrollParallaxProps {
  children: React.ReactNode
  offset?: number
  opacityRange?: [number, number]
  scaleRange?: [number, number]
  className?: string
}

export function ScrollParallax({
  children,
  offset = 50,
  opacityRange,
  scaleRange,
  className,
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [offset, 0, -offset])
  const opacity = opacityRange
    ? useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [opacityRange[0], 1, 1, opacityRange[1]])
    : undefined
  const scale = scaleRange
    ? useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], scaleRange[1], scaleRange[0]])
    : undefined

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className={`${className} relative h-full w-full`}
    >
      {children}
    </motion.div>
  )
}
ScrollParallax.displayName = "ScrollParallax"
