import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDownToLine, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Résumé",
  description: "View or download Daniel Sanchez's résumé.",
}

export default function ResumePage() {
  return (
    <main className="resume-viewer-page">
      <header className="resume-viewer-header">
        <Link href="/#about" className="resume-back"><ArrowLeft size={15} /> Back to portfolio</Link>
        <h1>Daniel Sanchez <span>Résumé</span></h1>
        <a className="resume-download" href="/Daniel_Sanchez_Resume.pdf" download>
          Download PDF <ArrowDownToLine size={15} />
        </a>
      </header>
      <object className="resume-document" data="/Daniel_Sanchez_Resume.pdf" type="application/pdf" aria-label="Daniel Sanchez résumé">
        <div className="resume-fallback">
          <p>Your browser can’t display the PDF inline.</p>
          <a href="/Daniel_Sanchez_Resume.pdf" download>Download the résumé PDF</a>
        </div>
      </object>
    </main>
  )
}
