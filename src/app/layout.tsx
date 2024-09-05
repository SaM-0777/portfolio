import type { Metadata } from "next";
import { sora, humane } from "./font";
import "./globals.css";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative w-screen h-screen bg-black ${sora.variable} ${humane.variable} font-sora text-white antialiased select-none`}
      >
        {children}
        <Nav className="fixed left-[4vw] bottom-[4vw]" />
      </body>
    </html>
  );
}
