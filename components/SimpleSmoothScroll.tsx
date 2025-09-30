'use client'

import { useEffect, useState } from 'react'

export function SimpleSmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Responsive smooth scroll implementation
    const smoothScrollTo = (target: string) => {
      const element = document.querySelector(target)
      if (element) {
        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top + window.pageYOffset
        const navbarHeight = isMobile ? 60 : 80
        
        const targetPosition = elementTop - navbarHeight
        
        // Always use native smooth scroll for better responsiveness
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
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

    // Set initial scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    document.body.style.scrollBehavior = 'smooth'

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {})
      })
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  return <>{children}</>
}
