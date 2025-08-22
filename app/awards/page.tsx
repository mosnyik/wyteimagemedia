import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Star, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

export default function AwardsPage() {
  const awards = [
    {
      title: "Nigeria Golden Heart Awards International",
      year: "2024",
      location: "Abuja, Nigeria",
      description:
        "Our flagship award ceremony celebrating outstanding personalities who contribute positively to society.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Profile Awards Nigeria",
      year: "2012-2023",
      location: "Various Locations",
      description: "Annual recognition platform celebrating humanitarians, philanthropists, and impactful leaders.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Queen of Northern Nigeria",
      year: "2019, 2021",
      location: "Nigeria",
      description: "Beauty pageant promoting cultural heritage, peace, unity, and empowering young women.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" duration={800}>
            <Trophy className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Prestigious Awards</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating excellence, recognizing achievements, and inspiring greatness through our internationally
              acclaimed award ceremonies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <ScrollReveal key={award.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 150}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <Image
                        src={award.image || "/placeholder.svg"}
                        alt={award.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />

                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">{award.title}</h3>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {award.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {award.location}
                          </div>
                        </div>

                        <p className="text-muted-foreground">{award.description}</p>

                        <Button variant="outline" className="w-full bg-transparent">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" duration={800}>
            <Star className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Award Ceremony?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you recognize excellence and celebrate achievements with a world-class award ceremony.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Plan Your Awards Event
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
