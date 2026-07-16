import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: {
    default: 'RyphTech - Modern Web Development & Technology Solutions',
    template: '%s | RyphTech',
  },
  description:
    'RyphTech delivers cutting-edge web development, mobile apps, and AI solutions. Expert React, Next.js, and machine learning services for modern businesses.',
  keywords: [
    'web development', 'mobile app development', 'machine learning', 'AI solutions',
    'React', 'Next.js', 'poster design', 'Kerala', 'India', 'RyphTech',
  ],
  authors: [
    { name: 'Thanzeer J' },
    { name: 'Devdarsh M' },
  ],
  creator: 'RyphTech',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'RyphTech',
    title: 'RyphTech - Modern Web Development & Technology Solutions',
    description: 'Transforming ideas into digital reality. Web development, mobile apps, AI solutions, and design services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RyphTech - Modern Web Development & Technology Solutions',
    description: 'Transforming ideas into digital reality. Web development, mobile apps, AI solutions, and design services.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
