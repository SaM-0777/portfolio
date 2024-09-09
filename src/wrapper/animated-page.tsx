"use client";
import { motion } from "framer-motion";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
export default function AnimatedPage({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
        <motion.div
          onAnimationComplete={() => console.log("ended: ")}
          animate={{
            width: [0, WIDTH, WIDTH, WIDTH],
            height: [8, 8, HEIGHT, 0],
            y: [0, 0, 0, HEIGHT],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="absolute inset-0 w-screen bg-white"
        />
    </>
  );
}
