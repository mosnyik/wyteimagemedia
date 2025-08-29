"use client";

import type React from "react";

import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      title: "Vancouver Office",
      address: "202-1965 W 4th Ave\nVancouver, Canada",
      phone: "+1 (604) 555-0123",
      email: "vancouver@wyteimage.com",
      icon: "🏢",
    },
    {
      title: "Lviv Office",
      address: "30 Chukarina St\nLviv, Ukraine",
      phone: "+380 32 555-0123",
      email: "lviv@wyteimage.com",
      icon: "🌍",
    },
  ];

  const serviceOptions = [
    "Event Management",
    "Consultation Services",
    "Brand Development",
    "Award Ceremonies",
    "Corporate Events",
    "Product Launches",
    "Other",
  ];

  const faqs = [
    {
      question: "How far in advance should I book your services?",
      answer:
        "We recommend booking at least 3-6 months in advance for major events, though we can accommodate shorter timelines depending on availability and event complexity.",
    },
    {
      question: "Do you handle international events?",
      answer:
        "Yes, we have experience organizing events globally and can coordinate with local partners to ensure seamless execution anywhere in the world.",
    },
    {
      question: "What's included in your event management service?",
      answer:
        "Our comprehensive service includes planning, vendor coordination, logistics management, on-site execution, and post-event analysis. We handle every detail from concept to completion.",
    },
    {
      question: "Can you work within our budget?",
      answer:
        "Absolutely. We work with various budget ranges and will create a customized solution that maximizes value while meeting your specific requirements and objectives.",
    },
  ];

  return (
    <div className="w-full bg-zinc-900 text-white min-h-screen">
      <Navbar />

      <div className="px-6 lg:px-14 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-24">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
              <div className="flex-1">
                <h1 className="font-FoundersGroteskXCond-Bold text-6xl md:text-7xl lg:text-9xl uppercase mb-6 leading-none">
                  Contact
                </h1>
                <h1 className="font-FoundersGroteskXCond-Bold text-6xl md:text-7xl lg:text-9xl uppercase mb-8 leading-none text-[#cdea68]">
                  Us
                </h1>
              </div>
              <div className="lg:max-w-md">
                <p className="font-NeueMontreal-Regular text-lg lg:text-xl text-zinc-300 leading-relaxed">
                  Ready to create something extraordinary? Let's discuss your
                  vision and explore how we can bring it to life together.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-800 rounded-2xl p-8 lg:p-12">
                <h2 className="font-FoundersGroteskXCond-Bold text-3xl mb-8">
                  Get In Touch
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-NeueMontreal-Regular text-zinc-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-[#cdea68] transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-NeueMontreal-Regular text-zinc-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-[#cdea68] transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-NeueMontreal-Regular text-zinc-300 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-[#cdea68] transition-colors duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-NeueMontreal-Regular text-zinc-300 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-[#cdea68] transition-colors duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-NeueMontreal-Regular text-zinc-300 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:border-[#cdea68] transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-NeueMontreal-Regular text-zinc-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-[#cdea68] transition-colors duration-300 resize-vertical"
                      placeholder="Tell us about your project, event, or how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#cdea68] text-zinc-900 py-4 rounded-lg font-NeueMontreal-Regular font-medium hover:bg-[#b8d654] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-zinc-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{info.icon}</div>
                    <h3 className="font-FoundersGroteskXCond-Bold text-xl">
                      {info.title}
                    </h3>
                  </div>
                  <div className="space-y-3 font-NeueMontreal-Regular text-zinc-300">
                    <div>
                      <p className="whitespace-pre-line">{info.address}</p>
                    </div>
                    <div>
                      <a
                        href={`tel:${info.phone}`}
                        className="hover:text-[#cdea68] transition-colors duration-300"
                      >
                        {info.phone}
                      </a>
                    </div>
                    <div>
                      <a
                        href={`mailto:${info.email}`}
                        className="hover:text-[#cdea68] transition-colors duration-300"
                      >
                        {info.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="font-FoundersGroteskXCond-Bold text-xl mb-4">
                  Follow Us
                </h3>
                <div className="space-y-3">
                  {["Instagram", "LinkedIn", "Facebook", "Behance"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="block font-NeueMontreal-Regular text-zinc-300 hover:text-[#cdea68] transition-colors duration-300"
                      >
                        {social}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-24">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-zinc-800 rounded-xl p-6 lg:p-8">
                  <h3 className="font-FoundersGroteskXCond-Bold text-xl mb-4 text-[#cdea68]">
                    {faq.question}
                  </h3>
                  <p className="font-NeueMontreal-Regular text-zinc-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-gradient-to-r from-[#004d43] to-[#cdea68] rounded-2xl p-1">
            <div className="bg-zinc-900 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-6">
                Quick Response Guarantee
              </h2>
              <p className="font-NeueMontreal-Regular text-lg mb-8 max-w-2xl mx-auto text-zinc-300 leading-relaxed">
                We understand that timing is crucial for your projects. That's
                why we guarantee a response to all inquiries within 24 hours
                during business days.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="font-FoundersGroteskXCond-Bold text-3xl text-[#cdea68] mb-2">
                    24hrs
                  </div>
                  <div className="font-NeueMontreal-Regular text-zinc-300">
                    Initial Response
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-FoundersGroteskXCond-Bold text-3xl text-[#cdea68] mb-2">
                    48hrs
                  </div>
                  <div className="font-NeueMontreal-Regular text-zinc-300">
                    Detailed Proposal
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-FoundersGroteskXCond-Bold text-3xl text-[#cdea68] mb-2">
                    7 days
                  </div>
                  <div className="font-NeueMontreal-Regular text-zinc-300">
                    Project Kickoff
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
