"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { GraduationCap, Briefcase, Code, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const About = () => {
  const { ref, isVisible } = useScrollAnimation()
  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      year: "2020-2024",
      description: "Specialized in Software Engineering and Web Development"
    }
  ]

  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and AWS"
    },
    {
      role: "Frontend Developer",
      company: "StartupXYZ",
      period: "2021 - 2022",
      description: "Built responsive user interfaces and implemented modern design systems"
    },
    {
      role: "Junior Developer",
      company: "Digital Solutions",
      period: "2020 - 2021",
      description: "Developed and maintained web applications using JavaScript and Python"
    }
  ]

  const interests = [
    "Open Source Contribution",
    "Machine Learning",
    "Cloud Architecture",
    "UI/UX Design",
    "Technical Writing",
    "Mentoring"
  ]

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a passionate developer with a strong foundation in both frontend and backend technologies. 
            I love creating solutions that are not only functional but also provide an excellent user experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Story */}
          <div className={`space-y-6 scroll-animate-left ${isVisible ? 'animate-in delay-200' : ''}`}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  My journey in software development began with a curiosity about how websites work. 
                  What started as simple HTML pages has evolved into complex full-stack applications 
                  that serve thousands of users.
                </p>
                <p className="text-muted-foreground">
                  I believe in writing clean, maintainable code and staying up-to-date with the latest 
                  technologies. When I&apos;m not coding, you can find me contributing to open-source projects, 
                  reading tech blogs, or exploring new frameworks.
                </p>
                <p className="text-muted-foreground">
                  I&apos;m always excited to take on new challenges and work on projects that push the boundaries 
                  of what&apos;s possible on the web.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Interests & Hobbies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge key={interest} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Experience & Education */}
          <div className={`space-y-8 scroll-animate-right ${isVisible ? 'animate-in delay-300' : ''}`}>
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.school}</p>
                      </div>
                      <Badge variant="outline">{edu.year}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                    {index < education.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                {experience.map((exp, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{exp.role}</h4>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                    {index < experience.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 