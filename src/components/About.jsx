import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-28">
      <Reveal>
        <SectionHeading index="01" title="About" />
        <p className="mt-8 text-lg leading-relaxed text-ink-soft sm:text-xl">
          I'm a self-funded BSCS graduate who builds full-stack web applications, most recently a
          real-time computer vision try-on system for my final-year project. Day to day I work as
          a Software Design Engineer on a production banking application, and I'm currently
          focused on sharpening my backend engineering with AI-assisted workflows — with an eye on
          going deeper into AI/ML down the line.
        </p>
      </Reveal>
    </section>
  )
}
