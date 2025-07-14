import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Globe } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and payment processing.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      image: "/projects/ecommerce.jpg",
      github: "https://github.com/djsanch/ecommerce-platform",
      live: "https://ecommerce-demo.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      image: "/projects/task-app.jpg",
      github: "https://github.com/djsanch/task-manager",
      live: "https://task-manager-demo.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful data visualization.",
      technologies: ["React", "Chart.js", "OpenWeatherMap API", "CSS3"],
      image: "/projects/weather.jpg",
      github: "https://github.com/djsanch/weather-dashboard",
      live: "https://weather-dashboard-demo.com",
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
    {
      title: "Chat Application",
      description: "Real-time chat application with user authentication, message history, and file sharing capabilities.",
      technologies: ["React", "Firebase", "Socket.io", "Material-UI"],
      image: "/projects/chat.jpg",
      github: "https://github.com/djsanch/chat-app",
      live: "https://chat-app-demo.com",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-4xl font-bold text-muted-foreground/30">
                  {project.title.split(' ')[0]}
                </div>
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
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
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