"use client";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function AboutPreview() {
  const router = useRouter();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Wyte Image Media</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey of creativity, excellence, and international recognition
              in event management and publishing.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          <ScrollReveal direction="left" delay={0.4}>
            <div className="space-y-4">
              <Image
                src="/images/women-inspiring-women-1.png?height=300&width=400"
                alt="Our Team"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To create extraordinary experiences that celebrate human
                achievement and foster meaningful connections across cultures
                and communities.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.6}>
            <div className="space-y-4">
              <Image
                src="/images/awards-poster.png?height=300&width=400"
                alt="Our Vision"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading event management and publishing company,
                recognized globally for innovation, excellence, and cultural
                impact.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.8}>
            <div className="space-y-4">
              <Image
                src="/images/branding-1.png?height=300&width=400"
                alt="Our Values"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
              <h3 className="text-xl font-bold">Our Values</h3>
              <p className="text-muted-foreground">
                Excellence, integrity, creativity, and cultural celebration
                guide everything we do, from intimate gatherings to
                international awards.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={0.9}>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="group"
              onClick={() => {
                router.push("/about");
              }}
            >
              Read Our Full Story
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
