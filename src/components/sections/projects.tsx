"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Eye, Github, Globe } from "lucide-react"
import { useProjectsEventsSlide } from "@/components/projects-events-slide"

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  github: string
  live?: string
  viewProject?: string
  featured: boolean
}

const projects: Project[] = [
  {
    title: "Chat Application",
    description:
      "A real-time chat application with user authentication and message history.",
    technologies: ["React", "Firebase", "Socket.io", "Node.js", "Tailwind CSS"],
    image: "/projects/chat-application.png",
    github: "https://github.com/DJSanch/Chat_Application",
    live: "https://chat-application-k89h.vercel.app/",
    featured: true,
  },
  {
    title: "JS Aromatoc",
    description:
      "A modern e-commerce website featuring product listings, shopping cart, and secure checkout.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    image: "/projects/js-aromatoc.png",
    github: "https://github.com/DJSanch/JS_Aromatoc",
    live: "https://jsaromatoc.net.ph/",
    featured: true,
  },
  {
    title: "Tournament Organizer",
    description:
      "A badminton matchmaking bracket organizer that manages participant entries and tournament flow.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/tournament.png",
    github: "https://github.com/DJSanch/TournamentOrganizer.git",
    live: "https://tournament-organizer-five.vercel.app/",
    featured: true,
  },
  {
    title: "Examiner",
    description:
      "An exam generator that lets users upload material and create questionnaires by difficulty and type.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/Examiner.png",
    github: "https://github.com/DJSanch/Examiner.git",
    live: "https://examiner-seven.vercel.app/",
    featured: true,
  },
  {
    title: "RiceProTech",
    description:
      "A rice leaf disease classification mobile app built with React Native and TensorFlow.",
    technologies: ["React Native", "Python", "SQLite", "Google Colab", "TensorFlow"],
    image: "/projects/riceprotech.png",
    github: "https://github.com/DJSanch/RiceProTech",
    viewProject: "/riceprotech",
    featured: false,
  },
  {
    title: "CrackVision",
    description:
      "A multiclass image classification model for concrete crack severity detection.",
    technologies: ["Python", "TensorFlow", "Next.js", "TypeScript", "Machine Learning"],
    image: "/projects/crackvision.png",
    github: "https://github.com/DJSanch/CrackVision",
    viewProject: "/crackvision",
    featured: false,
  },
  {
    title: "Envirotech",
    description: "An inventory management system for Envirotech with data visualization.",
    technologies: ["React", "Node.js", "MongoDB", "Data Visualization"],
    image: "/projects/envirotech.png",
    github: "https://github.com/DJSanch/Envirotech",
    viewProject: "/envirotech",
    featured: false,
  },
]

/** C-shaped arc — cards slide along the path in project order (no tilt) */
function getCArcPosition(index: number, activeIndex: number, radius = 340) {
  const offset = index - activeIndex
  if (Math.abs(offset) > 4) {
    return { x: 0, y: 0, scale: 0, opacity: 0, zIndex: 0, blur: 0 }
  }

  const stepDeg = 26
  const theta = (offset * stepDeg * Math.PI) / 180
  const x = radius * (1 - Math.cos(theta))
  const y = radius * Math.sin(theta)
  const depth = Math.abs(offset)

  return {
    x,
    y,
    scale: depth === 0 ? 1.95 : Math.max(0.46, 0.68 - depth * 0.1),
    opacity: depth === 0 ? 1 : Math.max(0.42, 0.9 - depth * 0.16),
    blur: depth === 0 ? 0 : Math.min(8, 3 + depth * 1.8),
    zIndex: 40 - depth,
  }
}

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const slide = useProjectsEventsSlide("projects")

  const goTo = (direction: "prev" | "next") => {
    setActiveIndex((current) => {
      if (direction === "prev") {
        return current === 0 ? projects.length - 1 : current - 1
      }
      return current === projects.length - 1 ? 0 : current + 1
    })
  }

  const arrowButtonClass =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors hover:border-white/45 hover:bg-white/5 hover:text-white sm:h-10 sm:w-10"

  const projectImageSrc = (image: string) =>
    image.startsWith("/") ? image : `/projects/${image}`

  return (
    <>
      <div id="projects" className="sr-only" aria-hidden />
      <div
        id="projects-panel"
        className={`absolute inset-0 overflow-x-clip overflow-y-auto bg-gradient-to-br from-[#0d1e38] via-[#0f2847] to-[#122a52] ${slide.className}`}
        style={slide.style}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d1e38]/40 via-transparent to-[#0a1220]/80"
        />

        <div className="container relative z-10 mx-auto flex min-h-screen flex-col px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28">
          <div className="grid min-h-[calc(100dvh-7rem)] w-full grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* Left — project content carousel */}
            <div className="flex min-h-0 min-w-0 flex-col justify-center text-center sm:text-left lg:max-w-xl lg:pl-8 xl:pl-12">
              <div className="mb-10 shrink-0 space-y-3 sm:mb-12 lg:mb-14">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60 sm:text-xs sm:tracking-[0.35em]">
                  Portfolio
                </p>
                <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
                  My
                  <br />
                  Projects
                </h2>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-white/65 sm:mx-0 md:text-base">
                  Selected work spanning full-stack web apps, mobile tools, and machine learning
                  projects — each built to solve a real problem.
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => goTo("prev")}
                  aria-label="Previous project"
                  className={arrowButtonClass}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="min-w-0 flex-1 overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {projects.map((project) => (
                      <div key={project.title} className="w-full shrink-0 space-y-4 px-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
                          {project.featured && (
                            <Badge className="shrink-0 border-white/10 bg-white/10 text-white">
                              Featured
                            </Badge>
                          )}
                        </div>

                        <p className="text-sm leading-relaxed text-white/70">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-white/10 bg-white/[0.03] text-xs text-white/75"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          {project.viewProject ? (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                            >
                              <Link href={project.viewProject}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Project
                              </Link>
                            </Button>
                          ) : project.live ? (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                            >
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <Globe className="mr-2 h-4 w-4" />
                                Live
                              </a>
                            </Button>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => goTo("next")}
                  aria-label="Next project"
                  className={arrowButtonClass}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/45">
                {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </p>
            </div>

            {/* Right — C-shaped image carousel (no scroll transition) */}
            <div className="relative flex min-h-[min(54vh,440px)] w-full items-center justify-center sm:min-h-[min(58vh,480px)] lg:min-h-[calc(100dvh-7rem)]">
              <div className="relative h-[min(560px,64vh)] w-full max-w-[800px] -translate-x-[6%] lg:h-[min(640px,72vh)] lg:-translate-x-[10%]">
                {projects.map((project, index) => {
                  const pos = getCArcPosition(index, activeIndex)
                  const isActive = index === activeIndex

                  return (
                    <button
                      key={project.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View ${project.title}`}
                      aria-current={isActive ? "true" : undefined}
                      className="absolute left-1/2 top-1/2 w-[min(240px,52vw)] origin-center sm:w-[260px] lg:w-[280px] xl:w-[300px]"
                      style={{
                        transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(${pos.scale})`,
                        opacity: pos.opacity,
                        zIndex: pos.zIndex,
                        transition:
                          "transform 700ms cubic-bezier(0.4,0,0.2,1), opacity 700ms cubic-bezier(0.4,0,0.2,1), filter 700ms cubic-bezier(0.4,0,0.2,1)",
                        filter: `blur(${pos.blur}px)`,
                      }}
                    >
                      <div
                        className={`overflow-hidden rounded-2xl border bg-[#0a1220]/80 shadow-[0_24px_60px_rgba(0,0,0,0.5)] ${
                          isActive ? "border-white/20" : "border-white/10"
                        }`}
                      >
                        <div className="relative aspect-[4/3] w-full">
                          <Image
                            src={projectImageSrc(project.image)}
                            alt={project.title}
                            fill
                            unoptimized
                            sizes="(max-width: 1024px) 260px, 300px"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
