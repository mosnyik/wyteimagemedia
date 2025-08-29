import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProfileMagazine from "./pages/ProfileMagazine";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/about";


function App() {
  const scrollRef = useRef(null);
  const locomotiveInstance = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    // Tailwind `lg` breakpoint (1024px by default)
    const lgBreakpoint = window.matchMedia("(min-width: 1024px)");

    const initializeLocomotiveScroll = () => {
      if (lgBreakpoint.matches && scrollRef.current) {
        locomotiveInstance.current = new LocomotiveScroll();

        // console.log("LocomotiveScroll initialized.");
      }
    };

    // Initialize LocomotiveScroll if the breakpoint is matched
    initializeLocomotiveScroll();

    // Listen for changes in the viewport size
    const handleResize = () => {
      if (lgBreakpoint.matches) {
        if (!locomotiveInstance.current) {
          initializeLocomotiveScroll();
        }
      } else {
        // Destroy LocomotiveScroll if the viewport is smaller than `lg`
        if (locomotiveInstance.current) {
          locomotiveInstance.current.destroy();
          locomotiveInstance.current = null;
          // console.log("LocomotiveScroll destroyed.");
        }
      }
    };

    lgBreakpoint.addEventListener("change", handleResize);

    // Cleanup on component unmount
    return () => {
      if (locomotiveInstance.current) {
        locomotiveInstance.current.destroy();
        locomotiveInstance.current = null;
      }
      lgBreakpoint.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="w-full min-h-screen text-white bg-white"
    >
      {/* <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Reviews />
      <ReadyToStart />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile-magazine" element={<ProfileMagazine />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
