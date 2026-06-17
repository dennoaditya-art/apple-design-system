"use client"

import { forwardRef, type InputHTMLAttributes } from "react"

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string
  error?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const checkboxId = id || label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")

    return (
      <div className="w-full">
        <div className="flex items-start gap-3">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={`mt-[3px] h-[18px] w-[18px] shrink-0 cursor-pointer appearance-none rounded-xs border-2 bg-cloud transition-colors checked:border-button-blue checked:bg-button-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue ${
              error ? "border-red-500" : "border-bone"
            } ${className}`}
            aria-invalid={error ? "true" : undefined}
            {...props}
          />
          <label
            htmlFor={checkboxId}
            className="cursor-pointer font-sf-pro-text text-[15px] leading-[1.47] text-graphite"
          >
            {label}
          </label>
        </div>
        {error && (
          <p className="mt-1 pl-[30px] font-sf-pro-text text-[12px] leading-[1.33] text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"
