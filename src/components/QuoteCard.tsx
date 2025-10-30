interface Quote {
  text: string
  author: string
  category?: string
  date?: string
  createdAt?: string
}

interface QuoteCardProps {
  quote: Quote
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'mental-health':
        return 'bg-blue-100 text-blue-800'
      case 'mens-health':
        return 'bg-green-100 text-green-800'
      case 'motivation':
        return 'bg-purple-100 text-purple-800'
      case 'resilience':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryLabel = (category?: string) => {
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
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 fade-in max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 truncate">Today's Quote</h2>
            {quote.date && (
              <p className="text-xs sm:text-sm text-gray-500">{formatDate(quote.date)}</p>
            )}
          </div>
        </div>
        
        {quote.category && (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(quote.category)} self-start sm:self-auto`}>
            {getCategoryLabel(quote.category)}
          </span>
        )}
      </div>

      <blockquote className="relative">
        <div className="absolute -top-3 sm:-top-4 -left-1 sm:-left-2 text-4xl sm:text-6xl text-primary-200 opacity-50">
          "
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 pl-4 sm:pl-6 italic">
          {quote.text}
        </p>
        <div className="absolute -bottom-3 sm:-bottom-4 -right-1 sm:-right-2 text-4xl sm:text-6xl text-primary-200 opacity-50 rotate-180">
          "
        </div>
      </blockquote>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-800 truncate">{quote.author}</p>
            <p className="text-xs text-gray-500">Author</p>
          </div>
        </div>

        <div className="flex space-x-2 self-end sm:self-auto">
          <button
            className="p-3 sm:p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors group min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Mental Health Quote',
                  text: `"${quote.text}" - ${quote.author}`,
                  url: window.location.href
                })
              } else {
                navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`)
                alert('Quote copied to clipboard!')
              }
            }}
            title="Share quote"
          >
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m0 0A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.032-7.326"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}