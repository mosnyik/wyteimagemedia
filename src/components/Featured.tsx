"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import TagButton from "./ui/TagButton";
import pan1 from "../assets/images/pan/pan1.png";
import pan2 from "../assets/images/pan/pan2.png";
import pan3 from "../assets/images/pan/pan3.jpeg";
import pan4 from "../assets/images/pan/pan4.jpeg";
import gha5 from "../assets/images/gha/gha5.jpeg";
import gha1 from "../assets/images/gha/gha1.png";
import gha2 from "../assets/images/gha/gha2.png";
import gha3 from "../assets/images/gha/gha3.jpeg";
import gha4 from "../assets/images/gha/gha4.jpeg";
import qnn1 from "../assets/images/qnn/qnn1.jpeg";
import qnn2 from "../assets/images/qnn/qnn2.jpeg";
import qnn3 from "../assets/images/qnn/qnn3.jpeg";
import qnn4 from "../assets/images/qnn/qnn4.jpeg";
import qnn5 from "../assets/images/qnn/qnn5.jpeg";
import qnn6 from "../assets/images/qnn/qnn6.jpeg";
import qnn7 from "../assets/images/qnn/qnn7.jpeg";
import qnn8 from "../assets/images/qnn/qnn8.jpeg";
import qnn9 from "../assets/images/qnn/qnn9.jpeg";
import qnn10 from "../assets/images/qnn/qnn10.jpeg";
import qnn12 from "../assets/images/qnn/qnn12.jpeg";
import qnn13 from "../assets/images/qnn/qnn13.jpeg";
import qnn14 from "../assets/images/qnn/qnn14.jpeg";
import qnn15 from "../assets/images/qnn/qnn15.jpeg";
import qnn16 from "../assets/images/qnn/qnn16.jpeg";
import qnn11 from "../assets/images/qnn/qnn11.jpeg";
import sbc1 from "../assets/images/sbc/sbc1.jpeg";
import sbc2 from "../assets/images/sbc/sbc2.jpeg";
import sbc3 from "../assets/images/sbc/sbc3.jpeg";
import sbc4 from "../assets/images/sbc/sbc4.jpeg";
import sbc5 from "../assets/images/sbc/sbc5.jpeg";
import sbc6 from "../assets/images/sbc/sbc6.jpeg";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "Profile Awards Nigeria",
    images: [pan1, pan2, pan3, pan4],
    links: [
      { title: "Event Management", to: "" },
      { title: "Awards Ceremony", to: "" },
      { title: "Recognition Platform", to: "" },
    ],
  },
  {
    title: "The Golden Hearts Awards",
    images: [gha1, gha2, gha3, gha4, gha5],
    links: [
      { title: "Awards Ceremony", to: "" },
      { title: "Event Production", to: "" },
      { title: "Media Coverage", to: "" },
    ],
  },
  {
    title: "Queen of Northern Nigeria",
    images: [
      qnn1,
      qnn2,
      qnn3,
      qnn4,
      qnn5,
      qnn6,
      qnn7,
      qnn8,
      qnn9,
      qnn10,
      qnn11,
      qnn12,
      qnn13,
      qnn14,
      qnn15,
      qnn16,
    ],
    links: [
      { title: "Beauty Pageant", to: "" },
      { title: "Cultural Heritage", to: "" },
    ],
  },
  {
    title: "Spelling Bee Competition",
    images: [sbc1, sbc2, sbc3, sbc4, sbc5, sbc6],
    links: [
      { title: "Beauty Pageant", to: "" },
      { title: "Cultural Heritage", to: "" },
    ],
  },
];

function Featured() {
  const [currentIndexes, setCurrentIndexes] = useState<{
    [key: number]: number;
  }>({});
  const [isPaused, setIsPaused] = useState<{ [key: number]: boolean }>({});
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const intervalRefs = useRef<{ [key: number]: number | null }>({});

  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

   useEffect(() => {
      const startIntervals = () => {
        projects.forEach((project, projectIndex) => {
          if (project.images.length > 1 && !isPaused[projectIndex]) {
            intervalRefs.current[projectIndex] = window.setInterval(() => {
              setCurrentIndexes((prev) => ({
                ...prev,
                [projectIndex]:
                  ((prev[projectIndex] || 0) + 1) % project.images.length,
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
  

  // useEffect(() => {
  //   projects.forEach((project, projectIndex) => {
  //     if (project.images.length > 1 && !isPaused[projectIndex]) {
  //       intervalRefs.current[projectIndex] = setInterval(() => {
  //         setCurrentIndexes((prev) => ({
  //           ...prev,
  //           [projectIndex]:
  //             ((prev[projectIndex] || 0) + 1) % project.images.length,
  //         }));
  //       }, 3000); // Change image every 3 seconds
  //     }
  //   });

  //   // Cleanup intervals
  //   return () => {
  //     Object.values(intervalRefs.current).forEach((interval) => {
  //       if (interval) clearInterval(interval);
  //     });
  //   };
  // }, [isPaused]);

  const handleHover = (index: number) => {
    cards[index].start({ y: "0" });
    setIsPaused((prev) => ({ ...prev, [index]: true }));
    setHoveredProject(index);
    if (intervalRefs.current[index]) {
      clearInterval(intervalRefs.current[index]);
      intervalRefs.current[index] = null;
    }
  };

  const handleHoverEnd = (index: number) => {
    cards[index].start({ y: "100%" });
    setIsPaused((prev) => ({ ...prev, [index]: false }));
    setHoveredProject(null);
  };

  const getCurrentIndex = (projectIndex: number) => {
    return currentIndexes[projectIndex] || 0;
  };

  const updateCurrentIndex = (projectIndex: number, newIndex: number) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [projectIndex]: newIndex,
    }));
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0"
      className="w-full py-20 bg-zinc-900 text-zinc-200 rounded-tr-2xl rounded-tl-2xl"
    >
      <div className="featured-heading px-6">
        <h1 className="mb-8 font-NeueMontreal-Regular text-3xl lg:text-5xl">
          Featured Projects
        </h1>
      </div>
      <hr className="absolute left-0 w-full border border-t-zinc-200" />
      <div className="projects px-6 py-20 w-full flex justify-between flex-wrap">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project mb-16 w-[90vw] md:w-[46vw] lg:w-[47vw]"
          >
            <div className="project-title flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
              <div className="font-NeueMontreal-Regular uppercase">
                {project.title}
              </div>
            </div>
            <div className="project-image mb-5 w-full">
              <motion.div
                onHoverStart={() => {
                  handleHover(index);
                }}
                onHoverEnd={() => {
                  handleHoverEnd(index);
                }}
                className="group relative"
              >
                <div className="overflow-hidden h-96 rounded-xl w-full group-hover:scale-90 transition-transform duration-1000 relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${index}-${getCurrentIndex(index)}`}
                      src={
                        project.images[getCurrentIndex(index)] ||
                        "/placeholder.svg"
                      }
                      alt="project_image"
                      className="rounded-xl w-full h-96 object-cover object-top group-hover:scale-125 transition-all duration-1000"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  </AnimatePresence>

                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          updateCurrentIndex(
                            index,
                            (getCurrentIndex(index) -
                              1 +
                              project.images.length) %
                              project.images.length
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-full transition-all duration-200 z-10"
                      >
                        ‹
                      </button>

                      <button
                        onClick={() =>
                          updateCurrentIndex(
                            index,
                            (getCurrentIndex(index) + 1) % project.images.length
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-full transition-all duration-200 z-10"
                      >
                        ›
                      </button>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {project.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => updateCurrentIndex(index, imgIndex)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
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
                <div
                  className={`center-title overflow-hidden z-10 flex absolute top-1/2 ${
                    index % 2 === 0
                      ? "md:left-full md:right-0"
                      : "md:left-0 md:right-0"
                  } md:-translate-x-1/2 -translate-y-1/2  w-[100vw] justify-center pointer-events-none`}
                >
                  <div className="masker overflow-hidden -mb-3 lg:-mb-6 flex items-start justify-center w-fit font-FoundersGroteskXCond-Bold text-5xl md:text-5xl lg:text-8xl uppercase">
                    <h1 className="flex items-center text-[#cdea68]">
                      {(hoveredProject === index
                        ? "Profile Awards Nigeria"
                        : project.title
                      )
                        .split("")
                        .map((item, idx) => (
                          <motion.span
                            key={`char-${index}-${idx}-${
                              hoveredProject === index ? "hover" : "normal"
                            }`}
                            initial={{ y: "100%" }}
                            transition={{
                              ease: [0.22, 1, 0.36, 1],
                              delay: idx * 0.02,
                            }}
                            animate={cards[index]}
                            className="inline-block"
                          >
                            {item === " " ? "\u00A0" : item}
                          </motion.span>
                        ))}
                    </h1>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="project-tags flex flex-wrap gap-4">
              {project.links.map((link, linkIndex) => (
                <TagButton key={linkIndex} link={link} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-full flex justify-center items-center">
        <WaveButton
          primaryColor={"#f4f4f5"} //text-zinc-200
          secondaryColor={"#18181b"} //text-zinc-900
          text={"View All Projects"}
        />
      </div> */}
    </div>
  );
}

export default Featured;

