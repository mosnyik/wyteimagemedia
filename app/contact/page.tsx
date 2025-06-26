"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Background3D } from "@/components/background-3d"
import { AIChatAssistant } from "@/components/ai-chat-assistant"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+44 7733 657 865", "+234 806 348 5272"],
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["wyteimagemedia@mail.co.uk", "info@wyteimage.com"],
      color: "text-orange-600",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["United Kingdom, England", "Nigeria Operations"],
      color: "text-green-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM GMT", "Sat: 10:00 AM - 4:00 PM GMT"],
      color: "text-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white to-gray-50">
        <Background3D />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
              Ready to elevate your brand or event to new heights? Let's create something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Let's Start a Conversation</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're planning a major event, need premium hospitality services, or want to elevate your brand,
                our team of experts is here to help. Based in the United Kingdom with operations across Africa, we're
                perfectly positioned to bring your vision to life.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-white border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <info.icon className={`${info.color} mr-4 mt-1 flex-shrink-0`} size={24} />
                        <div>
                          <h3 className="text-gray-900 font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                    Facebook
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-orange-600">
                    Instagram
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                    LinkedIn
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-orange-600">
                    Twitter
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <Input
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input
                      type="tel"
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                      placeholder="+44 7733 657 865"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500">
                      <option value="">Select a service</option>
                      <option value="events">Event Management & Hospitality</option>
                      <option value="hotels">Hotel Reservations</option>
                      <option value="magazine">Profile Magazine</option>
                      <option value="awards">Golden Hearts Awards</option>
                      <option value="branding">Branding & Customizing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                      rows={5}
                      placeholder="Tell us about your project, event, or how we can help you..."
                      required
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3 transition-colors duration-300">
                    Send Message
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How far in advance should I book your services?
                </h3>
                <p className="text-gray-600">
                  We recommend booking at least 3-6 months in advance for major events, though we can accommodate
                  shorter timelines depending on availability and scope.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Do you provide services outside the UK?</h3>
                <p className="text-gray-600">
                  Yes, we provide services globally with a focus on Africa and Europe. Our UK base allows us to
                  coordinate international events seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What's included in your event management service?
                </h3>
                <p className="text-gray-600">
                  Our comprehensive service includes planning, venue selection, vendor coordination, logistics
                  management, and on-site execution support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">How can I get featured in Profile Magazine?</h3>
                <p className="text-gray-600">
                  We welcome submissions for features. Please send your story pitch or business profile to our editorial
                  team for consideration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatAssistant />
    </div>
  )
}
