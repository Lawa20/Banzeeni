'use client'

import { useEffect } from 'react'

export function ScrollUtils() {
  useEffect(() => {
    // Global smooth scroll utility
    const smoothScrollTo = (target: string) => {
      const element = document.querySelector(target)
      if (element) {
        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top + window.pageYOffset
        const navbarHeight = window.innerWidth < 768 ? 60 : 80
        
        const targetPosition = elementTop - navbarHeight
        
        // Use native smooth scroll for all devices
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }

    // Add smooth scroll to all navigation links
    const addSmoothScrollToLinks = () => {
      const navLinks = document.querySelectorAll('a[href^="#"]')
      navLinks.forEach(link => {
        // Remove existing listeners
        link.removeEventListener('click', handleLinkClick)
        // Add new listener
        link.addEventListener('click', handleLinkClick)
      })
    }

    const handleLinkClick = (e: Event) => {
      e.preventDefault()
      const target = (e.target as HTMLAnchorElement).getAttribute('href')
      if (target) {
        smoothScrollTo(target)
      }
    }

    // Add smooth scroll to all navigation links
    addSmoothScrollToLinks()

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(() => {
      addSmoothScrollToLinks()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Set global scroll behavior - ensure immediate response
    document.documentElement.style.scrollBehavior = 'smooth'
    document.body.style.scrollBehavior = 'smooth'
    
    // Remove any scroll blocking
    document.documentElement.style.overscrollBehavior = 'auto'
    document.body.style.overscrollBehavior = 'auto'
    
    // Ensure immediate scroll response
    document.documentElement.style.willChange = 'auto'
    document.body.style.willChange = 'auto'

    return () => {
      observer.disconnect()
      const navLinks = document.querySelectorAll('a[href^="#"]')
      navLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick)
      })
    }
  }, [])

  return null
}
