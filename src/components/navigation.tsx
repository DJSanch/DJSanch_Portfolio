"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkSectionVisible, setIsDarkSectionVisible] = useState(true)
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null)
  const [introActive, setIntroActive] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    if (!isHomePage) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIntroActive(true)
      return
    }

    const introFrame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIntroActive(true))
    })

    return () => cancelAnimationFrame(introFrame)
  }, [isHomePage])

  useEffect(() => {
    if (!isHomePage) {
      setIsDarkSectionVisible(false)
      return
    }

    const checkDarkNav = () => {
      const navHeight = 72
      const probeY = navHeight * 0.5

      const darkPanels = [
        document.getElementById("home"),
        document.getElementById("about-panel"),
        document.getElementById("projects-panel"),
        document.getElementById("events-panel"),
        document.getElementById("certifications-panel"),
        document.getElementById("contact-panel"),
        document.getElementById("footer"),
      ].filter((panel): panel is HTMLElement => panel !== null)

      const navOverDark = darkPanels.some((panel) => {
        const rect = panel.getBoundingClientRect()
        return rect.top < navHeight && rect.bottom > probeY
      })

      setIsDarkSectionVisible(navOverDark)
    }

    checkDarkNav()
    window.addEventListener("scroll", checkDarkNav, { passive: true })
    window.addEventListener("resize", checkDarkNav)
    window.addEventListener("section-nav", checkDarkNav)

    return () => {
      window.removeEventListener("scroll", checkDarkNav)
      window.removeEventListener("resize", checkDarkNav)
      window.removeEventListener("section-nav", checkDarkNav)
    }
  }, [isHomePage])

  const scrollToSection = (sectionId: string) => {
    window.dispatchEvent(new CustomEvent("section-nav", { detail: sectionId }))

    if (sectionId === "projects" || sectionId === "events") {
      document.getElementById("projects-events")?.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "events", label: "Events" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ]

  const useDarkNavStyle = isHomePage && isDarkSectionVisible

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage ? `hero-intro-nav ${introActive ? "hero-intro-active" : ""}` : ""
      } ${
        useDarkNavStyle
          ? "bg-transparent border-b border-transparent"
          : "bg-background/85 backdrop-blur-md border-b shadow-sm"
      }`}
    >
      <div className="container relative mx-auto px-4 py-3 sm:py-4">
        <div className="flex min-h-10 items-center justify-center sm:min-h-11">
          {/* Desktop Navigation */}
          <div className="hidden items-center justify-center gap-x-3 gap-y-2 lg:flex lg:gap-x-6">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredNavItem(item.id)}
                onMouseLeave={() => setHoveredNavItem(null)}
                onFocus={() => setHoveredNavItem(item.id)}
                onBlur={() => setHoveredNavItem(null)}
                className={`group relative px-2 text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ease-out xl:px-3 xl:text-xs xl:tracking-[0.2em] ${
                  hoveredNavItem === item.id
                    ? "scale-110 opacity-100"
                    : hoveredNavItem
                      ? "scale-95 opacity-40"
                      : "scale-100 opacity-100"
                } ${
                  useDarkNavStyle
                    ? "text-white hover:bg-transparent hover:text-white"
                    : "hover:bg-transparent"
                }`}
              >
                <span
                  className={`relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out ${
                    useDarkNavStyle ? "after:bg-white" : "after:bg-foreground"
                  } ${
                    hoveredNavItem === item.id
                      ? "after:scale-x-100"
                      : "group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </span>
              </Button>
            ))}
          </div>

          {/* Tablet Navigation — compact centered row */}
          <div className="hidden flex-wrap items-center justify-center gap-x-2 gap-y-1 md:flex lg:hidden">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`px-2 text-[10px] font-medium uppercase tracking-[0.12em] ${
                  useDarkNavStyle
                    ? "text-white hover:bg-transparent hover:text-white"
                    : "hover:bg-transparent"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className={`absolute right-0 top-1/2 h-10 w-10 -translate-y-1/2 md:hidden ${useDarkNavStyle ? "text-white hover:bg-white/20 hover:text-white" : ""}`}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,320px)] sm:w-[360px]">
              <div className="mt-8 flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className="justify-start text-base uppercase tracking-[0.15em] sm:text-lg"
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 