"use client";

import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-center px-6">
      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-FoundersGroteskXCond-Bold text-7xl md:text-9xl text-[#cdea68] uppercase mb-4"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-zinc-300 text-lg font-NeueMontreal-Regular mb-8"
      >
        The page you’re looking for doesn’t exist.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <button
          onClick={() => window.history.back()}
          className="border border-zinc-600 text-white px-6 py-3 rounded-full hover:border-[#cdea68] transition-all"
        >
          Go Back
        </button>
        <a
          href="/"
          className="bg-[#cdea68] text-zinc-900 font-bold px-6 py-3 rounded-full hover:bg-[#b8d455] transition-all"
        >
          Go Home
        </a>
      </motion.div>
    </div>
  );
}
