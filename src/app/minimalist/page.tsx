'use client'

import { useState, useEffect } from 'react'
import MinimalistQuote from '@/components/MinimalistQuote'
import LoadingSpinner from '@/components/LoadingSpinner'
import DateTimeDisplay from '@/components/DateTimeDisplay'
import SpotifyPlayer from '@/components/SpotifyPlayer'

export default function MinimalistPage() {
  const [quote, setQuote] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchTodayQuote()
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
      setQuote(data.data)
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
      setQuote(data.data)
    } catch (err) {
      setError('Unable to load a new quote. Please try again later.')
      console.error('Error fetching new quote:', err)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col pb-20">
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
        <>
          <div className="w-full max-w-4xl px-4 mb-4 sm:mb-6">
            <DateTimeDisplay />
          </div>
          <MinimalistQuote quote={quote} fetchNewQuote={fetchNewQuote} />
          <SpotifyPlayer />
        </>
      )}
    </div>
  )
}