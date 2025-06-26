"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Phone, Bot, MessageSquare } from "lucide-react"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant for Wyte Image Media. I can help you with information about our services, pricing, previous work, or anything else you'd like to know. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("whatsapp") || input.includes("chat") || input.includes("call")) {
      return "I'd be happy to connect you with our team on WhatsApp for more personalized assistance! Click the WhatsApp button below to start a direct conversation with our experts."
    }

    if (input.includes("service") || input.includes("what do you do")) {
      return "We offer 5 main services: Event Management & Hospitality, Hotel Reservations, Profile Magazine publishing, Nigeria Golden Hearts Awards, and Branding & Customizing. Which service would you like to know more about?"
    }

    if (input.includes("event") || input.includes("planning")) {
      return "Our Event Management service includes corporate events, conferences, weddings, and VIP hospitality. We handle everything from venue selection to on-site execution. We've successfully managed over 500 events globally from our UK base!"
    }

    if (input.includes("hotel") || input.includes("accommodation")) {
      return "We provide premium hotel reservation services including luxury bookings, group reservations, corporate travel packages, and concierge services. We work with top hotels across the UK, Europe, and Africa to ensure comfort and luxury."
    }

    if (input.includes("magazine") || input.includes("publication")) {
      return "Profile Magazine is Africa's premier lifestyle and business publication. We showcase success stories, trends, and influential personalities across the continent with over 50,000 readers. We offer both digital and print publishing from our UK headquarters."
    }

    if (input.includes("award") || input.includes("golden hearts")) {
      return "The Nigeria Golden Hearts Awards celebrate excellence in business, entertainment, and humanitarian efforts. We organize award ceremonies, manage nominations, and provide full media coverage for recognition programs."
    }

    if (input.includes("branding") || input.includes("design")) {
      return "Our Branding & Customizing service includes brand identity design, logo creation, marketing materials, digital branding, and brand strategy consulting. We've helped over 200 brands stand out in competitive markets."
    }

    if (input.includes("price") || input.includes("cost") || input.includes("budget")) {
      return "Our pricing varies based on the scope and complexity of each project. We offer customized packages to fit different budgets. Would you like me to connect you with our team for a detailed quote via WhatsApp?"
    }

    if (input.includes("contact") || input.includes("reach") || input.includes("phone")) {
      return "You can reach us at +44 7733 657 865 (UK) or +234 806 348 5272 (Nigeria), or email wyteimagemedia@mail.co.uk. We're based in the United Kingdom with operations across Africa. We're also available on WhatsApp for quick consultations."
    }

    if (input.includes("location") || input.includes("where")) {
      return "We're based in the United Kingdom, England, with operations across Africa. Our UK headquarters allows us to serve clients globally. Our business hours are Mon-Fri: 9:00 AM - 6:00 PM GMT, Sat: 10:00 AM - 4:00 PM GMT."
    }

    if (input.includes("experience") || input.includes("how long")) {
      return "We have over 10 years of experience in the industry. We've managed 500+ successful events, serve 50,000+ magazine readers, recognized 100+ award recipients, and helped 200+ brands with their identity."
    }

    if (input.includes("portfolio") || input.includes("work") || input.includes("projects")) {
      return "We've worked on amazing projects like the Lagos Business Summit 2023, Profile Magazine features, Golden Hearts Awards ceremonies, Women Inspiring Women conference, and complete brand makeovers for major companies. You can see our portfolio on the website!"
    }

    return "That's a great question! I'd be happy to help you with more specific information. You can also speak directly with our team via WhatsApp for personalized assistance. What specific aspect of our services would you like to know more about?"
  }

  const handleWhatsAppRedirect = () => {
    const whatsappNumber = "+447733657865"
    const message =
      "Hello! I'm interested in learning more about Wyte Image Media's services. I was chatting with your AI assistant and would like to speak with a human representative."
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open chat assistant"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-2xl border-green-200">
          <CardHeader className="bg-green-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot size={20} />
                <CardTitle className="text-lg">Wyte Image AI Assistant</CardTitle>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleWhatsAppRedirect}
                  className="text-white hover:bg-green-700 p-1"
                  title="Chat on WhatsApp"
                >
                  <Phone size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-700 p-1"
                  title="Close chat"
                >
                  <X size={16} />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-[400px]">
            {/* Messages */}
            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser ? "bg-green-600 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              {/* Invisible div to scroll to */}
              <div ref={messagesEndRef} />
            </div>

            {/* WhatsApp Transfer Button */}
            <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
              <Button
                onClick={handleWhatsAppRedirect}
                variant="outline"
                size="sm"
                className="w-full text-green-600 border-green-600 hover:bg-green-50 text-xs"
              >
                <MessageSquare size={14} className="mr-2" />
                Continue on WhatsApp
              </Button>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything about our services..."
                  onKeyPress={handleKeyPress}
                  className="flex-1 text-sm"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                  disabled={!inputMessage.trim() || isTyping}
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
