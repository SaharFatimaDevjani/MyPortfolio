// Abstract "browser window" fallback shown only if a project's real image hasn't been
// added yet. Uses the site's own accent color (not a random per-project hue) so it reads
// as part of one consistent brand rather than a grab-bag of placeholder colors.
export default function ProjectMockup({ name, className = '' }) {
  return (
    <div className={`flex h-full w-full flex-col bg-surface ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ink-soft/30" />
        <span className="h-2 w-2 rounded-full bg-ink-soft/30" />
        <span className="h-2 w-2 rounded-full bg-ink-soft/30" />
      </div>
      <div className="flex h-full flex-col gap-2 bg-gradient-to-br from-accent/10 via-transparent to-transparent p-4">
        <div className="h-3 w-2/5 rounded bg-accent/25" />
        <div className="h-2 w-3/5 rounded bg-ink-soft/15" />
        <div className="mt-2 grid flex-1 grid-cols-3 gap-2">
          <div className="rounded-lg bg-accent/10" />
          <div className="rounded-lg bg-ink-soft/10" />
          <div className="rounded-lg bg-ink-soft/10" />
        </div>
        <span className="mt-auto self-end font-mono text-[9px] uppercase tracking-wider text-ink-soft/50">
          {name}
        </span>
      </div>
    </div>
  )
}
