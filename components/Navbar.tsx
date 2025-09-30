'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Smartphone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
      
      // Use native smooth scroll for better performance and reliability
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
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
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <img 
              src="/images/B logo.png" 
              alt="Banzeeni Logo" 
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-lg sm:text-xl font-bold text-white">Banzeeni</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => smoothScrollTo(item.href)}
                className="text-white hover:text-primary-400 font-medium transition-colors duration-200 hover:-translate-y-0.5 text-sm lg:text-base"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://apps.apple.com/iq/app/banzeeni/id6443919393', '_blank')}
              className="btn-primary flex items-center space-x-2 hover:scale-105 transition-transform duration-200 text-sm px-4 py-2"
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden lg:inline">Download App</span>
              <span className="lg:hidden">App</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-700 overflow-hidden"
            >
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="py-4 space-y-3 px-4"
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    onClick={() => {
                      smoothScrollTo(item.href)
                      setIsOpen(false)
                    }}
                    className="block w-full text-left px-3 py-3 text-white hover:text-primary-400 font-medium transition-colors hover:translate-x-2 rounded-lg hover:bg-gray-800/50"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-2 border-t border-gray-700"
                >
                  <button 
                    onClick={() => window.open('https://apps.apple.com/iq/app/banzeeni/id6443919393', '_blank')}
                    className="w-full btn-primary flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-200 text-sm py-3"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Download App</span>
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}