'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export function LenisScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Check if device prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Device detection
    const isMobile = window.innerWidth < 768
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    // Initialize Lenis with optimized settings
    lenisRef.current = new Lenis({
      // Performance optimized settings
      duration: prefersReducedMotion ? 0 : (isMobile ? 1.0 : 1.2),
      easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth cubic easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: !prefersReducedMotion,
      
      // Mouse/trackpad settings
      mouseMultiplier: isMobile ? 0 : 1,
      
      // Touch settings - optimized for mobile
      smoothTouch: !isIOS && !prefersReducedMotion, // Disable on iOS for better performance
      touchMultiplier: isMobile ? 1.5 : 2,
      
      // Wheel settings
      wheelMultiplier: isMobile ? 0 : 1,
      normalizeWheel: true,
      
      // Performance settings
      syncTouch: false, // Disable for better performance
      infinite: false,
      autoRaf: false, // We'll handle RAF manually for better control
    })

    const lenis = lenisRef.current

    // Custom RAF loop for better performance
    const raf = (time: number) => {
      lenis?.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }

    // Start Lenis and RAF
    if (lenis) {
      lenis.start()
      rafRef.current = requestAnimationFrame(raf)
      
      // Expose Lenis globally for navigation
      ;(window as any).lenis = lenis
    }

    // Handle resize with debouncing
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        lenis?.resize()
      }, 150)
    }

    // Optimize scroll events
    const handleScroll = () => {
      // Update any scroll-dependent UI here if needed
    }

    // Add event listeners
    window.addEventListener('resize', handleResize, { passive: true })
    lenis?.on('scroll', handleScroll)

    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
      lenis?.destroy()
    }
  }, [])

  return <>{children}</>
}
