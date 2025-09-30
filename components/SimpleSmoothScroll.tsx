'use client'

import { useEffect } from 'react'

export function SimpleSmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Responsive smooth scroll implementation
    const smoothScrollTo = (target: string) => {
      const element = document.querySelector(target)
      if (element) {
        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top + window.pageYOffset
        const navbarHeight = window.innerWidth < 768 ? 60 : 80
        
        const targetPosition = elementTop - navbarHeight
        
        // Check if we're on mobile - use native smooth scroll for better performance
        if (window.innerWidth < 768) {
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
          return
        }
        
        // Desktop smooth scroll with requestAnimationFrame
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        const duration = Math.min(Math.abs(distance) * 0.5, 1000) // Responsive duration
        let start: number | null = null

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime
          const timeElapsed = currentTime - start
          const progress = Math.min(timeElapsed / duration, 1)
          
          // Smoother easing function
          const ease = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2
          
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

    // Handle window resize
    const handleResize = () => {
      // Update scroll behavior on resize
      if (window.innerWidth < 768) {
        document.documentElement.style.scrollBehavior = 'smooth'
      } else {
        document.documentElement.style.scrollBehavior = 'auto'
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Set initial behavior

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {})
      })
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <>{children}</>
}
