"use client"

import { useState, useEffect } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function EventsMagazinesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      type: "event",
      title: "Nigeria Golden Heart Awards 2023",
      description:
        "A spectacular celebration of excellence featuring over 500 distinguished guests and international recognition.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      type: "magazine",
      title: "Profile Africa Magazine - Leadership Edition",
      description: "Featuring inspiring stories of African leaders making global impact across various industries.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      type: "event",
      title: "Corporate Excellence Gala 2023",
      description: "An exclusive evening celebrating corporate achievements and fostering business networking.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      type: "magazine",
      title: "Profile Africa - Innovation Special",
      description: "Showcasing groundbreaking innovations and technological advances from across the continent.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      type: "event",
      title: "Cultural Heritage Festival",
      description: "A vibrant celebration of African culture, arts, and traditions with international participation.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Recent Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our latest events and magazine publications that showcase our commitment to excellence.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="relative">
            {/* Main Slider */}
            <div className="relative overflow-hidden rounded-2xl bg-muted/30">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                      <div className="space-y-6 flex flex-col justify-center">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary w-fit">
                          {slide.type === "event" ? "🎉 Event" : "📖 Magazine"}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold">{slide.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{slide.description}</p>
                        <Button className="w-fit">
                          {slide.type === "event" ? "View Event Gallery" : "Read Magazine"}
                        </Button>
                      </div>
                      <div className="relative">
                        <Image
                          src={slide.image || "/placeholder.svg"}
                          alt={slide.title}
                          width={600}
                          height={400}
                          className="rounded-xl shadow-lg w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
