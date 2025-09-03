import Footer from "./Footer";
import Navbar from "./Navbar";
import logoImg from "../assets/images/logos/wyte.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Import images for events
import pan1 from "../assets/images/pan/pan1.png";
import pan2 from "../assets/images/pan/pan2.png";
import pan3 from "../assets/images/pan/pan3.jpeg";
import pan4 from "../assets/images/pan/pan4.jpeg";
import pan5 from "../assets/images/pan/pan1.png";
import pan6 from "../assets/images/pan/pan2.png";
import pan7 from "../assets/images/pan/pan3.jpeg";
import pan8 from "../assets/images/pan/pan4.jpeg";
import pan9 from "../assets/images/pan/pan1.png";
import pan10 from "../assets/images/pan/pan2.png";
import pan11 from "../assets/images/pan/pan3.jpeg";
import pan12 from "../assets/images/pan/pan4.jpeg";
import gha1 from "../assets/images/gha/gha1.png";
import gha2 from "../assets/images/gha/gha2.jpeg";
import gha3 from "../assets/images/gha/gha3.jpeg";
import gha4 from "../assets/images/gha/gha4.jpeg";
import gha5 from "../assets/images/gha/gha5.jpeg";
import gha6 from "../assets/images/gha/gha6.jpeg";
import gha7 from "../assets/images/gha/gha7.jpeg";
import gha8 from "../assets/images/gha/gha8.jpeg";
import gha9 from "../assets/images/gha/gha9.jpeg";
import qnn1 from "../assets/images/qnn/qnn1.jpeg";
import qnn2 from "../assets/images/qnn/qnn2.jpeg";
import qnn3 from "../assets/images/qnn/qnn3.jpeg";
import qnn4 from "../assets/images/qnn/qnn4.jpeg";
import qnn5 from "../assets/images/qnn/qnn1.jpeg";
import qnn6 from "../assets/images/qnn/qnn6.jpeg";
import qnn7 from "../assets/images/qnn/qnn7.jpeg";
import qnn8 from "../assets/images/qnn/qnn8.jpeg";
import qnn9 from "../assets/images/qnn/qnn9.jpeg";
import qnn10 from "../assets/images/qnn/qnn10.jpeg";
import qnn11 from "../assets/images/qnn/qnn11.jpeg";
import qnn12 from "../assets/images/qnn/qnn12.jpeg";
import qnn13 from "../assets/images/qnn/qnn13.jpeg";
import qnn14 from "../assets/images/qnn/qnn14.jpeg";
import qnn15 from "../assets/images/qnn/qnn15.jpeg";
import qnn16 from "../assets/images/qnn/qnn16.jpeg";
import sbc1 from "../assets/images/sbc/sbc1.jpeg";
import sbc2 from "../assets/images/sbc/sbc2.jpeg";
import sbc3 from "../assets/images/sbc/sbc3.jpeg";
import sbc4 from "../assets/images/sbc/sbc4.jpeg";
import sbc5 from "../assets/images/sbc/sbc5.jpeg";
import sbc6 from "../assets/images/sbc/sbc6.jpeg";
import sbc7 from "../assets/images/sbc/sbc7.jpeg";
import sbc8 from "../assets/images/sbc/sbc8.jpeg";
import sbc9 from "../assets/images/sbc/sbc9.jpeg";
import sbc10 from "../assets/images/sbc/sbc10.jpeg";
import sbc11 from "../assets/images/sbc/sbc11.jpeg";
import sbc12 from "../assets/images/sbc/sbc12.jpeg";
import sbc13 from "../assets/images/sbc/sbc13.jpeg";
import sbc14 from "../assets/images/sbc/sbc14.jpeg";

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Profile Awards Nigeria 2024",
      date: "November 16, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Abuja, Nigeria",
      description:
        "The flagship recognition platform celebrating outstanding personalities who have contributed to leadership, philanthropy, and industry.",
      category: "Awards",
      status: "Registration Open",
      images: [
        pan1,
        pan2,
        pan3,
        pan4,
        pan5,
        pan6,
        pan7,
        pan8,
        pan9,
        pan10,
        pan11,
        pan12,
      ],
      featured: true,
    },
  ];

  const pastEvents = [
    {
      title: "Queen of Northern Nigeria Pageant 2024",
      date: "December 10, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Kano, Nigeria",
      description:
        "A cultural heritage pageant empowering women while showcasing the traditions of Northern Nigeria.",
      category: "Pageant",
      status: "Coming Soon",
      images: [
        qnn1,
        qnn2,
        qnn3,
        qnn4,
        qnn5,
        qnn6,
        qnn7,
        qnn8,
        qnn9,
        qnn10,
        qnn11,
        qnn12,
        qnn13,
        qnn14,
        qnn15,
        qnn16,
      ],
      featured: false,
    },
    {
      title: "Golden Heart Awards 2023",
      date: "October 20, 2023",
      attendees: "500+",
      highlights: [
        "Celebrating Philanthropy",
        "Humanitarian Impact",
        "Leadership Excellence",
      ],
      images: [gha1, gha2, gha3, gha4, gha5, gha6, gha7, gha8, gha9],
    },
    {
      title: "Spelling Bee Competition 2023",
      date: "September 5, 2023",
      attendees: "300+",
      highlights: [
        "Literacy Challenge",
        "Youth Development",
        "Educational Excellence",
      ],
      images: [
        sbc1,
        sbc2,
        sbc3,
        sbc4,
        sbc5,
        sbc6,
        sbc7,
        sbc8,
        sbc9,
        sbc10,
        sbc11,
        sbc12,
        sbc13,
        sbc14,
      ],
    },
  ];

  // Slider hook for each event
  const useEventSlider = (images: string[]) => {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
      if (images.length > 1) {
        intervalRef.current = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
      }
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [images.length]);

    return { index, setIndex };
  };

  return (
    <div className="w-full bg-zinc-900 text-white min-h-screen">
      <Navbar />

      <div className="px-6 lg:px-14 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="mb-20">
            <div
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 relative rounded-2xl overflow-hidden p-8 lg:p-12 h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[500px]"
              style={{
                backgroundImage: `url(${logoImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>

              <div className="flex-1 relative z-10 flex flex-col justify-center lg:justify-end">
                <h1 className="font-FoundersGroteskXCond-Bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase mb-2 sm:mb-6 leading-none text-white drop-shadow-2xl">
                  Our
                </h1>
                <h1 className="font-FoundersGroteskXCond-Bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase mb-6 sm:mb-8 leading-none text-gold drop-shadow-2xl">
                  Events
                </h1>
              </div>
              <div className="lg:max-w-md relative z-10">
                <p className="font-NeueMontreal-Regular text-lg lg:text-xl text-white drop-shadow-md">
                  Join us at our signature events — from Profile Awards Nigeria
                  to the Golden Heart Awards — where leaders, innovators, and
                  visionaries come together to inspire and celebrate excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Event */}
          <div className="mb-20">
            {upcomingEvents
              .filter((event) => event.featured)
              .map((event, index) => {
                const { index: imgIndex } = useEventSlider(event.images);
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gold to-[#004d43] rounded-2xl p-1 mb-8"
                  >
                    <div className="bg-zinc-900 rounded-2xl p-8 lg:p-12 h-full">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex-1 lg:pr-12">
                          <div className="flex items-center gap-4 mb-6">
                            <span className="bg-gold text-zinc-900 px-3 py-1 rounded-full text-sm font-NeueMontreal-Regular">
                              Featured Event
                            </span>
                            <span className="text-zinc-400 font-NeueMontreal-Regular">
                              {event.category}
                            </span>
                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-NeueMontreal-Regular">
                              {event.status}
                            </span>
                          </div>
                          <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-6 leading-tight">
                            {event.title}
                          </h2>
                          <p className="font-NeueMontreal-Regular text-lg text-zinc-300 mb-8 leading-relaxed">
                            {event.description}
                          </p>
                          <div className="relative overflow-hidden h-80 rounded-xl mb-6">
                            <AnimatePresence mode="wait">
                              <motion.img
                                key={`${event.title}-${imgIndex}`}
                                src={event.images[imgIndex]}
                                alt={event.title}
                                className="w-full h-80 object-cover rounded-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                              />
                            </AnimatePresence>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-gold text-zinc-900 px-8 py-4 rounded-full font-NeueMontreal-Regular hover:bg-[#b8d654] transition-colors duration-300">
                              Register Now
                            </button>
                            <button className="border border-zinc-600 text-zinc-300 px-8 py-4 rounded-full font-NeueMontreal-Regular hover:border-[#cdea68] hover:text-[#cdea68] transition-colors duration-300">
                              Learn More
                            </button>
                          </div>
                        </div>
                        <div className="lg:w-80 mt-8 lg:mt-0">
                          <div className="bg-zinc-800 rounded-xl p-6">
                            <h3 className="font-FoundersGroteskXCond-Bold text-xl mb-4 text-gold">
                              Event Details
                            </h3>
                            <div className="space-y-4">
                              <div>
                                <p className="text-zinc-400 text-sm">Date</p>
                                <p className="font-NeueMontreal-Regular">
                                  {event.date}
                                </p>
                              </div>
                              <div>
                                <p className="text-zinc-400 text-sm">Time</p>
                                <p className="font-NeueMontreal-Regular">
                                  {event.time}
                                </p>
                              </div>
                              <div>
                                <p className="text-zinc-400 text-sm">
                                  Location
                                </p>
                                <p className="font-NeueMontreal-Regular">
                                  {event.location}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Upcoming Events */}
          <div className="mb-20">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-12">
              Upcoming Events
            </h2>
            <div className="space-y-8">
              {upcomingEvents
                .filter((event) => !event.featured)
                .map((event, index) => {
                  const { index: imgIndex } = useEventSlider(event.images);
                  return (
                    <div
                      key={index}
                      className="bg-zinc-800 rounded-2xl p-8 lg:p-12 group"
                    >
                      <h3 className="font-FoundersGroteskXCond-Bold text-2xl lg:text-3xl mb-4 group-hover:text-gold transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="font-NeueMontreal-Regular text-zinc-300 mb-6 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="relative overflow-hidden h-72 rounded-xl mb-6">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={`${event.title}-${imgIndex}`}
                            src={event.images[imgIndex]}
                            alt={event.title}
                            className="w-full h-72 object-cover rounded-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                          />
                        </AnimatePresence>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-zinc-400 mb-4">
                        <span>📅 {event.date}</span>
                        <span>🕐 {event.time}</span>
                        <span>📍 {event.location}</span>
                      </div>
                      <button className="bg-gold text-zinc-900 px-6 py-3 rounded-full font-NeueMontreal-Regular hover:bg-[#b8d654] transition-colors duration-300">
                        Register
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Past Events */}
          <div className="mb-20">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-12">
              Past Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => {
                const { index: imgIndex } = useEventSlider(event.images);
                return (
                  <div
                    key={index}
                    className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700 transition-colors duration-300"
                  >
                    <h3 className="font-FoundersGroteskXCond-Bold text-xl mb-3">
                      {event.title}
                    </h3>
                    <div className="text-sm text-zinc-400 mb-3">
                      {event.date} • {event.attendees} attendees
                    </div>
                    <div className="relative overflow-hidden h-60 rounded-xl mb-4">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={`${event.title}-${imgIndex}`}
                          src={event.images[imgIndex]}
                          alt={event.title}
                          className="w-full h-60 object-cover rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8 }}
                        />
                      </AnimatePresence>
                    </div>
                    <div className="space-y-2">
                      {event.highlights?.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gold rounded-full"></div>
                          <span className="font-NeueMontreal-Regular text-zinc-300 text-sm">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#004d43] to-gold rounded-2xl p-1">
            <div className="bg-zinc-900 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-6">
                Host Your Event With Us
              </h2>
              <p className="font-NeueMontreal-Regular text-lg mb-8 max-w-2xl mx-auto text-zinc-300 leading-relaxed">
                Let us help you create memorable experiences that leave lasting
                impressions on your audience and achieve your event objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gold text-zinc-900 px-8 py-4 rounded-full font-NeueMontreal-Regular hover:bg-[#b8d654] transition-colors duration-300">
                  Plan Your Event
                </button>
                <button className="border border-zinc-600 text-zinc-300 px-8 py-4 rounded-full font-NeueMontreal-Regular hover:border-[#cdea68] hover:text-[#cdea68] transition-colors duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
