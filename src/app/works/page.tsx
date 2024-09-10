"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedPage from "@/wrapper/animated-page";
import works from "@/constant/works";


export default function WorksPage() {
  return (
    <AnimatedPage>
      <main className="relative w-full h-screen px-[4vw] overflow-hidden">
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
          className="h-full flex flex-col items-center gap-y-8 overflow-y-auto no-scrollbar"
        >
          {Object.values(works).map((work, i) => (
            <div
              key={"work-" + work.title}
              className="w-fit flex items-start gap-x-4 sm:gap-x-6 md:gap-x-8 my-12"
            >
              <p className="font-semibold">{i + 1}</p>
              <Link href={work.path}>
                <h1 className="font-humane font-extrabold text-[18vh] text-nowrap sm:text-[24vh] md:text-[28vh] leading-none tracking-wide text-center">
                  {work.title}
                </h1>
              </Link>
            </div>
          ))}
        </motion.div>
      </main>
    </AnimatedPage>
  );
}
