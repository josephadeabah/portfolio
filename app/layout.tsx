import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Joseph Adeabah — AI/ML Engineer',
  description: 'Portfolio and CV of Joseph Adeabah, an AI/ML-focused software engineer building useful production software.',
  generator: 'Joseph',
  icons: {
    icon: [
      {
        url: '/images/Joseph.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/Joseph.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/images/Joseph.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
