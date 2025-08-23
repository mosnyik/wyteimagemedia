"use client";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function NewHeroSection() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Creating
                  <span className="text-primary block animate-pulse-glow">
                    Unforgettable
                  </span>
                  Experiences
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  From award ceremonies to magazine publications, we bring your
                  vision to life with creativity, precision, and international
                  excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="group"
                  onClick={() => router.push("/contact")}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/wyteimagemedia",
                      "_blank"
                    )
                  }
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Our Story
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">12+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Events Managed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Magazine Issues
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Image Content */}
          <ScrollReveal direction="right" delay={0.7}>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/slimz.png?height=600&width=500"
                  alt="Wyte Image Media Team"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-secondary/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
