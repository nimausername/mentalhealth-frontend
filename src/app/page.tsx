'use client'

// Force refresh - Updated at 22:34

import { useState, useEffect } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import DateTimeDisplay from '@/components/DateTimeDisplay'
import SpotifyPlayer from '@/components/SpotifyPlayer'
import CopyrightFooter from '@/components/CopyrightFooter'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [quote, setQuote] = useState<any>(null)
  const [allQuotes, setAllQuotes] = useState<any[]>([])
  const [shownQuoteIds, setShownQuoteIds] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchTodayQuote()
    // Preload all quotes for fast local random selection
    fetchAllQuotes()
  }, [])

  const fetchTodayQuote = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/quotes/today`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch quote')
      }
      
      const data = await response.json()
      setQuote(data.data) // The quote is in the data field
    } catch (err) {
      setError('Unable to load today\'s quote. Please try again later.')
      console.error('Error fetching quote:', err)
    } finally {
      setLoading(false)
    }
  }

  const fetchNewQuote = async () => {
    try {
      setError(null)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/quotes/random`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch quote')
      }
      
      const data = await response.json()
      setQuote(data.data) // The quote is in the data field
    } catch (err) {
      setError('Unable to load a new quote. Please try again later.')
      console.error('Error fetching new quote:', err)
    }
  }

  const fetchAllQuotes = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/quotes/all`)
      if (!response.ok) return
      const data = await response.json()
      const list = Array.isArray(data.data) ? data.data : []
      setAllQuotes(list)
    } catch (e) {
      // silent fallback; random API endpoint will still work
    }
  }

  const handleRandomFromAll = () => {
    if (!allQuotes || allQuotes.length === 0) {
      // Fallback to API-based random if preload failed
      void fetchNewQuote()
      return
    }

    const remaining = allQuotes.filter((q: any) => q && q._id && !shownQuoteIds.has(q._id))
    const pool = remaining.length > 0 ? remaining : allQuotes

    if (remaining.length === 0) {
      // reset cycle after showing all
      setShownQuoteIds(new Set())
    }

    const next = pool[Math.floor(Math.random() * pool.length)]
    if (next) {
      setQuote(next)
      if (next._id) {
        setShownQuoteIds(prev => new Set(prev).add(next._id))
      }
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {loading ? (
        <LoadingSpinner darkMode={true} />
      ) : error ? (
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="text-center">
            <p className="text-gray-400 mb-6 text-sm sm:text-base">{error}</p>
            <button
              onClick={fetchTodayQuote}
              className="text-white border border-gray-600 hover:border-gray-400 px-6 py-3 rounded transition-colors min-h-[44px]"
            >
              Try Again
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col min-h-screen justify-between items-center px-4 sm:px-6 py-8 sm:py-12 relative">
          {/* Date and time display */}
          <div className="w-full max-w-4xl px-4 mb-4 sm:mb-6">
            <DateTimeDisplay />
          </div>

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
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                <button
                  onClick={() => router.push('/past-quotes')}
                  className="px-4 py-3 border border-gray-700 rounded-full text-xs uppercase tracking-widest transition-all duration-300 hover:border-gray-500 hover:text-gray-300 min-h-[44px] w-full sm:w-auto"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  Past Quotes
                </button>
                
                <button
                  onClick={handleRandomFromAll}
                  className="px-4 py-3 border border-gray-700 rounded-full text-xs uppercase tracking-widest transition-all duration-300 hover:border-gray-500 hover:text-gray-300 min-h-[44px] w-full sm:w-auto"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  Another Quote
                </button>
              </div>
            </div>
          </footer>

          {/* Add Google Fonts for elegant typography */}
          <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
          `}</style>
          {/* Spotify Player */}
          <SpotifyPlayer />
          
          {/* Footer now rendered globally in layout */}
        </div>
      )}
    </div>
  )
}