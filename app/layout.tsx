import type React from "react"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ErrorBoundary from "@/components/ErrorBoundary"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "DataOps Group - Expert HubSpot Implementation & Data Operations Consulting",
    template: "%s | DataOps Group",
  },
  description:
    "Transform your data operations with expert HubSpot implementation and consulting. Specialized in private equity portfolio companies and growing businesses.",
  keywords: [
    "HubSpot implementation",
    "data operations",
    "private equity",
    "marketing operations",
    "RevOps",
    "business intelligence",
    "data consulting",
  ],
  authors: [{ name: "DataOps Group" }],
  creator: "DataOps Group",
  publisher: "DataOps Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dataopsgroup.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dataopsgroup.com",
    siteName: "DataOps Group",
    title: "DataOps Group - Expert HubSpot Implementation & Data Operations Consulting",
    description:
      "Transform your data operations with expert HubSpot implementation and consulting. Specialized in private equity portfolio companies and growing businesses.",
    images: [
      {
        url: "/images/dataops-logo-horizontal.jpg",
        width: 1200,
        height: 630,
        alt: "DataOps Group - Expert HubSpot Implementation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataOps Group - Expert HubSpot Implementation & Data Operations Consulting",
    description:
      "Transform your data operations with expert HubSpot implementation and consulting. Specialized in private equity portfolio companies and growing businesses.",
    images: ["/images/dataops-logo-horizontal.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <main id="main-content">{children}</main>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
