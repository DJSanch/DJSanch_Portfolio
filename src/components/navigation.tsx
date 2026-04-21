"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    if (!isHomePage) {
      setIsHeroVisible(false)
      return
    }

    const heroSection = document.getElementById("home")
    if (!heroSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2,
      }
    )

    observer.observe(heroSection)

    return () => observer.disconnect()
  }, [isHomePage])

  const scrollToSection = (sectionId: string) => {
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

  const useHeroStyle = isHomePage && isHeroVisible

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useHeroStyle
          ? "bg-transparent border-b border-transparent"
          : "bg-background/85 backdrop-blur-md border-b shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("home")}
            className={`flex items-center gap-3 hover:opacity-80 transition-colors cursor-pointer ${
              useHeroStyle ? "text-white" : "text-foreground"
            }`}
          >
            <Image 
              src="/favicon.ico" 
              alt="DJSanch Logo" 
              width={40} 
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold">Daniel Sanchez</span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredNavItem(item.id)}
                onMouseLeave={() => setHoveredNavItem(null)}
                onFocus={() => setHoveredNavItem(item.id)}
                onBlur={() => setHoveredNavItem(null)}
                className={`group relative transition-all duration-300 ease-out ${
                  hoveredNavItem === item.id
                    ? "scale-110 opacity-100"
                    : hoveredNavItem
                      ? "scale-95 opacity-40"
                      : "scale-100 opacity-100"
                } ${
                  useHeroStyle
                    ? "text-white hover:bg-transparent hover:text-white"
                    : "hover:bg-transparent"
                }`}
              >
                <span
                  className={`relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out ${
                    useHeroStyle ? "after:bg-white" : "after:bg-foreground"
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

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${useHeroStyle ? "text-white hover:bg-white/20 hover:text-white" : ""}`}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className="justify-start text-lg"
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