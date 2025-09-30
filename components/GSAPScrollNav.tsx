'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

export function GSAPScrollNav() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Responsive GSAP smooth scroll for navigation
    const smoothScrollTo = (target: string) => {
      const element = document.querySelector(target)
      if (element) {
        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top + window.pageYOffset
        const navbarHeight = isMobile ? 60 : 80
        
        const isAboutSection = target === '#about'
        const paddingOffset = isAboutSection ? (isMobile ? 40 : 60) : (isMobile ? 20 : 40)
        const targetPosition = elementTop - navbarHeight - paddingOffset
        
        // Responsive duration based on device
        const duration = isMobile ? 0.8 : 1.2
        
        // Use GSAP for smooth scroll with responsive settings
        gsap.to(window, {
          duration: duration,
          scrollTo: { 
            y: targetPosition, 
            autoKill: false 
          },
          ease: isMobile ? "power2.out" : "power2.inOut"
        })
      }
    }

    // Handle navigation clicks
    const handleNavClick = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      const target = (e.target as HTMLAnchorElement).getAttribute('href')
      if (target) {
        smoothScrollTo(target)
      }
    }

    // Add event listeners to navigation links
    const addNavListeners = () => {
      const navLinks = document.querySelectorAll('a[href^="#"]')
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick)
        link.addEventListener('click', handleNavClick, { passive: false })
      })
    }

    // Initialize immediately
    addNavListeners()

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(() => {
      addNavListeners()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Ensure scroll is not blocked
    document.documentElement.style.overscrollBehavior = 'auto'
    document.body.style.overscrollBehavior = 'auto'

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', checkMobile)
      const navLinks = document.querySelectorAll('a[href^="#"]')
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick)
      })
    }
  }, [isMobile])

  return null
}
