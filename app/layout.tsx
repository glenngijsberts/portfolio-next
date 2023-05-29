import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import '~/styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Glenn Gijsberts - Front-end developer',
  description:
    "Graduated as interaction designer, now working as front-end developer on modern and user-friendly websites and apps. Currently I'm working in the growth team of TicketSwap",
}

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
