'use client'

import { useState, useEffect } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import { useRouter } from 'next/navigation'

interface Quote {
  _id: string
  text: string
  author: string
  category: string
  date: string
  isDailyQuote: boolean
  createdAt: string
}

export default function PastQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchPastQuotes()
  }, [])

  const fetchPastQuotes = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/quotes/all`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch past quotes')
      }
      
      const data = await response.json()
      setQuotes(data.data || [])
    } catch (err) {
      setError('Unable to load past quotes. Please try again later.')
      console.error('Error fetching past quotes:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'mental-health':
        return 'bg-blue-900 text-blue-200'
      case 'mens-health':
        return 'bg-green-900 text-green-200'
      case 'motivation':
        return 'bg-purple-900 text-purple-200'
      case 'resilience':
        return 'bg-orange-900 text-orange-200'
      default:
        return 'bg-gray-900 text-gray-200'
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'mental-health':
        return 'Mental Health'
      case 'mens-health':
        return "Men's Health"
      case 'motivation':
        return 'Motivation'
      case 'resilience':
        return 'Resilience'
      default:
        return 'Inspiration'
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-gray-800 sticky top-0 z-40 bg-black">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <h1 
              className="text-xl sm:text-2xl font-light text-white truncate"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Past Quotes
            </h1>
            <button
              onClick={() => router.push('/')}
              className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] min-w-[44px] px-2 sm:px-4 py-2 rounded-md hover:bg-gray-900 flex items-center"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <span className="hidden sm:inline">← Back to Today</span>
              <span className="sm:hidden">← Back</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {loading ? (
          <div className="flex justify-center py-12 sm:py-20">
            <LoadingSpinner darkMode={true} />
          </div>
        ) : error ? (
          <div className="text-center py-12 sm:py-20 px-4">
            <p className="text-gray-400 mb-6 text-sm sm:text-base">{error}</p>
            <button
              onClick={fetchPastQuotes}
              className="text-white border border-gray-600 hover:border-gray-400 px-6 py-3 rounded transition-colors min-h-[44px]"
            >
              Try Again
            </button>
          </div>
        ) : quotes.length === 0 ? (
          <div className="text-center py-12 sm:py-20 px-4">
            <p className="text-gray-400 text-sm sm:text-base">No past quotes found.</p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {quotes.map((quote) => (
              <div 
                key={quote._id} 
                className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(quote.category)}`}>
                      {getCategoryLabel(quote.category)}
                    </span>
                    {quote.isDailyQuote && (
                      <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-yellow-900 text-yellow-200">
                        Daily Quote
                      </span>
                    )}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {formatDate(quote.date || quote.createdAt)}
                  </div>
                </div>
                
                <blockquote className="text-white leading-relaxed mb-3 sm:mb-4 italic" 
                  style={{ 
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                    lineHeight: '1.6'
                  }}
                >
                  "{quote.text}"
                </blockquote>
                
                <div className="text-gray-400 text-xs sm:text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  — {quote.author}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
      `}</style>
    </div>
  )
}