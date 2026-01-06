import Navigation from "./navigation"
import Chatbot from "./chatbot"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Chatbot />
    </div>
  )
}

export default Layout 