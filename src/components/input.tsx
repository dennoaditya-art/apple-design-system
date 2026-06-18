"use client"

import { forwardRef, type InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-")

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block font-font-body text-[14px] font-semibold leading-[1.43] text-ink"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full rounded-lg border px-4 py-3 font-font-body text-[15px] outline-none transition-colors placeholder:text-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            error
              ? "border-red-500 bg-red-50 text-red-700 focus:border-red-500"
              : "border-silver bg-fog text-ink focus:border-accent"
          } ${className}`}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1 font-font-body text-[12px] leading-[1.33] text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"
