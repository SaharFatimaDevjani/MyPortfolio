import { experience } from '../data/experience'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-28">
      <Reveal>
        <SectionHeading index="04" title="Experience" />
      </Reveal>

      <ol className="mt-10 flex flex-col gap-10 border-l border-line pl-8">
        {experience.map((item, i) => (
          <Reveal key={item.role} delay={0.08 * i}>
            <li className="relative">
              <span className="absolute -left-[35px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/15" />
              <p className="font-mono text-xs uppercase tracking-wider text-accent">{item.period}</p>
              <h3 className="mt-1 text-lg font-bold text-ink">
                {item.role} <span className="text-ink-soft">· {item.org}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
