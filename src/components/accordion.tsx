"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { easings, durations } from "@/lib/motion"

interface AccordionItem {
  id: string
  title: string
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
}

export function Accordion({ items, allowMultiple = false, className = "" }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([])
  const prefersReduced = useReducedMotion()

  function toggle(id: string) {
    setOpenIds((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id)
      if (allowMultiple) return [...prev, id]
      return [id]
    })
  }

  return (
    <div className={`divide-y divide-bone rounded-[10px] border border-bone bg-paper ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              className="flex w-full items-center justify-between px-5 py-4 text-left font-sf-pro-text text-[15px] font-semibold leading-[1.47] text-graphite transition-colors hover:bg-cloud focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
            >
              {item.title}
              <motion.svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={prefersReduced ? { duration: 0 } : { duration: durations.fast, ease: easings.easeOut }}
                aria-hidden="true"
              >
                <path d="M3 5L7 9L11 5" />
              </motion.svg>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-content-${item.id}`}
                  key={item.id}
                  initial={prefersReduced ? undefined : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={prefersReduced ? { duration: 0 } : { duration: durations.fast, ease: easings.easeOut }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 font-sf-pro-text text-[14px] leading-[1.57] text-fog">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
