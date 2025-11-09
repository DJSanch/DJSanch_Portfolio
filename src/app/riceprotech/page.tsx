"use client"

import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ArrowLeft, Smartphone, Database, Brain, Code } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function RiceProTechPage() {
  const [showFallback, setShowFallback] = useState(false)

  // Video configuration - Update this with your video path
  // Option 1: Local video file (add your video to /public/projects/riceprotech-demo.mp4)
  const videoSrc = "/projects/riceprotech-demo.mp4"
  
  // Option 2: YouTube embed (replace videoSrc with YouTube embed URL)
  // const videoSrc = "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  
  // Option 3: Vimeo embed (replace videoSrc with Vimeo embed URL)
  // const videoSrc = "https://player.vimeo.com/video/YOUR_VIDEO_ID"

  const handleVideoError = () => {
    setShowFallback(true)
  }

  // Check if it's an embed URL (YouTube or Vimeo)
  const isEmbed = videoSrc.includes('youtube.com/embed') || videoSrc.includes('vimeo.com/video')

  return (
    <Layout>
      {/* Background Section with Rice Field Effects */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Rice Field Background Effects */}
        <div className="fixed inset-0 z-0 rice-field-bg">
          {/* Sky gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-200/20 via-blue-100/10 to-transparent" />
          
          {/* Rice field layers with animated waves */}
          <div className="absolute bottom-0 left-0 right-0 h-3/4">
            {/* Water/Field base - natural rice field colors */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/40 via-green-200/50 to-green-300/60" />
            
            {/* Animated rice plant waves */}
            <div className="absolute inset-0 rice-wave-1" />
            <div className="absolute inset-0 rice-wave-2" />
            <div className="absolute inset-0 rice-wave-3" />
            
            {/* Rice field texture pattern */}
            <div className="absolute inset-0 rice-texture" />
          </div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-background/55 backdrop-blur-[0.5px] z-[1]" />
          
          {/* Swaying rice leaves - above overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-3/4 rice-leaves-container z-[2]">
            {/* Row 1 - Front layer */}
            <div className="rice-leaf" style={{ left: '2%', animationDelay: '0s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '6%', animationDelay: '0.3s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '10%', animationDelay: '0.6s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '14%', animationDelay: '0.9s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '18%', animationDelay: '1.2s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '22%', animationDelay: '1.5s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '26%', animationDelay: '1.8s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '30%', animationDelay: '0.2s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '34%', animationDelay: '0.5s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '38%', animationDelay: '0.8s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '42%', animationDelay: '1.1s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '46%', animationDelay: '1.4s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '50%', animationDelay: '1.7s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '54%', animationDelay: '0.1s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '58%', animationDelay: '0.4s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '62%', animationDelay: '0.7s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '66%', animationDelay: '1s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '70%', animationDelay: '1.3s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '74%', animationDelay: '1.6s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '78%', animationDelay: '1.9s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '82%', animationDelay: '0.2s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '86%', animationDelay: '0.5s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '90%', animationDelay: '0.8s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '94%', animationDelay: '1.1s', bottom: '0%' }} />
            <div className="rice-leaf" style={{ left: '98%', animationDelay: '1.4s', bottom: '0%' }} />
            
            {/* Row 2 - Middle layer */}
            <div className="rice-leaf" style={{ left: '4%', animationDelay: '0.7s', bottom: '8%' }} />
            <div className="rice-leaf" style={{ left: '8%', animationDelay: '1s', bottom: '10%' }} />
            <div className="rice-leaf" style={{ left: '12%', animationDelay: '1.3s', bottom: '9%' }} />
            <div className="rice-leaf" style={{ left: '16%', animationDelay: '1.6s', bottom: '11%' }} />
            <div className="rice-leaf" style={{ left: '20%', animationDelay: '1.9s', bottom: '8%' }} />
            <div className="rice-leaf" style={{ left: '24%', animationDelay: '0.2s', bottom: '10%' }} />
            <div className="rice-leaf" style={{ left: '28%', animationDelay: '0.5s', bottom: '9%' }} />
            <div className="rice-leaf" style={{ left: '32%', animationDelay: '0.8s', bottom: '12%' }} />
            <div className="rice-leaf" style={{ left: '36%', animationDelay: '1.1s', bottom: '8%' }} />
            <div className="rice-leaf" style={{ left: '40%', animationDelay: '1.4s', bottom: '10%' }} />
            <div className="rice-leaf" style={{ left: '44%', animationDelay: '1.7s', bottom: '9%' }} />
            <div className="rice-leaf" style={{ left: '48%', animationDelay: '0.1s', bottom: '11%' }} />
            <div className="rice-leaf" style={{ left: '52%', animationDelay: '0.4s', bottom: '8%' }} />
            <div className="rice-leaf" style={{ left: '56%', animationDelay: '0.7s', bottom: '10%' }} />
            <div className="rice-leaf" style={{ left: '60%', animationDelay: '1s', bottom: '9%' }} />
            <div className="rice-leaf" style={{ left: '64%', animationDelay: '1.3s', bottom: '12%' }} />
            <div className="rice-leaf" style={{ left: '68%', animationDelay: '1.6s', bottom: '8%' }} />
            <div className="rice-leaf" style={{ left: '72%', animationDelay: '1.9s', bottom: '10%' }} />
            <div className="rice-leaf" style={{ left: '76%', animationDelay: '0.2s', bottom: '9%' }} />
            <div className="rice-leaf" style={{ left: '80%', animationDelay: '0.5s', bottom: '11%' }} />
            <div className="rice-leaf" style={{ left: '84%', animationDelay: '0.8s', bottom: '8%' }} />
            <div className="rice-leaf" style={{ left: '88%', animationDelay: '1.1s', bottom: '10%' }} />
            <div className="rice-leaf" style={{ left: '92%', animationDelay: '1.4s', bottom: '9%' }} />
            <div className="rice-leaf" style={{ left: '96%', animationDelay: '1.7s', bottom: '12%' }} />
            
            {/* Row 3 - Back layer */}
            <div className="rice-leaf" style={{ left: '3%', animationDelay: '1.2s', bottom: '15%' }} />
            <div className="rice-leaf" style={{ left: '7%', animationDelay: '1.5s', bottom: '17%' }} />
            <div className="rice-leaf" style={{ left: '11%', animationDelay: '1.8s', bottom: '16%' }} />
            <div className="rice-leaf" style={{ left: '15%', animationDelay: '0.1s', bottom: '18%' }} />
            <div className="rice-leaf" style={{ left: '19%', animationDelay: '0.4s', bottom: '15%' }} />
            <div className="rice-leaf" style={{ left: '23%', animationDelay: '0.7s', bottom: '17%' }} />
            <div className="rice-leaf" style={{ left: '27%', animationDelay: '1s', bottom: '16%' }} />
            <div className="rice-leaf" style={{ left: '31%', animationDelay: '1.3s', bottom: '19%' }} />
            <div className="rice-leaf" style={{ left: '35%', animationDelay: '1.6s', bottom: '15%' }} />
            <div className="rice-leaf" style={{ left: '39%', animationDelay: '1.9s', bottom: '17%' }} />
            <div className="rice-leaf" style={{ left: '43%', animationDelay: '0.2s', bottom: '16%' }} />
            <div className="rice-leaf" style={{ left: '47%', animationDelay: '0.5s', bottom: '18%' }} />
            <div className="rice-leaf" style={{ left: '51%', animationDelay: '0.8s', bottom: '15%' }} />
            <div className="rice-leaf" style={{ left: '55%', animationDelay: '1.1s', bottom: '17%' }} />
            <div className="rice-leaf" style={{ left: '59%', animationDelay: '1.4s', bottom: '16%' }} />
            <div className="rice-leaf" style={{ left: '63%', animationDelay: '1.7s', bottom: '19%' }} />
            <div className="rice-leaf" style={{ left: '67%', animationDelay: '0.1s', bottom: '15%' }} />
            <div className="rice-leaf" style={{ left: '71%', animationDelay: '0.4s', bottom: '17%' }} />
            <div className="rice-leaf" style={{ left: '75%', animationDelay: '0.7s', bottom: '16%' }} />
            <div className="rice-leaf" style={{ left: '79%', animationDelay: '1s', bottom: '18%' }} />
            <div className="rice-leaf" style={{ left: '83%', animationDelay: '1.3s', bottom: '15%' }} />
            <div className="rice-leaf" style={{ left: '87%', animationDelay: '1.6s', bottom: '17%' }} />
            <div className="rice-leaf" style={{ left: '91%', animationDelay: '1.9s', bottom: '16%' }} />
            <div className="rice-leaf" style={{ left: '95%', animationDelay: '0.2s', bottom: '18%' }} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Back Button */}
        <Link href="/#projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RiceProTech</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            A Rice Leaf Disease Classification Mobile App using React Native
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <a href="https://github.com/DJSanch/RiceProTech" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
          </div>
        </div>

        {/* Project Video Demo */}
        <div className="mb-16">
          <Card className="overflow-hidden">
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
                    <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <Smartphone className="h-24 w-24 mx-auto mb-4 text-primary/50" />
                    <p className="text-muted-foreground mb-2">Video Demo Coming Soon</p>
                    <p className="text-sm text-muted-foreground/70 max-w-md mx-auto">
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

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                RiceProTech is a mobile application designed to help farmers identify and classify rice leaf diseases 
                using advanced machine learning technology. Built with React Native, the app provides an intuitive 
                interface for capturing and analyzing rice leaf images to detect common diseases that affect rice crops.
              </p>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Real-time disease classification using TensorFlow models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Image capture and processing capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Offline functionality with local SQLite database</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>User-friendly mobile interface</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Disease information and recommendations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Technologies */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-sm py-1 px-3">
                <Smartphone className="h-3 w-3 mr-1 inline" />
                React Native
              </Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">
                <Brain className="h-3 w-3 mr-1 inline" />
                TensorFlow
              </Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">
                <Database className="h-3 w-3 mr-1 inline" />
                SQLite
              </Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">
                Python
              </Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">
                Google Colab
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Project Status */}
        <Card>
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="text-sm">
                In Development
              </Badge>
            </div>
            <p className="text-muted-foreground">
              This project is currently under active development. The mobile app is being built to provide 
              farmers with an accessible tool for early disease detection in rice crops, helping to improve 
              crop yields and reduce losses.
            </p>
          </CardContent>
        </Card>
        </div>
      </div>
    </Layout>
  )
}

