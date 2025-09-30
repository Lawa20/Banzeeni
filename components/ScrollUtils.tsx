'use client'

import { useEffect } from 'react'

export function ScrollUtils() {
  useEffect(() => {
    // Simple scroll utility - no blocking
    const scrollTo = (target: string) => {
      const element = document.querySelector(target)
      if (element) {
        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top + window.pageYOffset
        const navbarHeight = window.innerWidth < 768 ? 60 : 80
        
        const targetPosition = elementTop - navbarHeight
        
        // Simple scroll - no blocking
        window.scrollTo(0, targetPosition)
      }
    }

    // Add scroll to navigation links
    const addScrollToLinks = () => {
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
        scrollTo(target)
      }
    }

    addScrollToLinks()

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(() => {
      addScrollToLinks()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Remove ALL scroll blocking
    document.documentElement.style.overscrollBehavior = 'auto'
    document.body.style.overscrollBehavior = 'auto'
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
