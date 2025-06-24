"use client"

import Navigation from "@/components/navigation"
import GlobalCTA from "@/components/global-cta"
import {
  TrendingUp,
  Target,
  BarChart3,
  Users,
  Shield,
  Workflow,
  PieChart,
  LineChart,
  Database,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import GlobalFooter from "@/components/global-footer"

export default function MarketingOperationsRevOps() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing Operations & RevOps",
    description:
      "Optimize Portfolio Revenue Operations with Systematic Marketing Processes - Transform revenue operations with advanced analytics and data-driven strategies",
    provider: {
      "@type": "Organization",
      name: "DataOps Group",
    },
    serviceType: "Revenue Operations",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "RevOps Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Revenue Growth Optimization",
            description:
              "Optimize revenue operations to drive consistent, predictable growth across all portfolio companies.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketing Attribution",
            description:
              "Track and measure marketing impact across all touchpoints to optimize campaign performance and ROI.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Advanced Analytics",
            description: "Implement sophisticated analytics frameworks to gain deep insights into revenue performance.",
          },
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">Marketing Operations & RevOps</p>
                  <h1 className="text-4xl font-bold text-gray-900">
                    Optimize Portfolio Revenue Operations with Systematic Marketing Processes
                  </h1>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Transform your portfolio companies' revenue operations with advanced analytics, systematic marketing
                  processes, and data-driven strategies that drive measurable growth and operational efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="text-white hover:bg-blue-700 px-8 py-3 text-base rounded-none bg-blue-600">
                    Get RevOps Assessment
                  </button>
                  <Link
                    href="/approach"
                    className="text-blue-600 hover:text-blue-800 px-8 py-3 text-base border border-blue-600 hover:border-blue-800 rounded-none text-center"
                  >
                    Learn Our Approach
                  </Link>
                </div>
              </div>
              <div className="lg:pl-12">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">RevOps Focus Areas</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Revenue Growth Optimization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Marketing Attribution & ROI</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Performance Analytics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Workflow className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Process Automation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Sales & Marketing Alignment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Why Marketing Operations & RevOps Matter for Portfolio Growth
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    In today's competitive landscape, portfolio companies need more than just great products—they need
                    systematic revenue operations that align marketing, sales, and customer success teams around
                    data-driven growth strategies.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our Marketing Operations and RevOps services help private equity firms optimize their portfolio
                  companies' revenue engines through advanced analytics, process automation, and strategic alignment. We
                  transform fragmented operations into cohesive, scalable systems that drive predictable growth and
                  maximize portfolio value.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From marketing attribution and lead scoring to sales forecasting and customer lifecycle optimization,
                  we implement the operational frameworks and technology stack needed to accelerate revenue growth and
                  improve operational efficiency across your portfolio.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Key Metrics Impact</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue Growth</span>
                      <span className="text-green-600 font-semibold">+35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Marketing ROI</span>
                      <span className="text-green-600 font-semibold">+150%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sales Cycle</span>
                      <span className="text-green-600 font-semibold">-25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lead Quality</span>
                      <span className="text-green-600 font-semibold">+60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                RevOps Benefits for Portfolio Companies
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Systematic revenue operations that align teams, optimize processes, and drive predictable growth
              </p>
            </div>

            {/* 9-card grid in 3 columns */}
            <div className="grid md:grid-cols-3 gap-px bg-gray-200">
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Revenue Growth Acceleration</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Optimize revenue operations to drive consistent, predictable growth across all portfolio companies.
                </p>
              </div>
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <Target className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Marketing Attribution</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Track and measure marketing impact across all touchpoints to optimize campaign performance and ROI.
                </p>
              </div>
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Advanced Analytics</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Implement sophisticated analytics frameworks to gain deep insights into revenue performance.
                </p>
              </div>
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Team Alignment</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Align marketing, sales, and customer success teams around shared revenue goals and metrics.
                </p>
              </div>
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <Workflow className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Process Automation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Automate repetitive tasks and workflows to improve efficiency and reduce manual errors.
                </p>
              </div>
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <PieChart className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Performance Optimization</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Continuously optimize marketing and sales performance through data-driven insights and testing.
                </p>
              </div>
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Predictable Forecasting</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Implement accurate forecasting models to predict revenue and plan strategic initiatives.
                </p>
              </div>
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <Database className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Data Integration</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Integrate disparate data sources to create a single source of truth for revenue operations.
                </p>
              </div>
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Scalable Operations</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Build scalable revenue operations that grow with your portfolio companies and market expansion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Our RevOps Implementation Approach</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A systematic methodology to transform revenue operations and drive sustainable growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900">Revenue Assessment</h3>
                <p className="text-gray-600">
                  Comprehensive analysis of current revenue operations, processes, and technology stack.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900">Strategy Development</h3>
                <p className="text-gray-600">
                  Design integrated RevOps strategy aligned with business objectives and growth targets.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900">Implementation</h3>
                <p className="text-gray-600">
                  Deploy technology solutions, automate processes, and establish performance tracking systems.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900">Optimization</h3>
                <p className="text-gray-600">
                  Continuous monitoring, testing, and optimization to maximize revenue performance and ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">Common RevOps Challenges We Solve</h2>
                  <p className="text-lg text-gray-700">
                    Portfolio companies often struggle with fragmented revenue operations that limit growth potential.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Siloed Teams & Data</h3>
                      <p className="text-gray-600">
                        Marketing, sales, and customer success teams operating independently with disconnected data and
                        conflicting metrics.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Poor Marketing Attribution</h3>
                      <p className="text-gray-600">
                        Inability to track marketing impact and ROI across the entire customer journey and multiple
                        touchpoints.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Manual Processes</h3>
                      <p className="text-gray-600">
                        Time-consuming manual tasks that reduce efficiency and increase the risk of errors in revenue
                        operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Inaccurate Forecasting</h3>
                      <p className="text-gray-600">
                        Unreliable revenue forecasts that make strategic planning and resource allocation difficult.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">Our RevOps Solutions</h2>
                  <p className="text-lg text-gray-700">
                    Comprehensive revenue operations optimization that drives measurable results.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Unified Revenue Operations</h3>
                      <p className="text-gray-600">
                        Integrate marketing, sales, and customer success operations with shared metrics, processes, and
                        technology.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Advanced Attribution Modeling</h3>
                      <p className="text-gray-600">
                        Implement sophisticated attribution models to accurately measure marketing impact and optimize
                        campaign performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Process Automation</h3>
                      <p className="text-gray-600">
                        Automate repetitive tasks and workflows to improve efficiency and ensure consistent execution.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Predictive Analytics</h3>
                      <p className="text-gray-600">
                        Deploy machine learning models for accurate revenue forecasting and predictive insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <GlobalCTA
          subtitle="Ready to Optimize Your Revenue Operations?"
          title="Transform Portfolio Performance with Strategic RevOps"
          description="Stop struggling with fragmented revenue operations and manual processes. Our RevOps implementation services provide the foundation for efficient, scalable operations that grow with your portfolio companies and deliver measurable results."
          buttonText="Get Your RevOps Assessment"
          buttonLink="/contact"
        />

        {/* Footer */}
        <GlobalFooter />
      </div>
    </>
  )
}
