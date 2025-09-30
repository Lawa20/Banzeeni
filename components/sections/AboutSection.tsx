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
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
    {
      icon: Fuel,
      title: 'Multiple Fuel Types',
      description: 'Gasoline, diesel, and premium fuels available for all vehicle types',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-100',
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Easy-to-use mobile application for seamless fuel ordering and tracking',
      color: 'text-accent-600',
      bgColor: 'bg-accent-100',
    },
    {
      icon: ShieldCheck,
      title: 'Safety First',
      description: 'Certified drivers and safety protocols ensure secure fuel delivery',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Round-the-clock fuel delivery service for your convenience',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: MapPin,
      title: 'Wide Coverage',
      description: 'Extensive service area covering major cities and business districts',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What is <span className="text-gradient">Banzeeni</span>?
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Banzeeni revolutionizes fuel delivery by bringing the gas station to you. 
            Whether you&apos;re at home, office, or on the road, we deliver fuel directly to your location.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 group cursor-pointer ${
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
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-20 bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
            Trusted by Thousands
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-white font-medium group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p 
            className="text-2xl font-semibold text-white mb-8 cursor-pointer"
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
            className="btn-primary text-lg px-8 py-4 cursor-pointer"
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