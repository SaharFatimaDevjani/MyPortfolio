import { skillGroups } from '../data/skills'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <SectionHeading index="03" title="Skills" />
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={0.08 * i}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-ink-soft">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
