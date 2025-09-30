'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function GSAPScrollProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize ScrollTrigger
    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    })

    // Create smooth scroll with GSAP
    const smoothScroll = gsap.to(containerRef.current, {
      y: () => -(ScrollTrigger.maxScroll(window) - window.innerHeight),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
        refreshPriority: -1,
      }
    })

    // Handle navigation clicks
    const handleNavClick = (e: Event) => {
      e.preventDefault()
      const target = (e.target as HTMLAnchorElement).getAttribute('href')
      if (target) {
        const element = document.querySelector(target)
        if (element) {
          const elementRect = element.getBoundingClientRect()
          const elementTop = elementRect.top + window.pageYOffset
          const navbarHeight = window.innerWidth < 768 ? 60 : 80
          const targetPosition = elementTop - navbarHeight
          
          // Use GSAP for smooth scroll
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: targetPosition, autoKill: false },
            ease: "power2.inOut"
          })
        }
      }
    }

    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick)
    })

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      // Cleanup
      smoothScroll.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick)
      })
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div ref={containerRef} className="gsap-scroll-container">
      {children}
    </div>
  )
}
