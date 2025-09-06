import Footer from "./Footer";
import Navbar from "./Navbar";
import profileMagazineImgMobile from "../assets/images/pm/pm2.jpg";
import profileMagazineImgTablet from "../assets/images/pm/pm2.jpg";
import profileMagazineImgDesktop from "../assets/images/pm/pm1.jpg";
import profileMagazineImgWide from "../assets/images/pm/pm1.jpg";
import EditionsTimeline from "./EditionsTimeline";
import HeroSection from "./HeroSection";

export default function ProfileMagazinePage() {
  return (
    <div className="w-full bg-zinc-900 text-white min-h-screen">
      <Navbar />

      <div className="px-6 lg:px-14 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="">
            {/* Hero */}
            {/* <div
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-4 relative rounded-2xl overflow-hidden p-8 lg:p-12 h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[500px]"
              style={{
                backgroundImage: `url(${profileMagazineImg})`,
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
                  Profile
                </h1>
                <h1
                  className="font-FoundersGroteskXCond-Bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase mb-6 sm:mb-8 leading-none text-gold drop-shadow-2xl"
                  style={{
                    textShadow:
                      "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)",
                  }}
                >
                  Africa
                </h1>
              </div>
              <div className="lg:max-w-md relative z-10">
                <p className="font-NeueMontreal-Regular text-lg lg:text-xl text-white drop-shadow-md">
                  Profile Africa Magazine showcases outstanding personalities
                  who give back to society, promoting hard work, excellence, and
                  celebrating the achievements of great African men and women.
                </p>
              </div>
            </div> */}
            <HeroSection
              title="Our"
              highlight="Services"
              text="Profile Africa Magazine showcases outstanding personalities
                  who give back to society, promoting hard work, excellence, and
                  celebrating the achievements of great African men and women.
                "
              images={{
                mobile: profileMagazineImgMobile,
                tablet: profileMagazineImgTablet,
                desktop: profileMagazineImgDesktop,
                wide: profileMagazineImgWide,
              }}
            />

            {/* About Section */}
            <div className="mt-16">
              <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-6">
                About Profile Africa Magazine
              </h2>
              <p className="font-NeueMontreal-Regular text-lg text-zinc-300 leading-relaxed max-w-4xl">
                Profile Africa Magazine, published by Wyte Image Media, is
                dedicated to showcasing outstanding personalities who devote
                their lives to making society better. From humanitarians and
                philanthropists to entrepreneurs, impactful leaders, and
                cultural icons, we celebrate those who give rather than take,
                and who serve rather than be served.
              </p>
              <p className="font-NeueMontreal-Regular text-lg text-zinc-300 leading-relaxed max-w-4xl mt-4">
                The magazine also features inspiring interviews with
                intellectuals, celebrities, and successful personalities, along
                with motivational articles and true-life stories to impact our
                generation. It is published once a year and continues to grow as
                a platform for promoting excellence, hard work, cultural
                heritage, unity, and peace across Africa.
              </p>
              <p className="font-NeueMontreal-Regular text-lg text-zinc-300 leading-relaxed max-w-4xl mt-4">
                With eight editions already released and the 9th unveiled in
                Leeds, UK, Profile Africa Magazine looks forward to many years
                of global impact, celebrating African excellence and inspiring
                future generations.
              </p>
            </div>

            {/* Editions Timeline */}
            <EditionsTimeline />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
