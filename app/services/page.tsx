"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Hotel, BookOpen, Award, Palette, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Background3D } from "@/components/background-3d"
import { PortfolioSection } from "@/components/portfolio-section"
import { AIChatAssistant } from "@/components/ai-chat-assistant"

export default function ServicesPage() {
  const services = [
    {
      icon: Calendar,
      title: "Event Management & Hospitality",
      description:
        "Creating unforgettable experiences with meticulous planning and flawless execution for corporate events, conferences, and special occasions.",
      features: [
        "Corporate Event Planning",
        "Conference Management",
        "Wedding & Social Events",
        "VIP Hospitality Services",
        "Venue Selection & Management",
      ],
      href: "/services/event-management",
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description:
        "Premium accommodation booking services ensuring comfort and luxury for your business travels and event attendees.",
      features: [
        "Luxury Hotel Bookings",
        "Group Reservations",
        "Corporate Travel Packages",
        "Event Accommodation",
        "Concierge Services",
      ],
      href: "/services/hotel-reservations",
    },
    {
      icon: BookOpen,
      title: "Profile Magazine",
      description:
        "Africa's premier lifestyle and business publication showcasing success stories, trends, and influential personalities across the continent.",
      features: [
        "Digital & Print Publishing",
        "Feature Articles",
        "Business Profiles",
        "Lifestyle Content",
        "Pan-African Coverage",
      ],
      href: "/services/profile-magazine",
    },
    {
      icon: Award,
      title: "Nigeria Golden Hearts Awards",
      description:
        "Celebrating excellence and recognizing outstanding achievements in business, entertainment, and humanitarian efforts across Nigeria.",
      features: ["Award Ceremonies", "Nomination Process", "Recognition Programs", "Gala Events", "Media Coverage"],
      href: "/services/golden-hearts-awards",
    },
    {
      icon: Palette,
      title: "Branding & Customizing",
      description:
        "Comprehensive brand identity solutions from logo design to complete brand strategy, helping businesses stand out in competitive markets.",
      features: [
        "Brand Identity Design",
        "Logo & Visual Identity",
        "Marketing Materials",
        "Digital Branding",
        "Brand Strategy Consulting",
      ],
      href: "/services/branding",
    },
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
              Our Premium Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
              Comprehensive solutions that transform visions into reality, delivering excellence across every touchpoint
              of your brand experience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-green-100 group-hover:bg-orange-100 transition-colors duration-300 flex items-center justify-center">
                      <service.icon
                        size={32}
                        className="text-green-600 group-hover:text-orange-600 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle size={16} className="text-green-600 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={service.href}>
                    <Button className="bg-green-600 hover:bg-green-700 text-white w-full transition-colors duration-300">
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can elevate your brand and create extraordinary experiences together.
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
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-700 hover:bg-green-50 text-lg px-8 py-4"
              >
                Learn About Us
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
