// Fixed backdrop behind every section: a faint neutral grid that fades toward the edges.
// Decorative only.
export default function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-ink-soft) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-soft) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 85%)',
        }}
      />
    </div>
  )
}
