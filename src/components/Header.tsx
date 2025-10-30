'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl font-bold text-gray-800 truncate">
              🌱 Mental Health Quotes
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base">
              Home
            </a>
            <a href="/minimalist" className="text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base">
              Minimalist
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base">
              About
            </a>
            <a href="#resources" className="text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base">
              Resources
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 sm:py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              <a
                href="#home"
                className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 sm:px-2 sm:py-1 text-base sm:text-sm rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/minimalist"
                className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 sm:px-2 sm:py-1 text-base sm:text-sm rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Minimalist
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 sm:px-2 sm:py-1 text-base sm:text-sm rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#resources"
                className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 sm:px-2 sm:py-1 text-base sm:text-sm rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}