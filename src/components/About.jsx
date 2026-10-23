import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-28">
      <Reveal>
        <SectionHeading index="01" title="About" />
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft sm:text-xl">
          <p>
            I'm a Software Design Engineer at <span className="font-semibold text-ink">Teresol</span> in
            Karachi, contributing to a production banking application in a regulated financial
            environment. I configure Camunda BPMN workflows and work in the Vue.js front end.
          </p>
          <p>
            I hold a BS in Computer Science (CGPA 3.51/4.00) and bring front-end, back-end and
            applied-AI experience from three internships. Most of my projects use the MERN stack, with
            others in Spring Boot and Django. I was team lead of a Grade-A computer-vision final-year
            project: VTry, an accessories store with real-time, in-browser virtual try-on.
          </p>
          <p>
            I'm most interested in work that combines software development, web development and AI, and
            I'm currently learning machine learning. I care about clean, maintainable code and software
            that real people use.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
