"use client";
import { motion } from "framer-motion";
import AnimatedPage from "@/wrapper/animated-page";

export default function Home() {
  return (
    <AnimatedPage>
      <main className="relative w-full h-screen p-[4vw] overflow-hidden bg-black">
        <motion.div
          animate={{
            opacity: [0, 0, 0, 1],
            y: [100, 100, 100, 0],
            transition: {
              delay: 0.75,
              duration: 1,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            },
          }}
          className="h-full flex flex-col items-center justify-center gap-y-8"
        >
          <div>
            <h1 className="text-[22vh] leading-[18vh] sm:text-[28vh] sm:leading-[22vh] md:text-[36vh] md:leading-[32vh] text-center font-extrabold tracking-[0.03em] font-humane uppercase">
              Fullstack
            </h1>
            <h1 className="text-[22vh] leading-[16vh] sm:text-[28vh] sm:leading-[21vh] md:text-[36vh] md:leading-[24vh] text-center font-extrabold tracking-[0.03em] font-humane uppercase">
              Developer
            </h1>
          </div>
          <div className="flex items-center justify-center gap-x-3 -mt-4">
            <span className="block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="uppercase text-xs font-mono">ai</span>
            <span className="block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="uppercase text-xs font-mono">blockchain</span>
            <span className="block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="uppercase text-xs font-mono">cloud</span>
            <span className="block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="uppercase text-xs font-mono">app</span>
            <span className="block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="uppercase text-xs font-mono">web</span>
          </div>
        </motion.div>
      </main>
    </AnimatedPage>
  );
}
