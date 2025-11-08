"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ExternalLink, FileText, Eye } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import ImageCarousel from "@/components/image-carousel"

const Events = () => {
  const { ref, isVisible } = useScrollAnimation()
  
  const events = [
    {
      title: "ICSTE 2025 - International Conference on Science, Technology and Engineering",
      role: "Attendee / Presenter",
      location: "Vietnam",
      date: "2025",
      description: "Participated in the International Conference on Science, Technology and Engineering, engaging with leading researchers and professionals in the field. Presented research findings and networked with experts from around the world.",
      highlights: [
        "Presented research paper",
        "Networking with international researchers",
        "Latest trends in technology and engineering",
        "Cross-cultural collaboration"
      ],
      images: [
        "/events/icste-2025-1.jpg",
        "/events/icste-2025-2.jpg",
        "/events/icste-2025-3.jpg",
        "/events/icste-2025-4.jpg"
      ],
      website: "https://icste.org/",
      researchPaper: "/events/ICSTE_2025_Research_Paper.pdf",
      presentationLink: "https://www.canva.com/design/DAG0Q6Sp4yM/BnFsZtyB-rVU0MIhsmPcBA/edit?utm_content=DAG0Q6Sp4yM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      featured: true
    }
  ]

  return (
    <section id="events" className="py-20 bg-background" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Events & Conferences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional conferences and events I&apos;ve attended to stay at the forefront of technology and connect with the global tech community.
          </p>
        </div>

        <div className="grid gap-8">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden scroll-animate ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto bg-muted">
                  <ImageCarousel 
                    images={event.images}
                    alt={event.title}
                    interval={3000}
                  />
                  {event.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary z-10">
                      Featured Event
                    </Badge>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                    </CardHeader>

                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
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
                      <p className="text-muted-foreground mb-4">
                        {event.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Key Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    {event.researchPaper && (
                      <Button variant="default" className="w-full" asChild>
                        <a href={event.researchPaper} download="ICSTE_2025_Research_Paper.pdf">
                          <FileText className="h-4 w-4 mr-2" />
                          Download Research Paper
                        </a>
                      </Button>
                    )}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {event.presentationLink && (
                        <Button variant="outline" className="w-full sm:w-auto flex-1" asChild>
                          <a href={event.presentationLink} target="_blank" rel="noopener noreferrer">
                            <Eye className="h-4 w-4 mr-2" />
                            View Presentation
                          </a>
                        </Button>
                      )}
                      {event.website && (
                        <Button variant="outline" className="w-full sm:w-auto flex-1" asChild>
                          <a href={event.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
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
    </section>
  )
}

export default Events
