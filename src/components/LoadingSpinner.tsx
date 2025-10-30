export default function LoadingSpinner({ darkMode = false }: { darkMode?: boolean }) {
  const textColorClass = darkMode ? "text-gray-400" : "text-gray-600"
  const subTextColorClass = darkMode ? "text-gray-500" : "text-gray-500"
  const spinnerColorClass = darkMode ? "border-gray-700" : "border-primary-200"
  const spinnerActiveColorClass = darkMode ? "border-white" : "border-primary-600"
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <div className="relative">
        <div className={`w-12 h-12 sm:w-16 sm:h-16 border-4 ${spinnerColorClass} rounded-full animate-spin`}></div>
        <div className={`w-12 h-12 sm:w-16 sm:h-16 border-4 ${spinnerActiveColorClass} rounded-full animate-spin border-t-transparent absolute top-0 left-0`}></div>
      </div>
      <p className={`mt-3 sm:mt-4 ${textColorClass} font-medium text-center text-sm sm:text-base`}>Loading today's inspiration...</p>
      <p className={`mt-1 sm:mt-2 text-xs sm:text-sm ${subTextColorClass} text-center max-w-xs`}>Taking a moment to find the perfect quote for you</p>
    </div>
  )
}