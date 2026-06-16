"use client"

import { motion } from "framer-motion"

interface StatsCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ReactNode
  index?: number
}

export function StatsCard({ title, value, change, trend, icon, index = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="rounded-[12px] bg-paper p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <p className="font-sf-pro-text text-[13px] font-semibold leading-[1.38] text-fog">{title}</p>
        <span className="text-fog">{icon}</span>
      </div>
      <p className="mt-2 font-sf-pro-display text-[32px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite">
        {value}
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
