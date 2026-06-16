"use client"

import { useEffect, useRef } from "react"
import { motion, useReducedMotion, useSpring, useTransform, useInView } from "framer-motion"

interface MotionNumberProps {
  from?: number
  to: number
  duration?: number
  delay?: number
  className?: string
  format?: boolean
  suffix?: string
  prefix?: string
}

export function MotionNumber({
  from = 0,
  to,
  duration = 1.5,
  delay = 0,
  className = "",
  format = true,
  suffix = "",
  prefix = "",
}: MotionNumberProps) {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  const springValue = useSpring(from, {
    duration: prefersReduced ? 0 : duration * 1000,
    bounce: 0.15,
  })

  const displayValue = useTransform(springValue, (v) => {
    const rounded = Math.round(v)
    return format ? rounded.toLocaleString() : String(rounded)
  })

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        springValue.set(to)
      }, delay * 1000)
      return () => clearTimeout(timeout)
    }
  }, [inView, to, delay, springValue])

  if (prefersReduced) {
    return (
      <span className={className}>
        {prefix}
        {format ? to.toLocaleString() : to}
        {suffix}
      </span>
    )
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  )
}
