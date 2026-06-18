"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/input"
import { Checkbox } from "@/components/checkbox"
import { PillButton } from "@/components/pill-button"
import { useToast } from "@/components/toast"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const { addToast } = useToast()
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function validate() {
    const errs: typeof errors = {}
    if (!email) errs.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = "Enter a valid email"
    if (!password) errs.password = "Password is required"
    else if (password.length < 8) errs.password = "Password must be at least 8 characters"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    timerRef.current = setTimeout(() => {
      setLoading(false)
      addToast("Logged in successfully!", "success")
    }, 1200)
  }

  return (
    <div className="w-full rounded-2xl bg-paper px-8 py-8 shadow-sm">
      <div className="mb-6 text-center">
        <h1 className="font-font-heading text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-ink">
          Sign in
        </h1>
        <p className="mt-1 font-font-body text-[15px] leading-[1.47] text-graphite">
          Enter your credentials to continue.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          autoComplete="email"
        />
        <div>
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            autoComplete="current-password"
          />
          <div className="mt-1 text-right">
            <Link
              href="/reset-password"
              className="font-font-body text-[13px] leading-[1.38] text-accent transition-colors hover:text-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <Checkbox
          label="Remember me"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />

        <PillButton type="submit" disabled={loading} className="w-full">
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper/30 border-t-paper" />
              Signing in...
            </span>
          ) : (
            "Sign in"
          )}
        </PillButton>
      </form>

      <p className="mt-6 text-center font-font-body text-[14px] leading-[1.43] text-graphite">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-accent transition-colors hover:text-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Create one
        </Link>
      </p>
    </div>
  )
}
