'use client'

import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '(+964) 07506813030',
      description: '24/7 Customer Support',
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
      link: 'https://wa.me/9647506813030',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'support@banzeeni.com',
      description: 'We respond within 2 hours',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-100',
      link: 'mailto:support@banzeeni.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Erbil, Southern Industrial Area',
      description: 'Visit our main office',
      color: 'text-accent-600',
      bgColor: 'bg-accent-100',
      link: 'https://maps.app.goo.gl/TunvJv8N1T5GVfXC9',
    },
  ]

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="section-padding"
      style={{
        backgroundImage: 'url(/images/CS.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Fixed background for desktop
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
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed px-4">
            Have questions about our fuel delivery service? We&apos;re here to help! 
            Contact us anytime and we&apos;ll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>

              {isSubmitted && (
                <div className="mt-4 flex items-center justify-center space-x-2 text-green-500 animate-fade-in">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={info.link.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 block cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-lg font-medium text-white mb-1">{info.value}</p>
                      <p className="text-sm text-white">{info.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-primary-50 rounded-xl p-6">
              <h4 className="font-semibold text-primary-900 mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-primary-700">Monday - Sunday</span>
                  <span className="text-primary-800 font-medium">7:00 AM - 11:00 PM</span>
                </div>
                <div className="text-center mt-3">
                  <span className="text-primary-600 font-medium text-xs bg-primary-100 px-3 py-1 rounded-full">
                    Available Every Day
                  </span>
                </div>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-white mb-4">Frequently Asked Questions</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-white">How long does delivery take?</p>
                  <p className="text-white">Average delivery time is 30-45 minutes.</p>
                </div>
                <div>
                  <p className="font-medium text-white">What payment methods do you accept?</p>
                  <p className="text-white">Credit cards, debit cards, and digital wallets.</p>
                </div>
                <div>
                  <p className="font-medium text-white">Is the service available 24/7?</p>
                  <p className="text-white">Yes, we provide 24/7 emergency fuel delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}