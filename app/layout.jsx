import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata = {
  title: 'RegGuard.ai | AI-Powered Regulatory Intelligence',
  description: 'Monitor federal regulations, analyze compliance impact, and generate public comments in seconds. Stay ahead of regulatory changes that matter to your business.',
  keywords: ['regulatory compliance', 'AI', 'government affairs', 'public comments', 'federal register', 'compliance monitoring'],
  authors: [{ name: 'RegGuard.ai' }],
  creator: 'RegGuard.ai',
  publisher: 'RegGuard.ai',
  metadataBase: new URL('https://regguard.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RegGuard.ai | AI-Powered Regulatory Intelligence',
    description: 'Monitor federal regulations, analyze compliance impact, and generate public comments in seconds.',
    url: 'https://regguard.ai',
    siteName: 'RegGuard.ai',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RegGuard.ai - Regulatory Intelligence Powered by AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RegGuard.ai | AI-Powered Regulatory Intelligence',
    description: 'Monitor federal regulations, analyze compliance impact, and generate public comments in seconds.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
