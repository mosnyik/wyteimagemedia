import { Navigation } from "@/components/navigation";
import { AnimatedCard } from "@/components/animated-card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Globe, Download } from "lucide-react";

export default function ProfilePage() {
  const phoneNumber = "4477337865";

  const magazines = [
    {
      edition: "9th Edition",
      title: "Profile Africa Magazine",
      location: "Leeds, United Kingdom",
      status: "Upcoming",
      description:
        "The inaugural edition of Profile Africa Magazine, expanding our reach to celebrate African excellence globally.",
    },
    {
      edition: "8th Edition",
      title: "Profile Magazine",
      location: "Nigeria",
      status: "Published",
      description:
        "Featuring outstanding personalities, motivational articles, and inspiring success stories from across Africa.",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Outstanding Personalities",
      description:
        "Showcasing individuals who give back to society and promote excellence in their fields.",
    },
    {
      icon: BookOpen,
      title: "Inspiring Stories",
      description:
        "True life stories and motivational articles that impact and inspire our generation.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Promoting Africa and celebrating achievements across the continent and diaspora.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Profile Africa Magazine
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating excellence, promoting hard work, and showcasing
              outstanding personalities who make a difference in society.
            </p>
          </div>
        </div>
      </section>

      {/* Magazine Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profile Africa Magazine is more than just a publication - it's a
              platform for celebrating African excellence and inspiring future
              generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <AnimatedCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Magazine Editions */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Magazine Editions
            </h2>
            <p className="text-xl text-muted-foreground">
              From Profile Magazine to Profile Africa Magazine - our journey
              continues.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {magazines.map((magazine, index) => (
              <AnimatedCard
                key={magazine.edition}
                title={magazine.edition}
                delay={index * 200}
                className="relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">
                      {magazine.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        magazine.status === "Upcoming"
                          ? "bg-accent/20 text-accent-foreground"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {magazine.status}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    📍 {magazine.location}
                  </p>

                  <p className="text-muted-foreground">
                    {magazine.description}
                  </p>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    {magazine.status === "Published" && (
                      <Button size="sm">Read Online</Button>
                    )}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Featured in Our Next Edition
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Are you making a positive impact in your community? We'd love to
            feature your story in Profile Africa Magazine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hi Wyte Image Media, I’d like to submit a story."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4"
              >
                Submit a Story
              </Button>
            </a>

            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hi Wyte Image Media, I’d like to request an advert slot."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Advertise With Us{" "}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
