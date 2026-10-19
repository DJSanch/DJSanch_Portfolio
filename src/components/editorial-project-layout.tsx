"use client"

import Image from "next/image"
import Link from "next/link"
import { MoveUpRight } from "lucide-react"
import Chatbot from "@/components/chatbot"

interface EditorialProjectLayoutProps {
  children: React.ReactNode
}

export function EditorialProjectLayout({ children }: EditorialProjectLayoutProps) {
  return (
    <div className="portfolio-project-site">
      <header className="portfolio-nav">
        <Link className="monogram" href="/" aria-label="Daniel Sanchez home"><Image src="/2.svg" alt="Daniel Sanchez" width={44} height={44} priority /></Link>
        <nav aria-label="Main navigation">
          <Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link>
          <a className="nav-cta" href="mailto:contact@djsanch.com">Let&apos;s talk <MoveUpRight size={14} /></a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="portfolio-footer"><span>© {new Date().getFullYear()} Daniel Sanchez</span><span>Designed with intention · Built for the web</span><div><a href="https://github.com/djsanch" aria-label="GitHub">GH</a><a href="https://linkedin.com/in/daniel-sanchez-8110b2252" aria-label="LinkedIn">IN</a></div></footer>
      <Chatbot />
    </div>
  )
}
