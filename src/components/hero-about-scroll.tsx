"use client"

import { createContext, useContext, useEffect, useState } from "react"
import Image from "next/image"

const BlendContext = createContext(0)

export function useHeroAboutBlend() {
  return useContext(BlendContext)
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function scrollToHero() {
  window.dispatchEvent(new CustomEvent("section-nav", { detail: "home" }))
  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
}

export { scrollToHero }

export function HeroAboutScrollProvider({ children }: { children: React.ReactNode }) {
  const [blend, setBlend] = useState(0)
  const [showPortrait, setShowPortrait] = useState(true)

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
        const panelBottom = aboutPanel.offsetTop + aboutPanel.offsetHeight
        setShowPortrait(window.scrollY < panelBottom - vh * 0.25)
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

  const isAboutActive = showPortrait && blend > 0.35

  return (
    <BlendContext.Provider value={blend}>
      {children}

      {/* Portrait locked to the right grid column — stays aligned with hero/about layout */}
      <div
        className={`pointer-events-none fixed inset-x-0 bottom-0 hidden transition-opacity duration-500 lg:block ${
          showPortrait ? "opacity-100" : "opacity-0"
        } ${isAboutActive ? "z-20" : "z-[5]"}`}
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
            >
              <Image
                src="/hero-portrait.png"
                alt=""
                fill
                unoptimized
                sizes="(max-width: 1280px) 50vw, 580px"
                className="pointer-events-none object-contain object-bottom transition-opacity duration-700 ease-out"
                style={{ opacity: 1 - blend }}
              />
              <Image
                src="/about-portrait.png"
                alt=""
                fill
                unoptimized
                sizes="(max-width: 1280px) 50vw, 580px"
                className="pointer-events-none object-contain object-bottom transition-opacity duration-700 ease-out"
                style={{ opacity: blend }}
              />
            </button>
          </div>
        </div>
      </div>
    </BlendContext.Provider>
  )
}
