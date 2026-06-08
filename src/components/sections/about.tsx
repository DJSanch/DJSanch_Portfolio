"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Code, Award, ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react"
import { useHeroAboutBlend, scrollToHero } from "@/components/hero-about-scroll"

const aboutCardClass =
  "h-full gap-2 border-0 bg-transparent py-2 text-white shadow-none backdrop-blur-none"

type AboutSlide = {
  title: string
  icon: LucideIcon
  content: React.ReactNode
}

const About = () => {
  const blend = useHeroAboutBlend()
  const cardsRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Mapua Malayan Colleges of Mindanao",
      year: "2022-2026",
      description: "Network Engineering & Web Development",
    },
  ]

  const experience = [
    {
      role: "Backend Developer",
      company: "Goldenville",
      period: "2025 - Present",
      description: "Enterprise web apps with React, Node.js, and AWS",
    },
    {
      role: "Frontend Developer",
      company: "JS Aromatoc",
      period: "2024 - Present",
      description: "Responsive UIs and modern design systems",
    },
    {
      role: "Backend Developer",
      company: "Envirotech",
      period: "2024 - 2025",
      description: "Web applications with JavaScript and Python",
    },
  ]

  const interests = [
    "Open Source Contribution",
    "Machine Learning",
    "Cloud Architecture",
    "UI/UX Design",
    "Technical Writing",
    "Mentoring",
  ]

  const slides: AboutSlide[] = [
    {
      title: "My Journey",
      icon: Code,
      content: (
        <p className="text-sm leading-relaxed text-white/70">
          My journey began with curiosity about how websites work. From simple HTML pages
          to full-stack applications, I focus on clean code, modern tools, and building
          solutions that scale and make an impact.
        </p>
      ),
    },
    {
      title: "Interests & Hobbies",
      icon: Award,
      content: (
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <Badge
              key={interest}
              variant="outline"
              className="border-white/10 bg-white/[0.03] text-xs text-white/75"
            >
              {interest}
            </Badge>
          ))}
        </div>
      ),
    },
    {
      title: "Education",
      icon: GraduationCap,
      content: (
        <>
          {education.map((edu) => (
            <div key={edu.degree} className="space-y-1.5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                  <p className="text-xs text-white/60">{edu.school}</p>
                </div>
                <Badge variant="outline" className="shrink-0 border-white/10 bg-transparent text-[10px] text-white/55">
                  {edu.year}
                </Badge>
              </div>
              <p className="text-xs text-white/70">{edu.description}</p>
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Work Experience",
      icon: Briefcase,
      content: (
        <div className="space-y-3">
          {experience.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className={index < experience.length - 1 ? "border-b border-white/10 pb-3" : ""}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-white">{exp.role}</h4>
                  <p className="text-xs text-white/60">{exp.company}</p>
                </div>
                <Badge variant="outline" className="shrink-0 border-white/10 bg-transparent text-[10px] text-white/55">
                  {exp.period}
                </Badge>
              </div>
              <p className="mt-1 text-xs leading-snug text-white/70">{exp.description}</p>
            </div>
          ))}
        </div>
      ),
    },
  ]

  const updateScrollState = useCallback(() => {
    const container = cardsRef.current
    if (!container) return

    const { scrollLeft, scrollWidth, clientWidth } = container
    setCanScrollLeft(scrollLeft > 8)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8)
  }, [])

  useEffect(() => {
    const container = cardsRef.current
    if (!container) return

    updateScrollState()
    container.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("resize", updateScrollState)

    return () => {
      container.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [updateScrollState, blend])

  const scrollCards = (direction: "left" | "right") => {
    const container = cardsRef.current
    if (!container) return

    container.scrollBy({
      left: direction === "left" ? -container.clientWidth : container.clientWidth,
      behavior: "smooth",
    })
  }

  const arrowButtonClass =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors hover:border-white/45 hover:bg-white/5 hover:text-white disabled:pointer-events-none disabled:opacity-25 sm:h-10 sm:w-10"

  return (
    <section id="about">
      <div
        id="about-panel"
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1220] via-[#0b1528] to-[#0d1e38]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-[55%] h-[min(480px,85vw)] w-[min(480px,85vw)] -translate-y-1/2 rounded-full bg-[#1a4480]/40 sm:-right-16 sm:top-1/2 sm:h-[min(600px,88vw)] sm:w-[min(600px,88vw)] lg:right-[8%] lg:h-[min(620px,55vw)] lg:w-[min(620px,55vw)]"
        >
          <div className="absolute inset-0 scale-110 rounded-full bg-[#3b82f6]/10 blur-3xl" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1e38]"
        />

        <div className="container relative z-10 mx-auto flex min-h-screen flex-col px-4 pb-6 pt-24 sm:px-6 sm:pb-8 sm:pt-28">
          <div className="grid min-h-[calc(100dvh-7rem)] w-full grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-4 xl:gap-6">
            <div
              className="flex min-h-0 min-w-0 flex-col text-center transition-all duration-700 ease-out sm:text-left lg:max-w-xl lg:pl-8 xl:pl-12"
              style={{
                opacity: blend,
                transform: `translateY(${(1 - blend) * 32}px)`,
              }}
            >
              <div className="mb-4 shrink-0 space-y-3 sm:mb-5">
                <div>
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/60 sm:text-xs sm:tracking-[0.35em]">
                    About Me
                  </p>
                  <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
                    Building With
                    <br />
                    Purpose
                  </h2>
                </div>

                <p className="mx-auto max-w-md text-sm leading-relaxed text-white/65 sm:mx-0 md:text-base">
                  I&apos;m a passionate developer with a strong foundation in both frontend and backend
                  technologies. I love creating solutions that are not only functional but also
                  provide an excellent user experience.
                </p>
              </div>

              <div className="relative z-30 flex min-h-0 flex-1 items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => scrollCards("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous card"
                  className={arrowButtonClass}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div
                  ref={cardsRef}
                  className="flex h-[min(260px,36vh)] min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth sm:h-[min(280px,38vh)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                  {slides.map((slide, index) => {
                    const Icon = slide.icon
                    return (
                      <Card
                        key={`${slide.title}-${index}`}
                        className={`${aboutCardClass} min-w-full max-w-full shrink-0 snap-center snap-always`}
                      >
                        <CardHeader className="px-0 pb-1 pt-0">
                          <CardTitle className="flex items-center gap-2 text-base text-white sm:text-lg">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                            {slide.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="overflow-hidden px-0 pb-0">{slide.content}</CardContent>
                      </Card>
                    )
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => scrollCards("right")}
                  disabled={!canScrollRight}
                  aria-label="Next card"
                  className={arrowButtonClass}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToHero}
              aria-label="Back to home"
              className="relative mx-auto h-[min(52vh,420px)] w-full max-w-[320px] shrink-0 cursor-pointer border-0 bg-transparent p-0 sm:h-[min(58vh,500px)] sm:max-w-md lg:hidden"
            >
              <Image
                src="/about-portrait.png"
                alt="Daniel Sanchez"
                fill
                unoptimized
                sizes="(max-width: 640px) 280px, 400px"
                className="object-contain object-bottom"
              />
            </button>

            <div aria-hidden className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
