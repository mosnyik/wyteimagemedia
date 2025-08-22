import { Navigation } from "@/components/navigation"
import { AnimatedCard } from "@/components/animated-card"
import { Button } from "@/components/ui/button"
import { Calendar, Music, GraduationCap, Heart, Mic, Users } from "lucide-react"

export default function EventsPage() {
  const eventTypes = [
    {
      icon: Calendar,
      title: "Corporate Events",
      description:
        "Professional seminars, conferences, and business gatherings that align with your brand's mission and vision.",
    },
    {
      icon: Music,
      title: "Concerts & Entertainment",
      description: "Musical concerts, comedy shows, and entertainment events that captivate and inspire audiences.",
    },
    {
      icon: GraduationCap,
      title: "Educational Programs",
      description:
        "Spelling bee competitions, educational seminars, and programs that promote learning and development.",
    },
    {
      icon: Heart,
      title: "Charity & Fundraising",
      description: "Charitable events, fundraising galas, and community service programs that make a difference.",
    },
    {
      icon: Mic,
      title: "Award Ceremonies",
      description: "Prestigious award nights and recognition events celebrating excellence and achievement.",
    },
    {
      icon: Users,
      title: "Cultural Events",
      description: "Beauty pageants, cultural celebrations, and events promoting heritage, peace, and unity.",
    },
  ]

  const pastEvents = [
    {
      title: "Nigeria Golden Heart Awards 2024",
      location: "Abuja, Nigeria",
      attendees: "500+",
      description: "A prestigious award ceremony celebrating outstanding personalities across Nigeria.",
    },
    {
      title: "Queen of Northern Nigeria 2021",
      location: "Northern Nigeria",
      attendees: "300+",
      description: "Beauty pageant promoting cultural heritage and empowering young women.",
    },
    {
      title: "National Spelling Bee Competition",
      location: "Multiple States, Nigeria",
      attendees: "1000+",
      description: "Educational competition promoting proper learning, pronunciation, and spelling.",
    },
  ]

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Calendar className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Inspiring Events</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we create events that inspire, educate, and bring
              communities together.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Types of Events We Create</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our diverse portfolio spans across various event categories, each designed to create lasting impact and
              memorable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((eventType, index) => (
              <AnimatedCard
                key={eventType.title}
                title={eventType.title}
                description={eventType.description}
                delay={index * 100}
                className="hover:border-primary/50"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <eventType.icon className="h-6 w-6 text-primary" />
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Recent Events</h2>
            <p className="text-xl text-muted-foreground">
              A showcase of our recent successful events that have made lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <AnimatedCard key={event.title} title={event.title} delay={index * 150} className="text-center">
                <div className="space-y-4">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-16 w-16 text-primary/50" />
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">📍 {event.location}</p>
                    <p className="text-sm text-muted-foreground">👥 {event.attendees} Attendees</p>
                  </div>

                  <p className="text-muted-foreground">{event.description}</p>

                  <Button variant="outline" className="w-full bg-transparent">
                    View Gallery
                  </Button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Next Event?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's turn your vision into an extraordinary experience that inspires and captivates your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Plan Your Event
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Get Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
