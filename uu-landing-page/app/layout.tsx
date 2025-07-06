import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/seo/StructuredData'
import { GoogleAnalytics, MicrosoftClarity } from '@/components/analytics/Analytics'
import SkipToContent from '@/components/accessibility/SkipToContent'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://uu-growth.com'),
  title: {
    default: 'UU株式会社 | 実行支援型グロースコンサルティング',
    template: '%s | UU株式会社',
  },
  description: '勝てる構造作りと顧客理解から事業成長を最大化。起業3社・売却2社の経験と、8社への支援実績から導いた再現性あるグロースメソッドで、週1-2日の併走から確実な成長を実現します。',
  keywords: [
    'グロースコンサルティング',
    'スタートアップ支援', 
    '事業成長',
    '実行支援',
    'グロースハック',
    'シリーズA',
    'シリーズB',
    'PMF',
    'LTV向上',
    'CAC改善'
  ],
  authors: [{ name: 'UU株式会社', url: 'https://uu-growth.com' }],
  creator: 'UU株式会社',
  publisher: 'UU株式会社',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'UU株式会社 | 実行支援型グロースコンサルティング',
    description: '勝てる構造作りと顧客理解から事業成長を最大化します',
    url: 'https://uu-growth.com',
    siteName: 'UU株式会社',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UU株式会社 グロースコンサルティング',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UU株式会社 | 実行支援型グロースコンサルティング',
    description: '勝てる構造作りと顧客理解から事業成長を最大化します',
    images: ['/twitter-image.png'],
    creator: '@uu_growth',
    site: '@uu_growth',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <head>
        <StructuredData />
      </head>
      <body>
        <SkipToContent />
        <div className="min-h-screen flex flex-col">
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </div>
        
        {/* Analytics - Only load in production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <GoogleAnalytics gaId="G-XXXXXXXXXX" />
            <MicrosoftClarity clarityId="xxxxxxxxxx" />
          </>
        )}
      </body>
    </html>
  )
}