"use client"

import { AnimatedCard } from "@/components/animated-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calendar, Users, MapPin, Lightbulb, ShoppingCart, Award } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Calendar,
      title: "Event Planning",
      description:
        "Complete event management from concept to execution. We handle every detail to make your event unforgettable.",
    },
    {
      icon: Users,
      title: "Event Coordination",
      description:
        "Professional coordination and supervision to ensure seamless execution of events that create lasting memories.",
    },
    {
      icon: MapPin,
      title: "Venue Finding",
      description:
        "Expert venue selection with our extensive network and industry connections to find the perfect location.",
    },
    {
      icon: Lightbulb,
      title: "Event Consultation",
      description: "Strategic brainstorming and planning sessions to enhance your event's success and impact.",
    },
    {
      icon: ShoppingCart,
      title: "Vendor Management",
      description: "Complete vendor sourcing, negotiation, and management within your budget for all event needs.",
    },
    {
      icon: Award,
      title: "Awards & Recognition",
      description: "Specialized in creating prestigious award ceremonies that celebrate excellence and achievement.",
    },
  ]

  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="left" duration={800}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              As a leading event management company with global impact, we turn your event into a podium of inspiration
              and creativity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const directions = ["left", "up", "right"] as const
            const direction = directions[index % 3]

            return (
              <ScrollReveal key={service.title} direction={direction} delay={index * 100} duration={600}>
                <AnimatedCard
                  title={service.title}
                  description={service.description}
                  delay={0}
                  className="hover:border-primary/50 h-full"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
