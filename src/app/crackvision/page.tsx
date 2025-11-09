"use client"

import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ArrowLeft, Brain, Code, Image as ImageIcon, Zap } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function CrackVisionPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 50)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <Layout>
      {/* Background Section */}
      <div className="relative min-h-screen overflow-hidden crack-page-container">
        {/* Background with gradient */}
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          {/* Overlay pattern for texture */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
                                repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`
            }} />
          </div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px] z-[1]" />
        </div>

        {/* Crack Effects Layer */}
        <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
          {/* Crack 1 */}
          <div className="absolute crack-1" style={{ top: '15%', left: '10%', width: '200px', height: '3px' }} />
          {/* Crack 2 */}
          <div className="absolute crack-2" style={{ top: '25%', left: '30%', width: '150px', height: '2px' }} />
          {/* Crack 3 */}
          <div className="absolute crack-3" style={{ top: '40%', left: '5%', width: '180px', height: '2.5px' }} />
          {/* Crack 4 */}
          <div className="absolute crack-4" style={{ top: '55%', left: '50%', width: '220px', height: '3px' }} />
          {/* Crack 5 */}
          <div className="absolute crack-5" style={{ top: '70%', left: '20%', width: '160px', height: '2px' }} />
          {/* Crack 6 */}
          <div className="absolute crack-6" style={{ top: '80%', left: '60%', width: '190px', height: '2.5px' }} />
          {/* Vertical Crack 1 */}
          <div className="absolute crack-vertical-1" style={{ top: '10%', left: '25%', width: '3px', height: '200px' }} />
          {/* Vertical Crack 2 */}
          <div className="absolute crack-vertical-2" style={{ top: '30%', left: '70%', width: '2.5px', height: '180px' }} />
          {/* Vertical Crack 3 */}
          <div className="absolute crack-vertical-3" style={{ top: '50%', left: '45%', width: '2px', height: '150px' }} />
        </div>

        {/* Content */}
        <div className={`relative z-10 container mx-auto px-4 py-20 page-fade-in ${isLoaded ? 'fade-in-active earthquake-shake' : ''}`}>
          {/* Back Button */}
          <Link href="/#projects">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CrackVision</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              A Multiclass Image Classification Model for Concrete Crack Severity Detection
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" asChild>
                <a href="https://github.com/DJSanch/CrackVision" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="relative h-96 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="h-24 w-24 mx-auto mb-4 text-primary/50" />
                  <p className="text-muted-foreground">Project Image Coming Soon</p>
                </div>
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
                  CrackVision is an advanced machine learning project that utilizes deep learning techniques 
                  to classify the severity of concrete crack images. The model can accurately identify and 
                  categorize cracks into multiple severity levels, helping engineers and inspectors assess 
                  the condition of concrete structures more efficiently and accurately.
                </p>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Multiclass classification for crack severity levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Deep learning model using TensorFlow/Keras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>High accuracy in crack detection and classification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Web interface for easy image upload and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Real-time prediction with confidence scores</span>
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
                  <Brain className="h-3 w-3 mr-1 inline" />
                  TensorFlow
                </Badge>
                <Badge variant="outline" className="text-sm py-1 px-3">
                  Python
                </Badge>
                <Badge variant="outline" className="text-sm py-1 px-3">
                  Keras
                </Badge>
                <Badge variant="outline" className="text-sm py-1 px-3">
                  Next.js
                </Badge>
                <Badge variant="outline" className="text-sm py-1 px-3">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="text-sm py-1 px-3">
                  Machine Learning
                </Badge>
                <Badge variant="outline" className="text-sm py-1 px-3">
                  Image Processing
                </Badge>
                <Badge variant="outline" className="text-sm py-1 px-3">
                  Deep Learning
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
                This project is currently under active development. The machine learning model is being 
                trained and fine-tuned to achieve higher accuracy in crack classification. The web interface 
                is being developed to provide an intuitive way for users to upload images and receive 
                instant crack severity assessments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

