"use client"

import { useState, useEffect, useCallback } from "react"
import { CoverSlide } from "@/components/slides/cover-slide"
import { IntroductionSlide } from "@/components/slides/introduction-slide"
import { QuestionSlideWithSelector } from "@/components/slides/question-slide-with-selector"
import { InvitationSlide } from "@/components/slides/invitation-slide"
import { RandomSelector } from "@/components/slides/random-selector"
import { ThanksSlide } from "@/components/slides/thanks-slide"
import { ReflectionsSlide } from "@/components/slides/reflections-slide"
import presentationData from "@/data/presentation-config.json"

type SlideType =
  | { type: "cover" }
  | { type: "intro"; slide: "slide1" }
  | { type: "question"; questionIndex: number; presenters: string[]; targetPresenter: string }
  | { type: "invitation" }
  | { type: "random-selector"; role: "qa"; targetPresenter: string; instanceId: number }
  | { type: "thanks" }

export default function PresentationGame() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [mainPresenters, setMainPresenters] = useState<string[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (!isInitialized) {
      const allPresenters = presentationData.presenters;
      setMainPresenters(allPresenters.slice(0, 2)); // Adriana y Yesmin
      setIsInitialized(true)
    }
  }, [isInitialized])

  // ESTRUCTURA ACTUALIZADA: 15 DIAPOSITIVAS TOTALES
  const slides: SlideType[] = [
    { type: "cover" }, // 1
    { type: "intro", slide: "slide1" }, // 2 (Se eliminó slide2 que era la 3)
    
    // Preguntas principales (Ahora ocupan las posiciones 3 a la 10)
    ...presentationData.questions.map((q: any, index: number) => ({
      type: "question" as const,
      questionIndex: index,
      presenters: mainPresenters,
      targetPresenter: q.assignedPresenter || mainPresenters[index % mainPresenters.length],
    })),

    { type: "invitation" }, // 11

    // Respuestas al Público (Asignaciones específicas: 12, 13, 14)
    { type: "random-selector", role: "qa", instanceId: 1, targetPresenter: "Jefferson" },
    { type: "random-selector", role: "qa", instanceId: 2, targetPresenter: "Adriana" },
    { type: "random-selector", role: "qa", instanceId: 3, targetPresenter: "Yesmin" },

    // Se eliminaron las diapositivas de reflexiones (antiguas 16, 17, 18)

    { type: "thanks" }, // 15
  ]

  const currentSlide = slides[currentSlideIndex]

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1))
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))
    }
  }, [slides.length])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const handleNext = () => setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1))
  const handlePrev = () => setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))

  if (!isInitialized) return null

  return (
    <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      
      {currentSlide.type === "cover" && <CoverSlide data={presentationData.metadata} />}

      {currentSlide.type === "intro" && (
        <IntroductionSlide
          title={(presentationData.introduction as any)[currentSlide.slide].title}
          content={(presentationData.introduction as any)[currentSlide.slide].content}
        />
      )}

      {currentSlide.type === "question" && (
        <QuestionSlideWithSelector
          key={`q-${currentSlide.questionIndex}`}
          question={presentationData.questions[currentSlide.questionIndex].question}
          questionNumber={currentSlide.questionIndex + 1}
          presenters={mainPresenters}
          targetPresenter={currentSlide.targetPresenter}
        />
      )}

      {currentSlide.type === "invitation" && (
        <InvitationSlide
          title={presentationData.closing.invitationText}
          subtitle={presentationData.closing.invitationSubtext}
        />
      )}

      {currentSlide.type === "random-selector" && (
        <RandomSelector 
          key={`qa-${currentSlide.instanceId}`}
          presenters={presentationData.presenters} 
          onNext={handleNext} 
          targetPresenter={currentSlide.targetPresenter}
        />
      )}

      {currentSlide.type === "thanks" && (
        <ThanksSlide 
          title={presentationData.closing.thanksText} 
          subtitle={presentationData.closing.thanksSubtext} 
        />
      )}

      {/* Navegación Compacta */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg z-50">
        <button onClick={handlePrev} disabled={currentSlideIndex === 0} className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="text-sm font-medium text-gray-600 min-w-[80px] text-center">
          {currentSlideIndex + 1} / {slides.length}
        </span>
        <button onClick={handleNext} disabled={currentSlideIndex === slides.length - 1} className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300" style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }} />
      </div>
    </div>
  )
}
