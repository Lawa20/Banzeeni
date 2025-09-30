'use client'

import { useInView } from 'react-intersection-observer'
import { MapPin, Car, Smartphone, CheckCircle } from 'lucide-react'

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      number: '01',
      icon: MapPin,
      title: 'Set Your Location',
      description: 'Enter your current location or destination where you need fuel delivered. Our GPS technology ensures accurate delivery to your exact spot.',
      details: [
        '📍 GPS location detection for precise delivery',
        '🏠 Manual address entry option',
        '🏢 Landmark-based selection for easy identification',
        '📱 Real-time location sharing with driver'
      ],
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
    {
      number: '02',
      icon: Car,
      title: 'Select Vehicle & Fuel',
      description: 'Choose your vehicle type and fuel grade that matches your requirements. We support all vehicle types and fuel preferences.',
      details: [
        '🚗 Car, truck, motorcycle options available',
        '⛽ Gasoline, diesel, premium fuels',
        '📊 Fuel quantity selection (liters/gallons)',
        '🔧 Special requirements support'
      ],
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-100',
    },
    {
      number: '03',
      icon: Smartphone,
      title: 'Track Your Order',
      description: 'Monitor your fuel delivery in real-time with live tracking and updates. Watch your fuel arrive at your location.',
      details: [
        '📍 Real-time driver location tracking',
        '⏰ Estimated arrival time updates',
        '📱 Delivery status notifications',
        '📞 Direct contact with driver'
      ],
      color: 'text-accent-600',
      bgColor: 'bg-accent-100',
    },
  ]

  return (
    <section id="services" ref={ref} className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How It Works - <span className="text-gradient">3 Easy Steps</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Getting fuel delivered has never been easier. Follow these simple steps 
            and have fuel at your location in no time.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0">
            <div className={`h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full transition-all duration-2000 ease-out ${inView ? 'w-full' : 'w-0'}`} />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 group cursor-pointer ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
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
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Step Details */}
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-white">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Connection Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center animate-bounce">
                      <div className="w-2 h-2 bg-primary-600 rounded-full" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* Additional Features */}
        <div className={`mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
            Why Choose Banzeeni?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚡', title: 'Fast Delivery', desc: 'Average 30-minute delivery time with professional fuel trucks' },
              { icon: '🛡️', title: 'Safe & Secure', desc: 'Certified drivers and advanced safety protocols' },
              { icon: '💰', title: 'Competitive Prices', desc: 'Transparent pricing with no hidden fees or surprises' },
              { icon: '📱', title: 'Easy Tracking', desc: 'Real-time updates and live driver tracking' },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer group"
                style={{ 
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h4 className="font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">{feature.title}</h4>
                <p className="text-sm text-white group-hover:text-gray-300 transition-colors duration-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}