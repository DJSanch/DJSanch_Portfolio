"use client"

import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"
import { typography } from "@/lib/typography"

export const CINEMATIC_SCROLL_LENGTH = 9000
/** Tiny scroll on landing — skips the top-of-slider portrait fade state */
const LANDING_SCROLL_NUDGE = 16

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image:
          linear-gradient(to right, rgba(96, 165, 250, 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(96, 165, 250, 0.06) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .text-3d-matte {
      color: #f8fafc;
      text-shadow:
          0 10px 30px rgba(59, 130, 246, 0.25),
          0 2px 4px rgba(10, 18, 32, 0.6);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, #ffffff 0%, #60a5fa 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 10px 20px rgba(59, 130, 246, 0.2))
          drop-shadow(0px 2px 4px rgba(10, 18, 32, 0.5));
  }

  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #93c5fd 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8))
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  .premium-depth-card {
      background: linear-gradient(145deg, #1a4480 0%, #0a1220 100%);
      box-shadow:
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.2),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(96, 165, 250, 0.12);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(96,165,250,0.08) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  .iphone-bezel {
      background-color: #111;
      box-shadow:
          inset 0 0 0 2px #52525B,
          inset 0 0 0 7px #000,
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7);
      transform-style: preserve-3d;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow:
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }

  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
      background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
      box-shadow:
          0 10px 20px rgba(0,0,0,0.3),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(96, 165, 250, 0.12) 0%, rgba(10, 18, 32, 0.6) 100%);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      box-shadow:
          0 0 0 1px rgba(96, 165, 250, 0.15),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  tagline1?: string
  tagline2?: string
  cardHeading?: string
  cardDescription?: React.ReactNode
  metricValue?: number
  metricLabel?: string
  scrollLength?: number
}

export function CinematicHero({
  tagline1 = "Ideas into impact,",
  tagline2 = "code that ships.",
  cardHeading = "Full stack. Network-ready.",
  cardDescription = (
    <>
      <span className="font-semibold text-white">Daniel Sanchez</span> builds fast, reliable web
      applications for teams that need clean architecture, modern stacks, and results clients can
      see in production.
    </>
  ),
  metricValue = 6,
  metricLabel = "Projects Shipped",
  scrollLength = CINEMATIC_SCROLL_LENGTH,
  className,
  ...props
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mainCardRef = useRef<HTMLDivElement>(null)
  const mockupRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>(0)
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
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return

      cancelAnimationFrame(requestRef.current)

      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect()
          const mouseX = e.clientX - rect.left
          const mouseY = e.clientY - rect.top

          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`)
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`)

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2

          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          })
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(requestRef.current)
    }
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [
            ".text-track",
            ".text-days",
            ".main-card",
            ".card-left-text",
            ".mockup-scroll-wrapper",
            ".floating-badge",
            ".phone-widget",
          ],
          { autoAlpha: 1, clearProps: "all" }
        )
        gsap.set(".hero-text-wrapper", { autoAlpha: 1 })
        return
      }

      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 })
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" })
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 })
      gsap.set([".card-left-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], {
        autoAlpha: 0,
      })

      const introTl = gsap.timeline({ delay: 0.3 })
      introTl
        .to(".text-track", {
          duration: 1.8,
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          rotationX: 0,
          ease: "expo.out",
        })
        .to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0")

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollLength}`,
          pin: true,
          scrub: 1.35,
          anticipatePin: 1,
        },
      })

      scrollTl
        .to([".hero-text-wrapper", ".bg-grid-theme"], {
          scale: 1.15,
          filter: "blur(20px)",
          opacity: 0.2,
          ease: "power2.inOut",
          duration: 2,
        }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(
          ".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 },
          "-=0.8"
        )
        .fromTo(
          ".phone-widget",
          { y: 40, autoAlpha: 0, scale: 0.95 },
          { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 },
          "-=1.5"
        )
        .to(".progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(".counter-val", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
        .fromTo(
          ".floating-badge",
          { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 },
          { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 },
          "-=2.0"
        )
        .fromTo(".card-left-text", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .to({}, { duration: 3.2 })
        .to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text"], {
          autoAlpha: 0,
          ease: "power3.in",
          duration: 1.2,
          stagger: 0.05,
        })
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 })
    }, containerRef)

    const nudgeLandingScroll = () => {
      if (window.scrollY !== 0 || window.location.hash) return
      window.scrollTo({ top: LANDING_SCROLL_NUDGE, left: 0, behavior: "instant" })
    }

    ScrollTrigger.refresh()
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
        nudgeLandingScroll()
      })
    })

    const landingNudgeTimer = window.setTimeout(() => {
      ScrollTrigger.refresh()
      nudgeLandingScroll()
    }, 200)

    return () => {
      window.clearTimeout(landingNudgeTimer)
      ctx.revert()
    }
  }, [metricValue, scrollLength])

  return (
    <div
      id="cinematic-hero"
      ref={containerRef}
      data-scroll-length={scrollLength}
      className={cn(
        "hero-page-fade relative flex h-screen w-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1220] via-[#0b1528] to-[#0d1e38] font-sans text-white antialiased",
        introActive && "hero-page-fade-active",
        className
      )}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme pointer-events-none absolute inset-0 z-0 opacity-50" aria-hidden="true" />

      {/* Geometric accents — matches original hero */}
      <div
        aria-hidden
        className={`hero-intro-scale pointer-events-none absolute -right-20 top-[55%] z-[1] h-[min(480px,85vw)] w-[min(480px,85vw)] -translate-y-1/2 sm:-right-16 sm:top-1/2 sm:h-[min(600px,88vw)] sm:w-[min(600px,88vw)] lg:right-[8%] lg:h-[min(620px,55vw)] lg:w-[min(620px,55vw)] ${
          introActive ? "hero-intro-active delay-100" : ""
        }`}
      >
        <div className="absolute inset-0 scale-110 rounded-full bg-[#3b82f6]/15 blur-3xl" />
        <div className="absolute inset-0 rounded-full bg-[#1a4480]/90 shadow-[0_0_60px_20px_rgba(59,130,246,0.12)]" />
      </div>
      <div
        aria-hidden
        className={`hero-intro-scale pointer-events-none absolute -bottom-20 left-[3%] z-[1] h-32 w-32 sm:-bottom-24 sm:left-[5%] sm:h-48 sm:w-48 md:-bottom-16 md:left-[12%] md:h-56 md:w-56 ${
          introActive ? "hero-intro-active delay-300" : ""
        }`}
      >
        <div className="absolute inset-0 scale-125 rounded-full bg-[#60a5fa]/20 blur-2xl" />
        <div className="absolute inset-0 rounded-full bg-[#2563eb]/55 shadow-[0_0_40px_12px_rgba(37,99,235,0.15)]" />
      </div>

      <div className="hero-text-wrapper transform-style-3d absolute inset-x-0 top-0 z-10 flex h-full items-center will-change-transform">
        <div className="container mx-auto w-full px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-4 xl:gap-6">
            <div className="space-y-3 text-center sm:text-left lg:max-w-xl lg:pl-8 xl:pl-12">
              <p
                className={cn(
                  "hero-intro-left md:text-sm",
                  typography.eyebrow,
                  introActive ? "hero-intro-active delay-200" : ""
                )}
              >
                Full Stack Developer
              </p>
              <h1 className="text-track gsap-reveal text-3d-matte text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {tagline1}
              </h1>
              <h1 className="text-days gsap-reveal text-silver-matte text-3xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {tagline2}
              </h1>
            </div>
            <div aria-hidden className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
        style={{ perspective: "1500px" }}
      >
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card gsap-reveal pointer-events-auto relative flex h-[92vh] w-[92vw] items-center justify-center overflow-hidden rounded-[32px] md:h-[85vh] md:w-[85vw] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-evenly px-4 py-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-12 lg:py-0">
            <div
              className="mockup-scroll-wrapper relative order-2 z-10 flex h-[380px] w-full items-center justify-center lg:h-[600px]"
              style={{ perspective: "1000px" }}
            >
              <div className="relative flex h-full w-full scale-[0.65] items-center justify-center transform md:scale-[0.85] lg:scale-100">
                <div
                  ref={mockupRef}
                  className="iphone-bezel transform-style-3d relative flex h-[580px] w-[280px] flex-col rounded-[3rem] will-change-transform"
                >
                  <div className="hardware-btn absolute top-[120px] -left-[3px] z-0 h-[25px] w-[3px] rounded-l-md" aria-hidden="true" />
                  <div className="hardware-btn absolute top-[160px] -left-[3px] z-0 h-[45px] w-[3px] rounded-l-md" aria-hidden="true" />
                  <div className="hardware-btn absolute top-[220px] -left-[3px] z-0 h-[45px] w-[3px] rounded-l-md" aria-hidden="true" />
                  <div className="hardware-btn absolute top-[170px] -right-[3px] z-0 h-[70px] w-[3px] scale-x-[-1] rounded-r-md" aria-hidden="true" />

                  <div className="absolute inset-[7px] z-10 overflow-hidden rounded-[2.5rem] bg-[#050914] text-white shadow-[inset_0_0_15px_rgba(0,0,0,1)]">
                    <div className="screen-glare pointer-events-none absolute inset-0 z-40" aria-hidden="true" />

                    <div className="absolute left-1/2 top-[5px] z-50 flex h-[28px] w-[100px] -translate-x-1/2 items-center justify-end rounded-full bg-black px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                    </div>

                    <div className="relative flex h-full w-full flex-col px-5 pb-8 pt-12">
                      <div className="phone-widget mb-8 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                            Portfolio
                          </span>
                          <span className="text-xl font-bold tracking-tight text-white drop-shadow-md">
                            Daniel Sanchez
                          </span>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-neutral-200 shadow-lg shadow-black/50">
                          DS
                        </div>
                      </div>

                      <div className="phone-widget relative mx-auto mb-8 flex h-44 w-44 items-center justify-center drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
                        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                          <circle cx="88" cy="88" r="64" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="12" />
                          <circle className="progress-ring" cx="88" cy="88" r="64" fill="none" stroke="#3B82F6" strokeWidth="12" />
                        </svg>
                        <div className="z-10 flex flex-col items-center text-center">
                          <span className="counter-val text-4xl font-extrabold tracking-tighter text-white">0</span>
                          <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.1em] text-blue-200/50">
                            {metricLabel}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="phone-widget widget-depth flex items-center rounded-2xl p-3">
                          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-blue-600/5 shadow-inner">
                            <span className="text-xs font-bold text-blue-400">FS</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-white">Full Stack Dev</p>
                            <p className="text-[10px] text-neutral-400">React · Next.js · Node.js</p>
                          </div>
                        </div>
                        <div className="phone-widget widget-depth flex items-center rounded-2xl p-3">
                          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 shadow-inner">
                            <span className="text-xs font-bold text-emerald-400">CC</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-white">CCNA Certified</p>
                            <p className="text-[10px] text-neutral-400">Cisco · Network Engineering</p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-1/2 h-[4px] w-[120px] -translate-x-1/2 rounded-full bg-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                    </div>
                  </div>
                </div>

                <div className="floating-badge floating-ui-badge absolute left-[-15px] top-6 z-30 flex items-center gap-3 rounded-xl p-3 lg:left-[-80px] lg:top-12 lg:gap-4 lg:rounded-2xl lg:p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/30 bg-gradient-to-b from-blue-500/20 to-blue-900/10 shadow-inner lg:h-10 lg:w-10">
                    <span className="text-base drop-shadow-lg lg:text-xl" aria-hidden="true">
                      🚀
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-tight text-white lg:text-sm">Production Ready</p>
                    <p className="text-[10px] font-medium text-blue-200/50 lg:text-xs">Deployed & live</p>
                  </div>
                </div>

                <div className="floating-badge floating-ui-badge absolute bottom-12 right-[-15px] z-30 flex items-center gap-3 rounded-xl p-3 lg:bottom-20 lg:right-[-80px] lg:gap-4 lg:rounded-2xl lg:p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-indigo-400/30 bg-gradient-to-b from-indigo-500/20 to-indigo-900/10 shadow-inner lg:h-10 lg:w-10">
                    <span className="text-base drop-shadow-lg lg:text-lg" aria-hidden="true">
                      ⚡
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-tight text-white lg:text-sm">Fast Delivery</p>
                    <p className="text-[10px] font-medium text-blue-200/50 lg:text-xs">On time, on spec</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-left-text gsap-reveal order-3 z-20 flex w-full flex-col justify-center px-4 text-center lg:order-1 lg:max-w-none lg:px-0 lg:text-left">
              <h3 className="mb-0 text-3xl font-bold tracking-tight text-white md:text-4xl lg:mb-5 lg:text-5xl xl:text-6xl">
                {cardHeading}
              </h3>
              <p className="mx-auto hidden max-w-sm text-sm font-normal leading-relaxed text-blue-100/70 md:block md:text-base lg:mx-0 lg:max-w-none lg:text-lg">
                {cardDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
