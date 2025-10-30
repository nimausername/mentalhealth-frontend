import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CopyrightFooter from '@/components/CopyrightFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Mental Health Quotes - Daily Inspiration',
  description: 'Daily mental health quotes and inspiration for anyone seeking motivation and support. Made by Nima Khabbazi',
  keywords: ['mental health', 'quotes', 'inspiration', 'mens health', 'wellness', 'nima khabbazi'],
  authors: [{ name: 'Nima Khabbazi' }],
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'Mental Health Quotes - Daily Inspiration',
    description: 'Daily mental health quotes and inspiration for anyone seeking motivation and support. Made by Nima Khabbazi',
    type: 'website',
    url: 'https://mentalhealthquotes.nimakhabbazi.com',
    siteName: 'Mental Health Quotes',
    images: [{ url: '/home-og.png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-black flex flex-col">
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <CopyrightFooter />
        </div>
      </body>
    </html>
  )
}