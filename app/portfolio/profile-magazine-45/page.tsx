"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Globe, ArrowRight, ArrowLeft, Eye, Download } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AIChatAssistant } from "@/components/ai-chat-assistant"

export default function ProfileMagazine45Page() {
  const magazineFeatures = [
    "50 Top Nigerian Entrepreneurs Featured",
    "Exclusive interviews with industry leaders",
    "In-depth business success stories",
    "Market analysis and trends",
    "Lifestyle and luxury features",
    "Pan-African business insights",
  ]

  const featuredEntrepreneurs = [
    { name: "Adenike Ogunlesi", company: "Ruff 'n' Tumble", industry: "Fashion & Retail" },
    { name: "Jason Njoku", company: "iROKOtv", industry: "Media & Entertainment" },
    { name: "Funmi Iyanda", company: "Change-A-Life Foundation", industry: "Media & Philanthropy" },
    { name: "Kola Aina", company: "Ventures Platform", industry: "Venture Capital" },
  ]

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
                    <BookOpen size={24} className="text-orange-600" />
                  </div>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    Publishing
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent leading-tight">
                  Profile Magazine Issue #45
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Our landmark 45th edition featuring Nigeria's top 50 entrepreneurs and their inspiring success
                  stories. A comprehensive showcase of business excellence, innovation, and leadership across Africa.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <Users className="text-orange-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">50+</div>
                      <div className="text-sm text-gray-600">Entrepreneurs</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Eye className="text-green-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">50K+</div>
                      <div className="text-sm text-gray-600">Readers</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="text-orange-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">15+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Download className="text-green-600 mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Digital</div>
                      <div className="text-sm text-gray-600">& Print</div>
                    </div>
                  </div>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                    Get Featured
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <img
                  src="/images/magazine-2.png"
                  alt="Profile Magazine Issue #45"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">About This Edition</h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    Profile Magazine Issue #45 represents a milestone in African business journalism. This special
                    edition celebrates the remarkable achievements of Nigeria's top 50 entrepreneurs who have not only
                    built successful businesses but have also contributed significantly to economic growth and job
                    creation across the continent.
                  </p>

                  <p>
                    Each featured entrepreneur's story is meticulously researched and presented, offering readers
                    valuable insights into their journey, challenges overcome, and strategies for success. The magazine
                    serves as both inspiration and practical guide for aspiring business leaders.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {magazineFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Editorial Excellence</h3>
                  <p>
                    Our editorial team conducted over 100 hours of interviews, visited 30+ business locations, and
                    collaborated with industry experts to ensure accuracy and depth in every story. The result is a
                    comprehensive resource that has become essential reading for business professionals across Africa.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <Card className="bg-gray-50 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Publication Details</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Issue Number</div>
                        <div className="font-semibold">#45</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Publication Date</div>
                        <div className="font-semibold">September 2023</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Pages</div>
                        <div className="font-semibold">120 Pages</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Distribution</div>
                        <div className="font-semibold">Pan-African</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Featured Entrepreneurs</h3>
                    <div className="space-y-4">
                      {featuredEntrepreneurs.map((entrepreneur, index) => (
                        <div key={index} className="border-b border-orange-200 last:border-b-0 pb-3 last:pb-0">
                          <div className="font-semibold text-gray-900">{entrepreneur.name}</div>
                          <div className="text-sm text-gray-600">{entrepreneur.company}</div>
                          <div className="text-xs text-orange-600 font-medium">{entrepreneur.industry}</div>
                        </div>
                      ))}
                      <div className="text-center pt-2">
                        <span className="text-sm text-gray-500">+ 46 more inspiring stories</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Impact & Reach</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Print Circulation</span>
                        <span className="font-semibold">25,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Digital Downloads</span>
                        <span className="font-semibold">35,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Social Media Reach</span>
                        <span className="font-semibold">500K+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Countries Distributed</span>
                        <span className="font-semibold">15</span>
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
      <section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent">
            Want to Be Featured in Profile Magazine?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Share your success story with Africa's premier business publication and inspire the next generation of
            entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4">
                Submit Your Story
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/services/profile-magazine">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-700 hover:bg-orange-50 text-lg px-8 py-4"
              >
                Learn More About Profile Magazine
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
