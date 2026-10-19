import Image from "next/image"
import { ArrowDownRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness, CodeXml, GraduationCap, Github, Linkedin, Mail, MoveUpRight } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import { FloatingSideNav } from "@/components/floating-side-nav"
import { TechStackSection } from "@/components/tech-stack-section"
import { siteUrl } from "@/lib/site"
import { ProjectFolderCatalog } from "@/components/ui/project-folder-catalog"
import { ServiceSlideshow } from "@/components/ui/animated-slideshow"
import Certifications from "@/components/sections/certifications"

const projects = [
  { name: "Big Bros Hawaiian Grill", type: "Hospitality · Web experience", image: "/projects/big-bros.png", href: "https://big-bros-hawaiian-grill.vercel.app/", number: "01", description: "A welcoming restaurant website that brings the menu and dining experience online." },
  { name: "JS Aromatoc", type: "E-commerce · Full stack", image: "/projects/js-aromatoc.png", href: "https://jsaromatoc.net.ph/", number: "02", description: "A modern fragrance storefront with product discovery, cart, and secure checkout." },
  { name: "Cards Bros", type: "E-commerce · Product design", image: "/projects/cards-bros.png", href: "https://cards-bros2-0.vercel.app/", number: "03", description: "A collector-focused trading card store built for browsing and buying with confidence." },
  { name: "Examiner", type: "Education · AI assisted learning", image: "/projects/Examiner.png", href: "https://examiner-seven.vercel.app/", number: "04", description: "An exam generator that turns uploaded learning material into tailored quizzes." },
  { name: "RiceProTech", type: "Mobile · Machine learning", image: "/projects/riceprotech.png", href: "/riceprotech", number: "05", description: "A mobile tool that uses image classification to help identify rice leaf diseases." },
  { name: "CrackVision", type: "Computer vision · Research", image: "/projects/crackvision.png", href: "/crackvision", number: "06", description: "A computer vision model for classifying the severity of concrete cracks." },
  { name: "Envirotech", type: "Operations · Data visualization", image: "/projects/envirotech.png", href: "/envirotech", number: "07", description: "An inventory management system with clear operational data visualizations." },
]

const services = [
  { title: "Full-stack web development", description: "Responsive web products built from interface through backend, with a focus on real-world usability.", image: "/1.png", alt: "Full-stack development project examples" },
  { title: "E-commerce experiences", description: "Product browsing, storefronts, carts, and checkout flows designed to make buying feel simple.", image: "/2.png", alt: "E-commerce storefront and checkout interface" },
  { title: "Backend systems", description: "APIs and data-focused applications that support dependable workflows and clear operations.", image: "/3.png", alt: "Backend system dashboard and code" },
  { title: "Mobile applications", description: "Mobile experiences that bring practical tools and useful information into people’s hands.", image: "/4.png", alt: "RiceProTech mobile application" },
  { title: "Machine learning", description: "Applied image classification and computer vision for focused problems in agriculture and infrastructure.", image: "/5.png", alt: "Machine learning research and model interface" },
]

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Daniel Sanchez",
        url: siteUrl,
        image: `${siteUrl}/about-portrait.png`,
        jobTitle: ["Full-Stack Developer", "Network Engineer"],
        email: "contact@djsanch.com",
        address: { "@type": "PostalAddress", addressLocality: "Davao City", addressCountry: "PH" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Mapúa Malayan Colleges Mindanao" },
        knowsAbout: ["Web Development", "Next.js", "React", "TypeScript", "Node.js", "Python", "Supabase", "PostgreSQL", "React Native", "Machine Learning", "Network Engineering"],
        sameAs: ["https://github.com/djsanch", "https://linkedin.com/in/daniel-sanchez-8110b2252"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Daniel Sanchez Portfolio",
        url: siteUrl,
        inLanguage: "en",
        about: { "@id": `${siteUrl}/#person` },
      },
    ],
  }

  return (
    <main className="portfolio-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ScrollReveal />
      <FloatingSideNav />
      <header className="portfolio-nav">
        <a className="monogram" href="#home" aria-label="Daniel Sanchez home"><Image src="/2.svg" alt="Daniel Sanchez" width={44} height={44} priority /></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#certifications">Credentials</a><a href="#contact">Contact</a>
          <a className="nav-cta" href="mailto:contact@djsanch.com">Let&apos;s talk <MoveUpRight size={14} /></a>
        </nav>
      </header>

      <section className="intro-hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Independent developer · Davao City, Philippines</p>
          <h1 className="hero-headline">
            <span className="hero-headline-line">Digital</span>
            <span className="hero-headline-line hero-line-muted">experiences</span>
            <span className="hero-headline-line">with purpose.</span>
          </h1>
          <div className="hero-bottom">
            <p>I&apos;m Daniel Sanchez, a full stack developer and network engineer turning thoughtful ideas into useful, reliable products.</p>
            <a className="text-link" href="#work">Explore selected work <ArrowDownRight size={16} /></a>
          </div>
        </div>
        <div className="hero-portrait">
          <Image src="/about-portrait.png" alt="Daniel Sanchez" fill priority sizes="(max-width: 800px) 100vw, 56vw" />
          <div className="portrait-caption"><span>BUILDING FOR THE REAL WORLD</span><span>PH · 07:14 N</span></div>
          <span className="portrait-index">DS / 26</span>
        </div>
        <div className="hero-mark" aria-hidden="true">01<br /><span>—</span><br />04</div>
      </section>

      <section className="metrics" aria-label="At a glance" data-reveal>
        <div><strong>07</strong><span>Selected projects</span></div><div><strong>03</strong><span>Industry roles</span></div><div><strong>CCNA</strong><span>Cisco certified</span></div><div><strong>’26</strong><span>Computer science</span></div>
      </section>

      <section className="about-section" id="about" data-reveal>
        <div className="about-intro"><p className="eyebrow">A little about me</p><h2>Engineering<br />meets <em>empathy.</em></h2></div>
        <div className="about-detail"><p className="about-lead">I work across the stack, from the first sketch to the systems that keep a product running.</p><p>My work brings together software development, network engineering, and a careful eye for how people use technology. I enjoy solving practical problems and making the result feel effortless.</p>
          <a className="resume-link" href="/resume">View résumé <ArrowUpRight size={15} /></a>
        </div>
      </section>

      <TechStackSection />

      <div data-reveal><ServiceSlideshow slides={services} /></div>

      <section className="work-section" id="work" data-reveal>
        <div className="section-heading"><div><p className="eyebrow">An interactive project archive</p><h2>Selected <em>work.</em></h2></div><span className="section-count">01 — 07</span></div>
        <ProjectFolderCatalog projects={projects} />
        <div className="more-work"><a href="https://github.com/djsanch" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a><span>Web · Mobile · Machine learning</span></div>
      </section>

      <Certifications />

      <section className="experience-strip" data-reveal>
        <p className="eyebrow">Where I&apos;ve contributed</p>
        <div className="experience-grid">
          <article><div className="experience-card-top"><span>2025 — NOW</span><BriefcaseBusiness aria-hidden="true" /></div><div className="experience-illustration"><CodeXml aria-hidden="true" /></div><h3>Backend Developer</h3><p>Goldenville</p></article>
          <article><div className="experience-card-top"><span>2024 — NOW</span><BriefcaseBusiness aria-hidden="true" /></div><div className="experience-illustration"><CodeXml aria-hidden="true" /></div><h3>Frontend Developer</h3><p>JS Aromatoc</p></article>
          <article><div className="experience-card-top"><span>2024 — 2026</span><BrainCircuit aria-hidden="true" /></div><div className="experience-illustration research"><BrainCircuit aria-hidden="true" /></div><h3>AI/ML Research</h3><p>Machine learning &amp; computer vision</p></article>
          <article><div className="experience-card-top"><span>2022 — 2026</span><GraduationCap aria-hidden="true" /></div><div className="experience-illustration education"><GraduationCap aria-hidden="true" /></div><h3>Computer Science</h3><p>Mapúa Malayan Colleges Mindanao</p></article>
        </div>
      </section>

      <section className="contact-section" id="contact" data-reveal><div><p className="eyebrow">Have something in mind?</p><h2>Let&apos;s make<br /><em>good things.</em></h2></div><div className="contact-action"><p>Open to thoughtful collaborations, challenging problems, and conversations about what&apos;s next.</p><a href="mailto:contact@djsanch.com">Start a conversation <ArrowUpRight size={16} /></a></div><span className="contact-asterisk" aria-hidden="true">✳</span></section>

      <footer className="portfolio-footer"><span>© {new Date().getFullYear()} Daniel Sanchez</span><span>Designed with intention · Built for the web</span><div><a href="https://github.com/djsanch" aria-label="GitHub"><Github size={16} /></a><a href="https://linkedin.com/in/daniel-sanchez-8110b2252" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="mailto:contact@djsanch.com" aria-label="Email"><Mail size={16} /></a></div></footer>
    </main>
  )
}
