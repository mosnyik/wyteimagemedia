"use client";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Import your edition images
import edition9a from "../assets/images/gha/gha1.png";
import edition9b from "../assets/images/gha/gha2.png";
import edition9c from "../assets/images/gha/gha3.jpeg";
// import edition9a from "../assets/images/edit3ions/edition9a.jpg";
// import edition9b from "../assets/images/editions/edition9b.jpg";
// import edition9c from "../assets/images/editions/edition9c.jpg";

const editions = [
  {
    title: "9th Edition – Leeds, UK (2024)",
    description:
      "The 9th edition, unveiled in Leeds, United Kingdom, marked the international expansion of Profile Africa Magazine. This milestone featured inspiring African leaders, philanthropists, and entrepreneurs celebrated on a global stage.",
    images: [edition9a, edition9b, edition9c],
    links: [
      { title: "International Launch", to: "" },
      { title: "Leadership & Excellence", to: "" },
    ],
    buyLink: "https://wyteimage.gumroad.com/l/profile-africa-magazine-9", // 👈 new field
  },
  {
    title: "8th Edition – Nigeria (2023)",
    description:
      "Celebrated outstanding African women leaders and innovators, inspiring the next generation.",
    images: [edition9a], // replace with edition 8 images
    links: [{ title: "Women Leadership", to: "" }],
  },
  {
    title: "7th Edition – Nigeria (2022)",
    description:
      "Focused on cultural heritage and unity, highlighting trailblazers across Africa.",
    images: [edition9b], // replace with edition 7 images
    links: [{ title: "Cultural Heritage", to: "" }],
  },
];

function EditionsTimeline() {
  const [currentIndexes, setCurrentIndexes] = useState<{
    [key: number]: number;
  }>({});
  const [isPaused, setIsPaused] = useState<{ [key: number]: boolean }>({});
  const intervalRefs = useRef<{ [key: number]: number | null }>({});

  const card1Animation = useAnimation();
  const card2Animation = useAnimation();
  const card3Animation = useAnimation();
  const cards = [card1Animation, card2Animation, card3Animation];

  const handleHover = (index: number) => {
    cards[index].start({ y: "0" });
    setIsPaused((prev) => ({ ...prev, [index]: true }));
    if (intervalRefs.current[index]) {
      clearInterval(intervalRefs.current[index]);
      intervalRefs.current[index] = null;
    }
  };

  const handleHoverEnd = (index: number) => {
    cards[index].start({ y: "100%" });
    setIsPaused((prev) => ({ ...prev, [index]: false }));
  };

  const getCurrentIndex = (editionIndex: number) =>
    currentIndexes[editionIndex] || 0;

  const updateCurrentIndex = (editionIndex: number, newIndex: number) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [editionIndex]: newIndex,
    }));
  };

  useEffect(() => {
    const startIntervals = () => {
      editions.forEach((edition, editionIndex) => {
        if (edition.images.length > 1 && !isPaused[editionIndex]) {
          intervalRefs.current[editionIndex] = window.setInterval(() => {
            setCurrentIndexes((prev) => ({
              ...prev,
              [editionIndex]:
                ((prev[editionIndex] || 0) + 1) % edition.images.length,
            }));
          }, 3000);
        }
      });
    };

    startIntervals();

    return () => {
      Object.values(intervalRefs.current).forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, [isPaused]);

  return (
    <div className="w-full py-20 bg-zinc-900 text-zinc-200">
      <div className="px-6">
        <h2 className="font-bold text-3xl lg:text-5xl mb-12">
          Our Editions Through the Years
        </h2>
      </div>

      <div className="px-6 flex flex-wrap justify-between">
        {editions.map((edition, index) => (
          <div key={index} className="mb-16 w-[90vw] md:w-[46vw] lg:w-[47vw]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
              <div className="uppercase">{edition.title}</div>
            </div>

            <motion.div
              onHoverStart={() => handleHover(index)}
              onHoverEnd={() => handleHoverEnd(index)}
              className="group relative mb-4"
            >
              <div className="overflow-hidden h-96 rounded-xl w-full relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${index}-${getCurrentIndex(index)}`}
                    src={edition.images[getCurrentIndex(index)]}
                    alt={`${edition.title} image`}
                    className="rounded-xl w-full h-96 object-cover object-top group-hover:scale-110 transition-all duration-1000"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </AnimatePresence>

                {/* Prev / Next buttons */}
                {edition.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        updateCurrentIndex(
                          index,
                          (getCurrentIndex(index) - 1 + edition.images.length) %
                            edition.images.length
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-full z-10"
                    >
                      ‹
                    </button>

                    <button
                      onClick={() =>
                        updateCurrentIndex(
                          index,
                          (getCurrentIndex(index) + 1) % edition.images.length
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-full z-10"
                    >
                      ›
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {edition.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => updateCurrentIndex(index, imgIndex)}
                          className={`w-2 h-2 rounded-full ${
                            getCurrentIndex(index) === imgIndex
                              ? "bg-[#cdea68]"
                              : "bg-white/50 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            <p className="text-zinc-400 leading-relaxed mb-3">
              {edition.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              {edition.links.map((link, i) => (
                <span
                  key={i}
                  className="bg-zinc-700 px-4 py-1 rounded-full text-sm text-white"
                >
                  {link.title}
                </span>
              ))}
            </div>

            {edition.buyLink && (
              <a
                href={edition.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#cdea68] text-zinc-900 px-6 py-3 rounded-full hover:bg-[#b8d654] transition-colors duration-300"
              >
                Buy This Edition →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditionsTimeline;
