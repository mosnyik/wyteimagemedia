"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, CheckCircle, ArrowLeft, Crown } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Background3D } from "@/components/background-3d";
import { AIChatAssistant } from "@/components/ai-chat-assistant";

export default function GoldenHeartsAwardsPage() {
  const services = [
    {
      title: "Award Ceremonies",
      description:
        "Prestigious gala events celebrating excellence across multiple categories",
      features: [
        "Ceremony planning",
        "Award production",
        "VIP management",
        "Live broadcasting",
      ],
    },
    {
      title: "Nomination Process",
      description:
        "Comprehensive nomination and selection process ensuring fairness and transparency",
      features: [
        "Online nominations",
        "Expert judging panel",
        "Transparent criteria",
        "Public voting",
      ],
    },
    {
      title: "Recognition Programs",
      description:
        "Year-round recognition initiatives highlighting outstanding achievements",
      features: [
        "Monthly spotlights",
        "Special recognitions",
        "Achievement certificates",
        "Media coverage",
      ],
    },
    {
      title: "Media Coverage",
      description:
        "Extensive media promotion and coverage of award recipients and ceremonies",
      features: [
        "Live streaming",
        "Social media campaigns",
        "Press releases",
        "Documentary features",
      ],
    },
  ];

  const categories = [
    "Business Excellence Award",
    "Humanitarian Service Award",
    "Entertainment Personality of the Year",
    "Young Entrepreneur Award",
    "Lifetime Achievement Award",
    "Community Leadership Award",
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
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Services
              </Link>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-green-700 bg-clip-text text-transparent leading-tight">
              Nigeria Golden Hearts Awards
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
              Celebrating excellence and recognizing outstanding achievements in
              business, entertainment, and humanitarian efforts across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-green-700 bg-clip-text text-transparent">
              Our Awards Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300"
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
                          className="text-yellow-600 mr-3 flex-shrink-0"
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

      {/* Award Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-green-700 bg-clip-text text-transparent">
              Award Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognizing excellence across multiple sectors and celebrating the
              diverse achievements of Nigerian leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <Trophy className="text-yellow-600 mx-auto mb-4" size={48} />
                  <h3 className="text-lg font-bold text-gray-900">
                    {category}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-green-700 bg-clip-text text-transparent">
            Submit Your Nomination
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Know someone who deserves recognition? Submit a nomination for the
            Nigeria Golden Hearts Awards and celebrate excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/awards-landing">
              <Button
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8 py-4"
              >
                Submit Nomination
                <Crown className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/portfolio/golden-hearts-awards-2023">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-600 text-yellow-700 hover:bg-yellow-50 text-lg px-8 py-4"
              >
                View Previous Awards
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
