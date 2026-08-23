// Abstract "browser window" placeholder used when a project has no screenshot yet.
// Purely generated from the project name so each card looks distinct without real assets.
export default function ProjectMockup({ name }) {
  const hue = Array.from(name).reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ink-soft/30" />
        <span className="h-2 w-2 rounded-full bg-ink-soft/30" />
        <span className="h-2 w-2 rounded-full bg-ink-soft/30" />
      </div>
      <div
        className="flex h-full flex-col gap-2 p-4"
        style={{
          background: `linear-gradient(135deg, hsl(${hue} 70% 50% / 0.08), transparent 60%)`,
        }}
      >
        <div className="h-3 w-2/5 rounded" style={{ background: `hsl(${hue} 70% 55% / 0.4)` }} />
        <div className="h-2 w-3/5 rounded bg-ink-soft/15" />
        <div className="mt-2 grid flex-1 grid-cols-3 gap-2">
          <div className="rounded-lg" style={{ background: `hsl(${hue} 70% 55% / 0.15)` }} />
          <div className="rounded-lg bg-ink-soft/10" />
          <div className="rounded-lg bg-ink-soft/10" />
        </div>
      </div>
    </div>
  )
}
