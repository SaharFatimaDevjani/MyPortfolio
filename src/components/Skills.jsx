import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import { TECH_ICONS } from './icons/techIcons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const ALL = 'All'
const FILTERS = [ALL, ...skillGroups.map((g) => g.category)]
const allSkills = skillGroups.flatMap((g) => g.skills.map((name) => ({ name, level: g.category })))

export default function Skills() {
  const [filter, setFilter] = useState(ALL)
  const visible = filter === ALL ? allSkills : allSkills.filter((s) => s.level === filter)

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <SectionHeading
          index="03"
          label="Skills"
          title="Tools I build with"
          intro="Grouped honestly by how well I know them. Filter to see each level."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Filter skills by level"
            className="flex flex-wrap gap-1 rounded-full border border-line bg-surface p-1"
          >
            {FILTERS.map((f) => {
              const active = filter === f
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={active}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? 'text-accent' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="skill-filter-pill"
                      className="absolute inset-0 rounded-full bg-accent/10 ring-1 ring-accent/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              )
            })}
          </div>
          <p className="font-mono text-xs text-ink-soft" aria-live="polite">
            {visible.length} skills · {filter}
          </p>
        </div>
      </Reveal>

      <motion.ul layout className="mt-6 flex flex-wrap gap-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map(({ name, level }) => {
            const Icon = TECH_ICONS[name]
            return (
              <motion.li
                key={name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                title={level}
                className="group flex items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-2.5 text-sm text-ink transition-colors hover:border-accent/60"
              >
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 items-center justify-center text-accent transition-transform duration-300 group-hover:scale-110"
                >
                  {Icon ? <Icon size={16} /> : <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                </span>
                {name}
              </motion.li>
            )
          })}
        </AnimatePresence>
      </motion.ul>
    </section>
  )
}
