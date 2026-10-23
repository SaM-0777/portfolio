import type { Metadata } from "next";
import { ebGaramond, lora, sourceSans, sourceSerif } from "./font";
import "katex/dist/katex.min.css";
import "./globals.css";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

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
    <html lang="en" dir="ltr">
      <body
        className={`relative w-screen bg-white/80 text-foreground font-body antialiased ${ebGaramond.variable} ${lora.variable} ${sourceSans.variable} ${sourceSerif.variable} font-lora`}
      >
        {children}
      </body>
    </html>
  );
}
