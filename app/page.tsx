"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Hotel,
  BookOpen,
  Award,
  Palette,
  ArrowRight,
  Star,
  Users,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Background3D } from "@/components/background-3d";
import { PortfolioSection } from "@/components/portfolio-section";
import { AIChatAssistant } from "@/components/ai-chat-assistant";

export default function HomePage() {
  const services = [
    {
      icon: Calendar,
      title: "Event Management & Hospitality",
      description:
        "Creating unforgettable experiences with meticulous planning and flawless execution for corporate events, conferences, and special occasions.",
      href: "/services/event-management",
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description:
        "Premium accommodation booking services ensuring comfort and luxury for your business travels and event attendees.",
      href: "/services/hotel-reservations",
    },
    {
      icon: BookOpen,
      title: "Profile Magazine",
      description:
        "Africa's premier lifestyle and business publication showcasing success stories, trends, and influential personalities across the continent.",
      href: "/services/profile-magazine",
    },
    {
      icon: Award,
      title: "Nigeria Golden Hearts Awards",
      description:
        "Celebrating excellence and recognizing outstanding achievements in business, entertainment, and humanitarian efforts across Nigeria.",
      href: "/services/golden-hearts-awards",
    },
    {
      icon: Palette,
      title: "Branding & Customizing",
      description:
        "Comprehensive brand identity solutions from logo design to complete brand strategy, helping businesses stand out in competitive markets.",
      href: "/services/branding",
    },
  ];

  const stats = [
    { number: "500+", label: "Events Managed" },
    { number: "50K+", label: "Magazine Readers" },
    { number: "100+", label: "Award Recipients" },
    { number: "200+", label: "Brands Served" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Navbar />

      {/* Awards Banner */}
      <section className="bg-gradient-to-r from-green-600 to-yellow-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <Award className="text-yellow-300" size={24} />
            <p className="text-lg font-semibold">
              🏆 Nigeria Golden Heart Awards International 2025 - Now Accepting
              Nominations!
            </p>
            <Link href="/awards-landing">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20 ml-4"
              >
                Learn More <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
        {/* <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-white to-gray-50"> */}
        <Background3D />
        <div className="container mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-700 via-orange-600 to-green-800 bg-clip-text text-transparent leading-tight">
              Elevating Africa's
              <span className="block">Premium Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
              From world-class events to luxury hospitality, prestigious awards
              to compelling storytelling - we craft extraordinary experiences
              that define excellence across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 transition-colors duration-300"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-700 hover:bg-green-50 text-lg px-8 py-4"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions that transform visions into reality,
              delivering excellence across every touchpoint of your brand
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="bg-white border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 group h-full">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-full bg-green-100 group-hover:bg-orange-100 transition-colors duration-300 flex items-center justify-center">
                        <service.icon
                          size={32}
                          className="text-green-600 group-hover:text-orange-600 transition-colors duration-300"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="text-green-600 group-hover:text-orange-600 transition-colors flex items-center">
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-700 hover:bg-green-50"
              >
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
                Defining Excellence Across Africa
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Wyte Image Media stands at the forefront of premium lifestyle
                and business excellence across the continent. We are more than a
                media company - we are curators of extraordinary experiences,
                architects of memorable events, and champions of African success
                stories.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center">
                  <Users className="text-green-600 mr-2" size={20} />
                  <span className="text-gray-600">Expert Team</span>
                </div>
                <div className="flex items-center">
                  <Globe className="text-orange-600 mr-2" size={20} />
                  <span className="text-gray-600">Pan-African Reach</span>
                </div>
                <div className="flex items-center">
                  <Star className="text-green-600 mr-2" size={20} />
                  <span className="text-gray-600">Premium Quality</span>
                </div>
              </div>
              <Link href="/about">
                <Button className="bg-green-600 hover:bg-green-700 text-white transition-colors duration-300">
                  Learn More About Us
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Why Choose Us?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Unparalleled expertise in African markets and culture
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      End-to-end solutions from concept to execution
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Award-winning creative and strategic approach
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Extensive network of premium partners and venues
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatAssistant />
    </div>
  );
}
