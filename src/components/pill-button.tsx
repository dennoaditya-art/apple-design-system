interface PillButtonProps {
  variant?: "filled" | "outlined"
  children: React.ReactNode
  href?: string
  className?: string
}

export function PillButton({ variant = "filled", children, href, className = "" }: PillButtonProps) {
  const base = "inline-block px-[15px] py-[8px] font-sf-pro-text text-[17px] font-normal leading-[1.47] tracking-[-0.05px] transition-all duration-200"
  const styles = {
    filled:
      "rounded-[980px] bg-button-blue text-paper hover:bg-deep-link-blue active:bg-deep-link-blue",
    outlined:
      "rounded-[980px] border border-apple-blue bg-transparent text-apple-blue hover:border-deep-link-blue hover:text-deep-link-blue",
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </a>
    )
  }

  return <button type="button" className={`${base} ${styles[variant]} ${className}`}>{children}</button>
}
