"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, BookOpen, Award, Palette, Hotel, Users } from "lucide-react"
import Link from "next/link"

export function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "Lagos Business Summit 2023",
      category: "Event Management",
      image: "/images/event-1.png",
      description: "A prestigious 3-day business summit hosting 500+ executives from across West Africa.",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      id: 2,
      title: "Profile Magazine Issue #45",
      category: "Publishing",
      image: "/images/magazine-1.png",
      description: "Featuring Nigeria's top 50 entrepreneurs and their inspiring success stories.",
      icon: BookOpen,
      color: "text-orange-600",
    },
    {
      id: 3,
      title: "Golden Hearts Awards 2023",
      category: "Awards Ceremony",
      image: "/images/awards-1.png",
      description: "Annual gala recognizing outstanding achievements in business and humanitarian efforts.",
      icon: Award,
      color: "text-green-600",
    },
    {
      id: 4,
      title: "Women Inspiring Women 2023",
      category: "Conference",
      image: "/images/women-inspiring-women.png",
      description: "Empowering conference celebrating female leadership and entrepreneurship across Africa.",
      icon: Users,
      color: "text-green-600",
    },
    {
      id: 5,
      title: "TechCorp Brand Identity",
      category: "Branding",
      image: "/images/branding-1.png",
      description: "Complete brand overhaul for a leading technology company in Nigeria.",
      icon: Palette,
      color: "text-orange-600",
    },
    {
      id: 6,
      title: "Abuja International Conference",
      category: "Event Management",
      image: "/images/event-2.png",
      description: "Multi-day international conference with delegates from 15 African countries.",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      id: 7,
      title: "Luxury Hotel Partnership",
      category: "Hospitality",
      image: "/images/hotel-1.png",
      description: "Exclusive partnership with premium hotels across major African cities.",
      icon: Hotel,
      color: "text-orange-600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent projects and see how we've helped clients achieve extraordinary results
            across Africa and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.id === 1 ? "lagos-business-summit" : item.id === 2 ? "profile-magazine-45" : item.id === 3 ? "golden-hearts-awards-2023" : item.id === 4 ? "women-inspiring-women-2023" : item.id === 5 ? "techcorp-brand-identity" : item.id === 6 ? "abuja-international-conference" : "luxury-hotel-partnership"}`}
            >
              <Card className="bg-white border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 group overflow-hidden cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-12 h-12 rounded-full bg-green-100 group-hover:bg-orange-100 transition-colors duration-300 flex items-center justify-center flex-shrink-0 ml-2">
                      <item.icon
                        size={20}
                        className={`${item.color} group-hover:text-orange-600 transition-colors duration-300`}
                      />
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex items-center text-green-600 group-hover:text-orange-600 transition-colors">
                    <span className="text-sm font-medium">View Full Case Study</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              View All Our Work
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
