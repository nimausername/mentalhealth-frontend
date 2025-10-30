'use client'

import { useState } from 'react'

export default function SpotifyPlayer() {
  const [showPlayer, setShowPlayer] = useState(false)
  const [position, setPosition] = useState<'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'>('top-right')

  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-4 left-4'
      case 'bottom-right':
        return 'bottom-4 right-4'
      case 'top-left':
        return 'top-4 left-4'
      case 'top-right':
        return 'top-4 right-4'
      default:
        return 'top-4 right-4'
    }
  }

  const getPlayerPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'absolute bottom-full left-0 mb-2'
      case 'bottom-right':
        return 'absolute bottom-full right-0 mb-2'
      case 'top-left':
        return 'absolute top-full left-0 mt-2'
      case 'top-right':
        return 'absolute top-full right-0 mt-2'
      default:
        return 'absolute top-full right-0 mt-2'
    }
  }

  const cyclePosition = () => {
    const positions: Array<'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'> = 
      ['top-right', 'top-left', 'bottom-left', 'bottom-right']
    const currentIndex = positions.indexOf(position)
    const nextIndex = (currentIndex + 1) % positions.length
    setPosition(positions[nextIndex])
  }

  return (
    <div className={`fixed ${getPositionClasses()} z-50`}>
      {/* Spotify button */}
      <button
        onClick={() => setShowPlayer(!showPlayer)}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-green-600 bg-opacity-80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-all duration-300 border border-green-700"
        aria-label="Toggle Spotify player"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      </button>

      {/* Spotify player */}
      {showPlayer && (
        <div className={`${getPlayerPositionClasses()} bg-gray-900 bg-opacity-95 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-gray-700 shadow-xl w-96 sm:w-[28rem] max-w-[98vw] overflow-hidden`}>
          <div className="space-y-2 sm:space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-white font-medium text-xs sm:text-sm">Now Playing</h3>
              <button
                onClick={() => setShowPlayer(false)}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-800 flex items-center justify-center"
                aria-label="Close player"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Spotify embed */}
            <div className="overflow-hidden rounded-lg w-full">
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/0lCuvgT3EAzeSIxJYnuH6r?theme=0"
                width="100%"
                height="380"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                className="sm:hidden"
              />
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/0lCuvgT3EAzeSIxJYnuH6r?theme=0"
                width="100%"
                height="420"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                className="hidden sm:block"
              />
            </div>

            {/* Position control */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-700">
              <div className="text-xs text-gray-400">
                Position: {position.replace('-', ' ')}
              </div>
              <button
                onClick={cyclePosition}
                className="p-2 text-xs text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800 min-h-[36px] min-w-[36px] flex items-center justify-center"
                aria-label="Change position"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}