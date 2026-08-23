import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'

const TAGLINE = 'Software Design Engineer, building for the web & real-time vision.'

export default function Hero() {
  const { output, done } = useTypewriter(TAGLINE, { speed: 28, startDelay: 500 })

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Animated background hook: drifting gradient blobs behind a faint grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-ink-soft) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-soft) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <motion.div
          className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent-dim/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent"
      >
        Hi, I&apos;m
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-5xl font-extrabold tracking-tight text-ink sm:text-6xl md:text-7xl"
      >
        Sahar Fatima Devjani
      </motion.h1>

      <div className="mt-6 h-14 max-w-2xl text-center sm:h-8">
        <p className="font-mono text-base text-ink-soft sm:text-lg">
          {output}
          <span className={`ml-0.5 inline-block w-[2px] translate-y-0.5 bg-accent align-middle ${done ? 'animate-blink' : ''}`}>
            &nbsp;
          </span>
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-[#04120f] transition-transform hover:scale-105 active:scale-95"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-line px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Get in Touch
        </a>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-10 text-ink-soft"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
