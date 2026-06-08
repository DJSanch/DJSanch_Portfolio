"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ExternalLink, FileText, Eye } from "lucide-react"
import ImageCarousel from "@/components/image-carousel"
import { useProjectsEventsSlide } from "@/components/projects-events-slide"

const Events = () => {
  const slide = useProjectsEventsSlide("events")

  const events = [
    {
      title: "ICSTE 2025 - International Conference on Science, Technology and Engineering",
      role: "Attendee / Presenter",
      location: "Vietnam",
      date: "2025",
      description:
        "Participated in the International Conference on Science, Technology and Engineering, engaging with leading researchers and professionals in the field. Presented research findings and networked with experts from around the world.",
      highlights: [
        "Presented research paper",
        "Networking with international researchers",
        "Latest trends in technology and engineering",
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
      featured: true,
    },
  ]

  const outlineButtonClass =
    "border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"

  return (
    <>
      <div id="events" className="sr-only" aria-hidden />
      <div
        id="events-panel"
        className={`absolute inset-0 overflow-x-clip overflow-y-auto bg-gradient-to-br from-[#122a52] via-[#0f2847] to-[#0d1e38] ${slide.className}`}
        style={slide.style}
      >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d1e38]/40 via-transparent to-[#0a1220]/80"
          />

          <div className="container relative z-10 mx-auto px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
            <div className="mb-12 text-center sm:mb-16 sm:text-left lg:pl-8 xl:pl-12">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/60 sm:text-xs sm:tracking-[0.35em]">
                Community
              </p>
              <h2 className="mb-4 text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
                Events &
                <br />
                Conferences
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/65 sm:mx-0 md:text-base">
                Professional conferences and events I&apos;ve attended to stay at the forefront of
                technology and connect with the global tech community.
              </p>
            </div>

            <div className="grid gap-8 lg:pl-8 xl:pl-12">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 bg-transparent text-white shadow-none"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="relative h-64 bg-[#0a1220]/60 md:h-auto md:min-h-[320px]">
                      <ImageCarousel images={event.images} alt={event.title} interval={3000} />
                      {event.featured && (
                        <Badge className="absolute left-4 top-4 z-10 border-0 bg-white/10 text-white">
                          Featured Event
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-col justify-between p-6">
                      <div className="space-y-4">
                        <CardHeader className="p-0">
                          <CardTitle className="text-xl text-white sm:text-2xl">{event.title}</CardTitle>
                        </CardHeader>

                        <div className="flex flex-wrap gap-3 text-sm text-white/60">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{event.role}</span>
                          </div>
                        </div>

                        <CardContent className="p-0">
                          <p className="mb-4 text-sm leading-relaxed text-white/70">{event.description}</p>

                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-white/90">Key Highlights:</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.highlights.map((highlight, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="border-0 bg-white/[0.06] text-xs text-white/75"
                                >
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </div>

                      <div className="mt-6 flex flex-col gap-3">
                        {event.researchPaper && (
                          <Button variant="outline" className={`w-full ${outlineButtonClass}`} asChild>
                            <a href={event.researchPaper} download="ICSTE_2025_Research_Paper.pdf">
                              <FileText className="mr-2 h-4 w-4" />
                              Download Research Paper
                            </a>
                          </Button>
                        )}
                        <div className="flex flex-col gap-3 sm:flex-row">
                          {event.presentationLink && (
                            <Button
                              variant="outline"
                              className={`w-full flex-1 sm:w-auto ${outlineButtonClass}`}
                              asChild
                            >
                              <a href={event.presentationLink} target="_blank" rel="noopener noreferrer">
                                <Eye className="mr-2 h-4 w-4" />
                                View Presentation
                              </a>
                            </Button>
                          )}
                          {event.website && (
                            <Button
                              variant="outline"
                              className={`w-full flex-1 sm:w-auto ${outlineButtonClass}`}
                              asChild
                            >
                              <a href={event.website} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Visit Conference Website
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
      </div>
    </>
  )
}

export default Events
