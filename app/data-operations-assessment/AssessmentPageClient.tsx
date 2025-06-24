"use client"

import { useState, useCallback } from "react"
import AssessmentIntro from "@/components/assessment/AssessmentIntro"
import QuizSection from "@/components/assessment/QuizSection"
import AssessmentProgress from "@/components/assessment/AssessmentProgress"
import QuizNavigation from "@/components/assessment/QuizNavigation"
import QuizResults from "@/components/assessment/QuizResults"
import { quizSections } from "@/data/quizData"

export default function AssessmentPageClient() {
  const [currentSection, setCurrentSection] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState<string[]>([])

  const startQuiz = useCallback(() => {
    setCurrentSection(1)
    setAnswers({})
    setShowResults(false)
    setUnansweredQuestionIds([])
  }, [])

  const handleAnswer = useCallback((questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
    setUnansweredQuestionIds((prev) => prev.filter((id) => id !== questionId))
  }, [])

  const nextSection = useCallback(() => {
    if (currentSection === 0) {
      startQuiz()
      return
    }

    // Check if all questions in current section are answered
    const currentSectionData = quizSections[currentSection - 1]
    const unanswered = currentSectionData.questions.filter((q) => !answers[q.id]).map((q) => q.id)

    if (unanswered.length > 0) {
      setUnansweredQuestionIds(unanswered)
      return
    }

    if (currentSection < quizSections.length) {
      setCurrentSection(currentSection + 1)
      setUnansweredQuestionIds([])
    } else {
      setShowResults(true)
    }
  }, [currentSection, answers, startQuiz])

  const prevSection = useCallback(() => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1)
      setUnansweredQuestionIds([])
    }
  }, [currentSection])

  const retakeQuiz = useCallback(() => {
    setCurrentSection(0)
    setAnswers({})
    setShowResults(false)
    setUnansweredQuestionIds([])
  }, [])

  // Calculate total score
  const totalQuestions = quizSections.reduce((total, section) => total + section.questions.length, 0)
  const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0)

  if (showResults) {
    return <QuizResults score={totalScore} totalQuestions={totalQuestions} onRetakeQuiz={retakeQuiz} />
  }

  if (currentSection === 0) {
    return <AssessmentIntro startQuiz={startQuiz} />
  }

  const currentSectionData = quizSections[currentSection - 1]

  return (
    <div className="min-h-screen bg-blue-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <AssessmentProgress currentSection={currentSection} totalSections={quizSections.length} />

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <QuizSection
            title={currentSectionData.title}
            questions={currentSectionData.questions}
            answers={answers}
            onAnswer={handleAnswer}
            unansweredQuestionIds={unansweredQuestionIds}
          />

          <QuizNavigation currentSection={currentSection} prevSection={prevSection} nextSection={nextSection} />
        </div>
      </div>
    </div>
  )
}
