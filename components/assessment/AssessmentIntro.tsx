"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRightIcon,
  ClockIcon,
  HelpCircleIcon,
  LayoutGridIcon,
  LightbulbIcon,
  ListChecksIcon,
  UsersIcon,
} from "lucide-react"

interface AssessmentIntroProps {
  startQuiz: () => void
}

const AssessmentIntro: React.FC<AssessmentIntroProps> = ({ startQuiz }) => {
  return (
    <div className="min-h-screen bg-blue-900 py-12 md:py-20 font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-yellow-400 mb-4">
            Free Assessment Tool
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">HubSpot Implementation Assessment</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Evaluate your current HubSpot implementation and identify key improvement opportunities with this
            interactive assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* What You'll Receive Section */}
          <Card className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 md:p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">What You'll Receive</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                    <ListChecksIcon className="w-5 h-5 mr-2 text-blue-600" />
                    Overall Health Score
                  </h3>
                  <p className="text-gray-600 text-sm">Complete analysis of your HubSpot implementation health</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                    <LightbulbIcon className="w-5 h-5 mr-2 text-blue-600" />
                    Priority Areas
                  </h3>
                  <p className="text-gray-600 text-sm">Identification of your highest-priority improvement areas</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                    <ArrowRightIcon className="w-5 h-5 mr-2 text-blue-600" />
                    Action Plan
                  </h3>
                  <p className="text-gray-600 text-sm">Specific recommended actions based on your results</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                    <LayoutGridIcon className="w-5 h-5 mr-2 text-blue-600" />
                    Implementation Framework
                  </h3>
                  <p className="text-gray-600 text-sm">90-day rescue plan to improve your HubSpot ROI</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ROI Callout & Start Assessment */}
          <div className="lg:col-span-1 flex flex-col space-y-6">
            <Card className="bg-yellow-400 rounded-xl shadow-lg p-6 md:p-8 text-blue-900 text-center">
              <CardContent className="p-0">
                <p className="text-lg font-semibold mb-2">
                  According to Forrester research, companies with optimized CRM implementations achieve:
                </p>
                <p className="text-4xl md:text-5xl font-extrabold mb-4">2.8x higher ROI</p>
                <p className="text-base">than those with poorly executed systems.</p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
              <CardContent className="p-0">
                <Button
                  onClick={startQuiz}
                  className="w-full px-8 py-4 text-lg font-bold bg-blue-600 hover:bg-blue-800 text-white rounded-lg transition-colors"
                >
                  Start Your Assessment
                </Button>
                <p className="text-sm text-gray-500 mt-3">No email required • Instant results • 100% free</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Assessment Details Section */}
        <Card className="bg-white rounded-xl shadow-lg p-6 md:p-8 mt-8 text-blue-900 text-center">
          <CardContent className="p-0">
            <h2 className="text-2xl font-bold mb-6">Assessment Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <ClockIcon className="w-8 h-8 mb-2" />
                <p className="text-3xl font-bold">5-7</p>
                <p className="text-lg">Minutes</p>
              </div>
              <div className="flex flex-col items-center">
                <HelpCircleIcon className="w-8 h-8 mb-2" />
                <p className="text-3xl font-bold">25</p>
                <p className="text-lg">Questions</p>
              </div>
              <div className="flex flex-col items-center">
                <UsersIcon className="w-8 h-8 mb-2" />
                <p className="text-3xl font-bold">5</p>
                <p className="text-lg">Key Areas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AssessmentIntro
