"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, Award, Users, Globe } from "lucide-react"

export function CompanyBrief() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Wyte Image Media
                  <span className="text-primary block">Excellence in Every Detail</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Since 2012, we've been crafting extraordinary experiences that celebrate achievement and inspire
                  communities. From the prestigious Nigeria Golden Heart Awards to Profile Africa Magazine, we bring
                  vision to life.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Award Shows</div>
                </div>
                <div className="text-center p-4">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Event Management</div>
                </div>
                <div className="text-center p-4">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Global Reach</div>
                </div>
              </div>

              <Button size="lg" className="group">
                Discover Our Story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Content */}
          <ScrollReveal direction="right" delay={0.4}>
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">International Experience</h4>
                      <p className="text-muted-foreground">
                        Operating across Nigeria and the UK with global standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Full-Service Solutions</h4>
                      <p className="text-muted-foreground">From concept to execution, we handle every detail.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Proven Track Record</h4>
                      <p className="text-muted-foreground">12+ years of creating memorable experiences.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
