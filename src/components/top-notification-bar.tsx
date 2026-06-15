export function TopNotificationBar() {
  return (
    <div className="flex h-[44px] items-center bg-cloud px-5 text-[12px] leading-[1.33] text-graphite">
      <span className="flex-1">Shop the latest Apple products.</span>
      <div className="flex items-center gap-3">
        <select aria-label="Select your country or region" className="cursor-pointer border border-graphite bg-transparent px-2 py-0.5 text-[12px] outline-none">
          <option>United States</option>
        </select>
      </div>
      <div className="flex flex-1 items-center justify-end gap-3">
        <button type="button" className="bg-graphite px-3 py-0.5 text-[12px] text-paper transition-opacity hover:opacity-80">
          Continue
        </button>
        <button className="text-graphite transition-opacity hover:opacity-60" aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
