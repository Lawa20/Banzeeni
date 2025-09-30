'use client'

import { useEffect, useRef } from 'react'

export function ScrollUtils() {
  const isInitialized = useRef(false)

  useEffect(() => {
    // Ensure immediate initialization
    if (isInitialized.current) return
    isInitialized.current = true

    // Immediate scroll utility - no delays
    const scrollTo = (target: string) => {
      const element = document.querySelector(target)
      if (element) {
        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top + window.pageYOffset
        const navbarHeight = window.innerWidth < 768 ? 60 : 80
        
        const targetPosition = elementTop - navbarHeight
        
        // Immediate scroll - no smooth behavior that could cause delays
        window.scrollTo(0, targetPosition)
      }
    }

    // Add scroll to navigation links immediately
    const addScrollToLinks = () => {
      const navLinks = document.querySelectorAll('a[href^="#"]')
      navLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick)
        link.addEventListener('click', handleLinkClick, { passive: false })
      })
    }

    const handleLinkClick = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      const target = (e.target as HTMLAnchorElement).getAttribute('href')
      if (target) {
        scrollTo(target)
      }
    }

    // Initialize immediately
    addScrollToLinks()

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(() => {
      addScrollToLinks()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Remove ALL scroll blocking immediately
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
