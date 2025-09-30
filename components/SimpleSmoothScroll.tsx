'use client'

import { useEffect } from 'react'

export function SimpleSmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Simple smooth scroll implementation
    const smoothScrollTo = (target: string) => {
      const element = document.querySelector(target)
      if (element) {
        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top + window.pageYOffset
        const navbarHeight = 80
        
        const targetPosition = elementTop - navbarHeight
        
        // Use requestAnimationFrame for smooth scrolling
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        const duration = 800
        let start: number | null = null

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime
          const timeElapsed = currentTime - start
          const progress = Math.min(timeElapsed / duration, 1)
          
          // Easing function
          const ease = 1 - Math.pow(1 - progress, 3)
          
          window.scrollTo(0, startPosition + distance * ease)
          
          if (timeElapsed < duration) {
            requestAnimationFrame(animation)
          }
        }
        
        requestAnimationFrame(animation)
      }
    }

    // Add smooth scroll to navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const target = link.getAttribute('href')
        if (target) {
          smoothScrollTo(target)
        }
      })
    })

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {})
      })
    }
  }, [])

  return <>{children}</>
}
