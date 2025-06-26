"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hotel, Star, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Background3D } from "@/components/background-3d";
import { AIChatAssistant } from "@/components/ai-chat-assistant";

export default function HotelReservationsPage() {
  const services = [
    {
      title: "Luxury Hotel Bookings",
      description:
        "Premium accommodations at 5-star hotels across major African cities",
      features: [
        "5-star luxury properties",
        "Preferential rates",
        "Room upgrades",
        "VIP treatment",
      ],
    },
    {
      title: "Corporate Travel Packages",
      description:
        "Comprehensive travel solutions for business executives and teams",
      features: [
        "Executive suites",
        "Business centers",
        "Meeting facilities",
        "Airport transfers",
      ],
    },
    {
      title: "Group Reservations",
      description:
        "Coordinated accommodation for conferences, events, and large groups",
      features: [
        "Block bookings",
        "Group rates",
        "Event coordination",
        "Dedicated support",
      ],
    },
    {
      title: "Concierge Services",
      description:
        "Personalized assistance and premium services throughout your stay",
      features: [
        "Personal concierge",
        "Restaurant reservations",
        "Transportation",
        "Local experiences",
      ],
    },
  ];

  const partnerHotels = [
    "Four Seasons Hotel Lagos",
    "Transcorp Hilton Abuja",
    "Eko Hotels & Suites",
    "Kempinski Hotel Gold Coast",
    "Radisson Blu Anchorage Hotel",
    "InterContinental Lagos",
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
              Hotel Reservations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
              Premium accommodation booking services ensuring comfort and luxury
              for your business travels and event attendees.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent">
              Our Hotel Services
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

      {/* Partner Hotels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent">
              Our Partner Hotels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've established exclusive partnerships with premium hotels
              across Africa to ensure the best experience for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerHotels.map((hotel, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <Hotel className="text-orange-600 mx-auto mb-4" size={48} />
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    {hotel}
                  </h3>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-orange-400 fill-current"
                        size={16}
                      />
                    ))}
                  </div>
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
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Experience luxury hospitality with our exclusive hotel partnership
            network across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4"
              >
                Book Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/portfolio/luxury-hotel-partnership">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-700 hover:bg-orange-50 text-lg px-8 py-4"
              >
                View Our Network
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
