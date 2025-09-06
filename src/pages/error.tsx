// "use client";

// import { useEffect } from "react";
// import { useRouteError } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function ErrorPage() {
//   const error = useRouteError() as Error;

//   useEffect(() => {
//     console.error(error);
//   }, [error]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-center px-6">
//       {/* Animated Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="font-FoundersGroteskXCond-Bold text-7xl md:text-9xl text-[#cdea68] uppercase mb-4"
//       >
//         Error
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="text-zinc-300 text-lg font-NeueMontreal-Regular mb-8"
//       >
//         Something went wrong. Please try again.
//       </motion.p>

//       {/* Show dev error */}
//       {process.env.NODE_ENV === "development" && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-left max-w-lg w-full mb-6"
//         >
//           <p className="text-sm text-zinc-400 font-mono break-all">
//             {error?.message}
//           </p>
//         </motion.div>
//       )}

//       {/* Buttons */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.4 }}
//         className="flex gap-4 flex-wrap justify-center"
//       >
//         <button
//           onClick={() => window.location.reload()}
//           className="bg-[#cdea68] text-zinc-900 font-bold px-6 py-3 rounded-full hover:bg-[#b8d455] transition-all"
//         >
//           Try Again
//         </button>
//         <a
//           href="/"
//           className="border border-zinc-600 text-white px-6 py-3 rounded-full hover:border-[#cdea68] transition-all"
//         >
//           Go Home
//         </a>
//       </motion.div>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-center px-6">
      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-FoundersGroteskXCond-Bold text-7xl md:text-9xl text-[#cdea68] uppercase mb-4"
      >
        Error
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-zinc-300 text-lg font-NeueMontreal-Regular mb-8"
      >
        Something went wrong. Please try again.
      </motion.p>

      {/* Show error details only in development */}
      {process.env.NODE_ENV === "development" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-left max-w-lg w-full mb-6"
        >
          <p className="text-sm text-zinc-400 font-mono break-all">
            {error?.message}
          </p>
        </motion.div>
      )}

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <button
          onClick={reset}
          className="bg-[#cdea68] text-zinc-900 font-bold px-6 py-3 rounded-full hover:bg-[#b8d455] transition-all"
        >
          Try Again
        </button>
        <a
          href="/"
          className="border border-zinc-600 text-white px-6 py-3 rounded-full hover:border-[#cdea68] transition-all"
        >
          Go Home
        </a>
      </motion.div>
    </div>
  );
}
