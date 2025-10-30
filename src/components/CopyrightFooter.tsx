'use client'

import Link from 'next/link'

export default function CopyrightFooter() {
  return (
    <footer role="contentinfo" className="w-full border-t border-gray-800 bg-black px-4">
      <Link
        href="/copyright"
        className="flex items-center justify-center min-h-[44px] py-3 text-[11px] sm:text-xs leading-none text-gray-500 hover:text-gray-300 transition-colors"
      >
        © {new Date().getFullYear()} Mental Health Quotes | Credits & License
      </Link>
    </footer>
  )
}