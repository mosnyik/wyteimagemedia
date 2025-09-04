"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import pm1 from "../assets/images/sbc/sbc5.jpeg";
import pm2 from "../assets/images/sbc/sbc5.jpeg";
import pm3 from "../assets/images/sbc/sbc4.jpeg";
import pm4 from "../assets/images/sbc/sbc4.jpeg";
import pm5 from "../assets/images/sbc/sbc5.jpeg";
import pm6 from "../assets/images/sbc/sbc6.jpeg";
import pmBgImg from "../assets/images/pm/pm1.jpg";
import pmBookBgImg from "../assets/images/pm/pm2.jpg";

const MagazinePurchase = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const magazinePages = [
    {
      id: 1,
      title: "Cover Story",
      description: "Meet the Golden Heart Award Winners",
      content: "Exclusive interviews with this year's most inspiring achievers",
      image: pm1,
    },
    {
      id: 2,
      title: "Behind the Scenes",
      description: "Awards Ceremony Highlights",
      content: "Capturing the magic moments of recognition and celebration",
      image: pm2,
    },
    {
      id: 3,
      title: "Success Stories",
      description: "Profiles of Excellence",
      content: "In-depth features on leaders who are changing the world",
      image: pm3,
    },
    {
      id: 4,
      title: "Industry Insights",
      description: "Trends & Innovation",
      content:
        "Expert analysis on emerging trends and breakthrough innovations",
      image: pm4,
    },
    {
      id: 5,
      title: "Global Impact",
      description: "Making a Difference",
      content:
        "Stories of individuals and organizations creating positive change",
      image: pm5,
    },
    {
      id: 6,
      title: "Future Vision",
      description: "What's Next",
      content:
        "Looking ahead to the next generation of excellence and achievement",
      image: pm6,
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % magazinePages.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPaused, magazinePages.length]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % magazinePages.length);
  };

  const prevPage = () => {
    setCurrentPage(
      (prev) => (prev - 1 + magazinePages.length) % magazinePages.length
    );
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className="relative w-full min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#cdea68] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#cdea68] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-6 lg:px-14 py-20">
        {/* Header Section */}
        <div className="mb-20">
          <div
            className="relative flex flex-col items-center justify-center text-center 
               rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-12 
               h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[500px]"
            style={{
              backgroundImage: `url(${pmBgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Centered Content */}
            <div className="relative z-10 max-w-3xl flex flex-col items-center justify-center">
              <h1
                className="font-FoundersGroteskXCond-Bold 
                     text-4xl sm:text-6xl md:text-7xl lg:text-9xl 
                     uppercase leading-none text-white drop-shadow-2xl mb-4"
              >
                Profile
              </h1>
              <h1
                className="font-FoundersGroteskXCond-Bold 
                     text-4xl sm:text-6xl md:text-7xl lg:text-9xl 
                     uppercase leading-none text-gold drop-shadow-2xl mb-8"
              >
                Magazine
              </h1>
              <p
                className="font-NeueMontreal-Regular text-lg sm:text-xl lg:text-2xl 
                    text-white drop-shadow-md leading-relaxed"
              >
                Discover the stories behind the Golden Heart Awards winners,
                exclusive interviews, and insights into the world of excellence
                and achievement.
              </p>
            </div>
          </div>
        </div>

        {/* Magazine Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-FoundersGroteskXCond-Bold text-4xl md:text-5xl uppercase text-white mb-4">
              Preview Inside
            </h3>
            <p className="text-zinc-300 text-lg">
              Get a glimpse of what awaits you in Profile Magazine
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Slider Container */}
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-800/30 backdrop-blur-sm border border-zinc-700"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {magazinePages.map((page) => (
                  <div
                    key={page.id}
                    className="w-full flex-shrink-0 p-8 md:p-12"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Magazine Cover */}
                      <div className="flex-1">
                        <div className="w-full max-w-md mx-auto">
                          <img
                            src={page.image || "/placeholder.svg"}
                            alt={`Magazine page ${page.id}: ${page.title}`}
                            className="w-full h-auto rounded-xl shadow-2xl border border-zinc-600 hover:border-[#cdea68] transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Page Content */}
                      <div className="flex-1 text-center md:text-left">
                        <span className="text-[#cdea68] text-sm uppercase tracking-wider font-semibold">
                          Page {page.id}
                        </span>
                        <h4 className="font-FoundersGroteskXCond-Bold text-3xl md:text-4xl text-white mb-3 uppercase">
                          {page.title}
                        </h4>
                        <h5 className="text-xl text-zinc-300 mb-4 font-semibold">
                          {page.description}
                        </h5>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                          {page.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevPage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#cdea68] text-zinc-900 rounded-full flex items-center justify-center hover:bg-[#b8d455] transition-all duration-300 shadow-lg hover:shadow-xl z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextPage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#cdea68] text-zinc-900 rounded-full flex items-center justify-center hover:bg-[#b8d455] transition-all duration-300 shadow-lg hover:shadow-xl z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Page Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {magazinePages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "bg-[#cdea68]"
                      : "bg-zinc-600 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Magazine Showcase */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mb-20">
          {/* Magazine Cover */}
          <div
            className="relative z-10 w-80 h-96 md:w-96 md:h-[480px] 
             rounded-2xl border border-zinc-600 
             overflow-hidden shadow-2xl 
             transition-all duration-500 
             group hover:border-[#cdea68]"
            style={{
              backgroundImage: `url(${pmBookBgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }} // clears when in view on mobile
              transition={{ duration: 0.8 }}
              className={`absolute inset-0 bg-black/40 lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-500`}
            ></motion.div>

            {/* Gradient overlay (optional) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#cdea68]/20 to-transparent"></div>

            {/* Hover overlay */}
            <div
              className={`absolute inset-0 bg-[#cdea68]/10 transition-opacity duration-500`}
            ></div>

            {/* Floating elements (kept inside, so clipped by border radius) */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#cdea68] rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#cdea68] rounded-full opacity-60 animate-pulse delay-1000"></div>

            {/* Motion content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 flex-1 flex justify-center"
            ></motion.div>
          </div>

          {/* Content & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <h3 className="font-FoundersGroteskXCond-Bold text-4xl md:text-5xl lg:text-6xl uppercase text-white mb-6">
              Get Your Copy
            </h3>

            <div className="space-y-4 mb-8 text-zinc-300">
              <p className="text-lg leading-relaxed">
                📖 <strong>Exclusive Content:</strong> In-depth profiles of
                award winners and industry leaders
              </p>
              <p className="text-lg leading-relaxed">
                🎯 <strong>Behind the Scenes:</strong> Exclusive access to
                Golden Heart Awards ceremonies
              </p>
              <p className="text-lg leading-relaxed">
                ✨ <strong>Premium Quality:</strong> High-quality print and
                digital formats available
              </p>
              <p className="text-lg leading-relaxed">
                🌍 <strong>Global Reach:</strong> Stories from achievers around
                the world
              </p>
            </div>

            {/* Price & CTA */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <span className="text-zinc-400 text-lg line-through mr-3">
                  £25.00
                </span>
                <span className="text-[#cdea68] text-3xl font-bold">
                  £15.00
                </span>
                <span className="text-zinc-400 text-sm ml-2">Limited Time</span>
              </div>

              <motion.a
                href="https://wyteimage.gumroad.com/l/profile-africa-magazine-9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="pulse-glow bg-[#cdea68] text-zinc-900 font-bold text-xl px-12 py-4 rounded-full hover:bg-[#b8d455] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Purchase Now on Gumroad
                </button>
              </motion.a>

              <p className="text-zinc-400 text-sm">
                Secure payment • Instant download • 30-day money-back guarantee
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: "📚",
              title: "Rich Content",
              description:
                "Over 100 pages of premium content and exclusive interviews",
            },
            {
              icon: "🏆",
              title: "Award Winners",
              description:
                "Profiles of Golden Heart Awards recipients and their journeys",
            },
            {
              icon: "🌟",
              title: "Inspiration",
              description:
                "Stories that inspire and motivate excellence in every field",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 text-center hover:border-[#cdea68] transition-all duration-300 hover:bg-zinc-800/70"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-white font-bold text-xl mb-2">
                {feature.title}
              </h4>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-zinc-300 text-lg mb-6">
            Join thousands of readers who trust Profile Magazine for excellence
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400">
            <span>✓ Digital & Print Available</span>
            <span>✓ Worldwide Shipping</span>
            <span>✓ Premium Quality</span>
            <span>✓ Exclusive Content</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MagazinePurchase;
