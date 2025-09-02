import About from "../components/About";
// import Eyes from "../components/Eyes";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";
import MagazinePurchase from "../components/MagazinePurchase";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div
      //   ref={scrollRef}
      data-scroll-container
      className="w-full min-h-screen text-white bg-white"
    >
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Featured />
      <MagazinePurchase />
      <Footer />
    </div>
  );
}
