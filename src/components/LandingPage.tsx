"use client";

// import { motion } from "framer-motion";
import contentImg from "../assets/images/wyte-banner.jpg";
// import logoImg from "../assets/images/logos/wyte.svg";

// const heroHeading = ["Wyte", "Image", "Media"];
const subHeading = [
  "Creating global inspiration through creative event production",
  "From concept to execution",
];

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className=" w-full h-full bg-zinc-900"
    >
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.7"
        className="w-[100vw]"
      >
        <picture className="w-[100vw] flex justify-center items-center">
          <img className="w-full" src={contentImg} alt="contentImg" />
        </picture>
      </div>

      <hr className="absolute left-0 w-full border border-t-zinc-200" />
      <div className="sub-heading flex flex-col pb-36 md:flex-row md:gap-4 justify-between">
        {subHeading.map((item, index) => (
          <div key={index} className=" my-6 ">
            {item}
          </div>
        ))}
        <div className="my-6 uppercase">
          <a
            href="/contact-us"
            className="border rounded-3xl py-2 px-3 border-zinc-200 hover:bg-zinc-200 hover:text-zinc-900 transition-all duration-300 ease-[cubic-bezier(.215,.61,.355,1)]"
          >
            Start The Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
