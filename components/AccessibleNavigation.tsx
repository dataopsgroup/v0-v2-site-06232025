"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"

export default function AccessibleNavigation() {
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [insightsOpen, setInsightsOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const insightsRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
      if (insightsRef.current && !insightsRef.current.contains(event.target as Node)) {
        setInsightsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, dropdownSetter: (open: boolean) => void, isOpen: boolean) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      dropdownSetter(!isOpen)
    } else if (event.key === "Escape") {
      dropdownSetter(false)
    }
  }

  return (
    <header className="border-b border-gray-200">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white px-4 py-2 z-50"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          <div className="flex items-center">
            <Link href="/" className="flex items-center py-2">
              <img
                src="/images/dataops-logo-horizontal.jpg"
                alt="DataOps Group - Expert HubSpot Implementation and Data Operations Consulting - Home"
                className="w-[200px] h-[68px] object-contain"
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 mx-auto" role="navigation" aria-label="Main navigation">
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                className={`text-base hover:text-blue-600 flex items-center ${
                  pathname.startsWith("/services") ? "text-blue-600 font-medium" : "text-gray-700"
                }`}
                onClick={() => setServicesOpen(!servicesOpen)}
                onKeyDown={(e) => handleKeyDown(e, setServicesOpen, servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2" role="menu">
                    <Link
                      href="/services/analytics-bi"
                      className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                    >
                      Analytics & BI
                    </Link>
                    <Link
                      href="/services/dataops-implementation"
                      className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                    >
                      DataOps Implementation
                    </Link>
                    <Link
                      href="/services/team-training"
                      className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                    >
                      Team Training
                    </Link>
                    <Link
                      href="/services/marketing-operations-revops"
                      className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                    >
                      Marketing Operations & RevOps
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`text-base hover:text-blue-600 ${
                isActive("/about") ? "text-blue-600 font-medium" : "text-gray-700"
              }`}
            >
              About
            </Link>

            <Link
              href="/approach"
              className={`text-base hover:text-blue-600 ${
                isActive("/approach") ? "text-blue-600 font-medium" : "text-gray-700"
              }`}
            >
              Approach
            </Link>

            {/* Insights Dropdown */}
            <div className="relative" ref={insightsRef}>
              <button
                className={`text-base hover:text-blue-600 flex items-center ${
                  pathname.startsWith("/insights") ? "text-blue-600 font-medium" : "text-gray-700"
                }`}
                onClick={() => setInsightsOpen(!insightsOpen)}
                onKeyDown={(e) => handleKeyDown(e, setInsightsOpen, insightsOpen)}
                aria-expanded={insightsOpen}
                aria-haspopup="true"
                aria-label="Insights menu"
              >
                Insights <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
              </button>

              {insightsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2" role="menu">
                    <Link
                      href="/insights"
                      className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                      role="menuitem"
                      onClick={() => setInsightsOpen(false)}
                    >
                      All Insights
                    </Link>
                    <Link
                      href="/insights/hubspot-for-private-equity"
                      className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                      role="menuitem"
                      onClick={() => setInsightsOpen(false)}
                    >
                      HubSpot for Private Equity
                    </Link>
                    <Link
                      href="/guides/hubspot-expert"
                      className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                      role="menuitem"
                      onClick={() => setInsightsOpen(false)}
                    >
                      How to Hire a HubSpot Expert
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="text-white rounded-none bg-green-500 hover:bg-green-600">
              <Link href="/contact">Get Started</Link>
            </Button>
            <div className="relative">
              <Button className="text-gray-900 hover:bg-yellow-500 rounded-none bg-yellow-400">
                <Link href="/book">📖 Copy Our Playbook</Link>
              </Button>
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                NEW
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
