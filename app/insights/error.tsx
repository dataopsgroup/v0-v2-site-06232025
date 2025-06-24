"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InsightsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Blog insights error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-8">We encountered an error while loading the blog insights. Please try again.</p>
        <div className="space-y-4">
          <Button onClick={reset} className="w-full">
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
