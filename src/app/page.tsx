import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { blogData } from "@/constant/blogs";

export default function Home() {
  return (
    <main className="relative w-full space-y-24">
      <header className="px-8 py-4 bg-oxblood">
        <h2 className="text-white mx-auto text-center font-medium font-lora">{`"AI is of the People, by the People, for the People"`}</h2>
      </header>

      <section
        id="bio"
        className="relative flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-center max-w-7xl mx-auto gap-12 p-8"
      >
        <div className="flex flex-col items-center text-center gap-6">
          <div className="space-y-3">
            <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight text-oxblood tracking-tight">
              Soumya Ranjan Sahu
            </h1>
            <h3 className="text-lg md:text-xl font-body text-ink-black/70 font-medium">
              Independent Scholar & Robotics Researcher
            </h3>
          </div>

          <p className="font-body text-md md:text-base text-ink-black/80 leading-relaxed max-w-xl">
            I am an independent scholar, researching general-purpose
            intelligence for robotics. My work focuses on diffusion world action
            models and computational algorithms inspired by the human brain and
            the empirical findings of cognitive neuroscience. I hold a B.Tech
            degree in Computer Science, with specializations in Machine
            Learning, Natural Language Processing, and Applied Linear Algebra.
            <br />
            <br />
            While SOTA architectures show promise, current world action models
            suffer from fundamental memory limitations. During dynamic
            manipulations, long running reasoning and tasks, these models
            struggle to maintain persistent world modeling. My goal is to solve
            this temporal bottleneck by engineering a better memory architecture
            directly into the model.
          </p>

          <div className="flex gap-10 pt-2">
            <Link
              href="mailto:soumyaranjansahu.711@gmail.com"
              target="_blank"
              className="text-ink-black/60 hover:text-oxblood transition-colors duration-300"
              aria-label="Email"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </Link>

            <Link
              href="https://x.com/@samrn888"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-black/60 hover:text-oxblood transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            <Link
              href="https://github.com/SaM-0777"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-black/60 hover:text-oxblood transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </Link>

            {/*<Link
              href="https://www.linkedin.com/in/sam-07-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-black/60 hover:text-oxblood transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>*/}
          </div>
        </div>

        {/*<div></div>*/}
      </section>

      <section
        id="background"
        className="relative flex flex-col max-w-7xl mx-auto gap-12 p-6 md:p-8"
      >
        <div className="">
          <h3 className="text-3xl font-semibold text-oxblood font-eb-garamond">
            Education
          </h3>

          <p className="text-lg text-ink-black/70 font-medium mt-1">
            B.Tech in Computer Science, Indian Institute of Information
            Technology (2024)
          </p>
          <div className="mt-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-black/50 mb-2">
              Specializations
            </h4>
            <p className="text-ink-black/80 leading-relaxed">
              Machine Learning, Natural Language Processing, Applied Linear
              Algebra
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-oxblood font-eb-garamond">
            Skills
          </h3>

          <div className="mt-1 flex items-center gap-2">
            <p className="text-ink-black/80 font-medium hover:text-oxblood">
              Python, PyTorch, Transformers, Diffusion Transformers, JEPA
              architecture, Vision Transformers (ViT)
            </p>
          </div>
        </div>
      </section>

      <section
        id="experiments"
        className="relative flex flex-col max-w-7xl mx-auto gap-12 p-6 md:p-8"
      >
        <h3 className="text-3xl font-semibold text-oxblood font-eb-garamond">
          Experiments
        </h3>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12">
            <div className="md:w-1/4 shrink-0 pt-1">
              <span className="text-sm font-semibold uppercase tracking-widest text-ink-black/50">
                June 2026
              </span>
            </div>

            <div className="md:w-3/4 space-y-4">
              <h4 className="text-2xl font-semibold text-oxblood font-eb-garamond">
                Zulu: Vision Action Model
              </h4>

              <p className="text-ink-black/80 leading-relaxed text-base">
                Zulu is a vision action model architecture trained entirely from scratch, integrating a DINOv2 vision encoder with a novel flow matching backbone for continuous action generation.
                This experiment validates that high-performance robotic policy learning can be achieved without relying on the computational overhead of traditional,
                heavy Vision-Language Model (VLM) backbones
              </p>

              <div className="inline-flex items-center gap-4">
                <Link
                  href={"https://github.com/SaM-0777/zulu"}
                  target="_blank"
                  className="text-base font-medium hover:underline inline-flex items-center gap-0.5"
                >
                  <span>Source Code</span>
                  <span>
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
                <Link
                  href={"https://huggingface.co/SamLegion888/zulu"}
                  target="_blank"
                  className="text-base font-medium hover:underline inline-flex items-center gap-0.5"
                >
                  <span>Model</span>
                  <span>
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
                <Link
                  href={"https://huggingface.co/datasets/SamLegion888/DreamZero-DROID-Data-2000"}
                  target="_blank"
                  className="text-base font-medium hover:underline inline-flex items-center gap-0.5"
                >
                  <span>Dataset</span>
                  <span>
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
                <Link
                  href={"/blog/zulu"}
                  className="text-base font-medium hover:underline inline-flex items-center gap-0.5"
                >
                  <span>Technical Report</span>
                  <span>
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-12">
            <div className="md:w-1/4 shrink-0 pt-1">
              <span className="text-sm font-semibold uppercase tracking-widest text-ink-black/50">
                July 2026
              </span>
            </div>

            <div className="md:w-3/4 space-y-4">
              <h4 className="text-2xl font-semibold text-oxblood font-eb-garamond">
                Implementation of Associative Memory via Hopfield Networks
              </h4>

              <p className="text-ink-black/80 leading-relaxed text-base">
                This project implements the foundational 1982 Hopfield
                Associative Memory algorithm, augmenting it with a custom
                extension for dynamic memory expansion. Furthermore, it
                implements the 2020 continuous Hopfield network, practically
                demonstrating its mathematical equivalence to the standard
                Transformer attention mechanism (Q, K, V).
              </p>

              <Link
                href={"https://github.com/SaM-0777/B_Mem"}
                target="_blank"
                className="text-base font-medium hover:underline inline-flex items-center gap-0.5"
              >
                <span>Source Code</span>
                <span>
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-12">
            <div className="md:w-1/4 shrink-0 pt-1">
              <span className="text-sm font-semibold uppercase tracking-widest text-ink-black/50">
                July 2026
              </span>
            </div>

            <div className="md:w-3/4 space-y-4">
              <h4 className="text-2xl font-semibold text-oxblood font-eb-garamond">
                Visualizing How DINOv3 Sees the World
              </h4>

              <p className="text-ink-black/80 leading-relaxed text-base">
                This experiment uses custom PyTorch hooks to extract internal
                activations and analyze how DINOv3 processes raw visual inputs.
                Through 3D UMAP projections and spatial heatmaps, it visualizes
                how the model progressively perceives scene structure and
                semantic relationships.
              </p>

              <Link
                href={
                  "https://www.kaggle.com/code/sam7771111/dinov3-activation"
                }
                target="_blank"
                className="text-base font-medium hover:underline inline-flex items-center gap-0.5"
              >
                <span>Source Code</span>
                <span>
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-12">
            <div className="md:w-1/4 shrink-0 pt-1">
              <span className="text-sm font-semibold uppercase tracking-widest text-ink-black/50">
                July 2026
              </span>
            </div>

            <div className="md:w-3/4 space-y-4">
              <h4 className="text-2xl font-semibold text-oxblood font-eb-garamond">
                Decoding Visual Features in Qwen2-VL
              </h4>

              <p className="text-ink-black/80 leading-relaxed text-base">
                This experiment investigates the internal visual representations
                of the Qwen2-VL model by applying PyTorch hooks exclusively to
                its vision transformer blocks. Utilizing PCA and cosine
                similarity heatmaps, it tracks how spatial and semantic features
                evolve across the visual processing layers prior to text
                generation.
              </p>

              <Link
                href={
                  "https://www.kaggle.com/code/sam7771111/qwen-vl-2b-instruct-breakdown"
                }
                target="_blank"
                className="text-base font-medium hover:underline inline-flex items-center gap-0.5"
              >
                <span>Source Code</span>
                <span>
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-12">
            <div className="md:w-1/4 shrink-0 pt-1">
              <span className="text-sm font-semibold uppercase tracking-widest text-ink-black/50">
                July 2026
              </span>
            </div>

            <div className="md:w-3/4 space-y-4">
              <h4 className="text-2xl font-semibold text-oxblood font-eb-garamond">
                Visualizing Flow Matching Dynamics in FLUX.2
              </h4>

              <p className="text-ink-black/80 leading-relaxed text-base">
                This experiment explores the internal generation dynamics of the
                FLUX.2 diffusion model by tracking spatial activations across
                inference timesteps. Using PyTorch hooks on both double and
                single stream transformer blocks, it visualizes how the model
                iteratively refines pure noise into structured image features.
              </p>

              <Link
                href={
                  "https://www.kaggle.com/code/sam7771111/flowmatching-activations"
                }
                target="_blank"
                className="text-base font-medium hover:underline inline-flex items-center gap-0.5"
              >
                <span>Source Code</span>
                <span>
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-12">
            <div className="md:w-1/4 shrink-0 pt-1">
              <span className="text-sm font-semibold uppercase tracking-widest text-ink-black/50">
                Apr 2026
              </span>
            </div>

            <div className="md:w-3/4 space-y-4">
              <h4 className="text-2xl font-semibold text-oxblood font-eb-garamond">
                HTM-Based Continual Learning for Weather Nowcasting
              </h4>

              <p className="text-ink-black/80 leading-relaxed text-base">
                This experiment applies the Hierarchical Temporal Memory (HTM)
                algorithm to predict near-term aviation weather (METAR) by
                leveraging the model's inherent continual learning and temporal
                prediction capabilities. It utilizes specialized encoders for
                over 10 distinct meteorological variables across 5,000+
                observations to construct Sparse Distributed Representations
                (SDRs). Furthermore, a custom web UI was developed to visually
                track the evolution of the spatial pooler and temporal memory
                predictions in real-time.
              </p>

              <Link
                href={"https://github.com/SaM-0777/htm.core/tree/master/metar"}
                target="_blank"
                className="text-base font-medium hover:underline inline-flex items-center gap-0.5"
              >
                <span>Source Code</span>
                <span>
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative flex flex-col max-w-7xl mx-auto gap-12 p-6 md:p-8"
      >
        <h3 className="text-3xl font-semibold text-oxblood font-eb-garamond">
          Work Experience
        </h3>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 group">
            <div className="md:w-1/4 shrink-0 pt-1">
              <span className="text-sm font-semibold uppercase tracking-widest text-ink-black/50">
                Dec 2024 - Present
              </span>
            </div>

            <div className="md:w-3/4 space-y-3">
              <div>
                <h4 className="text-2xl font-semibold text-oxblood font-eb-garamond transition-all">
                  Machine Learning Engineer
                </h4>
                <h5 className="text-lg font-medium text-ink-black/70 mt-1">
                  YapdotMarket
                </h5>
              </div>

              <ul className="list-disc list-outside ml-5 text-ink-black/80 leading-relaxed space-y-2 text-base pt-2">
                <li>
                  Engineered ML-driven infrastructure for user content and activity workflows,
                  developing content ranking algorithms that optimize content delivery
                  and brand advertising reach based on real-time user engagement and
                  social graph metrics
                </li>
                <li>
                  Designed and implemented real-time data pipelines processing large-scale social and market signals, powering production reputation models for automated content filtering
                </li>
                <li>
                  Developed scalable event-driven systems and AI-assisted analytics pipelines, owning features from design through production and improving reliability, observability and iteration speed
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-12 group">
            <div className="md:w-1/4 shrink-0 pt-1">
              <span className="text-sm font-semibold uppercase tracking-widest text-ink-black/50">
                Mar 2024 - Dec 2024
              </span>
            </div>

            <div className="md:w-3/4 space-y-3">
              <div>
                <h4 className="text-2xl font-semibold text-oxblood font-eb-garamond transition-all">
                  Frontend Developer
                </h4>
                <h5 className="text-lg font-medium text-ink-black/70 mt-1">
                  BaseLayer LLC
                </h5>
              </div>

              <ul className="list-disc list-outside ml-5 text-ink-black/80 leading-relaxed space-y-2 text-base pt-2">
                <li>
                  Built and maintained the core Next.js frontend for RaaS platform,
                  focusing on creating intuitive interfaces for complex operational
                  workflows and data visualization
                </li>
                <li>
                  Engineered scalable integrations between user-facing dashboards and backend services,
                  utilizing REST APIs and gRPC to ensure seamless, real-time data delivery
                </li>
                <li>
                  Designed reusable component systems for rapid internal
                  prototypes, accelerating iteration cycles for monitoring
                  tools and deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="blogs"
        className="relative flex flex-col max-w-7xl mx-auto gap-12 p-6 md:p-8"
      >
        <h3 className="text-3xl font-semibold text-oxblood font-eb-garamond">
          Writings
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {blogData.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-mahogany/5 border border-ink-black/10 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <div className="h-48 w-full overflow-hidden bg-ink-black/5 relative shrink-0">
                <Image
                  src={post.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  width={640}
                  height={320}
                  alt={post.title}
                />
              </div>

              <div className="p-6 flex flex-col grow">
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-black/50 mb-3">
                  {post.date}
                </span>

                <h4 className="text-xl font-semibold text-oxblood mb-3 group-hover:text-oxblood/70 transition-colors leading-snug font-eb-garamond">
                  {post.title}
                </h4>

                <p className="text-ink-black/70 text-sm leading-relaxed mb-6 grow line-clamp-4">
                  {post.excerpt}
                </p>

                <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-oxblood">
                  Read Full Article
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="footer"
        className="relative flex flex-col max-w-7xl items-center justify-center mx-auto gap-12 p-6 md:p-8"
      >
        <p className="text-center max-w-136 text-oxblood font-eb-garamond text-lg">
          {`"I believe the human brain is the most advanced technology created by nature, which manifested the modern world. From agriculture to quantum mechanics, all came from an idea that rose first inside a human brain, and I believe general-purpose intelligence—such as inspired by the human brain that can adapt, learn, and navigate any environment—once achieved, will give rise to creative machines that can help us reach unimaginable boundaries"`}
        </p>
      </section>

      <footer className="relative flex flex-col w-full items-center justify-center mx-auto gap-12 p-6 md:p-8 border-t border-ink-black/10">
        <div className="">
          <p className="text-ink-black font-eb-garamond">Soumya Ranjan Sahu</p>
        </div>
      </footer>
    </main>
  );
}

