"use client"

import { useEffect, useState } from "react"
import { PortfolioPageBackground } from "@/components/portfolio-page-background"
import { cn } from "@/lib/utils"

interface ProjectPageShellProps {
  children: React.ReactNode
  className?: string
}

export function ProjectPageShell({ children, className }: ProjectPageShellProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 50)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <PortfolioPageBackground />
      <div
        className={cn(
          "page-fade-in relative z-10 container mx-auto px-4 py-20 sm:px-6",
          isLoaded && "fade-in-active",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
