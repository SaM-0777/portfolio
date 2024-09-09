"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedPage from "@/wrapper/animated-page";

export default function Home() {
  return (
    <AnimatedPage>
      <main className="relative w-full h-screen p-[4vw] overflow-hidden bg-black">
        {/*<div className="absolute font-sora top-[4vw] left-[4vw]">
          Hi, I'm Soumya Ranjan Sahu
        </div>*/}
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
          <p className="uppercase text-lg">Realmwave</p>
          <div>
            <h1 className="text-[22vh] leading-[18vh] sm:text-[28vh] sm:leading-[22vh] md:text-[36vh] md:leading-[32vh] text-center font-extrabold tracking-[0.03em] font-humane uppercase">
              Fullstack
            </h1>
            <h1 className="text-[22vh] leading-[16vh] sm:text-[28vh] sm:leading-[21vh] md:text-[36vh] md:leading-[24vh] text-center font-extrabold tracking-[0.03em] font-humane uppercase">
              Developer
            </h1>
          </div>
          <Link
            href={"mailto:realmwavesoftware@gmail.com"}
            className="flex items-center gap-x-2"
          >
            <span className="block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="uppercase text-sm border-b border-b-neutral-600">
              {`realmwavesoftware@gmail.com`}
            </span>
          </Link>
        </motion.div>
      </main>
    </AnimatedPage>
  );
}
