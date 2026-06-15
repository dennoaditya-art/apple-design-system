"use client"

export function BagPanel() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-bone"
        aria-hidden="true"
      >
        <path d="M12 24V16C12 11 16 7 24 7C32 7 36 11 36 16V24" strokeLinecap="round" />
        <rect x="6" y="24" width="36" height="18" rx="3" />
      </svg>
      <h3 className="mt-4 font-sf-pro-text text-[17px] font-semibold leading-[1.47] tracking-[-0.05px] text-graphite">
        Your bag is empty.
      </h3>
      <p className="mt-1 font-sf-pro-text text-[14px] font-light leading-[1.43] text-fog">
        Add products to your bag to get started.
      </p>
    </div>
  )
}
