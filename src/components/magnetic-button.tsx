"use client"

import { useRef, useState, type ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  ariaLabel?: string
  disabled?: boolean
}

export function MagneticButton({
  children,
  className = "",
  style: _style,
  onClick,
  type = "button",
  ariaLabel,
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const prefersReduced = useReducedMotion()
  const [position, setPosition] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent) {
    if (prefersReduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    const maxDistance = Math.min(rect.width, rect.height) * 0.3
    const factor = Math.min(1, Math.sqrt(distX ** 2 + distY ** 2) / maxDistance) * 0.15
    setPosition({ x: distX * factor, y: distY * factor })
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      style={_style}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 18, mass: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.button>
  )
}
