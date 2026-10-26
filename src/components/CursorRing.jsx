import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const INTERACTIVE = 'a, button, [role="button"], .spotlight'

// A soft ring that trails the mouse and swells over links, buttons and cards. Desktop
// mouse only (never on touch), the normal cursor stays visible, and it's skipped entirely
// for reduced-motion users.
export default function CursorRing() {
  // Mouse-driven desktops only, and never for reduced-motion users.
  const [enabled] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (!enabled) return
    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      setActive(Boolean(e.target.closest?.(INTERACTIVE)))
    }
    const onLeave = () => setVisible(false)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full border border-accent/70"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: active ? 44 : 22,
        height: active ? 44 : 22,
        opacity: visible ? 1 : 0,
        backgroundColor: active ? 'color-mix(in srgb, var(--color-accent) 12%, transparent)' : 'rgba(0,0,0,0)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
    />
  )
}
