'use client'

import { useEffect, useRef } from 'react'

interface SmoothScrollWrapperProps {
  children: React.ReactNode
  className?: string
}

export function SmoothScrollWrapper({ children, className = '' }: SmoothScrollWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Optimize element for smooth scrolling
    element.style.transform = 'translateZ(0)'
    element.style.backfaceVisibility = 'hidden'
    element.style.willChange = 'transform'

    // Intersection Observer for performance optimization
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible, enable animations
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
      // Clean up will-change to prevent memory issues
      element.style.willChange = 'auto'
    }
  }, [])

  return (
    <div 
      ref={elementRef} 
      className={`smooth-scroll-element ${className}`}
    >
      {children}
    </div>
  )
}
