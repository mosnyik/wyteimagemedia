"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Navigation } from "@/components/navigation"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@wyteimage.com", "events@wyteimage.com"],
      description: "Get in touch for event planning inquiries",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+44 20 7946 0958", "+234 803 123 4567"],
      description: "Speak directly with our event specialists",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["London, United Kingdom", "Lagos, Nigeria"],
      description: "Our offices are open for consultations",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "We're here when you need us",
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="down" duration={800}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Let's Create Something
              <span className="text-primary block">Extraordinary Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your vision into an unforgettable event? Get in touch with our expert team and let's
              start planning your next big moment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left" duration={800}>
              <Card className="border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                          Event Type
                        </label>
                        <Input
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Wedding, Corporate, Awards..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full"
                        placeholder="Tell us about your event vision, budget, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full animate-pulse-glow">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={info.title} direction="right" delay={index * 150} duration={600}>
                  <Card className="border-border/50 hover:border-primary/50 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-foreground font-medium">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" duration={800}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Start Planning?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              From intimate gatherings to grand celebrations, we're here to make your event dreams come true.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                View Our Portfolio
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
