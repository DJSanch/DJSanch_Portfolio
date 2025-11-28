"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Building } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface CertificationItem {
  title: string;
  filename: string;
  image?: string;
}

const courseraCerts: CertificationItem[] = [
  { title: "Start the UX Design Process: Empathize, Define, and Ideate", filename: "Coursera TTTHDXS9S7WW.pdf", image: "Coursera TTTHDXS9S7WW.png" },
  { title: "What is Data Science?", filename: "Coursera P6IG4BHZO88H.pdf", image: "Coursera P6IG4BHZO88H.png" },
  { title: "Introduction to Java", filename: "Coursera KX83SA2BG6DX.pdf", image: "Coursera KX83SA2BG6DX.png" },
  { title: "Introduction to Hardware and Operating Systems", filename: "Coursera HGWLFOYUKPGA.pdf", image: "Coursera HGWLFOYUKPGA.png" },
  { title: "Beginning Custom Projects with Raspberry Pi", filename: "Coursera CYG4C3YCPCVZ.pdf", image: "Coursera CYG4C3YCPCVZ.png" },
  { title: "Data Structures", filename: "Coursera 5TS9KY8VYU4E.pdf", image: "Coursera 5TS9KY8VYU4E.png" },
  { title: "Advanced Algorithms and Complexity", filename: "Coursera 2LYHG9CWSKFE.pdf", image: "Coursera 2LYHG9CWSKFE.png" },
]

const linkedinCerts: CertificationItem[] = [
  { title: "Understanding the Impact of a Merger for IT Teams", filename: "CertificateOfCompletion_Understanding the Impact of a Merger for IT Teams.pdf", image: "CertificateOfCompletion_Understanding the Impact of a Merger for IT Teams.png" },
  { title: "SQL Essential Training", filename: "CertificateOfCompletion_SQL Essential Training.pdf", image: "CertificateOfCompletion_SQL Essential Training.png" },
  { title: "TensorFlow Working with NLP", filename: "CertificateOfCompletion_TensorFlow Working with NLP.pdf", image: "CertificateOfCompletion_TensorFlow Working with NLP.png" },
  { title: "SQL Essential Training 2014", filename: "CertificateOfCompletion_SQL Essential Training 2014.pdf", image: "CertificateOfCompletion_SQL Essential Training 2014.png" },
  { title: "Object-Oriented Programming with C", filename: "CertificateOfCompletion_ObjectOriented Programming with C.pdf", image: "CertificateOfCompletion_ObjectOriented Programming with C.png" },
  { title: "Programming Foundations: Databases", filename: "CertificateOfCompletion_Programming Foundations Databases.pdf", image: "CertificateOfCompletion_Programming Foundations Databases.png" },
  { title: "Large Language Models: Text Classification for NLP using BERT", filename: "CertificateOfCompletion_Large Language Models Text Classification for NLP using BERT.pdf", image: "CertificateOfCompletion_Large Language Models Text Classification for NLP using BERT.png" },
  { title: "Networking Foundations: Local Area Networks (LANs) 2015", filename: "CertificateOfCompletion_Networking Foundations Local Area Networks LANs 2015.pdf", image: "CertificateOfCompletion_Networking Foundations Local Area Networks LANs 2015.png" },
  { title: "Introduction to Generative AI with GPT", filename: "CertificateOfCompletion_Introduction to Generative AI with GPT.pdf", image: "CertificateOfCompletion_Introduction to Generative AI with GPT.png" },
  { title: "Introduction to Network Routing", filename: "CertificateOfCompletion_Introduction to Network Routing.pdf", image: "CertificateOfCompletion_Introduction to Network Routing.png" },
  { title: "GPT-4 Foundations: Building AI-Powered Apps", filename: "CertificateOfCompletion_GPT4 Foundations Building AIPowered Apps.pdf", image: "CertificateOfCompletion_GPT4 Foundations Building AIPowered Apps.png" },
  { title: "Generative AI: Introduction to Large Language Models", filename: "CertificateOfCompletion_Generative AI Introduction to Large Language Models.pdf", image: "CertificateOfCompletion_Generative AI Introduction to Large Language Models.png" },
  { title: "Applied AI: Building NLP Apps with Hugging Face Transformers", filename: "CertificateOfCompletion_Applied AI Building NLP Apps with Hugging Face Transformers.pdf", image: "CertificateOfCompletion_Applied AI Building NLP Apps with Hugging Face Transformers.png" },
  { title: "Develop Your Skills with Large Language Models", filename: "CertificateOfCompletion_Develop Your Skills with Large Language Models.pdf", image: "CertificateOfCompletion_Develop Your Skills with Large Language Models.png" },
  { title: "AI Text Summarization with Hugging Face", filename: "CertificateOfCompletion_AI Text Summarization with Hugging Face.pdf", image: "CertificateOfCompletion_AI Text Summarization with Hugging Face.png" },
  { title: "Agile Software Development: Refactoring", filename: "CertificateOfCompletion_Agile Software Development Refactoring.pdf", image: "CertificateOfCompletion_Agile Software Development Refactoring.png" },
  { title: "Agile Software Development: Clean Coding Practices", filename: "CertificateOfCompletion_Agile Software Development Clean Coding Practices.pdf", image: "CertificateOfCompletion_Agile Software Development Clean Coding Practices.png" },
]

const Certifications = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  return (
    <section id="certifications" className="py-20 bg-muted/30" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 scroll-animate ${sectionVisible ? 'animate-in' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Coursera and LinkedIn Learning certifications earned and verified.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[...courseraCerts, ...linkedinCerts].map((cert, index) => (
            <CertificateCard key={`${cert.filename}-${index}`} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface CertificateCardProps {
  cert: CertificationItem;
  index: number;
}

const CertificateCard = ({ cert, index }: CertificateCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const isCoursera = cert.filename.startsWith("Coursera");

  return (
    <Card
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group hover:shadow-lg rounded-lg flex flex-col scroll-animate-scale ${isVisible ? 'animate-in' : ''}`}
      style={{ animationDelay: `${(index % 4) * 120 + 120}ms` }}
    >
      {cert.image && (
        <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
          <Image
            src={`/certifications/${cert.image}`}
            alt={`${cert.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Building className="h-4 w-4" />
              {isCoursera ? "Coursera" : "LinkedIn Learning"}
            </div>
          </div>
          <Award className="h-6 w-6 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 flex flex-col flex-1">
        <Badge variant="secondary" className="text-xs">
          {isCoursera ? "Coursera" : "LinkedIn Learning"}
        </Badge>
        <div className="text-sm text-muted-foreground leading-relaxed flex-1">
          {isCoursera ? "Coursera Professional Certificate" : "LinkedIn Learning Certificate"}
        </div>
        <Button variant="outline" size="sm" asChild className="w-full mt-auto">
          <a href={`/certifications/${cert.filename}`} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            View Certificate (PDF)
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

export default Certifications 