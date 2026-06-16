"use client"

import { createContext, useContext, useState, useCallback, useRef, useEffect, type ReactNode } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { easings, durations } from "@/lib/motion"

type ToastType = "success" | "error" | "info"

interface Toast {
  id: string
  message: string
  type: ToastType
}

interface ToastContextType {
  addToast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

const ICONS: Record<ToastType, ReactNode> = {
  success: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 4.5L6.5 13L3 9.5" />
    </svg>
  ),
  error: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="9" cy="9" r="6.5" />
      <path d="M6 6L12 12M12 6L6 12" />
    </svg>
  ),
  info: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="9" r="6.5" />
      <path d="M9 8V13M9 6V6.01" />
    </svg>
  ),
}

const BORDER_COLORS: Record<ToastType, string> = {
  success: "border-green-500",
  error: "border-red-500",
  info: "border-apple-blue",
}

const TEXT_COLORS: Record<ToastType, string> = {
  success: "text-green-600",
  error: "text-red-600",
  info: "text-apple-blue",
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const prefersReduced = useReducedMotion()
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const addToast = useCallback((message: string, type: ToastType = "info") => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    setToasts((prev) => [...prev, { id, message, type }])
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 4000)
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3" aria-live="polite" aria-label="Notifications">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={prefersReduced ? undefined : { opacity: 0, x: 80, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.9 }}
              transition={prefersReduced ? { duration: 0 } : { duration: durations.normal, ease: easings.easeOut }}
              whileHover={prefersReduced ? undefined : { scale: 1.02 }}
              whileTap={prefersReduced ? undefined : { scale: 0.98 }}
              drag={prefersReduced ? false : "x"}
              dragDirectionLock
              onDragEnd={(_e, { offset, velocity }) => {
                if (Math.abs(offset.x) > 100 || velocity.x > 200) {
                  removeToast(toast.id)
                }
              }}
              className={`flex w-[360px] cursor-grab items-center gap-3 rounded-[12px] border-l-4 ${BORDER_COLORS[toast.type]} bg-paper px-4 py-3 shadow-md active:cursor-grabbing`}
            >
              <span className={`shrink-0 ${TEXT_COLORS[toast.type]}`}>{ICONS[toast.type]}</span>
              <p className="flex-1 font-sf-pro-text text-[14px] leading-[1.43] text-graphite">{toast.message}</p>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                aria-label="Dismiss"
                className="shrink-0 p-3 text-fog transition-colors hover:text-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 3L11 11M11 3L3 11" />
                </svg>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within ToastProvider")
  return ctx
}
