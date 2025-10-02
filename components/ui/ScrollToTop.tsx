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
    // Check if Lenis is available
    const lenis = (window as any).lenis
    
    if (lenis) {
      // Use Lenis for ultra-smooth scroll to top
      lenis.scrollTo(0, {
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3)
      })
    } else {
      // Fallback to native smooth scroll
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
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