import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, BrainCircuit, ScanSearch } from "lucide-react"
import { EditorialProjectLayout } from "@/components/editorial-project-layout"

const features = [
  { number: "01", title: "Severity classes", copy: "Sorts concrete crack images into multiple severity levels to help make inspection findings easier to review." },
  { number: "02", title: "Image analysis", copy: "Uses a deep learning image classification workflow built with TensorFlow and Keras." },
  { number: "03", title: "Prediction interface", copy: "A web interface gives users a place to submit an image and review the model’s prediction and confidence." },
]

const technologies = ["Python", "TensorFlow", "Keras", "Computer vision", "Image processing", "Next.js", "TypeScript"]

export default function CrackVisionPage() {
  return (
    <EditorialProjectLayout>
      <article className="portfolio-project-content">
        <Link className="project-back-link" href="/#work"><ArrowLeft size={15} /> Back to selected work</Link>

        <section className="project-detail-hero">
          <div className="project-detail-copy">
            <p className="eyebrow"><span className="status-dot" /> AI &amp; COMPUTER VISION · CASE STUDY 01</p>
            <h1>CrackVision<span>.</span></h1>
            <p className="project-detail-lead">A computer vision project for classifying concrete crack severity from images.</p>
            <p className="project-detail-summary">Exploring how deep learning can help engineers and inspectors review concrete conditions with a clearer, more consistent workflow.</p>
            <div className="project-detail-actions">
              <a className="project-detail-button" href="https://github.com/DJSanch/CrackVision" target="_blank" rel="noopener noreferrer">Explore the code <ArrowUpRight size={15} /></a>
              <span><BrainCircuit size={14} /> Machine learning research</span>
            </div>
          </div>
          <figure className="project-detail-visual crackvision-visual">
            <Image src="/projects/crackvision.png" alt="CrackVision concrete crack severity classification project" fill priority sizes="(max-width: 760px) 100vw, 55vw" />
            <figcaption><span>CONCRETE CRACK CLASSIFICATION</span><span>01 / 03</span></figcaption>
          </figure>
        </section>

        <section className="project-detail-overview">
          <p className="eyebrow">The project</p>
          <div><h2>Making structural images easier to <em>understand.</em></h2><p>CrackVision applies image classification to concrete crack assessment. The project explores a model and web experience that can sort crack images into severity categories and present a prediction for review.</p></div>
        </section>

        <section className="project-feature-section">
          <div className="project-section-heading"><p className="eyebrow">What it does</p><h2>From image to <em>insight.</em></h2></div>
          <div className="project-feature-grid">
            {features.map((feature) => <article className="project-feature-card" key={feature.number}><span>{feature.number}</span><ScanSearch aria-hidden="true" /><h3>{feature.title}</h3><p>{feature.copy}</p></article>)}
          </div>
        </section>

        <section className="project-tech-section"><div><p className="eyebrow">Built with</p><h2>Tools &amp; <em>methods.</em></h2></div><div className="project-tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section>

        <section className="project-status-panel"><div><p className="eyebrow">Project status</p><h2>In development</h2></div><p>The model and classification workflow are being refined through ongoing training and evaluation.</p><span className="project-status-dot" /></section>

        <section className="project-next-panel"><div><p className="eyebrow">Have a similar challenge?</p><h2>Let&apos;s build something <em>useful.</em></h2></div><div className="project-next-actions"><Link href="/#contact">Start a conversation <ArrowUpRight size={15} /></Link><Link href="/riceprotech">Next project: RiceProTech <ArrowUpRight size={15} /></Link></div></section>
      </article>
    </EditorialProjectLayout>
  )
}
