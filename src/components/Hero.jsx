import { motion } from 'framer-motion'
import { ArrowDown, FileText } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import { useHeroScrollCommit } from '../hooks/useHeroScrollCommit'
import PersonPhoto from './visuals/PersonPhoto'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { profile } from '../data/profile'

const TAGLINE = 'Full-stack developer building for the web & real-time vision.'
const TICKER = ['React', 'Vue.js', 'Node.js', 'MongoDB', 'MediaPipe', 'Tailwind CSS', 'Express', 'Camunda']

const SOCIALS = [
  { label: 'GitHub', href: profile.github, icon: GithubIcon },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon },
]

export default function Hero() {
  const { output, done } = useTypewriter(TAGLINE, { speed: 28, startDelay: 500 })
  useHeroScrollCommit('about')

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Animated background hook: drifting gradient blobs behind a faint grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-ink-soft) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-soft) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%)',
          }}
        />
        <motion.div
          className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 35, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent-dim/20 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto aspect-square w-40 overflow-hidden rounded-[2rem] border border-line shadow-xl shadow-accent/10 sm:w-52 lg:mx-0 lg:w-full"
        >
          <PersonPhoto name={profile.name} />
        </motion.div>

        <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[2.5rem] leading-[1.1] font-extrabold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-xs text-ink-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Currently {profile.currentRole.title} at{' '}
            <span className="font-semibold text-ink">{profile.currentRole.company}</span>
          </motion.p>

          <div className="mt-5 h-14 max-w-xl">
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
            className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-ink transition-transform hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
            {profile.resume && (
              <a
                href={profile.resume}
                download={profile.resumeFileName}
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <FileText size={15} />
                Resume
              </a>
            )}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="mt-10 w-full max-w-md overflow-hidden lg:max-w-full"
            style={{ maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}
          >
            <div className="flex w-max animate-marquee gap-8">
              {[...TICKER, ...TICKER].map((item, i) => (
                <span key={i} className="font-mono text-xs uppercase tracking-wider text-ink-soft/60">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 text-ink-soft"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
