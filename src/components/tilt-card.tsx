"use client"

import { useRef, useState, type ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface TiltCardProps {
  children: ReactNode
  className?: string
  tiltDegree?: number
  glare?: boolean
  perspective?: number
  scale?: number
}

export function TiltCard({
  children,
  className = "",
  tiltDegree = 5,
  glare = true,
  perspective = 1000,
  scale = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glareOpacity, setGlareOpacity] = useState(0)
  const [glareAngle, setGlareAngle] = useState(0)

  function handleMouseMove(e: React.MouseEvent) {
    if (prefersReduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    const rotY = (mouseX / (rect.width / 2)) * tiltDegree
    const rotX = -(mouseY / (rect.height / 2)) * tiltDegree

    setRotate({ x: rotX, y: rotY })
    setGlareOpacity(Math.min(1, (Math.abs(mouseX) + Math.abs(mouseY)) / (rect.width + rect.height) * 2))
    setGlareAngle((Math.atan2(mouseY, mouseX) * 180) / Math.PI + 45)
  }

  function handleMouseLeave() {
    setRotate({ x: 0, y: 0 })
    setGlareOpacity(0)
  }

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective }}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: rotate.x !== 0 || rotate.y !== 0 ? scale : 1,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background: `linear-gradient(${glareAngle}deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 80%)`,
            opacity: glareOpacity,
          }}
        />
      )}
    </motion.div>
  )
}
