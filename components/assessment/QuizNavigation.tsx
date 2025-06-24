"use client"

import type React from "react"
import { Button } from "@/components/ui/button"

interface QuizNavigationProps {
  currentSection: number
  prevSection: () => void
  nextSection: () => void
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({ currentSection, prevSection, nextSection }) => {
  return (
    <div className="flex justify-between p-8 border-t border-gray-200 bg-white rounded-b-2xl">
      <Button
        onClick={prevSection}
        disabled={currentSection === 1}
        variant="outline"
        className="px-6 py-3 text-blue-900 border-gray-200 hover:bg-gray-50"
      >
        Previous
      </Button>
      <Button onClick={nextSection} className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700">
        {currentSection < 5 ? "Next Section" : "View Results"}
      </Button>
    </div>
  )
}

export default QuizNavigation
