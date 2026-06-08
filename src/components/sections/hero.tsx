"use client"

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { useHeroAboutBlend } from "@/components/hero-about-scroll"

const Hero = () => {
  const blend = useHeroAboutBlend()

  const socialLinks = [
    { icon: Github, href: "https://github.com/djsanch", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/daniel-sanchez-8110b2252", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@djsanch.com", label: "Email" },
  ]

  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] overflow-hidden bg-gradient-to-br from-[#0a1220] via-[#0b1528] to-[#0d1e38]">
      {/* Geometric accent shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-[55%] h-[min(480px,85vw)] w-[min(480px,85vw)] -translate-y-1/2 sm:-right-16 sm:top-1/2 sm:h-[min(600px,88vw)] sm:w-[min(600px,88vw)] lg:right-[8%] lg:h-[min(620px,55vw)] lg:w-[min(620px,55vw)]"
      >
        <div className="absolute inset-0 scale-110 rounded-full bg-[#3b82f6]/15 blur-3xl" />
        <div className="absolute inset-0 rounded-full bg-[#1a4480]/90 shadow-[0_0_60px_20px_rgba(59,130,246,0.12)]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 left-[3%] h-32 w-32 sm:-bottom-24 sm:left-[5%] sm:h-48 sm:w-48 md:-bottom-16 md:left-[12%] md:h-56 md:w-56"
      >
        <div className="absolute inset-0 scale-125 rounded-full bg-[#60a5fa]/20 blur-2xl" />
        <div className="absolute inset-0 rounded-full bg-[#2563eb]/55 shadow-[0_0_40px_12px_rgba(37,99,235,0.15)]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0a1220]/80 via-[#0f1f3d]/30 to-[#0a182e]/90"
      />

      <div className="container relative z-10 mx-auto flex min-h-[100dvh] flex-col px-4 pb-0 pt-24 sm:px-6 sm:pt-28">
        <div className="grid h-[calc(100dvh-6rem)] w-full grid-cols-1 items-center gap-6 sm:h-[calc(100dvh-7rem)] sm:gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-4 xl:gap-6">
          {/* Left — typography & CTA */}
          <div
            className="space-y-5 pb-8 text-center transition-all duration-700 ease-out sm:space-y-6 sm:pb-10 sm:text-left lg:order-1 lg:max-w-xl lg:self-center lg:space-y-8 lg:pb-0 lg:pl-8 xl:pl-12"
            style={{
              opacity: 1 - blend,
              transform: `translateY(${-blend * 28}px)`,
            }}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60 sm:text-xs sm:tracking-[0.35em] md:text-sm">
              Full Stack Developer
            </p>

            <h1 className="text-3xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Daniel
              <br />
              Sanchez
            </h1>

            <p className="mx-auto max-w-md text-sm leading-relaxed text-white/65 sm:mx-0 md:text-base">
              I build scalable web applications and solve complex engineering problems.
              Passionate about modern technologies, clean architecture, and creating
              solutions that make a real impact.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-6">
              <a
                href="#about"
                className="group inline-flex items-center gap-3 text-white transition-opacity hover:opacity-80 sm:gap-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/30 transition-colors group-hover:border-blue-300/60 group-hover:bg-blue-400/10 sm:h-12 sm:w-12">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.2em]">
                  See More
                </span>
              </a>

              <a
                href="/Daniel_Sanchez_Resume.pdf"
                download="Daniel_Sanchez_Resume.pdf"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-white/60 transition-colors hover:text-white sm:text-sm sm:tracking-[0.15em]"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>

            <div className="flex justify-center gap-3 pt-1 sm:justify-start sm:pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/20 text-white/70 transition-colors hover:border-blue-300/45 hover:bg-blue-400/10 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Desktop spacer for fixed portrait */}
          <div aria-hidden className="hidden lg:block lg:order-2" />
        </div>
      </div>
    </section>
  )
}

export default Hero
