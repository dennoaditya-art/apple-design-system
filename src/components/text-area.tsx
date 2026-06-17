"use client"

import { forwardRef, type TextareaHTMLAttributes } from "react"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-")

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-1.5 block font-font-body text-[14px] font-semibold leading-[1.43] text-graphite"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`w-full rounded-lg border px-4 py-3 font-font-body text-[15px] outline-none transition-colors placeholder:text-fog focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            error
              ? "border-red-500 bg-red-50 text-red-700 focus:border-red-500"
              : "border-bone bg-cloud text-graphite focus:border-accent"
          } ${className}`}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-1 font-font-body text-[12px] leading-[1.33] text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

TextArea.displayName = "TextArea"
