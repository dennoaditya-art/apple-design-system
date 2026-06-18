import Link from "next/link"
import type { ReactNode } from "react"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-fog px-5">
      <div className="w-full max-w-[420px]">
        <Link href="/" className="mb-8 flex items-center justify-center gap-2" aria-label="Nova Store">
          <svg width="20" height="48" viewBox="0 0 16 44" fill="#1d1d1f" aria-hidden="true">
            <path d="M13.5 16.5c-1.5 0-2.5.8-3.5 2.4-1 1.6-1.1 3.1-1.1 4.1 0 1.5 1 3.7 2.2 3.7.2 0 .6-.1 1-.4.5-.3 1-.5 1.4-.5.4 0 .9.2 1.4.5.4.3.8.4 1 .4 1.2 0 2.2-2.2 2.2-3.7 0-.6-.1-1.8-.9-2.9-.8-1.1-1.7-1.6-2.6-1.6-.1 0-.2 0-.2.1m-2.1-1.7c.1-1.2.6-2.2 1.4-3.1.8-.8 1.7-1.3 2.7-1.4-.1 1.2-.5 2.1-1.3 3-.8.8-1.8 1.3-2.8 1.5" />
          </svg>
        </Link>
        {children}
      </div>
    </div>
  )
}
