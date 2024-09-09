import { type SVGAttributes } from "react";
import { cn } from "@/lib/utils";

export default function ArrowIcon({ className }: {
  className?: SVGAttributes<SVGSVGElement>["className"]
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-4 text-black", className)}
      viewBox="0 0 10 10"
      fill="none"
    >
      <path
        d="M9 1.25C9 0.973858 8.77614 0.75 8.5 0.75L4 0.75C3.72386 0.75 3.5 0.973858 3.5 1.25C3.5 1.52614 3.72386 1.75 4 1.75L8 1.75L8 5.75C8 6.02614 8.22386 6.25 8.5 6.25C8.77614 6.25 9 6.02614 9 5.75L9 1.25ZM1.35355 9.10355L8.85355 1.60355L8.14645 0.896447L0.646447 8.39645L1.35355 9.10355Z"
        fill="currentColor"
      />
    </svg>
  );
}
