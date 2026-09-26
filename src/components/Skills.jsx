import { skillGroups } from '../data/skills'
import { TECH_ICONS } from './icons/techIcons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <SectionHeading index="03" title="Skills" />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={0.08 * i}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {group.skills.map((skill) => {
                  const Icon = TECH_ICONS[skill]
                  return (
                    <li key={skill} className="group/skill flex items-center gap-3 text-sm text-ink-soft">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-ink-soft/70 transition-colors group-hover/skill:text-accent">
                        {Icon ? <Icon size={16} /> : <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                      </span>
                      <span className="transition-colors group-hover/skill:text-ink">{skill}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
