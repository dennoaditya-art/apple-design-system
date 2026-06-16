// ── Easing Curves ──────────────────────────────────────
// Raycast-inspired: fast attack, long settle

export const easings = {
  /** Raycast outQuint — snap-in with fast attack, long settle */
  snap: [0.23, 1, 0.32, 1] as const,
  /** Smooth ease-out — Apple default for most UI transitions */
  easeOut: [0.25, 0.1, 0.25, 1] as const,
  /** Smooth ease-in-out — for elements entering & leaving */
  easeInOut: [0.42, 0, 0.58, 1] as const,
  /** Gentle ease-in — for subtle entrances */
  easeIn: [0.42, 0, 1, 1] as const,
  /** Dramatic ease-out with slow start — for hero reveals */
  dramatic: [0.16, 1, 0.3, 1] as const,
  /** Spring-like without physics — for modals, sheets */
  elastic: [0.68, -0.15, 0.27, 1.15] as const,
  /** Overshoot subtle — for emphasis reveals */
  overshoot: [0.175, 0.885, 0.32, 1.275] as const,
  /** Smooth deceleration — for scroll-triggered reveals */
  decelerate: [0.0, 0.0, 0.2, 1] as const,
  /** Smooth acceleration — for exits */
  accelerate: [0.4, 0.0, 1, 1] as const,
  /** Apple system spring-like curve (alias for easeInOut) */
  system: [0.42, 0, 0.58, 1] as const,
} as const

export type EasingKey = keyof typeof easings

// ── Durations ──────────────────────────────────────────
// Raycast timing tiers: micro 200ms | transforms 400ms | max 700ms

export const durations = {
  /** Instant micro-interaction (theme toggle, hover) */
  micro: 0.12,
  /** Fast feedback (button press, tap) — Raycast micro tier */
  fast: 0.2,
  /** Standard UI transition (modals, panels, toasts) */
  normal: 0.35,
  /** Medium transforms — Raycast transform tier (400ms) */
  medium: 0.4,
  /** Deliberate reveal (page transitions, sections) */
  slow: 0.55,
  /** Hero reveal (hero headings, large elements) */
  hero: 0.8,
  /** Expressive showcase (product reveals) */
  expressive: 1.2,
} as const

export type DurationKey = keyof typeof durations

// ── Spring Presets ─────────────────────────────────────

export const springs = {
  /** Gentle spring — for subtle scale/bounce on cards, buttons */
  gentle: { type: "spring" as const, stiffness: 120, damping: 14, mass: 0.8 },
  /** Standard spring — for modals, sheets, dropdowns */
  standard: { type: "spring" as const, stiffness: 200, damping: 22, mass: 1 },
  /** Snappy spring — for toggles, switches, micro-interactions */
  snappy: { type: "spring" as const, stiffness: 300, damping: 25, mass: 0.5 },
  /** Responsive spring — for drag gestures, follow-cursor */
  responsive: { type: "spring" as const, stiffness: 400, damping: 30, mass: 0.5 },
  /** Pressable spring — Raycast-inspired, physically tactile */
  pressable: { type: "spring" as const, stiffness: 350, damping: 18, mass: 0.6 },
  /** Wobbly spring — for celebratory reveals, emphasis */
  wobbly: { type: "spring" as const, stiffness: 180, damping: 10, mass: 1 },
} as const

// ── Shadow Utilities ───────────────────────────────────
// Raycast 4-layer shadow: 2 dark inset + 2 white highlight
// Creates physically pressable depth without elevation

export interface RaycastShadowOptions {
  depth?: "sm" | "md" | "lg"
  color?: "dark" | "light"
}

const RAYCAST_SHADOWS = {
  dark: {
    sm: "0 1px 2px rgba(0,0,0,0.3), inset 0 -1px 1px rgba(0,0,0,0.15), inset 0 1px 1px rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.02)",
    md: "0 2px 4px rgba(0,0,0,0.35), inset 0 -1.5px 1.5px rgba(0,0,0,0.2), inset 0 1px 1.5px rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.03)",
    lg: "0 4px 8px rgba(0,0,0,0.4), inset 0 -2px 2px rgba(0,0,0,0.25), inset 0 1px 2px rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.04)",
  },
  light: {
    sm: "0 1px 2px rgba(0,0,0,0.08), inset 0 -1px 1px rgba(0,0,0,0.04), inset 0 1px 1px rgba(255,255,255,0.5), 0 0 0 1px rgba(0,0,0,0.02)",
    md: "0 2px 4px rgba(0,0,0,0.1), inset 0 -1.5px 1.5px rgba(0,0,0,0.06), inset 0 1px 1.5px rgba(255,255,255,0.6), 0 0 0 1px rgba(0,0,0,0.03)",
    lg: "0 4px 8px rgba(0,0,0,0.12), inset 0 -2px 2px rgba(0,0,0,0.08), inset 0 1px 2px rgba(255,255,255,0.7), 0 0 0 1px rgba(0,0,0,0.04)",
  },
} as const

export function raycastShadow(options: RaycastShadowOptions = {}) {
  const { depth = "md", color = "dark" } = options
  return RAYCAST_SHADOWS[color][depth]
}

/** Raycast-inspired radial gradient atmosphere — subtle glow behind content */
export function raycastAtmosphere(color: "blue" | "violet" | "amber" = "violet") {
  const gradients = {
    blue: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(59,130,246,0.08), transparent)",
    violet: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139,92,246,0.08), transparent)",
    amber: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(245,158,11,0.08), transparent)",
  }
  return gradients[color]
}

// ── Animation Variant Factories ────────────────────────

type Direction = "up" | "down" | "left" | "right"

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
}

export function fadeIn(direction?: Direction, _distance = 40) {
  const offset = direction ? directionOffset[direction] : { x: 0, y: 0 }
  return {
    hidden: {
      opacity: 0,
      x: offset.x * (direction ? 1 : 0),
      y: direction ? offset.y : _distance,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: durations.slow, ease: easings.snap },
    },
  }
}

/** @deprecated */
export function scaleIn(initialScale = 0.95) {
  return {
    hidden: { opacity: 0, scale: initialScale },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: durations.normal, ease: easings.elastic },
    },
  }
}

/** @deprecated */
export function slideIn(direction: Direction, _distance = 60) {
  const offset = directionOffset[direction]
  return {
    hidden: { x: offset.x, y: offset.y },
    visible: {
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 22, mass: 1 },
    },
  }
}

/** @deprecated */
export function blurIn(direction?: Direction) {
  const offset = direction ? directionOffset[direction] : { x: 0, y: 30 }
  return {
    hidden: {
      opacity: 0,
      y: offset.y,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: durations.slow, ease: easings.dramatic },
    },
  }
}

/** @deprecated */
export function staggeredChildren(staggerDelay = 0.08) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay, delayChildren: 0 },
    },
  }
}

/** @deprecated */
export function cardHover(scale = 1.02, y = -4) {
  return {
    rest: { scale: 1, y: 0, boxShadow: raycastShadow({ depth: "sm" }) },
    hover: {
      scale,
      y,
      boxShadow: raycastShadow({ depth: "lg" }),
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  }
}

/** @deprecated */
export function rippleEffect(_color = "rgba(255,255,255,0.3)") {
  return {
    rest: { scale: 0, opacity: 1 },
    hover: {
      scale: 3,
      opacity: 0,
      transition: { duration: 0.6, ease: easings.easeOut },
    },
  }
}

// ── Convenience: build a complete transition object ────

/** @deprecated */
export function transition(
  duration: DurationKey = "medium",
  easing: EasingKey = "snap",
  delay = 0
) {
  return { duration: durations[duration], ease: easings[easing], delay }
}

/** @deprecated */
export function springTransition(
  preset: keyof typeof springs = "standard",
  delay = 0
) {
  return { ...springs[preset], delay }
}
