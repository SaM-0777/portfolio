import Title from "@/markdown/zulu/title.mdx";
import Abstract from "@/markdown/zulu/abstract.mdx";
import Introduction from "@/markdown/zulu/introduction.mdx";
import Architecture from "@/markdown/zulu/architecture.mdx";
import TrainingSetup from "@/markdown/zulu/training-setup.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default:
      "ZULU: A Flow-Matching Action Model Architecture with DINOv2 Dense Representations",
    template: "%s - Soumya Ranjan Sahu",
  },
  description:
    "A technical exploration of ZULU, an exploratory Vision-Language-Action architecture that combines DINOv2 dense visual representations, a Diffusion Transformer, block-causal attention, and flow matching for continuous robotic action generation.",
  keywords: [
    "ZULU",
    "Vision-Language-Action",
    "VLA",
    "robotics",
    "DINOv2",
    "flow matching",
    "Diffusion Transformer",
    "DiT",
    "robot learning",
    "action models",
  ],
  authors: [{ name: "Soumya Ranjan Sahu" }],
  openGraph: {
    title:
      "ZULU: A Flow-Matching Action Model Architecture with DINOv2 Dense Representations",
    description:
      "An exploratory VLA architecture combining DINOv2 dense representations, block-causal attention, and flow matching for continuous robotic action generation.",
    type: "article",
    authors: ["Soumya Ranjan Sahu"],
  },
};

export default function ZuluBlog() {
  return (
    <main className="relative w-full">
      <section className="p-6 md:p-8 flex flex-col items-center text-justify justify-center max-w-3xl mt-[20vh] mx-auto space-y-24">
        <div className="text-center">
          <Title />
        </div>
        <div className="">
          <Abstract />
        </div>
        <div className="">
          <Introduction />
        </div>
        <div className="">
          <Architecture />
        </div>
        <div className="">
          <TrainingSetup />
        </div>
      </section>
    </main>
  );
}
