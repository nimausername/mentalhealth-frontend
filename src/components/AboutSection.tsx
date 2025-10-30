export default function AboutSection() {
  return (
    <section id="about" className="mt-12 sm:mt-20 py-8 sm:py-12 bg-white rounded-2xl shadow-lg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About This Project
          </h2>
          <div className="w-16 h-1 sm:w-20 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-primary-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-primary-800 mb-2 sm:mb-3">
                🌟 A Personal Journey
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Created by Nima Khabbazi, a developer in Germany navigating through challenging times mentally. 
                This project serves as a daily reminder that we're not alone in our struggles and that healing 
                is possible.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2 sm:mb-3">
                💪 Men's Mental Health Matters
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                As men, we often face pressure to appear strong and silent. This space challenges that narrative, 
                encouraging open conversations about mental health and emotional well-being.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-2 sm:mb-3">
                🔄 Daily Inspiration
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Each day brings a new quote designed to provide comfort, motivation, and perspective. 
                Sometimes, right words at the right time can make all the difference.
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                🎯 The Mission
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                This project aims to:
              </p>
              <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 flex-shrink-0">✓</span>
                  <span>Provide daily mental health support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 flex-shrink-0">✓</span>
                  <span>Raise awareness about men's mental health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 flex-shrink-0">✓</span>
                  <span>Create a community of support and understanding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 flex-shrink-0">✓</span>
                  <span>Remind everyone that it's okay to not be okay</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-orange-800 mb-2 sm:mb-3">
                🤝 You're Not Alone
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Whether you're experiencing exhaustion, burnout, or simply need a moment of inspiration, 
                remember that seeking help is a sign of strength. Together, we can break the stigma around 
                mental health and build a more supportive community.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Remember</h3>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity."
            </p>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm opacity-90">- Every day is a new opportunity to heal and grow</p>
          </div>
        </div>
      </div>
    </section>
  )
}