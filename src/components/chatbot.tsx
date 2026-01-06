"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to help you learn more about Daniel's portfolio. Feel free to ask me anything!",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim()

    // Greetings
    if (message.match(/^(hi|hello|hey|greetings)/)) {
      return "Hello! How can I help you learn more about Daniel's portfolio today?"
    }

    // About Daniel
    if (message.match(/(who|what).*(daniel|he|developer)/) || message.includes("about")) {
      return "Daniel Sanchez is a Full Stack Developer & Software Engineer with 3+ years of experience. He specializes in React, Next.js, TypeScript, Node.js, Python, SQL, AWS, and Docker. He's passionate about creating innovative web applications and solving complex problems."
    }

    // Skills/Technologies
    if (message.match(/(skill|technology|tech|stack|language|framework)/)) {
      return "Daniel's key skills include: React, Next.js, TypeScript, Node.js, Python, SQL, AWS, and Docker. He has experience with 15+ technologies and has completed 20+ projects."
    }

    // Projects
    if (message.match(/(project|work|portfolio|build|created)/)) {
      return "Daniel has completed 20+ projects! You can check out some of his featured projects on this portfolio, including RiceProTech, EnviroTech, CrackVision, and more. Each project showcases different aspects of his full-stack development skills."
    }

    // Experience
    if (message.match(/(experience|year|how long|background)/)) {
      return "Daniel has 3+ years of experience in full-stack development. He's worked on various projects ranging from web applications to complex software solutions."
    }

    // Contact
    if (message.match(/(contact|email|reach|connect|linkedin|github|social)/)) {
      return "You can reach Daniel through:\n• Email: contact@djsanch.com\n• LinkedIn: linkedin.com/in/daniel-sanchez-8110b2252\n• GitHub: github.com/djsanch\nYou can also use the contact form on this portfolio!"
    }

    // Resume
    if (message.match(/(resume|cv|download|pdf)/)) {
      return "You can download Daniel's resume by clicking the 'Download Resume' button in the hero section at the top of the page!"
    }

    // Location
    if (message.match(/(where|location|based|live|remote)/)) {
      return "Daniel works remotely and is available for remote opportunities worldwide."
    }

    // Certifications
    if (message.match(/(certification|certificate|cert|qualification)/)) {
      return "Daniel has multiple certifications! You can view them in the Certifications section of this portfolio. He has 51 certification files including PDFs and images."
    }

    // Events
    if (message.match(/(event|conference|research|paper|presentation)/)) {
      return "Daniel has participated in events and conferences. Check out the Events section to see his research papers and presentations, including his ICSTE 2025 Research Paper!"
    }

    // Default responses
    if (message.match(/(help|what can you|how can you)/)) {
      return "I can help you learn about:\n• Daniel's background and experience\n• His skills and technologies\n• His projects\n• How to contact him\n• His certifications and events\n\nJust ask me anything!"
    }

    // Fallback
    return "That's an interesting question! While I'm still learning, I can help you with information about Daniel's skills, projects, experience, and how to contact him. Feel free to ask about any of those topics!"
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          isOpen && "hidden"
        )}
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Open chat</span>
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 flex h-[600px] w-[400px] flex-col shadow-2xl border-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4 bg-primary/5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Portfolio Assistant</h3>
                <p className="text-xs text-muted-foreground">Ask me anything!</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.sender === "bot" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg px-4 py-2",
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="mt-1 text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                {message.sender === "user" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                size="icon"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}

export default Chatbot

