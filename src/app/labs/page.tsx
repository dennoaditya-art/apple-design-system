"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { springs } from "@/lib/motion"
import { TiltCard } from "@/components/tilt-card"
import Link from "next/link"

const LABS = [
  {
    id: "spring",
    title: "Spring Physics",
    desc: "Interactive spring with adjustable stiffness and damping",
  },
  {
    id: "tilt",
    title: "3D Tilt",
    desc: "Card follows cursor with perspective transform",
  },
  {
    id: "counter",
    title: "Animated Counter",
    desc: "Number rolls up with spring animation on view",
  },
] as const

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre
      className="overflow-x-auto rounded-[4px] p-4 font-mono text-[13px] leading-[1.6]"
      style={{
        backgroundColor: "#f0eee6",
        color: "#2c2c2c",
      }}
    >
      <code>{children}</code>
    </pre>
  )
}

function SpringDemo() {
  const [stiffness, setStiffness] = useState(200)
  const [damping, setDamping] = useState(20)
  const [clicked, setClicked] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-4">
        <motion.div
          animate={clicked ? { x: 100, rotate: 360 } : { x: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness, damping }}
          className="flex h-16 w-16 items-center justify-center rounded-full text-[18px] font-bold"
          style={{ backgroundColor: "#0ae448", color: "#0e100f" }}
        >
          ●
        </motion.div>
      </div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setClicked((c) => !c)}
        className="w-full cursor-pointer rounded-full px-4 py-2 text-[14px] font-normal"
        style={{
          border: "1px solid #0ae448",
          color: "#0ae448",
          backgroundColor: "transparent",
        }}
      >
        {clicked ? "Reset" : "Animate →"}
      </motion.button>
      <div className="space-y-3">
        <div>
          <label className="block font-sf-pro-text text-[12px] font-normal leading-[1.33]"             style={{ color: "#5a5a51" }}>
            Stiffness: {stiffness}
          </label>
          <input
            type="range"
            min={50}
            max={500}
            value={stiffness}
            onChange={(e) => setStiffness(Number(e.target.value))}
            className="w-full"
            aria-label="Spring stiffness"
          />
        </div>
        <div>
          <label className="block font-sf-pro-text text-[12px] font-normal leading-[1.33]"             style={{ color: "#5a5a51" }}>
            Damping: {damping}
          </label>
          <input
            type="range"
            min={5}
            max={50}
            value={damping}
            onChange={(e) => setDamping(Number(e.target.value))}
            className="w-full"
            aria-label="Spring damping"
          />
        </div>
      </div>
      <CodeBlock>{`motion.div
  animate={clicked
    ? { x: 100, rotate: 360 }
    : { x: 0, rotate: 0 }}
  transition={{
    type: "spring",
    stiffness: ${stiffness},
    damping: ${damping}
  }}`}</CodeBlock>
    </div>
  )
}

function TiltDemo() {
  return (
    <div className="space-y-6">
      <div className="mx-auto max-w-[240px]">
        <TiltCard tiltDegree={10} glare>
          <div
            className="rounded-[4px] p-6 text-center"
            style={{
              background: "linear-gradient(135deg, #fec5fb, #9d95ff)",
              color: "#0e100f",
            }}
          >
            <p className="font-sf-pro-display text-[20px] font-semibold">3D Tilt</p>
            <p className="mt-1 font-sf-pro-text text-[13px] font-light opacity-80">
              Move your mouse
            </p>
          </div>
        </TiltCard>
      </div>
      <CodeBlock>{`<TiltCard
  tiltDegree={10}
  glare
>
  <div>3D Tilt</div>
</TiltCard>

// Uses useMotionValue +
// useTransform for
// real-time rotation`}</CodeBlock>
    </div>
  )
}

function CounterDemo() {
  const [val, setVal] = useState(0)
  const prefersReduced = useReducedMotion()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setVal((c) => Math.max(0, c - 10))}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[18px] font-bold"
          style={{
            border: "1px solid #ff8709",
            color: "#ff8709",
            backgroundColor: "transparent",
          }}
          aria-label="Decrease"
        >
          −
        </motion.button>
        <motion.span
          key={val}
          initial={prefersReduced ? undefined : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-sf-pro-display text-[48px] font-bold leading-[1]"
          style={{ color: "#fffce1" }}
        >
          {val}
        </motion.span>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setVal((c) => c + 10)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[18px] font-bold"
          style={{
            border: "1px solid #ff8709",
            color: "#ff8709",
            backgroundColor: "transparent",
          }}
          aria-label="Increase"
        >
          +
        </motion.button>
      </div>
      <CodeBlock>{`<motion.span
  key={val}
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
>
  {val}
</motion.span>

// Each render animates
// from below — key
// change triggers reset`}</CodeBlock>
    </div>
  )
}

export default function LabsPage() {
  const [active, setActive] = useState<string>("spring")

  return (
    <div
      className="min-h-[100dvh]"
      style={{ backgroundColor: "#f7f7f4", color: "#26251e" }}
    >
      <div className="mx-auto max-w-[980px] px-5 py-16">
        {/* ── Header ── */}
        <div className="mb-16">
          <p
            className="mb-2 font-sf-pro-text text-[13px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: "#5c5b57" }}
          >
            Interactive Lab
          </p>
          <h1 className="font-sf-pro-display text-[40px] font-bold leading-[1.1] tracking-[-0.6px] md:text-[56px]">
            Labs
          </h1>
          <p
            className="mt-2 max-w-[480px] font-sf-pro-text text-[17px] font-light leading-[1.47]"
            style={{ color: "#5c5b57" }}
          >
            Interactive code playgrounds. Tune parameters, see results in real time.
          </p>
        </div>

        {/* ── Tab Navigation ── */}
        <div
          className="mb-10 flex gap-2 overflow-x-auto rounded-[4px] p-2"
          style={{ backgroundColor: "#e6e5e0" }}
        >
          {LABS.map((lab) => (
            <motion.button
              key={lab.id}
              onClick={() => setActive(lab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springs.snappy}
              className="flex-1 cursor-pointer rounded-[4px] px-4 py-3 text-center font-sf-pro-text text-[14px] font-normal leading-[1.43] transition-colors"
              style={{
                backgroundColor: active === lab.id ? "#fff" : "transparent",
                color: active === lab.id ? "#26251e" : "#5c5b57",
              }}
            >
              <span className="font-semibold">{lab.title}</span>
              <span
                className="mt-0.5 hidden text-[12px] font-normal md:block"
                style={{ color: "#5c5b57" }}
              >
                {lab.desc}
              </span>
            </motion.button>
          ))}
        </div>

        {/* ── Active Demo ── */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-[4px] p-8 shadow-sm"
          style={{ backgroundColor: "#fff" }}
        >
          {active === "spring" && <SpringDemo />}
          {active === "tilt" && <TiltDemo />}
          {active === "counter" && <CounterDemo />}
        </motion.div>

        {/* ── Footer ── */}
        <div className="mt-16 text-center">
          <Link
            href="/motion-lab"
            className="font-sf-pro-text text-[14px] font-normal leading-[1.43] transition-opacity hover:opacity-70"
            style={{ color: "#5c5b57" }}
          >
            See all animations &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
