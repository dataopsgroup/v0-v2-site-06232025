"use client"

import { Button } from "@/components/ui/button"
import { Database, BookOpen, BarChart3 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

// Split into smaller, focused components
function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="bg-gray-50 relative overflow-hidden py-20">
      {/* Optimized background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-wireframe-bg.jpg"
          alt=""
          fill
          className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          priority
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-white opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm text-gray-600">PE Portfolio Transformation</p>
              <h1 className="text-5xl lg:text-6xl text-gray-900 leading-tight">
                Turn PE Portfolio
                <br />
                Operations Into
                <br />
                Profit Drivers
                <span className="block text-yellow-500 mt-2">in 100 Days</span>
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base">
                <Link href="/data-operations-assessment">Get Your Free Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ValueProposition() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-sm text-gray-600 mb-4">Our Expertise</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are PE-specialized{" "}
              <Link href="/about" className="text-blue-600 hover:underline">
                HubSpot experts
              </Link>{" "}
              who transform fragmented systems into unified platforms that drive visibility, streamline reporting,
              improve efficiency, and create the data infrastructure your investors expect.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-center text-gray-700">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" aria-hidden="true"></div>
                <span>19% higher valuation multiples</span>
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" aria-hidden="true"></div>
                <span>73% faster EBITDA growth</span>
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" aria-hidden="true"></div>
                <span>$18-22 ROI per $1 invested in HubSpot</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 bg-green-50 p-8 space-y-8">
            <div>
              <p className="text-sm text-gray-600 mb-4">Proven Results</p>
              <h2 className="text-xl text-gray-900">Trusted by 50+ Companies to Rescue Their HubSpot Investments</h2>
            </div>
            <div className="grid grid-cols-3 gap-px bg-gray-200">
              <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center space-y-2">
                <div className="text-3xl text-blue-600">47%</div>
                <div className="text-sm text-gray-600">in 90 days</div>
                <div className="text-xs text-gray-400">Audio Visual Equipment Wholesaler</div>
              </div>
              <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center space-y-2">
                <div className="text-3xl text-blue-600">28%</div>
                <div className="text-sm text-gray-600">Reduced sales cycle</div>
                <div className="text-xs text-gray-400">Multi-National Insurance Provider</div>
              </div>
              <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center space-y-2">
                <div className="text-3xl text-blue-600">35%</div>
                <div className="text-sm text-gray-600">Improvement in close rates</div>
                <div className="text-xs text-gray-400">SaaS Healthcare Tech</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl text-gray-900 mb-4">Our Transformation Services</h2>
          <p className="text-gray-700 max-w-3xl leading-relaxed">
            Comprehensive HubSpot implementation and data operations solutions designed to transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 mb-8">
          <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-blue-600" strokeWidth={1} aria-hidden="true" />
            </div>
            <h3 className="text-lg text-gray-900 mb-3">Analytics & BI</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Transform data into actionable insights with comprehensive analytics and business intelligence solutions.
            </p>
          </div>

          <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <Database className="h-8 w-8 text-blue-600" strokeWidth={1} aria-hidden="true" />
            </div>
            <h3 className="text-lg text-gray-900 mb-3">DataOps Implementation</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Streamline your data operations with automated processes and improved data quality.
            </p>
          </div>

          <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-blue-600" strokeWidth={1} aria-hidden="true" />
            </div>
            <h3 className="text-lg text-gray-900 mb-3">HubSpot Training</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Comprehensive HubSpot setup and team training to maximize your investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl text-white">Ready to Transform Your Operations?</h2>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join 50+ companies that have already transformed their business operations with DataOps Group.
          </p>
          <div className="flex justify-center">
            <Button className="text-gray-900 hover:bg-yellow-500 px-8 py-3 text-base bg-yellow-400">
              <Link href="/data-operations-assessment">Get Your Free Assessment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function OptimizedHomePage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <CTASection />
    </main>
  )
}
