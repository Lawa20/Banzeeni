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
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'vertical',
        breakpoint: 0,
      },
      tablet: {
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'vertical',
        breakpoint: 0,
      },
    })

    // Update scroll on window resize
    const handleResize = () => {
      scroll.update()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      scroll.destroy()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  )
}
