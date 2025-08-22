import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import ContactBanner from "@/components/contact-banner"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Wyte Image Media - Event Management & Awards",
  description: "Professional event management, awards ceremonies, and magazine publishing services",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <div className="sticky top-0 z-50">
          <ContactBanner />
          <Navigation />
        </div>
        <main className="pt-0">{children}</main>
      </body>
    </html>
  )
}
