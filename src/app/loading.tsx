export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cloud">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-graphite/20 border-t-graphite" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
