"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Background3D } from "@/components/background-3d";
import { AIChatAssistant } from "@/components/ai-chat-assistant";

export default function ProfileMagazinePage() {
  const services = [
    {
      title: "Feature Articles",
      description:
        "In-depth profiles of successful entrepreneurs and business leaders",
      features: [
        "Executive interviews",
        "Success story features",
        "Industry insights",
        "Professional photography",
      ],
    },
    {
      title: "Business Profiles",
      description:
        "Comprehensive coverage of innovative companies and their impact",
      features: [
        "Company spotlights",
        "Market analysis",
        "Growth strategies",
        "Leadership profiles",
      ],
    },
    {
      title: "Digital Publishing",
      description:
        "Multi-platform distribution reaching audiences across Africa and beyond",
      features: [
        "Online publication",
        "Social media promotion",
        "Email newsletters",
        "Mobile optimization",
      ],
    },
    {
      title: "Custom Content",
      description:
        "Tailored editorial content for special editions and sponsored features",
      features: [
        "Sponsored content",
        "Special editions",
        "Event coverage",
        "Brand storytelling",
      ],
    },
  ];

  const stats = [
    { number: "50K+", label: "Monthly Readers" },
    { number: "15", label: "Countries Reached" },
    { number: "45", label: "Issues Published" },
    { number: "500+", label: "Featured Stories" },
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
              Profile Magazine
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
              Africa's premier lifestyle and business publication showcasing
              success stories, trends, and influential personalities across the
              continent.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent">
              Our Publishing Services
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent">
            Get Featured in Profile Magazine
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Share your success story with Africa's premier business publication
            and inspire the next generation of entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4"
              >
                Submit Your Story
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/portfolio/profile-magazine-45">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-700 hover:bg-orange-50 text-lg px-8 py-4"
              >
                View Latest Issue
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
