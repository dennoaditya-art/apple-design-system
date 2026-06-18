"use client"

import { forwardRef, type SelectHTMLAttributes } from "react"

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: SelectOption[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, className = "", id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-")

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="mb-1.5 block font-font-body text-[14px] font-semibold leading-[1.43] text-ink"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={`w-full appearance-none rounded-lg border px-4 py-3 pr-10 font-font-body text-[15px] outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              error
                ? "border-red-500 bg-red-50 text-red-700"
                : "border-silver bg-fog text-ink focus:border-accent"
            } ${className}`}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={error ? `${selectId}-error` : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-graphite"
            aria-hidden="true"
          >
            <path d="M3 4.5L6 7.5L9 4.5" />
          </svg>
        </div>
        {error && (
          <p id={`${selectId}-error`} className="mt-1 font-font-body text-[12px] leading-[1.33] text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = "Select"
