"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import GlobalCTA from "@/components/global-cta"
import { ArrowRight, BarChart3, TrendingUp, PieChart, Activity, Target, Zap, Users, Database, Eye } from "lucide-react"
import Link from "next/link"
import GlobalFooter from "@/components/global-footer"

export default function AnalyticsBIPage() {
  const benefits = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Custom Dashboards",
      description: "Tailored analytics dashboards that display the metrics that matter most to your business goals.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Performance Tracking",
      description: "Real-time monitoring of key performance indicators with automated alerts and insights.",
    },
    {
      icon: <PieChart className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Data Visualization",
      description: "Transform complex data into clear, actionable visual reports that drive decision-making.",
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Revenue Analytics",
      description: "Deep dive into revenue streams, customer lifetime value, and profitability analysis.",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Goal Tracking",
      description: "Set, monitor, and achieve business objectives with data-driven goal management systems.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Automated Reporting",
      description: "Eliminate manual reporting with automated insights delivered to stakeholders on schedule.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Team Performance",
      description: "Track individual and team performance metrics to optimize productivity and results.",
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Data Integration",
      description: "Connect multiple data sources for comprehensive business intelligence and reporting.",
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Predictive Insights",
      description: "Leverage historical data to forecast trends and make proactive business decisions.",
    },
  ]

  const challenges = [
    {
      problem: "Scattered Data Sources",
      solution: "We integrate all your business systems into unified dashboards for complete visibility.",
    },
    {
      problem: "Manual Reporting Processes",
      solution: "Automated reporting systems that deliver insights without manual intervention.",
    },
    {
      problem: "Lack of Real-Time Insights",
      solution: "Live dashboards that update automatically as your business data changes.",
    },
    {
      problem: "Complex Data Analysis",
      solution: "User-friendly visualizations that make complex data accessible to all team members.",
    },
  ]

  const approachSteps = [
    {
      step: "1",
      title: "Data Assessment",
      description: "We analyze your current data landscape and identify key metrics and reporting needs.",
    },
    {
      step: "2",
      title: "Dashboard Design",
      description: "Custom dashboard creation focused on your specific business objectives and user requirements.",
    },
    {
      step: "3",
      title: "Integration & Setup",
      description: "Seamless integration with your existing systems and comprehensive testing.",
    },
    {
      step: "4",
      title: "Training & Optimization",
      description: "Team training and ongoing optimization to maximize the value of your analytics investment.",
    },
  ]

  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Analytics & Business Intelligence",
            description:
              "Transform your HubSpot data into actionable business intelligence with custom analytics solutions, automated reporting, and data visualization.",
            provider: {
              "@type": "Organization",
              name: "DataOps Group",
            },
            serviceType: "Business Intelligence",
            areaServed: "United States",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Analytics & BI Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Dashboards",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Automated Reporting",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Data Visualization",
                  },
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Global Navigation */}
        <Navigation />

        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900 text-yellow-500 text-sm font-medium mb-2">
                    Analytics & Business Intelligence
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Transform Your HubSpot Data Into Actionable Business Intelligence
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
                    Custom analytics solutions, automated reporting, and data visualization that turn your HubSpot data
                    into strategic insights. Make data-driven decisions with confidence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base rounded-none flex items-center justify-center">
                      <Link href="/data-operations-assessment" className="flex items-center">
                        Get Your Analytics Assessment
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-base flex items-center justify-center rounded-none"
                    >
                      View Sample Dashboards
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Why Analytics & BI Matter for Your Business
                    </h2>
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p>
                        Your HubSpot platform contains a wealth of data about your customers, sales performance, and
                        marketing effectiveness. However, raw data alone doesn't drive business growth—actionable
                        insights do.
                      </p>
                      <p>
                        Our Analytics & Business Intelligence services transform your scattered data into comprehensive
                        dashboards and automated reports that reveal patterns, predict trends, and guide strategic
                        decisions. Whether you need real-time sales performance tracking, customer behavior analysis, or
                        ROI measurement across marketing channels, we create custom solutions that fit your specific
                        business needs.
                      </p>
                      <p>
                        From executive-level KPI dashboards to detailed operational reports, we ensure every stakeholder
                        has access to the insights they need to drive results and achieve business objectives.
                      </p>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">What You'll Achieve</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="text-gray-700">
                          Make faster, data-driven decisions with real-time insights
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="text-gray-700">
                          Eliminate manual reporting and reduce time spent on data analysis
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="text-gray-700">Identify trends and opportunities before your competition</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="text-gray-700">Improve team performance with clear, actionable metrics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="text-gray-700">Demonstrate ROI and business impact to stakeholders</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Sidebar */}
                <div>
                  <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-8 sticky top-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Service Highlights</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="text-gray-700">Custom dashboard development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="text-gray-700">Automated reporting systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="text-gray-700">Data visualization and insights</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="text-gray-700">Performance tracking and KPI monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="text-gray-700">Predictive analytics and forecasting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-0.5">•</span>
                        <span className="text-gray-700">Multi-system data integration</span>
                      </li>
                    </ul>

                    <div className="mt-8 pt-8 border-t border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to unlock your data's potential?</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Contact us today to schedule a consultation and learn how our analytics solutions can transform
                        your business intelligence.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 px-4 rounded-none">
                        <Link href="/contact">Get Started</Link>
                      </Button>
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
                  Comprehensive Analytics & BI Solutions
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  From custom dashboards to predictive insights, our analytics solutions provide the intelligence you
                  need to drive business growth and operational excellence.
                </p>
              </div>

              {/* 9-card grid in 3 columns */}
              <div className="grid md:grid-cols-3 gap-px bg-gray-200">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 mb-6 flex items-center justify-center">{benefit.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Approach Section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Analytics Implementation Approach
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  We follow a proven methodology to ensure your analytics solution delivers maximum value and drives
                  real business results.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                {approachSteps.map((step, index) => (
                  <div key={index} className="bg-white p-8 hover:bg-gray-50 transition-colors relative">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold rounded">
                      {step.step}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Challenges Section */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Common Analytics Challenges We Solve
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Every business faces unique data challenges. Here's how we transform common analytics pain points into
                  competitive advantages.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-red-600 mb-2">Challenge: {challenge.problem}</h3>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold text-green-600">Our Solution:</span> {challenge.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <GlobalCTA
            title="Turn Your Data Into Your Competitive Advantage"
            description="Stop making decisions based on gut feelings. Our analytics and business intelligence solutions provide the insights you need to drive growth, optimize performance, and stay ahead of the competition."
            buttonText="Get Your Analytics Assessment"
            buttonLink="/data-operations-assessment"
          />
        </main>

        {/* Footer */}
        <GlobalFooter />
      </div>
    </>
  )
}
