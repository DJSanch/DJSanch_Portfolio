"use client"

import { useState } from "react"
import Image from "next/image"
import { Award, ChevronLeft, ChevronRight } from "lucide-react"

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

/** Horizontal carousel — cards move left/right; neighbors show blurred on the sides */
function getHorizontalCarouselPosition(index: number, activeIndex: number, spacing = 300) {
  const offset = index - activeIndex
  if (Math.abs(offset) > 3) {
    return { x: 0, y: 0, scale: 0, opacity: 0, zIndex: 0, blur: 0 }
  }

  const x = offset * spacing
  const depth = Math.abs(offset)

  return {
    x,
    y: 0,
    scale: depth === 0 ? 1.4 : depth === 1 ? 0.8 : Math.max(0.6, 0.88 - depth * 0.12),
    opacity: depth === 0 ? 1 : depth === 1 ? 0.75 : Math.max(0.4, 0.65 - depth * 0.12),
    blur: depth === 0 ? 0 : depth === 1 ? 6 : Math.min(10, 4 + depth * 2),
    zIndex: 40 - depth,
  }
}

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = (direction: "prev" | "next") => {
    setActiveIndex((current) => {
      if (direction === "prev") {
        return current === 0 ? certifications.length - 1 : current - 1
      }
      return current === certifications.length - 1 ? 0 : current + 1
    })
  }

  const arrowButtonClass =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors hover:border-white/45 hover:bg-white/5 hover:text-white sm:h-10 sm:w-10"

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
          <div className="mx-auto flex min-h-[calc(100dvh-7rem)] w-full max-w-4xl flex-col items-center justify-center text-center">
            <div className="mb-8 shrink-0 space-y-3 sm:mb-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60 sm:text-xs sm:tracking-[0.35em]">
                Credentials
              </p>
              <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
                Certifications
              </h2>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-white/65 md:text-base">
                Professional certifications from Cisco, Coursera, and LinkedIn Learning.
              </p>
            </div>

            {/* Center — horizontal certificate carousel */}
            <div className="flex w-full max-w-5xl items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => goTo("prev")}
                aria-label="Previous certification"
                className={arrowButtonClass}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="relative h-[min(400px,52vh)] w-full min-w-0 flex-1 overflow-visible sm:h-[min(460px,56vh)]">
                {certifications.map((cert, index) => {
                  const pos = getHorizontalCarouselPosition(index, activeIndex)
                  const isActive = index === activeIndex
                  const cardStyle = {
                    transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(${pos.scale})`,
                    opacity: pos.opacity,
                    zIndex: pos.zIndex,
                    transition:
                      "transform 700ms cubic-bezier(0.4,0,0.2,1), opacity 700ms cubic-bezier(0.4,0,0.2,1), filter 700ms cubic-bezier(0.4,0,0.2,1)",
                    filter: `blur(${pos.blur}px)`,
                  }
                  const cardClassName =
                    "absolute left-1/2 top-1/2 w-[min(320px,88vw)] origin-center sm:w-[380px] lg:w-[440px] xl:w-[480px]"

                  const cardContent = (
                    <div className="overflow-hidden rounded-2xl bg-[#0a1220]/80 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                      {cert.image ? (
                        <div className="relative aspect-[4/3] w-full">
                          <Image
                            src={`/certifications/${cert.image}`}
                            alt={cert.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 380px, 480px"
                          />
                        </div>
                      ) : (
                        <div className="flex aspect-[4/3] w-full items-center justify-center bg-[#0a1220]/60">
                          <Award className="h-16 w-16 text-white/20" />
                        </div>
                      )}
                    </div>
                  )

                  if (isActive) {
                    return (
                      <a
                        key={cert.filename}
                        href={`/certifications/${cert.filename}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View certificate: ${cert.title}`}
                        aria-current="true"
                        className={`${cardClassName} block cursor-pointer`}
                        style={cardStyle}
                      >
                        {cardContent}
                      </a>
                    )
                  }

                  return (
                    <button
                      key={cert.filename}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Select ${cert.title}`}
                      className={cardClassName}
                      style={cardStyle}
                    >
                      {cardContent}
                    </button>
                  )
                })}
              </div>

              <button
                type="button"
                onClick={() => goTo("next")}
                aria-label="Next certification"
                className={arrowButtonClass}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/45">
              {String(activeIndex + 1).padStart(2, "0")} / {String(certifications.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
