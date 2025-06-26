"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Calendar, Trophy, ArrowRight, ArrowLeft, Star, Crown } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AIChatAssistant } from "@/components/ai-chat-assistant"

export default function GoldenHeartsAwards2023Page() {
  const awardCategories = [
    "Business Excellence Award",
    "Humanitarian Service Award",
    "Entertainment Personality of the Year",
    "Young Entrepreneur Award",
    "Lifetime Achievement Award",
    "Community Leadership Award",
  ]

  const winners = [
    { name: "Dr. Stella Ameyo Adadevoh", category: "Humanitarian Service", achievement: "Healthcare Leadership" },
    { name: "Burna Boy", category: "Entertainment", achievement: "Global Music Recognition" },
    { name: "Tara Fela-Durotoye", category: "Business Excellence", achievement: "Beauty Industry Innovation" },
    { name: "Kemi Adetiba", category: "Young Entrepreneur", achievement: "Film & Media Excellence" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                    <Award size={24} className="text-yellow-600" />
                  </div>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                    Awards Ceremony
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-green-700 bg-clip-text text-transparent leading-tight">
                  Golden Hearts Awards 2023
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  An elegant gala evening celebrating outstanding achievements in business, entertainment, and
                  humanitarian efforts. Recognizing the individuals who have made significant contributions to Nigerian
                  society and beyond.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <Users className="text-yellow-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">300+</div>
                      <div className="text-sm text-gray-600">VIP Guests</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="text-green-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">25</div>
                      <div className="text-sm text-gray-600">Award Winners</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-yellow-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Nov 2023</div>
                      <div className="text-sm text-gray-600">Event Date</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="text-green-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">6</div>
                      <div className="text-sm text-gray-600">Categories</div>
                    </div>
                  </div>
                </div>

                <Link href="/awards-landing">
                  <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    2025 Nominations Open
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <img
                  src="/images/awards-2.png"
                  alt="Golden Hearts Awards 2023"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">About the Awards</h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    The Golden Hearts Awards 2023 was a spectacular celebration of excellence, recognizing individuals
                    who have demonstrated exceptional leadership, innovation, and service to humanity. The event brought
                    together Nigeria's most influential personalities in a glamorous ceremony that honored their
                    outstanding contributions.
                  </p>

                  <p>
                    Our team meticulously planned every detail of this prestigious event, from the elegant venue setup
                    to the seamless award presentation ceremony. The evening featured live entertainment, gourmet
                    dining, and networking opportunities for Nigeria's elite.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Award Categories</h3>
                  <ul className="space-y-3">
                    {awardCategories.map((category, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{category}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Event Highlights</h3>
                  <p>
                    The ceremony featured keynote speeches from distinguished guests, musical performances by top
                    Nigerian artists, and a special tribute to lifetime achievement recipients. The event was broadcast
                    live across multiple platforms, reaching over 1 million viewers nationwide.
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
                        <div className="font-semibold">November 25, 2023</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Venue</div>
                        <div className="font-semibold">Transcorp Hilton, Abuja</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Attendance</div>
                        <div className="font-semibold">300 VIP Guests</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Broadcast</div>
                        <div className="font-semibold">Live TV & Online</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Notable Winners</h3>
                    <div className="space-y-4">
                      {winners.map((winner, index) => (
                        <div key={index} className="border-b border-yellow-200 last:border-b-0 pb-3 last:pb-0">
                          <div className="font-semibold text-gray-900">{winner.name}</div>
                          <div className="text-sm text-gray-600">{winner.category}</div>
                          <div className="text-xs text-yellow-600 font-medium">{winner.achievement}</div>
                        </div>
                      ))}
                      <div className="text-center pt-2">
                        <span className="text-sm text-gray-500">+ 21 more distinguished winners</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Event Impact</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Live Viewers</span>
                        <span className="font-semibold">1M+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Media Coverage</span>
                        <span className="font-semibold">50+ Outlets</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Social Media Reach</span>
                        <span className="font-semibold">2M+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Charity Funds Raised</span>
                        <span className="font-semibold">₦50M</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-green-700 bg-clip-text text-transparent">
            Join Us for Golden Hearts Awards 2025
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Nominations are now open for the 2025 edition. Recognize outstanding individuals who deserve celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/awards-landing">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8 py-4">
                Submit Nomination
                <Crown className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-600 text-yellow-700 hover:bg-yellow-50 text-lg px-8 py-4"
              >
                Sponsor the Event
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
