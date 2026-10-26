import { motion } from 'framer-motion'

// Fixed backdrop behind every section: a faint grid that fades toward the edges and two
// slow-drifting colour glows. Decorative only; drift stops for reduced-motion users.
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
      <motion.div
        className="absolute -left-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent-2/10 blur-3xl"
        animate={{ x: [0, -70, 0], y: [0, 50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </div>
  )
}
