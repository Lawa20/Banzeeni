import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { ScrollUtils } from '@/components/ScrollUtils'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Banzeeni - On-Demand Fuel Delivery',
  description: 'Get fuel delivered to your location with Banzeeni. On-demand fuel delivery for individuals and businesses. Safe, reliable, and convenient.',
  keywords: 'fuel delivery, on-demand fuel, mobile fuel, fuel station, fuel truck, fuel service',
  authors: [{ name: 'Banzeeni' }],
  creator: 'Banzeeni',
  publisher: 'Banzeeni',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://banzeeni.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Banzeeni - On-Demand Fuel Delivery',
    description: 'Get fuel delivered to your location with Banzeeni. On-demand fuel delivery for individuals and businesses.',
    url: 'https://banzeeni.com',
    siteName: 'Banzeeni',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Banzeeni - On-Demand Fuel Delivery',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banzeeni - On-Demand Fuel Delivery',
    description: 'Get fuel delivered to your location with Banzeeni. On-demand fuel delivery for individuals and businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="font-sans antialiased">
        <ScrollUtils />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Ensure immediate scroll initialization
              document.addEventListener('DOMContentLoaded', function() {
                document.documentElement.style.overscrollBehavior = 'auto';
                document.body.style.overscrollBehavior = 'auto';
                document.documentElement.style.willChange = 'auto';
                document.body.style.willChange = 'auto';
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
