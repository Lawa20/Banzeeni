'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    const startPosition = window.pageYOffset
    const distance = -startPosition
    const duration = 800 // Optimal duration for smooth feel
    let start: number | null = null

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)
      
      // Ultra-smooth easing function - easeOutExpo for buttery smooth ending
      const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      const ease = easeOutExpo(progress)
      
      const targetPosition = startPosition + distance * ease
      window.scrollTo(0, targetPosition)
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      } else {
        // Final smooth landing
        window.scrollTo(0, 0)
      }
    }
    
    requestAnimationFrame(animation)
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-all duration-300 z-50 hover:scale-110 hover:-translate-y-1 animate-fade-in hover:shadow-xl"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-white" />
    </button>
  )
}