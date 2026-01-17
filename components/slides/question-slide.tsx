"use client"

import { useState, useEffect } from "react"
import { Timer } from "@/components/timer"

interface QuestionSlideProps {
  question: string
  questionNumber: number
  presenter: string
}

export function QuestionSlide({ question, questionNumber, presenter }: QuestionSlideProps) {
  const [showTimer, setShowTimer] = useState(false)

  useEffect(() => {
    // Start timer after a brief delay
    const timeout = setTimeout(() => setShowTimer(true), 100)
    return () => clearTimeout(timeout)
  }, [questionNumber])

  return (
    <div className="h-full w-full flex flex-col p-8 md:p-12">
      {/* Header Row */}
      <div className="flex justify-between items-start mb-12">
        {/* Presenter Name - Top Left */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-2xl shadow-lg">
          <p className="text-sm uppercase tracking-wider opacity-90 mb-1">Presenta</p>
          <p className="text-2xl font-bold">{presenter}</p>
        </div>

        {/* Timer - Top Right */}
        <div className="ml-auto">{showTimer && <Timer duration={90} />}</div>
      </div>

      {/* Question - Center */}
      <div className="flex-1 flex items-center justify-center px-4 md:px-16">
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-100">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {questionNumber}
              </div>
              <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed text-balance flex-1">{question}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
