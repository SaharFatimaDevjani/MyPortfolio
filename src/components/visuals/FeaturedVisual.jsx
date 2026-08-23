import { motion } from 'framer-motion'

// Stylized stand-in for VTryFYP's real-time face-landmark tracking — not a screenshot,
// just an abstract nod to what the project actually does (see src/data/projects.js to swap in real media).
const LANDMARKS = [
  [30, 35], [50, 28], [70, 35], [38, 55], [62, 55], [50, 68], [42, 78], [58, 78],
  [25, 50], [75, 50], [50, 20], [45, 45], [55, 45],
]

export default function FeaturedVisual() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-surface">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {LANDMARKS.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={0.9}
            fill="var(--color-accent)"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: (i % 6) * 0.25, ease: 'easeInOut' }}
          />
        ))}
        {LANDMARKS.slice(1).map(([x, y], i) => {
          const [px, py] = LANDMARKS[0]
          return (
            <line
              key={`l-${i}`}
              x1={px}
              y1={py}
              x2={x}
              y2={y}
              stroke="var(--color-accent)"
              strokeWidth={0.15}
              opacity={0.25}
            />
          )
        })}
      </svg>

      <motion.div
        className="absolute inset-x-0 h-8 bg-gradient-to-b from-accent/30 to-transparent"
        animate={{ top: ['0%', '95%', '0%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-line bg-bg/70 px-2.5 py-1 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
          Live tracking
        </span>
      </div>
    </div>
  )
}
