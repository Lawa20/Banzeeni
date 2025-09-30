'use client'

import { useInView } from 'react-intersection-observer'
import { ChevronDown, Apple, Smartphone } from 'lucide-react'

export function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden no-scroll-shake"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/Banzeeni.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed' // Fixed background for desktop
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
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float z-10" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full opacity-20 animate-float z-10" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-accent-200 rounded-full opacity-20 animate-float z-10" style={{ animationDelay: '2s' }} />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern animate-pulse" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="text-gradient">On-Demand</span>
            <br />
            <span className="text-white">Fuel Delivery</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Get fuel delivered to your location with Banzeeni. 
            <span className="font-semibold text-primary-400"> Safe, reliable, and convenient</span> fuel delivery 
            for individuals and businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <button 
              onClick={() => window.open('https://apps.apple.com/iq/app/banzeeni/id6443919393', '_blank')}
              className="btn-primary flex items-center justify-center space-x-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-h-[48px] hover:scale-105 transition-transform duration-200"
            >
              <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Download for iOS</span>
            </button>
            <button 
              onClick={() => window.open('https://play.google.com/store/apps/details?id=iq.click.banzeeni&pcampaignid=web_share', '_blank')}
              className="btn-secondary flex items-center justify-center space-x-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-h-[48px] hover:scale-105 transition-transform duration-200"
            >
              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Download for Android</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12 px-4">
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '50K+', label: 'Deliveries' },
              { number: '99.9%', label: 'Safety Record' },
              { number: '24/7', label: 'Service' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-1 sm:p-2"
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator flex flex-col items-center space-y-2">
            <div className="text-white text-sm opacity-70 mb-2 animate-bounce-slow">
              Scroll to explore
            </div>
            <div className="animate-bounce-slow">
              <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}