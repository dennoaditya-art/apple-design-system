import { useEffect, useRef, type RefObject } from "react"

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])'

interface UseFocusTrapOptions {
  /** Ref to the container element */
  ref: RefObject<HTMLElement | null>
  /** Whether the trap is active */
  active: boolean
  /** Called when Escape is pressed */
  onEscape?: () => void
  /** Auto-focus first focusable element on activation */
  autoFocus?: boolean
  /** Ref to return focus to on deactivation */
  triggerRef?: RefObject<HTMLElement | null>
}

export function useFocusTrap({ ref, active, onEscape, autoFocus = true, triggerRef }: UseFocusTrapOptions) {
  const prevFocus = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!active) return

    const el = ref.current
    if (!el) return

    prevFocus.current = document.activeElement as HTMLElement | null

    if (autoFocus) {
      const first = el.querySelector<HTMLElement>(FOCUSABLE)
      first?.focus()
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onEscape?.()
        return
      }

      if (e.key !== "Tab") return

      const focusable = el!.querySelectorAll<HTMLElement>(FOCUSABLE)
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      const target = triggerRef?.current ?? prevFocus.current
      target?.focus()
    }
  }, [active, ref, onEscape, autoFocus, triggerRef])
}
