"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface QuizResultsProps {
  score: number
  totalQuestions: number
  onRetakeQuiz: () => void
}

const QuizResults: React.FC<QuizResultsProps> = ({ score, totalQuestions, onRetakeQuiz }) => {
  const percentage = (score / totalQuestions) * 100

  const handleGoHome = () => {
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-blue-900 py-12 flex items-center justify-center">
      <Card className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full mx-4">
        <CardContent className="text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Assessment Results</h1>
          <div className="mb-6">
            <p className="text-2xl font-semibold text-gray-700 mb-2">
              You scored {score} out of {totalQuestions}
            </p>
            <p className="text-3xl font-bold text-blue-600">{percentage.toFixed(1)}%</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={onRetakeQuiz} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              Retake Assessment
            </Button>
            <Button
              onClick={handleGoHome}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3"
            >
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default QuizResults
