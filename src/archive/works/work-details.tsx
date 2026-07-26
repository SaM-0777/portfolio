"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ArrowIcon from "@/components/icons/arrow";

export interface WorkDetailsProps {
  details: {
    title: string;
    description: string;
    tag: string;
    url?: string;
    nextProjectPath: string;
    images: string[];
  };
}

export default function WorkDetails({ details }: WorkDetailsProps) {
  return (
    <motion.main
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
      className="w-screen h-screen grid lg:grid-cols-2 gap-0 bg-black"
    >
      <div className="h-[50vh] lg:h-screen flex sm:grid grid-cols-2 lg:grid-cols-1 overflow-x-scroll sm:overflow-y-auto no-scrollbar">
        {details.images.map((img, i) => (
          <div key={"image-" + i} className="w-screen flex-shrink-0 sm:w-full h-[50vh] lg:h-screen" >
            <img
              src={img}
              alt="work-showcase"
              className="w-full h-full object-cover block"
            />
          </div>
        ))}
      </div>
      <div className="w-full h-[50vh] lg:h-screen flex flex-col flex-1 p-[4vw] space-y-[4vw]">
        <div className="flex items-center justify-between">
          <div className="px-4 py-1.5 text-xs border border-white rounded-full font-light uppercase">
            {details.tag}
          </div>
          <Link
            href={details.nextProjectPath}
            className="text-xs font-light font-mono uppercase"
          >
            {`[  NEXT PROJECT  ]`}
          </Link>
        </div>
        <div className="w-full flex-1 flex flex-col lg:justify-between">
          <h1 className="font-extrabold text-[28vw] leading-[24vw] sm:text-[20vw] sm:leading-[18vw] font-humane">
            {details.title}
          </h1>
          <div className="text-sm font-light space-y-6 md:space-y-8">
            <p className="text-xs md:text-sm font-light">{details.description}</p>
            {details.url && (
              <Link
                href={details.url}
                className="w-fit flex items-center gap-x-1.5 uppercase text-xs font-light border px-4 py-1.5 border-white rounded-full"
              >
                <span>View Project</span>
                <ArrowIcon className="w-2.5 text-white" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.main>
  );
}
