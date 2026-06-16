"use client"

import { useCallback, useRef, useState } from "react"
import Image from "next/image"
import { Award } from "lucide-react"
import { useIsMobile, useIsTablet } from "@/hooks/use-media-query"
import { sectionScrollBlockStyle, useSectionScrollMotion } from "@/hooks/use-section-scroll-motion"
import { typography } from "@/lib/typography"

interface CertificationItem {
  title: string
  filename: string
  image?: string
  provider?: string
}

const certifications: CertificationItem[] = [
  {
    title: "CCNA - Cisco Certified Network Associate",
    filename: "Cisco Certified Network Associate certificate.pdf",
    image: "Cisco Certified Network Associate certificate.png",
    provider: "Cisco",
  },
  { title: "Start the UX Design Process: Empathize, Define, and Ideate", filename: "Coursera TTTHDXS9S7WW.pdf", image: "Coursera TTTHDXS9S7WW.png" },
  { title: "What is Data Science?", filename: "Coursera P6IG4BHZO88H.pdf", image: "Coursera P6IG4BHZO88H.png" },
  { title: "Introduction to Java", filename: "Coursera KX83SA2BG6DX.pdf", image: "Coursera KX83SA2BG6DX.png" },
  { title: "Introduction to Hardware and Operating Systems", filename: "Coursera HGWLFOYUKPGA.pdf", image: "Coursera HGWLFOYUKPGA.png" },
  { title: "Beginning Custom Projects with Raspberry Pi", filename: "Coursera CYG4C3YCPCVZ.pdf", image: "Coursera CYG4C3YCPCVZ.png" },
  { title: "Data Structures", filename: "Coursera 5TS9KY8VYU4E.pdf", image: "Coursera 5TS9KY8VYU4E.png" },
  { title: "Advanced Algorithms and Complexity", filename: "Coursera 2LYHG9CWSKFE.pdf", image: "Coursera 2LYHG9CWSKFE.png" },
  { title: "Understanding the Impact of a Merger for IT Teams", filename: "CertificateOfCompletion_Understanding the Impact of a Merger for IT Teams.pdf", image: "CertificateOfCompletion_Understanding the Impact of a Merger for IT Teams.png" },
  { title: "SQL Essential Training", filename: "CertificateOfCompletion_SQL Essential Training.pdf", image: "CertificateOfCompletion_SQL Essential Training.png" },
  { title: "TensorFlow Working with NLP", filename: "CertificateOfCompletion_TensorFlow Working with NLP.pdf", image: "CertificateOfCompletion_TensorFlow Working with NLP.png" },
  { title: "SQL Essential Training 2014", filename: "CertificateOfCompletion_SQL Essential Training 2014.pdf", image: "CertificateOfCompletion_SQL Essential Training 2014.png" },
  { title: "Object-Oriented Programming with C", filename: "CertificateOfCompletion_ObjectOriented Programming with C.pdf", image: "CertificateOfCompletion_ObjectOriented Programming with C.png" },
  { title: "Programming Foundations: Databases", filename: "CertificateOfCompletion_Programming Foundations Databases.pdf", image: "CertificateOfCompletion_Programming Foundations Databases.png" },
  { title: "Large Language Models: Text Classification for NLP using BERT", filename: "CertificateOfCompletion_Large Language Models Text Classification for NLP using BERT.pdf", image: "CertificateOfCompletion_Large Language Models Text Classification for NLP using BERT.png" },
  { title: "Networking Foundations: Local Area Networks (LANs) 2015", filename: "CertificateOfCompletion_Networking Foundations Local Area Networks LANs 2015.pdf", image: "CertificateOfCompletion_Networking Foundations Local Area Networks LANs 2015.png" },
  { title: "Introduction to Generative AI with GPT", filename: "CertificateOfCompletion_Introduction to Generative AI with GPT.pdf", image: "CertificateOfCompletion_Introduction to Generative AI with GPT.png" },
  { title: "Introduction to Network Routing", filename: "CertificateOfCompletion_Introduction to Network Routing.pdf", image: "CertificateOfCompletion_Introduction to Network Routing.png" },
  { title: "GPT-4 Foundations: Building AI-Powered Apps", filename: "CertificateOfCompletion_GPT4 Foundations Building AIPowered Apps.pdf", image: "CertificateOfCompletion_GPT4 Foundations Building AIPowered Apps.png" },
  { title: "Generative AI: Introduction to Large Language Models", filename: "CertificateOfCompletion_Generative AI Introduction to Large Language Models.pdf", image: "CertificateOfCompletion_Generative AI Introduction to Large Language Models.png" },
  { title: "Applied AI: Building NLP Apps with Hugging Face Transformers", filename: "CertificateOfCompletion_Applied AI Building NLP Apps with Hugging Face Transformers.pdf", image: "CertificateOfCompletion_Applied AI Building NLP Apps with Hugging Face Transformers.png" },
  { title: "Develop Your Skills with Large Language Models", filename: "CertificateOfCompletion_Develop Your Skills with Large Language Models.pdf", image: "CertificateOfCompletion_Develop Your Skills with Large Language Models.png" },
  { title: "AI Text Summarization with Hugging Face", filename: "CertificateOfCompletion_AI Text Summarization with Hugging Face.pdf", image: "CertificateOfCompletion_AI Text Summarization with Hugging Face.png" },
  { title: "Agile Software Development: Refactoring", filename: "CertificateOfCompletion_Agile Software Development Refactoring.pdf", image: "CertificateOfCompletion_Agile Software Development Refactoring.png" },
  { title: "Agile Software Development: Clean Coding Practices", filename: "CertificateOfCompletion_Agile Software Development Clean Coding Practices.pdf", image: "CertificateOfCompletion_Agile Software Development Clean Coding Practices.png" },
]

function CertCardFace({ cert, isActive }: { cert: CertificationItem; isActive: boolean }) {
  return (
    <div
      className={`h-full w-full overflow-hidden rounded-2xl border bg-[#0a1220]/80 transition-[border-color,box-shadow] duration-500 ${
        isActive
          ? "border-white/30 shadow-[0_32px_80px_rgba(0,0,0,0.55),0_0_40px_rgba(96,165,250,0.15)]"
          : "border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
      }`}
    >
      {cert.image ? (
        <div className="relative aspect-[11/8.5] w-full">
          <Image
            src={`/certifications/${cert.image}`}
            alt={cert.title}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 480px, 560px"
          />
          {!isActive && (
            <div
              aria-hidden
              className="absolute inset-0 bg-[#0a1220]/35 transition-opacity duration-500"
            />
          )}
        </div>
      ) : (
        <div className="flex aspect-[11/8.5] w-full items-center justify-center bg-[#0a1220]/60">
          <Award className="h-16 w-16 text-white/20" />
        </div>
      )}
    </div>
  )
}

function getCircularOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex
  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total
  return offset
}

/** Pokemon TCG pack-picker style — cards fan on a 3D arc with Y-rotation */
function getPackArcPosition(
  index: number,
  activeIndex: number,
  total: number,
  radius: number,
  activeScale: number,
  dragOffset = 0
) {
  const offset = getCircularOffset(index, activeIndex, total) - dragOffset
  if (Math.abs(offset) > 2.5) {
    return { x: 0, y: 0, z: 0, rotateY: 0, scale: 0, opacity: 0, zIndex: 0, blur: 0 }
  }

  const stepDeg = 34
  const theta = (offset * stepDeg * Math.PI) / 180
  const depth = Math.abs(offset)

  return {
    x: radius * Math.sin(theta) * 2.1,
    y: depth * 14,
    z: depth === 0 ? 60 : -depth * 90,
    rotateY: -offset * stepDeg,
    scale: depth === 0 ? activeScale : Math.max(0.74, 0.9 - depth * 0.08),
    opacity: depth === 0 ? 1 : Math.max(0.5, 0.85 - depth * 0.2),
    blur: depth === 0 ? 0 : Math.min(5, 2 + depth * 1.5),
    zIndex: 30 - depth,
  }
}

const DRAG_CLICK_THRESHOLD_PX = 8
const STEER_SNAP_THRESHOLD = 0.28
const STEER_VELOCITY_THRESHOLD = 0.45

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartXRef = useRef(0)
  const dragOffsetRef = useRef(0)
  const didDragRef = useRef(false)
  const lastMoveXRef = useRef(0)
  const lastMoveTimeRef = useRef(0)
  const velocityRef = useRef(0)
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const { headerStyle, contentStyle, visualStyle } = useSectionScrollMotion("certifications-panel")

  const total = certifications.length
  const arcRadius = isMobile ? 120 : isTablet ? 150 : 180
  const activeScale = isMobile ? 1 : isTablet ? 1.02 : 1.04
  const steerThreshold = isMobile ? 95 : 130

  const cardWidthClass = isMobile
    ? "w-[min(240px,72vw)]"
    : "w-[min(300px,78vw)] sm:w-[340px] md:w-[380px] lg:w-[420px] xl:w-[460px]"

  const wrapIndex = useCallback(
    (index: number) => ((index % total) + total) % total,
    [total]
  )

  const selectIndex = useCallback(
    (index: number) => {
      setActiveIndex(wrapIndex(index))
    },
    [wrapIndex]
  )

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return

    didDragRef.current = false
    dragStartXRef.current = event.clientX
    dragOffsetRef.current = 0
    lastMoveXRef.current = event.clientX
    lastMoveTimeRef.current = performance.now()
    velocityRef.current = 0
    setDragOffset(0)
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }, [])

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging) return

      const deltaX = event.clientX - dragStartXRef.current
      if (Math.abs(deltaX) > DRAG_CLICK_THRESHOLD_PX) {
        didDragRef.current = true
      }

      const progress = -deltaX / steerThreshold
      dragOffsetRef.current = progress
      setDragOffset(progress)

      const now = performance.now()
      const elapsed = now - lastMoveTimeRef.current
      if (elapsed > 0) {
        velocityRef.current = (event.clientX - lastMoveXRef.current) / elapsed
      }
      lastMoveXRef.current = event.clientX
      lastMoveTimeRef.current = now
    },
    [isDragging, steerThreshold]
  )

  const finishDrag = useCallback(() => {
    if (!isDragging) return

    setIsDragging(false)

    const offset = dragOffsetRef.current
    const velocity = velocityRef.current
    let steps = 0

    if (Math.abs(velocity) > STEER_VELOCITY_THRESHOLD) {
      steps = velocity < 0 ? 1 : -1
    } else if (Math.abs(offset) > STEER_SNAP_THRESHOLD) {
      steps = offset > 0 ? 1 : -1
    }

    setDragOffset(0)
    dragOffsetRef.current = 0

    if (steps !== 0) {
      setActiveIndex((current) => wrapIndex(current + steps))
    }
  }, [isDragging, wrapIndex])

  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId)
      }
      finishDrag()
    },
    [finishDrag]
  )

  const handleActiveCertClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    if (didDragRef.current) {
      event.preventDefault()
    }
  }, [])

  return (
    <section id="certifications">
      <div
        id="certifications-panel"
        className="relative min-h-screen overflow-x-clip bg-gradient-to-br from-[#0d1e38] via-[#0f2847] to-[#122a52]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d1e38]/40 via-transparent to-[#0a1220]/80"
        />

        <div className="container relative z-10 mx-auto flex min-h-screen flex-col px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="mx-auto flex min-h-[calc(100dvh-7rem)] w-full max-w-6xl flex-col items-center justify-center text-center">
            <div
              className="mb-8 shrink-0 space-y-3 will-change-transform sm:mb-10"
              style={sectionScrollBlockStyle(headerStyle)}
            >
              <p className={typography.eyebrow}>
                Credentials
              </p>
              <h2 className={typography.sectionTitle}>
                Certifications
              </h2>
              <p className={`mx-auto max-w-md ${typography.sectionDescription}`}>
                Professional certifications from Cisco, Coursera, and LinkedIn Learning.
              </p>
            </div>

            <div className="relative w-full px-2 will-change-transform sm:px-4" style={sectionScrollBlockStyle(visualStyle)}>
              <div
                className="relative min-h-[min(440px,58vh)] w-full overflow-visible py-6 sm:min-h-[min(520px,62vh)] sm:py-8 md:min-h-[min(580px,68vh)]"
                style={{ perspective: isMobile ? "900px" : "1200px" }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[min(320px,42vh)] w-[min(520px,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#60a5fa]/10 blur-3xl"
                />

                <div
                  className={`relative mx-auto h-full w-full min-h-[inherit] touch-pan-y select-none ${
                    isDragging ? "cursor-grabbing" : "cursor-grab"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                >
                  {certifications.map((cert, index) => {
                    const pos = getPackArcPosition(
                      index,
                      activeIndex,
                      total,
                      arcRadius,
                      activeScale,
                      dragOffset
                    )
                    const isActive = index === activeIndex && Math.abs(dragOffset) < 0.5

                    return (
                      <div
                        key={cert.title}
                        className={`absolute left-1/2 top-1/2 ${cardWidthClass}`}
                        style={{
                          transform: `translate(-50%, calc(-50% + ${pos.y}px)) translateX(${pos.x}px) translateZ(${pos.z}px) rotateY(${pos.rotateY}deg) scale(${pos.scale})`,
                          transformStyle: "preserve-3d",
                          opacity: pos.opacity,
                          zIndex: pos.zIndex,
                          filter: `blur(${pos.blur}px)`,
                          transition: isDragging
                            ? "none"
                            : "transform 500ms cubic-bezier(0.22,1,0.36,1), opacity 500ms cubic-bezier(0.22,1,0.36,1), filter 500ms cubic-bezier(0.22,1,0.36,1)",
                          pointerEvents: pos.opacity > 0 ? "auto" : "none",
                        }}
                      >
                        {isActive ? (
                          <a
                            href={`/certifications/${cert.filename}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View certificate: ${cert.title}`}
                            onClick={handleActiveCertClick}
                            draggable={false}
                            className="block cursor-pointer"
                          >
                            <CertCardFace cert={cert} isActive />
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              if (!didDragRef.current) selectIndex(index)
                            }}
                            aria-label={`Select ${cert.title}`}
                            className="block w-full cursor-pointer text-left"
                          >
                            <CertCardFace cert={cert} isActive={false} />
                          </button>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="-mt-10 will-change-transform sm:-mt-12" style={sectionScrollBlockStyle(contentStyle)}>
              <p className={typography.caption}>
                {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </p>
              <p className={`mt-2 max-w-sm ${typography.meta}`}>
                {certifications[activeIndex].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
