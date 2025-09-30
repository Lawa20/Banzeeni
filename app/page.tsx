import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AppShowcaseSection } from '@/components/sections/AppShowcaseSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AppShowcaseSection />
      <ContactSection />
    </>
  )
}
