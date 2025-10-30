'use client'

import { useState } from 'react'

interface Quote {
  text: string
  author: string
  category?: string
  date?: string
  createdAt?: string
}

interface MinimalistQuoteProps {
  quote: Quote
  fetchNewQuote: () => void
}

export default function MinimalistQuote({ quote, fetchNewQuote }: MinimalistQuoteProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col min-h-screen justify-between items-center px-4 sm:px-6 py-8 sm:py-12 relative">
      {/* Main quote content - centered */}
      <div className="flex-1 flex items-center justify-center w-full max-w-6xl px-4">
        <blockquote className="text-center">
          <p
            className="text-white leading-relaxed font-serif italic tracking-wide"
            style={{
              fontSize: 'clamp(1.75rem, 6vw, 4rem)',
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: '400',
              lineHeight: '1.3',
              letterSpacing: '-0.02em'
            }}
          >
            {quote.text}
          </p>
        </blockquote>
      </div>

      {/* Discreet footer with author and controls */}
      <footer className="w-full max-w-4xl mt-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm space-y-4 sm:space-y-0">
          <div className="font-light text-center sm:text-left" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            <span className="opacity-70">—</span> {quote.author}
          </div>
          
          <button
            onClick={fetchNewQuote}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="px-4 py-3 border border-gray-700 rounded-full text-xs uppercase tracking-widest transition-all duration-300 hover:border-gray-500 hover:text-gray-300 min-h-[44px] w-full sm:w-auto"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {isHovered ? 'Next Quote' : 'Another'}
          </button>
        </div>
      </footer>

      {/* Add Google Fonts for elegant typography */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
      `}</style>
    </div>
  )
}