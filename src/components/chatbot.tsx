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
      text: "Hi! You can ask me anything you want to learn about Daniel regarding his specialties!",
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
      return "Hello! You can ask me anything you want to learn about Daniel regarding his specialties! I can help with information about his development projects, networking expertise, certifications, work experience, and more. What would you like to know?"
    }

    // Goldenville specific
    if (message.match(/(goldenville)/)) {
      return "Daniel works as a Backend Developer at Goldenville (2025 - Present). He leads the development of enterprise web applications using React, Node.js, and AWS. Goldenville is one of his current professional roles where he applies his full-stack development expertise to build scalable and robust web solutions."
    }

    // Projects - general
    if (message.match(/(project|projects|built|created|developed)/)) {
      return "Daniel has worked on several impressive projects! Some of his featured projects include:\n• Inventory Management System - A robust system for tracking stock, sales, and suppliers\n• Chat Application - Real-time chat with authentication\n• JS Aromatoc - Modern e-commerce website\n• RiceProTech - Rice Leaf Disease Classification Mobile App\n• CrackVision - Concrete crack severity classification\n• Envirotech - Inventory Management System\n\nYou can view all his projects in the Projects section of this portfolio!"
    }

    // Specific projects
    if (message.match(/(inventory management|inventory system)/)) {
      return "Daniel built an Inventory Management System - a robust system for tracking stock, sales, and suppliers. It features real-time inventory updates, reporting, and user roles. Built with React, Next.js, Python, SQLite, and Tailwind CSS. You can view it in the Projects section!"
    }

    if (message.match(/(chat application|chat app)/)) {
      return "Daniel created a real-time Chat Application with user authentication and message history. Built with React, Firebase, Socket.io, Node.js, and Tailwind CSS. You can view it in the Projects section!"
    }

    if (message.match(/(js aromatoc|aromatoc)/)) {
      return "JS Aromatoc is a modern e-commerce website Daniel built, featuring product listings, shopping cart functionality, and secure checkout process. Built with Next.js, TypeScript, Tailwind CSS, Stripe, and MongoDB. You can view it in the Projects section!"
    }

    if (message.match(/(riceprotech|rice pro tech)/)) {
      return "RiceProTech is a Rice Leaf Disease Classification Mobile App that Daniel developed using React Native, Python, SQLite, Google Colab, and TensorFlow. You can view more details in the Projects section!"
    }

    if (message.match(/(crackvision|crack vision)/)) {
      return "CrackVision is a multiclass image classification model that can classify the severity of concrete crack images. Built with Python, TensorFlow, Next.js, and TypeScript. You can view more details in the Projects section!"
    }

    if (message.match(/(envirotech|enviro tech)/)) {
      return "Envirotech is an Inventory Management System that Daniel developed for Envirotech. Built with React, Node.js, MongoDB, and includes data visualization features. You can view it in the Projects section!"
    }

    // Work experience
    if (message.match(/(experience|job|position|role|company|employer)/)) {
      return "Daniel has work experience at:\n• Goldenville - Backend Developer (2025 - Present) - Leading development of enterprise web applications using React, Node.js, and AWS\n• JS Aromatoc - Frontend Developer (2024 - Present) - Built responsive user interfaces and implemented modern design systems\n• Envirotech - Backend Developer (2024 - 2025) - Developed and maintained web applications using JavaScript and Python\n\nYou can view more details in the About section!"
    }

    // Development skills/technologies
    if (message.match(/(development|developer|programming|coding|tech stack|technologies|skills|react|next.js|node.js|python|javascript|typescript)/)) {
      return "Daniel is a Full Stack Developer with expertise in:\n• Frontend: React, Next.js, TypeScript, Tailwind CSS\n• Backend: Node.js, Python, JavaScript\n• Databases: MongoDB, SQLite\n• Cloud: AWS\n• Mobile: React Native\n• Other: Firebase, Socket.io, TensorFlow, Machine Learning\n\nHe has experience building web applications, mobile apps, and enterprise solutions!"
    }

    // Networking/Network - ALWAYS respond about CCNA (high priority)
    if (message.match(/(network|networking)/)) {
      return "Daniel Sanchez is a Cisco Certified Network Associate (CCNA)! This is a professional-level certification from Cisco Systems that validates his knowledge and skills in networking fundamentals, network access, IP connectivity, IP services, security fundamentals, automation, and programmability.\n\nThe CCNA certification covers:\n• Network fundamentals and architecture\n• Network access (switching, VLANs, STP)\n• IP connectivity (routing, OSPF, EIGRP)\n• IP services (NAT, DHCP, NTP, QoS)\n• Security fundamentals (ACLs, VPNs, wireless security)\n• Automation and programmability (network automation, REST APIs, JSON)\n\nYou can view his CCNA certificate in the Certifications section of this portfolio. The certificate was issued by Cisco and demonstrates his expertise in network technologies."
    }

    // CCNA specific questions
    if (message.match(/(ccna|cisco certified network associate)/)) {
      return "Daniel Sanchez is a Cisco Certified Network Associate (CCNA)! This is a professional-level certification from Cisco Systems that validates his knowledge and skills in networking fundamentals, network access, IP connectivity, IP services, security fundamentals, automation, and programmability.\n\nThe CCNA certification covers:\n• Network fundamentals and architecture\n• Network access (switching, VLANs, STP)\n• IP connectivity (routing, OSPF, EIGRP)\n• IP services (NAT, DHCP, NTP, QoS)\n• Security fundamentals (ACLs, VPNs, wireless security)\n• Automation and programmability (network automation, REST APIs, JSON)\n\nYou can view his CCNA certificate in the Certifications section of this portfolio. The certificate was issued by Cisco and demonstrates his expertise in network technologies."
    }

    // Cisco specific
    if (message.match(/(cisco|cisco systems)/)) {
      return "Daniel is certified by Cisco Systems, a leading networking technology company. He holds the CCNA (Cisco Certified Network Associate) certification, which is a professional-level certification that validates networking knowledge and skills. Cisco certifications are highly respected in the IT industry and demonstrate expertise in network infrastructure.\n\nYou can view his CCNA certificate in the Certifications section of this portfolio!"
    }

    // Certifications (general) - mention CCNA
    if (message.match(/(certification|certificate|cert)/) && !message.match(/(ccna|cisco|network|networking)/)) {
      return "Daniel has professional certifications! He holds the CCNA (Cisco Certified Network Associate) certification from Cisco Systems, as well as certifications from Coursera and LinkedIn Learning. You can view all his certifications in the Certifications section of this portfolio!"
    }

    // About Daniel (general)
    if (message.match(/(who|what).*(daniel|he)/) || message.includes("about")) {
      return "Daniel Sanchez is a Full Stack Developer and Network Engineer with expertise in both software development and networking technologies. He works as a Backend Developer at Goldenville, has built multiple projects including web applications and mobile apps, and holds the CCNA certification from Cisco Systems. You can learn more about his projects, work experience, and certifications throughout this portfolio!"
    }

    // Skills (general)
    if (message.match(/(skill|technology|tech|expertise|knowledge)/) && !message.match(/(network|networking|ccna|cisco)/)) {
      return "Daniel's skills span both development and networking:\n\nDevelopment:\n• React, Next.js, TypeScript, Node.js, Python\n• Frontend and Backend development\n• Mobile app development (React Native)\n• Machine Learning and AI\n\nNetworking:\n• Network fundamentals and architecture\n• Routing and switching\n• Network security\n• Cisco technologies\n\nThese skills are demonstrated through his projects and CCNA certification!"
    }

    // Contact
    if (message.match(/(contact|email|reach|connect|linkedin|github|social)/)) {
      return "You can reach Daniel through:\n• Email: contact@djsanch.com\n• LinkedIn: linkedin.com/in/daniel-sanchez-8110b2252\n• GitHub: github.com/djsanch\nYou can also use the contact form on this portfolio!"
    }

    // Resume
    if (message.match(/(resume|cv|download|pdf)/)) {
      return "You can download Daniel's resume by clicking the 'Download Resume' button in the hero section at the top of the page!"
    }

    // View certificate
    if (message.match(/(view|see|show|display|where).*(certificate|cert)/)) {
      return "You can view Daniel's certifications in the Certifications section of this portfolio! Look for the 'Cisco Certifications' section at the top, where you'll find his CCNA certification. You can also see his Coursera and LinkedIn Learning certifications. Click on them to view the full PDF certificates."
    }

    // Default responses
    if (message.match(/(help|what can you|how can you)/)) {
      return "I can help you learn about:\n• Daniel's development projects (Goldenville, JS Aromatoc, Inventory Management, Chat App, RiceProTech, CrackVision, Envirotech)\n• His work experience and roles\n• Networking expertise and CCNA certification\n• Development skills and technologies\n• How to view his projects and certificates\n• How to contact him\n\nJust ask me anything about Daniel's specialties!"
    }

    // Fallback
    return "That's an interesting question! I can help you learn about Daniel's specialties including his development projects (like his work at Goldenville), networking expertise, CCNA certification, work experience, and more. Feel free to ask about any of these topics!"
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
          "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          isOpen && "hidden"
        )}
        size="icon"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="sr-only">Open chat</span>
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 flex h-[100vh] sm:h-[600px] w-full sm:w-[400px] md:w-[450px] flex-col shadow-2xl border-2 sm:rounded-lg rounded-t-lg sm:rounded-b-lg">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-3 sm:p-4 bg-primary/5">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base truncate">Portfolio Assistant</h3>
                <p className="text-xs text-muted-foreground hidden sm:block">Ask about Daniel's specialties!</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 sm:h-8 sm:w-8 shrink-0"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-2 sm:gap-3",
                  message.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.sender === "bot" && (
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[85%] sm:max-w-[80%] rounded-lg px-3 py-2 sm:px-4 sm:py-2",
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  <p className="text-xs sm:text-sm whitespace-pre-line break-words">{message.text}</p>
                  <p className="mt-1 text-[10px] sm:text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                {message.sender === "user" && (
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                    <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-3 sm:p-4 bg-background">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 text-sm sm:text-base"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                size="icon"
                className="h-9 w-9 sm:h-10 sm:w-10 shrink-0"
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

