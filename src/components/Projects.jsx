import { useState } from 'react'
import { projects, otherProjects } from '../data/projects'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import MiniProjectCard from './MiniProjectCard'

export default function Projects() {
  const [featured, ...rest] = projects
  const [showAllOthers, setShowAllOthers] = useState(false)
  const visibleOthers = showAllOthers ? otherProjects : otherProjects.slice(0, 4)

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <SectionHeading index="02" title="Projects" />
      </Reveal>

      <div className="mt-10 grid gap-6">
        <Reveal>
          <ProjectCard project={featured} />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={0.05 * (i % 2)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-20">
          <h3 className="font-mono text-xs uppercase tracking-wider text-ink-soft">
            More Projects &amp; Coursework
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {visibleOthers.map((project) => (
              <MiniProjectCard key={project.id} project={project} />
            ))}
          </div>
          {otherProjects.length > 4 && (
            <button
              type="button"
              onClick={() => setShowAllOthers((v) => !v)}
              className="mt-5 font-mono text-xs uppercase tracking-wider text-accent transition-opacity hover:opacity-70"
            >
              {showAllOthers ? 'Show less' : `Show all ${otherProjects.length}`}
            </button>
          )}
        </div>
      </Reveal>
    </section>
  )
}
