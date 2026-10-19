"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Leaf, Smartphone } from "lucide-react"
import { EditorialProjectLayout } from "@/components/editorial-project-layout"

const features = [
  { number: "01", title: "Leaf classification", copy: "Uses TensorFlow models to classify images of rice leaves and surface possible disease indicators." },
  { number: "02", title: "Capture in the field", copy: "Designed around capturing or selecting a rice leaf image directly from a mobile device." },
  { number: "03", title: "Offline access", copy: "Local SQLite storage supports core app workflows when a network connection is unavailable." },
]

const technologies = ["React Native", "TensorFlow", "Python", "SQLite", "Google Colab", "Image classification"]

export default function RiceProTechPage() {
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <EditorialProjectLayout>
      <article className="portfolio-project-content">
        <Link className="project-back-link" href="/#work"><ArrowLeft size={15} /> Back to selected work</Link>

        <section className="project-detail-hero">
          <div className="project-detail-copy">
            <p className="eyebrow"><span className="status-dot rice-status-dot" /> MOBILE &amp; AI · CASE STUDY 02</p>
            <h1>RiceProTech<span>.</span></h1>
            <p className="project-detail-lead">A mobile app exploring AI-assisted rice leaf disease identification.</p>
            <p className="project-detail-summary">Built to bring image classification and practical crop information into an accessible tool for farmers in the field.</p>
            <div className="project-detail-actions">
              <a className="project-detail-button" href="https://github.com/DJSanch/RiceProTech" target="_blank" rel="noopener noreferrer">Explore the code <ArrowUpRight size={15} /></a>
              <span><Smartphone size={14} /> React Native application</span>
            </div>
          </div>
          <figure className="project-detail-visual riceprotech-visual">
            <Image src="/projects/riceprotech.png" alt="RiceProTech mobile app for rice leaf disease classification" fill priority sizes="(max-width: 760px) 100vw, 55vw" />
            <figcaption><span>RICE LEAF DISEASE CLASSIFICATION</span><span>02 / 03</span></figcaption>
          </figure>
        </section>

        <section className="project-demo-section">
          <div className="project-section-heading"><p className="eyebrow">In the field</p><h2>A closer look at the <em>experience.</em></h2><p>Preview the app demonstration and see how the mobile workflow comes together.</p></div>
          <div className="project-demo-frame">
            {!videoFailed ? <video controls playsInline preload="metadata" poster="/projects/riceprotech.png" onError={() => setVideoFailed(true)} aria-label="RiceProTech mobile app demonstration"><source src="/projects/riceprotech-demo.mp4" type="video/mp4" />Your browser does not support the video tag.</video> : <Image src="/projects/riceprotech.png" alt="RiceProTech app demonstration preview" fill sizes="(max-width: 760px) 100vw, 80vw" />}
            <span className="project-demo-caption"><span><Leaf size={14} /> PRODUCT DEMONSTRATION</span><span>RICEPROTECH / MOBILE</span></span>
          </div>
        </section>

        <section className="project-detail-overview">
          <p className="eyebrow">The project</p>
          <div><h2>Useful crop insights, right in your <em>hands.</em></h2><p>RiceProTech is a React Native mobile application that helps farmers capture and analyze rice leaf images. A machine learning model classifies common rice diseases, with supporting information and recommendations designed to make the results easier to act on.</p></div>
        </section>

        <section className="project-feature-section">
          <div className="project-section-heading"><p className="eyebrow">Designed for the field</p><h2>Simple, practical, <em>accessible.</em></h2></div>
          <div className="project-feature-grid">
            {features.map((feature) => <article className="project-feature-card rice-feature-card" key={feature.number}><span>{feature.number}</span><Leaf aria-hidden="true" /><h3>{feature.title}</h3><p>{feature.copy}</p></article>)}
          </div>
        </section>

        <section className="project-tech-section"><div><p className="eyebrow">Built with</p><h2>Tools &amp; <em>methods.</em></h2></div><div className="project-tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section>

        <section className="project-status-panel rice-status-panel"><div><p className="eyebrow">Project status</p><h2>In development</h2></div><p>The mobile experience and disease classification workflow are being developed to support accessible, early crop insights.</p><span className="project-status-dot" /></section>

        <section className="project-next-panel"><div><p className="eyebrow">Have a similar challenge?</p><h2>Let&apos;s build something <em>useful.</em></h2></div><div className="project-next-actions"><Link href="/#contact">Start a conversation <ArrowUpRight size={15} /></Link><Link href="/crackvision">Next project: CrackVision <ArrowUpRight size={15} /></Link></div></section>
      </article>
    </EditorialProjectLayout>
  )
}
