"use client";

import { motion } from "framer-motion";

const marqueeText = "The Golden Heart Awards International";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="-mt-4 bg-gold py-20 rounded-tr-2xl rounded-tl-2xl w-full"
    >
      <div className="border-y-2 flex overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
          }}
          className=" text-zinc-900  px-4 text-[24vw] whitespace-nowrap leading-none font-FoundersGroteskXCond-Bold uppercase pt-4 -mb-4 lg:pt-8 lg:-mb-[5.5rem] md:pt-6 md:-mb-14"
        >
          {marqueeText}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
          }}
          className=" text-zinc-900 px-4 text-[24vw] whitespace-nowrap leading-none font-FoundersGroteskXCond-Bold uppercase pt-4 -mb-4 lg:pt-8 lg:-mb-[5.5rem] md:pt-6 md:-mb-14"
        >
          {marqueeText}
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
