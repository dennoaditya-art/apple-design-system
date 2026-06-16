"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { springs } from "@/lib/motion"
import { MotionNumber } from "@/components/motion-number"
import { MagneticButton } from "@/components/magnetic-button"
import { TiltCard } from "@/components/tilt-card"
import { TextReveal } from "@/components/text-reveal"
import { StaggerGrid, StaggerItem } from "@/components/reveal"
import Link from "next/link"

const VOID = "#0e100f"
const CREAM = "#fffce1"
const ASH = "#7c7c6f"
const OLIVE = "#42433d"
const ACCENTS = {
  green: "#0ae448",
  pink: "#fec5fb",
  orange: "#ff8709",
  violet: "#9d95ff",
  blue: "#00bae2",
} as const

function SectionDivider() {
  return <hr className="my-24 border-none" style={{ height: 1, backgroundColor: OLIVE }} />
}

function BracketTag({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className="mb-6 font-sf-pro-text text-[14px] font-normal leading-[1.38]"
      style={{ color: color ?? ASH }}
    >
      <span>{`{ `}</span>
      {children}
      <span>{` }`}</span>
    </p>
  )
}

function SectionHeading({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <h2
      className="mb-8 text-center font-sf-pro-display text-[34px] font-normal leading-[1.15] md:text-[44px]"
      style={{ color: color ?? CREAM, letterSpacing: "-0.48px" }}
    >
      {children}
    </h2>
  )
}

function DemoCard({
  children,
  label,
  accent,
}: {
  children: React.ReactNode
  label: string
  accent: string
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="flex min-h-[160px] w-full items-center justify-center rounded-[8px] p-8"
        style={{ backgroundColor: VOID, border: `1px solid ${OLIVE}` }}
      >
        {children}
      </div>
      <p className="font-sf-pro-text text-[14px] font-normal leading-[1.38]" style={{ color: accent }}>
        {label}
      </p>
    </div>
  )
}

export default function MotionLabPage() {
  const [count, setCount] = useState(0)

  return (
    <div
      className="mx-auto max-w-[1280px] px-5 py-16"
      style={{ backgroundColor: VOID, color: CREAM, minHeight: "100vh" }}
    >
      {/* ── Hero ── */}
      <div className="mb-24">
        <BracketTag color={ACCENTS.green}>Motion Lab</BracketTag>
        <TextReveal
          as="h1"
          className="font-sf-pro-display text-[48px] font-normal leading-[1.07] md:text-[89px]"
          wordDelay={0.06}
          style={{ color: CREAM, letterSpacing: "-1.78px" }}
        >
          Motion Playground
        </TextReveal>
        <p
          className="mt-4 max-w-[640px] font-sf-pro-text text-[18px] font-normal leading-[1.38]"
          style={{ color: ASH }}
        >
          Every animation is a tool. Pick what fits your context, leave the rest.
        </p>
      </div>

      {/* ── 1. Animated Counter ── */}
      <section className="mb-24">
        <BracketTag color={ACCENTS.blue}>Data</BracketTag>
        <SectionHeading color={ACCENTS.blue}>Animated Counter</SectionHeading>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <DemoCard label="Revenue" accent={ACCENTS.green}>
            <p
              className="font-sf-pro-display text-[36px] font-semibold leading-[1.14]"
              style={{ color: CREAM }}
            >
              $<MotionNumber to={2847} duration={2} format />
            </p>
          </DemoCard>
          <DemoCard label="Users" accent={ACCENTS.blue}>
            <p
              className="font-sf-pro-display text-[36px] font-semibold leading-[1.14]"
              style={{ color: CREAM }}
            >
              <MotionNumber to={12843} duration={2} format />+
            </p>
          </DemoCard>
          <DemoCard label="Orders" accent={ACCENTS.orange}>
            <p
              className="font-sf-pro-display text-[36px] font-semibold leading-[1.14]"
              style={{ color: CREAM }}
            >
              <MotionNumber to={567} duration={2} format />
            </p>
          </DemoCard>
          <DemoCard label="Growth" accent={ACCENTS.pink}>
            <p
              className="font-sf-pro-display text-[36px] font-semibold leading-[1.14]"
              style={{ color: CREAM }}
            >
              <MotionNumber to={24} duration={1.5} format={false} />%
            </p>
          </DemoCard>
        </div>
      </section>

      <SectionDivider />

      {/* ── 2. Text Reveal ── */}
      <section className="mb-24">
        <BracketTag color={ACCENTS.pink}>Typography</BracketTag>
        <SectionHeading color={ACCENTS.pink}>Text Reveal</SectionHeading>
        <div
          className="rounded-[8px] p-10"
          style={{ backgroundColor: VOID, border: `1px solid ${OLIVE}` }}
        >
          <TextReveal
            as="h3"
            className="font-sf-pro-display text-[28px] font-normal leading-[1.2]"
            wordDelay={0.05}
            style={{ color: CREAM }}
          >
            Every word appears one by one in a smooth cascade.
          </TextReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── 3. 3D Tilt ── */}
      <section className="mb-24">
        <BracketTag color={ACCENTS.violet}>Interaction</BracketTag>
        <SectionHeading color={ACCENTS.violet}>3D Tilt Card</SectionHeading>
        <p
          className="mb-8 text-center font-sf-pro-text text-[16px] font-normal leading-[1.4]"
          style={{ color: ASH }}
        >
          Hover the card — it follows your cursor in 3D
        </p>
        <div className="mx-auto max-w-[320px]">
          <TiltCard tiltDegree={8} glare>
            <div
              className="rounded-[8px] p-8 text-center"
              style={{
                background: `linear-gradient(135deg, ${ACCENTS.green}, ${ACCENTS.blue})`,
                color: VOID,
              }}
            >
              <p className="font-sf-pro-display text-[22px] font-semibold">Hover me</p>
              <p className="mt-2 font-sf-pro-text text-[14px] font-light leading-[1.43] opacity-80">
                Move your mouse around
              </p>
            </div>
          </TiltCard>
        </div>
      </section>

      <SectionDivider />

      {/* ── 4. Magnetic Button ── */}
      <section className="mb-24">
        <BracketTag color={ACCENTS.orange}>Interaction</BracketTag>
        <SectionHeading color={ACCENTS.orange}>Magnetic Button</SectionHeading>
        <p
          className="mb-8 text-center font-sf-pro-text text-[16px] font-normal leading-[1.4]"
          style={{ color: ASH }}
        >
          Move your mouse near the button — it follows your cursor
        </p>
        <div className="flex justify-center">
          <MagneticButton
            onClick={() => setCount((c) => c + 1)}
            className="cursor-pointer rounded-full px-6 py-3 font-sf-pro-text text-[17px] font-normal leading-[1.38]"
            ariaLabel="Magnetic button demo"
            style={{
              color: CREAM,
              border: `1px solid ${ACCENTS.orange}`,
              backgroundColor: "transparent",
            }}
          >
            Pull me &rarr; {count > 0 ? `(${count})` : ""}
          </MagneticButton>
        </div>
      </section>

      <SectionDivider />

      {/* ── 5. Stagger Grid ── */}
      <section className="mb-24">
        <BracketTag color={ACCENTS.green}>Layout</BracketTag>
        <SectionHeading color={ACCENTS.green}>Staggered Reveal</SectionHeading>
        <StaggerGrid className="grid grid-cols-2 gap-4 md:grid-cols-4" staggerDelay={0.12}>
          {Array.from({ length: 8 }, (_, i) => (
            <StaggerItem key={i} variant={1}>
              <div
                className="flex h-24 items-center justify-center rounded-[8px] font-sf-pro-text text-[15px] font-semibold"
                style={{
                  backgroundColor: VOID,
                  border: `1px solid ${[ACCENTS.green, ACCENTS.pink, ACCENTS.blue, ACCENTS.orange][i % 4]}`,
                  color: CREAM,
                }}
              >
                Item {i + 1}
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <SectionDivider />

      {/* ── 6. Micro-interactions ── */}
      <section className="mb-24">
        <BracketTag color={ACCENTS.blue}>Micro</BracketTag>
        <SectionHeading color={ACCENTS.blue}>Micro-interactions</SectionHeading>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <DemoCard label="Scale on hover" accent={ACCENTS.green}>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={springs.snappy}
              className="flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: ACCENTS.green, color: VOID }}
              aria-label="Scale demo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
            </motion.button>
          </DemoCard>
          <DemoCard label="Rotate on hover" accent={ACCENTS.violet}>
            <motion.button
              whileHover={{ rotate: 180 }}
              transition={springs.standard}
              className="flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: ACCENTS.violet, color: VOID }}
              aria-label="Rotate demo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
            </motion.button>
          </DemoCard>
          <DemoCard label="Y bounce" accent={ACCENTS.orange}>
            <motion.button
              whileHover={{ y: -6 }}
              whileTap={{ y: 0 }}
              transition={springs.wobbly}
              className="flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: ACCENTS.orange, color: VOID }}
              aria-label="Bounce demo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
            </motion.button>
          </DemoCard>
          <DemoCard label="Spring toggle" accent={ACCENTS.pink}>
            <SpringToggle />
          </DemoCard>
        </div>
      </section>

      <SectionDivider />

      {/* ── 7. Page Transitions ── */}
      <section className="mb-24">
        <BracketTag color={ACCENTS.orange}>Navigation</BracketTag>
        <SectionHeading color={ACCENTS.orange}>Page Transitions</SectionHeading>
        <p
          className="mb-8 text-center font-sf-pro-text text-[16px] font-normal leading-[1.4]"
          style={{ color: ASH }}
        >
          Navigate to see the blur + fade transition
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[{ label: "Home", href: "/" }, { label: "Studio", href: "/studio" }, { label: "Labs", href: "/labs" }, { label: "Dashboard", href: "/dashboard" }].map(
            ({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="inline-block rounded-full px-4 py-2 font-sf-pro-text text-[15px] font-normal leading-[1.38] no-underline transition-all hover:scale-[1.03]"
                style={{
                  color: ACCENTS.blue,
                  border: `1px solid ${ACCENTS.blue}`,
                }}
              >
                {label}
              </Link>
            )
          )}
        </div>
      </section>
    </div>
  )
}

function SpringToggle() {
  const [on, setOn] = useState(false)
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      className="relative flex h-11 w-14 items-center rounded-full"
      style={{ backgroundColor: on ? ACCENTS.green : OLIVE }}
      aria-label="Toggle switch"
      aria-checked={on}
      role="switch"
    >
      <motion.span
        layout
        transition={springs.standard}
        className="absolute left-1 top-1 h-6 w-6 rounded-full"
        style={{ backgroundColor: CREAM }}
      />
    </button>
  )
}
