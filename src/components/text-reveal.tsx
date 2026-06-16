"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useInView } from "framer-motion"
import { easings, durations } from "@/lib/motion"

interface TextRevealProps {
  children: string
  className?: string
  style?: React.CSSProperties
  delay?: number
  as?: "h1" | "h2" | "h3" | "p" | "span"
  wordDelay?: number
}

export function TextReveal({
  children,
  className = "",
  style: _style,
  delay = 0,
  as: Tag = "p",
  wordDelay = 0.04,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const prefersReduced = useReducedMotion()

  const words = children.split(" ")

  if (prefersReduced) {
    return <Tag className={className} style={_style}>{children}</Tag>
  }

  return (
    <Tag className={className} style={_style} aria-label={children}>
      <span ref={ref}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : { y: "100%" }}
              transition={{
                duration: durations.slow,
                ease: easings.dramatic,
                delay: delay + i * wordDelay,
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  )
}
