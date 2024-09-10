"use client";
import React, { type HTMLAttributes } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "./icons/logo";

export interface NavProps {
  className?: HTMLAttributes<HTMLElement>["className"];
}

const DURATION = 0.2;
const STAGGER = 0.025;
const navLinks = [
  { name: "Works", href: "/works" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Nav({ className }: NavProps) {
  return (
    <nav className={cn("flex items-center gap-x-3", className)}>
      <Link href={"/"} >
        <Logo className="w-12 text-white" />
      </Link>
      {navLinks.map((link, i) => (
        <motion.div
          key={"nav-" + i}
          initial="initial"
          whileHover="hover"
          className="border border-white mix-blend-exclusion rounded-full px-4 py-2"
        >
          <Link
            key={"nav-" + link.name}
            href={`${link.href}`}
            className="relative w-full h-full flex items-center gap-x-2"
          >
            <span className="w-1.5 h-1.5 aspect-square bg-white mix-blend-exclusion rounded-full" />
            <div className="relative overflow-hidden">
              <div className=" flex items-center">
                {link.name.split("").map((char, i) => (
                  <motion.span
                    key={"first-char-" + i}
                    variants={{
                      initial: { y: 0 },
                      hover: { y: "-100%" },
                    }}
                    transition={{
                      duration: DURATION,
                      delay: i * STAGGER,
                      ease: "easeInOut",
                    }}
                    className="inline-block text-[10px] leading-[10px] sm:text-xs sm:leading-none uppercase mix-blend-exclusion"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center">
                {link.name.split("").map((char, i) => (
                  <motion.span
                    key={"last-char-" + i}
                    variants={{
                      initial: { y: "100%" },
                      hover: { y: 0 },
                    }}
                    transition={{
                      duration: DURATION,
                      delay: i * STAGGER,
                      ease: "easeInOut",
                    }}
                    className="inline-block text-[10px] leading-[10px] sm:text-xs sm:leading-none uppercase mix-blend-exclusion"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
