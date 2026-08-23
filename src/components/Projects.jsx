import { projects } from '../data/projects'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [featured, ...rest] = projects

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
    </section>
  )
}
