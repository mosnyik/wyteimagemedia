"use client";

import type React from "react";

import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import contactUsImg from "../assets/images/pages/contact-us.jpg";
import emailjs from "emailjs-com";
import { toast } from "sonner";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

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
    // toast.success("Message sent successfully!");
    setSending(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            service: "",
            message: "",
          });
          setSending(false);
        },
        (error) => {
          console.error("Email error:", error.text);
          toast.error("Something went wrong, please try again.");
          setSending(false);
        }
      );
  };

  const contactInfo = [
    {
      title: "UK Office",
      address: "Leeds, United Kingdom",
      phone: "+447 733 7865",
      email: "wyteimagemediaofficial@gmail.com",
      icon: "🏢",
    },
    // {
    //   title: "Lviv Office",
    //   address: "30 Chukarina St\nLviv, Ukraine",
    //   phone: "+380 32 555-0123",
    //   email: "lviv@wyteimage.com",
    //   icon: "🌍",
    // },
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
  const socials = [
    { name: "Instagram", link: "https://www.instagram.com/wyteimagemedia/" },
    { name: "YouTube", link: "" },
    { name: "Facebook", link: "https://www.facebook.com/share/1F4erv7tqq/" },
    // { name: "Linkedin", link: "" },
  ];

  return (
    <div className="w-full bg-zinc-900 text-white min-h-screen">
      <Navbar />

      <div className="px-6 lg:px-14 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 relative rounded-2xl overflow-hidden p-8 lg:p-12 h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[500px]"
            style={{
              backgroundImage: `url(${contactUsImg})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="flex-1 relative z-10 flex flex-col justify-center lg:justify-end">
              <h1
                className="font-FoundersGroteskXCond-Bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase mb-2 sm:mb-6 leading-none text-white drop-shadow-2xl"
                style={{
                  textShadow:
                    "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)",
                }}
              >
                Contact
              </h1>
              <h1
                className="font-FoundersGroteskXCond-Bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase mb-6 sm:mb-8 leading-none text-gold drop-shadow-2xl"
                style={{
                  textShadow:
                    "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)",
                }}
              >
                Us
              </h1>
            </div>
            <div className="lg:max-w-md relative z-10">
              <p className="font-NeueMontreal-Regular text-lg lg:text-xl text-white drop-shadow-md">
                Ready to create something extraordinary? Let's discuss your
                vision and explore how we can bring it to life together.
              </p>
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
                        placeholder="+447 123 4567"
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
                    className={`w-full bg-gold text-zinc-900 py-4 rounded-lg font-NeueMontreal-Regular font-medium hover:bg-[#b8d654] transition-colors duration-300 
                      ${sending ? "cursor-not-allowed opacity-70" : ""}`}
                    disabled={sending}
                  >
                    {sending ? " Sending..." : "Send Message"}
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
                        className="hover:text-gold transition-colors duration-300"
                      >
                        {info.phone}
                      </a>
                    </div>
                    <div>
                      <a
                        href={`mailto:${info.email}`}
                        className="hover:text-gold transition-colors duration-300"
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
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      className="block font-NeueMontreal-Regular text-zinc-300 hover:text-gold transition-colors duration-300"
                    >
                      {social.name}
                    </a>
                  ))}
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
                  <h3 className="font-FoundersGroteskXCond-Bold text-xl mb-4 text-gold">
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
          <div className="bg-gradient-to-r from-[#004d43] to-gold rounded-2xl p-1">
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
                  <div className="font-FoundersGroteskXCond-Bold text-3xl text-gold mb-2">
                    24hrs
                  </div>
                  <div className="font-NeueMontreal-Regular text-zinc-300">
                    Initial Response
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-FoundersGroteskXCond-Bold text-3xl text-gold mb-2">
                    48hrs
                  </div>
                  <div className="font-NeueMontreal-Regular text-zinc-300">
                    Detailed Proposal
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-FoundersGroteskXCond-Bold text-3xl text-gold mb-2">
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
