"use client"

interface ShareErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export function ErrorFallback({ reset }: ShareErrorProps) {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center bg-cloud px-5 text-center">
      <p className="font-font-body text-[17px] font-light leading-[1.47] text-fog">Something went wrong</p>
      <button
        type="button"
        onClick={reset}
        className="mt-4 rounded-full bg-accent-solid px-[15px] py-[8px] font-font-body text-[14px] text-paper transition-colors hover:bg-accent-dark"
      >
        Try again
      </button>
    </main>
  )
}
