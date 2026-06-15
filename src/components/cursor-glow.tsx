"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import { useReducedMotion } from "framer-motion"

export function CursorGlow() {
  const [mounted, setMounted] = useState(false)
  const prefersReduced = useReducedMotion()
  const glowRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  const animate = useCallback(() => {
    const current = pos.current
    const t = target.current

    current.x += (t.x - current.x) * 0.08
    current.y += (t.y - current.y) * 0.08

    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${current.x - 150}px, ${current.y - 150}px)`
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (!mounted || prefersReduced) return

    function handleMouseMove(e: MouseEvent) {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [mounted, prefersReduced, animate])

  if (!mounted || prefersReduced) return null

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        width: 300,
        height: 300,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(41,151,255,0.06) 0%, rgba(41,151,255,0.02) 40%, transparent 70%)",
        transform: "translate(-150px, -150px)",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  )
}
