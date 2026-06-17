"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useSpring } from "motion/react"

export function CursorGlow() {
  const [mounted, setMounted] = useState(false)
  const prefersReduced = useReducedMotion()
  const glowRef = useRef<HTMLDivElement>(null)

  const springX = useSpring(0, { stiffness: 100, damping: 20, mass: 0.5 })
  const springY = useSpring(0, { stiffness: 100, damping: 20, mass: 0.5 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || prefersReduced) return

    function handleMouseMove(e: MouseEvent) {
      springX.set(e.clientX - 150)
      springY.set(e.clientY - 150)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mounted, prefersReduced, springX, springY])

  if (!mounted || prefersReduced) return null

  return (
    <motion.div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        x: springX,
        y: springY,
        width: 300,
        height: 300,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(41,151,255,0.06) 0%, rgba(41,151,255,0.02) 40%, transparent 70%)",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  )
}
