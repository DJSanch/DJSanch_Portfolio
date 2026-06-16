"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Code, Award, ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react"
import { sectionScrollBlockStyle, useSectionScrollMotion } from "@/hooks/use-section-scroll-motion"
import { typography } from "@/lib/typography"

const aboutCardClass =
  "h-full gap-2 border-0 bg-transparent py-2 text-white shadow-none backdrop-blur-none"

type AboutSlide = {
  title: string
  icon: LucideIcon
  content: React.ReactNode
}

const About = () => {
  const { headerStyle, contentStyle, exit } = useSectionScrollMotion("about-panel")
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
        <p className={typography.body}>
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
              className={typography.badge}
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
                  <h4 className={`text-sm font-semibold text-white`}>{edu.degree}</h4>
                  <p className={typography.meta}>{edu.school}</p>
                </div>
                <Badge variant="outline" className={`shrink-0 border-white/10 bg-transparent ${typography.caption}`}>
                  {edu.year}
                </Badge>
              </div>
              <p className={typography.bodySmall}>{edu.description}</p>
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
                  <p className={typography.meta}>{exp.company}</p>
                </div>
                <Badge variant="outline" className={`shrink-0 border-white/10 bg-transparent ${typography.caption}`}>
                  {exp.period}
                </Badge>
              </div>
              <p className={`mt-1 ${typography.bodySmall}`}>{exp.description}</p>
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
  }, [updateScrollState])

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
        style={{
          opacity: 1 - exit * 0.35,
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-[55%] h-[min(480px,85vw)] w-[min(480px,85vw)] -translate-y-1/2 rounded-full bg-[#1a4480]/40 sm:-right-16 sm:top-1/2 sm:h-[min(600px,88vw)] sm:w-[min(600px,88vw)] lg:right-[8%] lg:h-[min(620px,55vw)] lg:w-[min(620px,55vw)]"
          style={{
            opacity: headerStyle.opacity,
            transform: `translateY(calc(-50% + ${exit * -40}px)) scale(${1 - exit * 0.08})`,
          }}
        >
          <div className="absolute inset-0 scale-110 rounded-full bg-[#3b82f6]/10 blur-3xl" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1e38]"
          style={{ opacity: 1 - exit * 0.5 }}
        />

        <div className="container relative z-10 mx-auto flex min-h-screen flex-col px-4 pb-6 pt-24 sm:px-6 sm:pb-8 sm:pt-28">
          <div className="grid w-full grid-cols-1 items-stretch gap-6 sm:gap-8 lg:min-h-[calc(100dvh-7rem)] lg:grid-cols-2 lg:gap-4 xl:gap-6">
            <div className="flex min-h-0 min-w-0 flex-col text-center sm:text-left lg:max-w-xl lg:pl-8 xl:pl-12">
              <div
                className="mb-4 shrink-0 space-y-3 will-change-transform sm:mb-5"
                style={{
                  ...sectionScrollBlockStyle(headerStyle),
                  pointerEvents: exit > 0.85 ? "none" : "auto",
                }}
              >
                <p className={`mb-2 ${typography.eyebrow}`}>
                  About Me
                </p>
                <h2 className={typography.sectionTitle}>
                  Building With
                  <br />
                  Purpose
                </h2>
                <p className={`mx-auto max-w-md sm:mx-0 ${typography.sectionDescription}`}>
                  I&apos;m a passionate developer with a strong foundation in both frontend and backend
                  technologies. I love creating solutions that are not only functional but also
                  provide an excellent user experience.
                </p>
              </div>

              <div
                className="relative z-30 flex min-h-0 flex-1 items-center gap-2 will-change-transform sm:gap-3"
                style={{
                  ...sectionScrollBlockStyle(contentStyle),
                  pointerEvents: contentStyle.opacity > 0.5 && exit < 0.85 ? "auto" : "none",
                }}
              >
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
                  className="flex h-[min(240px,34vh)] min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth sm:h-[min(280px,38vh)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                  {slides.map((slide, index) => {
                    const Icon = slide.icon
                    return (
                      <Card
                        key={`${slide.title}-${index}`}
                        className={`${aboutCardClass} min-w-full max-w-full shrink-0 snap-center snap-always`}
                      >
                        <CardHeader className="px-0 pb-1 pt-0">
                          <CardTitle className={typography.cardTitleWithIcon}>
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

            <div aria-hidden className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
