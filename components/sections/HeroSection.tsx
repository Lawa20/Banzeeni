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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-accent-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern animate-pulse" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="text-gradient">On-Demand</span>
            <br />
            Fuel Delivery
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Get fuel delivered to your location with Banzeeni. 
            <span className="font-semibold text-primary-600"> Safe, reliable, and convenient</span> fuel delivery 
            for individuals and businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <button 
              onClick={() => window.open('https://apps.apple.com/iq/app/banzeeni/id6443919393', '_blank')}
              className="btn-primary flex items-center space-x-3 text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm opacity-90">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </button>

            <button 
              onClick={() => window.open('https://play.google.com/store/apps/details?id=iq.click.banzeeni&pcampaignid=web_share', '_blank')}
              className="btn-primary flex items-center space-x-3 text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
            >
              <Smartphone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm opacity-90">Get it on</div>
                <div className="font-bold">Google Play</div>
              </div>
            </button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up">
            {[
              { icon: '🚛', text: 'Professional Fuel Trucks' },
              { icon: '⏰', text: '24/7 Availability' },
              { icon: '🛡️', text: 'Safety First' },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <div className="text-sm font-medium text-white">{feature.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* Video Background (Optional) */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-primary-600/10 via-transparent to-secondary-600/10" />
      </div>
    </section>
  )
}