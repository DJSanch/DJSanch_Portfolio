"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface PortfolioLoaderProps {
  children?: React.ReactNode
}

function LoadingScreen({ percentage, isFadingOut }: { percentage: number; isFadingOut: boolean }) {
  return (
    <main
      className={`portfolio-loader-screen ${isFadingOut ? "is-fading" : ""}`}
      aria-busy="true"
      aria-label={`Loading portfolio: ${percentage}%`}
    >
      <div className="portfolio-loader-inner" aria-live="polite">
        <div className="portfolio-loader-number">
          {String(percentage).padStart(2, "0")}<span>%</span>
        </div>
        <div className="portfolio-loader-track" role="progressbar" aria-label="Loading portfolio" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percentage}>
          <span style={{ height: `${percentage}%` }} />
        </div>
      </div>
    </main>
  )
}

export default function PortfolioLoader({ children }: PortfolioLoaderProps) {
  const pathname = usePathname()
  const [percentage, setPercentage] = useState(0)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const hasChildren = Boolean(children)
  const isHomePage = pathname === "/"

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
    const revealTimer = window.setTimeout(() => {
      document.documentElement.dataset.portfolioReady = "true"
      setIsReady(true)
      window.dispatchEvent(new Event("portfolio:ready"))
    }, 600)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(revealTimer)
    }
  }, [hasChildren, percentage])

  if (children) {
    return (
      <>
        <div
          className={`portfolio-content ${
            isReady ? (isHomePage ? "portfolio-content-ready-home" : "portfolio-content-ready") : ""
          }`}
        >
          {children}
        </div>
        {!isReady && <LoadingScreen percentage={percentage} isFadingOut={isFadingOut} />}
      </>
    )
  }

  return <LoadingScreen percentage={percentage} isFadingOut={isFadingOut} />
}
