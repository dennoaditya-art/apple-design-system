"use client"

import { motion, useReducedMotion } from "motion/react"
import { easings, durations } from "@/lib/motion"
import { MotionNumber } from "@/components/motion-number"

interface StatsCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ReactNode
  index?: number
}

export function StatsCard({ title, value, change, trend, icon, index = 0 }: StatsCardProps) {
  const prefersReduced = useReducedMotion()
  const numericValue = Number(value.replace(/[^0-9.-]/g, ""))
  const isNumeric = !Number.isNaN(numericValue)

  return (
    <motion.div
      initial={prefersReduced ? undefined : { opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={prefersReduced ? { duration: 0 } : { duration: durations.slow, ease: easings.dramatic, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="rounded-[12px] bg-paper p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <p className="font-sf-pro-text text-[13px] font-semibold leading-[1.38] text-fog">{title}</p>
        <motion.span
          className="text-fog"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {icon}
        </motion.span>
      </div>
      <p className="mt-2 font-sf-pro-display text-[32px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite">
        {isNumeric ? (
          <MotionNumber to={numericValue} duration={1.2} delay={index * 0.1} format={false} />
        ) : (
          value
        )}
      </p>
      <div className="mt-1 flex items-center gap-1.5">
        <span
          className={`inline-flex items-center gap-0.5 font-sf-pro-text text-[13px] font-semibold leading-[1.38] ${
            trend === "up" ? "text-green-600" : "text-red-500"
          }`}
        >
          {trend === "up" ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 7L4 4L6 6L9 3" />
              <path d="M6 3H9V6" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 3L4 6L6 4L9 7" />
              <path d="M6 7H9V4" />
            </svg>
          )}
          {change}
        </span>
        <span className="font-sf-pro-text text-[12px] leading-[1.33] text-fog">vs last month</span>
      </div>
    </motion.div>
  )
}
