import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "PathFinder - Your Career Journey Starts Here",
  description: "Find internships, improve your resume, and ace interviews with PathFinder's AI-powered career platform",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/pathfinder-logo.png",
  },
  openGraph: {
    title: "PathFinder - Your Career Journey Starts Here",
    description:
      "Find internships, improve your resume, and ace interviews with PathFinder's AI-powered career platform",
    url: "https://pathfinder.app",
    siteName: "PathFinder",
    images: [
      {
        url: "/pathfinder-logo.png",
        width: 1200,
        height: 630,
        alt: "PathFinder - Career Platform for Students",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PathFinder - Your Career Journey Starts Here",
    description:
      "Find internships, improve your resume, and ace interviews with PathFinder's AI-powered career platform",
    images: ["/pathfinder-logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
