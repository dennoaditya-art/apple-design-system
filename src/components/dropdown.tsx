"use client"

import { useState, useRef, useCallback, useEffect, type ReactNode } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { easings, durations } from "@/lib/motion"
import { useFocusTrap } from "@/hooks"

interface DropdownItem {
  label: string
  value: string
  icon?: ReactNode
  disabled?: boolean
  danger?: boolean
}

interface DropdownProps {
  trigger: ReactNode
  items: DropdownItem[]
  onSelect: (value: string) => void
  align?: "start" | "end"
  label?: string
}

export function Dropdown({ trigger, items, onSelect, align = "start", label = "Menu" }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const prefersReduced = useReducedMotion()
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, [])

  useFocusTrap({ ref: menuRef, active: open, onEscape: close })

  useEffect(() => {
    if (!open) return
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open, close])

  return (
    <div className="relative inline-block">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {trigger}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            role="menu"
            aria-label={label}
            initial={prefersReduced ? undefined : { opacity: 0, scale: 0.95, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -6 }}
            transition={prefersReduced ? { duration: 0 } : { duration: durations.fast, ease: easings.easeOut }}
            className={`absolute ${align === "end" ? "right-0" : "left-0"} mt-2 min-w-[200px] overflow-hidden rounded-lg border border-silver bg-paper py-1 shadow-md z-50`}
          >
            {items.map((item) => (
              <motion.button
                key={item.value}
                type="button"
                role="menuitem"
                disabled={item.disabled}
                onClick={() => { onSelect(item.value); close() }}
                whileHover={{ x: 4 }}
                transition={prefersReduced ? { duration: 0 } : { duration: durations.fast, ease: easings.easeOut }}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left font-font-body text-[14px] leading-[1.43] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  item.disabled
                    ? "cursor-not-allowed text-ash"
                    : item.danger
                      ? "text-red-500 hover:bg-red-50"
                      : "text-ink hover:bg-fog"
                }`}
              >
                {item.icon && <span className="w-[18px] shrink-0">{item.icon}</span>}
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
Dropdown.displayName = "Dropdown"
