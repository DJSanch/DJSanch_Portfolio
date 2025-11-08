"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

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
      image: "/events/icste-2025.jpg",
      website: "https://icste.org/",
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
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {event.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary">
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

                  {event.website && (
                    <div className="mt-6">
                      <Button variant="outline" className="w-full md:w-auto" asChild>
                        <a href={event.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Conference Website
                        </a>
                      </Button>
                    </div>
                  )}
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
