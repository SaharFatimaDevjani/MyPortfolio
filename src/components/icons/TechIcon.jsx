import { TECH_ICONS } from './techIcons'

// Renders a brand icon for a known tech name, or a small text pill as a graceful fallback.
export default function TechIcon({ name, size = 20 }) {
  const Icon = TECH_ICONS[name]

  if (!Icon) {
    return (
      <span className="flex h-8 items-center rounded-md border border-line px-2 font-mono text-[10px] text-ink-soft">
        {name}
      </span>
    )
  }

  return (
    <span
      title={name}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface text-ink-soft transition-colors hover:border-accent hover:text-accent"
    >
      <Icon size={size} />
    </span>
  )
}
