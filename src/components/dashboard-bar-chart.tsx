"use client"

import { motion, useReducedMotion } from "motion/react"

interface BarData {
  label: string
  value: number
  color?: string
}

interface BarChartProps {
  data: BarData[]
  height?: number
}

export function BarChart({ data, height = 180 }: BarChartProps) {
  const prefersReduced = useReducedMotion()
  const maxVal = Math.max(...data.map((d) => d.value)) || 1

  return (
    <div className="flex items-end gap-2" style={{ height }} role="img" aria-label="Bar chart">
      {data.map((d, i) => {
        const pct = (d.value / maxVal) * 100
        return (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <motion.div
              initial={prefersReduced ? undefined : { height: 0 }}
              animate={{ height: `${pct}%` }}
              transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full rounded-xs"
              style={{
                backgroundColor: d.color || "#2997ff",
                minHeight: pct > 0 ? "4px" : "0",
              }}
            />
            <span className="font-sf-pro-text text-[10px] leading-[1.2] text-fog">{d.label}</span>
          </div>
        )
      })}
    </div>
  )
}
