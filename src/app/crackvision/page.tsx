"use client"

import Layout from "@/components/layout"
import { PageHero } from "@/components/page-hero"
import { ProjectCard, projectCardClass } from "@/components/project-card"
import { ProjectPageShell } from "@/components/project-page-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { typography } from "@/lib/typography"
import { Github, ArrowLeft, Brain, Code, Zap, Layers, Cpu, BarChart, Database, Server, BrainCircuit } from "lucide-react"
import Link from "next/link"

const outlineBtnClass = "border-white/20 bg-transparent text-white hover:bg-white/5"

export default function CrackVisionPage() {
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
          title="CrackVision"
          description="A Multiclass Image Classification Model for Concrete Crack Severity Detection"
          icon={<Zap className={`h-8 w-8 ${typography.accentIcon}`} />}
        >
          <Button variant="outline" className={outlineBtnClass} asChild>
            <a href="https://github.com/DJSanch/CrackVision" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View Code
            </a>
          </Button>
        </PageHero>

        <div className="mb-16">
          <Card className={`overflow-hidden ${projectCardClass}`}>
            <div className="relative h-96 bg-gradient-to-br from-[#122a52] to-[#0a1220] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="flex justify-center mb-4">
                  <Zap className={`h-16 w-16 ${typography.accentIcon}`} />
                </div>
                <h3 className={`mb-2 ${typography.subsectionTitle}`}>CrackVision Platform</h3>
                <p className={`max-w-md mx-auto ${typography.body}`}>
                  Advanced image analysis for concrete crack detection and classification
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ProjectCard
            title="Project Overview"
            icon={<BrainCircuit className={`h-5 w-5 ${typography.accentIcon}`} />}
            headerBorder
          >
            <p className={typography.body}>
              CrackVision is an advanced machine learning project that utilizes deep learning techniques
              to classify the severity of concrete crack images. The model can accurately identify and
              categorize cracks into multiple severity levels, helping engineers and inspectors assess
              the condition of concrete structures more efficiently and accurately.
            </p>
          </ProjectCard>

          <ProjectCard title="Key Features" icon={<Zap className={`h-5 w-5 ${typography.accentIcon}`} />}>
            <ul className={`space-y-2 ${typography.body}`}>
              {[
                "Multiclass classification for crack severity levels",
                "Deep learning model using TensorFlow/Keras",
                "High accuracy in crack detection and classification",
                "Web interface for easy image upload and analysis",
                "Real-time prediction with confidence scores",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className={typography.accentIcon}>•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </ProjectCard>
        </div>

        <ProjectCard title="Technologies Used" className="mb-16">
          <p className={`mb-4 ${typography.body}`}>
            CrackVision is a deep learning-based solution designed to detect and classify cracks in concrete structures.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              { icon: Layers, label: "Deep Learning" },
              { icon: Cpu, label: "Computer Vision" },
              { icon: BarChart, label: "TensorFlow" },
              { icon: Code, label: "Python" },
              { icon: Brain, label: "Keras" },
              { icon: Server, label: "Next.js" },
              { icon: Database, label: "TypeScript" },
              { icon: Layers, label: "Image Processing" },
            ].map(({ icon: Icon, label }) => (
              <Badge key={label} variant="outline" className={typography.badge}>
                <Icon className="h-3.5 w-3.5 mr-1.5" />
                {label}
              </Badge>
            ))}
          </div>
        </ProjectCard>

        <ProjectCard
          title="Project Status"
          icon={<Code className={`h-5 w-5 ${typography.accentIcon}`} />}
          headerBorder
        >
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-[#1a4480] text-white hover:bg-[#2563eb]">In Development</Badge>
          </div>
          <p className={typography.body}>
            This project is currently under active development. The machine learning model is being
            trained and fine-tuned to achieve higher accuracy in crack classification.
          </p>
        </ProjectCard>

        <div className="text-center mt-16 mb-8">
          <h3 className={`mb-4 ${typography.subsectionTitle}`}>Interested in this project?</h3>
          <p className={`mb-6 max-w-2xl mx-auto ${typography.body}`}>
            Check out the code on GitHub or get in touch to learn more about CrackVision.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <a href="https://github.com/DJSanch/CrackVision" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </Button>
            <Button variant="outline" className={outlineBtnClass} asChild>
              <Link href="/#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </ProjectPageShell>
    </Layout>
  )
}
