"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/input"
import { PillButton } from "@/components/pill-button"
import { useToast } from "@/components/toast"

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { addToast } = useToast()
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) { setError("Email is required"); return }
    if (!/\S+@\S+\.\S+/.test(email)) { setError("Enter a valid email"); return }
    setError("")
    setLoading(true)
    timerRef.current = setTimeout(() => {
      setLoading(false)
      setSent(true)
      addToast("Reset link sent to your email", "success")
    }, 1200)
  }

  return (
    <div className="w-full rounded-2xl bg-paper px-8 py-8 shadow-sm">
      <div className="mb-6 text-center">
        {sent ? (
          <>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 4L12 14L2 4" />
                <path d="M2 4H22V20H2V4Z" />
              </svg>
            </div>
            <h1 className="font-sf-pro-display text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-graphite">
              Check your email
            </h1>
            <p className="mt-2 font-sf-pro-text text-[15px] leading-[1.47] text-fog">
              We&apos;ve sent a password reset link to{" "}
              <span className="font-semibold text-graphite">{email}</span>
            </p>
            <Link
              href="/login"
              className="mt-6 inline-block font-sf-pro-text text-[14px] font-semibold leading-[1.43] text-apple-blue transition-colors hover:text-deep-link-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
            >
              Back to Sign in
            </Link>
          </>
        ) : (
          <>
            <h1 className="font-sf-pro-display text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-graphite">
              Reset Password
            </h1>
            <p className="mt-1 font-sf-pro-text text-[15px] leading-[1.47] text-fog">
              Enter your email and we&apos;ll send you a reset link.
            </p>
          </>
        )}
      </div>

      {!sent && (
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError("") }}
            error={error}
            autoComplete="email"
          />
          <PillButton type="submit" disabled={loading} className="w-full">
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper/30 border-t-paper" />
                Sending...
              </span>
            ) : (
              "Send Reset Link"
            )}
          </PillButton>
        </form>
      )}

      {!sent && (
        <p className="mt-6 text-center font-sf-pro-text text-[14px] leading-[1.43] text-fog">
          Remember your password?{" "}
          <Link
            href="/login"
            className="font-semibold text-apple-blue transition-colors hover:text-deep-link-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
          >
            Sign in
          </Link>
        </p>
      )}
    </div>
  )
}
