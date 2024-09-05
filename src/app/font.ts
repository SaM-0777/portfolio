import { Sora } from "next/font/google";
import localFont from "next/font/local";

export const sora = Sora({
  variable: "--font-sora",
  preload: true,
  style: ["normal"],
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "auto",
});

export const humane = localFont({
  preload: true,
  variable: "--font-humane",
  src: [
    {
      path: "./fonts/HumaneBold.woff2",
      style: "normal",
    },
    {
      path: "./fonts/HumaneExtraLight.woff2",
      style: "normal",
    },
    {
      path: "./fonts/HumaneLight.woff2",
      style: "normal",
    },
    {
      path: "./fonts/HumaneMedium.woff2",
      style: "normal",
    },
    {
      path: "./fonts/HumaneRegular.woff2",
      style: "normal",
    },
    {
      path: "./fonts/HumaneSemiBold.woff2",
      style: "normal",
    },
    {
      path: "./fonts/HumaneThin.woff2",
      style: "normal",
    },
  ],
  display: "auto",
});
