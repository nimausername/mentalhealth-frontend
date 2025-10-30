'use client'

import Link from 'next/link'

export default function CopyrightFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 py-3 pb-4 text-center">
      <Link
        href="/copyright"
        className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
      >
        © Credits & License
      </Link>
    </footer>
  )
}