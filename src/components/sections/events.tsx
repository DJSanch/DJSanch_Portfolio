"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Calendar, ExternalLink, Eye, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { useProjectsEventsSlide } from "@/components/projects-events-slide"

const events = [
  {
    title: "ICSTE 2025",
    subtitle: "International Conference on Science, Technology and Engineering",
    role: "Attendee / Presenter",
    location: "Vietnam",
    date: "2025",
    description:
      "Participated in an international conference engaging with leading researchers and professionals. Presented research findings and connected with experts from around the world.",
    highlights: [
      "Presented research paper",
      "International networking",
      "Latest trends in technology",
      "Cross-cultural collaboration",
    ],
    images: [
      "/events/icste-2025-1.jpg",
      "/events/icste-2025-2.jpg",
      "/events/icste-2025-3.jpg",
      "/events/icste-2025-4.jpg",
    ],
    website: "https://icste.org/",
    researchPaper: "/events/ICSTE_2025_Research_Paper.pdf",
    presentationLink:
      "https://www.canva.com/design/DAG0Q6Sp4yM/BnFsZtyB-rVU0MIhsmPcBA/edit?utm_content=DAG0Q6Sp4yM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/djsanch", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/daniel-sanchez-8110b2252", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@djsanch.com", label: "Email" },
]

const Events = () => {
  const slide = useProjectsEventsSlide("events")
  const [activeImage, setActiveImage] = useState(0)
  const event = events[0]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % event.images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [event.images.length])

  return (
    <>
      <div id="events" className="sr-only" aria-hidden />
      <div
        id="events-panel"
        className={`absolute inset-0 overflow-hidden bg-[#0d1e38] ${slide.className}`}
        style={slide.style}
      >
        {/* Left content panel — solid bg so images never bleed through */}
        <div className="relative z-20 flex h-full w-full flex-col bg-[#0d1e38] lg:w-[52%] xl:w-[50%]">
          <div className="container relative mx-auto flex h-full flex-col px-4 pb-36 pt-24 sm:px-6 sm:pb-40 sm:pt-28 lg:pb-12 lg:px-10 xl:px-14">
            {/* Social sidebar */}
            <div className="absolute left-3 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-5 sm:left-4 md:flex">
              <div className="h-16 w-px bg-white/20" />
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="text-white/50 transition-colors hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <div className="h-16 w-px bg-white/20" />
            </div>

            {/* Hero copy */}
            <div className="flex flex-1 flex-col justify-center pl-0 md:pl-10 lg:pl-14 xl:pl-16">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-white/60 sm:text-xs sm:tracking-[0.35em]">
                Community
              </p>

              <h2 className="max-w-xl text-3xl font-bold uppercase leading-[1.05] text-white sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl">
                Events &
                <br />
                Conferences
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65 md:mt-6 md:text-base">
                {event.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-xs text-white/55 sm:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {event.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {event.location}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
                {event.researchPaper && (
                  <a
                    href={event.researchPaper}
                    download="ICSTE_2025_Research_Paper.pdf"
                    className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:border-white/40 hover:bg-white/10 sm:text-sm"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                )}

                {event.presentationLink && (
                  <a
                    href={event.presentationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-white/55 transition-colors hover:text-white sm:text-sm"
                  >
                    <Eye className="h-4 w-4" />
                    View Presentation
                  </a>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {event.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-wider text-white/60 sm:text-xs"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Image pagination */}
            <div className="mt-auto flex items-center gap-2 pt-8">
              {event.images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show event photo ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeImage ? "w-8 bg-white" : "w-2.5 bg-white/35 hover:bg-white/55"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right chevron image panel — anchored to the right edge */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[50%] lg:block xl:w-[52%]">
          <div className="absolute inset-0 [clip-path:polygon(34%_0%,100%_0%,100%_100%,34%_100%,16%_50%)]">
            <div className="relative h-full w-full overflow-hidden">
              {event.images.map((image, index) => (
                <div
                  key={image}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === activeImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${event.title} - photo ${index + 1}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 50vw, 52vw"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d1e38]/50 via-[#0d1e38]/10 to-transparent" />
            </div>
          </div>

          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              points="34,0 100,0 100,100 34,100 16,50"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Mobile image preview — top right chevron */}
        <div className="pointer-events-none absolute right-0 top-20 z-10 h-36 w-[44%] overflow-hidden [clip-path:polygon(32%_0%,100%_0%,100%_100%,32%_100%,14%_50%)] sm:top-24 sm:h-44 lg:hidden">
          <div className="relative h-full w-full">
            {event.images.map((image, index) => (
              <div
                key={`mobile-${image}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === activeImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image}
                  alt={`${event.title} - photo ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="42vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Event detail strip — mobile */}
        <div className="pointer-events-auto absolute bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-[#0a1220]/90 p-4 backdrop-blur-sm lg:hidden">
          <p className="text-sm font-semibold text-white">{event.title}</p>
          <p className="mt-1 text-xs text-white/55">{event.subtitle}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {event.website && (
              <a
                href={event.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/75"
              >
                <ExternalLink className="h-3 w-3" />
                Website
              </a>
            )}
            {event.researchPaper && (
              <a
                href={event.researchPaper}
                download="ICSTE_2025_Research_Paper.pdf"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/75"
              >
                <FileText className="h-3 w-3" />
                Paper
              </a>
            )}
          </div>
        </div>

        {/* Desktop event meta overlay */}
        <div className="pointer-events-auto absolute bottom-10 right-8 z-30 hidden max-w-xs text-right lg:block xl:bottom-14 xl:right-14">
          <p className="text-lg font-semibold text-white">{event.title}</p>
          <p className="mt-1 text-sm text-white/55">{event.subtitle}</p>
          {event.website && (
            <a
              href={event.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-white"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Visit Conference Website
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default Events
