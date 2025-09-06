
import Footer from "./Footer";
import Navbar from "./Navbar";
import servicesImg from "../assets/images/logos/wyte.svg";

export default function ServicesPage() {
  const services = [
    {
      title: "Event Planning & Management",
      description:
        "We turn your event into a podium of global inspiration and creativity. From awards nights to seminars and concerts, we ensure smooth management aligned with your brand’s mission.",
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
        "We brainstorm with you to enhance your event’s success and provide strategic guidance for brand development with proven methodologies and creative direction.",
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
      title: "Venue Finding",
      description:
        "Choosing the right venue is a critical step. We ensure every detail is considered, sourcing venues that align with your vision and budget.",
      features: [
        "Venue Sourcing",
        "Contract Negotiation",
        "Logistics Planning",
      ],
      icon: "📍",
      color: "from-gold to-[#004d43]",
    },
    {
      title: "Event Vendors",
      description:
        "We source, negotiate, hire, and coordinate vendors from A-Z, working within your budget to make your event exceptional.",
      features: ["Vendor Sourcing", "Negotiation", "Coordination"],
      icon: "🤝",
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
        "From social media marketing to press relations, we ensure your event reaches the right audience and achieves maximum impact.",
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
        "Complete branding solutions from logo design to brand identity development that reflect your vision and values.",
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
          {/* Hero */}
          <div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 relative rounded-2xl overflow-hidden p-8 lg:p-12 h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[500px]"
            style={{
              backgroundImage: `url(${servicesImg})`,
              backgroundSize: "fit-cover",
              backgroundPosition: "center",
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
                Our
              </h1>
              <h1
                className="font-FoundersGroteskXCond-Bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase mb-6 sm:mb-8 leading-none text-gold drop-shadow-2xl"
                style={{
                  textShadow:
                    "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)",
                }}
              >
                Services
              </h1>
            </div>
            <div className="lg:max-w-md relative z-10">
              <p className="font-NeueMontreal-Regular text-lg lg:text-xl text-white drop-shadow-md">
                We are an event management company providing comprehensive
                solutions from concept through execution, creating global
                inspiration through creative event production.
              </p>
            </div>
          </div>

          {/* Who We Are */}
          <div className="mt-16 mb-20 text-center max-w-3xl mx-auto">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-6">
              Who We Are
            </h2>
            <p className="font-NeueMontreal-Regular text-lg text-zinc-300 leading-relaxed">
              Wyte Image Media is an event organization known for her classic
              and impactful productions. We inspire global audiences through
              creative event management — from awards, concerts, and seminars to
              cultural showcases and publications like Profile Africa Magazine.
            </p>
          </div>

          {/* Services */}
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

          {/* Our Process */}
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

          {/* Integrity Pledge */}
          <div className="mb-24">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-8 text-center">
              Our Pledge is Integrity
            </h2>
            <p className="font-NeueMontreal-Regular text-lg text-zinc-300 leading-relaxed max-w-4xl mx-auto text-center">
              From concept through to execution, from staging and scenic design
              to graphics, publicity, and digital campaigns, we pledge integrity
              at every stage. Our mission is to deliver extraordinary results
              with honesty and excellence.
            </p>
          </div>

          {/* Testimonials */}
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

          {/* Legacy of Impact */}
          <div className="mb-24">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-8 text-center">
              A Legacy of Impact
            </h2>
            <p className="font-NeueMontreal-Regular text-lg text-zinc-300 leading-relaxed max-w-5xl mx-auto text-center">
              Since 2012, Wyte Image Media has celebrated excellence through
              events like the Nigeria Golden Heart Awards International, Profile
              Awards Nigeria, Queen of Northern Nigeria pageant, and Spelling
              Bee competitions across Nigerian states. Today, we stand as a
              global brand with footprints in Abuja, Benue, and the United
              Kingdom.
            </p>
          </div>

          {/* CTA */}
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
