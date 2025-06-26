"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Background3D } from "@/components/background-3d";
import { AIChatAssistant } from "@/components/ai-chat-assistant";

export default function EventManagementPage() {
  const services = [
    {
      title: "Corporate Events",
      description:
        "Professional conferences, seminars, product launches, and corporate retreats",
      features: [
        "Strategic planning",
        "Venue selection",
        "Speaker coordination",
        "Technical production",
      ],
    },
    {
      title: "International Conferences",
      description:
        "Multi-day conferences with international delegates and diplomatic protocols",
      features: [
        "Diplomatic coordination",
        "Visa assistance",
        "Translation services",
        "Cultural programs",
      ],
    },
    {
      title: "Awards Ceremonies",
      description:
        "Prestigious award events celebrating excellence and achievement",
      features: [
        "Ceremony design",
        "Award production",
        "Media coverage",
        "VIP management",
      ],
    },
    {
      title: "Social Events",
      description:
        "Weddings, galas, and private celebrations with luxury touches",
      features: [
        "Custom theming",
        "Catering coordination",
        "Entertainment booking",
        "Photography",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Understanding your vision and requirements",
    },
    {
      step: "2",
      title: "Planning",
      description: "Detailed event strategy and timeline development",
    },
    {
      step: "3",
      title: "Coordination",
      description: "Vendor management and logistics coordination",
    },
    {
      step: "4",
      title: "Execution",
      description: "Seamless event delivery and on-site management",
    },
    {
      step: "5",
      title: "Follow-up",
      description: "Post-event analysis and feedback collection",
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
                className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Services
              </Link>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent leading-tight">
              Event Management & Hospitality
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
              Creating unforgettable experiences with meticulous planning and
              flawless execution for corporate events, conferences, and special
              occasions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
              Our Event Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
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
                          className="text-green-600 mr-3 flex-shrink-0"
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to post-event follow-up, we ensure every
              detail is perfectly executed.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-green-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let's create an unforgettable experience that exceeds your
            expectations and achieves your objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4"
              >
                Start Planning
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/portfolio/lagos-business-summit">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-700 hover:bg-green-50 text-lg px-8 py-4"
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
