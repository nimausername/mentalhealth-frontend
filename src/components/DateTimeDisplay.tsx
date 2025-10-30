'use client'

import { useState, useEffect } from 'react'

export default function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState({
    date: '',
    time: ''
  })

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      
      // Format date
      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      }
      const dateString = now.toLocaleDateString('en-US', dateOptions)
      
      // Format time
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }
      const timeString = now.toLocaleTimeString('en-US', timeOptions)
      
      setDateTime({
        date: dateString,
        time: timeString
      })
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-gray-500 text-xs sm:text-sm font-light tracking-wide" 
         style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <span className="opacity-70">{dateTime.date}</span>
      <span className="mx-2">•</span>
      <span>{dateTime.time}</span>
    </div>
  )
}