"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { springs, durations } from "@/lib/motion"
import { useFocusTrap } from "@/hooks"

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  size?: "sm" | "md" | "lg"
}

const SIZE_MAP = {
  sm: "max-w-[400px]",
  md: "max-w-[560px]",
  lg: "max-w-[720px]",
}

export function Modal({ open, onClose, title, children, size = "md" }: ModalProps) {
  const prefersReduced = useReducedMotion()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useFocusTrap({ ref: dialogRef, active: open, onEscape: onClose, autoFocus: false })

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={prefersReduced ? { duration: 0 } : { duration: durations.fast }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={prefersReduced ? undefined : { opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={prefersReduced ? { duration: 0 } : springs.standard}
            className={`relative w-full ${SIZE_MAP[size]} rounded-2xl bg-paper shadow-xl`}
          >
            <div className="flex items-center justify-between border-b border-bone px-6 py-4">
              <h2 className="font-font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.3px] text-graphite">
                {title}
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-11 w-11 items-center justify-center rounded-full text-fog transition-colors hover:bg-cloud hover:text-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4L12 12M12 4L4 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
