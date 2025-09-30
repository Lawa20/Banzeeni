# Banzeeni Website Wireframe

## Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                        NAVBAR                               │
│  [Logo] [Home] [About] [Services] [Contact] [Download App]  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      HERO SECTION                          │
│                                                             │
│  🚛 [Animated Background: Fuel Truck/City Roads]          │
│                                                             │
│  "On-Demand Fuel Delivery for Individuals & Businesses"    │
│                                                             │
│  [Download on App Store] [Download on Google Play]        │
│                                                             │
│  [Scroll Down Indicator]                                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     ABOUT SECTION                          │
│                                                             │
│  "What is Banzeeni?"                                       │
│                                                             │
│  [🚛 Icon] Fuel Delivery    [⛽ Icon] Fuel Station        │
│  [📱 Icon] Mobile App       [🛡️ Icon] Safety First         │
│                                                             │
│  "We bring fuel to you, wherever you are"                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   SERVICES SECTION                         │
│                                                             │
│  "How It Works - 3 Easy Steps"                            │
│                                                             │
│  Step 1: Set Location    →    Step 2: Select Vehicle      │
│  [📍 Icon]              →    [🚗 Icon]                    │
│                                                             │
│  Step 3: Track Order                                        │
│  [📱 Icon]                                                   │
│                                                             │
│  [Animated Progress Line]                                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  APP SHOWCASE SECTION                      │
│                                                             │
│  [Phone Mockup with App Screenshots]                       │
│                                                             │
│  "Download the Banzeeni App"                               │
│                                                             │
│  [Download on App Store] [Download on Google Play]        │
│                                                             │
│  Features: Real-time tracking, Secure payments,           │
│  Multiple fuel types, Business accounts                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   CONTACT SECTION                          │
│                                                             │
│  "Get in Touch"                                            │
│                                                             │
│  [Contact Form]              [Contact Info]                │
│  Name: [input]              📞 +1 (555) 123-4567          │
│  Email: [input]             📧 hello@banzeeni.com         │
│  Message: [textarea]        📍 123 Fuel St, City, State  │
│  [Send Message]                                            │
│                                                             │
│  [Chat Widget]                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      FOOTER                                │
│                                                             │
│  [Logo]                                                     │
│                                                             │
│  About    Safety    Contact    Terms    Privacy            │
│                                                             │
│  © 2024 Banzeeni. All rights reserved.                     │
└─────────────────────────────────────────────────────────────┘
```

## Design Principles

1. **Mobile-First**: Responsive design starting from mobile
2. **Smooth Animations**: Framer Motion for all interactions
3. **Brand Colors**: Primary blue (#0ea5e9), Secondary yellow (#facc15)
4. **Typography**: Poppins for headings, Inter for body text
5. **Accessibility**: ARIA labels, keyboard navigation, color contrast
6. **Performance**: Lazy loading, code splitting, optimized images

## Animation Strategy

- **Hero**: Parallax background, fade-in text, floating elements
- **About**: Icon hover effects, slide-in animations
- **Services**: Step-by-step reveal, progress line animation
- **App Showcase**: Phone rotation, screenshot transitions
- **Contact**: Form validation feedback, smooth transitions
- **Scroll**: Intersection Observer for trigger animations
