"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Award, BookOpen, Calendar, Camera } from "lucide-react"

export function ProductsIntro() {
  const products = [
    {
      icon: Award,
      title: "Nigeria Golden Heart Awards",
      description: "International awards ceremony celebrating excellence across various industries and communities.",
      color: "text-yellow-500",
    },
    {
      icon: BookOpen,
      title: "Profile Africa Magazine",
      description: "Premium publication showcasing African excellence, culture, and inspiring success stories.",
      color: "text-blue-500",
    },
    {
      icon: Calendar,
      title: "Corporate Events",
      description: "Bespoke event planning and management for conferences, launches, and celebrations.",
      color: "text-green-500",
    },
    {
      icon: Camera,
      title: "Media Production",
      description: "Professional photography, videography, and content creation for all your events.",
      color: "text-purple-500",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Products & Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for events, publishing, and media production that exceed expectations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.title} direction="up" delay={0.3 + index * 0.1}>
              <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <product.icon className={`h-12 w-12 ${product.color} mb-4`} />
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
