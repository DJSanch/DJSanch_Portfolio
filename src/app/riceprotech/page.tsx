import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ArrowLeft, Smartphone, Database, Brain, Code } from "lucide-react"
import Link from "next/link"

export default function RiceProTechPage() {
  return (
    <Layout>
      {/* Background Section */}
      <div className="relative min-h-screen">
        {/* Rice Field Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-green-800/30 to-green-700/40">
            {/* Fallback gradient background */}
          </div>
          {/* Background Image - Add your rice field image to /public/projects/rice-field.jpg */}
          <div className="absolute inset-0 opacity-30">
            {/* Using img tag for better error handling with background images */}
            <img
              src="/projects/rice-field.jpg"
              alt="Rice Field Background"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Hide image if it doesn't exist, fallback to gradient
                const target = e.target as HTMLImageElement
                target.style.display = "none"
              }}
            />
          </div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
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
              <a href="https://github.com/djsanch/weather-dashboard" target="_blank" rel="noopener noreferrer">
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
                <Smartphone className="h-24 w-24 mx-auto mb-4 text-primary/50" />
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

