"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Palette,
  Target,
  Zap,
  ArrowRight,
  ArrowLeft,
  Eye,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AIChatAssistant } from "@/components/ai-chat-assistant";

export default function TechCorpBrandIdentityPage() {
  const projectHighlights = [
    "Complete brand identity overhaul",
    "Logo design and visual identity system",
    "Brand guidelines and style manual",
    "Marketing collateral design",
    "Digital brand implementation",
    "Brand strategy and positioning",
  ];

  const deliverables = [
    {
      name: "Logo Design",
      description: "Modern, tech-forward logo with multiple variations",
    },
    {
      name: "Brand Guidelines",
      description: "Comprehensive 50-page brand manual",
    },
    {
      name: "Marketing Materials",
      description: "Business cards, letterheads, and brochures",
    },
    {
      name: "Digital Assets",
      description: "Website design, social media templates",
    },
  ];

  const brandElements = [
    "Primary and secondary color palettes",
    "Typography system and font hierarchy",
    "Iconography and graphic elements",
    "Photography style and guidelines",
    "Voice and tone documentation",
    "Application examples and usage rules",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                    <Palette size={24} className="text-orange-600" />
                  </div>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    Branding
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent leading-tight">
                  TechCorp Brand Identity
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  A comprehensive brand transformation for Nigeria's leading
                  technology company. We created a modern, innovative identity
                  that reflects their cutting-edge solutions and positions them
                  as industry leaders.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <Target className="text-orange-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Complete
                      </div>
                      <div className="text-sm text-gray-600">Rebrand</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Eye className="text-green-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">50+</div>
                      <div className="text-sm text-gray-600">Brand Assets</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Zap className="text-orange-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">
                        3 Months
                      </div>
                      <div className="text-sm text-gray-600">Timeline</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Lightbulb className="text-green-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Tech Focus
                      </div>
                      <div className="text-sm text-gray-600">Industry</div>
                    </div>
                  </div>
                </div>

                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Start Your Rebrand
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <img
                  src="/images/branding-2.png"
                  alt="TechCorp Brand Identity"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Project Overview
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    TechCorp approached us with a challenge: their existing
                    brand identity no longer reflected their position as
                    Nigeria's premier technology solutions provider. After 15
                    years in business, they needed a complete visual
                    transformation that would resonate with modern clients while
                    honoring their legacy of innovation.
                  </p>

                  <p>
                    Our comprehensive rebranding process began with extensive
                    market research and stakeholder interviews. We analyzed
                    their competitive landscape, identified key differentiators,
                    and developed a brand strategy that positioned TechCorp as
                    the go-to partner for digital transformation in Africa.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Project Deliverables
                  </h3>
                  <ul className="space-y-3">
                    {projectHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Results & Impact
                  </h3>
                  <p>
                    The new brand identity resulted in a 40% increase in
                    qualified leads within the first quarter, improved brand
                    recognition by 65%, and positioned TechCorp for successful
                    expansion into three new African markets. The rebrand also
                    attracted top talent and strategic partnerships.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <Card className="bg-gray-50 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      Project Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Client</div>
                        <div className="font-semibold">TechCorp Nigeria</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">
                          Industry
                        </div>
                        <div className="font-semibold">
                          Technology Solutions
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">
                          Timeline
                        </div>
                        <div className="font-semibold">3 Months</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">
                          Team Size
                        </div>
                        <div className="font-semibold">5 Specialists</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      Key Deliverables
                    </h3>
                    <div className="space-y-4">
                      {deliverables.map((deliverable, index) => (
                        <div
                          key={index}
                          className="border-b border-orange-200 last:border-b-0 pb-3 last:pb-0"
                        >
                          <div className="font-semibold text-gray-900">
                            {deliverable.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {deliverable.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      Brand Elements
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {brandElements.map((element, index) => (
                        <li key={index} className="flex items-center">
                          <Target className="text-green-600 mr-2" size={16} />
                          {element}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let us help you create a powerful brand identity that drives growth
            and sets you apart from the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4"
              >
                Start Your Brand Journey
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/services/branding">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-700 hover:bg-orange-50 text-lg px-8 py-4"
              >
                Learn About Our Branding Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatAssistant />
    </div>
  );
}
