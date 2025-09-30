'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Smartphone } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const smoothScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId)
    if (element) {
      // Get element position and dimensions
      const elementRect = element.getBoundingClientRect()
      const elementTop = elementRect.top + window.pageYOffset
      const navbarHeight = 80
      
      // Calculate target position with proper spacing
      const isAboutSection = elementId === '#about'
      const paddingOffset = isAboutSection ? 60 : 40
      const targetPosition = elementTop - navbarHeight - paddingOffset
      
      // Ultra-smooth scroll animation
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      const duration = 1000 // Slightly longer for smoother feel
      let start: number | null = null

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)
        
        // Ultra-smooth easing function - easeOutExpo for buttery smooth scrolling
        const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
        const ease = easeOutExpo(progress)
        
        window.scrollTo(0, startPosition + distance * ease)
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        } else {
          // Ensure perfect final position
          window.scrollTo(0, targetPosition)
        }
      }
      
      requestAnimationFrame(animation)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <img 
              src="/images/B logo.png" 
              alt="Banzeeni Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-white">Banzeeni</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => smoothScrollTo(item.href)}
                className="text-white hover:text-primary-400 font-medium transition-colors duration-200 hover:-translate-y-0.5"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://apps.apple.com/iq/app/banzeeni/id6443919393', '_blank')}
              className="btn-primary flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download App</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-slide-down">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    smoothScrollTo(item.href)
                    setIsOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-white hover:text-primary-400 font-medium transition-colors hover:translate-x-2"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => window.open('https://apps.apple.com/iq/app/banzeeni/id6443919393', '_blank')}
                className="mx-4 btn-primary flex items-center space-x-2 w-full justify-center hover:scale-105 transition-transform duration-200"
              >
                <Smartphone className="w-4 h-4" />
                <span>Download App</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}