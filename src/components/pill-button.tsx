"use client"

import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ComponentProps } from "react"
import Link from "next/link"

interface PillButtonBaseProps {
  variant?: "filled" | "outlined"
  children: React.ReactNode
  className?: string
}

type PillButtonProps = PillButtonBaseProps &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">)
    | ({ href?: never } & ButtonHTMLAttributes<HTMLButtonElement>)
  )

export function PillButton({
  variant = "filled",
  children,
  href,
  className = "",
  ...props
}: PillButtonProps) {
  const base = "inline-block px-[15px] py-[8px] font-sf-pro-text text-[17px] font-normal leading-[1.47] tracking-[-0.05px] transition-all duration-200"
  const styles = {
    filled:
      "rounded-[980px] bg-button-blue text-paper hover:bg-deep-link-blue active:bg-deep-link-blue",
    outlined:
      "rounded-[980px] border border-apple-blue bg-transparent text-apple-blue hover:border-deep-link-blue hover:text-deep-link-blue",
  }

  if (href) {
    const isInternal = href.startsWith("/")
    if (isInternal) {
      return (
        <Link href={href} className={`${base} ${styles[variant]} ${className}`} {...(props as Omit<ComponentProps<typeof Link>, "href" | "children">)}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} className={`${base} ${styles[variant]} ${className}`} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={`${base} ${styles[variant]} ${className}`} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
