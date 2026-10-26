import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Highlights from './components/Highlights'
import WordBand from './components/WordBand'
import BackgroundFX from './components/BackgroundFX'
import CursorRing from './components/CursorRing'
import AvailabilityBadge from './components/AvailabilityBadge'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  // Feed the pointer position to whichever .spotlight card is under it (drives the glow).
  useEffect(() => {
    const onMove = (e) => {
      const el = e.target.closest?.('.spotlight')
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="grain relative isolate min-h-svh bg-bg text-ink">
        <BackgroundFX />
        <ScrollProgress />
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Highlights />
          <WordBand />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
        <AvailabilityBadge />
        <CursorRing />
      </div>
    </MotionConfig>
  )
}
