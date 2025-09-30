'use client'

import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

export function LocomotiveScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollRef.current) return

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      scrollbarContainer: false,
      smartphone: {
        smooth: false, // Disable on mobile to prevent glitches
        direction: 'vertical',
        gestureDirection: 'vertical',
        breakpoint: 0,
      },
      tablet: {
        smooth: false, // Disable on tablet to prevent glitches
        direction: 'vertical',
        gestureDirection: 'vertical',
        breakpoint: 0,
      },
    })

    // Update scroll on window resize
    const handleResize = () => {
      scroll.update()
    }

    // Update scroll on route change
    const handleRouteChange = () => {
      scroll.update()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('load', handleRouteChange)

    return () => {
      scroll.destroy()
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('load', handleRouteChange)
    }
  }, [])

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  )
}
