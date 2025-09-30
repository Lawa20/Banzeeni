# Banzeeni Website

A modern, high-impact, animated frontend for Banzeeni's fuel delivery service built with Next.js, React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first responsive design for all devices
- **Animated**: Framer Motion animations throughout the site
- **Accessible**: ARIA labels, keyboard navigation, and color contrast
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Fast**: Optimized images, code splitting, and lazy loading

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **TypeScript**: Full type safety
- **Performance**: Next.js optimizations

## 📁 Project Structure

```
banzeeni-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── loading.tsx          # Loading component
│   └── not-found.tsx        # 404 page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Footer.tsx           # Footer component
│   ├── sections/            # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AppShowcaseSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx
│       └── ScrollToTop.tsx
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9)
- **Secondary**: Yellow (#facc15)
- **Accent**: Purple (#d946ef)
- **Neutral**: Gray scale

### Typography
- **Headings**: Poppins (Bold, 600-900)
- **Body**: Inter (Regular, 300-500)

### Animations
- **Fade In**: Smooth opacity transitions
- **Slide Up**: Y-axis movement with easing
- **Hover Effects**: Scale and lift on interaction
- **Scroll Triggers**: Intersection Observer animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Sections Overview

### 1. Hero Section
- Cinematic background with floating elements
- Clear value proposition
- App store download buttons
- Smooth scroll indicator

### 2. About Section
- Company overview with feature cards
- Statistics and trust indicators
- Call-to-action buttons

### 3. Services Section
- 3-step process with animated progress
- Interactive step cards
- Feature highlights

### 4. App Showcase
- Phone mockup with rotating screenshots
- App features and benefits
- Download buttons with ratings

### 5. Contact Section
- Contact form with validation
- Business information
- FAQ preview

## 🎯 Key Features

### Animations
- **Parallax Effects**: Background elements move at different speeds
- **Scroll Triggers**: Animations activate when elements come into view
- **Micro-interactions**: Hover effects and button animations
- **Page Transitions**: Smooth navigation between sections

### Performance
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Components load as needed
- **Bundle Analysis**: Optimized bundle size

### Accessibility
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant colors
- **Focus Management**: Clear focus indicators

## 🔧 Customization

### Adding New Sections
1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `components/Navbar.tsx`

### Styling
- Modify `tailwind.config.js` for theme changes
- Update `app/globals.css` for global styles
- Use Tailwind classes for component styling

### Animations
- Add Framer Motion variants to components
- Use `useInView` hook for scroll triggers
- Customize animation timing and easing

## 📈 SEO & Performance

### SEO Features
- Meta tags and Open Graph
- Structured data
- Sitemap generation
- Robot.txt configuration

### Performance Optimizations
- Image optimization
- Code splitting
- Lazy loading
- Bundle analysis
- Core Web Vitals optimization

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📝 License

This project is proprietary to Banzeeni. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📞 Support

For support, email hello@banzeeni.com or visit our help center.

---

Built with ❤️ for Banzeeni
