"use client"

export default function ErrorPage({
  _error,
  reset,
}: {
  _error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-fog px-5 text-center">
      <h1 className="font-font-heading md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-ink">
        Something went wrong
      </h1>
      <p className="mt-3 font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
        Please try again later.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-block rounded-full bg-accent-solid px-[15px] py-[8px] font-font-body text-[17px] leading-[1.47] tracking-[-0.05px] text-paper transition-all hover:bg-accent-dark"
      >
        Try again
      </button>
    </main>
  )
}
