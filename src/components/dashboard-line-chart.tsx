"use client"

import { motion, useReducedMotion } from "motion/react"

interface DataPoint {
  label: string
  value: number
}

interface LineChartProps {
  data: DataPoint[]
  height?: number
}

export function LineChart({ data, height = 200 }: LineChartProps) {
  if (data.length < 2) return null
  const prefersReduced = useReducedMotion()
  const width = 100
  const padding = 8
  const chartW = width - padding * 2
  const chartH = height - padding * 2

  const maxVal = Math.max(...data.map((d) => d.value))
  const minVal = Math.min(...data.map((d) => d.value))
  const range = maxVal - minVal || 1

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * chartW
    const y = padding + chartH - ((d.value - minVal) / range) * chartH
    return { x, y }
  })

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ")

  const areaPath = `${linePath}L${points[points.length - 1].x.toFixed(1)},${(padding + chartH).toFixed(1)}L${points[0].x.toFixed(1)},${(padding + chartH).toFixed(1)}Z`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="Line chart">
      <motion.path
        d={areaPath}
        fill="url(#line-gradient)"
        initial={prefersReduced ? undefined : { opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 0.8 }}
      />
      <motion.path
        d={linePath}
        fill="none"
        stroke="#2997ff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={prefersReduced ? undefined : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="2"
          fill="#2997ff"
          stroke="white"
          strokeWidth="1"
          initial={prefersReduced ? undefined : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={prefersReduced ? { duration: 0 } : { delay: 1 + i * 0.1, duration: 0.3 }}
        />
      ))}
      <defs>
        <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2997ff" />
          <stop offset="100%" stopColor="#2997ff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function MiniLineChart({ data }: { data: number[] }) {
  const prefersReduced = useReducedMotion()
  const w = 80
  const h = 32
  const padding = 2
  const chartW = w - padding * 2
  const chartH = h - padding * 2

  const maxVal = Math.max(...data)
  const minVal = Math.min(...data)
  const range = maxVal - minVal || 1

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * chartW
    const y = padding + chartH - ((d - minVal) / range) * chartH
    return { x, y }
  })

  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ")

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <motion.path
        d={path}
        fill="none"
        stroke="#16A34A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={prefersReduced ? undefined : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </svg>
  )
}
