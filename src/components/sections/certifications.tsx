"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Award } from "lucide-react"

interface CertificationItem {
  title: string
  filename: string
  image: string
  provider: string
  category: string
}

const certifications: CertificationItem[] = [
  { title: "CCNA — Cisco Certified Network Associate", filename: "Cisco Certified Network Associate certificate.pdf", image: "Cisco Certified Network Associate certificate.png", provider: "Cisco", category: "Networking · Professional certification" },
  { title: "Start the UX Design Process: Empathize, Define, and Ideate", filename: "Coursera TTTHDXS9S7WW.pdf", image: "Coursera TTTHDXS9S7WW.png", provider: "Coursera", category: "Design · User experience" },
  { title: "What is Data Science?", filename: "Coursera P6IG4BHZO88H.pdf", image: "Coursera P6IG4BHZO88H.png", provider: "Coursera", category: "Data · Foundations" },
  { title: "Introduction to Java", filename: "Coursera KX83SA2BG6DX.pdf", image: "Coursera KX83SA2BG6DX.png", provider: "Coursera", category: "Development · Programming" },
  { title: "Introduction to Hardware and Operating Systems", filename: "Coursera HGWLFOYUKPGA.pdf", image: "Coursera HGWLFOYUKPGA.png", provider: "Coursera", category: "IT · Systems" },
  { title: "Beginning Custom Projects with Raspberry Pi", filename: "Coursera CYG4C3YCPCVZ.pdf", image: "Coursera CYG4C3YCPCVZ.png", provider: "Coursera", category: "Hardware · Raspberry Pi" },
  { title: "Data Structures", filename: "Coursera 5TS9KY8VYU4E.pdf", image: "Coursera 5TS9KY8VYU4E.png", provider: "Coursera", category: "Computer science · Algorithms" },
  { title: "Advanced Algorithms and Complexity", filename: "Coursera 2LYHG9CWSKFE.pdf", image: "Coursera 2LYHG9CWSKFE.png", provider: "Coursera", category: "Computer science · Algorithms" },
  { title: "Understanding the Impact of a Merger for IT Teams", filename: "CertificateOfCompletion_Understanding the Impact of a Merger for IT Teams.pdf", image: "CertificateOfCompletion_Understanding the Impact of a Merger for IT Teams.png", provider: "LinkedIn Learning", category: "IT · Organizational change" },
  { title: "SQL Essential Training", filename: "CertificateOfCompletion_SQL Essential Training.pdf", image: "CertificateOfCompletion_SQL Essential Training.png", provider: "LinkedIn Learning", category: "Data · SQL" },
  { title: "TensorFlow Working with NLP", filename: "CertificateOfCompletion_TensorFlow Working with NLP.pdf", image: "CertificateOfCompletion_TensorFlow Working with NLP.png", provider: "LinkedIn Learning", category: "AI · Natural language processing" },
  { title: "SQL Essential Training 2014", filename: "CertificateOfCompletion_SQL Essential Training 2014.pdf", image: "CertificateOfCompletion_SQL Essential Training 2014.png", provider: "LinkedIn Learning", category: "Data · SQL" },
  { title: "Object-Oriented Programming with C", filename: "CertificateOfCompletion_ObjectOriented Programming with C.pdf", image: "CertificateOfCompletion_ObjectOriented Programming with C.png", provider: "LinkedIn Learning", category: "Development · Programming" },
  { title: "Programming Foundations: Databases", filename: "CertificateOfCompletion_Programming Foundations Databases.pdf", image: "CertificateOfCompletion_Programming Foundations Databases.png", provider: "LinkedIn Learning", category: "Data · Databases" },
  { title: "Large Language Models: Text Classification for NLP using BERT", filename: "CertificateOfCompletion_Large Language Models Text Classification for NLP using BERT.pdf", image: "CertificateOfCompletion_Large Language Models Text Classification for NLP using BERT.png", provider: "LinkedIn Learning", category: "AI · Natural language processing" },
  { title: "Networking Foundations: Local Area Networks (LANs) 2015", filename: "CertificateOfCompletion_Networking Foundations Local Area Networks LANs 2015.pdf", image: "CertificateOfCompletion_Networking Foundations Local Area Networks LANs 2015.png", provider: "LinkedIn Learning", category: "Networking · LANs" },
  { title: "Introduction to Generative AI with GPT", filename: "CertificateOfCompletion_Introduction to Generative AI with GPT.pdf", image: "CertificateOfCompletion_Introduction to Generative AI with GPT.png", provider: "LinkedIn Learning", category: "AI · Generative AI" },
  { title: "Introduction to Network Routing", filename: "CertificateOfCompletion_Introduction to Network Routing.pdf", image: "CertificateOfCompletion_Introduction to Network Routing.png", provider: "LinkedIn Learning", category: "Networking · Routing" },
  { title: "GPT-4 Foundations: Building AI-Powered Apps", filename: "CertificateOfCompletion_GPT4 Foundations Building AIPowered Apps.pdf", image: "CertificateOfCompletion_GPT4 Foundations Building AIPowered Apps.png", provider: "LinkedIn Learning", category: "AI · Application development" },
  { title: "Generative AI: Introduction to Large Language Models", filename: "CertificateOfCompletion_Generative AI Introduction to Large Language Models.pdf", image: "CertificateOfCompletion_Generative AI Introduction to Large Language Models.png", provider: "LinkedIn Learning", category: "AI · Large language models" },
  { title: "Applied AI: Building NLP Apps with Hugging Face Transformers", filename: "CertificateOfCompletion_Applied AI Building NLP Apps with Hugging Face Transformers.pdf", image: "CertificateOfCompletion_Applied AI Building NLP Apps with Hugging Face Transformers.png", provider: "LinkedIn Learning", category: "AI · Transformers" },
  { title: "Develop Your Skills with Large Language Models", filename: "CertificateOfCompletion_Develop Your Skills with Large Language Models.pdf", image: "CertificateOfCompletion_Develop Your Skills with Large Language Models.png", provider: "LinkedIn Learning", category: "AI · Large language models" },
  { title: "AI Text Summarization with Hugging Face", filename: "CertificateOfCompletion_AI Text Summarization with Hugging Face.pdf", image: "CertificateOfCompletion_AI Text Summarization with Hugging Face.png", provider: "LinkedIn Learning", category: "AI · Transformers" },
  { title: "Agile Software Development: Refactoring", filename: "CertificateOfCompletion_Agile Software Development Refactoring.pdf", image: "CertificateOfCompletion_Agile Software Development Refactoring.png", provider: "LinkedIn Learning", category: "Software · Agile development" },
  { title: "Agile Software Development: Clean Coding Practices", filename: "CertificateOfCompletion_Agile Software Development Clean Coding Practices.pdf", image: "CertificateOfCompletion_Agile Software Development Clean Coding Practices.png", provider: "LinkedIn Learning", category: "Software · Clean code" },
]

function wrapIndex(index: number) {
  return (index + certifications.length) % certifications.length
}

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 })
  const [previewVisible, setPreviewVisible] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)
  const active = certifications[activeIndex]
  const moveTo = (index: number) => {
    setDirection(index >= activeIndex ? 1 : -1)
    setActiveIndex(wrapIndex(index))
  }
  const followPointer = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const preview = previewRef.current
    const width = preview?.offsetWidth ?? Math.min(window.innerWidth * 0.31, 520)
    const height = preview?.offsetHeight ?? width / 1.38
    setPreviewPosition({
      x: Math.max(12, Math.min(event.clientX + 22, window.innerWidth - width - 12)),
      y: Math.max(12, Math.min(event.clientY + 18, window.innerHeight - height - 12)),
    })
  }
  const handleRowFocus = (index: number, event: React.FocusEvent<HTMLAnchorElement>) => {
    moveTo(index)
    setPreviewVisible(true)
    const rect = event.currentTarget.getBoundingClientRect()
    const width = previewRef.current?.offsetWidth ?? 360
    const height = previewRef.current?.offsetHeight ?? 260
    setPreviewPosition({
      x: Math.max(12, Math.min(rect.right + 22, window.innerWidth - width - 12)),
      y: Math.max(12, Math.min(rect.top + rect.height / 2, window.innerHeight - height - 12)),
    })
  }
  const handleRowHover = (index: number, event: React.MouseEvent<HTMLAnchorElement>) => {
    moveTo(index)
    setPreviewVisible(true)
    followPointer(event)
  }

  return (
    <section className="credentials-section" id="certifications" aria-labelledby="credentials-title">
      <div className="credentials-heading">
        <div>
          <p className="eyebrow"><Award size={13} aria-hidden="true" /> Credentials</p>
          <h2 id="credentials-title">Learning in <em>practice.</em></h2>
        </div>
        <p className="credentials-intro">A collection of certifications and coursework across software, AI, data, and networking.</p>
      </div>

      <div className="credentials-roster" aria-label="Professional certificates">
        <div className="credentials-list" role="list" onMouseLeave={() => setPreviewVisible(false)}>
          {certifications.map((cert, index) => (
            <a
              key={cert.filename}
              role="listitem"
              className={`credential-row${index === activeIndex ? " is-active" : ""}`}
              href={`/certifications/${encodeURIComponent(cert.filename)}`}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={(event) => handleRowHover(index, event)}
              onMouseMove={followPointer}
              onFocus={(event) => handleRowFocus(index, event)}
              onClick={() => { moveTo(index); setPreviewVisible(true) }}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <span className="credential-row-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="credential-row-title">{cert.title}</span>
              <span className="credential-row-provider">{cert.provider}</span>
              <ArrowUpRight className="credential-row-arrow" size={22} aria-hidden="true" />
            </a>
          ))}
        </div>
        <div ref={previewRef} key={active.filename} className={`credential-float-preview${previewVisible ? " is-visible" : ""}`} data-direction={direction} style={{ left: previewPosition.x, top: previewPosition.y }} aria-hidden="true">
          <Image src={`/certifications/${active.image}`} alt={`${active.title} certificate`} fill sizes="(max-width: 760px) 72vw, 30vw" priority={activeIndex === 0} />
          <span className="credential-active-label"><i /> Active</span>
        </div>
      </div>
    </section>
  )
}
