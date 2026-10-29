import { motion } from 'framer-motion'

// Section header: a small mono eyebrow ("// 02 — Projects"), a large title (string or JSX),
// an accent bar that draws in on scroll, and an optional one-line intro.
export default function SectionHeading({ index, label, title, intro }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {'// '}
        {index} — {label}
      </p>
      {/* Title "pops" in: a small spring from slightly smaller and lower. */}
      <motion.h2
        initial={{ opacity: 0, y: 14, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="mt-3 origin-left text-3xl font-bold leading-tight tracking-tight text-ink text-balance sm:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.span
        aria-hidden="true"
        className="mt-4 block h-1 w-16 origin-left rounded-full bg-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      />
      {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">{intro}</p>}
    </div>
  )
}
