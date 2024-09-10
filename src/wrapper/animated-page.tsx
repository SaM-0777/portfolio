"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function AnimatedPage({
  children
}: {
  children: React.ReactNode
}) {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, [])

  return (
    <>
      {children}
        <motion.div
          animate={{
            width: [0, width, width, width],
            height: [8, 8, height, 0],
            y: [0, 0, 0, height],
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
