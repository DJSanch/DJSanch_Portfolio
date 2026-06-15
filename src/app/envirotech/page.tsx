"use client"

import Layout from "@/components/layout"
import { PageHero } from "@/components/page-hero"
import { ProjectCard, projectCardClass } from "@/components/project-card"
import { ProjectPageShell } from "@/components/project-page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { typography } from "@/lib/typography"
import { Github, ArrowLeft, Leaf, Cpu, BarChart3 } from "lucide-react"
import Link from "next/link"

const outlineBtnClass = "border-white/20 bg-transparent text-white hover:bg-white/5"

export default function EnvirotechPage() {
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
          title="Envirotech"
          description="Environmental Monitoring and Analysis Platform for Sustainable Solutions"
          icon={<Leaf className={`h-8 w-8 ${typography.accentIcon}`} />}
        >
          <Button variant="outline" className={outlineBtnClass} asChild>
            <a href="https://github.com/DJSanch/Envirotech" target="_blank" rel="noopener noreferrer">
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
                  <Leaf className={`h-16 w-16 ${typography.accentIcon}`} />
                </div>
                <h3 className={`mb-2 ${typography.subsectionTitle}`}>Envirotech Platform</h3>
                <p className={`max-w-md mx-auto ${typography.body}`}>
                  Real-time environmental monitoring and data visualization platform
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ProjectCard title="Overview" icon={<Leaf className={`h-5 w-5 ${typography.accentIcon}`} />}>
            <p className={typography.body}>
              Envirotech is a digital platform designed to streamline the tracking, management, and reporting
              of environmental equipment, materials, and resources. It automates inventory processes such as
              stock monitoring, item issuance, and replenishment to minimize waste and ensure operational efficiency.
            </p>
          </ProjectCard>

          <ProjectCard title="Key Features" icon={<Cpu className={`h-5 w-5 ${typography.accentIcon}`} />}>
            <div className={`space-y-2 ${typography.body}`}>
              {[
                "Real-Time Inventory Tracking",
                "Automated Reordering System",
                "Detailed Reporting and Analytics",
                "User Role Management",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className={`mt-2 h-2 w-2 rounded-full bg-[#60a5fa]`} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </ProjectCard>
        </div>

        <div className="mb-16">
          <h2 className={`mb-6 flex items-center gap-2 ${typography.cardTitleWithIcon}`}>
            <Cpu className={`h-5 w-5 ${typography.accentIcon}`} />
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "React", category: "Frontend" },
              { name: "Node.js", category: "Backend" },
              { name: "MongoDB", category: "Database" },
              { name: "Express", category: "Backend" },
              { name: "Chart.js", category: "Visualization" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.06]"
              >
                <div className={typography.cardTitle}>{tech.name}</div>
                <div className={typography.meta}>{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ProjectCard title="Challenges" icon={<BarChart3 className={`h-5 w-5 ${typography.accentIcon}`} />}>
            <div className={`space-y-4 ${typography.body}`}>
              <div>
                <h4 className={`mb-1 ${typography.cardTitle}`}>Data Integration</h4>
                <p className={typography.bodySmall}>
                  Consolidating inventory data from multiple departments and suppliers was challenging due to
                  inconsistent record formats and tracking methods.
                </p>
              </div>
              <div>
                <h4 className={`mb-1 ${typography.cardTitle}`}>Real-Time Stock Monitoring</h4>
                <p className={typography.bodySmall}>
                  Maintaining accurate, up-to-date inventory levels across various storage locations required
                  handling frequent transactions and minimizing system delays.
                </p>
              </div>
            </div>
          </ProjectCard>

          <ProjectCard title="Solutions" icon={<Leaf className={`h-5 w-5 ${typography.accentIcon}`} />}>
            <div className={`space-y-4 ${typography.body}`}>
              <div>
                <h4 className={`mb-1 ${typography.cardTitle}`}>Centralized Database System</h4>
                <p className={typography.bodySmall}>
                  Implemented a unified database that synchronizes all inventory records, ensuring consistent
                  and reliable data sharing among departments and suppliers.
                </p>
              </div>
              <div>
                <h4 className={`mb-1 ${typography.cardTitle}`}>Automated Inventory Tracking</h4>
                <p className={typography.bodySmall}>
                  Introduced automated monitoring and barcode/RFID-based tracking to update stock movements in
                  real-time, improving accuracy and reducing manual errors.
                </p>
              </div>
            </div>
          </ProjectCard>
        </div>

        <div className="text-center">
          <h3 className={`mb-4 ${typography.subsectionTitle}`}>Interested in learning more?</h3>
          <p className={`max-w-2xl mx-auto mb-6 ${typography.body}`}>
            Check out the code on GitHub or reach out to discuss how Envirotech can be customized for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <a href="https://github.com/DJSanch/Envirotech" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </Button>
            <Button variant="outline" className={outlineBtnClass} asChild>
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </ProjectPageShell>
    </Layout>
  )
}
