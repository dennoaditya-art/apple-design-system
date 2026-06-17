function SkeletonBlock({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return <div className={`animate-pulse rounded-md bg-bone ${className}`} style={style} aria-hidden="true" />
}

export function SkeletonLine({ width = "100%", className = "" }: { width?: string; className?: string }) {
  return <SkeletonBlock className={`h-[14px] ${className}`} style={{ width }} />
}

export function SkeletonHeading({ className = "" }: { className?: string }) {
  return <SkeletonBlock className={`h-[28px] w-[60%] ${className}`} />
}

export function SkeletonImage({ className = "" }: { className?: string }) {
  return <SkeletonBlock className={`h-full w-full ${className}`} />
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-md bg-paper shadow-xl ${className}`}>
      <SkeletonImage className="aspect-[3/2]" />
      <div className="space-y-2 p-4">
        <SkeletonLine width="70%" />
        <SkeletonLine width="90%" />
        <SkeletonLine width="40%" />
      </div>
    </div>
  )
}

export function SkeletonNav() {
  return (
    <div className="sticky top-0 z-50 h-[44px] bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[980px] items-center justify-between px-5">
        <SkeletonBlock className="h-[18px] w-[16px]" />
        <div className="hidden gap-6 md:flex">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonLine key={i} width="50px" className="h-[12px]" />
          ))}
        </div>
        <div className="flex gap-5">
          <SkeletonBlock className="h-[18px] w-[18px] rounded-full" />
          <SkeletonBlock className="h-[18px] w-[18px] rounded-full" />
          <SkeletonBlock className="h-[18px] w-[18px] rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonHomePage() {
  return (
    <>
      <SkeletonNav />
      <main className="space-y-[80px] px-5 py-[40px]">
        <SkeletonBlock className="h-[500px] w-full max-w-[980px] mx-auto rounded-lg" />
        <div className="mx-auto max-w-[980px] space-y-4">
          <SkeletonHeading className="mx-auto" />
          <SkeletonLine width="40%" className="mx-auto" />
          <div className="grid grid-cols-2 gap-4">
            <SkeletonCard className="md:row-span-2" />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
        <SkeletonBlock className="h-[500px] w-full max-w-[980px] mx-auto rounded-lg" />
      </main>
    </>
  )
}

export function SkeletonProductPage() {
  return (
    <section className="px-5 py-[40px]">
      <div className="mx-auto max-w-[980px] space-y-8">
        <div className="space-y-2 text-center">
          <SkeletonLine width="80px" className="mx-auto" />
          <SkeletonHeading className="mx-auto" />
          <SkeletonLine width="60%" className="mx-auto" />
        </div>
        <SkeletonBlock className="aspect-video w-full rounded-lg" />
        <div className="space-y-4">
          <SkeletonHeading />
          <SkeletonLine width="80%" />
          <SkeletonLine width="60%" />
        </div>
      </div>
    </section>
  )
}

export function SkeletonStorePage() {
  return (
    <>
      <SkeletonNav />
      <section className="px-5 py-[60px]">
        <div className="mx-auto max-w-[980px] space-y-8">
          <div className="space-y-2 text-center">
            <SkeletonLine width="60px" className="mx-auto" />
            <SkeletonHeading className="mx-auto" />
            <SkeletonLine width="50%" className="mx-auto" />
          </div>
          <SkeletonBlock className="mx-auto h-[44px] w-full max-w-[400px] rounded-lg" />
          <div className="flex flex-wrap justify-center gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <SkeletonBlock key={i} className="h-[34px] w-[70px] rounded-full" />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
