"use client";
import { motion } from "framer-motion";
import AnimatedPage from "@/wrapper/animated-page";
import skills from "@/constant/skills";

const DELAY_MULTIPLIER = 0.03;
export default function SkillsPage() {
  return (
    <AnimatedPage>
      <main className="relative w-full h-screen p-[4vw] overflow-hidden">
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
          className="flex flex-wrap gap-x-4 gap-y-2"
        >
          {skills.map((skill, i) => (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay:
                    Math.floor(Math.random() * skills.length) *
                    DELAY_MULTIPLIER,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  ease: "easeInOut",
                },
              }}
              key={"skill-" + i}
              className="px-4 py-1 bg-white text-black rounded-full"
            >
              <span className="text-xs font-light text-center text-nowrap whitespace-nowrap">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </AnimatedPage>
  );
}
