"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const getServicesActiveState = () => {
    return pathname.startsWith("/services")
  }

  const getInsightsActiveState = () => {
    return pathname.startsWith("/insights")
  }

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          <div className="flex items-center">
            <Link href="/" className="flex items-center py-2">
              <img
                src="/images/dataops-logo-horizontal.jpg"
                alt="DataOps Group - Home"
                className="w-[200px] h-[68px] object-contain"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 mx-auto">
            <div className="relative group">
              <button
                className={`text-base hover:text-blue-600 flex items-center ${
                  getServicesActiveState() ? "text-blue-600 font-medium" : "text-gray-700"
                }`}
              >
                Services <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/services/analytics-bi"
                    className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                  >
                    Analytics & BI
                  </Link>
                  <Link
                    href="/services/dataops-implementation"
                    className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                  >
                    DataOps Implementation
                  </Link>
                  <Link
                    href="/services/team-training"
                    className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                  >
                    Team Training
                  </Link>
                  <Link
                    href="/services/marketing-operations-revops"
                    className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                  >
                    Marketing Operations & RevOps
                  </Link>
                </div>
              </div>
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
            <div className="relative group">
              <button
                className={`text-base hover:text-blue-600 flex items-center ${
                  getInsightsActiveState() ? "text-blue-600 font-medium" : "text-gray-700"
                }`}
              >
                Insights <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/insights"
                    className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                  >
                    All Insights
                  </Link>
                  <Link
                    href="/insights/hubspot-for-private-equity"
                    className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                  >
                    HubSpot for Private Equity
                  </Link>
                  <Link
                    href="/guides/hubspot-expert"
                    className="block px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 text-gray-700"
                  >
                    How to Hire a HubSpot Expert
                  </Link>
                </div>
              </div>
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
