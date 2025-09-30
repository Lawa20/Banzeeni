'use client'

import { useInView } from 'react-intersection-observer'
import { Truck, Fuel, Smartphone, ShieldCheck, Clock, MapPin } from 'lucide-react'

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Truck,
      title: 'Professional Fuel Trucks',
      description: 'State-of-the-art fuel delivery vehicles with advanced safety systems',
      bgColor: 'bg-primary-100',
      color: 'text-primary-600',
    },
    {
      icon: Fuel,
      title: 'Multiple Fuel Types',
      description: 'Gasoline, diesel, and premium fuels available for all vehicle types',
      bgColor: 'bg-secondary-100',
      color: 'text-secondary-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Easy-to-use mobile application for seamless fuel ordering and tracking',
      bgColor: 'bg-accent-100',
      color: 'text-accent-600',
    },
    {
      icon: ShieldCheck,
      title: 'Safety First',
      description: 'Certified drivers and safety protocols ensure secure fuel delivery',
      bgColor: 'bg-green-100',
      color: 'text-green-600',
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Round-the-clock fuel delivery service for your convenience',
      bgColor: 'bg-orange-100',
      color: 'text-orange-600',
    },
    {
      icon: MapPin,
      title: 'Wide Coverage',
      description: 'Extensive service area covering major cities and business districts',
      bgColor: 'bg-purple-100',
      color: 'text-purple-600',
    },
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-4">
            What is <span className="text-gradient">Banzeeni</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed px-4">
            Banzeeni revolutionizes fuel delivery by bringing the gas station to you. 
            Whether you&apos;re at home, office, or on the road, we deliver fuel directly to your location.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-700 group cursor-pointer ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${feature.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6`}>
                <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${feature.color}`} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-12 md:mt-20 bg-gray-800 rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-white mb-8 md:mb-12">
            Trusted by Thousands
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '50K+', label: 'Fuel Deliveries' },
              { number: '99.9%', label: 'Safety Record' },
              { number: '24/7', label: 'Service Hours' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center cursor-pointer group"
                style={{ 
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                }}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white font-medium group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p 
            className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-6 md:mb-8 cursor-pointer px-4"
            style={{ 
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)'
              e.currentTarget.style.color = '#94a3b8'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.color = '#ffffff'
            }}
          >
            Ready to experience the future of fuel delivery?
          </p>
          <button 
            onClick={() => window.open('https://apps.apple.com/iq/app/banzeeni/id6443919393', '_blank')}
            className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 cursor-pointer"
            style={{ 
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)'
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(71, 85, 105, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(71, 85, 105, 0.2)'
            }}
          >
            Download the App Now
          </button>
        </div>
      </div>
    </section>
  )
}