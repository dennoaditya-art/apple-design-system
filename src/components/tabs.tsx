"use client"

import { useState, type ReactNode } from "react"
import { motion } from "framer-motion"

interface Tab {
  id: string
  label: string
  content: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

export function Tabs({ tabs, defaultTab, className = "" }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTab || tabs[0]?.id)

  const active = tabs.find((t) => t.id === activeId)

  return (
    <div className={className}>
      <div className="flex gap-1 border-b border-bone" role="tablist">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className={`relative px-5 py-3 font-sf-pro-text text-[14px] leading-[1.43] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue ${
                isActive ? "font-semibold text-graphite" : "font-normal text-fog hover:text-graphite"
              }`}
            >
              {tab.label}
              {isActive && (
                <motion.span
                  layoutId="tab-active"
                  className="absolute inset-x-0 bottom-0 h-[2px] bg-apple-blue"
                  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                />
              )}
            </button>
          )
        })}
      </div>
      <div
        role="tabpanel"
        id={`panel-${activeId}`}
        aria-labelledby={`tab-${activeId}`}
        className="pt-4"
      >
        {active?.content}
      </div>
    </div>
  )
}
