"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="fade" duration={1000}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Creating Global
            <span className="text-primary block">Inspiration</span>
            Through Creative Events
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Wyte Image Media transforms your vision into extraordinary experiences. From award ceremonies to
            international concerts, we deliver events that inspire and captivate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-4 animate-pulse-glow">
              Start Your Event Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={600} duration={800}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">12+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Events Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">8</div>
              <div className="text-muted-foreground">Magazine Editions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">3</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
