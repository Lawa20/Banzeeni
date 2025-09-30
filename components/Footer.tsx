'use client'

import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from 'lucide-react'

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'App', href: '#app-showcase' },
    { name: 'Contact', href: '#contact' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
  ]

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/banzeeni' },
    { name: 'Instagram', href: 'https://instagram.com/banzeeni' },
    { name: 'Twitter', href: 'https://twitter.com/banzeeni' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/banzeeni' },
  ]

  return (
    <footer 
      ref={ref} 
      className="text-white"
      style={{
        backgroundImage: 'url(/images/CS.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll', // Changed from 'fixed' to 'scroll' for mobile responsiveness
        position: 'relative'
      }}
    >
      {/* Dark overlay with 60% transparency */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: 0
        }}
      />
      {/* Content with higher z-index */}
      <div className="container-custom relative z-10">
        <div className={`py-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">Banzeeni</h3>
              </div>
              <p className="text-white mb-6 leading-relaxed">
                Revolutionizing fuel delivery with safe, reliable, and convenient service. 
                Get fuel delivered to your location, wherever you are.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="https://wa.me/9647506813030" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white hover:text-primary-400 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>(+964) 07506813030</span>
                </a>
                <a 
                  href="mailto:support@banzeeni.com"
                  className="flex items-center space-x-3 text-white hover:text-primary-400 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>support@banzeeni.com</span>
                </a>
                <a 
                  href="https://maps.app.goo.gl/TunvJv8N1T5GVfXC9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white hover:text-primary-400 transition-colors duration-200"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Erbil, Southern Industrial Area</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={`space-y-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className={`space-y-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className={`space-y-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
              <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
              <p className="text-white mb-4">
                Subscribe to our newsletter for the latest news and offers.
              </p>
              <form className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors hover:scale-105">
                  Subscribe
                </button>
              </form>
              
              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-400 transition-colors"
                    aria-label={link.name}
                  >
                    {/* Icon for social link */}
                    {link.name === 'Facebook' && <Facebook className="w-6 h-6" />}
                    {link.name === 'Instagram' && <Instagram className="w-6 h-6" />}
                    {link.name === 'Twitter' && <Twitter className="w-6 h-6" />}
                    {link.name === 'LinkedIn' && <Linkedin className="w-6 h-6" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white text-sm">
                © {currentYear} Banzeeni. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-white hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/refund" className="text-white hover:text-primary-400 transition-colors">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}