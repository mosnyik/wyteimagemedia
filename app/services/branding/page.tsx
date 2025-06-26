"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Background3D } from "@/components/background-3d";
import { AIChatAssistant } from "@/components/ai-chat-assistant";

export default function BrandingPage() {
  const services = [
    {
      title: "Brand Identity Design",
      description:
        "Complete visual identity systems including logos, colors, and typography",
      features: [
        "Logo design",
        "Color palettes",
        "Typography systems",
        "Brand guidelines",
      ],
    },
    {
      title: "Brand Strategy",
      description:
        "Strategic positioning and messaging that resonates with your target audience",
      features: [
        "Market research",
        "Competitive analysis",
        "Brand positioning",
        "Messaging framework",
      ],
    },
    {
      title: "Marketing Materials",
      description:
        "Professional marketing collateral that reinforces your brand identity",
      features: [
        "Business cards",
        "Brochures",
        "Presentations",
        "Digital assets",
      ],
    },
    {
      title: "Digital Branding",
      description:
        "Online brand presence optimization across all digital touchpoints",
      features: [
        "Website design",
        "Social media assets",
        "Email templates",
        "Digital campaigns",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      description: "Understanding your business and brand goals",
    },
    {
      step: "2",
      title: "Research",
      description: "Market analysis and competitive landscape review",
    },
    {
      step: "3",
      title: "Strategy",
      description: "Brand positioning and messaging development",
    },
    {
      step: "4",
      title: "Design",
      description: "Visual identity creation and refinement",
    },
    {
      step: "5",
      title: "Implementation",
      description: "Brand rollout and guidelines delivery",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white to-gray-50">
        <Background3D />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link
                href="/services"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Services
              </Link>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent leading-tight">
              Branding & Customizing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
              Comprehensive brand identity solutions from logo design to
              complete brand strategy, helping businesses stand out in
              competitive markets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent">
              Our Branding Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle
                          size={16}
                          className="text-orange-600 mr-3 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent">
              Our Branding Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovery to implementation, we follow a proven process to
              create powerful brand identities.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
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
            <Link href="/portfolio/techcorp-brand-identity">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-700 hover:bg-orange-50 text-lg px-8 py-4"
              >
                View Our Work
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
