"use client"

import { useState, useRef, useCallback, useEffect, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!open) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close()
        return
      }
      if (e.key !== "Tab" || !menuRef.current) return

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled])'
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, close])

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
        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
      >
        {trigger}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            role="menu"
            aria-label={label}
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className={`absolute ${align === "end" ? "right-0" : "left-0"} mt-2 min-w-[200px] overflow-hidden rounded-[10px] border border-bone bg-paper py-1 shadow-md z-50`}
          >
            {items.map((item) => (
              <button
                key={item.value}
                type="button"
                role="menuitem"
                disabled={item.disabled}
                onClick={() => { onSelect(item.value); close() }}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left font-sf-pro-text text-[14px] leading-[1.43] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue ${
                  item.disabled
                    ? "cursor-not-allowed text-ash"
                    : item.danger
                      ? "text-red-500 hover:bg-red-50"
                      : "text-graphite hover:bg-cloud"
                }`}
              >
                {item.icon && <span className="w-[18px] shrink-0">{item.icon}</span>}
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
