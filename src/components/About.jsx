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
            Karachi, where since June 2026 I've been building a production banking application with
            Vue.js and Camunda BPMN workflows.
          </p>
          <p>
            I'm a full-stack developer at heart. Most of my work is in the MERN stack, and I've also
            built projects with Spring Boot and Django. For my final-year project I brought real-time
            computer vision to e-commerce: an in-browser virtual try-on for accessories.
          </p>
          <p>
            I'm currently learning machine learning and looking for ways to bring it into the products I
            build. I care about clean, maintainable code and software that real people use.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
