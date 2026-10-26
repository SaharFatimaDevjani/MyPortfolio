import { useEffect, useState } from 'react'

// Types each phrase, pauses, erases it, then moves to the next one, looping forever.
// Reduced-motion users just get the first phrase, fully written and still.
export function useRotatingTypewriter(
  phrases,
  { typeSpeed = 70, deleteSpeed = 35, pause = 1600, startDelay = 600 } = {},
) {
  const [reduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (reduced) return
    if (!started) {
      const t = setTimeout(() => setStarted(true), startDelay)
      return () => clearTimeout(t)
    }
    const full = phrases[index % phrases.length]
    let delay = deleting ? deleteSpeed : typeSpeed
    let next
    if (!deleting && text === full) {
      delay = pause
      next = () => setDeleting(true)
    } else if (deleting && text === '') {
      delay = 300
      next = () => {
        setDeleting(false)
        setIndex((i) => i + 1)
      }
    } else {
      next = () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1))
    }
    const t = setTimeout(next, delay)
    return () => clearTimeout(t)
  }, [reduced, started, text, deleting, index, phrases, typeSpeed, deleteSpeed, pause, startDelay])

  return reduced ? phrases[0] : text
}
