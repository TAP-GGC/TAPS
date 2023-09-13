import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TAPS',
  description: 'TAPS Club @ GGC Website',
  applicationName: 'TAPS Website',
  authors: [{ name: 'Khamilah Nixon' }, { name: 'ReAnn Hollins' }],
  generator: 'Next.js',
  keywords: ['nextjs','react','taps','GGC','technology','ambassador','program'],
  referrer: 'origin',
  viewport: "width=device-width, initial-scale=1",
  creator: "GGC TAPS Officers",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
