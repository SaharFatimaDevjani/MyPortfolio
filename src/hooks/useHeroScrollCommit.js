import { useEffect } from 'react'

// While the user is still at the hero, a small deliberate scroll (wheel or touch swipe)
// completes the transition into the next section instead of requiring a long scroll.
// Once past the hero, this gets out of the way entirely — long sections scroll normally.
export function useHeroScrollCommit(targetId) {
  useEffect(() => {
    let locked = false
    let touchStartY = null

    const commit = () => {
      if (locked) return
      locked = true
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        locked = false
      }, 1000)
    }

    const atHero = () => window.scrollY < window.innerHeight * 0.5

    const onWheel = (e) => {
      if (!atHero() || locked) return
      if (e.deltaY > 15) {
        e.preventDefault()
        commit()
      }
    }

    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY
    }

    const onTouchMove = (e) => {
      if (!atHero() || locked || touchStartY === null) return
      const delta = touchStartY - e.touches[0].clientY
      if (delta > 30) {
        e.preventDefault()
        commit()
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [targetId])
}
