import Footer from "./Footer";
import Navbar from "./Navbar";
export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Golden Heart Awards 2024",
      date: "March 15, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Vancouver Convention Center",
      description:
        "Annual award ceremony celebrating outstanding achievements in business and community service.",
      category: "Awards",
      status: "Registration Open",
      image: "from-gold to-[#004d43]",
      featured: true,
    },
    {
      title: "Business Leadership Summit",
      date: "April 22, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Lviv Business Center",
      description:
        "Bringing together industry leaders to discuss future trends and opportunities.",
      category: "Conference",
      status: "Early Bird",
      image: "from-[#004d43] to-gold",
      featured: false,
    },
    {
      title: "Innovation Showcase",
      date: "May 10, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Virtual Event",
      description:
        "Highlighting breakthrough innovations and emerging technologies.",
      category: "Showcase",
      status: "Coming Soon",
      image: "from-gold to-[#004d43]",
      featured: false,
    },
  ];

  const pastEvents = [
    {
      title: "Tech Innovation Forum 2023",
      date: "December 8, 2023",
      attendees: "500+",
      highlights: [
        "15 Keynote Speakers",
        "30+ Exhibitors",
        "Global Networking",
      ],
    },
    {
      title: "Sustainability Summit 2023",
      date: "October 15, 2023",
      attendees: "300+",
      highlights: [
        "Climate Action Panel",
        "Green Tech Demos",
        "Policy Discussions",
      ],
    },
    {
      title: "Entrepreneurship Awards 2023",
      date: "September 20, 2023",
      attendees: "400+",
      highlights: ["50 Nominees", "10 Award Categories", "Startup Pitches"],
    },
  ];

  const eventTypes = [
    {
      type: "Corporate Events",
      description:
        "Professional gatherings that strengthen business relationships",
      icon: "🏢",
    },
    {
      type: "Award Ceremonies",
      description: "Celebrating excellence and recognizing achievements",
      icon: "🏆",
    },
    {
      type: "Conferences",
      description: "Knowledge sharing and industry networking events",
      icon: "🎤",
    },
    {
      type: "Product Launches",
      description: "Introducing innovations to the market with impact",
      icon: "🚀",
    },
  ];

  return (
    <div className="w-full bg-zinc-900 text-white min-h-screen">
      <Navbar />

      <div className="px-6 lg:px-14 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
              <div className="flex-1">
                <h1 className="font-FoundersGroteskXCond-Bold text-6xl md:text-7xl lg:text-9xl uppercase mb-6 leading-none">
                  Our
                </h1>
                <h1 className="font-FoundersGroteskXCond-Bold text-6xl md:text-7xl lg:text-9xl uppercase mb-8 leading-none text-gold">
                  Events
                </h1>
              </div>
              <div className="lg:max-w-md">
                <p className="font-NeueMontreal-Regular text-lg lg:text-xl text-zinc-300 leading-relaxed">
                  Join us at our upcoming events where industry leaders,
                  innovators, and visionaries come together to shape the future
                  and create meaningful connections.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Event */}
          <div className="mb-20">
            {upcomingEvents
              .filter((event) => event.featured)
              .map((event, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${event.image} rounded-2xl p-1 mb-8`}
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
                              <p className="text-zinc-400 text-sm">Location</p>
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
              ))}
          </div>

          {/* Upcoming Events */}
          <div className="mb-20">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-12">
              Upcoming Events
            </h2>
            <div className="space-y-8">
              {upcomingEvents
                .filter((event) => !event.featured)
                .map((event, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800 rounded-2xl p-8 lg:p-12 hover:bg-zinc-750 transition-all duration-300 group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1 lg:pr-12">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-zinc-400 font-NeueMontreal-Regular text-sm">
                            {event.category}
                          </span>
                          <span className="text-zinc-500">•</span>
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-NeueMontreal-Regular">
                            {event.status}
                          </span>
                        </div>
                        <h3 className="font-FoundersGroteskXCond-Bold text-2xl lg:text-3xl mb-4 group-hover:text-gold transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="font-NeueMontreal-Regular text-zinc-300 mb-6 leading-relaxed">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-zinc-400">
                          <div>
                            <span className="font-NeueMontreal-Regular">
                              📅 {event.date}
                            </span>
                          </div>
                          <div>
                            <span className="font-NeueMontreal-Regular">
                              🕐 {event.time}
                            </span>
                          </div>
                          <div>
                            <span className="font-NeueMontreal-Regular">
                              📍 {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 lg:mt-0">
                        <button className="bg-gold text-zinc-900 px-6 py-3 rounded-full font-NeueMontreal-Regular hover:bg-[#b8d654] transition-colors duration-300">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Event Types */}
          <div className="mb-20">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-12 text-center">
              Event Types We Host
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventTypes.map((type, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-zinc-800 rounded-xl p-8 hover:bg-zinc-700 transition-colors duration-300">
                    <div className="text-4xl mb-4">{type.icon}</div>
                    <h3 className="font-FoundersGroteskXCond-Bold text-xl mb-4 group-hover:text-gold transition-colors duration-300">
                      {type.type}
                    </h3>
                    <p className="font-NeueMontreal-Regular text-zinc-400 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div className="mb-20">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-12">
              Past Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700 transition-colors duration-300"
                >
                  <h3 className="font-FoundersGroteskXCond-Bold text-xl mb-3">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-zinc-400">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.attendees} attendees</span>
                  </div>
                  <div className="space-y-2">
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <span className="font-NeueMontreal-Regular text-zinc-300 text-sm">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
