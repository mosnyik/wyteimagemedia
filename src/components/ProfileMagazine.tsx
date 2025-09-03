import Footer from "./Footer";
import Navbar from "./Navbar";
import logoImg from "../assets/images/logos/wyte.svg";
import EditionsTimeline from "./EditionsTimeline";

export default function ProfileMagazinePage() {
  return (
    <div className="w-full bg-zinc-900 text-white min-h-screen">
      <Navbar />

      <div className="px-6 lg:px-14 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <div
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-4 relative rounded-2xl overflow-hidden p-8 lg:p-12 h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[500px]"
              style={{
                backgroundImage: `url(${logoImg})`,
                backgroundSize: "cover",
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
            </div>

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

            {/* <div className="flex flex-wrap gap-4 mb-12 mt-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-zinc-600 text-zinc-300 hover:border-gold hover:text-[#cdea68] transition-colors duration-300 font-NeueMontreal-Regular"
                >
                  {category}
                </button>
              ))}
            </div> */}
          </div>

          {/* <div className="mb-20">
            {featuredArticles
              .filter((article) => article.featured)
              .map((article) => (
                <div
                  key={article.id}
                  className="bg-gradient-to-r from-[#004d43] to-gold rounded-2xl p-1 mb-8"
                >
                  <div className="bg-zinc-900 rounded-2xl p-8 lg:p-12 h-full">
                    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                      <span className="bg-gold text-zinc-900 px-3 py-1 rounded-full text-sm font-NeueMontreal-Regular">
                        Featured
                      </span>
                      <span className="text-zinc-400 font-NeueMontreal-Regular">
                        {article.category}
                      </span>
                      <span className="text-zinc-500 font-NeueMontreal-Regular">
                        •
                      </span>
                      <span className="text-zinc-400 font-NeueMontreal-Regular">
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-6 leading-tight">
                      {article.title}
                    </h2>
                    <p className="font-NeueMontreal-Regular text-lg text-zinc-300 mb-8 max-w-3xl leading-relaxed">
                      {article.excerpt}
                    </p>
                    <button className="bg-gold text-zinc-900 px-8 py-4 rounded-full font-NeueMontreal-Regular hover:bg-dark-gold transition-colors duration-300">
                      Read Full Article →
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div className="mb-20">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-12">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles
                .filter((article) => !article.featured)
                .map((article) => (
                  <article
                    key={article.id}
                    className="group bg-zinc-800 rounded-xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 hover:scale-105"
                  >
                    <div className="h-48 bg-gradient-to-br from-[#cdea68] to-[#004d43] relative overflow-hidden">
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white bg-opacity-90 text-zinc-900 px-3 py-1 rounded-full text-sm font-NeueMontreal-Regular">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-zinc-500 font-NeueMontreal-Regular text-sm">
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="font-FoundersGroteskXCond-Bold text-xl mb-3 group-hover:text-[#cdea68] transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-zinc-400 mb-4 font-NeueMontreal-Regular leading-relaxed">
                        {article.excerpt}
                      </p>
                      <button className="text-[#cdea68] hover:text-[#b8d654] transition-colors duration-300 font-NeueMontreal-Regular">
                        Read More →
                      </button>
                    </div>
                  </article>
                ))}
            </div>
          </div>

          <div className="bg-[#004d43] rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-FoundersGroteskXCond-Bold text-3xl lg:text-5xl mb-6">
              Stay Connected
            </h2>
            <p className="font-NeueMontreal-Regular text-lg mb-8 max-w-2xl mx-auto text-zinc-200">
              Subscribe to Profile Africa Magazine and never miss inspiring
              stories of African excellence, leadership insights, and
              motivational content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white text-zinc-900 placeholder-zinc-500 font-NeueMontreal-Regular focus:outline-none focus:ring-2 focus:ring-[#cdea68]"
              />
              <button className="bg-[#cdea68] text-zinc-900 px-8 py-4 rounded-full font-NeueMontreal-Regular hover:bg-[#b8d654] transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
