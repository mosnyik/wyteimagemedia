"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, MapPin, Award, ArrowRight, ArrowLeft, Clock, Target } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AIChatAssistant } from "@/components/ai-chat-assistant"

export default function LagosBusinessSummitPage() {
  const eventHighlights = [
    "500+ C-level executives and business leaders",
    "3-day comprehensive business summit",
    "15+ keynote speakers from across West Africa",
    "Networking sessions with industry leaders",
    "Panel discussions on African business growth",
    "Awards ceremony recognizing excellence",
  ]

  const speakers = [
    { name: "Dr. Akinwumi Adesina", title: "President, African Development Bank" },
    { name: "Aliko Dangote", title: "Chairman, Dangote Group" },
    { name: "Folorunso Alakija", title: "Executive Vice-Chairman, Famfa Oil" },
    { name: "Tony Elumelu", title: "Chairman, UBA Group" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors">
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <Calendar size={24} className="text-green-600" />
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Event Management
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent leading-tight">
                  Lagos Business Summit 2023
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  A prestigious 3-day business summit that brought together over 500 executives from across West Africa
                  to discuss the future of African business, innovation, and economic growth.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <Users className="text-green-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">500+</div>
                      <div className="text-sm text-gray-600">Attendees</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-orange-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">3 Days</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-green-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Lagos</div>
                      <div className="text-sm text-gray-600">Location</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="text-orange-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">15+</div>
                      <div className="text-sm text-gray-600">Speakers</div>
                    </div>
                  </div>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    Plan Your Event
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <img
                  src="/images/event-3.png"
                  alt="Lagos Business Summit 2023"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Overview</h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    The Lagos Business Summit 2023 was a landmark event that brought together the brightest minds in
                    African business. Over three intensive days, participants engaged in thought-provoking discussions,
                    strategic networking, and collaborative sessions designed to drive economic growth across the
                    continent.
                  </p>

                  <p>
                    Our team at Wyte Image Media orchestrated every aspect of this prestigious summit, from initial
                    concept development to final execution. We managed venue selection, speaker coordination, logistics,
                    catering, and technical requirements to ensure a seamless experience for all attendees.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Achievements</h3>
                  <ul className="space-y-3">
                    {eventHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Event Impact</h3>
                  <p>
                    The summit resulted in over $50 million in business deals and partnerships, establishing new trade
                    relationships across West Africa. Attendees reported a 95% satisfaction rate, with many requesting
                    annual participation in future editions.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <Card className="bg-gray-50 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Event Details</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Date</div>
                        <div className="font-semibold">March 15-17, 2023</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Venue</div>
                        <div className="font-semibold">Eko Hotels & Suites, Lagos</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Capacity</div>
                        <div className="font-semibold">500 Attendees</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Format</div>
                        <div className="font-semibold">Hybrid (In-person & Virtual)</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Featured Speakers</h3>
                    <div className="space-y-4">
                      {speakers.map((speaker, index) => (
                        <div key={index} className="border-b border-green-200 last:border-b-0 pb-3 last:pb-0">
                          <div className="font-semibold text-gray-900">{speaker.name}</div>
                          <div className="text-sm text-gray-600">{speaker.title}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Services Provided</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Target className="text-orange-600 mr-2" size={16} />
                        Event Planning & Strategy
                      </li>
                      <li className="flex items-center">
                        <Target className="text-orange-600 mr-2" size={16} />
                        Venue Management
                      </li>
                      <li className="flex items-center">
                        <Target className="text-orange-600 mr-2" size={16} />
                        Speaker Coordination
                      </li>
                      <li className="flex items-center">
                        <Target className="text-orange-600 mr-2" size={16} />
                        Technical Production
                      </li>
                      <li className="flex items-center">
                        <Target className="text-orange-600 mr-2" size={16} />
                        Catering & Hospitality
                      </li>
                      <li className="flex items-center">
                        <Target className="text-orange-600 mr-2" size={16} />
                        Media Coverage
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let us help you plan and execute an unforgettable event that drives results and creates lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
                Start Planning Your Event
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-700 hover:bg-green-50 text-lg px-8 py-4"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatAssistant />
    </div>
  )
}
