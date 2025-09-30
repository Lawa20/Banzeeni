'use client'

import { useEffect } from 'react'

export function ScrollUtils() {
  useEffect(() => {
    // Smooth scroll utility with immediate response
    const smoothScrollTo = (target: string) => {
      const element = document.querySelector(target)
      if (element) {
        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top + window.pageYOffset
        const navbarHeight = window.innerWidth < 768 ? 60 : 80
        
        const targetPosition = elementTop - navbarHeight
        
        // Try smooth scroll first, fallback to instant scroll
        if ('scrollBehavior' in document.documentElement.style) {
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        } else {
          // Fallback for browsers that don't support smooth scroll
          window.scrollTo(0, targetPosition)
        }
      }
    }

    // Add smooth scroll to navigation links
    const addSmoothScrollToLinks = () => {
      const navLinks = document.querySelectorAll('a[href^="#"]')
      navLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick)
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

    addSmoothScrollToLinks()

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(() => {
      addSmoothScrollToLinks()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Enable smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    document.body.style.scrollBehavior = 'smooth'
    
    // Remove scroll blocking
    document.documentElement.style.overscrollBehavior = 'auto'
    document.body.style.overscrollBehavior = 'auto'

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
