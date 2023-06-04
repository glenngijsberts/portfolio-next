import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import '~/styles/global.css'
import { PageLayout } from '~/components/PageLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Glenn Gijsberts - Front-end developer',
  description:
    "Graduated as interaction designer, now working as front-end developer on modern and user-friendly websites and apps. Currently I'm working in the growth team of TicketSwap",
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'Front-end developer',
    'Interaction Designer',
    'Glenn Gijsberts',
  ],
  authors: [{ name: 'Glenn Gijsberts', url: 'https://glenngijsberts.vercel.app' }],
  openGraph: {
    title: 'Glenn Gijsberts - Portfolio',
    description: 'Portfolio of Glenn Gijsberts, front-end developer at TicketSwap',
    url: 'https://glenngijsberts.vercel.app',
    siteName: 'Glenn Gijsberts - Portfolio',
    images: [
      {
        url: '/images/glenngijsberts.webp',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  )
}
