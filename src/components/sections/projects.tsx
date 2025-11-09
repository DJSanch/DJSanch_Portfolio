"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Globe, Eye } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation()
  const projects = [
    {
      title: "Inventory Management System",
      description: "A robust inventory management system for tracking stock, sales, and suppliers. Features include real-time inventory updates, reporting, and user roles.",
      technologies: ["React", "Next.js", "Python", "SQLite", "Tailwind CSS"],
      image: "/projects/Inventory.png",
      github: "https://github.com/DJSanch/Inventory_Management",
      live: "https://inventory-management-nu-gilt.vercel.app/",
      featured: true
    },
    {
      title: "Chat Application",
      description: "A real-time chat application with user authentication and message history.",
      technologies: ["React", "Firebase", "Socket.io", "Node.js", "Tailwind CSS"],
      image: "/projects/chat-application.png",
      github: "https://github.com/DJSanch/Chat_Application",
      live: "https://chat-application-k89h.vercel.app/",
      featured: true
    },
    {
      title: "JS Aromatoc",
      description: "A modern e-commerce website for JS Aromatoc, featuring product listings, shopping cart functionality, and secure checkout process.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
      image: "/projects/js-aromatoc.png",
      github: "https://github.com/DJSanch/JS_Aromatoc",
      live: "https://jsaromatoc.net.ph/",
      featured: true
    },
    {
      title: "RiceProTech",
      description: "A Rice Leaf Disease Classification Mobile App using React Native.",
      technologies: ["React Native", "Python", "SQLite", "Google Colab", "TensorFlow"],
      image: "/projects/weather.jpg",
      github: "https://github.com/djsanch/weather-dashboard",
      viewProject: "/riceprotech",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Shadcn UI, featuring smooth animations and optimal performance.",
      technologies: ["Next.js", "TypeScript", "Shadcn UI", "Tailwind CSS"],
      image: "/projects/portfolio.jpg",
      github: "https://github.com/djsanch/portfolio",
      live: "https://djsanch-portfolio.com",
      featured: false
    },
    {
      title: "Blog Platform",
      description: "A content management system for blogs with markdown support, SEO optimization, and admin dashboard.",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Vercel"],
      image: "/projects/blog.jpg",
      github: "https://github.com/djsanch/blog-platform",
      live: "https://blog-platform-demo.com",
      featured: false
    },
  ]

  return (
    <section id="projects" className="py-20" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover:shadow-lg transition-all duration-300 overflow-hidden scroll-animate-scale ${isVisible ? 'animate-in' : ''}`} style={{animationDelay: `${(index % 3) * 100 + 200}ms`}}>
              <div className="relative h-48 w-full">
                {project.image ? (
                  <img
                    src={project.image.startsWith('/') ? project.image : `/projects/${project.image}`}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-4xl font-bold text-muted-foreground/30">
                      {project.title.split(' ')[0]}
                    </div>
                  </div>
                )}
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.viewProject ? (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link href={project.viewProject}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Project
                      </Link>
                    </Button>
                  ) : project.live ? (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/djsanch" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects 