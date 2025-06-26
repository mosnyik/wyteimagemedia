"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Award, ArrowRight, ArrowLeft, Clock, Target, Heart } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AIChatAssistant } from "@/components/ai-chat-assistant"

export default function WomenInspiringWomen2023Page() {
  const eventHighlights = [
    "200+ Female leaders and entrepreneurs",
    "2-day empowerment conference",
    "12+ Keynote speakers and panelists",
    "Networking sessions with industry pioneers",
    "Workshops on leadership and business growth",
    "Awards ceremony celebrating female excellence",
  ]

  const speakers = [
    { name: "Dr. Ngozi Okonjo-Iweala", title: "Director-General, World Trade Organization" },
    { name: "Folorunso Alakija", title: "Executive Vice-Chairman, Famfa Oil" },
    { name: "Ibukun Awosika", title: "Former Chairman, First Bank of Nigeria" },
    { name: "Tara Fela-Durotoye", title: "CEO, House of Tara" },
  ]

  const awardCategories = [
    "Female Entrepreneur of the Year",
    "Women in Technology Award",
    "Community Impact Award",
    "Young Female Leader Award",
    "Lifetime Achievement Award",
    "Women in Media Award",
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
                    <Users size={24} className="text-green-600" />
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Conference
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent leading-tight">
                  Women Inspiring Women 2023
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  An empowering 2-day conference celebrating female leadership, entrepreneurship, and innovation across
                  Africa. Bringing together 200+ influential women to share stories, insights, and strategies for
                  success.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <Users className="text-green-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">200+</div>
                      <div className="text-sm text-gray-600">Attendees</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-orange-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">2 Days</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-green-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Abuja</div>
                      <div className="text-sm text-gray-600">Transcorp Hilton</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="text-orange-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">12+</div>
                      <div className="text-sm text-gray-600">Speakers</div>
                    </div>
                  </div>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    Plan Your Conference
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <img
                  src="/images/women-inspiring-women-1.png"
                  alt="Women Inspiring Women 2023"
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Conference Overview</h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    Women Inspiring Women 2023 was a groundbreaking conference that brought together Africa's most
                    influential female leaders, entrepreneurs, and change-makers. Held at the prestigious Transcorp
                    Hilton in Abuja, this two-day event was designed to celebrate achievements, share knowledge, and
                    inspire the next generation of female leaders.
                  </p>

                  <p>
                    Our team at Wyte Image Media meticulously planned every aspect of this transformative conference,
                    from speaker curation to venue management, ensuring a seamless experience that fostered meaningful
                    connections and powerful conversations about women's leadership in Africa.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conference Highlights</h3>
                  <ul className="space-y-3">
                    {eventHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Impact & Legacy</h3>
                  <p>
                    The conference resulted in the formation of a Women's Leadership Network with over 150 members,
                    launched 5 new mentorship programs, and facilitated business partnerships worth over $10 million.
                    Attendees reported a 98% satisfaction rate and overwhelming demand for an annual series.
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
                        <div className="font-semibold">October 14-15, 2023</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Venue</div>
                        <div className="font-semibold">Transcorp Hilton, Abuja</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Attendance</div>
                        <div className="font-semibold">200 Female Leaders</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Theme</div>
                        <div className="font-semibold">Empowering Excellence</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Keynote Speakers</h3>
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
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Award Categories</h3>
                    <ul className="space-y-2 text-sm">
                      {awardCategories.map((category, index) => (
                        <li key={index} className="flex items-center">
                          <Heart className="text-orange-600 mr-2" size={16} />
                          {category}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Services Provided</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Target className="text-green-600 mr-2" size={16} />
                        Conference Planning & Strategy
                      </li>
                      <li className="flex items-center">
                        <Target className="text-green-600 mr-2" size={16} />
                        Speaker Management
                      </li>
                      <li className="flex items-center">
                        <Target className="text-green-600 mr-2" size={16} />
                        Venue Coordination
                      </li>
                      <li className="flex items-center">
                        <Target className="text-green-600 mr-2" size={16} />
                        Awards Ceremony
                      </li>
                      <li className="flex items-center">
                        <Target className="text-green-600 mr-2" size={16} />
                        Media & PR Management
                      </li>
                      <li className="flex items-center">
                        <Target className="text-green-600 mr-2" size={16} />
                        Networking Facilitation
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
            Ready to Create Your Own Inspiring Event?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let us help you plan and execute a transformative conference that empowers, inspires, and creates lasting
            impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
                Start Planning Your Conference
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
