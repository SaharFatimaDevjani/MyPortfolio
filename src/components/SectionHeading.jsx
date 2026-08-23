export default function SectionHeading({ index, title }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  )
}
