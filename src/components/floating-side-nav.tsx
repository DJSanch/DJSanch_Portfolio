"use client"

import { useEffect, useState } from "react"
import { MoveUpRight } from "lucide-react"

export function FloatingSideNav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 280)
    updateVisibility()
    window.addEventListener("scroll", updateVisibility, { passive: true })
    return () => window.removeEventListener("scroll", updateVisibility)
  }, [])

  return (
    <nav className={`floating-side-nav${visible ? " is-visible" : ""}`} aria-label="Quick navigation" aria-hidden={!visible}>
      <a href="#work" tabIndex={visible ? 0 : -1}>Work</a>
      <a href="#about" tabIndex={visible ? 0 : -1}>About</a>
      <a href="#contact" tabIndex={visible ? 0 : -1}>Contact</a>
      <a className="floating-side-nav-cta" href="mailto:contact@djsanch.com" aria-label="Let's talk" tabIndex={visible ? 0 : -1}><MoveUpRight size={14} /></a>
    </nav>
  )
}
