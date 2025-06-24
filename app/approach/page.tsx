import PageLayout from "@/components/layout/PageLayout"
import GlobalCTA from "@/components/global-cta"
import { CheckCircle, ArrowRight, Target, Users, Zap, BarChart3, Clock, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Approach - DataOps Group Methodology for Data Operations Success",
  description:
    "Discover DataOps Group's proven 100-day methodology for transforming data operations. Our systematic approach delivers measurable results for private equity portfolio companies.",
}

export default function ApproachPage() {
  return (
    <PageLayout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Proven Approach</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                A systematic methodology that transforms data chaos into competitive advantage within 100 days
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The DataOps Group Methodology</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our approach isn't just about implementing technology—it's about transforming how your organization
                  thinks about and uses data. We've refined this methodology through dozens of implementations across
                  industries, consistently delivering results within the first 100 days.
                </p>
                <p className="text-lg text-gray-700">
                  Every engagement follows our proven framework, but we customize the execution to your specific
                  business context, existing systems, and growth objectives.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Our Approach Works</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Focus on business outcomes, not just technical implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Rapid value delivery within the first 30 days</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Team enablement and knowledge transfer throughout</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Measurable ROI tracking from day one</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Phase Methodology */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our 4-Phase Methodology</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Each phase builds on the previous one, ensuring sustainable transformation and measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Phase 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Discover & Assess</h3>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Days 1-14</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Deep dive into your current state, business objectives, and data landscape to create a comprehensive
                  transformation roadmap.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Current state analysis</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Stakeholder interviews</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Data audit & quality assessment</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Success metrics definition</span>
                  </li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-green-600">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Design & Plan</h3>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Days 15-30</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Create detailed implementation plans, system architecture, and process workflows tailored to your
                  business needs.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Solution architecture design</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Process workflow mapping</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Integration strategy</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Implementation roadmap</span>
                  </li>
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-orange-600">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Build & Deploy</h3>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Days 31-75</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Execute the implementation with continuous testing, validation, and iterative improvements based on
                  real-world usage.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-orange-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>System configuration</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-orange-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Data migration & cleanup</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-orange-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Integration development</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-orange-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Testing & validation</span>
                  </li>
                </ul>
              </div>

              {/* Phase 4 */}
              <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-purple-600">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Launch & Optimize</h3>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Days 76-100</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Go live with comprehensive training, support, and continuous optimization to ensure sustained success
                  and ROI.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Team training & enablement</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Go-live support</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Performance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>Continuous optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Principles</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                These principles guide every decision we make and ensure consistent, high-quality outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business-First Thinking</h3>
                <p className="text-gray-700">
                  Every technical decision is evaluated through the lens of business impact and ROI. We solve business
                  problems, not just technical challenges.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Value Delivery</h3>
                <p className="text-gray-700">
                  We deliver tangible value within the first 30 days and maintain momentum throughout the engagement
                  with regular wins and improvements.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Team Enablement</h3>
                <p className="text-gray-700">
                  We don't just implement systems—we enable your team to own, maintain, and continuously improve them
                  long after our engagement ends.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Decisions</h3>
                <p className="text-gray-700">
                  Every recommendation is backed by data analysis and benchmarking. We measure what matters and optimize
                  based on real performance metrics.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Speed to Value</h3>
                <p className="text-gray-700">
                  Time is your most valuable resource. Our methodology is designed to deliver maximum impact in minimum
                  time without sacrificing quality.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-indigo-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
                <p className="text-gray-700">
                  We build for your future, not just your present. Every solution is designed to scale with your
                  business growth and evolving needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Measure Success</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Success isn't just about implementation—it's about delivering measurable business outcomes that drive
                growth and efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 mb-2">Implementation Success Rate</div>
                <div className="text-xs text-gray-500">All projects delivered on time and on budget</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">30</div>
                <div className="text-sm text-gray-600 mb-2">Days to First Value</div>
                <div className="text-xs text-gray-500">Tangible improvements within first month</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">4.2x</div>
                <div className="text-sm text-gray-600 mb-2">Average ROI</div>
                <div className="text-xs text-gray-500">Return on investment within first year</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-sm text-gray-600 mb-2">Client Satisfaction</div>
                <div className="text-xs text-gray-500">Would recommend to other businesses</div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Our Approach Different</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">PE-Focused Expertise</h3>
                      <p className="text-gray-700">
                        We understand the unique pressures and timelines of private equity portfolio companies. Our
                        approach is designed for rapid value creation within investment hold periods.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Hands-On Implementation</h3>
                      <p className="text-gray-700">
                        We don't just provide recommendations—we roll up our sleeves and implement solutions alongside
                        your team, ensuring knowledge transfer and sustainable results.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                      <p className="text-gray-700">
                        With dozens of successful implementations across industries, we bring battle-tested
                        methodologies and best practices to every engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
                <p className="text-gray-700 mb-6">
                  Our approach has helped dozens of companies transform their data operations and achieve measurable
                  results. Let's discuss how we can help your organization.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-600 mr-3" size={20} />
                    <span className="text-gray-700">Free initial consultation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-600 mr-3" size={20} />
                    <span className="text-gray-700">Custom implementation roadmap</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-600 mr-3" size={20} />
                    <span className="text-gray-700">ROI projections and timeline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <GlobalCTA
          subtitle="Ready to Transform Your Data Operations?"
          title="Experience Our Proven Methodology"
          description="Join dozens of companies that have transformed their business operations with our systematic approach. Get measurable results within 100 days."
          buttonText="Start Your Transformation"
          buttonLink="/contact"
          secondaryButtonText="Take Our Assessment"
          secondaryButtonLink="/data-operations-assessment"
        />
      </div>
    </PageLayout>
  )
}
