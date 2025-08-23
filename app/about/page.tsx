"use client"
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Award, Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  const milestones = [
    {
      year: "2012",
      event: "Wyte Image Media Founded",
      description: "Started as a creative event management company",
    },
    {
      year: "2015",
      event: "First Nigeria Golden Heart Awards",
      description: "Launched our flagship awards ceremony",
    },
    {
      year: "2018",
      event: "Profile Magazine Launch",
      description: "Began publishing our lifestyle and business magazine",
    },
    {
      year: "2020",
      event: "International Expansion",
      description: "Extended operations to the United Kingdom",
    },
    {
      year: "2023",
      event: "Profile Africa Magazine",
      description: "Rebranded to Profile Africa Magazine for continental reach",
    },
    {
      year: "2024",
      event: "Global Recognition",
      description:
        "Recognized as a leading international event management company",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "We pour our heart into every event, creating experiences that resonate with audiences.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for perfection in every detail, delivering world-class events consistently.",
    },
    {
      icon: Globe,
      title: "Global Vision",
      description:
        "Our international perspective brings diverse creativity to every project.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with clients and partners to bring visions to life.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={800}>
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 text-primary border-primary"
              >
                About Us
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Inspiring Global
                <span className="text-primary block">Creativity</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                For over a decade, Wyte Image Media has been at the forefront of
                creative event management, transforming visions into
                extraordinary experiences that inspire and captivate audiences
                worldwide.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" duration={800}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2012, Wyte Image Media began as a vision to
                    create events that go beyond ordinary experiences. We
                    believed that every event should be a platform for
                    inspiration, creativity, and meaningful connections.
                  </p>
                  <p>
                    From our humble beginnings organizing local events, we've
                    grown into an international event management company with
                    operations spanning Nigeria and the United Kingdom. Our
                    flagship Nigeria Golden Heart Awards International has
                    become a prestigious celebration of excellence and
                    achievement.
                  </p>
                  <p>
                    Today, we continue to push boundaries in event management,
                    combining traditional excellence with innovative approaches
                    to create unforgettable experiences that resonate with
                    audiences globally.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={800}>
              <div className="relative">
                <Image
                  src="/images/slimz.png?height=400&width=600"
                  alt="Wyte Image Media Team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones that shaped our story
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <ScrollReveal
                key={milestone.year}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 100}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <Badge
                        variant="secondary"
                        className="text-primary bg-primary/10 shrink-0"
                      >
                        {milestone.year}
                      </Badge>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal
                key={value.title}
                direction="up"
                delay={index * 100}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" duration={800}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's work together to bring your vision to life and create an
              event that inspires.
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() =>
                window.open(
                  "https://calendly.com/wyteimagemedia/consultation",
                  "_blank"
                )
              }
            >
              Start Your Project
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
