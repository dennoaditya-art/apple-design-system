"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/input"
import { Checkbox } from "@/components/checkbox"
import { PillButton } from "@/components/pill-button"
import { useToast } from "@/components/toast"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [agree, setAgree] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; agree?: string }>({})
  const { addToast } = useToast()
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function validate() {
    const errs: typeof errors = {}
    if (!name.trim()) errs.name = "Name is required"
    if (!email) errs.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = "Enter a valid email"
    if (!password) errs.password = "Password is required"
    else if (password.length < 8) errs.password = "Must be at least 8 characters"
    else if (!/[A-Z]/.test(password)) errs.password = "Must contain an uppercase letter"
    else if (!/[0-9]/.test(password)) errs.password = "Must contain a number"
    if (!agree) errs.agree = "You must agree to the terms"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    timerRef.current = setTimeout(() => {
      setLoading(false)
      addToast("Account created successfully!", "success")
    }, 1200)
  }

  return (
    <div className="w-full rounded-[14px] bg-paper px-8 py-8 shadow-sm">
      <div className="mb-6 text-center">
        <h1 className="font-sf-pro-display text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-graphite">
          Create Account
        </h1>
        <p className="mt-1 font-sf-pro-text text-[15px] leading-[1.47] text-fog">
          Fill in your details to get started.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Appleseed"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
          autoComplete="name"
        />
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          autoComplete="email"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          autoComplete="new-password"
        />
        <Checkbox
          label="I agree to the Terms & Conditions"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          error={errors.agree}
        />

        <PillButton type="submit" disabled={loading} className="w-full">
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper/30 border-t-paper" />
              Creating account...
            </span>
          ) : (
            "Create Account"
          )}
        </PillButton>
      </form>

      <p className="mt-6 text-center font-sf-pro-text text-[14px] leading-[1.43] text-fog">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-apple-blue transition-colors hover:text-deep-link-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}
