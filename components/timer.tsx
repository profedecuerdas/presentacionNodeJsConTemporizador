"use client"

import { useState, useEffect } from "react"

interface TimerProps {
  duration: number // in seconds
}

export function Timer({ duration }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    setTimeLeft(duration)
    setIsRunning(true)
  }, [duration])

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, timeLeft])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const percentage = (timeLeft / duration) * 100

  // Color based on time remaining
  const getColor = () => {
    if (percentage > 60) return "from-green-500 to-emerald-500"
    if (percentage > 30) return "from-yellow-500 to-orange-500"
    return "from-red-500 to-rose-500"
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 min-w-[180px]">
      <p className="text-sm text-gray-600 mb-2 text-center uppercase tracking-wider">Tiempo</p>
      <div
        className={`
        text-4xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r ${getColor()}
        text-center tabular-nums
      `}
      >
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${getColor()} transition-all duration-1000 ease-linear`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
