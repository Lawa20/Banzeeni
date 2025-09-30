'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="animate-fade-in">
          <div className="text-8xl font-bold text-primary-600 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            The page might have been moved or doesn&apos;t exist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
