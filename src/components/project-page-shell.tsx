"use client"

import { useEffect, useState } from "react"
import { PortfolioPageBackground } from "@/components/portfolio-page-background"
import { typography } from "@/lib/typography"
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
          "page-fade-in relative z-10 container mx-auto px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28",
          typography.pageContentInset,
          isLoaded && "fade-in-active",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
