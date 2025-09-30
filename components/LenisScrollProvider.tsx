'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export function LenisScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  useEffect(() => {
    // Initialize Lenis with mobile-first settings
    lenisRef.current = new Lenis({
      duration: isMobile ? 0.8 : 1.2, // Faster on mobile
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true, // Enable smooth touch for mobile
      touchMultiplier: isMobile ? 0.8 : 1, // More responsive on mobile
      infinite: false,
      normalizeWheel: true, // Normalize wheel events
      syncTouch: true, // Sync touch events
      autoRaf: true, // Enable auto RAF
    })

    // Get scroll element
    const lenis = lenisRef.current

    // Handle navigation clicks with Lenis
    const handleNavClick = (e: Event) => {
      e.preventDefault()
      const target = (e.target as HTMLAnchorElement).getAttribute('href')
      if (target && lenis) {
        const element = document.querySelector(target)
        if (element) {
          const elementRect = element.getBoundingClientRect()
          const elementTop = elementRect.top + window.pageYOffset
          const navbarHeight = window.innerWidth < 768 ? 60 : 80
          
          const isAboutSection = target === '#about'
          const paddingOffset = isAboutSection 
            ? (window.innerWidth < 768 ? 40 : 60) 
            : (window.innerWidth < 768 ? 20 : 40)
          
          const targetPosition = elementTop - navbarHeight - paddingOffset
          
          // Use Lenis for smooth scroll
          lenis.scrollTo(targetPosition, {
            duration: window.innerWidth < 768 ? 1.0 : 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          })
        }
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

    // Initialize listeners
    addNavListeners()

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(() => {
      addNavListeners()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Ensure Lenis is properly initialized before starting RAF
    const initializeLenis = () => {
      if (lenis) {
        // Force Lenis to start
        lenis.start()
        
        // Lenis animation frame
        function raf(time: number) {
          lenis?.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
      }
    }

    // Initialize after a short delay to ensure DOM is ready
    setTimeout(initializeLenis, 100)

    // Add fallback for mobile touch events
    const handleTouchStart = (e: TouchEvent) => {
      // Ensure Lenis is active on first touch
      if (lenis && !lenis.isActive) {
        lenis.start()
      }
    }

    // Add touch event listeners for mobile
    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchmove', handleTouchStart, { passive: true })

    // Handle resize
    const handleResize = () => {
      lenis?.resize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchStart)
      lenis?.destroy()
      const navLinks = document.querySelectorAll('a[href^="#"]')
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick)
      })
    }
  }, [])

  return <>{children}</>
}
