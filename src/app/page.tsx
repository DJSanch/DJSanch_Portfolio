import Layout from "@/components/layout"
import { HeroAboutScrollProvider } from "@/components/hero-about-scroll"
import { ProjectsEventsSlideProvider, ProjectsEventsPlane } from "@/components/projects-events-slide"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Events from "@/components/sections/events"
import Certifications from "@/components/sections/certifications"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <Layout>
      <HeroAboutScrollProvider>
        <Hero />
        <About />
      </HeroAboutScrollProvider>
      <ProjectsEventsSlideProvider>
        <ProjectsEventsPlane>
          <Projects />
          <Events />
        </ProjectsEventsPlane>
      </ProjectsEventsSlideProvider>
      <Certifications />
      <Contact />
      <Footer />
    </Layout>
  )
}
