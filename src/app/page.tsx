import Layout from "@/components/layout"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Certifications from "@/components/sections/certifications"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </Layout>
  )
}
