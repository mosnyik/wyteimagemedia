import Footer from "./Footer";
import Navbar from "./Navbar";
// import AboutImage from "../assets/images/NGHA-women.jpeg";
import FestusImage from "../assets/images/team/festus.png";
// import CreativeImage from "../assets/images/team/festus.png";
// import OperationsImage from "../assets/images/team/festus.png";
// import InternationalImage from "../assets/images/team/festus.png";
import AboutUsImg from "../assets/images/pages/about-us.jpg";
import logoImg from "../assets/images/pages/about-section1.jpg";


export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Festus Odunze",
      position: "Executive Director & Founder",
      bio: "Visionary leader who founded Wyte Image Media in 2012 with Profile Awards Nigeria, inspiring global audiences through creative event production.",
      image: FestusImage,
    },
    // {
    //   name: "Creative Team",
    //   position: "Event Production",
    //   bio: "Award-winning team specializing in event management, brand development and creative storytelling.",
    //   image: CreativeImage,
    // },
    // {
    //   name: "Operations Team",
    //   position: "Event Coordination",
    //   bio: "Expert team in project management and client relations with a passion for excellence in event execution.",
    //   image: OperationsImage,
    // },
    // {
    //   name: "International Team",
    //   position: "Global Operations",
    //   bio: "International team managing operations across Nigeria, UK and global markets for seamless event delivery.",
    //   image: InternationalImage,
    // },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "Our pledge is integrity. From concept through to execution, we give you the best to achieve extraordinary results.",
      icon: "🤝",
    },
    {
      title: "Excellence",
      description:
        "We strive for perfection in every project, celebrating hard work and excellence in all our endeavors.",
      icon: "⭐",
    },
    {
      title: "Innovation",
      description:
        "We embrace creativity and cutting-edge solutions in event production and brand development.",
      icon: "💡",
    },
    {
      title: "Global Impact",
      description:
        "Creating global inspiration through creative event production that resonates across continents.",
      icon: "🌍",
    },
  ];

  const milestones = [
    {
      year: "2012",
      title: "Company Founded",
      description:
        "Wyte Image Media was established by Festus Odunze with Profile Awards Nigeria to celebrate humanitarians and philanthropists.",
    },
    {
      year: "2015",
      title: "Profile Awards Recognition",
      description:
        "Profile Awards Nigeria became a household name, hosting outstanding personalities from Nigeria and beyond.",
    },
    {
      year: "2019",
      title: "Queen of Northern Nigeria",
      description:
        "Launched beauty pageant promoting cultural heritage, peace, unity and empowering the girl child.",
    },
    {
      year: "2021",
      title: "Continued Growth",
      description:
        "Expanded operations with more spelling bee competitions and community engagement programs.",
    },
    {
      year: "2024",
      title: "Nigerian Golden Hearts Awards",
      description:
        "Collaborated with Mimibi Limited for this prestigious event in Abuja, gaining huge publicity nationwide.",
    },
    {
      year: "2025",
      title: "International Expansion",
      description:
        "Now based in United Kingdom, unveiling 9th edition of Profile Africa Magazine in Leeds.",
    },
  ];

  const stats = [
    { number: "12+", label: "Years Experience" },
    { number: "8", label: "Magazine Editions" },
    { number: "100+", label: "Events Organized" },
    { number: "3", label: "Countries" },
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
              backgroundImage: `url(${AboutUsImg})`,
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
                About
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
                Wyte Image Media is an event organization known for classic and
                impactful events, inspiring global audiences through creative
                event production.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mb-24">
            <div className="bg-gradient-to-r from-[#004d43] to-gold rounded-2xl p-1">
              <div className="bg-zinc-900 rounded-2xl p-8 lg:p-16 text-center">
                <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-8">
                  Our Mission
                </h2>
                <p className="font-NeueMontreal-Regular text-xl lg:text-2xl text-zinc-300 leading-relaxed max-w-4xl mx-auto">
                  To encourage and motivate people who contribute positively to
                  the growth and development of society. We celebrate
                  humanitarians, philanthropists, impactful leaders, and
                  outstanding entrepreneurs through our recognition platforms
                  and creative event production.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-FoundersGroteskXCond-Bold text-4xl lg:text-6xl text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="font-NeueMontreal-Regular text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Story */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-8">
                  Our Story
                </h2>
                <div className="space-y-6 font-NeueMontreal-Regular text-lg text-zinc-300 leading-relaxed">
                  <p>
                    Founded in 2012 by Executive Director Festus Odunze, Wyte
                    Image Media began with a vision to encourage and motivate
                    people who contribute positively to society's growth and
                    development.
                  </p>
                  <p>
                    What started in Benue state with Profile Awards Nigeria has
                    grown into an international brand now based in the United
                    Kingdom. We've celebrated outstanding personalities,
                    organized spelling bee competitions across Nigerian states,
                    and hosted beauty pageants promoting cultural heritage.
                  </p>
                  <p>
                    Today, we continue to create global inspiration through
                    creative event production, having published 8 editions of
                    Profile Magazine and preparing to unveil our 9th edition as
                    Profile Africa Magazine in Leeds, UK.
                  </p>
                </div>
              </div>
              {/* <div className="bg-gradient-to-br from-gold to-[#004d43] rounded-2xl h-96 flex items-center justify-center">
                <div className="text-6xl">🏆</div>
               
              </div> */}
              <div className="flex-1">
                <div className="w-full max-w-md mx-auto">
                  <img
                    src={logoImg || "/placeholder.svg"}
                    alt={`about us image`}
                    className="w-full h-auto rounded-xl shadow-2xl border border-zinc-600 hover:border-[#cdea68] transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-zinc-800 rounded-xl p-8 hover:bg-zinc-700 transition-colors duration-300 h-full">
                    <div className="text-4xl mb-6">{value.icon}</div>
                    <h3 className="font-FoundersGroteskXCond-Bold text-xl mb-4 group-hover:text-gold transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="font-NeueMontreal-Regular text-zinc-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-24">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-12 text-center">
              Our Journey
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row lg:items-center gap-8"
                >
                  <div className="lg:w-24 flex-shrink-0">
                    <div className="bg-gold text-zinc-900 rounded-full w-16 h-16 flex items-center justify-center font-FoundersGroteskXCond-Bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-zinc-800 rounded-xl p-6 lg:p-8">
                    <h3 className="font-FoundersGroteskXCond-Bold text-xl lg:text-2xl mb-3">
                      {milestone.title}
                    </h3>
                    <p className="font-NeueMontreal-Regular text-zinc-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-24">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="rounded-xl h-64 mb-6 overflow-hidden ">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full  object-cover object-top"
                    />
                  </div>
                  <h3 className="font-FoundersGroteskXCond-Bold text-xl mb-2 group-hover:text-gold transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gold font-NeueMontreal-Regular mb-3">
                    {member.position}
                  </p>
                  <p className="font-NeueMontreal-Regular text-zinc-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#004d43] to-gold rounded-2xl p-1">
            <div className="bg-zinc-900 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-6">
                Ready to Work Together?
              </h2>
              <p className="font-NeueMontreal-Regular text-lg mb-8 max-w-2xl mx-auto text-zinc-300 leading-relaxed">
                Let's create something extraordinary together. We're excited to
                learn about your vision and help bring it to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gold text-zinc-900 px-8 py-4 rounded-full font-NeueMontreal-Regular hover:bg-[#b8d654] transition-colors duration-300">
                  Start a Project
                </button>
                <button className="border border-zinc-600 text-zinc-300 px-8 py-4 rounded-full font-NeueMontreal-Regular hover:border-[#cdea68] hover:text-[#cdea68] transition-colors duration-300">
                  Schedule a Call
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
