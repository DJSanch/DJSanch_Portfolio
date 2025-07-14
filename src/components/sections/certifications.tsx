import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar, Building } from "lucide-react"

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-SAA-123456",
      description: "Demonstrates expertise in designing distributed systems on AWS platform",
      badge: "https://aws.amazon.com/verification",
      category: "Cloud Computing"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-789012",
      description: "Validates ability to build scalable applications using Google Cloud Platform",
      badge: "https://googlecloud.com/verification",
      category: "Cloud Computing"
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "AZ-204-345678",
      description: "Proves skills in developing, testing, and maintaining cloud applications",
      badge: "https://microsoft.com/verification",
      category: "Cloud Computing"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      credentialId: "CKA-901234",
      description: "Demonstrates ability to perform basic installation and configuration of Kubernetes",
      badge: "https://cncf.io/verification",
      category: "DevOps"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MDB-DEV-567890",
      description: "Validates expertise in MongoDB application development and data modeling",
      badge: "https://university.mongodb.com/verification",
      category: "Database"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "REACT-META-123789",
      description: "Demonstrates proficiency in React development and best practices",
      badge: "https://meta.com/verification",
      category: "Frontend Development"
    }
  ]

  const categories = ["All", "Cloud Computing", "DevOps", "Database", "Frontend Development"]

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various technologies 
            and demonstrate my commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Building className="h-4 w-4" />
                      {cert.issuer}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </div>
                  </div>
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Credential ID:</span>
                    <span className="font-mono">{cert.credentialId}</span>
                  </div>
                  
                  <Badge variant="secondary" className="text-xs">
                    {cert.category}
                  </Badge>
                </div>
                
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={cert.badge} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            I'm constantly learning and adding new certifications to stay current with the latest technologies.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://linkedin.com/in/djsanch/details/certifications" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5 mr-2" />
              View All on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Certifications 