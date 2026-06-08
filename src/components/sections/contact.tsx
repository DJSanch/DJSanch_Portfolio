"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

const cardClass = "gap-4 border-0 bg-transparent py-0 text-white shadow-none backdrop-blur-none"
const labelClass = "text-sm font-medium text-white/70"
const inputClass =
  "border-0 border-b border-white/15 rounded-none bg-transparent text-white shadow-none placeholder:text-white/35 focus-visible:border-white/30 focus-visible:ring-0"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus(null)
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.")
      }

      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. Thank you for reaching out!",
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send message."
      setSubmitStatus({
        type: "error",
        message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@djsanch.com",
      href: "mailto:contact@djsanch.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Davao City, Philippines",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/djsanch", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/daniel-sanchez-8110b2252", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/djsanch", label: "Twitter" },
  ]

  const socialButtonClass =
    "border-0 bg-white/5 text-white hover:bg-white/10 hover:text-white"

  return (
    <section id="contact">
      <div
        id="contact-panel"
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1220] via-[#0b1528] to-[#0d1e38]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d1e38]/40 via-transparent to-[#0a1220]/80"
        />

        <div className="container relative z-10 mx-auto px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="mb-12 text-center sm:mb-16 sm:text-left lg:pl-8 xl:pl-12">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/60 sm:text-xs sm:tracking-[0.35em]">
              Let&apos;s Connect
            </p>
            <h2 className="mb-4 text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
              Get In
              <br />
              Touch
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/65 sm:mx-0 md:text-base">
              I&apos;m always interested in new opportunities and exciting projects. Feel free to
              reach out if you&apos;d like to collaborate or just say hello!
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 lg:pl-8 xl:pl-12">
            <Card className={cardClass}>
              <CardHeader className="px-0">
                <CardTitle className="text-white">Send me a message</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className={labelClass}>
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className={labelClass}>
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`${inputClass} min-h-[140px] resize-y`}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full border-0 bg-white/10 text-white hover:bg-white/15 hover:text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitStatus && (
                    <p
                      className={`text-sm ${
                        submitStatus.type === "success" ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className={cardClass}>
                <CardHeader className="px-0">
                  <CardTitle className="text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 px-0">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="rounded-lg bg-white/5 p-2">
                        <info.icon className="h-5 w-5 text-white/80" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-sm text-white/60 transition-colors hover:text-white"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className={cardClass}>
                <CardHeader className="px-0">
                  <CardTitle className="text-white">Connect with me</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <Button key={social.label} variant="ghost" size="icon" asChild className={socialButtonClass}>
                        <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                          <social.icon className="h-4 w-4" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className={cardClass}>
                <CardHeader className="px-0">
                  <CardTitle className="text-white">Availability</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-3">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-sm text-white/75">Open to opportunities</span>
                      <Badge className="w-fit border-0 bg-emerald-500/20 text-emerald-300">Available</Badge>
                    </div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span className="text-sm text-white/75">Response time</span>
                      <span className="text-sm text-white/55">Within 24 hours</span>
                    </div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span className="text-sm text-white/75">Preferred contact</span>
                      <span className="text-sm text-white/55">Email</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
