"use client"

import Layout from "@/components/layout"
import { PageHero } from "@/components/page-hero"
import { ProjectCard, projectCardClass } from "@/components/project-card"
import { ProjectPageShell } from "@/components/project-page-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { typography } from "@/lib/typography"
import { Github, ArrowLeft, Smartphone, Database, Brain, Code } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const outlineBtnClass = "border-white/20 bg-transparent text-white hover:bg-white/5"

export default function RiceProTechPage() {
  const [showFallback, setShowFallback] = useState(false)

  const videoSrc = "/projects/riceprotech-demo.mp4"

  const handleVideoError = () => {
    setShowFallback(true)
  }

  const isEmbed = videoSrc.includes("youtube.com/embed") || videoSrc.includes("vimeo.com/video")

  return (
    <Layout>
      <ProjectPageShell>
        <Link href="/#projects">
          <Button variant="ghost" className={`mb-8 ${typography.body} hover:bg-white/5 hover:text-white`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        <PageHero
          title="RiceProTech"
          description="A Rice Leaf Disease Classification Mobile App using React Native"
        >
          <Button variant="outline" className={outlineBtnClass} asChild>
            <a href="https://github.com/DJSanch/RiceProTech" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View Code
            </a>
          </Button>
        </PageHero>

        <div className="mb-16">
          <Card className={`overflow-hidden ${projectCardClass}`}>
            <div className="relative w-full">
              {!showFallback && isEmbed ? (
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={videoSrc}
                    title="RiceProTech Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : !showFallback ? (
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/projects/riceprotech-poster.jpg"
                    onError={handleVideoError}
                  >
                    <source src={videoSrc} type="video/mp4" />
                    <source src={videoSrc.replace(".mp4", ".webm")} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <Smartphone className="h-24 w-24 mx-auto mb-4 text-primary/50" />
                    <p className={`mb-2 ${typography.body}`}>Video Demo Coming Soon</p>
                    <p className={`${typography.bodySmall} max-w-md mx-auto`}>
                      Add your video to /public/projects/riceprotech-demo.mp4
                      <br />
                      Or use a YouTube/Vimeo embed URL
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ProjectCard title="Overview" icon={<Code className="h-5 w-5" />}>
            <p className={typography.body}>
              RiceProTech is a mobile application designed to help farmers identify and classify rice leaf diseases
              using advanced machine learning technology. Built with React Native, the app provides an intuitive
              interface for capturing and analyzing rice leaf images to detect common diseases that affect rice crops.
            </p>
          </ProjectCard>

          <ProjectCard title="Key Features" icon={<Smartphone className="h-5 w-5" />}>
            <ul className={`space-y-2 ${typography.body}`}>
              {[
                "Real-time disease classification using TensorFlow models",
                "Image capture and processing capabilities",
                "Offline functionality with local SQLite database",
                "User-friendly mobile interface",
                "Disease information and recommendations",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </ProjectCard>
        </div>

        <ProjectCard title="Technologies Used" className="mb-16">
          <div className="flex flex-wrap gap-2">
            {[
              { icon: Smartphone, label: "React Native" },
              { icon: Brain, label: "TensorFlow" },
              { icon: Database, label: "SQLite" },
              { icon: null, label: "Python" },
              { icon: null, label: "Google Colab" },
            ].map(({ icon: Icon, label }) => (
              <Badge key={label} variant="outline" className={`${typography.badge} py-1 px-3`}>
                {Icon ? <Icon className="h-3 w-3 mr-1 inline" /> : null}
                {label}
              </Badge>
            ))}
          </div>
        </ProjectCard>

        <ProjectCard title="Project Status">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="text-sm">
              In Development
            </Badge>
          </div>
          <p className={typography.body}>
            This project is currently under active development. The mobile app is being built to provide
            farmers with an accessible tool for early disease detection in rice crops, helping to improve
            crop yields and reduce losses.
          </p>
        </ProjectCard>
      </ProjectPageShell>
    </Layout>
  )
}
