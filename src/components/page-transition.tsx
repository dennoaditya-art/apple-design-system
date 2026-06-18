"use client"

import { usePathname } from "next/navigation"
import { motion, useReducedMotion } from "motion/react"
import { easings, durations } from "@/lib/motion"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <>{children}</>
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: durations.fast, ease: easings.easeOut }}
    >
      {children}
    </motion.div>
  )
}
PageTransition.displayName = "PageTransition"
