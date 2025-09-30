'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

export function GSAPScrollNav() {
  useEffect(() => {
    // GSAP smooth scroll for navigation
    const smoothScrollTo = (target: string) => {
      const element = document.querySelector(target)
      if (element) {
        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top + window.pageYOffset
        const navbarHeight = window.innerWidth < 768 ? 60 : 80
        
        const isAboutSection = target === '#about'
        const paddingOffset = isAboutSection ? (window.innerWidth < 768 ? 40 : 60) : (window.innerWidth < 768 ? 20 : 40)
        const targetPosition = elementTop - navbarHeight - paddingOffset
        
        // Use GSAP for smooth scroll
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { 
            y: targetPosition, 
            autoKill: false 
          },
          ease: "power2.inOut"
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
      const navLinks = document.querySelectorAll('a[href^="#"]')
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick)
      })
    }
  }, [])

  return null
}
