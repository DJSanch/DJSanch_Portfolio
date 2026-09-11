"use client"

import { useEffect, useState } from "react"

interface PortfolioLoaderProps {
  children?: React.ReactNode
}

function LoadingScreen({ percentage, isFadingOut }: { percentage: number; isFadingOut: boolean }) {
  return (
    <main
      className={`fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1220] via-[#0b1528] to-[#0d1e38] text-white transition-opacity duration-500 ease-out ${isFadingOut ? "pointer-events-none opacity-0" : "opacity-100"}`}
      aria-busy="true"
      aria-label={`Loading portfolio: ${percentage}%`}
    >
      <div className="skeleton-shimmer pointer-events-none fixed inset-0 opacity-20" />
      <div className="relative px-6 text-center" aria-live="polite">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/10 bg-blue-400/5 shadow-[0_0_100px_rgba(59,130,246,0.12)] sm:h-96 sm:w-96" />
        <p className="relative font-mono text-7xl font-medium tracking-[0.08em] text-white sm:text-9xl">
          {percentage}%
        </p>
        <div className="relative mx-auto mt-6 h-px w-52 overflow-hidden bg-white/15 sm:w-64">
          <div
            className="h-full bg-blue-300 transition-[width] duration-75"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="relative mt-5 text-xs uppercase tracking-[0.3em] text-blue-200/60">
          Loading portfolio
        </p>
      </div>
    </main>
  )
}

export default function PortfolioLoader({ children }: PortfolioLoaderProps) {
  const [percentage, setPercentage] = useState(0)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const hasChildren = Boolean(children)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPercentage((currentPercentage) => {
        if (currentPercentage >= 100) {
          window.clearInterval(interval)
          return 100
        }

        return currentPercentage + 1
      })
    }, 20)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    if (percentage < 100 || !hasChildren) {
      return
    }

    const fadeTimer = window.setTimeout(() => setIsFadingOut(true), 100)
    const revealTimer = window.setTimeout(() => setIsReady(true), 600)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(revealTimer)
    }
  }, [hasChildren, percentage])

  if (children) {
    return (
      <>
        <div className={`portfolio-content ${isReady ? "portfolio-content-ready" : ""}`}>
          {children}
        </div>
        {!isReady && <LoadingScreen percentage={percentage} isFadingOut={isFadingOut} />}
      </>
    )
  }

  return <LoadingScreen percentage={percentage} isFadingOut={isFadingOut} />
}