"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Hotel,
  MapPin,
  Star,
  ArrowRight,
  ArrowLeft,
  Users,
  Crown,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AIChatAssistant } from "@/components/ai-chat-assistant";

export default function LuxuryHotelPartnershipPage() {
  const partnershipHighlights = [
    "Exclusive partnerships with 25+ luxury hotels",
    "Premium accommodation booking services",
    "VIP concierge and hospitality management",
    "Corporate travel packages and group bookings",
    "Event venue coordination and management",
    "24/7 customer support and assistance",
  ];

  const partnerHotels = [
    {
      name: "Four Seasons Hotel Lagos",
      location: "Lagos, Nigeria",
      rating: "5-Star",
    },
    {
      name: "Transcorp Hilton Abuja",
      location: "Abuja, Nigeria",
      rating: "5-Star",
    },
    {
      name: "Eko Hotels & Suites",
      location: "Lagos, Nigeria",
      rating: "5-Star",
    },
    {
      name: "Kempinski Hotel Gold Coast",
      location: "Accra, Ghana",
      rating: "5-Star",
    },
  ];

  const services = [
    "Luxury hotel reservations and bookings",
    "Corporate travel management",
    "Event venue selection and coordination",
    "VIP airport transfers and transportation",
    "Concierge services and personal assistance",
    "Group accommodation and conference packages",
  ];

  const cities = [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Kano",
    "Accra",
    "Nairobi",
    "Cape Town",
    "Johannesburg",
    "Cairo",
    "Casablanca",
    "Addis Ababa",
    "Dakar",
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
                    <Hotel size={24} className="text-orange-600" />
                  </div>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    Hospitality Partnership
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent leading-tight">
                  Luxury Hotel Partnership Network
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  An exclusive network of premium hotel partnerships across
                  major African cities, providing our clients with unparalleled
                  access to luxury accommodations and world-class hospitality
                  services.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <Hotel className="text-orange-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">25+</div>
                      <div className="text-sm text-gray-600">
                        Partner Hotels
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-green-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">12</div>
                      <div className="text-sm text-gray-600">Cities</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="text-orange-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">5-Star</div>
                      <div className="text-sm text-gray-600">
                        Luxury Standard
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-green-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">1000+</div>
                      <div className="text-sm text-gray-600">
                        Satisfied Guests
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Book Luxury Accommodation
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <img
                  src="/images/hotel-2.png"
                  alt="Luxury Hotel Partnership"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Partnership Overview
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    Our Luxury Hotel Partnership Network represents years of
                    carefully cultivated relationships with Africa's finest
                    hospitality establishments. We've established exclusive
                    partnerships with over 25 premium hotels across 12 major
                    cities, ensuring our clients have access to the best
                    accommodations and services wherever their business takes
                    them.
                  </p>

                  <p>
                    These partnerships go beyond simple booking arrangements. We
                    work closely with each hotel to provide our clients with
                    enhanced services, preferential rates, room upgrades, and
                    personalized experiences that reflect the high standards our
                    clients expect from Wyte Image Media.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Partnership Benefits
                  </h3>
                  <ul className="space-y-3">
                    {partnershipHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Client Success Stories
                  </h3>
                  <p>
                    Our partnership network has facilitated over 1,000
                    successful stays, with a 98% client satisfaction rate. We've
                    coordinated accommodation for major conferences, executive
                    retreats, and VIP visits, consistently delivering
                    experiences that exceed expectations and strengthen business
                    relationships.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <Card className="bg-gray-50 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      Network Statistics
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">
                          Partner Hotels
                        </div>
                        <div className="font-semibold">
                          25+ Luxury Properties
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">
                          Cities Covered
                        </div>
                        <div className="font-semibold">
                          12 Major African Cities
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">
                          Guest Satisfaction
                        </div>
                        <div className="font-semibold">98% Rating</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">
                          Service Standard
                        </div>
                        <div className="font-semibold">5-Star Luxury</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      Featured Partner Hotels
                    </h3>
                    <div className="space-y-4">
                      {partnerHotels.map((hotel, index) => (
                        <div
                          key={index}
                          className="border-b border-orange-200 last:border-b-0 pb-3 last:pb-0"
                        >
                          <div className="font-semibold text-gray-900">
                            {hotel.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {hotel.location}
                          </div>
                          <div className="text-xs text-orange-600 font-medium flex items-center mt-1">
                            <Star size={12} className="mr-1" />
                            {hotel.rating}
                          </div>
                        </div>
                      ))}
                      <div className="text-center pt-2">
                        <span className="text-sm text-gray-500">
                          + 21 more luxury properties
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      Cities We Serve
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {cities.map((city, index) => (
                        <div key={index} className="flex items-center">
                          <MapPin className="text-green-600 mr-2" size={12} />
                          {city}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      Services Included
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {services.map((service, index) => (
                        <li key={index} className="flex items-center">
                          <Crown className="text-orange-600 mr-2" size={16} />
                          {service}
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
            Experience Luxury Hospitality
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let us arrange your next luxury accommodation experience through our
            exclusive hotel partnership network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4"
              >
                Book Your Stay
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/services/hotel-reservations">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-700 hover:bg-orange-50 text-lg px-8 py-4"
              >
                Learn About Hotel Services
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
