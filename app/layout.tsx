import type React from "react"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: 'Ioana Web Studio | Portfolio Websites for Small Brands & Creators',
  description: 'Helping small brands & creators stand out online with simple, stylish portfolio websites—thoughtful design, client-focused, growth-oriented, and fast & reliable.',
  keywords: [
    'portfolio website design',
    'small brand web design',
    'creator portfolio sites',
    'freelance web developer UK',
    'web designer UK',
    'custom portfolio website',
    'Ioana Web Studio',
    'portfolio websites Romania',
    'web design services',
  ],
  authors: [{ name: 'Ioana Web Studio', url: 'https://ioanawebstudio.com' }],
  creator: 'Ioana Web Studio',
  metadataBase: new URL('https://ioanawebstudio.com'),
  alternates: {
    canonical: 'https://ioanawebstudio.com',
    languages: {
      'en-GB': 'https://ioanawebstudio.com/en-gb',
      'ro': 'https://ioanawebstudio.com/ro',
      'en': 'https://ioanawebstudio.com',
      'x-default': 'https://ioanawebstudio.com',
    },
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
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png'
  },
  openGraph: {
    title: 'Ioana Web Studio | Portfolio Websites for Small Brands & Creators',
    description: 'Stand out online with a custom portfolio site from Ioana Web Studio—helping creators and small brands showcase their work with simple, stylish, high-performing designs.',
    url: 'https://ioanawebstudio.com',
    siteName: 'Ioana Web Studio',
    images: [
      {
        url: 'https://ioanawebstudio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Screenshot of a clean, stylish portfolio website by Ioana Web Studio',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@IoanaWebStudio',
    creator: '@IoanaWebStudio',
    title: 'Ioana Web Studio | Stand Out Online with Stylish Portfolio Websites',
    description: 'Custom portfolio websites for small brands & creators—thoughtful design, interactive elements, and reliable performance.'  
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ioana Web Studio',
              url: 'https://ioanawebstudio.com',
              logo: 'https://ioanawebstudio.com/logo.png',
              description: 'Portfolio websites for small brands and creators',
              sameAs: [
                'https://twitter.com/IoanaWebStudio',
                'https://linkedin.com/company/ioana-web-studio',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'hello@ioanawebstudio.com',
              },
              areaServed: ['GB', 'RO', 'Worldwide'],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  )
}
