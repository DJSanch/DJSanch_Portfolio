"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react"

type SlideSection = "projects" | "events"
type SlideTarget = SlideSection | null

type SlideState = {
  active: SlideSection
  progress: number
  target: SlideTarget
  animating: boolean
}

const SLIDE_DURATION_MS = 900
const SLIDE_EASING = "cubic-bezier(0.4, 0, 0.2, 1)"

const SlideContext = createContext<SlideState>({
  active: "projects",
  progress: 0,
  target: null,
  animating: false,
})

export function navigateProjectsEvents(section: SlideSection) {
  document.getElementById("projects-events")?.scrollIntoView({ behavior: "smooth" })
  window.dispatchEvent(new CustomEvent("section-nav", { detail: section }))
}

export function ProjectsEventsSlideProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<SlideSection>("projects")
  const [progress, setProgress] = useState(0)
  const [target, setTarget] = useState<SlideTarget>(null)
  const [animating, setAnimating] = useState(false)
  const activeRef = useRef(active)
  const animatingRef = useRef(animating)
  const timeoutRef = useRef<number | null>(null)

  activeRef.current = active
  animatingRef.current = animating

  const animateTo = useCallback((sectionId: SlideSection) => {
    if (sectionId === activeRef.current && !animatingRef.current) return

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
    }

    setTarget(sectionId)
    setAnimating(true)
    setProgress(0)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setProgress(1))
    })

    timeoutRef.current = window.setTimeout(() => {
      setActive(sectionId)
      setAnimating(false)
      setTarget(null)
      setProgress(0)
      timeoutRef.current = null
    }, SLIDE_DURATION_MS + 50)
  }, [])

  useEffect(() => {
    const onSectionNav = (event: Event) => {
      const sectionId = (event as CustomEvent<string>).detail
      if (sectionId !== "projects" && sectionId !== "events") return
      animateTo(sectionId as SlideSection)
    }

    window.addEventListener("section-nav", onSectionNav)

    return () => {
      window.removeEventListener("section-nav", onSectionNav)
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [animateTo])

  return (
    <SlideContext.Provider value={{ active, progress, target, animating }}>
      {children}
    </SlideContext.Provider>
  )
}

export function ProjectsEventsPlane({ children }: { children: React.ReactNode }) {
  return (
    <div id="projects-events" className="relative h-[100dvh] scroll-mt-0">
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <div className="relative h-full w-full overflow-hidden overscroll-contain">{children}</div>
      </div>
    </div>
  )
}

function getPanelOffset(
  section: SlideSection,
  active: SlideSection,
  target: SlideTarget,
  progress: number,
  animating: boolean
) {
  if (animating && target === "events") {
    return section === "projects" ? -progress * 100 : (1 - progress) * 100
  }

  if (animating && target === "projects") {
    return section === "projects" ? -(1 - progress) * 100 : progress * 100
  }

  if (active === "events") {
    return section === "projects" ? -100 : 0
  }

  return section === "projects" ? 0 : 100
}

export function useProjectsEventsSlide(section: SlideSection): {
  style: CSSProperties
  className: string
} {
  const { active, progress, target, animating } = useContext(SlideContext)
  const offset = getPanelOffset(section, active, target, progress, animating)
  const isIncoming = animating ? target === section : active === section

  return {
    className: isIncoming ? "z-20" : "z-10",
    style: {
      transform: `translateX(${offset}%)`,
      transition: animating ? `transform ${SLIDE_DURATION_MS}ms ${SLIDE_EASING}` : undefined,
      willChange: animating ? "transform" : undefined,
    },
  }
}
