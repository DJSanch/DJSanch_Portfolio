import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { typography } from "@/lib/typography"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/djsanch", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/djsanch", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/djsanch", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@djsanch.com", label: "Email" },
  ]

  return (
    <footer id="footer" className="border-t border-white/10 bg-[#0a1220]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className={typography.body}>© {currentYear} DJSanch. All rights reserved.</p>
            <p className={`mt-1 ${typography.meta}`}>Built with Next.js and Shadcn UI</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/50 transition-colors hover:text-white"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
