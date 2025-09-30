'use client'

import { Apple, Smartphone, Star } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export function AppShowcaseSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    { icon: '📍', title: 'GPS Location', desc: 'Precise location detection' },
    { icon: '⏰', title: 'Real-time ETA', desc: 'Live delivery tracking' },
    { icon: '💳', title: 'Secure Payment', desc: 'Multiple payment options' },
    { icon: '📞', title: 'Driver Contact', desc: 'Direct communication' },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Download the <span className="text-gradient">Banzeeni App</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Experience seamless fuel delivery with our intuitive mobile application. 
            Available for both iOS and Android devices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile App Image */}
          <div className={`relative flex justify-center transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative w-full max-w-sm">
              {/* Phone Frame */}
              <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl mx-auto">
                <div className="w-full h-full bg-gray-800 rounded-[2.5rem] overflow-hidden relative">
                  {/* App Screenshot */}
                  <img 
                    src="/images/mobile.png" 
                    alt="Banzeeni Mobile App Screenshot"
                    className="w-full h-full object-cover rounded-[2.5rem]"
                  />
                  {/* App Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[2.5rem]"></div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg animate-bounce">
                📱
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse">
                ⚡
              </div>
            </div>
          </div>

          {/* App Features & Download */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* App Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">App Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: '📍', title: 'GPS Location', desc: 'Precise delivery to your exact location' },
                  { icon: '⛽', title: 'Fuel Selection', desc: 'Choose from gasoline, diesel, and premium fuels' },
                  { icon: '📱', title: 'Real-time Tracking', desc: 'Watch your fuel delivery in real-time' },
                  { icon: '💳', title: 'Secure Payment', desc: 'Safe and secure payment options' },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl p-4 flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-300">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* App Rating */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-white font-medium">4.3/5</span>
              </div>
              <p className="text-center text-white text-sm">
                &ldquo;Best fuel delivery app! Super convenient and reliable.&rdquo;
              </p>
              <p className="text-center text-gray-300 text-xs mt-2">- Omer N.</p>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <button 
                onClick={() => window.open('https://apps.apple.com/iq/app/banzeeni/id6443919393', '_blank')}
                className="w-full bg-black text-white rounded-xl p-4 flex items-center justify-center space-x-3 hover:bg-gray-800 transition-colors hover:scale-105"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm opacity-90">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </button>

              <button 
                onClick={() => window.open('https://play.google.com/store/apps/details?id=iq.click.banzeeni&pcampaignid=web_share', '_blank')}
                className="w-full bg-black text-white rounded-xl p-4 flex items-center justify-center space-x-3 hover:bg-gray-800 transition-colors hover:scale-105"
              >
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm opacity-90">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}