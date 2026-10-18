"use client"

import { useEffect, useState, type CSSProperties, type MouseEvent } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useReducedMotion } from "motion/react"
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react"

export interface CarouselProject {
  name: string
  type: string
  image: string
  href: string
  number: string
  description: string
}

export function FeatureCarousel({ projects }: { projects: CarouselProject[] }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const pointerStyle = {
    "--mouse-x": useMotionTemplate`${mouseX}px`,
    "--mouse-y": useMotionTemplate`${mouseY}px`,
  } as CSSProperties
  const activeProject = projects[current]

  useEffect(() => {
    if (paused || reduceMotion || projects.length < 2) return
    const timer = window.setInterval(() => setCurrent((index) => (index + 1) % projects.length), 6000)
    return () => window.clearInterval(timer)
  }, [paused, projects.length, reduceMotion])

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) => {
    const rect = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - rect.left)
    mouseY.set(clientY - rect.top)
  }

  if (!activeProject) return null
  const isExternal = activeProject.href.startsWith("http")

  return (
    <div className="project-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false) }}>
      <div className="project-carousel-card" onMouseMove={handleMouseMove} style={pointerStyle}>
        <div className="project-carousel-copy">
          <AnimatePresence mode="wait">
            <motion.div key={activeProject.name} initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
              <p className="project-carousel-index">{activeProject.number} <span>/ {String(projects.length).padStart(2, "0")}</span></p>
              <p className="project-carousel-type">{activeProject.type}</p>
              <h3>{activeProject.name}</h3>
              <p className="project-carousel-description">{activeProject.description}</p>
              <a className="project-carousel-link" href={activeProject.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
                Explore project <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </AnimatePresence>
          <div className="project-carousel-nav" role="tablist" aria-label="Choose a project">
            {projects.map((project, index) => (
              <button key={project.name} type="button" role="tab" aria-selected={index === current} aria-label={`Show ${project.name}`} onClick={() => setCurrent(index)} className={index === current ? "active" : ""}>
                <span className="project-tab-number">{index < current ? <Check size={12} /> : String(index + 1).padStart(2, "0")}</span>
                <span className="project-tab-name">{project.name}</span>
                <span className="project-tab-track"><span style={{ transform: index === current ? undefined : "scaleX(0)" }} /></span>
              </button>
            ))}
          </div>
        </div>

        <div className="project-carousel-visual" style={pointerStyle}>
          <div className="project-carousel-glow" />
          <AnimatePresence mode="wait">
            <motion.a key={activeProject.name} href={activeProject.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} className="project-carousel-image" initial={reduceMotion ? false : { opacity: 0, scale: .96, x: 14 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={reduceMotion ? undefined : { opacity: 0, scale: .98, x: -12 }} transition={{ duration: .45, ease: [.22, 1, .36, 1] }} aria-label={`Open ${activeProject.name}`}>
              <Image src={activeProject.image} alt={`${activeProject.name} preview`} fill sizes="(max-width: 760px) 100vw, 58vw" priority={current === 0} />
              <span className="project-image-open"><ArrowDownRight size={20} /></span>
            </motion.a>
          </AnimatePresence>
          <span className="project-carousel-caption">SELECTED WORK / {activeProject.number}</span>
        </div>
      </div>
      <div className="project-carousel-footer"><span>{String(current + 1).padStart(2, "0")} — {String(projects.length).padStart(2, "0")}</span><span>Web · Mobile · Machine learning</span><span className="carousel-autoplay">{reduceMotion ? "MANUAL VIEW" : paused ? "PAUSED" : "AUTO PLAY · 6 SEC"}</span></div>
    </div>
  )
}
