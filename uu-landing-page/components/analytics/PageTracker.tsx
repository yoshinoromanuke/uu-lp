'use client'

import { useEffect } from 'react'
import { useScrollTracking, trackEvent } from './Analytics'

export default function PageTracker() {
  useScrollTracking()

  useEffect(() => {
    // Track page view
    trackEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href,
    })

    // Track session start
    if (!sessionStorage.getItem('session_start')) {
      trackEvent('session_start')
      sessionStorage.setItem('session_start', 'true')
    }

    // Track time on page
    const startTime = Date.now()
    
    const handleBeforeUnload = () => {
      const timeOnPage = Math.floor((Date.now() - startTime) / 1000)
      trackEvent('time_on_page', {
        duration_seconds: timeOnPage,
      })
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  return null
}