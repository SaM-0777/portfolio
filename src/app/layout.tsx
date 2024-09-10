import type { Metadata } from "next";
import { sora, humane } from "./font";
import Nav from "@/components/nav";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "Soumya Ranjan Sahu",
    template: "%s - Soumya Ranjan Sahu",
  },
  description: "Soumya Ranjan Sahu's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative w-screen h-screen overflow-hidden bg-black ${sora.variable} ${humane.variable} font-sora text-white antialiased select-none`}
      >
        {children}
        <Nav className="fixed left-[4vw] bottom-[4vw]" />
      </body>
    </html>
  );
}
