"use client"

import { cn } from "@/lib/utils"

interface PortfolioPageBackgroundProps {
  className?: string
}

export function PortfolioPageBackground({ className }: PortfolioPageBackgroundProps) {
  return (
    <div className={cn("pointer-events-none fixed inset-0 z-0", className)} aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1220] via-[#0b1528] to-[#0d1e38]" />
      <div className="portfolio-grid absolute inset-0 opacity-50" />
      <div className="absolute -right-20 top-[55%] h-[min(480px,85vw)] w-[min(480px,85vw)] -translate-y-1/2 rounded-full bg-[#1a4480]/35 sm:-right-16 sm:top-1/2 lg:right-[8%] lg:h-[min(620px,55vw)] lg:w-[min(620px,55vw)]">
        <div className="absolute inset-0 scale-110 rounded-full bg-[#3b82f6]/10 blur-3xl" />
      </div>
      <div className="absolute -bottom-20 left-[5%] h-40 w-40 rounded-full bg-[#2563eb]/25 blur-3xl sm:h-56 sm:w-56 md:left-[12%]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1220]/80" />
    </div>
  )
}
