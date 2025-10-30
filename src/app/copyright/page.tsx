'use client'

import { useRouter } from 'next/navigation'

export default function CopyrightPage() {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

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
              Copyright & Credits
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
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Music Copyright */}
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 lg:p-6 border border-gray-800">
            <h2
              className="text-lg sm:text-xl font-light text-white mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Music
            </h2>
            <div className="space-y-2 sm:space-y-3 text-gray-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Track:</span>
                <span>"guitar meditations (III)"</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Artist:</span>
                <span>Vraell</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Album:</span>
                <span>guitar meditations</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Copyright:</span>
                <span>© {currentYear} Vraell</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">License:</span>
                <span>Streamed via Spotify embed. All rights reserved by the original artist.</span>
              </div>
              <div className="mt-3 sm:mt-4">
                <a
                  href="https://open.spotify.com/track/0lCuvgT3EAzeSIxJYnuH6r?si=94c824668f6e4fe7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-xs sm:text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Listen on Spotify
                </a>
              </div>
            </div>
          </div>

          {/* Website Copyright */}
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 lg:p-6 border border-gray-800">
            <h2
              className="text-lg sm:text-xl font-light text-white mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Website
            </h2>
            <div className="space-y-2 sm:space-y-3 text-gray-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Copyright:</span>
                <span>© {currentYear} Mental Health Quotes</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Purpose:</span>
                <span>Daily inspiration and mental wellness support</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Technology:</span>
                <span>Built with Next.js, React, TypeScript, and Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Third-party Assets */}
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 lg:p-6 border border-gray-800">
            <h2
              className="text-lg sm:text-xl font-light text-white mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Third-party Assets
            </h2>
            <div className="space-y-2 sm:space-y-3 text-gray-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Icons:</span>
                <span>Heroicons - MIT License</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Fonts:</span>
                <span>Playfair Display, Inter - Google Fonts</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Background:</span>
                <span>Custom design</span>
              </div>
            </div>
          </div>

          {/* About Developer */}
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 lg:p-6 border border-gray-800">
            <h2
              className="text-lg sm:text-xl font-light text-white mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              About Developer
            </h2>
            <div className="space-y-2 sm:space-y-3 text-gray-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Developer:</span>
                <span><a href="https://www.nimakhabbazi.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">Nima Khabbazi</a></span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Focus:</span>
                <span>I am not a Full-stack developer yet, but I am learning and improving my skills to become one.</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Technologies:</span>
                <span>React, Next.js, TypeScript, Node.js, MongoDB, Tailwind CSS, HTML, CSS</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400">Philosophy:</span>
                <span>Building clean, user-focused applications with attention to detail and accessibility.</span>
              </div>
            </div>
          </div>

          {/* Usage Rights */}
          <div className="bg-gray-900 rounded-lg p-3 sm:p-4 lg:p-6 border border-gray-800">
            <h2
              className="text-lg sm:text-xl font-light text-white mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Usage Rights
            </h2>
            <div className="space-y-2 sm:space-y-3 text-gray-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <p>
                Music is streamed via Spotify embed player. The track "guitar meditations (III)" by Vraell
                is played through Spotify's official embed service.
              </p>
              <p>
                All music rights are managed by Spotify and the original artist.
                For more information about the track, visit the official Spotify page.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
      `}</style>
    </div>
  )
}