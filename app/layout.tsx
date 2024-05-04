import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sevenline Labs',
  description: 'Sevenline Labs Company',
  keywords: 'Sevenline Labs',
  authors: { name: 'Sevenline Labs', url: 'https://sevenlinelabs.com/' },
  openGraph: {
    locale: 'ko_KR',
    type: 'website',
    siteName: 'Sevenline Labs',
    title: 'Sevenline Labs',
    description: 'Sevenline Labs Company',
    images: 'https://sevenlinelabs.com/thumbnail.jpg',
    url: 'https://sevenlinelabs.com/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
