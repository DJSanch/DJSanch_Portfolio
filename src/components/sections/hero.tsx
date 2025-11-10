import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import GradientOrbs from "@/components/gradient-orbs"

const Hero = () => {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "SQL", "AWS", "Docker"
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/djsanch", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/daniel-sanchez-8110b2252", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@djsanch.com", label: "Email" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <GradientOrbs />
        <AnimatedBackground />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                Welcome to my portfolio
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                Hi, I&apos;m{" "}
                <span className="text-white drop-shadow-lg">Daniel Sanchez</span>
              </h1>
              <p className="text-xl md:text-2xl text-white drop-shadow-md">
                Full Stack Developer & Software Engineer
              </p>
            </div>

            <p className="text-lg text-white drop-shadow-md leading-relaxed">
              I&apos;m passionate about creating innovative web applications and solving complex problems. 
              With expertise in modern web technologies, I build scalable and user-friendly solutions 
              that make a difference.
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-white border-white/50">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex items-center gap-2" asChild>
                  <a href="/Daniel_Sanchez_Resume.pdf" download="Daniel_Sanchez_Resume.pdf">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <Avatar className="w-32 h-32 mx-auto">
                    <AvatarImage src="/avatar.jpg" alt="DJSanch" />
                    <AvatarFallback className="text-2xl">DS</AvatarFallback>
                  </Avatar>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">Daniel Sanchez</h3>
                    <p className="text-muted-foreground">Full Stack Developer</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Experience</p>
                      <p className="text-muted-foreground">3+ Years</p>
                    </div>
                    <div>
                      <p className="font-semibold">Projects</p>
                      <p className="text-muted-foreground">20+ Completed</p>
                    </div>
                    <div>
                      <p className="font-semibold">Technologies</p>
                      <p className="text-muted-foreground">15+ Skills</p>
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Remote</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 