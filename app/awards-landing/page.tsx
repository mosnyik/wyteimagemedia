"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Award, Calendar, MapPin, Mail, Phone, Users, ArrowRight, Trophy, Crown, Sparkles } from "lucide-react"
import Link from "next/link"
import { Background3D } from "@/components/background-3d"

export default function AwardsLandingPage() {
  const [showContent, setShowContent] = useState(false)
  const [nominationForm, setNominationForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    nominee: "",
    description: "",
  })

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNominationForm({
      ...nominationForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Thank you for your nomination! We'll be in touch soon.")
  }

  const categories = [
    "Business Excellence",
    "Humanitarian Service",
    "Entertainment & Arts",
    "Community Leadership",
    "Innovation & Technology",
    "Youth Achievement",
    "Lifetime Achievement",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-yellow-700 text-white overflow-hidden relative">
      <Background3D />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>

        <div
          className={`container mx-auto px-4 text-center z-20 transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-5xl mx-auto">
            {/* Logo */}
            <div className="mb-8">
              <img src="/logo.png" alt="Wyte Image Media" className="h-16 w-auto mx-auto mb-4" />
              <p className="text-xl font-light tracking-wider text-yellow-300">PRESENTS</p>
            </div>

            {/* Main Title */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent leading-tight">
                NIGERIA GOLDEN
                <span className="block">HEART AWARDS</span>
                <span className="block text-3xl md:text-5xl">INTERNATIONAL 2025</span>
              </h1>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-px bg-yellow-400 w-16"></div>
                <p className="text-lg md:text-xl text-yellow-200 font-light">
                  9TH UNVEILING OF PROFILE MAGAZINE 7TH EDITION
                </p>
                <div className="h-px bg-yellow-400 w-16"></div>
              </div>
            </div>

            {/* Location & Flag */}
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <MapPin className="text-yellow-400" size={24} />
                <span className="text-xl md:text-2xl font-semibold">LIVE IN UNITED KINGDOM, ENGLAND</span>
                <div className="w-8 h-6 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded-sm shadow-lg"></div>
              </div>
            </div>

            {/* Event Theme */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="text-yellow-400 mr-3" size={32} />
                <span className="text-lg text-yellow-300 font-light italic">Event Theme</span>
                <Trophy className="text-yellow-400 ml-3" size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                CELEBRATING THE GIANT
                <span className="block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  STRIDES
                </span>
                <span className="block">OF UNSUNG HEROES</span>
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105"
              >
                <Award className="mr-2" size={20} />
                Submit Nomination
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-4 transition-all duration-300"
              >
                <Calendar className="mr-2" size={20} />
                Event Details
              </Button>
              <Link href="/">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10 text-lg px-8 py-4 transition-all duration-300"
                >
                  Visit Main Website
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">9th</div>
                <div className="text-sm text-gray-300">Edition</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">2025</div>
                <div className="text-sm text-gray-300">Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">UK</div>
                <div className="text-sm text-gray-300">Location</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">7+</div>
                <div className="text-sm text-gray-300">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              About The Awards
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The Nigeria Golden Heart Awards International celebrates the extraordinary achievements of individuals who
              have made significant contributions to society, business, and humanity. This prestigious event recognizes
              the unsung heroes whose giant strides continue to inspire and transform communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Crown className="text-yellow-400 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Prestigious Recognition</h3>
                <p className="text-gray-300 leading-relaxed">
                  Honoring excellence across multiple categories including business, humanitarian service,
                  entertainment, and community leadership.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="text-yellow-400 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Global Platform</h3>
                <p className="text-gray-300 leading-relaxed">
                  Broadcasting live from the United Kingdom, connecting Nigerian excellence with international
                  recognition and global audiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Sparkles className="text-yellow-400 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Magazine Feature</h3>
                <p className="text-gray-300 leading-relaxed">
                  Winners and nominees featured in the 7th edition of Profile Magazine, Africa's premier lifestyle and
                  business publication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nomination Form Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/80 to-yellow-800/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Submit Your Nomination
              </h2>
              <p className="text-xl text-gray-300">
                Know someone who deserves recognition? Nominate them for the Nigeria Golden Heart Awards 2025.
              </p>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-yellow-300 font-semibold mb-2">Your Name *</label>
                      <Input
                        name="name"
                        value={nominationForm.name}
                        onChange={handleInputChange}
                        className="bg-white/20 border-yellow-400/50 text-white placeholder-gray-400"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-yellow-300 font-semibold mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={nominationForm.email}
                        onChange={handleInputChange}
                        className="bg-white/20 border-yellow-400/50 text-white placeholder-gray-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-yellow-300 font-semibold mb-2">Phone Number</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={nominationForm.phone}
                        onChange={handleInputChange}
                        className="bg-white/20 border-yellow-400/50 text-white placeholder-gray-400"
                        placeholder="+44 7733 657 865"
                      />
                    </div>
                    <div>
                      <label className="block text-yellow-300 font-semibold mb-2">Award Category *</label>
                      <select
                        name="category"
                        value={nominationForm.category}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white/20 border border-yellow-400/50 rounded-md text-white"
                        required
                      >
                        <option value="" className="text-black">
                          Select a category
                        </option>
                        {categories.map((category) => (
                          <option key={category} value={category} className="text-black">
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-yellow-300 font-semibold mb-2">Nominee Name *</label>
                    <Input
                      name="nominee"
                      value={nominationForm.nominee}
                      onChange={handleInputChange}
                      className="bg-white/20 border-yellow-400/50 text-white placeholder-gray-400"
                      placeholder="Full name of the person you're nominating"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-yellow-300 font-semibold mb-2">
                      Why do they deserve this award? *
                    </label>
                    <Textarea
                      name="description"
                      value={nominationForm.description}
                      onChange={handleInputChange}
                      className="bg-white/20 border-yellow-400/50 text-white placeholder-gray-400"
                      rows={5}
                      placeholder="Tell us about their achievements, contributions, and why they deserve recognition..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-4 transition-all duration-300 transform hover:scale-105"
                  >
                    <Award className="mr-2" size={20} />
                    Submit Nomination
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8 text-yellow-300">Get In Touch</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <Mail className="text-yellow-400 mr-3" size={24} />
              <span className="text-lg">wyteimagemedia@mail.co.uk</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-yellow-400 mr-3" size={24} />
              <span className="text-lg">+44 7733 657 865</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-yellow-400 mr-3" size={24} />
              <span className="text-lg">+234 806 348 5272</span>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-4 transition-all duration-300"
              >
                Explore Wyte Image Media
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
