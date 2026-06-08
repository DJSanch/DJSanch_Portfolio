"use client"

import { usePathname } from "next/navigation"
import Navigation from "./navigation"
import Chatbot from "./chatbot"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <div className={`min-h-screen ${isHomePage ? "bg-[#0a1220]" : "bg-background"}`}>
      <Navigation />
      <main className={isHomePage ? "" : "pt-16"}>
        {children}
      </main>
      <Chatbot />
    </div>
  )
}

export default Layout 