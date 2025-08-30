import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ServicesPage() {
  const services = [
    {
      title: "Event Planning & Management",
      description:
        "Complete event planning and management from seminars to awards ceremonies, talent hunts, and gala nights with meticulous attention to detail.",
      features: [
        "Awards/Gala Nights",
        "Seminars",
        "Talent Hunts",
        "Corporate Events",
      ],
      icon: "🎯",
      color: "from-gold to-[#004d43]",
    },
    {
      title: "Event & Brand Consultation",
      description:
        "Strategic guidance for your event planning and brand development with proven methodologies and industry expertise.",
      features: [
        "Brand Strategy",
        "Event Planning",
        "Market Analysis",
        "Creative Direction",
      ],
      icon: "💡",
      color: "from-[#004d43] to-gold",
    },
    {
      title: "International Concerts",
      description:
        "Organizing world-class musical concerts, comedy shows, and charity fundraising events that create lasting memories.",
      features: [
        "Musical Concerts",
        "Comedy Shows",
        "Charity Events",
        "Fund Raising",
      ],
      icon: "🎵",
      color: "from-gold to-[#004d43]",
    },
    {
      title: "Publicity & Promotions",
      description:
        "Comprehensive publicity and promotional services to ensure your event reaches the right audience and creates maximum impact.",
      features: [
        "Social Media Marketing",
        "Press Relations",
        "Digital Campaigns",
        "Brand Promotion",
      ],
      icon: "📢",
      color: "from-[#004d43] to-gold",
    },
    {
      title: "Branding Services",
      description:
        "Complete branding solutions from logo design to brand identity development that reflects your vision and values.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Marketing Materials",
        "Visual Design",
      ],
      icon: "🎨",
      color: "from-gold to-[#004d43]",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description:
        "We begin by understanding your vision, goals, and requirements through comprehensive consultation and brainstorming sessions.",
    },
    {
      step: "02",
      title: "Creative Development",
      description:
        "Our team creates tailored strategies and creative concepts that align with your objectives and brand vision.",
    },
    {
      step: "03",
      title: "Event Coordination",
      description:
        "We organize and supervise your event with precision, ensuring every detail is managed professionally.",
    },
    {
      step: "04",
      title: "Execution & Follow-up",
      description:
        "From staging and scenic design to publicity, we deliver exceptional results and provide post-event analysis.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Wyte Image Media transformed our corporate event into a memorable celebration that truly reflected our company values and achievements.",
      author: "Corporate Client",
      position: "CEO, Leading Company",
    },
    {
      quote:
        "Their expertise in event management and attention to detail made our awards ceremony a resounding success with outstanding publicity.",
      author: "Event Organizer",
      position: "Event Director",
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
                  Services
                </h1>
              </div>
              <div className="lg:max-w-md">
                <p className="font-NeueMontreal-Regular text-lg lg:text-xl text-zinc-300 leading-relaxed">
                  We are an event management company providing comprehensive
                  solutions from concept through execution, creating global
                  inspiration through creative event production.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div
                    className={`bg-gradient-to-r ${service.color} rounded-2xl p-1`}
                  >
                    <div className="bg-zinc-900 rounded-2xl p-8 lg:p-12 h-full">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex-1 lg:pr-12">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl">{service.icon}</div>
                            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl">
                              {service.title}
                            </h2>
                          </div>
                          <p className="font-NeueMontreal-Regular text-lg text-zinc-300 mb-8 leading-relaxed max-w-2xl">
                            {service.description}
                          </p>
                        </div>
                        <div className="lg:w-80">
                          <h3 className="font-FoundersGroteskXCond-Bold text-xl mb-6 text-gold">
                            Key Features
                          </h3>
                          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                            {service.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-700 transition-colors duration-300"
                              >
                                <span className="font-NeueMontreal-Regular text-zinc-200">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-12 text-center">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-[#004d43] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                    <span className="font-FoundersGroteskXCond-Bold text-2xl text-white group-hover:text-zinc-900">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-FoundersGroteskXCond-Bold text-xl mb-4">
                    {step.title}
                  </h3>
                  <p className="font-NeueMontreal-Regular text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-12 text-center">
              What Clients Say
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 rounded-2xl p-8 lg:p-10"
                >
                  <div className="mb-6">
                    <div className="text-gold text-4xl mb-4">"</div>
                    <p className="font-NeueMontreal-Regular text-lg text-zinc-300 leading-relaxed mb-6">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div>
                    <p className="font-FoundersGroteskXCond-Bold text-xl text-white">
                      {testimonial.author}
                    </p>
                    <p className="font-NeueMontreal-Regular text-zinc-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#004d43] to-gold rounded-2xl p-1">
            <div className="bg-zinc-900 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-6">
                Ready to Get Started?
              </h2>
              <p className="font-NeueMontreal-Regular text-lg mb-8 max-w-2xl mx-auto text-zinc-300 leading-relaxed">
                Let us help you create exceptional experiences and achieve your
                business objectives with our comprehensive service offerings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gold text-zinc-900 px-8 py-4 rounded-full font-NeueMontreal-Regular hover:bg-[#b8d654] transition-colors duration-300">
                  Start Your Project
                </button>
                <button className="border border-zinc-600 text-zinc-300 px-8 py-4 rounded-full font-NeueMontreal-Regular hover:border-[#cdea68] hover:text-[#cdea68] transition-colors duration-300">
                  Schedule Consultation
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
