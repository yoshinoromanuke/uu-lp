'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// Google Analytics 4
export function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}

// Microsoft Clarity
export function MicrosoftClarity({ clarityId }: { clarityId: string }) {
  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityId}");
      `}
    </Script>
  )
}

// Custom event tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      ...parameters,
      timestamp: new Date().toISOString(),
    })
  }
}

// Form tracking
export const trackFormSubmission = (formType: 'contact' | 'newsletter', formData?: Record<string, any>) => {
  trackEvent('form_submit', {
    form_type: formType,
    ...formData,
  })
}

// Scroll tracking
export function useScrollTracking() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      
      if (scrolled >= 25 && !sessionStorage.getItem('scroll_25')) {
        trackEvent('scroll_depth', { depth: 25 })
        sessionStorage.setItem('scroll_25', 'true')
      }
      
      if (scrolled >= 50 && !sessionStorage.getItem('scroll_50')) {
        trackEvent('scroll_depth', { depth: 50 })
        sessionStorage.setItem('scroll_50', 'true')
      }
      
      if (scrolled >= 75 && !sessionStorage.getItem('scroll_75')) {
        trackEvent('scroll_depth', { depth: 75 })
        sessionStorage.setItem('scroll_75', 'true')
      }
      
      if (scrolled >= 90 && !sessionStorage.getItem('scroll_90')) {
        trackEvent('scroll_depth', { depth: 90 })
        sessionStorage.setItem('scroll_90', 'true')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

// CTA click tracking
export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent('cta_click', {
    cta_text: ctaText,
    cta_location: location,
  })
}

// Section view tracking
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section_name: sectionName,
  })
}