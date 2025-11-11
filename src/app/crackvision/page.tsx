"use client"

import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ArrowLeft, Brain, Code, Zap, Layers, Cpu, BarChart, Database, Server, BrainCircuit } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function CrackVisionPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Background effect with subtle grid and floating elements
  const renderBackground = () => {
    return (
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00000010 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gray-300/30"
              style={{
                width: Math.random() * 300 + 100 + 'px',
                height: Math.random() * 300 + 100 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                filter: 'blur(40px)',
                opacity: 0.2 + Math.random() * 0.3,
                animation: `float ${15 + Math.random() * 30}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px] z-[1]" />
      </div>
    )
  }
  
  // Set up animation
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
      <div className="relative min-h-screen overflow-hidden">
        {renderBackground()}

        {/* Content */}
        <div className={`relative z-10 container mx-auto px-4 py-20 page-fade-in ${isLoaded ? 'fade-in-active' : ''}`}>
          {/* Back Button */}
          <Link href="/#projects">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-gray-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-200">
                CrackVision
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
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
            <Card className="overflow-hidden border-0 shadow-lg border border-gray-700">
              <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="flex justify-center mb-4">
                    <Zap className="h-16 w-16 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-200 mb-2">CrackVision Platform</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    Advanced image analysis for concrete crack detection and classification
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Overview */}
            <Card className="border-0 shadow-md">
              <CardHeader className="border-b border-gray-700">
                <CardTitle className="flex items-center gap-2 text-gray-400">
                  <BrainCircuit className="h-5 w-5 text-gray-500" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed">
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
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">•</span>
                    <span>Multiclass classification for crack severity levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">•</span>
                    <span>Deep learning model using TensorFlow/Keras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">•</span>
                    <span>High accuracy in crack detection and classification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">•</span>
                    <span>Web interface for easy image upload and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">•</span>
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
            <CardContent className="pt-6">
              <p className="text-gray-400 mb-4">
                CrackVision is a deep learning-based solution designed to detect and classify cracks in concrete structures. The system can identify different severity levels of cracks, helping in early detection and maintenance planning for infrastructure.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600">
                  <Layers className="h-3.5 w-3.5 mr-1.5" />
                  Deep Learning
                </Badge>
                <Badge variant="outline" className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600">
                  <Cpu className="h-3.5 w-3.5 mr-1.5" />
                  Computer Vision
                </Badge>
                <Badge variant="outline" className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600">
                  <BarChart className="h-3.5 w-3.5 mr-1.5" />
                  TensorFlow
                </Badge>
                <Badge variant="outline" className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600">
                  <Code className="h-3.5 w-3.5 mr-1.5" />
                  Python
                </Badge>
                <Badge variant="outline" className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600">
                  <Brain className="h-3.5 w-3.5 mr-1.5" />
                  Keras
                </Badge>
                <Badge variant="outline" className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600">
                  <Server className="h-3.5 w-3.5 mr-1.5" />
                  Next.js
                </Badge>
                <Badge variant="outline" className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600">
                  <Database className="h-3.5 w-3.5 mr-1.5" />
                  TypeScript
                </Badge>
                <Badge variant="outline" className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600">
                  <Layers className="h-3.5 w-3.5 mr-1.5" />
                  Image Processing
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Project Status */}
          <Card className="border-0 shadow-md">
            <CardHeader className="border-b border-gray-700">
              <CardTitle className="flex items-center gap-2 text-gray-400">
                <Code className="h-5 w-5 text-gray-500" />
                Project Status
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-gray-700 text-white hover:bg-gray-600">
                  In Development
                </Badge>
              </div>
              <p className="text-gray-600 leading-relaxed">
                This project is currently under active development. The machine learning model is being 
                trained and fine-tuned to achieve higher accuracy in crack classification. The web interface 
                is being developed to provide an intuitive way for users to upload images and receive 
                instant crack severity assessments.
              </p>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-16 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in this project?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Check out the code on GitHub or get in touch to learn more about how CrackVision can help with your infrastructure inspection needs.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a href="https://github.com/DJSanch/CrackVision" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/#contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

