"use client"

import { useState, useEffect } from "react"
import { Timer } from "@/components/timer"

interface QuestionSlideWithSelectorProps {
  question: string
  questionNumber: number
  presenters: string[]
  targetPresenter: string // Nueva prop necesaria
}

export function QuestionSlideWithSelector({ 
  question, 
  questionNumber, 
  presenters, 
  targetPresenter 
}: QuestionSlideWithSelectorProps) {
  const [isSelecting, setIsSelecting] = useState(true)
  const [currentName, setCurrentName] = useState(presenters[0])
  const [selectedPresenter, setSelectedPresenter] = useState<string | null>(null)
  const [showTimer, setShowTimer] = useState(false)

  useEffect(() => {
    // Reiniciar estados cuando cambia la pregunta
    setIsSelecting(true)
    setSelectedPresenter(null)
    setShowTimer(false)
    setCurrentName(presenters[0])
  }, [questionNumber, presenters])

  useEffect(() => {
    if (!isSelecting) return

    let interval: NodeJS.Timeout
    let elapsed = 0
    const totalDuration = 3000 // Duración de la animación (3 segundos)

    const animate = () => {
      elapsed += 50
      const progress = elapsed / totalDuration
      const delay = 50 + progress ** 3 * 50

      interval = setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * presenters.length)
        setCurrentName(presenters[randomIndex])

        if (elapsed < totalDuration) {
          animate()
        } else {
          // SELECCIÓN FINAL: Forzamos el nombre que viene en targetPresenter
          setIsSelecting(false)
          setSelectedPresenter(targetPresenter)
          setTimeout(() => setShowTimer(true), 300)
        }
      }, delay)
    }

    animate()

    return () => clearTimeout(interval)
  }, [isSelecting, presenters, targetPresenter])

  return (
    <div className="h-full w-full flex flex-col p-8 md:p-12 relative">
      <div className="flex justify-between items-start mb-12">
        <div
          className={`
          bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-2xl shadow-lg
          transition-all duration-300
          ${isSelecting ? "animate-pulse" : ""}
        `}
        >
          <p className="text-sm uppercase tracking-wider opacity-90 mb-1">Presenta</p>
          <p className={`text-2xl font-bold transition-all duration-200 ${isSelecting ? "blur-[1px]" : "blur-0"}`}>
            {isSelecting ? currentName : selectedPresenter}
          </p>
        </div>
        <div className="ml-auto">{showTimer && <Timer duration={90} />}</div>
      </div>

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

      <div className="absolute bottom-6 right-6">
        <img src="/logo.png" alt="Logo Universidad" className="h-16 w-auto object-contain opacity-70" />
      </div>
    </div>
  )
}
