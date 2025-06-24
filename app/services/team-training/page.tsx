import PageLayout from "@/components/layout/PageLayout"
import GlobalCTA from "@/components/global-cta"
import { Users, BookOpen, Target, Award, Clock, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HubSpot Team Training - DataOps Group Expert Training Programs",
  description:
    "Comprehensive HubSpot training programs that empower your team to maximize platform ROI through hands-on learning and expert guidance.",
}

export default function TeamTrainingPage() {
  const trainingPrograms = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "HubSpot Fundamentals",
      description:
        "Essential training covering core HubSpot features, navigation, and basic configuration for new users.",
      duration: "2-3 days",
      audience: "New users, administrators",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Advanced Configuration",
      description: "Deep-dive training on custom properties, workflows, and advanced automation setup.",
      duration: "3-4 days",
      audience: "Power users, administrators",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Marketing Hub Mastery",
      description: "Comprehensive training on email marketing, lead nurturing, and campaign optimization.",
      duration: "2-3 days",
      audience: "Marketing teams",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Sales Hub Excellence",
      description: "Sales-focused training covering pipeline management, deal tracking, and sales automation.",
      duration: "2-3 days",
      audience: "Sales teams",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Ongoing Support",
      description: "Continuous learning programs with regular check-ins and advanced topic workshops.",
      duration: "Ongoing",
      audience: "All users",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" strokeWidth={1} />,
      title: "Custom Training",
      description: "Tailored training programs designed for your specific business processes and requirements.",
      duration: "Variable",
      audience: "Custom audiences",
    },
  ]

  const benefits = [
    "Faster user adoption and reduced learning curve",
    "Improved data quality and system utilization",
    "Enhanced team productivity and efficiency",
    "Better ROI from your HubSpot investment",
    "Reduced dependency on external support",
    "Consistent best practices across teams",
  ]

  return (
    <PageLayout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">HubSpot Team Training</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Empower your team with comprehensive HubSpot training programs that maximize platform ROI and drive
                operational excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why HubSpot Training Matters</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Your HubSpot investment is only as valuable as your team's ability to use it effectively. Without
                  proper training, even the most powerful platform can become an underutilized expense rather than a
                  growth driver.
                </p>
                <p className="text-lg text-gray-700">
                  Our comprehensive training programs ensure your team not only understands how to use HubSpot but
                  masters the strategies and best practices that drive real business results. From basic navigation to
                  advanced automation, we provide the knowledge and skills your team needs to succeed.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Comprehensive training solutions designed to meet your team's specific needs and skill levels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
              {trainingPrograms.map((program, index) => (
                <div key={index} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">{program.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>
                      <span className="font-semibold">Duration:</span> {program.duration}
                    </div>
                    <div>
                      <span className="font-semibold">Audience:</span> {program.audience}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Approach */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Approach</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We believe in hands-on, practical training that focuses on real-world application and immediate value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-700">Evaluate current skill levels and identify specific training needs.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Customization</h3>
                <p className="text-gray-700">Tailor training content to your specific business processes and goals.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Hands-On Practice</h3>
                <p className="text-gray-700">Interactive sessions with real scenarios and practical exercises.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-700">Continued guidance and resources to ensure long-term success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Training Formats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Training Formats</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Choose the training format that works best for your team's schedule and learning preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">On-Site Training</h3>
                <p className="text-gray-700 mb-4">
                  Intensive, focused training sessions conducted at your location with your actual HubSpot instance.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Customized to your specific setup</li>
                  <li>• Direct access to your data and processes</li>
                  <li>• Team collaboration and discussion</li>
                  <li>• Immediate application to real scenarios</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Virtual Training</h3>
                <p className="text-gray-700 mb-4">
                  Interactive online sessions that provide the same quality training with added flexibility.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Flexible scheduling options</li>
                  <li>• Screen sharing and live demonstrations</li>
                  <li>• Recorded sessions for future reference</li>
                  <li>• Cost-effective for distributed teams</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hybrid Programs</h3>
                <p className="text-gray-700 mb-4">
                  Combination of on-site and virtual training to maximize learning outcomes and convenience.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Initial on-site intensive training</li>
                  <li>• Follow-up virtual sessions</li>
                  <li>• Ongoing support and check-ins</li>
                  <li>• Best of both training formats</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <GlobalCTA
          subtitle="Ready to Empower Your Team?"
          title="Maximize Your HubSpot Investment with Expert Training"
          description="Don't let your HubSpot platform go underutilized. Our comprehensive training programs ensure your team has the skills and knowledge to drive real business results."
          buttonText="Schedule Training Consultation"
          buttonLink="/contact"
          secondaryButtonText="Take Our Assessment"
          secondaryButtonLink="/data-operations-assessment"
        />
      </div>
    </PageLayout>
  )
}
