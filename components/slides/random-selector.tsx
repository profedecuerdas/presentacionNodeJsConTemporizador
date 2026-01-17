"use client"

import { useState, useEffect } from "react"
import { Timer } from "@/components/timer"

interface RandomSelectorProps {
  presenters: string[]
  onNext: () => void
  targetPresenter: string // Nueva prop necesaria
}

export function RandomSelector({ presenters, targetPresenter }: RandomSelectorProps) {
  const [isSelecting, setIsSelecting] = useState(true)
  const [currentName, setCurrentName] = useState(presenters[0])
  const [selectedPresenter, setSelectedPresenter] = useState<string | null>(null)
  const [showTimer, setShowTimer] = useState(false)

  useEffect(() => {
    if (!isSelecting) return

    let interval: NodeJS.Timeout
    let elapsed = 0
    const totalDuration = 3000

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
    <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-orange-500 via-pink-500 to-rose-500 relative">
      <div className="max-w-3xl w-full space-y-12 text-center">
        <div className="space-y-4 text-white">
          <h2 className="text-4xl font-bold">{selectedPresenter ? "¡Turno para responder!" : "Seleccionando..."}</h2>
          <p className="text-xl text-white/90">
            {selectedPresenter ? "El expositor elegido es:" : "Esperando resultado..."}
          </p>
        </div>

        <div className="relative">
          <div className={`bg-white rounded-3xl shadow-2xl p-12 md:p-16 transition-all duration-500 transform ${!isSelecting ? "scale-105" : "scale-100"}`}>
            <div className={`text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-200 ${isSelecting ? "blur-[2px]" : "blur-0"}`}>
              {isSelecting ? currentName : selectedPresenter}
            </div>
          </div>
          {!isSelecting && <div className="absolute inset-0 bg-white/30 rounded-3xl blur-2xl -z-10 animate-pulse" />}
        </div>

        {showTimer && (
          <div className="flex justify-center">
            <Timer duration={90} />
          </div>
        )}
      </div>

      <div className="absolute bottom-6 right-6">
        <img src="/logo.png" alt="Logo Universidad" className="h-16 w-auto object-contain opacity-80" />
      </div>
    </div>
  )
}
