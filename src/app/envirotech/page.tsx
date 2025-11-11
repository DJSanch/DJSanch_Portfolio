"use client"

import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ArrowLeft, Leaf, Cpu, BarChart3 } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function EnvirotechPage() {
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
      {/* Background Section with Environmental Theme */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Environmental Background Effects */}
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-teal-50/30 via-blue-50/20 to-emerald-50/20">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e10 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          {/* Animated floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-teal-200/30"
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
              <Leaf className="h-8 w-8 text-teal-500 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Envirotech
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Environmental Monitoring and Analysis Platform for Sustainable Solutions
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" asChild>
                <a href="https://github.com/DJSanch/Envirotech" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>

          {/* Project Image/Video */}
          <div className="mb-16">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-96 bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="flex justify-center mb-4">
                    <Leaf className="h-16 w-16 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-teal-800 mb-2">Envirotech Platform</h3>
                  <p className="text-teal-600 max-w-md mx-auto">
                    Real-time environmental monitoring and data visualization platform
                  </p>
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
                  <Leaf className="h-5 w-5 text-teal-500" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Envirotech is a comprehensive environmental monitoring platform that collects, analyzes, and visualizes 
                  environmental data to provide actionable insights for sustainable decision-making. The platform integrates 
                  with various IoT sensors to monitor air quality, water quality, and other environmental parameters in real-time.
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-teal-500" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="h-2 w-2 rounded-full bg-teal-500 mt-2" />
                  </div>
                  <span>Real-time environmental data collection from IoT sensors</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="h-2 w-2 rounded-full bg-teal-500 mt-2" />
                  </div>
                  <span>Interactive dashboards with data visualization</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="h-2 w-2 rounded-full bg-teal-500 mt-2" />
                  </div>
                  <span>Predictive analytics for environmental trends</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="h-2 w-2 rounded-full bg-teal-500 mt-2" />
                  </div>
                  <span>Customizable alert system for threshold violations</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Cpu className="h-5 w-5" />
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'React', category: 'Frontend' },
                { name: 'Node.js', category: 'Backend' },
                { name: 'MongoDB', category: 'Database' },
                { name: 'Express', category: 'Backend' },
                { name: 'MQTT', category: 'IoT Protocol' },
                { name: 'Docker', category: 'Deployment' },
                { name: 'AWS IoT Core', category: 'Cloud' },
                { name: 'Chart.js', category: 'Visualization' },
              ].map((tech, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="font-medium">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-teal-500" />
                  Challenges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Data Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Combining data from multiple sensor types and manufacturers required developing a flexible data ingestion pipeline.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Real-time Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensuring low-latency processing of sensor data while maintaining system reliability and accuracy.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-teal-500" />
                  Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Unified API</h4>
                  <p className="text-sm text-muted-foreground">
                    Created a standardized API layer to normalize data from different sensor types into a consistent format.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Edge Computing</h4>
                  <p className="text-sm text-muted-foreground">
                    Implemented edge computing capabilities to process data closer to the source, reducing latency and bandwidth usage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Interested in learning more?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Check out the code on GitHub or reach out to discuss how Envirotech can be customized for your environmental monitoring needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <a href="https://github.com/DJSanch/Envirotech" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/#contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles for this page */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(5px, -5px) rotate(1deg);
          }
          50% {
            transform: translate(0, -10px) rotate(0deg);
          }
          75% {
            transform: translate(-5px, -5px) rotate(-1deg);
          }
        }
        
        .page-fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </Layout>
  )
}
