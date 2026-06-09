"use client"

import { createContext, useContext, useEffect, useState } from "react"
import Image from "next/image"

type HeroAboutScrollState = {
  blend: number
  aboutExit: number
}

const HeroAboutContext = createContext<HeroAboutScrollState>({
  blend: 0,
  aboutExit: 0,
})

export function useHeroAboutBlend() {
  return useContext(HeroAboutContext).blend
}

export function useAboutExit() {
  return useContext(HeroAboutContext).aboutExit
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3)
}

function scrollToHero() {
  window.dispatchEvent(new CustomEvent("section-nav", { detail: "home" }))
  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
}

export { scrollToHero }

export function HeroAboutScrollProvider({ children }: { children: React.ReactNode }) {
  const [blend, setBlend] = useState(0)
  const [aboutExit, setAboutExit] = useState(0)
  const [showPortrait, setShowPortrait] = useState(true)
  const [introActive, setIntroActive] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIntroActive(true)
      return
    }

    const introFrame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIntroActive(true))
    })

    return () => cancelAnimationFrame(introFrame)
  }, [])

  useEffect(() => {
    const update = () => {
      const home = document.getElementById("home")
      const aboutPanel = document.getElementById("about-panel")
      if (!home) return

      const vh = window.innerHeight
      const start = home.offsetHeight - vh * 0.55
      const end = home.offsetHeight + vh * 0.12
      setBlend(clamp((window.scrollY - start) / (end - start), 0, 1))

      if (aboutPanel) {
        const panelTop = aboutPanel.offsetTop
        const panelHeight = aboutPanel.offsetHeight
        const panelBottom = panelTop + panelHeight
        const exitStart = panelTop + panelHeight * 0.38
        const exitEnd = panelTop + panelHeight * 0.88

        const rawExit = clamp((window.scrollY - exitStart) / (exitEnd - exitStart), 0, 1)
        setAboutExit(easeOutCubic(rawExit))
        setShowPortrait(window.scrollY < panelBottom - vh * 0.2)
      } else {
        setAboutExit(0)
      }
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const isAboutActive = showPortrait && blend > 0.35 && aboutExit < 0.45
  const portraitOpacity = blend * (1 - aboutExit)

  return (
    <HeroAboutContext.Provider value={{ blend, aboutExit }}>
      {children}

      {/* Portrait locked to the right grid column — stays aligned with hero/about layout */}
      <div
        className={`hero-intro-right pointer-events-none fixed inset-x-0 bottom-0 hidden lg:block ${
          introActive ? "hero-intro-active delay-400" : ""
        } ${showPortrait ? "" : "!opacity-0"} ${
          isAboutActive ? "z-20" : "z-[5]"
        }`}
        style={{
          opacity: 1 - aboutExit,
        }}
      >
        <div className="container mx-auto h-[calc(100dvh-5rem)] px-4 sm:px-6">
          <div className="grid h-full grid-cols-2 gap-4 xl:gap-6">
            <div />
            <button
              type="button"
              onClick={isAboutActive ? scrollToHero : undefined}
              aria-label={isAboutActive ? "Back to home" : undefined}
              tabIndex={isAboutActive ? 0 : -1}
              className={`relative h-full w-full border-0 bg-transparent p-0 ${
                isAboutActive ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
              }`}
              style={{
                opacity: 1 - aboutExit * 0.2,
                transform: `translateY(${aboutExit * -48}px) scale(${1 - aboutExit * 0.06})`,
                filter: `blur(${aboutExit * 6}px)`,
              }}
            >
              <Image
                src="/hero-portrait.png"
                alt=""
                fill
                unoptimized
                sizes="(max-width: 1280px) 50vw, 580px"
                className="pointer-events-none object-contain object-bottom"
                style={{ opacity: (1 - blend) * (1 - aboutExit) }}
              />
              <Image
                src="/about-portrait.png"
                alt=""
                fill
                unoptimized
                sizes="(max-width: 1280px) 50vw, 580px"
                className="pointer-events-none object-contain object-bottom"
                style={{ opacity: portraitOpacity }}
              />
            </button>
          </div>
        </div>
      </div>
    </HeroAboutContext.Provider>
  )
}
