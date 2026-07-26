"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedPage from "@/wrapper/animated-page";

export default function ContactPage() {
  return (
    <AnimatedPage>
      <main className="relative w-full h-screen p-[4vw] overflow-hidden" >
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
          className="grid sm:grid-cols-2 md:grid-cols-3 sm:justify-center max-sm:gap-y-12 py-[4vw]"
        >
          <div className="flex flex-col sm:items-center" >
            <div className="space-y-8" >
              <h3 className="text-xs font-light font-mono uppercase" >{`[ location ]`}</h3>
              <p className="text-sm font-light uppercase" >
                {"Palace Line"}
                <br />
                {"Balangir, Odisha"}
                <br />
                {"India"}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:items-center" >
            <div className="space-y-8">
              <h3 className="text-xs font-light font-mono uppercase" >{`[ info ]`}</h3>
              <div>
                <Link href={"mailto:sam.2.3.4.5.ranjan@gmail.com"} className="text-sm font-light block uppercase" >
                  sam.2.3.4.5.ranjan@gmail.com
                </Link>
                <Link href={"https://github.com/SaM-0777"} className="text-sm font-light block uppercase" >
                  github.com/SaM-0777
                </Link>
                <Link href={"https://www.linkedin.com/in/sam-07-dev/"} className="text-sm font-light block uppercase" >
                  linkedin.com/in/sam-07-dev
                </Link>
                <Link href={"https://x.com/Samrn888"} className="text-sm font-light block uppercase" >
                  x.com/Samrn888
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </AnimatedPage>    
  )
}
