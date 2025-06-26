"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Globe, Star, Award, Target, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Background3D } from "@/components/background-3d"
import { AIChatAssistant } from "@/components/ai-chat-assistant"

export default function AboutPage() {
  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering results that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for what we do drives us to create extraordinary experiences and lasting memories.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their vision becomes reality.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace new technologies and creative approaches to stay ahead of industry trends.",
    },
  ]

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "500+", label: "Successful Events" },
    { number: "50K+", label: "Magazine Readers" },
    { number: "200+", label: "Happy Clients" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white to-gray-50">
        <Background3D />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent leading-tight">
              About Wyte Image Media
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
              Defining excellence across Africa through premium experiences, innovative storytelling, and exceptional
              service. Based in the United Kingdom, serving clients globally.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Wyte Image Media was born from a vision to elevate Africa's premium lifestyle and business landscape.
                Based in the United Kingdom, we recognized the need for a company that could seamlessly blend
                exceptional event management, luxury hospitality services, compelling storytelling, and innovative
                branding solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From our UK headquarters to our operations across Africa, we have consistently delivered excellence that
                has earned us the trust of discerning clients across continents. Our journey is marked by countless
                successful events, award-winning publications, and brands that have flourished under our guidance.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Users className="text-green-600 mr-2" size={20} />
                  <span className="text-gray-600">Expert Team</span>
                </div>
                <div className="flex items-center">
                  <Globe className="text-orange-600 mr-2" size={20} />
                  <span className="text-gray-600">Global Reach</span>
                </div>
                <div className="flex items-center">
                  <Award className="text-green-600 mr-2" size={20} />
                  <span className="text-gray-600">Award-Winning</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To elevate Africa's premium experiences by delivering exceptional event management, luxury
                  hospitality, compelling storytelling, and innovative branding solutions that exceed expectations and
                  create lasting impact from our UK base.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the premier lifestyle and business excellence company connecting Africa with the world,
                  recognized for our innovation, quality, and commitment to showcasing the best of African talent and
                  achievement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
              Our Impact in Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 group-hover:bg-orange-100 transition-colors duration-300 flex items-center justify-center">
                      <value.icon
                        size={32}
                        className="text-green-600 group-hover:text-orange-600 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let's create something extraordinary together. Discover how we can elevate your brand and exceed your
            expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 transition-colors duration-300"
              >
                Get In Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-700 hover:bg-green-50 text-lg px-8 py-4"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatAssistant />
    </div>
  )
}
